
//引用操作資料庫的物件
const temp = require('./../../temp');
const obj2addin = require('./../../../obj2addin');
const order = require('../../route/order');
const memInfo = require('./../member/memInfo');
const member = require('../../route/member');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var addFood2Cart = function (event, oPsnl, cstoreid, cfoodid, lodash) {
    event.source.profile().then(function (profile) {
        member.fetchMember(oPsnl.userid).then(data1 => {
            if (data1 == -1) {
                console.log("找不到資料")
            } else if (data1 == -9) {
                console.log("執行錯誤")
            } else {
                if (data1.phone != null && data1.phone != "") {
                    order.Cartfetchfood(cfoodid).then(data => {
                        if (data == -1) {
                            event.reply('找不到資料');
                        } else if (data == -9) {
                            event.reply('執行錯誤');
                        } else {
                            if (data.storeisOpen != 'Y' || data.storeisOpen == 'N') { event.reply('此店家尚未開放點餐'); }
                            else if (data.foodisSale != 'Y' || data.foodisSale == 'N') { event.reply('此餐點尚未上架'); }
                            else {
                                var cstoreName = data.storeName;
                                var cstoreAdd = data.storeAdd;
                                var cstoreimg = data.storeimg;
                                if (cstoreimg == null) { cstoreimg = "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png" }
                                var cfoodName = data.foodName;
                                var cfoodimg = data.foodimg;
                                if (data.foodimg == null) { cfoodimg = "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png" }
                                var cfoodPrice = data.foodPrice;
                                if (oPsnl.Cart.storeid == "") {
                                    oPsnl.Cart = {
                                        'userName': data1.name,
                                        'userPhone': data1.phone,
                                        'storeid': cstoreid,
                                        'storeName': cstoreName,
                                        'storeimg': cstoreimg,
                                        'storeAdd': cstoreAdd,
                                        'takeDate': '',
                                        'takeTime': '',
                                        'arrfood': []
                                    }
                                }
                                if (oPsnl.Cart.storeid == cstoreid) {
                                    var i = oPsnl.Cart.arrfood.length
                                    if (i != 0) {
                                        for (var m = 0; m < i; m++) {
                                            if (oPsnl.Cart.arrfood[m].foodid == cfoodid) {
                                                break;
                                            } else if (m == i - 1) {
                                                oPsnl.Cart.arrfood.push({
                                                    'foodid': cfoodid,
                                                    'foodName': cfoodName,
                                                    'foodPrice': cfoodPrice,
                                                    'foodimg': cfoodimg,
                                                    'foodQty': 0
                                                })
                                            }
                                        }
                                    } else {
                                        oPsnl.Cart.arrfood.push({
                                            'foodid': cfoodid,
                                            'foodName': cfoodName,
                                            'foodPrice': cfoodPrice,
                                            'foodimg': cfoodimg,
                                            'foodQty': 0
                                        })
                                    }
                                    obj2addin.StatusAddin(oPsnl, "inputQty", 2, cfoodid)

                                    event.reply("數量?");
                                } else {
                                    var arr = []
                                    arr.push(lodash.cloneDeep(temp.temp_memInfo))
                                    arr[0].template.actions[0].label = "是";
                                    arr[0].template.actions[0].text = "是," + cstoreid;
                                    arr[0].template.actions[1].label = "否";
                                    arr[0].template.actions[1].text = "否," + oPsnl.Cart.storeid;
                                    arr[0].template.title = "購物車訊息"
                                    arr[0].template.text = "要改下訂這家店嗎 ?"
                                    obj2addin.StatusAddin(oPsnl, "changeStore", 1, '')
                                    event.reply(arr[0]);
                                }
                            }
                        }
                    })
                } else {
                    var arr = []
                    arr.push(lodash.cloneDeep(temp.temp_memInfo))
                    arr[0].template.actions[1].label = "加入電話"
                    arr[0].template.text = "姓名 : " + data1.name + "\n電話 : " + data1.phone
                    event.reply([
                        { 'type': 'text', 'text': '請先加入電話 !' },
                        arr[0]
                    ]);

                }
            }
        })



    });
}


//匯出
module.exports = { addFood2Cart };

