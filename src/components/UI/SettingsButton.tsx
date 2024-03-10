import { useAnimate } from "framer-motion";
import Button from "./Button";
import { IoSettingsSharp } from "react-icons/io5";

type ButtonProps = {
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsButton = ({ setMenuStatus }: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const handler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    animate([
      [scope.current, { rotate: "180deg" }, { duration: 0.4 }],
      [scope.current, { rotate: "0deg" }, { duration: 0 }],
    ]);
    setMenuStatus((p) => !p);
  };
  return (
    <Button width="2.5rem" height="2.5rem" mode="secondary" onClick={handler}>
      <div
        ref={scope}
        style={{
          height: "1.5rem",
        }}
      >
        <IoSettingsSharp size="1.5rem" color="#54a68d" />
      </div>
    </Button>
  );
};

export default SettingsButton;
