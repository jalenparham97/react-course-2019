import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBxCC8LqcqFhuUsOd26Rm2FXnoigOWBsgs',
  authDomain: 'react-ecommerce-4694e.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-4694e.firebaseio.com',
  projectId: 'react-ecommerce-4694e',
  storageBucket: '',
  messagingSenderId: '360911521171',
  appId: '1:360911521171:web:7cda6ceaac5ab7ae'
}

firebase.initializeApp(config)

export default firebase
