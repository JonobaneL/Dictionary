import { NotificationType } from "../store/reducers/NotificationsSlice";

export const formsMessage = (title: string): NotificationType => {
  return {
    type: "success",
    content: `${title} was changed`,
  };
};
