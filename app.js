import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import dbConnection from "./databse/db.js"
import libRoute from "./routes/libRoute.js"
import grpRoute from "./routes/grpRoute.js"
import contactRoute from "./routes/contactRoute.js"
import messageRoute from "./routes/messageRoute.js"


const app = express()

dbConnection().then(()=>{console.log('connected')})
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the SMS Portal API');
});
app.use('/library', libRoute)
app.use('/group', grpRoute)
app.use('/contact', contactRoute)
app.use('/message', messageRoute)

const PORT = 9000;
app.listen(9000, ()=>{
    console.log('Server Running On PORT 9000')
})