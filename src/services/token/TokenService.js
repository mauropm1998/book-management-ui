export class TokenService {
  set token(token) {
    localStorage.setItem('token', token)
  }

  get token() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      return ''
    }
  }
}
