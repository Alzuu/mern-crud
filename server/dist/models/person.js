"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Person', personSchema);
//# sourceMappingURL=person.js.map