
//引用操作資料庫的物件
var lodash = require('lodash');
const temp = require('./../../temp');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var Cart = function (event, oCart) {
    event.source.profile().then(function (profile) {
        var i = oCart.arrfood.length;
        var cstoreName = oCart.storeName;

        var arr = []
        arr.push(lodash.cloneDeep(temp.temp_cart))
        arr[0].contents.body.contents[0].text = oCart.userName + " 的購物車";
        arr[0].contents.body.contents[1].contents[0].text = cstoreName;
        arr[0].contents.hero.url = oCart.storeimg;
        var cartTotalPrice = 0;
        for (var k = 0; k < i; k++) {
            var Afood = oCart.arrfood[k]
            cartTotalPrice += Afood.foodPrice * Afood.foodQty
            arr[0].contents.body.contents[3].contents[k + 1] = lodash.cloneDeep(temp.temp_cart_repeat)
            arr[0].contents.body.contents[3].contents[k + 1].contents[0].contents[0].text = Afood.foodName
            arr[0].contents.body.contents[3].contents[k + 1].contents[1].contents[0].text = Afood.foodQty
            arr[0].contents.body.contents[3].contents[k + 1].contents[2].contents[0].text = Afood.foodPrice
        }
        if (oCart.takeDate.length != 0) {

            arr[0].contents.body.contents[5].contents[0].text = "取餐時間 : " + oCart.takeDate + " " + oCart.takeTime;
            arr[0].contents.footer.contents[2].action.label = "修改取餐時間"

        } else {
            arr[0].contents.body.contents[5].contents[0].text = "取餐時間 : 未輸入";
            arr[0].contents.footer.contents[2].action.label = "輸入取餐時間"
        }
        var today = new Date();
        Date.prototype.addDays = function (days) {
            this.setDate(this.getDate() + days);
            return this;
        }
        //--date-time-formate---start------
        var cHours = '';
        if (today.getHours() + 8 >= 24) {
            cHours = (today.getHours() + 8 - 24 < 10 ? '0' : '') + (today.getHours() + 8 - 24);
            today.addDays(1);
        } else {
            cHours = (today.getHours() + 8 < 10 ? '0' : '') + (today.getHours() + 8);
        }
        var cMINMonth = (today.getMonth() + 1 < 10 ? '0' : '') + (today.getMonth() + 1)
        var cMAXMonth = (today.getMonth() + 3 < 10 ? '0' : '') + (today.getMonth() + 3)
        var cDay = (today.getDate() < 10 ? '0' : '') + today.getDate();
        var cMinutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        //--date-time-formate---end--------
        var cTakeMIN = today.getFullYear() + "-" + cMINMonth + "-" + cDay + "T" + cHours + ':' + cMinutes;
        var cTakeMAX = today.getFullYear() + "-" + cMAXMonth + "-" + cDay + "T" + cHours + ':' + cMinutes;
        // var cTakeTime =cHours+':'+cMinutes;

        cTakeMIN.toString();
        arr[0].contents.footer.contents[2].action.min = cTakeMIN
        arr[0].contents.footer.contents[2].action.max = cTakeMAX

        arr[0].contents.body.contents[6].contents[0].text = "總價 : $" + cartTotalPrice;
        arr[0].contents.footer.contents[0].action.text = "購物車,修改餐點"//修改餐點
        arr[0].contents.footer.contents[1].action.text = "店家,查看菜單," + oCart.storeid;//繼續點餐

        event.reply(arr);
    });
}


//匯出
module.exports = { Cart };