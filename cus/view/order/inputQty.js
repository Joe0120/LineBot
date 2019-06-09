
//引用操作資料庫的物件
const obj2null = require('./../../../obj2null');
const Cart = require('./Cart');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var inputQty = function (event, oPsnl, msg1, statusText) {
    event.source.profile().then(function (profile) {

        var isNum = /^[0-9]+$/;
        var x = Boolean(!isNum.test(msg1));
        var y = Boolean(parseInt(msg1) < 1);
        if (x || y) { oPsnl.Status.statusTime--; }
        var z = Boolean(oPsnl.Status.statusTime > 0);
        if (z) {
            if (x) {
                event.reply([
                    { 'type': 'text', 'text': '請輸入數字 ! ' },
                    { 'type': 'text', 'text': '你還剩' + oPsnl.Status.statusTime + '次機會' }]
                );
            } else if (y) {
                event.reply([
                    { 'type': 'text', 'text': '請輸入大於0的數字啦 ! ' },
                    { 'type': 'text', 'text': '你還剩' + oPsnl.Status.statusTime + '次機會' }]
                );
            } else {

                var i = oPsnl.Cart.arrfood.length;

                for (var m = 0; m < i; m++) {
                    if (oPsnl.Cart.arrfood[m].foodid == oPsnl.Status.statusText) {
                        if(statusText == "inputQty"){
                            var oldQty = parseInt(oPsnl.Cart.arrfood[m].foodQty);
                            var newQty = (oldQty + parseInt(msg1)).toString();
                            oPsnl.Cart.arrfood[m].foodQty = newQty;
                        }else if(statusText == "changeQty"){
                            oPsnl.Cart.arrfood[m].foodQty = msg1;
                        }
                        break;
                    }
                }
                Cart.Cart(event, oPsnl.Cart)
                obj2null.status(oPsnl)
            }
        } else {
            obj2null.status(oPsnl)
            event.reply('請重新點餐')
        }
    });
}


//匯出
module.exports = { inputQty };

