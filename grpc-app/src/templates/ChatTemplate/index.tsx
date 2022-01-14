import React, { useEffect, useRef, useState } from "react"
import { ChatServiceClient } from "../../contracts/chat-contract/Chat-contractServiceClientPb";
import { InitiateRequest, MessageRequest, Status, StreamMessage, StreamRequest, User, UserStreamResponse } from "../../contracts/chat-contract/chat-contract_pb"



export const ChatTemplate = (): JSX.Element => {
  const client = useRef<ChatServiceClient>();
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User.AsObject>();

  const [users, setUsers] = useState<Array<User.AsObject>>([]);
  const [msgs, setMsgs] = useState<Array<StreamMessage.AsObject>>([]);

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;
    try {
      client.current = new ChatServiceClient(`http://localhost:8080`);
      const req = new InitiateRequest()
      req.setName(username);
      req.setAvatarUrl('no-avatar');

      client.current.chatInitiate(req, {}, (err, response) => {
        const { id } = response.toObject();

        setUser({
          id,
          name: username,
          avatarUrl: 'no-avatar',
          status: String(Status.ONLINE)
        })
      });


    } catch (err) {
      console.log(err);
    }
  }


  const sendMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target['message'].value;
    if (!message || !user) return;

    const req = new MessageRequest();
    req.setId(user.id);
    req.setMessage(message);

    console.log('enviando mensagem...');
    client.current.sendMessage(req, {}, (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('mensagem enviada com sucesso!');
      console.log(response);
    })



    e.target['message'].value = "";
  }

  useEffect(() => {
    if (!user) return;

    const req = new StreamRequest();
    req.setId(user.id);

    console.log('user setted..:', user);
    // //chat stream
    (() => {
      const stream = client.current.chatStream(req, {});
      stream.on("data", (chunk) => {
        const msg = (chunk as StreamMessage).toObject();
        console.log(msg);

        setMsgs((prev) => [...prev, msg])
      })
    })();

    // //user stream
    (() => {
      const stream = client.current.userStream(req, {});
      stream.on("data", (chunk) => {
        console.log('userStream', chunk);
        const users = (chunk as UserStreamResponse).toObject().usersList;
        setUsers(users);
      })
    })();

  }, [user])


  useEffect(() => {
    console.log('users', users);
    console.log('msgs', msgs);

  }, [msgs, users]);



  return (
    <>
      <h1>Chat page</h1>
      <p>Status: {user ? 'Online' : 'Offline'}</p>
      <form>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        <input type="submit" onClick={handleUsernameSubmit} value="Logar" />
      </form>
      <br />
      <form onSubmit={sendMessageSubmit}>
        <input type="text" name="message" />
        <input type="submit" value="Enviar mensagem" />
      </form>
    </>

  )
}