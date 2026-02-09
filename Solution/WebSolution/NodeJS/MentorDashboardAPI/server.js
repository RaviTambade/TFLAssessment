const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8000;

const router=require("./routes/mentorRoutes");
app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});