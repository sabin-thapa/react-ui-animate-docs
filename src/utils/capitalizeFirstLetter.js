export const capitalizeFirstLetter = (string = "") => {
  if (!!string === false) return "";
  return (string?.charAt(0)?.toUpperCase() + string?.slice(1)).trim();
};
