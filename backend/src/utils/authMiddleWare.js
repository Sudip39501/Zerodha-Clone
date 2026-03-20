const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.query.token; // fallback to query


  console.log(token);
  if (!token) {
    return res.status(402).json({
      message: "No token provided",
    });
  }

  try {
    console.log("error",token , process.env.TOKEN_KEY);
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;    
    console.log(decoded);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyUser;