const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up default mongoose connection
mongoose.connect("mongodb://localhost:27017/learningDocker", { authSource: "admin", user: "admin", pass: "password" });
// const test1 = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Basic Schema
const NameSchema = new Schema({
	name: String,
});

// Compile model from schema
const NameModel = mongoose.model("NameModel", NameSchema);

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: __dirname });
});

app.post("/", (req, res) => {
	const newName = req.body.name;

	const nameInstance = new NameModel({ name: newName });

	// Save the new model instance, passing a callback
	nameInstance.save((err) => {
		if (err) console.log("failed to save");
	});
	return res.send(`Name has been saved!`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
