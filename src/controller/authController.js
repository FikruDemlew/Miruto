import { prisma } from "../config/db.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;

    //Check if user exists

    const userExists = await prisma.user.findUnique({
        where: {email: email},
    })
  
}

export default register