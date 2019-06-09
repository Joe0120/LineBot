
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var StatusAddin = function (oPsnl, status, statusTime, statusText) {
    console.log("Add++")
    oPsnl.Status = {
        'status': status,
        'statusTime': statusTime,
        'statusText': statusText
    }
    console.log(oPsnl.Status)
}
//匯出
module.exports = { StatusAddin };

