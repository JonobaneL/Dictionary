import { MdOutlineAlternateEmail } from "react-icons/md";
import { updateUserEmail } from "../firebase/userAPI";
import { useInput } from "../hooks/useInput";
import ValidatedField from "./UI/ValidatedField";
import Button from "./UI/Button";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { SettingsFormProps } from "../models/SettingsFormsProps";
import { formsMessage } from "../utils/formsMessage";

const EmailForm = ({ setModal }: SettingsFormProps) => {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const dispatch = useTypeDispatch();
  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUserEmail(email.value);
      const message = formsMessage("Email");
      dispatch(addNotification(message));
      setModal(false);
    } catch (err) {
      console.log(err);
      dispatch(
        addNotification({ type: "error", content: "Verify you current email" })
      );
    }
  };
  return (
    <form onSubmit={handler}>
      <ValidatedField
        input={email}
        fieldIcon={<MdOutlineAlternateEmail size="1.6rem" color="#3f707d" />}
        placeholder="Email address"
      />
      <div style={{ height: "1.5rem" }} />
      <Button
        mode="primary"
        align="center"
        width="60%"
        type="submit"
        disabled={!email.isValid}
      >
        Confirm Change
      </Button>
    </form>
  );
};

export default EmailForm;
