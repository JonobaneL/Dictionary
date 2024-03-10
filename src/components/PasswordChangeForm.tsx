import { reauthenticateUser, updateUserPassword } from "../firebase/userAPI";
import { useInput } from "../hooks/useInput";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { SettingsFormProps } from "../models/SettingsFormsProps";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { checkFormValid } from "../utils/checkFormValid";
import { errorProcessing } from "../utils/errorProcessing";
import { formsMessage } from "../utils/formsMessage";
import PasswordInput from "./PasswordInput";
import Button from "./UI/Button";

const PasswordChangeForm = ({ setModal }: SettingsFormProps) => {
  const inputConfigs = { isEmpty: true, minLength: 6, maxLength: 20 };
  const oldPassword = useInput("", inputConfigs, "Old Password");
  const newPassword = useInput("", inputConfigs, "New Password");
  const dispatch = useTypeDispatch();
  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (oldPassword.value === newPassword.value)
        throw Error("same passwords");
      await reauthenticateUser(oldPassword.value);
      await updateUserPassword(newPassword.value);
      setModal(false);
      const message = formsMessage("Password");
      dispatch(addNotification(message));
    } catch (err: unknown) {
      const message = errorProcessing(err);
      dispatch(addNotification(message));
    }
  };
  const isFromDisabled = checkFormValid([
    oldPassword.isValid,
    newPassword.isValid,
  ]);
  return (
    <form onSubmit={handler}>
      <PasswordInput password={oldPassword} placeholder="Old Password" />
      <div style={{ height: "1.5rem" }} />
      <PasswordInput password={newPassword} placeholder="New Password" />
      <div style={{ height: "1.5rem" }} />
      <Button
        mode="primary"
        align="center"
        width="60%"
        type="submit"
        disabled={isFromDisabled}
      >
        Confirm Change
      </Button>
    </form>
  );
};

export default PasswordChangeForm;
