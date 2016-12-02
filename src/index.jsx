import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDlLM8uaswuFd7P3FONwogBwLWA2oB5lJQ',
  authDomain: 'curso-react-eebb9.firebaseapp.com',
  databaseURL: 'https://curso-react-eebb9.firebaseio.com',
  storageBucket: 'curso-react-eebb9.appspot.com',
  messagingSenderId: '301349844636'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
