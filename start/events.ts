import Event from '@ioc:Adonis/Core/Event'
import Mail from '@ioc:Adonis/Addons/Mail'

Event.on('new:user', (user) => {
  Mail.send((message) => {
    message
      .from('info@example.com')
      .to('virk@adonisjs.com')
      .subject('Welcome Onboard!')
      .htmlView('emails/welcome', {
        user: { fullName: 'Some Name' },
        url: `http://localhost:3333/register/validate/${user.activationToken}`,
      })
  })
})
