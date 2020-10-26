import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDqOHaATmz4n_KqmfH0YAMvbQDBplSn_ug",
    authDomain: "everettbeachproperties-88a28.firebaseapp.com",
    databaseURL: "https://everettbeachproperties-88a28.firebaseio.com",
    projectId: "everettbeachproperties-88a28",
    storageBucket: "everettbeachproperties-88a28.appspot.com",
    messagingSenderId: "562903998567",
    appId: "1:562903998567:web:5b87c039e0404e7bbfb4c2",
    measurementId: "G-4B61K1RWMM"
};

firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;