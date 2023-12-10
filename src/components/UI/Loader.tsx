import loader from "../../assets/images/loader.svg";
import smallLoader from "../../assets/images/small-loader.svg";

type LoaderProps = {
  type: "standart" | "small";
};

const Loader = ({ type }: LoaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {type == "standart" ? (
        <img src={loader} alt="Loading..." />
      ) : (
        <img src={smallLoader} alt="Loading..." />
      )}
    </div>
  );
};

export default Loader;
