const db = require("../config/db");


const User = {
    getAllUsers: (callback) => { 
        const query = "SELECT user, name, lastname, email, password FROM user";
        db.query(query, callback);
    },

    getUserById: (id, callback) => {
        //SQL sanitization 
        // const query = "SELECT user, name, lastname, email, password FROM user WHERE id = ? ";
        // db.query(query, [id], callback);

        //SQL Injectio version 
        const query = "SELECT user, name, lastname, email, password FROM user WHERE id = " + id
        db.query(query, callback);
    },
    createUser: (userData, callback) => {
        const query = "INSERT INTO user VALUES (?, ?, ?, ?, ?)";
        db.query(query, [userData.user, userData.name, userData.lastname, userData.email, userData.password], callback);
    },

    updateUser: (userData, callback) => {
        //some code 
        const query = "UPDATE user SET user = ?, name = ?, lastname = ?, email = ? password = ? WHERE id = ?";
        db.query(query, [userData.user, userData.name, userData.lastname, userData.email, userData.passworf], callback);
    },

    deleteUser: (id, callback) => {
        //some code 
        const query = "DELETE FROM user WHERE id = ?";
        db.query(query, [id], callback);
    }
}

module.exports = User;