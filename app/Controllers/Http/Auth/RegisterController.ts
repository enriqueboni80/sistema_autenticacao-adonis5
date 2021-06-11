import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class RegisterController {
  public async index({}: HttpContextContract) {}

  public async create({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)
    return user
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
