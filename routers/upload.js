const Router = require('koa-router')
const koaBody = require('koa-body')
const router = new Router()
const upload = require('../model/upload')

router.post('/', async (ctx, next) => {
    await upload(ctx)
})

module.exports = router.routes()