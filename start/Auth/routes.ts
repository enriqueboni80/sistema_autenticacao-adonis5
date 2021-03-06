import Route from '@ioc:Adonis/Core/Route'

Route.get('/login', 'Auth/LoginController.index')
Route.post('/login', 'Auth/LoginController.auth')
Route.get('/register', 'Auth/RegisterController.create')
Route.post('/register', 'Auth/RegisterController.store')
Route.get('/register/validate/:activation-token', 'Auth/RegisterController.validate')
Route.get('/forgot-password', 'Auth/ForgotPasswordController.create')
// Route.post('/', ForgotPasswordController.sendResetLinkEmail)
// Route.post('/reset/', ForgotPasswordController.resetPassword)

Route.group(() => {
  Route.get('/logout', 'Auth/LogoutController.index')
}).middleware('auth')

Route.get('/google/redirect', async ({ ally }) => {
  return ally.use('google').redirect()
})

Route.get('/google/callback', 'Auth/LoginController.google')
