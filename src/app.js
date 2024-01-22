import express from "express";

import router from "./routes/usersRouter.js"
import router from "./routes/petsRouter.js"


const app = express();
const routerUsers= router;
const routerPets= router;

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