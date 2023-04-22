import { Request, Response } from "express";
import { Router } from "express";

const router = Router()

router.get("/", (req:Request,res:Response)=>{
    res.send("Home")
})

router.get("/hola", (req:Request,res:Response)=>{
    res.send("Hola")
})

router.get("/adios", (req:Request,res:Response)=>{
    res.send("Adios")
})

export { router }