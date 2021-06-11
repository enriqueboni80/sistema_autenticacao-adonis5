import Route from '@ioc:Adonis/Core/Route'

Route.get('/login', 'Auth/LoginController.create')
Route.get('/register', 'Auth/RegisterController.create')
Route.post('/register', 'Auth/RegisterController.store')
Route.post('/register/validate', 'Auth/RegisterController.validate')
Route.get('/forgot-password', 'Auth/ForgotPasswordController.create')
// Route.post('/', ForgotPasswordController.sendResetLinkEmail)
// Route.post('/reset/', ForgotPasswordController.resetPassword)
// Route.post('/', LoginController.autenticar)
