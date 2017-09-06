import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA_9VpHPRHh_PEEIYfeRyhYZ4v0PY8iP-A",
    authDomain: "react-todo-app-8e60f.firebaseapp.com",
    databaseURL: "https://react-todo-app-8e60f.firebaseio.com",
    projectId: "react-todo-app-8e60f",
    storageBucket: "react-todo-app-8e60f.appspot.com",
    messagingSenderId: "945685757549"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Quentin',
    age: 25
  }
});

firebaseRef.child('app').once('value').then((snapshot)=>{
  console.log('this is database', snapshot.key, snapshot.val());
},(e)=>{
  console.log('ERROR !');
});

firebaseRef.on('value', (snapshot)=>{
  console.log('got value', snapshot.val());
});

firebaseRef.update({isRunning: false});
