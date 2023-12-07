import { advantages } from "../data/advantages";
import { advantagesVariants } from "../motionVariants/advatagesVariants";
import HomeAdvantage from "./HomeAdvantage";
import { motion } from "framer-motion";

const HomeAdvantages = () => {
  return (
    <>
      {advantages.map((item, index) => (
        <motion.div
          key={index}
          initial="initial"
          whileInView="animate"
          variants={advantagesVariants}
          viewport={{ once: true }}
          custom={index}
        >
          <HomeAdvantage advantage={item} />
        </motion.div>
      ))}
    </>
  );
};

export default HomeAdvantages;
