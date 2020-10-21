> Uyarı : Bu Paytr'in resmi react componenti değildir. Kullanıcıların geliştirme hızlarını arttırmak için yazılmış açık kaynak kodlu react componentidir.

# **ReactPaytr**

**Herşeyden önce**

Bu component 'i kullanmadan önce :

1.  Paytr başvurunuzdan sonra sahip olacağınız bilgiler ile hesabınıza giriş yapın.
2.  Paytr'ın sağladığı parametreler ile paytr'a istek yollayabilecek http isteklerini yazın veya [node-paytr](https://www.npmjs.com/package/node-paytr) paketini kullanın.(node-js backendiniz varsa)
3.  Yukarıdaki işlemler sonunda elinizde token dönen bir post istek olmalı.

---

Bu Paytr iframe'i için gereken token için http isteğini kolaylaştırmak için yazılmış bir react componenti.

Bu component belirlenen token endpointine props olarak sağladığınız parametreler ile istek yapar ve backendinizden dönen token ile iframe render eder.

## ReactPaytr Props

| İsim          | Açıklama                                | Zorunlu | Tip    |
| ------------- | --------------------------------------- | ------- | ------ |
| user          | kullanıcı bilgilerinin sağlandığı props | evet    | object |
| configs       | paytr ayarlarının belirlendiği props    | evet    | object |
| order         | sipariş detaylarının belirlendiği props | evet    | object |
| tokenEndpoint | sipariş detaylarının belirlendiği props | evet    | string |
| style         | sipariş detaylarının belirlendiği props | evet    | object |

---

Şuan için default props ları şuraya koyalım dökümantasyon en yakın sürede yazılacak :)

```js
static  defaultProps:  IPaytrProps  = {

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
```
