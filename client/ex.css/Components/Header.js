import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
  return (
    <div className="ui pointing secondary menu">
        <div className="item"><i className="tv icon large" />
        <Link to="/" className="item">
          <h2>Brook</h2>
        </Link></div>
      <div className="right menu">
      <div className="item">
        <Link to="/" className="item">
          <h3>All Streams</h3>
        </Link>
        <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
