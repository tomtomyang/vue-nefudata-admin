import request from '../plugins/axios.js'

export function getTest( params ) {
    return request(
        'post',
        'login',
        params
    )
}