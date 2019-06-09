
//引用操作資料庫的物件
const order = require('../../route/order');
const orderComplete = require('./orderComplete');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var sendOrder = function (event, oCart, cUserid) {
    event.source.profile().then(function (profile) {
        var cStoreid = oCart.storeid
        var cTakeDate = oCart.takeDate
        var cTakeTime = oCart.takeTime
        //--date-time-formate---start------
        var today = new Date();
        Date.prototype.addDays = function (days) {
            this.setDate(this.getDate() + days);
            return this;
        }
        var cHours = '';
        if (today.getHours() + 8 >= 24) {
            cHours = (today.getHours() + 8 - 24 < 10 ? '0' : '') + (today.getHours() + 8 - 24);
            today.addDays(1);
        } else {
            cHours = (today.getHours() + 8 < 10 ? '0' : '') + (today.getHours() + 8);
        }
        var cMonth = (today.getMonth() + 1 < 10 ? '0' : '') + (today.getMonth() + 1)
        var cDay = (today.getDate() < 10 ? '0' : '') + today.getDate();

        var cMinutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        //--date-time-formate---end--------
        var cOrderDate = today.getFullYear() + "-" + cMonth + "-" + cDay;
        var cOrderTime = cHours + ':' + cMinutes;
        //--cOrderDate-cOrderTime--end--------

        order.addOrder(cStoreid, cUserid, cOrderDate, cOrderTime, cTakeDate, cTakeTime).then(data => {
            if (data == -9) {
                event.reply('執行錯誤a');
            } else {
                var cOrderid = data.orderid;
                var i = oCart.arrfood.length;
                for (var k = 0; k < i; k++) {
                    var Afood = oCart.arrfood[k]
                    var cfoodid = Afood.foodid;
                    var cfoodPrice = Afood.foodPrice;
                    var cfoodQty = Afood.foodQty;
                    var foodAmt = cfoodPrice * cfoodQty;
                    order.addOrderDetail(cOrderid, cfoodid, cfoodPrice, cfoodQty, foodAmt).then(data => {
                        if (data == -9) {
                            event.reply("執行錯誤b");
                        } else {
                            orderComplete.orderComplete(event, oCart, cOrderid, cOrderDate, cOrderTime)
                        }
                    })
                }
            }
        })
    });
}


//匯出
module.exports = { sendOrder };

