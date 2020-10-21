import React from "react";
import { uuid } from "uuidv4";
import { IPaytrProps } from "./interfaces";
import publicIp from "public-ip";

export default class Paytr extends React.Component {
  static defaultProps: IPaytrProps = {
    configs: {
      timeout_limit: "30",
      debug_on: "1",
      test_mode: "0",
      merchant_ok_url: window.location.href,
      merchant_fail_url: window.location.href,
      paytr_iframe_url: "https://www.paytr.com/odeme/guvenli/",
    },
    order: {
      merchant_oid: uuid(),
      basket: [],
      payment_amount: "1000",
      currency: "TL",
      no_installment: "1",
      max_installment: "0",
    },
    user: {
      email: "",
      name: "",
      address: "",
      phone: "",
      user_ip: "127.0.0.1",
    },
    tokenEndpoint: "",
    style: {},
  };
  constructor(props: IPaytrProps) {
    super(props);
    this.state = {
      loading: false,
      string: "",
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { tokenEndpoint, user, configs, order }: any = this.props;
    if (tokenEndpoint) {
      try {
        const ipv4 = await publicIp.v4();
        const response = await fetch(tokenEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: { ...user, user_ip: ipv4 },
            configs,
            order,
          }),
        });
        if (response.status === 200) {
          const { token } = await response.json();
          this.setState({ token, loading: false });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    const { token, loading }: any = this.state;
    const { configs, style }: any = this.props;
    return (
      <>
        {!loading && token ? (
          <iframe
            src={`${configs.paytr_iframe_url}/${token}`}
            id="paytriframe"
            frameBorder="0"
            scrolling="no"
            style={style}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
