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
    var ret = Splashscreen.initDynamicSplashScreen({
        windowOpts: windowOptions,
        templateUrl: path.join(__dirname, "example-dynamic-splashscreen.html"),
        delay: 0,
        splashScreenOpts: {
            height: 500,
            width: 500,
            backgroundColor: "white",
        },
    });
    window = ret.main;
    /** Send information to the splashscreen. */
    var update = function (i) {
        ret.splashScreen.webContents.send("update", i);
        if (i > 0) {
            setTimeout(function () { return update(i - 1); }, 500);
        }
        else {
            // Done sending updates to mock progress while loading window, so
            // go ahead and load the main window.
            window.loadURL("file://" + path.join(__dirname, "example-app.html"));
        }
    };
    update(5);
});
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
