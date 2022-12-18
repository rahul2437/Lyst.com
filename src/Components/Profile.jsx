import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/AuthReducer/action";
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.AuthReducer.user);

  return (
    <div className={styles.main}>
      <div>
        <div>
          <img className={styles.userPhoto} src={user?.photoURL} alt="Avatar" />
        </div>
        <div>
          <p className={styles.userName}>{user?.displayName}</p>
        </div>
      </div>
      <div>
        <button
          className={styles.logoutButton}
          onClick={() => dispatch(Logout())}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
