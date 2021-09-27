const mongoose = require("mongoose");

const Conn = (url, porta, banco) => {
  mongoose
    .connect(`mongodb://${url}:${porta}/${banco}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = Conn;
