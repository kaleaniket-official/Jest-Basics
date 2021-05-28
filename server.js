
const database = require("./database");
const makeApp = require("./app");

const app = makeApp(database);

app.listen(8000, () => "Server listeninn on port 8000!");