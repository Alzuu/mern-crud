"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.addPerson = exports.getPeople = void 0;
const person_1 = __importDefault(require("../models/person"));
const getPeople = async (_req, res) => {
    try {
        const people = await person_1.default.find();
        res.status(200).json({ people });
    }
    catch (error) {
        throw error;
    }
};
exports.getPeople = getPeople;
const addPerson = async (req, res) => {
    try {
        const body = req.body;
        const person = new person_1.default({
            first_name: body.first_name,
            last_name: body.last_name,
            age: body.age,
        });
        const newPerson = await person.save();
        const allPeople = await person_1.default.find();
        res
            .status(201)
            .json({ message: 'Person added', person: newPerson, people: allPeople });
    }
    catch (error) {
        throw error;
    }
};
exports.addPerson = addPerson;
const updatePerson = async (req, res) => {
    try {
        const { params: { id }, body, } = req;
        const updatePerson = await person_1.default.findByIdAndUpdate({ _id: id }, body);
        const allPeople = await person_1.default.find();
        res.status(200).json({
            message: 'Person updated',
            person: updatePerson,
            people: allPeople,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.updatePerson = updatePerson;
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await person_1.default.findByIdAndRemove(req.params.id);
        const allPeople = await person_1.default.find();
        res.status(200).json({
            message: 'Person deleted',
            person: deletedPerson,
            people: allPeople,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.deletePerson = deletePerson;
//# sourceMappingURL=person.js.map