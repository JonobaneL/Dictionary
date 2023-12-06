import loader from "../../assets/images/loader.svg";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
