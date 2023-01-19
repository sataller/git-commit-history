export const formatDate = (date: string) => {
  const currentDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: "2-digit", minute: '2-digit' };
  return currentDate.toLocaleDateString("en-US", options)
}