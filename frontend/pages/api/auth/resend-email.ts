import { User } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthService } from "~/services/auth.service";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    AuthService.sendActivationEmail(req.body?.token);

    res.status(200).json({
    });
}
