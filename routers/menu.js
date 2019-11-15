const Router = require('koa-router')
const router = new Router()
const menu = require('../model/menu')

router
    .get('/', async (ctx, next) => {
        await menu.list(ctx, next)
    })
    .post('/', (ctx, next) => {

    })
    .delete('/', (ctx, next) => {

    })
    .put('/', (ctx, next) => {

    })

module.exports = router.routes()