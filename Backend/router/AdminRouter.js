const express = require("express");
const Router = express.Router();
const expressValidator = require("express-validator");

const AdminModel = require("../model/AdminModel");

// controller
const AdminController = require("../controller/AdminController");

Router.post(
  "/create",
  [
    expressValidator
      .body("email")
      .isEmail()
      .withMessage("Email 형태를 갖춰주세요")
      .custom(async (value, { req }) => {
        const matchEmail = await AdminModel.findOne({
          where: { email: value },
        });
        if (matchEmail) {
          next("동일한 이메일이 존재합니다.");
        }
      })
      .normalizeEmail(),
    expressValidator
      .body("password")
      .trim()
      .isLength({ min: 9 })
      .withMessage("비밀번호는 최소 9 숫자나 문자열이 포함되어야 합니다"),
  ],
  AdminController.createAdminUser
);

module.exports = Router;
