// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  timer: null,
  data: {
     defaultSecond:1500,
     time:'',
     timerStatus:'stop',
     visible:false,
     againButtonVisible:false,
     finishConfirmVisible:false
  },
  changeTime(){
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond %60)
    if(s===0){
      s="00"
    }
    if((s+"").length ===1){
      s = "0"+s
    }
    if((m+"").length ===1){
      m="0"+m
    }
    this.setData({
      time: `${m}:${s}`
    }) 
  },
  confirmAbandon(event){
    let content = event.detail
    wx.navigateBack({
      to:'-1'
    })

  },
  showConfirm() {
    this.setData({ visible: true })
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({visible:false})
    this.startTimer()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.startTimer()
    
  },
  againTimer(){
    this.data.defaultSecond = 1500
    this.startTimer()
    this.setData({ againButtonVisible: false })
  },
  startTimer(){
    this.setData({timerStatus:'start'})
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
      if(this.data.defaultSecond <= 0){
        this.setData({againButtonVisible:true})
        this.setData({ finishConfirmVisible: true })
        return this.clearTimer()
      }
     
    }, 1000)
  },
  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
    this.setData({ timerStatus:"stop"})
  },
  confirmFinish(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({ finishConfirmVisible: false })

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})