import app from './app'

const port = process.env.PORT
app.listen(port, () => console.log(`Application listening on the port: ${port}`))
