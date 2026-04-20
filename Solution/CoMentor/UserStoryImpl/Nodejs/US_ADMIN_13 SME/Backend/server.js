const express = require("express"); // Frame to create  server and APIs 
const cors = require("cors");       // use for run diff port fronten  or backed       

const app = express();

// Middleware
app.use(cors());
app.use(express.json());   // INCOMING DATA CONVERT INTO JAVASCRIPT OPJECT 

// Routes
const routes = require("./routes/smeProfileRoutes");
console.log("Routes module:", typeof routes);  // Here print Type of  he data type tell and Routes is  variable content to store data type 
app.use("/api", routes);           // your APi is Routes files 
console.log("Routes mounted");

app.get("/api", (req, res) => res.send("Server is running")); // app- express server get- handle get request then APIs call req-res objeect 

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});