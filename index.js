const express = require("express");
const calcRouter = require("./routes/calculatorRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});
app.use("/", calcRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listen on port ", PORT);
});
