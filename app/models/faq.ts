import { ObjectId } from "mongodb";

export default class Faq {
    constructor(public question: string, public answer: string, public id?: ObjectId) {}
}