import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'alvorada12',
  database: 'api_leads'
});

export default pool;