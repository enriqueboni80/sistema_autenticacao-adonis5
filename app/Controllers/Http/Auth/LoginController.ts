import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
// import Route from '@ioc:Adonis/Core/Route'

export default class LoginController {
  public async index({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async auth({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.findByOrFail('email', email)

    if (!(await Hash.verify(user.password, password))) {
      return 'A Senha esta errada'
    }

    await auth.use('web').login(user)
    response.redirect('dashboard')
  }

  public async google({ ally, auth, response }: HttpContextContract) {
    const google = ally.use('google')

    /**
     * User has explicitly denied the login request
     */
    if (google.accessDenied()) {
      return 'Access was denied'
    }

    /**
     * Unable to verify the CSRF state
     */
    if (google.stateMisMatch()) {
      return 'Request expired. Retry again'
    }

    /**
     * There was an unknown error during the redirect
     */
    if (google.hasError()) {
      return google.getError()
    }

    const googleUser = await google.user()

    /**
     * Find the user by email or create
     * a new one
     */
    const user = await User.firstOrCreate(
      {
        email: googleUser.email,
      },
      {
        firstName: googleUser.original.given_name,
        lastName: googleUser.original.family_name,
        email: googleUser.original.email,
        validated: true,
        password: 'abc123.',
      }
    )

    /**
     * Login user using the web guard
     */
    await auth.use('web').login(user)
    response.redirect('/dashboard')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
