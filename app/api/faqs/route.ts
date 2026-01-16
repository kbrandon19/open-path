import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service";
import Faq from "@/app/models/faq";

// Global Config
export const router = express.Router();
router.use(express.json());

// GET FAQs - Retrieve all FAQs
router.get("/", async (_req: Request, res: Response) => {
    try {
        if (!collections.faq) {
            res.status(500).send("Database collection not initialized");
            return;
        }
        const faqs = (await collections.faq.find({}).toArray()) as unknown as Faq[];
        res.status(200).send(faqs);}
    catch (error) {
        res.status(500).send(error)
    }});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        if (!collections.faq) {
            res.status(500).send("Database collection not initialized");
            return;
        }
        const query = { _id: new ObjectId(id) };
        const faq = (await collections.faq.findOne(query)) as unknown as Faq;
        if (faq) {
            res.status(200).send(faq);
        } else {
            res.status(404).send("FAQ not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }      

});