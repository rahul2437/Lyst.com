//Write the ActionCreator functions here
import axios from "axios";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, database } from "../../utils/firebase";
import * as types from "./actionTypes"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";


const emailLogin = (payload) => dispatch => {
  const { email, password } = payload;
  dispatch({ type: types.LOGIN_REQUEST });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({ type: types.LOGIN_SUCCESS, payload: user })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  // return axios
  //   .post("https://reqres.in/api/login", payload)
  //   .then(r => {
  //     dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
  //   })
  //   .catch(e => {
  //     dispatch({ type: types.LOGIN_FAILURE });
  //   })
}



const googleProvider = new GoogleAuthProvider();

const GoogleLogin = () => async dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch({ type: types.LOGIN_SUCCESS, payload: result?.user })
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};

const Logout = () => dispatch => {
  auth.signOut();
  dispatch({ type: types.LOGOUT_REQUEST })
}
export { emailLogin, GoogleLogin, Logout };