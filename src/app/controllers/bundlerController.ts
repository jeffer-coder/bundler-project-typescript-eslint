import { Request, Response } from 'express'

class Bundler {
  public bundler (req: Request, res: Response) {
    return res.status(200).send('bundler project')
  }
}

const bundler = new Bundler()
export default bundler
