// ============================================
// Firebase Configuration
// ============================================
// 1. Go to Firebase Console → Project Settings → General
// 2. Scroll to "Your apps" → Web app → copy the config object
// 3. Paste your real values below (replace every "YOUR_..." placeholder)

const firebaseConfig = {
  apiKey: "AIzaSyB_wweZbNAQFBrdu_rvZ4Gkx_rY6YITbEs",
  authDomain: "coffee-app-ef845.firebaseapp.com",
  projectId: "coffee-app-ef845",
  storageBucket: "coffee-app-ef845.firebasestorage.app",
  messagingSenderId: "52038763800",
  appId: "1:52038763800:web:936248e91847a7c6e40a6d"
};

// Initialize Firebase (compat SDK — works with plain <script> tags, no build step)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
