import express from "express";
import db from "./db";
import authRoutes from "./routes/auth";
import postsRoutes from "./routes/posts";
import multer from "multer"
const cookieParser = require("cookie-parser");
const saltRounds = 10;
const app = express();
const port = process.env.PORT;


require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log(file)
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use(express.static("client"));

app.post("/create-database", (req, res) => {
  const query = "CREATE DATABASE;";
  db.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      console.log(results);
      res.send({ results, ok: true });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
