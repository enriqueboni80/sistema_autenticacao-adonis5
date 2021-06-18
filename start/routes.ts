import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }) => {
  response.redirect().toRoute('Auth/LoginController.index')
})

Route.group(() => {
  Route.resource('/posts', 'PostsController')
}).middleware('auth')
