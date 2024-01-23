import {Router} from "express";
import { uploader } from "../utils";

const router = Router();

let USERS = [];

router.get("/",(req, res)=>{
    res.status(200).send(USERS)
});

router.post("/",uploader.single("file"),(req, res)=>{
    if(!req.file){//si no existe req.file, significa que hubo un error al subir el archivo
        return res.status(400).send({status:"error", error: "No se pudo guardar la imagen"})
    }
    console.log(req.file);
    let body = res.body;
    body.profile = req.file.path;
    USERS.push(body.user);
    res.status(201).send({status:201})
})

export default router