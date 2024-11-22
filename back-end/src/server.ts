import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Pegando variável: ${process.env.TESTE}`);
  console.log(`${process.env.POSTGRES_USERNAME}`);
  console.log(`${process.env.POSTGRES_PASSWORD}`);
  console.log(`${process.env.POSTGRES_DB}`);
  console.log(`${process.env.DATABASE_URL}`);
  console.log(`${process.env.REACT_APP_BASE_URL}`);
  console.log(`Server is up and running on port ${port}`);
})
