export function dueDate(startDate, days) {
    const dueDate = new Date();
  dueDate.setDate(new Date(startDate).getDate() + days);
  return (dueDate);
}