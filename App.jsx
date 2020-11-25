
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Auth from './Auth'
import IsLogedIn from './IsLogedIn'
import LoginCheck from './LoginCheck.jsx'

import ChatPage from './ChatPage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

function App() {

  return (
    <Auth>
      <BrowserRouter>
        <LoginCheck />
        <Link to="/">Chat</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <IsLogedIn>
            <Route exact path="/" component={ChatPage} />
          </IsLogedIn>
        </Switch>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
