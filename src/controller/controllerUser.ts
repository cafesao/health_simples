import { Request, Response } from "express"
import connectDB from "../db/connect"

const controller = {
  create: async (req: Request, res: Response) => {
    const body = req.body
    try {
      const db = await connectDB()

      await db.user.create({ data: body })

      res.sendStatus(201)
    } catch (error: any) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  read: async (req: Request, res: Response) => {
    const id = req.query.id

    try {
      const db = await connectDB()
      if (id) {
        const data = await db.user.findUnique({
          where: { id: Number(id) },
          include: { affiliates: true }
        })
        res.send(data)
      } else {
        const data = await db.user.findMany()
        res.send(data)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  update: async (req: Request, res: Response) => {
    const id = req.query.id
    const body = req.body
    try {
      const db = await connectDB()

      await db.user.update({ where: { id: Number(id) }, data: body })
      res.sendStatus(200)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  delete: async (req: Request, res: Response) => {
    const id = req.query.id
    try {
      const db = await connectDB()
      await db.user.delete({ where: { id: Number(id) } })
      res.sendStatus(200)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}

export default controller
