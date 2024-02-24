import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { finishPuzzle } from "../store/reducers/puzzleSlice";

type BtnProps = {
  puzzleID: string;
  progress: number;
  level: number;
};

const EndPuzzleBtn = ({ puzzleID, progress, level }: BtnProps) => {
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();
  const handler = () => {
    window.scrollTo(0, 0);
    navigate("/puzzle-results");
    if (progress >= level) {
      dispatch(finishPuzzle(puzzleID));
    }
  };
  return (
    <Button mode="primary" align="center" onClick={handler}>
      End Game
    </Button>
  );
};

export default EndPuzzleBtn;
