import React, { useContext, useEffect } from 'react'
import { AuthContext } from "./Auth"
import firebase from './firebase'

const LoginCheck = () => {
  const { setUser } = useContext(AuthContext)

  // ログイン状態を確認する処理
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }, [])

  return null
}

export default LoginCheck