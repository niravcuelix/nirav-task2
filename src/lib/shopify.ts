import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const SHOPIFY_STOREFRONT_ACCESS_TOKEN = '5edba302012e374a471d132e1b377830';
const SHOPIFY_STORE_DOMAIN = 'healf-dev.myshopify.com';

const httpLink = createHttpLink({
  uri: `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});