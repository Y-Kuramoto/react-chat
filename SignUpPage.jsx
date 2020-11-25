import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import firebase from "./firebase"

const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("アカウントを新規作成しました！")
        // ユーザー情報の設定
        firebase.auth()
          .currentUser
          .updateProfile({
            displayName: name
          }).then(() => {
            console.log("displayNameが登録されました！")
          }).catch(() => {
            console.log("失敗")
          });
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} style={{ width: "300px", margin: "28px auto" }}>
      <Paper variant="outlined">
        <Box p={4}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <h1>SIGNUP</h1>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="password"
                variant="outlined"
                value={password}
                type="Password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </Grid>
          </Grid>
          <Box m={2}>
            <Button fullWidth variant="contained" color="secondary" type="submit">送信</Button>
          </Box>
        </Box>
      </Paper>
    </form>
  )
}

export default SignUpPage
