const { prisma } = require("@prisma/client")

const createCategory = (req ,  res) =>{
const { name } = req.body

    const category = await prisma.category.create({
        data: { name },
    });
   return res.status(201).json(category)  
}

const getCategory = ( req, res) =>{
    const { categoryId } = req.body
    const category = await prisma.category.findOne({
        where: { id: categoryId }
    })
    return res.status(200).json(category)
}


const getCategories = ( req, res) =>{
    const categories = await prisma.category.findMany({})
    return res.status(200).json(categories)
}




module.exports ={
    createCategory,
    getCategory,
    getCategories
}