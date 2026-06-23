const { WEBVIEW_URL } = require("../../utils/config");

Page({
  data: {
    webviewUrl: WEBVIEW_URL
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: "山野集合"
    });
  }
});
