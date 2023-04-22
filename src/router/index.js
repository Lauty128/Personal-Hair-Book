"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    res.send("Home");
});
router.get("/hola", (req, res) => {
    res.send("Hola");
});
router.get("/adios", (req, res) => {
    res.send("Adios");
});
