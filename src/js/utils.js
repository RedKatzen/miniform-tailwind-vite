export const regexEmail = () => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
};
export const regexPassword = () => {
  return /^.{10,}$/;
};

export const formatPhone = (phone) => {
  let digits = phone.replace(/\D/g, "").substring(0, 10);
  let regionCode = digits.substring(0, 2);
  let prefix = digits.substring(2, 6);
  let suffix = digits.substring(6, 10);

  let size = digits.length;

  if (size > 6) return `(${regionCode}) ${prefix}-${suffix}`;
  else if (size > 2) return `(${regionCode}) ${prefix}`;
  else if (size > 0) return `(${regionCode})`;

  return "";
};
