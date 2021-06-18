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

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
