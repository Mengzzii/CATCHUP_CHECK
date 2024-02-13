import Form from "./Form";
import Logo from "./Logo";
import SubmitButton from "./SubmitButton";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <br />
      <div className={styles.input}>
        <div>
          <Form text="아이디" />
        </div>
        <br />
        <div>
          <Form text="비밀번호" />
        </div>
      </div>
      <br />
      <br />
      <SubmitButton message={"로그인"} />
      <h5>회원가입</h5>
    </div>
  );
}
