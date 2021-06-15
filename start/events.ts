import Event from '@ioc:Adonis/Core/Event'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

Event.on('new:user', (user) => {
  Mail.send((message) => {
    message
      .from('info@example.com')
      .to('virk@adonisjs.com')
      .subject('Welcome Onboard!')
      .htmlView('emails/welcome', {
        user: { fullName: 'Some Name' },
        url: `http://${Env.get('HOST')}:${Env.get('PORT')}/register/validate/${
          user.activationToken
        }`,
      })
  })
})
