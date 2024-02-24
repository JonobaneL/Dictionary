import Button from "./UI/Button";
import { fetchQuizzes, setLimit } from "../store/reducers/QuizzesSlice";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";

type ShowMoreProps = {
  category: string | null;
};

const ShowMoreBtn = ({ category }: ShowMoreProps) => {
  const dispatch = useTypeDispatch();
  const changeLimit = () => {
    dispatch(setLimit());
    dispatch(fetchQuizzes(category));
  };
  return (
    <Button
      mode="secondary"
      width="50%"
      height="2.4rem"
      align="center"
      onClick={changeLimit}
    >
      Show More
    </Button>
  );
};

export default ShowMoreBtn;
