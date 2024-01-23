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

/* permite un registro de lo que genera la app en consolao en texto, para saber que esta pasando con el programa...buscar midleware "midleware de login/moro"*/

/* si me llega un request pasa por este midleware y me manda esta info de la interaccion del usuario con el sistema */
app.use((req, res, next)=>{
    console.log(Date.now() + req.method + "-"+ req.ip + "-" + req.url);
    next();
})

/* configurar el multer...leer la documentacion, es un midleware, añade un body object con los archivos que me lee el request, configurar para que todos los archivos que se carguen se configuren en la carpeta del proyecto que queramos*/

/* routers */
app.use("/api/users/" ,routerUsers);
app.use("/api/pets/" ,routerPets);
app.use(express.urlencoded({ extended: true }))



app.listen(3000, () => {
    console.log("servidor 3000!");
});