const express = require("express");

const {getUserRegistration, postUserRegistration, getUsers, updateUsers, getAllUsers, deleteUsers } = require("../controllers/users.controller");

const router = express.Router();

router.get("/userRegistration", getUserRegistration);
 
router.post("/userRegistration", postUserRegistration);

router.get("/getAllUsers", getAllUsers);
router.get("/:name", getUsers);
router.put("/:name",  updateUsers);
router.delete("/:name", deleteUsers);

module.exports = router;
