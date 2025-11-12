const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    jwt.verify(token, "key", (err, authData) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = authData;
      next();
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = verifyToken;
