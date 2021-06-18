import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {
  public async index({ auth, view }: HttpContextContract) {
    await auth.use('web').authenticate()
    const user = auth.use('web').user
    console.log(user?.email)
    return view.render('dashboard')
  }
}
