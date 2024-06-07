import { useHgraph } from '@hgraph.io/sdk';
import { useCallback, useEffect, useState } from 'react';
import JSONPretty from 'react-json-pretty';

const LatestTransaction = `
query LatestTransaction {
  transaction(limit: 3, order_by: {consensus_timestamp: desc}) {
    id,
    consensus_timestamp
  }
}`;

export default function GraphqlComponent() {
  const hgClient = useHgraph();
  const [result, setResult] = useState();

  const getTransactions = useCallback(async () => {
    const response = await hgClient.query(LatestTransaction);
    setResult(response);
  }, [hgClient]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return <>
    {result && <JSONPretty id="json-pretty" data={result}></JSONPretty>}
    {!result && <div>Loading...</div>}
  </>
}