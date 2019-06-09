
var temp_memInfo =
{
  "type": "template",
  "altText": "this is a buttons template",
  "template": {
    "type": "buttons",
    "actions": [
      {
        "type": "message",
        "label": "修改姓名",
        "text": "會員,編輯姓名"
      },
      {
        "type": "message",
        "label": "修改電話",
        "text": "會員,編輯電話"
      }
    ],
    "title": "會員資訊",
    "text": "內文"
  }
}
var temp_store =
{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [

    ]
  }
}
var temp_store_repeat =
{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": 'data[i].storeName',
        "size": "xl",
        "weight": "bold"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "margin": "lg",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Place",
                "flex": 1,
                "size": "sm",
                "color": "#AAAAAA"
              },
              {
                "type": "text",
                "text": 'data[i].storeAdd',
                "flex": 5,
                "size": "sm",
                "color": "#666666",
                "wrap": true
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Tel",
                "flex": 1,
                "size": "sm",
                "color": "#AAAAAA"
              },
              {
                "type": "text",
                "text": 'data[i].storeTel',
                "flex": 5,
                "size": "sm",
                "color": "#666666",
                "wrap": true
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "flex": 0,
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "action": {
          "type": "message",
          "label": "查看菜單",
          "text": "店家,查看菜單," + 'data[i].storeid'
        },
        "height": "sm",
        "style": "link"
      },
      {
        "type": "button",
        "action": {
          "type": "message",
          "label": "聯絡店家",
          "text": "店家,聯絡店家," + 'data[i].storeid'
        },
        "height": "sm",
        "style": "link"
      },
      {
        "type": "spacer",
        "size": "sm"
      }
    ]
  }
}
var temp_menu = {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [

    ]
  }
}
var temp_menu_repeat = {
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "text",
        "text": 'data[i].foodName',
        "size": "xl",
        "weight": "bold"
      },
      {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "text",
                "text": "單價",
                "flex": 1,
                "size": "lg",
                "color": "#AAAAAA"
              },
              {
                "type": "text",
                "text": '"NT$" + data[i].foodPrice',
                "flex": 0,
                "margin": "lg",
                "size": "lg",
                "align": "end",
                "weight": "regular"
              }
            ]
          }
        ]
      },
      /*{
        "type": "text",
        "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
        "size": "xs",
        "color": "#AAAAAA",
        "wrap": true
      }*/
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "button",
        "action": {
          "type": "message",
          "label": "加入購物車",
          "text": '"店家,加入購物車," + data[i].storeid + "," + data[i].foodid'
        },
        "color": "#905C44",
        "style": "primary"
      }
    ]
  }

}
var temp_modCart_QtyPrice = {
  "type": "box",
  "layout": "vertical",
  "spacing": "sm",
  "contents": [
    {
      "type": "box",
      "layout": "baseline",
      "contents": [
        {
          "type": "text",
          "text": "單價 : ",
          "flex": 1,
          "size": "lg",
          "color": "#AAAAAA"
        },
        {
          "type": "text",
          "text": 'foodPrice',
          "flex": 0,
          "margin": "lg",
          "size": "lg",
          "align": "end",
          "weight": "regular"
        }
      ]
    }
  ]
}
var temp_modCart_footer = {
  "type": "box",
  "layout": "vertical",
  "flex": 0,
  "spacing": "sm",
  "contents": [
    {
      "type": "button",
      "action": {
        "type": "message",
        "label": "修改數量",
        "text": "修改數量"
      },
      "height": "sm",
      "style": "link"
    },
    {
      "type": "button",
      "action": {
        "type": "message",
        "label": "刪除",
        "text": "刪除"
      },
      "color": "#EF4417",
      "height": "sm",
      "style": "link"
    },
    {
      "type": "spacer",
      "size": "sm"
    }
  ]
}
var temp_cart = {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "hero": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "購物車",
          "size": "xl",
          "align": "start",
          "weight": "bold"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "芭樂",
              "size": "lg",
              "align": "start",
              "weight": "regular"
            }
          ]
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "餐點名稱",
                  "size": "md",
                  "align": "start"
                },
                {
                  "type": "text",
                  "text": "份量",
                  "size": "md",
                  "align": "center"
                },
                {
                  "type": "text",
                  "text": "單價",
                  "size": "md",
                  "align": "end"
                }
              ]
            },//title
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "xxl",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "芭樂",
                      "flex": 0,
                      "size": "sm",
                      "align": "start",
                      "weight": "bold",
                      "wrap": true
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "99",
                      "size": "md",
                      "align": "center",
                      "color": "#AAAAAA"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "$100",
                      "margin": "xxl",
                      "size": "sm",
                      "align": "end",
                      "color": "#AAAAAA",
                      "wrap": false
                    }
                  ]
                }
              ]
            }//foodrepeat
          ]
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "取餐時間 : ",
              "size": "sm",
              "align": "start",
              "weight": "regular"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "總價 : $-3,400",
              "size": "xl",
              "align": "end",
              "color": "#000000"
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "修改餐點",
            "text": "修改餐點"
          },
          "color": "#58290C"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "繼續點餐",
            "text": "繼續點餐"
          },
          "color": "#58290C"
        },
        {
          "type": "button",
          "action": {
            "type": "datetimepicker",
            "label": "設定取餐時間",
            "mode": "datetime",
            "data": "datetime",
            "max": "2019-05-07T23:59",
            "min": "2019-04-29T00:00"
          },
          "color": "#58290C"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "完成訂單",
            "text": "購物車,送出訂單"
          },
          "color": "#58290C"
        }
      ]
    }
  }
}
var temp_cart_repeat = {
  "type": "box",
  "layout": "horizontal",
  "spacing": "xxl",
  "contents": [
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "芭樂",
          "flex": 0,
          "size": "md",
          "align": "start",
          "weight": "bold",
          "wrap": true
        }
      ]
    },
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "99",
          "size": "md",
          "align": "center",
          "color": "#AAAAAA"
        }
      ]
    },
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "$100",
          "margin": "xxl",
          "size": "md",
          "align": "end",
          "color": "#AAAAAA",
          "wrap": false
        }
      ]
    }
  ]
}
var orderComplete = {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "您已完成下訂",
          "size": "xl",
          "align": "center",
          "weight": "bold",
          "color": "#000000"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "店家 : ",
              "size": "md",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "青島早餐店",
              "size": "md",
              "align": "start"
            },
            {
              "type": "filler"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "編號 :",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "AXXXXXXX",
              "size": "sm",
              "align": "start"
            },
            {
              "type": "filler"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "訂單狀況 :",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "未接單"
            },
            {
              "type": "filler"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "訂餐日期 :",
              "margin": "none",
              "align": "start",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "2019/12/31",
              "size": "sm",
              "align": "center"
            },
            {
              "type": "text",
              "text": "12:59",
              "margin": "sm",
              "size": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "取餐日期 :",
              "margin": "none",
              "align": "start",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "2019/12/31",
              "size": "sm",
              "align": "center"
            },
            {
              "type": "text",
              "text": "12:59",
              "margin": "sm",
              "size": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "separator"
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "餐點名稱",
                  "align": "start"
                },
                {
                  "type": "text",
                  "text": "份量",
                  "align": "center"
                },
                {
                  "type": "text",
                  "text": "單價",
                  "align": "end"
                }
              ]
            }//
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "總價:",
              "size": "xl",
              "align": "end"
            },
            {
              "type": "text",
              "text": "地址 : 不告訴你"
            },
            /*{
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "備註 :"
                }
              ]
            }*/
          ]
        },
        /*{
          "type": "text",
          "text": "顆顆顆顆顆",
          "size": "xs",
          "align": "start",
          "color": "#CCCCCC",
          "wrap": true
        }*/
      ]
    }
  }
}
var orderCompleteRepeat = {
  "type": "box",
  "layout": "horizontal",
  "spacing": "xxl",
  "contents": [
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "芭樂",
          "flex": 0,
          "size": "md",
          "align": "start",
          "weight": "bold",
          "wrap": true
        }
      ]
    },
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "999",
          "size": "md",
          "align": "center",
          "color": "#AAAAAA"
        }
      ]
    },
    {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "$100",
          "margin": "xxl",
          "size": "sm",
          "align": "end",
          "color": "#AAAAAA",
          "wrap": false
        }
      ]
    }
  ]
}
var fetchOrder = {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": []
  }
}

//匯出
module.exports = { temp_memInfo, temp_store, temp_store_repeat, temp_menu, temp_menu_repeat, temp_modCart_QtyPrice, temp_modCart_footer, temp_cart, temp_cart_repeat, orderComplete, orderCompleteRepeat, fetchOrder };
