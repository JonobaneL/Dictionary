import { NotificationType } from "../store/reducers/NotificationsSlice";

export const errorProcessing = (err: unknown): NotificationType => {
  const error = err as { message: string };
  if (error.message == "same passwords") {
    return {
      type: "error",
      content: "Passwords has to be different",
    };
  }
  return {
    type: "error",
    content: "Wrong current password",
  };
};
