import React, { CSSProperties } from "react";
import { getAccessToken, getUser, getUserProfile, isUserLoggedIn } from "../store/oidc/selectors";

class Blank extends React.Component {
  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log("Blank!")
      console.log("AccessToken:"+getAccessToken)
      console.log("User:"+getUser)
      console.log("UserProfile:"+getUserProfile)
      console.log("IsUserLoggedIn?"+isUserLoggedIn)
    }

    var WebFont = require('webfontloader');

    WebFont.load({
      google: {
        families: [
          'Red Hat Display',
          'Red Hat Text',
          'Style Script',
          'Ubuntu'
        ]
      }
    });

    return (
      <div style={styles.root}>
        <h4 style={{fontFamily: "Red Hat Text, sans-serif"}}>Please log in to use this service.</h4>
        <span style={{padding: '2em'}}/>
        <span/>
          <span style={{fontFamily: "Red Hat Text, sans-serif"}}>This page intentionally left blank.</span>
        <span/>
        <span style={{fontFamily: "Ubuntu, sans-serif", bottom: '1em', position:'absolute'}}>
          <small>This application is running in <strong>{process.env.NODE_ENV}</strong> mode.</small>
        </span>
      </div>
    );
  }
}

// https://stackoverflow.com/a/63086155
export interface StylesDictionary{
  [Key: string]: CSSProperties;
}

// https://stackoverflow.com/a/63086155
const styles: StylesDictionary = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1
  }
}

export default Blank;
