import initializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const UseFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // Google sign in
  // Handle Google Sgin in
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // registerFunction
  const registerFunction = (email, password, name, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const user = userCredential.user;
        const info = { ...user, displayName: name };
        setUser(info);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        saveUser(email, name);
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  const loginFunction = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const redirect_uri = location.state?.from || "/";
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const saveUser = (email, displayName) => {
    const newuser = { email, displayName };
    fetch(`https://stormy-bayou-66113.herokuapp.com/user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`your information saved`);
        }
      });
  };

  useEffect(() => {
    fetch(`https://stormy-bayou-66113.herokuapp.com/user/${user.email}`, {})
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    registerFunction,
    user,
    error,
    isloading,
    signInGoogle,
    loginFunction,
    logout,
    admin,
  };
};

export default UseFirebase;
