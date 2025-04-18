import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../store";
import { login } from "../../store/authReducer";
import axios from "axios";

import styles from "./Auth.module.css";

const AUTH_URL: string = "/auth/login-with-address";

const Connect = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const auth = async (account: string) => {
    await axios
      .post(AUTH_URL, { address: account.toLowerCase() })
      .then((res: any) => {
        let data = res?.data;
        dispatch(login({ player: data?.player }));
        navigate("/dashboard");
      })
      .catch((err: any) => {
        console.log(err)
      });
  };

  const submitHandler = async () => {
    
  };

  return (
    <div
      className={styles.submitBtn}
      onClick={() => submitHandler()}
    >
      <img className={styles.img} src={`/images/meta.png`} alt="metamask" />
    </div>
  );
};

export default Connect;
