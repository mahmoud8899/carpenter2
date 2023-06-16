import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import Render from "./Render";
import 'ignore-styles'

const app = express()
const PORT = process.env.PORT || 4000

app.use([
    express.json(),
    bodyParser.urlencoded({ extended: true }),
    morgan('dev'),
    cors({
        origin: '*',
        credentials: true
    })
])


app.use('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
})


// app.use(express.static('../../build'))
app.use(express.static("build"))

app.get('/*', async (req, res) => {
    
    const html = Render()
    res.contentType('text/html');
    res.send(html);

})


app.listen(PORT, ()=> console.log(`server is runing...${PORT}`))