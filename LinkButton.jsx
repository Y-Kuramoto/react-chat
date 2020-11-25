import React from 'react'
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom"

const LinkButton = ({ path, color, children }) => {
  const history = useHistory()
  return (
    <Button
      variant="contained"
      color={`${color ? color : "primary"}`}
      onClick={() => history.push(path)}
      fullWidth
    >
      {children}
    </Button >
  )
}

export default LinkButton
