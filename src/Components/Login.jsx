import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  if (user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          style={{
            border: "1px solid black",
            padding: "5px",
            backgroundColor: "red",
          }}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <h2>Sign Up</h2>
        <div>
          <button
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
            onClick={GoogleLogin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
};

export default Login;
