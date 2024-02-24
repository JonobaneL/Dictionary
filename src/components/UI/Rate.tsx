import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaRegStar, FaStar } from "react-icons/fa";

type RateProps = {
  rate: number;
  onRateChange: React.Dispatch<React.SetStateAction<number>>;
};
const Rate = ({ rate, onRateChange }: RateProps) => {
  const [hover, setHover] = useState(rate);
  useEffect(() => {
    setHover(rate);
  }, [rate]);
  return (
    <ul
      onMouseLeave={() => setHover(rate)}
      style={{ width: "fit-content", display: "flex" }}
    >
      <IconContext.Provider value={{ color: "#54a68d", size: "1.5rem" }}>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <li
              key={index}
              onMouseEnter={() => setHover(index + 1)}
              onClick={() => onRateChange(index + 1)}
            >
              {index + 1 <= hover ? <FaStar /> : <FaRegStar />}
            </li>
          ))}
      </IconContext.Provider>
    </ul>
  );
};

export default Rate;
