import { useState, forwardRef } from "react";
import { InputAdornment, TextField } from "@mui/material";
import showIcon from "../../images/passwordField/show.svg";
import hideIcon from "../../images/passwordField/hide.svg";
import key from "../../images/passwordField/key.svg";

const PasswordInput = forwardRef<HTMLInputElement>((_, ref) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
      <img
        style={{ width: "24px", marginBottom: "3px" }}
        src={key}
        alt="password"
      />
      <TextField
        id="user_password"
        variant="standard"
        type={isPasswordHidden ? "password" : "text"}
        fullWidth
        inputRef={ref}
        style={{ fontFamily: "Inter" }}
        InputLabelProps={{
          style: {
            fontFamily: "Inter",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {isPasswordHidden ? (
                <img
                  onClick={() => setIsPasswordHidden(false)}
                  style={{ width: "25px", cursor: "pointer" }}
                  src={showIcon}
                  alt="show password"
                />
              ) : (
                <img
                  onClick={() => setIsPasswordHidden(true)}
                  style={{ width: "25px", cursor: "pointer" }}
                  src={hideIcon}
                  alt="hide password"
                />
              )}
            </InputAdornment>
          ),
          style: {
            fontFamily: "Inter",
          },
        }}
        label="Password"
      />
    </div>
  );
});

export default PasswordInput;
