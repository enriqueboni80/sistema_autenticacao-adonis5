import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Util from 'App/Helpers/Util'
import Event from '@ioc:Adonis/Core/Event'

export default class RegisterController {
  public async index({}: HttpContextContract) {}

  public async create({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request }: HttpContextContract) {
    const data = request.except(['_csrf'])
    data.activationToken = Util.createActivationToken()
    const user = await User.create(data)
    Event.emit('new:user', user)
    return user
  }

  public async validate({ request }: HttpContextContract) {
    const activationToken = request.param('activation-token')
    try {
      const user = await User.findByOrFail('activationToken', activationToken)
      await user.merge({ validated: true, activationToken: '' }).save()
      return 'usuario validado com sucesso'
    } catch (error) {
      return 'esse token não existe ou já foi validado'
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
