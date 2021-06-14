import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }) => {
  response.redirect().toRoute('Auth/LoginController.index')
})

Route.resource('/posts', 'PostsController')
