import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import routesUser from "./routes/routesUser"
import routeAffiliate from "./routes/routeAffiliate"

dotenv.config()

const portApi = process.env.PORT
const api = express()

api.use(cors())
api.use(express.json())

api.use("/api/user", routesUser)
api.use("/api/affiliate", routeAffiliate)

api.use("/api", async (req, res) => res.sendStatus(200))

api.listen(portApi, () => console.log(`Server start port ${portApi}`))
