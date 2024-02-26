import styles from "../assets/styles/components/LogInForm.module.scss";
import { useInput } from "../hooks/useInput";
import Button from "./UI/Button";
import { LuUserCircle } from "react-icons/lu";
import PasswordInput from "./PasswordInput";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { logInUser } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { checkFormValid } from "../utils/checkFormValid";
import ValidatedField from "./UI/ValidatedField";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { logInMessage } from "../data/notificationMessages";

const LogInForm = () => {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput(
    "",
    { isEmpty: true, minLength: 6, maxLength: 20 },
    "Password"
  );
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const { isLoading } = useTypeSelector((state) => state.userReducer);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await dispatch(
        logInUser({ email: email.value, password: password.value })
      ).unwrap();
      if (res.id) navigate("/dashboard");
    } catch (error) {
      dispatch(addNotification(logInMessage));
    }
  };
  const isFormDisabled = checkFormValid([
    email.isValid,
    password.isValid,
    !isLoading,
  ]);
  return (
    <form className={styles["log-in-form"]} onSubmit={submitHandler}>
      <ValidatedField
        input={email}
        fieldIcon={<LuUserCircle size="1.5rem" color="#3f707d" />}
        placeholder="Email address"
      />
      <PasswordInput password={password} />
      <span className={styles.forgot}>Forgot Password?</span>
      <Button
        mode="primary"
        width="60%"
        type="submit"
        disabled={isFormDisabled}
      >
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
