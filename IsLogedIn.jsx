import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthContext } from "./Auth"
import firebase from './firebase'

const IsLogedIn = (props) => {
  const { user, setUser } = useContext(AuthContext)

  // ログイン状態を確認する処理
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }, [])

  return (
    user ? props.children : <Redirect to={'/login'} />
  )
}

export default IsLogedIn
