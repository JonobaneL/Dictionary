export type SearchFieldProps = {
  value: string;
  status: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
