import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from "./Auth"
import firebase, { db } from "./firebase"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

const ChatPage = () => {
  const { setUser } = useContext(AuthContext)
  const [userName, setUserName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const submit = () => {
    firebase.firestore().collection("messages").add({
      name: userName,
      content: message,
    }).then(function (docRef) {
      console.log("成功！");
    })
      .catch(function (error) {
        console.error("失敗");
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserName(user.displayName)
    })
  }, [])

  useEffect(() => {
    firebase.firestore().collection("messages").get().then((docs) => {
      const getMessages = []
      docs.forEach((doc) => {
        console.log(doc.data())
        getMessages.push(doc.data())
      })
      console.log(getMessages)
      setMessages(getMessages)
    })
  }, [])



  const logout = () => {
    firebase.auth().signOut().then(() => {
      setUser(false)
    }).catch((error) => {
      console.log(error)
    });
  }

  // **collectionの例**
  // const messages = {
  //   SRB5ZgjE7dNuVvCxi96p: {
  //     name: "",
  //     content: "",
  //   },
  //   SRB5ZgjE7dNuVvCxi96p: {
  //     name: "",
  //     content: "",
  //   },
  //   SRB5ZgjE7dNuVvCxi96p: {
  //     name: "",
  //     content: "",
  //   },
  // }

  return (
    <div>
      <h1>Chat Page</h1>
      <p>こんにちは！{userName}さん！</p>
      <hr />
      {messages.map((message, index) => <p className="box">{message.name}: {message.content}</p>)}
      <hr />
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={submit}
      >
        send
      </Button>

      {/* <Button
        variant="contained"
        fullWidth
        onClick={logout}
      >
        Logout
      </Button> */}
    </div>
  )
}
export default ChatPage
