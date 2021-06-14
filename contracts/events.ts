import User from 'App/Models/User'

declare module '@ioc:Adonis/Core/Event' {
  interface EventsList {
    'new:user': User
  }
}
