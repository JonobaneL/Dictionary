import { RiHome5Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
export const nav = [
  {
    icon: <RiHome5Line />,
    link: "/dashboard",
  },
  {
    icon: <RiFileList2Line />,
    link: "/quizzes",
  },
  {
    icon: <LuBell />,
    link: "/remind",
  },
  {
    icon: <LuUser />,
    link: "/user-info",
  },
];
