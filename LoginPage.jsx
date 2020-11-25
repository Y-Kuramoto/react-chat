import React, { useState, useContext } from 'react'
import firebase from "./firebase"
import { AuthContext } from "./Auth"
import { useHistory } from 'react-router-dom'

import LinkButton from "./LinkButton"

import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"



const LoginPage = () => {
  const { user, setUser } = useContext(AuthContext)
  const history = useHistory()
  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setUser(true)
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user)
          }
        });
        alert('ログインしました！')
        history.push('/')
      }).catch((error) => {
        console.log("ERROR: " + error.message)
      });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} style={{ width: "300px", margin: "28px auto" }}>
      <Paper variant="outlined">
        <Box p={4}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <h1>LOGIN</h1>
            <Grid item xs>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </Grid>
            <Grid item xs={24}>
              <TextField
                label="password"
                variant="outlined"
                value={password}
                type="Password"
                fullWidth
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </Grid>
          </Grid>
          <Box m={2}>
            <Button fullWidth variant="contained" color="primary" type="submit">送信</Button>
          </Box>
          <Box m={2}>
            <LinkButton path="/signup" color="secondary">
              sign up!!
              </LinkButton>
          </Box>
        </Box>
      </Paper>
    </form>
  )
}

export default LoginPage