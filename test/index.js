import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0rdk0YwNoskmeO1d73dTv2HD_jcmBqc",
  authDomain: "burnished-edge-325304.firebaseapp.com",
  projectId: "burnished-edge-325304",
  storageBucket: "burnished-edge-325304.appspot.com",
  messagingSenderId: "963289767813",
  appId: "1:963289767813:web:5b410eae8bf2da49f22eec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
