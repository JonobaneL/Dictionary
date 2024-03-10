export const closeModalEvent = (
  callback: React.Dispatch<React.SetStateAction<boolean>>
) => {
  callback(false);
  window.scrollTo(0, 0);
};
