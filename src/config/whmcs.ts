export const whmcsConfig = {
  // PLACEHOLDER: Replace with the real Dotmac Cloud client-area domain before production.
  baseUrl: "https://CLIENT-AREA-DOMAIN.example",
  clientLoginUrl: "https://CLIENT-AREA-DOMAIN.example/clientarea.php",
  domainSearchUrl: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&domain=register",
  domainTransferUrl: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&domain=transfer",
  productUrls: {
    launch: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&pid=LAUNCH_PID",
    grow: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&pid=GROW_PID",
    business: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&pid=BUSINESS_PID",
    businessPlus: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&pid=BUSINESS_PLUS_PID",
    pro: "https://CLIENT-AREA-DOMAIN.example/cart.php?a=add&pid=PRO_PID",
  },
} as const;

export type WhmcsConfig = typeof whmcsConfig;
