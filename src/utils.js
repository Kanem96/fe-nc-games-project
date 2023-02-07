export const formatDateAndTime = (unformattedDate) => {
    const date = new Date(unformattedDate);
  const formattedDateAndTime = date.toLocaleString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formattedDateAndTime
}