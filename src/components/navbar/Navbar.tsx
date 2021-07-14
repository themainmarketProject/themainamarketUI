import React, { useState, useEffect } from 'react';
import DropDown from '../dropDown';
import jwt_decode from "jwt-decode";
import getToken from "../../lib/getToken";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Navbar.css';

function Navbar() {
  // const [title, setTitle] = useState('User');
  const [user, setUser] = useState<string | null>('');
  useEffect(() => {
    let token = getToken('myToken');
    if(token === 'user') {
      setUser('user');
    } else {
      token = jwt_decode(token!);
      let name: any = token;
      name = name["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"].split('@')
      setUser(name[0]);
    }
  }, [])
    return (
      <section className="navbar">
        <DropDown user={user} />
        <a href="/" className="navbar-item">
          <LiveHelpIcon />
          Help
        </a>
        <a href="/" className="navbar-item">
          <ShoppingCartOutlinedIcon />
          Cart
        </a>
        <a href="/signin" className="navbar-item">Login</a>
      </section>
    );
}

export default Navbar;
