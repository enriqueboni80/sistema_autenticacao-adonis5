export default class Util {
  static createActivationToken(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  static getNow(): Date {
    return new Date(Date.now())
  }
}
