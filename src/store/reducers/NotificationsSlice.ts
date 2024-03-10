import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = {
  type: "success" | "error" | "warning" | "info";
  content: string;
  time?: number;
  delay?: number;
};
type PayloadPops = {
  payload: NotificationType;
};
type initialState = NotificationType | null;
const initialState = null as initialState;

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState: null as initialState,
  reducers: {
    addNotification(_, { payload }: PayloadPops) {
      return payload;
    },
    removeNotification() {
      return null;
    },
  },
});

export const { addNotification, removeNotification } =
  NotificationsSlice.actions;

export default NotificationsSlice.reducer;
