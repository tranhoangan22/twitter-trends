const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
// const cors = require("cors");
const enforce = require("express-sslify"); // used to enforces HTTPS connections on any incoming GET and HEAD requests
const path = require("path");
const compression = require("compression");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// the 3 lines below are commented because we want to return the frontend and not backend upon user request (line 59)
// app.get("/", async (req, res, next) => {
//   res.send({ message: "Awesome it works 🐻" });
// });

app.use("/api", require("./routes/api.route"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

/**
 * So our API call from the client side (port 3000) can be proxy-ed to backend (defined in this app.js file)
 * Another way to do this is to define the proxy property in package.json => what we're doing
 * */
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// Serving static files in Express, in Production
if (process.env.NODE_ENV === "production") {
  app.use(compression());

  app.use(
    enforce.HTTPS({
      trustProtoHeader: true,
    })
  );

  // if we're in production, we want to be able to serve all static files (which run on browswer side) in our /build folder. `/build` is what gets built when we run the build script in package.json
  app.use(express.static(path.join(__dirname, "frontend/build")));

  // if client hits any route, backend will send over the index.html in our build (which holds all of our frontend codes!)
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server started on port ", PORT));
