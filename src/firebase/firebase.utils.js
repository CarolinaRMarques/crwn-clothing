import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD7NQGOI0zhFt6KnlvgC-nVRhMa_AKDzWw",
	authDomain: "crwn-db-c4811.firebaseapp.com",
	projectId: "crwn-db-c4811",
	storageBucket: "crwn-db-c4811.appspot.com",
	messagingSenderId: "945934218498",
	appId: "1:945934218498:web:46ed8e7ec86cbfb168be1b",
	measurementId: "G-N2T0PYY6ME",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
