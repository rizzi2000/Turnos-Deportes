const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'Richi@12',
    host: 'localhost',
    port: 5432,
    database: 'complejosdb'
})

module.exports = pool;