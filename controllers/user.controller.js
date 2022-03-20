const { prisma } = require("@prisma/client");
const bcrypt = require("bcryptjs")

const createUser = async (req, res) => {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    })
    res.json(user)
}

const getUser = (req, res) => {
    const { userId } = req.body
    const user = await prisma.user.findOne({
        where: { id: userId }
    })
    return res.status(200).json(user)
}

const getUsers = (req, res) => {
    const users = await prisma.user.findMany({})
    return res.status(200).json(users)
}

module.exports = {
    createUser,
    getUser,
    getUsers
}