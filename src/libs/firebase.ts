import { initializeApp } from "firebase/app";
import {
	User,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = (email: string, password: string): Promise<User> => {
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				resolve(user);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const login = (email: string, password: string): Promise<User> => {
	return new Promise((resolve, reject) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				resolve(user);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const logout = (): Promise<void> => {
	return new Promise((resolve, reject) => {
		signOut(auth)
			.then(() => {
				resolve();
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getUser = (): Promise<User | null> => {
	return new Promise((resolve) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				resolve(user);
			} else {
				resolve(null);
			}
		});
	});
};
