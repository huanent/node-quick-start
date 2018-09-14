import app from './app'
import requireAll from "require-all";

requireAll(__dirname + "/controllers");

console.log("listening on http://localhost:3000");
app.listen(3000);
