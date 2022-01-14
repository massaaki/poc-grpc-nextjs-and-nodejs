import { useEffect } from "react"


import { GRpcClient } from "../../services/grpc-client"


export const Chat = (): JSX.Element => {

  useEffect(() => {
    const client = new GRpcClient();
    client.initiate();

  }, [])
  return (
    <h1>Chat page</h1>
  )
}