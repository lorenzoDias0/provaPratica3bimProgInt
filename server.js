const express = require("express");
const bodyParser = require("body-parser");
const cadastroRoutes = require("./routes/users.js");
const logger = require("./middleware/auth.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 
app.use(logger);

app.use("/api/cadastros", cadastroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
