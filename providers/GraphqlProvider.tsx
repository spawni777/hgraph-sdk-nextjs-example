// Provide "use client" here to make this component and subcomponents rendered at client side
// https://nextjs.org/docs/app/building-your-application/rendering/client-components
"use client"
import { default as Client, HgraphProvider, Network, Environment } from '@hgraph.io/sdk';
import HgraphComponent from '../components/GraphqlComponent';

const options = {
  network: Network.HederaMainnet,
  environment: Environment.Production,
};

const client = new Client(options);

export default function GraphqlProvider() {
  return <HgraphProvider client={client}>
    <HgraphComponent/>
  </HgraphProvider>
}

