// const { NODE_ENV } = process.env;

const url = {
  baseUrl: pattern =>
    `https://api-search.staging.win.gg/search?q=${pattern}&index=tournament`
};

export { url };
