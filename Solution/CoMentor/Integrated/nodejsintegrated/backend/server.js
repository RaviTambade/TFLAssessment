const app = require("./src/app");

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT,()=>{console.log(`server listening on port ${PORT}`)});
}

module.exports = app
