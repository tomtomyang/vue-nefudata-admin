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

// 历史记录
export function queryHistory( ) {
    return request(
        'post',
        '/tempSelectLate'
    )
}

// 表主题添加
export function tableThemeAdd( params ) {
    return request(
        'post',
        '/tableThemeAdd',
        params
    )
}

// 表主题查询
export function tableThemeSelect( ) {
    return request(
        'post',
        '/tableThemeSelect'
    )
}

// 表主题删除
export function tableThemeDelete( params ) {
    return request(
        'post',
        '/tableThemeDelete',
        params
    )
}

// 表主题更新
export function tableThemeUpdate( params ) {
    return request(
        'post',
        '/tableThemeUpdate',
        params
    )
}

// 表层级添加
export function tableClassAdd( params ) {
    return request(
        'post',
        '/tableClassAdd',
        params
    )
}

// 表层级查询
export function tableClassSelect( ) {
    return request(
        'post',
        '/tableClassSelect'
    )
}

// 表层级删除
export function tableClassDelete( params ) {
    return request(
        'post',
        '/tableClassDelete',
        params
    )
}

// 表层级更新
export function tableClassUpdate( params ) {
    return request(
        'post',
        '/tableClassUpdate',
        params
    )
}

// 表物理添加
export function tableSourceAdd( params ) {
    return request(
        'post',
        '/tableSourceAdd',
        params
    )
}

// 表物理查询
export function tableSourceSelect( ) {
    return request(
        'post',
        '/tableSourceSelect'
    )
}

// 表物理删除
export function tableSourceDelete( params ) {
    return request(
        'post',
        '/tableSourceDelete',
        params
    )
}

// 表物理更新
export function tableSourceUpdate( params ) {
    return request(
        'post',
        '/tableSourceUpdate',
        params
    )
}