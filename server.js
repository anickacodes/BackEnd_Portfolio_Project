const app = require("./app");

require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => console.log(`👩🏽‍💻 Server running on port port ${port} 🔥`));
