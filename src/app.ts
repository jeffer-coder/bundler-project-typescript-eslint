import express from 'express'

import router from './app/router'

class App {
    public server : express.Application

    constructor () {
      this.server = express()

      this.middlewares()
      this.routers()
    }

    private middlewares () {
      this.server.use(express.json())
    }

    private routers () {
      this.server.use(router)
    }
}

const app = new App()

export default app.server
