import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../util/axioswithAuth";


function UserAccount() {

    const [user,setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    axiosWithAuth()
      .get(`/user/${user}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>
      <i class="fas fa-user-secret sec"></i>
      <h1>Username : {user.username}</h1>
      <h1>Email: {user.email}</h1>
      
  </div>;
}

export default UserAccount;
