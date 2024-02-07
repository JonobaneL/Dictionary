import logo from "../../assets/images/logo1.svg";

const Logo = () => {
  return (
    <img
      style={{
        display: "block",
        width: "52%",
        marginInline: "auto",
        marginBottom: "1.3rem",
      }}
      src={logo}
      alt="logo"
    />
  );
};

export default Logo;
