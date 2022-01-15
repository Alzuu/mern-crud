"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_1 = require("../controllers/person");
const router = (0, express_1.Router)();
router.get('/people', person_1.getPeople);
router.get('/people/:id', person_1.getPerson);
router.post('/add-person', person_1.addPerson);
router.put('/edit-person/:id', person_1.updatePerson);
router.delete('/delete-person/:id', person_1.deletePerson);
exports.default = router;
//# sourceMappingURL=index.js.map