import { useEffect } from "react"
// import { GRpcClient } from "../../services/grpc-client"

import { HelloRequest } from '../../../../grpc-contracts/src/hello-contract/hello-contract_pb'
import { HelloServiceClient } from '../../../../grpc-contracts/src/hello-contract/Hello-contractServiceClientPb'

export const Chat = (): JSX.Element => {

  async function testSendHello() {
    const client = new HelloServiceClient('http://localhost:50502');
    const request = new HelloRequest();
    request.setMessage('hello world');
    const response = await client.sayHello(request, {}).catch(console.error);
    console.log(response);
  }

  useEffect(() => {
    testSendHello();

  }, [])
  return (
    <h1>Chat page</h1>
  )
}