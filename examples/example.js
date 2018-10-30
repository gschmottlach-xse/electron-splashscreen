"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var Splashscreen = require("../index");
var window;
electron_1.app.on("ready", function () {
    var windowOptions = {
        width: 500,
        height: 375,
        show: false,
    };
    window = Splashscreen.initSplashScreen({
        windowOpts: windowOptions,
        templateUrl: path.join(__dirname, "..", "icon.svg"),
        delay: 0,
        minVisible: 1500,
        splashScreenOpts: {
            height: 500,
            width: 500,
            transparent: true,
        },
    });
    window.loadURL("file://" + path.join(__dirname, "example-app.html"));
});
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
