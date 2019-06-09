
//引用操作資料庫的物件
const temp = require('./../../temp');
const record = require('../../route/record');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var orderRecord = function (event, lodash) {
    event.source.profile().then(function (profile) {
        record.fetchOrder(profile.userId).then(data => {
            if (data == -1) {
                event.reply('沒有紀錄');
            } else if (data == -9) {
                event.reply('執行錯誤');
            } else {
                var s = ""
                var scnt = -1
                var fcnt = 0
                var fprice = 0
                var arr = []
                arr.push(lodash.cloneDeep(temp.fetchOrder))
                for (var i = 0; i < data.length; i++) {

                    if (s != data[i].orderid) {
                        scnt++;
                        fcnt = 0
                        fprice = 0
                        s = data[i].orderid
                        arr[0].contents.contents[scnt] = lodash.cloneDeep(temp.orderComplete.contents)
                        arr[0].contents.contents[scnt].body.contents.splice(3, 1)
                        arr[0].contents.contents[scnt].body.contents[0].text = data[i].status
                        if (data[i].status == "未接單" || data[i].status == "製作中" || data[i].status == "等待取餐") { arr[0].contents.contents[scnt].body.contents[0].color = '#7BC5FE' }
                        else if (data[i].status == "已拒絕" || data[i].status == "逾時未取餐") { arr[0].contents.contents[scnt].body.contents[0].color = '#FF5B5B' }
                        else if (data[i].status == "已取餐") { arr[0].contents.contents[scnt].body.contents[0].color = '#63BB72' }
                        arr[0].contents.contents[scnt].body.contents[1].contents[1].text = data[i].storeName
                        arr[0].contents.contents[scnt].body.contents[2].contents[1].text = data[i].orderid
                        var orderMonth = ((data[i].orderDate).getMonth() + 1 < 10 ? '0' : '') + ((data[i].orderDate).getMonth() + 1)
                        var orderDate = ((data[i].orderDate).getDate() < 10 ? '0' : '') + (data[i].orderDate).getDate()
                        arr[0].contents.contents[scnt].body.contents[3].contents[1].text = (data[i].orderDate).getFullYear() + "-" + orderMonth + "-" + orderDate
                        arr[0].contents.contents[scnt].body.contents[3].contents[2].text = data[i].orderTime.substring(0, 5)

                        var takeMonth = ((data[i].takeDate).getMonth() + 1 < 10 ? '0' : '') + ((data[i].takeDate).getMonth() + 1)
                        var takeDate = ((data[i].takeDate).getDate() < 10 ? '0' : '') + (data[i].takeDate).getDate()
                        arr[0].contents.contents[scnt].body.contents[4].contents[1].text = (data[i].takeDate).getFullYear() + "-" + takeMonth + "-" + takeDate
                        arr[0].contents.contents[scnt].body.contents[4].contents[2].text = data[i].takeTime.substring(0, 5)

                    }
                    var tempRe = lodash.cloneDeep(temp.orderCompleteRepeat)
                    arr[0].contents.contents[scnt].body.contents[5].contents[fcnt + 2] = tempRe
                    arr[0].contents.contents[scnt].body.contents[5].contents[fcnt + 2].contents[0].contents[0].text = data[i].foodName
                    arr[0].contents.contents[scnt].body.contents[5].contents[fcnt + 2].contents[1].contents[0].text = data[i].quantity
                    arr[0].contents.contents[scnt].body.contents[5].contents[fcnt + 2].contents[2].contents[0].text = "$" + data[i].unitPrice
                    fprice += data[i].quantity * data[i].unitPrice
                    arr[0].contents.contents[scnt].footer.contents[1].contents[0].text = "總價 : " + fprice
                    arr[0].contents.contents[scnt].footer.contents[1].contents[1].text = "地址 : " + data[i].storeAdd
                    fcnt++;
                }
                event.reply(arr);
            }
        })
    });
}


//匯出
module.exports = { orderRecord };