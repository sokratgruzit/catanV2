import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../store";
import { login } from "../../store/authReducer";
import { api } from "../../utils/api";
import { Button } from "../UI/button/Button";

import styles from "./Auth.module.css";

const LOGIN_URL = "/api/auth/login";
const REGISTER_URL = "/api/auth/register";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [flow, setFlow] = useState<string>("login");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = () => {
    try {
      if (email && password && name) {
        api
        .post(REGISTER_URL, { username: name, email, password })
        .then((res: any) => {
          let data = res.data;
          
          dispatch(login({ player: data }));

          setName("");
          setEmail("");
          setPassword("");
          setFlow("login");
        })
        .catch((err: any) => {
          console.log(err)
        });
      }
    } catch (err: any) {
      console.log(err)
    }
  };

  const handleLogin = async () => {
    try {
      if (email && password) {
        await api
        .post(LOGIN_URL, { email, password })
        .then((res: any) => {
          let data = res.data;
          console.log(data)
          if (data.status === "OK") {
            dispatch(login({ player: data.user }));
            setEmail("");
            setPassword("");
            navigate("/dashboard");
          }
        })
        .catch((err: any) => {
          console.log(err)
        });
      }
    } catch (err: any) {
      console.log(err)
    }
  };

  return (
    <>
      <input
        className={styles.input}
        placeholder="Enter your email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className={styles.input}
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {flow === "register" && <input
        className={styles.input}
        placeholder="Your Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />}
      <div className={styles.link} onClick={() => setFlow(prev => prev === "login" ? "register" : "login")}>
        {flow === "login" ? "Registration?" : "Login?"}
      </div>
      <Button
        title={flow === "login" ? "Sign In" : "Register"}
        onClick={flow === "login" ? handleLogin : handleRegister}
        color="#E94560"
      />
    </>
  );
};

export default SignIn;
