export default () => {
  return {
    database: {
      main: process.env.DATABASE_MAIN,
    },
    jwt: {
      secret: process.env.JWT_SECRET || "secret",
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    },
  };
};
