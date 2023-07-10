import express from "express";
import mysql from "mysql2";
import path from "path";

const __dirname = path.resolve();

const conect = mysql.createConnection({
    host: "",
    user: "".
    database: "",
    password: "",
});


const app = express();

