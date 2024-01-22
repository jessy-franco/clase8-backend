import {Router} from "express";

const router = Router();

let PETS = [];

router.get("/",(req, res)=>{
    res.status(200).send(PETS)
});

router.post("/", (req, res)=>{
/* pets: "nombre de mascota" */
    let body = res.body;
    PETS.push(body.PET);
    res.status(201).send({status:201})
})


export default router