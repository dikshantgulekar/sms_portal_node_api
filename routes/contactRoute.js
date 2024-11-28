import express from "express"
import { addContact, showContact, showContactWithId } from "../controllers/contactController.js";

const contactRoute = express.Router()

contactRoute
.get("/", showContact)
.get('/:idFromReact', showContactWithId)
.post("/", addContact)

export default contactRoute;