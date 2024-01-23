import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/PuzzleRetake.module.scss";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { clearPuzzleProgress } from "../store/reducers/puzzleSlice";
import { HiMiniArrowPath } from "react-icons/hi2";
import { puzzlePhrase } from "../utils/puzzlePhrase";

type RetakeProps = {
  puzzleID: string | null;
  progress: string[];
  puzzleLevel: number;
};
const PuzzleRetake = ({ puzzleID, progress, puzzleLevel }: RetakeProps) => {
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();
  const phrase = puzzlePhrase(progress, puzzleLevel);

  const retakeHandler = () => {
    dispatch(clearPuzzleProgress());
    navigate("/word-puzzle", { state: { puzzleID: puzzleID } });
  };
  return (
    <div className={styles.retake}>
      <p className={styles.phrase}>{phrase}</p>
      <button className={styles.btn} onClick={retakeHandler}>
        <p>Retake</p>
        <HiMiniArrowPath size="1.5rem" color="#3f707d" />
      </button>
    </div>
  );
};

export default PuzzleRetake;
