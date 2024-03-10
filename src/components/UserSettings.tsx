import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import PopMenu from "./PopMenu";
import { useEventListener } from "../hooks/useEventListener";
import ModalWindow from "./UI/ModalWindow";
import SettingsForm from "./SettingsForm";
import SettingsButton from "./UI/SettingsButton";

const UserSettings = () => {
  const [popMenuStatus, setPopMenuStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [formType, setFormType] = useState("");
  useEventListener("click", (e) => {
    const ids = ["pop", "settings"];
    const target = e.target as HTMLDivElement;
    if (!ids.includes(target.id)) {
      setPopMenuStatus(false);
    }
  });
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence initial={false}>
        {popMenuStatus && (
          <PopMenu setFormType={setFormType} setModalStatus={setModalStatus} />
        )}
      </AnimatePresence>
      <SettingsButton setMenuStatus={setPopMenuStatus} />
      <ModalWindow
        status={modalStatus}
        onChange={setModalStatus}
        title={`Change ${formType}:`}
      >
        <SettingsForm type={formType} setModal={setModalStatus} />
      </ModalWindow>
    </div>
  );
};

export default UserSettings;
