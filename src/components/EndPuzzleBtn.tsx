import Button from "./UI/Button";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { finishPuzzle } from "../store/reducers/puzzleSlice";

type BtnProps = {
  setResults: React.Dispatch<React.SetStateAction<boolean>>;
};

const EndPuzzleBtn = ({ setResults }: BtnProps) => {
  const dispatch = useTypeDispatch();
  const { progress, puzzleID, puzzleLevel } = useTypeSelector(
    (state) => state.puzzleReducer
  );

  const handler = () => {
    window.scrollTo(0, 0);
    setResults(true);
    if (progress.length >= puzzleLevel) {
      dispatch(finishPuzzle(puzzleID || ""));
    }
  };
  return (
    <Button mode="primary" align="center" onClick={handler}>
      End Game
    </Button>
  );
};

export default EndPuzzleBtn;
