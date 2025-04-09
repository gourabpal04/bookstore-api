export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'supersecretkey', // should be overridden in production
};
