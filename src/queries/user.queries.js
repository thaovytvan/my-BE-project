const getUsersQuery = () => `
SELECT * FROM "user";
`;

const getUserByIdQuery = (userId) => `
SELECT * FROM "user" WHERE id = ${userId};
`;

const updateUserQuery = (userId, name, age, email, phone, company) => `
UPDATE "user"
SET
  name = '${name}',
  age = ${age},
  email = '${email}',
  phone = '${phone}',
  company = '${company}'
WHERE id = ${userId};
`;

const deleteUserQuery = (userId) => `
DELETE FROM "user" WHERE id = ${userId};
`;

const createUserQuery = (name, age, email, phone, company) => `
  INSERT INTO "user" (name, age, email, phone, company)
  VALUES ('${name}', ${age}, '${email}', '${phone}', '${company}')
  RETURNING *;
`;

module.exports = {
  getUsersQuery,
  getUserByIdQuery,
  updateUserQuery,
  deleteUserQuery,
  createUserQuery,
};
