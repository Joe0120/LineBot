
//------------------------------------------
// 查詢所有的店家
//------------------------------------------
var status = function (oPsnl) {
    if (oPsnl.Status.status != "") {
        oPsnl.Status.status = "";
        oPsnl.Status.statusTime = 0;
        oPsnl.Status.statusText = "";
    }
    if (oPsnl.Cart.storeid != "") {
        var i = oPsnl.Cart.arrfood.length;
        if (i > 0) {
            for (var m = 0; m < i; m++) {
                if (oPsnl.Cart.arrfood[m].foodQty == 0) {
                    oPsnl.Cart.arrfood.splice(m, 1)
                }
            }
        }
    }
}
var cart = function (oPsnl) {
    if (oPsnl.Status.status != "") {
        oPsnl.Status.status = "";
        oPsnl.Status.statusTime = 0;
        oPsnl.Status.statusText = "";
    }
    if (oPsnl.Cart.storeid != "") {
        oPsnl.Cart = { 'storeid': "" }
    }
}
//匯出
module.exports = { status, cart };

