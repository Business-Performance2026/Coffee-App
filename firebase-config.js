// ============================================
// Firebase Configuration
// ============================================
// 1. Go to Firebase Console → Project Settings → General
// 2. Scroll to "Your apps" → Web app → copy the config object
// 3. Paste your real values below (replace every "YOUR_..." placeholder)

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (compat SDK — works with plain <script> tags, no build step)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
