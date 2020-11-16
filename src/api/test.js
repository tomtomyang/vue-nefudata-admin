import request from '../plugins/axios.js'

export function getTest( params ) {
    return request(
        'post',
        'login',
        params
    )
}

// 获取请求菜单
export function getMenuList() {
    return request(
        'get',
        'menus'
    )
}