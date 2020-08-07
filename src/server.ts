import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static('images'))

app.listen(process.env.PORT || 3333)