import Form from "./Form";
import Logo from "./Logo";
import SubmitButton from "./SubmitButton";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.body}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <br />
      <div>
        <Form message={"이름"} />
      </div>
      <br />
      <div>
        <Form message={"이메일"} />
      </div>
      <br />
      <div>
        <Form message={"아이디"} />
      </div>
      <br />
      <div>
        <Form message={"비밀번호"} />
      </div>
      <br />
      <br />
      <span className={styles.loginButton}>
        <SubmitButton message={"회원가입"} />
      </span>
    </div>
  );
}
