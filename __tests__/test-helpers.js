"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.req = void 0;
var supertest_1 = require("supertest");
var app_1 = require("../src/app");
exports.req = (0, supertest_1.agent)(app_1.app);
