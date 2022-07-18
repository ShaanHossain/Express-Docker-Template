export const getDate = async (): Promise<string | null> => {
  // current timestamp in milliseconds
  const current_timestamp = Date.now();

  const current_date : Date = new Date(current_timestamp);
  const day : number = current_date.getDate();
  const month : number = current_date.getMonth() + 1;
  const year : number = current_date.getFullYear();

  // prints date & time in YYYY-MM-DD format
  const formatted_date : string = (year + "-" + month + "-" + day);

  return formatted_date;
}