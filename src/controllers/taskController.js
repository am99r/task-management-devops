const getTasks = (req, res) => {
  res.json({ message: "Get all tasks" });
};

module.exports = {
  getTasks,
};