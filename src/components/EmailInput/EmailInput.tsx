import { forwardRef } from "react";
import { TextField } from "@mui/material";
import user from "../../images/user.svg";

const EmailInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      <img src={user} style={{ width: "24px", marginBottom: "3px" }} alt="" />
      <TextField
        id="user_email"
        size="small"
        fullWidth
        label="Email address"
        variant="standard"
        inputRef={ref}
        InputLabelProps={{
          style: {
            fontFamily: "Inter",
          },
        }}
        InputProps={{
          style: {
            fontFamily: "Inter",
          },
        }}
      />
    </div>
  );
});

export default EmailInput;
