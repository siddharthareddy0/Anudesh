// import pkg from 'pg';
// const { Pool } = pkg;
// import dotenv from "dotenv";

// dotenv.config();

// const pool = new Pool({
//   user: "postgres" ,
//   host: "localhost",
//   database: "Project",
//   password: "Nani123@",
//   port: 5432 ,
// });

// export default pool;



// import pkg from "pg";
// const { Pool } = pkg;
// import dotenv from "dotenv";

// dotenv.config();

// const pool = new Pool({
//   connectionString: "postgres://postgres:Nani123@@localhost:5432/Project",
//   ssl: {
//     rejectUnauthorized: false // important for Render’s SSL
//   }
// });

// export default pool;


// import pkg from "pg";
// const { Pool } = pkg;
// import dotenv from "dotenv";

// dotenv.config();

// const pool = new Pool({
//   connectionString: "postgresql://anudesh_user:SV63xxkg9WpM37fZl64CEQGiJeR4roZ7@dpg-d30jmuogjchc73eu7spg-a/anudesh",
//   ssl: process.env.NODE_ENV === "production" 
//        ? { rejectUnauthorized: false } 
//        : false
// });

// export default pool;


import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: "postgresql://anudesh_user:SV63xxkg9WpM37fZl64CEQGiJeR4roZ7@dpg-d30jmuogjchc73eu7spg-a.oregon-postgres.render.com/anudesh",  // keep it in .env
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

export default pool;
