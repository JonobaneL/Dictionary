import styles from "../assets/styles/components/HomeAdvantage.module.scss";

type advantageProps = {
  advantage: {
    img: string;
    imgWidth: string;
    title: string;
    description: string;
    type: string;
  };
};
const HomeAdvantage = ({ advantage }: advantageProps) => {
  return (
    <div className={styles.advantage} data-type={advantage.type}>
      <div className={styles.content}>
        <img
          style={{ width: advantage.imgWidth }}
          className={styles.advantage__img}
          src={advantage.img}
          alt={advantage.title}
        />
        <p className={styles.advantage__title}>{advantage.title}</p>
        <p className={styles.advantage__description}>{advantage.description}</p>
      </div>
    </div>
  );
};
export default HomeAdvantage;
