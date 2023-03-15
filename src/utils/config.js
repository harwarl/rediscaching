require('dotenv').config();

const { env } = process;

module.exports = {
    PORT: env.PORT,
    REDIS_PASS: env.REDIS_PASS
}