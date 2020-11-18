import request from '../plugins/axios.js'


// 获取请求菜单
export function getMenuList() {
    return request(
        'get',
        'menus'
    )
}

// 连接oracle
export function oracleConn( params ) {
    return request(
        'post',
        'oracleConn',
        params
    )
}

// 获取视图列表
export function oracleView( ) {
    return request(
        'post',
        'oracleView'
    )
}

// 查询视图
export function oracleViewInfo( params ) {
    return request(
        'post',
        'oracleViewInf',
        params
    )
}

// 连接mysql
export function mysqlConn( params ) {
    return request(
        'post',
        'mysqlConn',
        params
    )
}

// 获取table
export function mysqlTable( params ) {
    return request(
        'post',
        'mysqlTable',
        params
    )
}

// mysql临时查询
export function mysqlSQLTempSelect( params ) {
    return request(
        'post',
        'mysqlTempSelect',
        params
    )
}

// oracle临时查询
export function oracleSQLTempSelect( params ) {
    return request(
        'post',
        'oracleTempSelect',
        params
    )
}