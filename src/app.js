import express from "express";

import router from "./routes/usersRouter.js"
import routerPet from "./routes/petsRouter.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const routerUsers= router;
const routerPets= routerPet;

/* middlewares */
app.use(express.json());
app.use("/static",express.static(__dirname + "/public"))

/* routers */
app.use("/api/users/" ,routerUsers);
app.use("/api/pets/" ,routerPets);
app.use(express.urlencoded({ extended: true }))



app.listen(3000, () => {
    console.log("servidor 3000!");
});