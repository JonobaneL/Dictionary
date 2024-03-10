import { LuUserCircle } from "react-icons/lu";
import { useInput } from "../hooks/useInput";
import ValidatedField from "./UI/ValidatedField";
import Button from "./UI/Button";
import { updateNickname } from "../firebase/userAPI";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { SettingsFormProps } from "../models/SettingsFormsProps";
import { formsMessage } from "../utils/formsMessage";

const NicknameForm = ({ setModal }: SettingsFormProps) => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const nickName = useInput("", { isEmpty: true, minLength: 3 }, "Nickname");
  const dispatch = useTypeDispatch();
  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateNickname(user.id, nickName.value);
    const message = formsMessage("Nickname");
    dispatch(addNotification(message));
    setModal(false);
  };
  return (
    <form onSubmit={handler}>
      <ValidatedField
        input={nickName}
        fieldIcon={<LuUserCircle size="1.6rem" color="#3f707d" />}
        placeholder="Nickname"
      />
      <div style={{ height: "1.5rem" }} />
      <Button
        mode="primary"
        align="center"
        width="60%"
        type="submit"
        disabled={!nickName.isValid}
      >
        Confirm Change
      </Button>
    </form>
  );
};

export default NicknameForm;
