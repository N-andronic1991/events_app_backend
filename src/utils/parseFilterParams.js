const parseName = (fullName) => {
  const isString = typeof fullName === 'string';
  if (!isString) return;

  return fullName;
};

const parseEmail = (email) => {
  const isString = typeof email === 'string';
  if (!isString) return;

  return email;
};

export const parseFilterParams = (query) => {
  const { fullName, email } = query;

  const parsedName = parseName(fullName);
  const parsedEmail = parseEmail(email);

  return {
    fullName: parsedName,
    email: parsedEmail,
  };
};
