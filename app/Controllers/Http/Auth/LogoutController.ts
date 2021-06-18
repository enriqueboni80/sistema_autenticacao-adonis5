import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogoutController {
  public async index({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    response.redirect('/login')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
