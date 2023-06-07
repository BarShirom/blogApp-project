import mysql from "mysql2";

require("dotenv").config();

const sqlPassword = process.env.SQLPASSWORD; 

//@ts-ignore
const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: sqlPassword,
  database: "blog",
 
});

db.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
});

export default db;


































// import mysql from "mysql2";
// require("dotenv").config();

// const sqlPassword = process.env.SQLPASSWORD;


// //@ts-ignore
// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: sqlPassword,
//     database: "blog",
    
//   });
  
