import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/cktq1ae471wz901yzaer0byxh/master",
  cache: new InMemoryCache(),
});

export default client;
