import { LuUserCircle } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Button from "./UI/Button";
import styles from "../assets/styles/components/SignUpForm.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { useNavigate } from "react-router-dom";
import { checkFormValid } from "../utils/checkFormValid";
import { useInput } from "../hooks/useInput";
import PasswordInput from "./PasswordInput";
import { signUpUser } from "../store/reducers/userSlice";
import ValidatedField from "./UI/ValidatedField";
import { emailVerification } from "../firebase/userAPI";

const SignUpForm = () => {
  const nickName = useInput("", { isEmpty: true, minLength: 3 }, "Nickname");
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput(
    "",
    { isEmpty: true, minLength: 6, maxLength: 20 },
    "Password"
  );
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const { isLoading } = useTypeSelector((state) => state.userReducer);
  const isFromDisabled = checkFormValid([
    nickName.isValid,
    email.isValid,
    password.isValid,
    !isLoading,
  ]);
  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(
      signUpUser({
        email: email.value,
        password: password.value,
        name: nickName.value,
      })
    );
    await emailVerification();
    navigate("/dashboard");
  };

  return (
    <form className={styles["sign-form"]} onSubmit={(e) => signUpHandler(e)}>
      <ValidatedField
        input={nickName}
        fieldIcon={<LuUserCircle />}
        placeholder="Nickname"
      />
      <ValidatedField
        input={email}
        fieldIcon={<MdOutlineAlternateEmail />}
        placeholder="Email address"
      />
      <PasswordInput password={password} />
      <div className={styles.submit}>
        <Button mode="primary" type="submit" disabled={isFromDisabled}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
