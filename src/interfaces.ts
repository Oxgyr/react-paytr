export interface IPaytrProps {
  order: IPaytrOrder;
  user: IPaytrUser;
  configs: IPaytrConfigs;
  tokenEndpoint:string;
  style:Object,
}

export interface IPaytrUser{
  email:string
  name:string
  address:string
  phone:string
  user_ip:string;
}


export interface IPaytrOrder {
  merchant_oid:string;
  basket:TBasket;
  payment_amount:string
  currency:string;
  no_installment:string;
  max_installment:string;
}

export interface IPaytrConfigs{
  timeout_limit:string,
  debug_on:string,
  test_mode:string,
  merchant_ok_url:string;
  merchant_fail_url:string;
  paytr_iframe_url:string
}

type product = string
type price = string
type amount = string
type products = [product, price, amount]
type TBasket = Array<products>