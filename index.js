const express = require("express");
const {connectToMongoose} = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoose("mongodb://localhost:27017/short-url").then(() => console.log("Mongodb Connected"));
app.use(express.json());

app.use("/url",urlRoute);
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})