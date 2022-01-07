"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use(routes_1.default);
const uri = 'mongodb://127.0.0.1:27017/people';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default
    .connect(uri, options)
    .then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
    .catch((error) => {
    throw error;
});
//# sourceMappingURL=index.js.map