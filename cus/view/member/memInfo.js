
//引用操作資料庫的物件
const temp = require('../../temp');
const member = require('../../route/member');
const obj2null = require('../../../obj2null');
//------------------------------------------
// 新增會員資料
//------------------------------------------
var memFirstIn = function (event, lodash) {
    //存放結果
    event.source.profile().then(function (profile) {
        const userId = profile.userId;
        const userName = profile.displayName;
        member.addMember(userId, userName).then(data => {
            if (data == -9) {
                event.reply('執行錯誤');
            } else {
                var arr = []
                arr.push(lodash.cloneDeep(temp.temp_memInfo))
                arr[0].template.actions[1].label = "加入電話"
                arr[0].template.text = "姓名 : " + data.name + "\n電話 : " + data.phone
                event.reply([
                    { 'type': 'text', 'text': '已加入會員, Hi !' },
                    { 'type': 'text', 'text': '請更新您的會員資訊' },
                    arr[0]
                ]);
            }
        })
    });
}
var memInfo = function (event, lodash) {
    //存放結果
    event.source.profile().then(function (profile) {
        member.fetchMember(profile.userId).then(data => {
            if (data == -1) {
                console.log("找不到資料")
            } else if (data == -9) {
                console.log("執行錯誤")
            } else {
                var arr = []
                arr.push(lodash.cloneDeep(temp.temp_memInfo))
                if (data.phone == null) { arr[0].template.actions[1].label = "加入電話" }
                arr[0].template.text = "姓名 : " + data.name + "\n電話 : " + data.phone
                event.reply(arr[0]);
            }
        })
    });
}
var fetchMemInfo = function (userid, oCart) {//--
    //存放結果
    member.fetchMember(userid).then(data => {
        if (data == -1) {
            console.log("找不到資料")
        } else if (data == -9) {
            console.log("執行錯誤")
        } else {
            oCart.userName = data.name
            oCart.userPhone = data.phone
        }
    })
}
var changeMemInfo = function (event, oPsnl, s, newinfo, lodash) {

    if (s == "編輯姓名") {
        member.UpdateName(newinfo, oPsnl.userid).then(data => {
            if (data == -1) {
                event.reply('找不到資料');
            } else if (data == -9) {
                event.reply('執行錯誤');
            } else {
                if (oPsnl.Cart.storeid != "") { oPsnl.Cart.userName = newinfo }
                var arr = []
                arr.push(lodash.cloneDeep(temp.temp_memInfo))
                if (data.phone == null) { arr[0].template.actions[1].label = "加入電話" }
                arr[0].template.text = "姓名 : " + data.name + "\n電話 : " + data.phone
                event.reply([
                    { 'type': 'text', 'text': '姓名已編輯完成' },
                    arr[0]
                ]);
                obj2null.status(oPsnl)
            }
        })
    } else if (s == "編輯電話") {
        newinfo = newinfo.trim()
        var isNum = /^[0-9]+$/;
        var x = Boolean(!isNum.test(newinfo))
        var y = Boolean(newinfo.length != 10)
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
                    { 'type': 'text', 'text': '請輸入10位數的電話號碼 ! ' },
                    { 'type': 'text', 'text': '你還剩' + oPsnl.Status.statusTime + '次機會' }]
                );
            } else {
                member.UpdatePhone(newinfo, oPsnl.userid).then(data => {
                    if (data == -1) {
                        event.reply('找不到資料');
                    } else if (data == -9) {
                        event.reply('執行錯誤');
                    } else {
                        obj2null.status(oPsnl)
                        if (oPsnl.Cart.storeid != "") { oPsnl.Cart.userPhone = newinfo }
                        var arr = []
                        arr.push(lodash.cloneDeep(temp.temp_memInfo))
                        arr[0].template.text = "姓名 : " + data.name + "\n電話 : " + data.phone
                        event.reply([
                            { 'type': 'text', 'text': '電話已編輯完成' },
                            arr[0]
                        ]);
                    }


                })
            }
        } else {
            event.reply('修改電話失敗');
        }

    }



}

//匯出
module.exports = { memInfo, memFirstIn, changeMemInfo, fetchMemInfo };


