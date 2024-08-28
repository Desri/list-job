export const formatDate = (date: any): string => {
  const newDate = new Date(date);
  const formatter = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedDate = formatter.format(newDate);

  return formattedDate;
};
