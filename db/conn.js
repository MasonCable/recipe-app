import mysql from 'mysql'
// Make sure to do this before real deployment
// import config from 'config'

const conn = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'QHcsvsZ1zX',
    password: 'AjycjEiWOB',
    database: 'QHcsvsZ1zX'
})

conn.connect()

module.exports = conn