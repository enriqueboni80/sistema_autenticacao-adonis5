import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.resource('/posts', 'PostsController')
Route.resource('/users', 'UsersController')
