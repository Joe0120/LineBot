
//引用操作資料庫的物件
const temp = require('./../../temp');
const store = require('../../route/store');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------

var foodInfo = function (event, storeid, lodash) {
    event.source.profile().then(function (profile) {
        store.fetchStorefood(storeid).then(data => {
            if (data == -1) {
                event.reply('找不到資料');
            } else if (data == -9) {
                event.reply('執行錯誤');
            } else {
                var arr = [];
                arr.push(lodash.cloneDeep(temp.temp_menu));
                for (var i = 0; i < data.length; i++) {
                    arr[0].contents.contents[i] = lodash.cloneDeep(temp.temp_menu_repeat)
                    if(data[i].foodimg != null){arr[0].contents.contents[i].hero.url = data[i].foodimg}
                    arr[0].contents.contents[i].body.contents[0].text = data[i].foodName
                    arr[0].contents.contents[i].body.contents[1].contents[0].contents[1].text = "NT$" + data[i].foodPrice
                    arr[0].contents.contents[i].footer.contents[0].action.text = "店家,加入購物車," + data[i].storeid + "," + data[i].foodid
                }
                event.reply(arr[0]);
            }
        })
    });
}
//匯出
module.exports = { foodInfo };


