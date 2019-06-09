'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');
//---------------------------------------------------------
var fetchOrder = async function (userid) {
    //存放結果
    let result;

    //讀取資料庫
    await query('select a.orderid, c.storeid,d."storeName",d."storeAdd", c."orderDate", c."orderTime", c."takeDate", c."takeTime", c.status, b."foodName", a.quantity, a."unitPrice" from "orderDetail" a, food b , "order" c , store d where a.foodid = b.foodid and c.orderid in (select orderid from "order" where userid = $1  ORDER BY "orderDate" desc, "orderTime" desc LIMIT 10) and c.orderid = a.orderid and c.storeid = d.storeid ORDER BY "orderDate"desc, "orderTime" desc ', [userid])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows;  //學生資料(物件)
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
module.exports = { fetchOrder };

