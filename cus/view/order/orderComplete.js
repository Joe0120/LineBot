
//引用操作資料庫的物件
var lodash = require('lodash');
const temp = require('./../../temp');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var orderComplete = function (event, oCart, cOrderid, cOrderDate, cOrderTime) {
    event.source.profile().then(function (profile) {
        var i = oCart.arrfood.length;
        var cartTotalPrice = 0;
        var arr = [];
        arr.push(lodash.cloneDeep(temp.orderComplete))
        arr[0].contents.body.contents[1].contents[1].text = oCart.storeName
        arr[0].contents.body.contents[2].contents[1].text = cOrderid
        arr[0].contents.body.contents[4].contents[1].text = cOrderDate
        arr[0].contents.body.contents[4].contents[2].text = cOrderTime
        arr[0].contents.body.contents[5].contents[1].text = oCart.takeDate
        arr[0].contents.body.contents[5].contents[2].text = oCart.takeTime
        arr[0].contents.footer.contents[1].contents[1].text = "地址 : " + oCart.storeAdd

        for (var k = 0; k < i; k++) {
            var tempRe = lodash.cloneDeep(temp.orderCompleteRepeat)
            var Afood = oCart.arrfood[k]
            var cfoodName = Afood.foodName;
            var cfoodPrice = Afood.foodPrice;
            var cfoodQty = Afood.foodQty;
            var foodAmt = cfoodPrice * cfoodQty;
            cartTotalPrice += foodAmt
            //把餐點加入模板
            tempRe.contents[0].contents[0].text = cfoodName
            tempRe.contents[1].contents[0].text = cfoodQty
            tempRe.contents[2].contents[0].text = cfoodPrice
            arr[0].contents.body.contents[6].contents[k + 2] = tempRe
        }
        arr[0].contents.footer.contents[1].contents[0].text = "總價 : $" + cartTotalPrice
        event.reply(arr);

    });
}


//匯出
module.exports = { orderComplete };

