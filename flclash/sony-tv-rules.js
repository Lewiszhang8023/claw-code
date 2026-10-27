const main = (config) => {
  const name = "Sony-TV-VMess";
  if (!Array.isArray(config.proxies) || !config.proxies.some(p => p.name === name)) {
    throw new Error("Proxy not found: " + name);
  }
  config.rules = [
    "GEOSITE,CN,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH," + name
  ];
  return config;
};
