require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

const port = 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(
      port,
      console.log(`Server is listening on PORT ${port}.........`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
