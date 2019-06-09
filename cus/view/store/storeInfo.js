
//引用操作資料庫的物件
const temp = require('./../../temp');
const store = require('../../route/store');
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var storeInfo = function (event, lodash) {
    event.source.profile().then(function (profile) {
        store.fetchStore().then(data => {
            if (data == -1) {
                event.reply('找不到資料');
            } else if (data == -9) {
                event.reply('執行錯誤');
            } else {
                var arrStoreList = [];
                arrStoreList.push(lodash.cloneDeep(temp.temp_store));
                for (var i = 0; i < data.length; i++) {
                    arrStoreList[0].contents.contents[i] = lodash.cloneDeep(temp.temp_store_repeat)
                    if(data[i].storeimg != null){arrStoreList[0].contents.contents[i].hero.url = data[i].storeimg;}
                    arrStoreList[0].contents.contents[i].body.contents[0].text = data[i].storeName;
                    arrStoreList[0].contents.contents[i].body.contents[1].contents[0].contents[1].text = data[i].storeAdd;
                    arrStoreList[0].contents.contents[i].body.contents[1].contents[1].contents[1].text = data[i].storeTel;
                    arrStoreList[0].contents.contents[i].footer.contents[0].action.text = "店家,查看菜單," + data[i].storeid;
                    arrStoreList[0].contents.contents[i].footer.contents[1].action.text = "店家,聯絡店家," + data[i].storeid;
                }
                event.reply(arrStoreList[0]);
            }
        })
    });
}
var storeTel = function (event, storeid) {
    event.source.profile().then(function (profile) {
        store.fetchStoreTel(storeid).then(data => {
            if (data == -1) {
                event.reply('找不到資料');
            } else if (data == -9) {
                event.reply('執行錯誤');
            } else {
                event.reply([
                    { 'type': 'text', 'text': '連絡電話 :' },
                    { 'type': 'text', 'text': data.storeTel }]
                );
            }
        })

    });
}
//匯出
module.exports = { storeInfo, storeTel };


