import { NotificationType } from "../store/reducers/NotificationsSlice";

export const logInMessage = {
  type: "error",
  content: "Wrong email or password",
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
export const checkEmailMessage = {
  type: "success",
  content: "Check your email",
  time: 2,
  delay: 0.4, //it doesnt work correct
} as NotificationType;
