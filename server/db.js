const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "-;l0.7e4n,[65pbd/rf=9_>E^)$:%{DF&?L(PN+R<",
    host: "localhost",
    post: 5432,
    database: "tfa"
})

module.exports = pool;