import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

export class FirebaseService {
  static #firebaseConfig: object = {
    apiKey: import.meta.env.VITE_FIREBASE_apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_authDomain,
    projectId: import.meta.env.VITE_FIREBASE_projectId,
    storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_appId,
    measurementId: import.meta.env.VITE_FIREBASE_measurementId,
  };

  static #firebaseApp: FirebaseApp = initializeApp(this.#firebaseConfig);
  static #firestoreDB: Firestore = getFirestore(this.#firebaseApp);
  static #auth: Auth = getAuth(this.#firebaseApp);

  private constructor() {}

  public static get db(): Firestore {
    return this.#firestoreDB;
  }

  public static get auth(): Auth {
    return this.#auth;
  }
}
