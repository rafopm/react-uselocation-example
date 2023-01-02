import React from "react";
import { useEffect } from "react";

export default function Form() {
  const users = [
    {
      username: "admin1",
      password: "12345678",
    },
    {
      username: "admin2",
      password: "012345678",
    },
  ];

  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const checkUser = () => {
    const usercheck = users.find(
      (user) =>
        user.username === userData.username &&
        user.password === userData.password
    );
    if (usercheck) {
      console.log("Login successful");
    } else {
      console.log("Wrong password or username");
    }
    // console.log(uname);
    console.log(usercheck);
  };

  useEffect(() => {
    checkUser(users);
  }, [userData.username, userData.password]);

  console.log(userData);

  return (
    <div className="">
      <label className="">
        Usuario:
        <input
          className=""
          name="username"
          value={userData.username}
          placeholder="Username"
          aria-describedby="descripcionUsuario"
          required
          onChange={handleInputChange}
        />
      </label>
      <label className="">
        Password:
        <input
          className=""
          type="text"
          name="password"
          value={userData.password}
          placeholder="Password"
          aria-describedby="descripcionContra"
          required
          onChange={handleInputChange}
        />
      </label>
      <input className="" type="submit" onClick={checkUser} value="ENVIAR" />
    </div>
  );
}
