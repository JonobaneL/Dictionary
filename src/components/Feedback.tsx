import { useState } from "react";
import styles from "../assets/styles/components/Feedback.module.scss";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { addNotification } from "../store/reducers/NotificationsSlice";
import Rate from "./UI/Rate";
import { addFeedback } from "../firebase/userAPI";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

const Feedback = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState("");
  const [rate, setRate] = useState(0);
  const formDisable = rate == 0 || !feedback;
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback("");
    setRate(0);
    await addFeedback(user.email, feedback, rate);
    dispatch(
      addNotification({ type: "success", content: "Thank you!", time: 1.5 })
    );
  };
  return (
    <div className={styles.feedback}>
      <form onSubmit={submitHandler}>
        <p className={styles.lable}>How would you rate this experience?</p>
        <div className={styles.rate}>
          <Rate rate={rate} onRateChange={setRate} />
        </div>
        <p className={styles.lable}>Share you thoughts...</p>
        <textarea
          className={styles.input}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button
          type="submit"
          mode={formDisable ? "secondary" : "primary"}
          height="2.5rem"
          width="50%"
          align="center"
          disabled={formDisable}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Feedback;
