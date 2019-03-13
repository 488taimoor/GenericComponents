
import React, { Component } from "react";
import { connect } from "react-redux";

import {View, Text, ActivityIndicator} from 'react-native'


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    // login_status: state.loginReducer.login_status,
    // userData: state.loginReducer.userData,
    // error:state.loginReducer.error
  };
  
};

const mapDispatchToProps = (dispatch) => {

  return {

    // handleLogin: (loginData) => {dispatch(userServer.handleSignIn(loginData))},
    // handleBackClick : (usertoken) =>{dispatch(loginServer.handleSignOut(usertoken)) },
    // CreateButton : () =>{ dispatch({ type: register_Actions.register_Create.NEW }) }
  };
};

class Login_View extends Component {

  getScreen(status) {
      switch (status) {
        
        default:
          break;
      }

    
  }

  render() {
    return (
      <View>
          {this.getScreen()}
          </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login_View);

