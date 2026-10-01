const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/message", (_req, res) => {
  res.json({
    message: "HELLO kya hal chal nodejs !",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
