import type { Request, Response } from "express"
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export class AuthController {
    static createAccount = async (req: Request, res: Response) => {
        try {
            const { password, email } = req.body;

            //prevenir duplicados
            const userExists = await User.findOne({ email });
            if (userExists) {
                const error = new Error('El usuario ya esta registrado');
                return res.status(409).json({ error: error.message });
            }
            const user = new User(req.body)

            //hash password
            user.password = await hashPassword(password);

            await user.save();
            res.send('Cuenta creada');
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error' })
        }
    }

    static getAllUsers = async (req: Request, res: Response) => {
        const users = await User.find();
        res.json(users);
    }
}