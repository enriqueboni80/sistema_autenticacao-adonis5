import Event from '@ioc:Adonis/Core/Event'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

Event.on('new:user', (user) => {
  Mail.send((message) => {
    message
      .from('enricao@bengala.com')
      .to(user.email)
      .subject('Email de validacao de cadastro')
      .htmlView('emails/welcome', {
        user: { email: user.email },
        url: `http://${Env.get('HOST')}:${Env.get('PORT')}/register/validate/${
          user.activationToken
        }`,
      })
  })
})
