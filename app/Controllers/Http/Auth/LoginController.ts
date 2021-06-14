import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
