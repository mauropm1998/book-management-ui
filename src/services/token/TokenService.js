export class TokenService {
  set token(token) {
    localStorage.setItem('token', token)
  }

  get token() {
    return localStorage.getItem('token').toString()
  }
}
