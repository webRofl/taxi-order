export const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month =
    date.getMonth().toString().length === 2
      ? date.getMonth().toString()
      : '0' + date.getMonth().toString();
  const day = date.getDate().toString();
  const hour = date.getHours().toString();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds().toString();
  return year + month + day + hour + minutes + seconds;
};
