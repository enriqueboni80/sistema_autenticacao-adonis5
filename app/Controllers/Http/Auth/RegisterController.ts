import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

import Mail from '@ioc:Adonis/Addons/Mail'

export default class RegisterController {
  public async index({}: HttpContextContract) {}

  public async create({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)

    await Mail.send((message) => {
      message
        .from('info@example.com')
        .to('virk@adonisjs.com')
        .subject('Welcome Onboard!')
        .htmlView('emails/welcome', {
          user: { fullName: 'Some Name' },
          url: 'https://your-app.com/verification-url',
        })
    })

    return user
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
