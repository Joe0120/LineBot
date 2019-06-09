'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');

//------------------------------------------
// 新增會員資料
//------------------------------------------
var addMember = async function (id, name) {
    //存放結果
    let result;

    //新增會員資料
    await query('insert into member (userid, name, islegal) values ($1, $2, $3) RETURNING name,phone', [id, name, 'Y'])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //學生資料(物件)
            } else {
                result = -1;  //找不到資料
            }
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}

//------------------------------------------
// 刪除會員資料
//------------------------------------------
var deleteMember = async function (id) {
    //存放結果
    let result;

    //刪除會員資料
    await query('UPDATE member SET islegal = $2 member where userid = $1', [id, 'N'])
        .then((data) => {
            result = data.rowCount;  //刪除資料數 
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------
var fetchMember = async function (id) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select * from member where userid = $1', [id])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //學生資料(物件)
            } else {
                result = -1;  //找不到資料
            }
        }, (error) => {
            result = -9;  //執行錯誤
        });

    //回傳執行結果
    return result;
}
//------------------------------------------
var UpdateName = async function (name, id) {
    //存放結果
    let result;

    //讀取資料庫UPDATE table_name SET field1=new-value1, field2=new-value2
    await query('UPDATE member SET name = $1 where userid = $2 RETURNING name,phone', [name, id])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //學生資料(物件)
            } else {
                result = -1;  //找不到資料
            }
        }, (error) => {
            result = -9;  //執行錯誤
        });
    //回傳執行結果
    return result;
}
//------------------------------------------
var UpdatePhone = async function (phone, id) {
    //存放結果
    let result;

    //讀取資料庫UPDATE table_name SET field1=new-value1, field2=new-value2
    await query('UPDATE member SET phone = $1 where userid = $2 RETURNING name,phone', [phone, id])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];  //學生資料(物件)
            } else {
                result = -1;  //找不到資料
            }
        }, (error) => {
            result = -9;  //執行錯誤
        });
    //回傳執行結果
    return result;
}

//匯出
module.exports = { addMember, deleteMember, fetchMember, UpdateName, UpdatePhone };

