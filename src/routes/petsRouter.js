import {Router} from "express";

const routerPet = Router();

let PETS = [];

routerPet.get("/",(req, res)=>{
    res.status(200).send(PETS)
});

routerPet.post("/", (req, res)=>{
/* pets: "nombre de mascota" */
    let body = res.body;
    PETS.push(body.PET);
    res.status(201).send({status:201})
})


export default routerPet