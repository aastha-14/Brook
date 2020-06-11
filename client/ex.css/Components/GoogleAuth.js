import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions';

class GoogleAuth extends Component{

  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '359278469940-2jgdnorma6c9nu945o4htrb77nk88jmu.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }else {
      this.props.signOut();
    }
  };

  onSignInClick = () =>{
    this.auth.signIn();
  };

  onSignOutClick = () =>{
    this.auth.signOut();
  };

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    }else if(this.props.isSignedIn){
      return(
        <div className="item">
          <button className="ui red google button compact" onClick={this.onSignOutClick}>
          <i className="google icon" />Sign Out</button>
        </div>
      );
    }else{
      return (
        <div className="item">
          <button className="ui red compact button compact" onClick={this.onSignInClick}>
          <i className="google icon" />Sign In</button>
        </div>
      );
    }
  }

  render(){
    return(
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) =>{
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
