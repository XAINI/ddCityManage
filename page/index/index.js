Page({
    data: {
      imgs: ['/image/pic_fire.jpg', '/image/pic_flower.jpg', '/image/pic_heart.jpg']
    },
    onLoad(){
      
    },
    imageError(e) {
      console.log('image 发生 error 事件，携带值为', e.detail.errMsg);
    },
    imageLoad(e) {
      console.log('image 加载成功', e);
    },
})