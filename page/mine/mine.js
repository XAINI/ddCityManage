Page({
  data: {},
  formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      alert(e.detail.value.pwd)
    },
  formReset() {
      
  },
  onLoad() {},
});
