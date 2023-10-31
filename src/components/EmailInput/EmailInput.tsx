import { TextField } from "@mui/material";
import user from "../../images/user.svg";

const EmailInput = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        gap: "5px",
      }}
    >
      <img src={user} style={{ width: "24px", marginBottom: "3px" }} alt="" />
      <TextField
        id="smEmail"
        size="small"
        fullWidth
        label="Email address"
        variant="standard"
      />
    </div>
  );
};

export default EmailInput;
