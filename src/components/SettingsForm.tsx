import EmailForm from "./EmailForm";
import NicknameForm from "./NicknameForm";
import PasswordChangeForm from "./PasswordChangeForm";

type FormProps = {
  type: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsForm = ({ type, setModal }: FormProps) => {
  switch (type) {
    case "nickname":
      return <NicknameForm setModal={setModal} />;
    case "email":
      return <EmailForm setModal={setModal} />;
    case "password":
      return <PasswordChangeForm setModal={setModal} />;
  }
};

export default SettingsForm;
