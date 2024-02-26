import { NotificationType } from "../store/reducers/NotificationsSlice";

export const logInMessage = {
  type: "error",
  content: "Wrong email or password",
  time: 2,
} as NotificationType;
export const foundedMessage = {
  type: "info",
  content: "Already found",
  time: 1,
} as NotificationType;
export const notInListMessage = {
  type: "warning",
  content: "Not on the list",
  time: 1,
} as NotificationType;
export const correctMessage = {
  type: "success",
  content: "Way to go!",
  time: 1,
} as NotificationType;
