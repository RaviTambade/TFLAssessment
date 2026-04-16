const app = require("./src/app");//gives configured Express app so can start the server

const PORT = 3899;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
