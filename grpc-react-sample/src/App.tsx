import React, { useEffect } from 'react';

import { HelloRequest } from './contracts/hello-contract/hello-contract_pb'
import { HelloServiceClient } from './contracts/hello-contract/Hello-contractServiceClientPb'


function App() {
  async function testSendHello() {
    const client = new HelloServiceClient('http://localhost:8080');
    const request = new HelloRequest();
    request.setMessage('hello world');
    const response = await client.sayHello(request, {}).catch(console.error);
    console.log(response);
  }
  useEffect(() => {
    testSendHello();

  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
