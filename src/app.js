const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Task Management API" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});