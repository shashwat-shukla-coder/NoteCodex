const express = require("express");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const port = 5000;
require("dotenv").config();
app.use(express.json());
app.use(cors());
//get dependies
const { notFound, ErrorHandling } = require("./middleware/errorMiddleware.js");
// conncet to DB
const ConnectDB = require("./config/ConncectToDB.js");
ConnectDB();
//routings
app.use("/users", userRoutes); // via this i can hit user routes
app.use("/notes", noteRoutes); // via this i can hit note routes

app.use(notFound);
app.use(ErrorHandling);



app.listen(port, () => {
  console.log(`Server is running on port no  ${port}`);
});
