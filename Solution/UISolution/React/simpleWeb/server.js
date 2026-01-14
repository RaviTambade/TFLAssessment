const express = require("express");
const cors = require("cors");
const flowerRoutes = require("./routes/flower.routes");
const skillHealthRoutes = require("./routes/skillHealth.routes");

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use("/api", flowerRoutes);
app.use("/api", skillHealthRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
