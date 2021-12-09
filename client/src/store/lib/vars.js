export const URL = 'http://localhost:8080/api/v1'
export const TOKEN = () => {
    return JSON.parse(localStorage.getItem('authInfo')).accessToken
}