const mysqlConnection = require("../models/users.model");
const {v4: uuidv4} = require("uuid");

const path = require("path");

exports.getUserRegistration = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/userRegistration.html"));
};

exports.postUserRegistration = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    mysqlConnection.query('insert into users values (?, ?, ?)', [uuidv4(), name, age], (err, results) => {
        if (!err) {
            res.status(200).json({
                success: "post successful",
                results
            });
        }
        else {
            console.log(err);
        }
    });
};

exports.getAllUsers = (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                success: true,
                rows,
            });
        }
        else {
            console.log(err);
        }
    });
};

exports.getUsers = (req, res) => {
    userName = req.params.name;
    mysqlConnection.query('SELECT * FROM users where name = ?', [userName], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                success: true,
                rows,
            });
        }
        else {
            console.log(err);
        }
    });
};

exports.updateUsers = (req, res) => {

    const userName = req.params.name;
    const { age } = req.body;

    mysqlConnection.query('update users set age = ? where name = ?', [age, userName], (err, results) => {
        if (!err) {
            res.status(200).json({
                success: "update successful",
                results
            });
        }
        else {
            console.log(err);
        }
    });
};

exports.deleteUsers = (req, res) => {

    const userName = req.params.name;

    mysqlConnection.query('delete from users where name = ?', [userName], (err, results) => {
        if (!err) {
            res.status(200).json({
                success: "delete successful",
                results
            });
        }
        else {
            console.log(err);
        }
    });
};


