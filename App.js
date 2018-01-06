/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';


//SearchPage component
class SearchPage extends Component < {} > {
  render() {
    return <Text style = {
      styles.description
    } > Search
    for houses to buy! < /Text>;
  };
}

//Construct a navigation controller, set the initial route to the SearchPage component
export default class App extends Component < {} > {
  render() {
    return ( <
      NavigatorIOS style = {
        styles.container
      }
      initialRoute = {
        {
          title: 'Property Finder',
          component: SearchPage,
        }
      }
      />
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});