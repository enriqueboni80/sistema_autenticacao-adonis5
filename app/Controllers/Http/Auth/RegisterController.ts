import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Util from 'App/Helpers/Util'

import Mail from '@ioc:Adonis/Addons/Mail'

export default class RegisterController {
  public async index({}: HttpContextContract) {}

  public async create({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['email', 'password', 'activationToken'])
    data.activationToken = Util.createActivationToken()
    const user = await User.create(data)

    await Mail.send((message) => {
      message
        .from('info@example.com')
        .to('virk@adonisjs.com')
        .subject('Welcome Onboard!')
        .htmlView('emails/welcome', {
          user: { fullName: 'Some Name' },
          url: `http://localhost:3333/register/validate/${user.activationToken}`,
        })
    })

    return user
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
