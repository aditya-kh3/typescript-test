"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var color_1 = require("./color");
var thing_1 = require("./thing");
var colors = new color_1.Colors();
var animals = new animal_1.Animals();
[1, 2, 3, 4, 5].forEach(function (item) {
    console.log(thing_1.makeThing(colors, animals).name);
});
