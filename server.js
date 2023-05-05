require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

run();
async function run() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Database connection successful");

    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (error) {
    console.error(error);

    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  }
}
