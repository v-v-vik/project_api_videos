"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = require("./settings");
var app_1 = require("./app");
app_1.app.listen(settings_1.SETTINGS.PORT, function () {
    console.log("Server is running on port ".concat(settings_1.SETTINGS.PORT));
});
