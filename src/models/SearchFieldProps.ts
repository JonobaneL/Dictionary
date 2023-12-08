export type SearchFieldProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
