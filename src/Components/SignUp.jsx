import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin, login } from "../Redux/AuthReducer/action";
import { auth } from "../utils/firebase";

const SignUp = () => {
  const [user, loading] = useAuthState(auth);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  if (user)
    return (
      <div>
        <button onClick={() => dispatch(GoogleLogin())}>
          Sign In with google
        </button>
      </div>
    );
  else
    return (
      <div>
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    );
};

export default SignUp;
