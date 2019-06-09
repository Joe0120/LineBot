
//引用操作資料庫的物件
const temp = require('./../../temp');
const obj2addin = require('./../../../obj2addin');
var lodash = require('lodash');
var modCart = require('./modCart')
//------------------------------------------
// 查詢所有的店家
//------------------------------------------

var modCart = function (event, oCart) {
    event.source.profile().then(function (profile) {
        if (oCart.arrfood.length > 0) {
            var arr = [];
            arr.push(lodash.cloneDeep(temp.temp_menu));
            for (var i = 0; i < oCart.arrfood.length; i++) {
                arr[0].contents.contents[i] = lodash.cloneDeep(temp.temp_menu_repeat)
                arr[0].contents.contents[i].hero.url = oCart.arrfood[i].foodimg
                arr[0].contents.contents[i].body.contents[0].text = oCart.arrfood[i].foodName
                arr[0].contents.contents[i].body.contents[1].contents[0].contents[0].text = "數量 : "
                arr[0].contents.contents[i].body.contents[1].contents[0].contents[1].text = oCart.arrfood[i].foodQty + " 份"

                arr[0].contents.contents[i].body.contents[2] = lodash.cloneDeep(temp.temp_modCart_QtyPrice)
                arr[0].contents.contents[i].body.contents[2].contents[0].contents[1].text = "NT$" + oCart.arrfood[i].foodPrice
                arr[0].contents.contents[i].body.contents[3] = { "type": "separator" }
                arr[0].contents.contents[i].body.contents[4] = lodash.cloneDeep(temp.temp_modCart_QtyPrice)
                arr[0].contents.contents[i].body.contents[4].contents[0].contents[0].text = "小計 : "
                arr[0].contents.contents[i].body.contents[4].contents[0].contents[1].text = "NT$" + oCart.arrfood[i].foodPrice * oCart.arrfood[i].foodQty

                arr[0].contents.contents[i].footer = lodash.cloneDeep(temp.temp_modCart_footer)
                arr[0].contents.contents[i].footer.contents[0].action.text = "購物車,修改餐點數量," + oCart.arrfood[i].foodid
                arr[0].contents.contents[i].footer.contents[1].action.text = "購物車,刪除餐點," + oCart.arrfood[i].foodid
            }
            event.reply([{ 'type': 'text', 'text': '目前的餐點' }, arr[0]]);
        } else {
            event.reply([
                { 'type': 'text', 'text': '購物車已清空' },
                { 'type': 'text', 'text': '請重新點餐' }]
            );
        }

    });
}

var modFood = function (event, oPsnl, mod_action, mod_foodid) {
    event.source.profile().then(function (profile) {
        var m = oPsnl.Cart.arrfood.length;
        for (var i = 0; i < m; i++) {
            if (oPsnl.Cart.arrfood[i].foodid == mod_foodid) {
                if (mod_action == "修改餐點數量") {
                    obj2addin.StatusAddin(oPsnl, "changeQty", 2, mod_foodid)
                    event.reply("數量?");
                } else if (mod_action == "刪除餐點") {
                    oPsnl.Cart.arrfood.splice(i, 1)
                    modCart(event, oPsnl.Cart)
                }
                break;
            } else if (i == m - 1) {
                event.reply('您的購物車沒有此餐點');

            }

        }
    });
}
//匯出
module.exports = { modCart, modFood };


