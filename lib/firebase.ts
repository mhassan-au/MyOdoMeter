/**
 * File: lib/firebase.ts
 * Project: MyOdoMeter
 * Purpose:
 *   Creates and exports the shared Firebase instances (Firestore and Auth)
 *   used throughout the application.
 *
 * Used by:
 *   - lib/logbooks.ts
 *   - future auth and data services
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// -----------------------------------------------------------------------------
// Create and export the Firebase application instance
// -----------------------------------------------------------------------------
const app = initializeApp(firebaseConfig);

// -----------------------------------------------------------------------------
// Export shared Firebase services
// -----------------------------------------------------------------------------
export const db = getFirestore(app);
export const auth = getAuth(app);
