const app = require("./src/app");

const PORT = process.env.PORT || 3899;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
