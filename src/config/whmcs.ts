const portal = "https://cloud.dotmac.ng/whmcs";

export const whmcsConfig = {
  baseUrl: portal,
  clientLoginUrl: `${portal}/clientarea.php`,
  domainSearchUrl: `${portal}/cart.php?a=add&domain=register&currency=2`,
  domainTransferUrl: `${portal}/cart.php?a=add&domain=transfer&currency=2`,
  productUrls: {
    launch: `${portal}/cart.php?a=add&pid=1&currency=2`,
    grow: `${portal}/cart.php?a=add&pid=2&currency=2`,
    business: `${portal}/cart.php?a=add&pid=3&currency=2`,
    businessPlus: `${portal}/cart.php?a=add&pid=4&currency=2`,
    pro: `${portal}/cart.php?a=add&pid=5&currency=2`,
  },
} as const;

export type WhmcsConfig = typeof whmcsConfig;
