import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { finishPuzzle } from "../store/reducers/puzzleSlice";

type BtnProps = {
  puzzleID: string;
  progress: number;
  level: number;
  setResults: React.Dispatch<React.SetStateAction<boolean>>
};

const EndPuzzleBtn = ({ puzzleID, progress, level,setResults }: BtnProps) => {
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();

  const handler = () => {
    window.scrollTo(0, 0);
    setResults(true)
    // navigate("/puzzle-results");
    // if (progress >= level) {
    //   dispatch(finishPuzzle(puzzleID));
    // }
  };
  return (
    <Button mode="primary" align="center" onClick={handler}>
      End Game
    </Button>
  );
};

export default EndPuzzleBtn;
