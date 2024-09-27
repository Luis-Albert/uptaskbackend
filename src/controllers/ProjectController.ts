import type { Request, Response } from "express"
import Project from "../models/Project"

export class ProjectController {

    static getAllProject = async (req: Request, res: Response) => {
        try {
            const project = await Project.find({});
            res.json(project)
        } catch (error) {
            console.log(error);
        }
    }

    static createProject = async (req: Request, res: Response) => {
        const project = new Project(req.body)
        try {
            await project.save();
            res.send('Projeto creado')
        } catch (error) {
            console.log(error)
        }

    }

}