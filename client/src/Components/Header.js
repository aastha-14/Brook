import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
  return (
    <div className="ui pointing secondary menu">
      <Link to="/" className="item">
        <h2>Brook</h2>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          <h3>All Streams</h3>
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
