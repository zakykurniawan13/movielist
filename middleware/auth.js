const jwt = require("jsonwebtoken");
const {User} = require("../models");
require("dotenv").config();

const authorization = {
  isLogin: async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "No token detected. You have no right to access",
          result: {},
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      
      const user = await User.findOne({
        where: {
          id: decoded.id,
        },
      });

      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "User not found. You have no access",
          result: {},
        });
      }

      req.user = {
        id: user.id,
        email: user.email,
      };
      next();
    } catch (error) {
      res.status(500).json({
        status: "Internal Server Error",
        message: error.message,
        result: {},
      });
    }
  },
};

module.exports = authorization