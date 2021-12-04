import express from 'express'

import bundler from '@controllers/bundlerController'

class Router {
    public router : express.Router

    constructor () {
      this.router = express.Router()
      this.bundlers()
    }

    private bundlers () {
      this.router.get('/bundler', bundler.bundler)
    }
}

const router = new Router()
export default router.router
