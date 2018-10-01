import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common'
// import LoginForm from '/.components/LoginForm'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
    		apiKey: 'AIzaSyCVCnthh1DF_YEUf4jknWrOZiiApUW1Zgk',
    		authDomain: 'auth-be421.firebaseapp.com',
    		databaseURL: 'https://auth-be421.firebaseio.com',
    		projectId: 'auth-be421',
    		storageBucket: 'auth-be421.appspot.com',
    		messagingSenderId: '839045318574'
  		});
	}

	render() {
		return (
				<View>
					// <Header headerText="Authentication" />
					<Text > what a shit?? </Text>
				</View>
			);
	}
}

export default App;