// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {id:1,text:'今天我干了什么',finished:true},
      { id: 1, text: '今天我干了什么', finished: true },
      { id: 1, text: '今天我干了什么', finished: true },
      { id: 1, text: '今天我干了什么', finished: false },
      { id: 1, text: '今天我干了什么', finished: false },
      { id: 1, text: '今天我干了什么', finished: false },
      { id: 1, text: '今天我干了什么', finished: false },
      { id: 1, text: '今天我干了什么', finished: false },
    ],
    visible:false,
    
  },
  confirmCreate(event) {
    let content = event.detail
    if(content){
      
      let todo = [{id: this.data.lists.length+1,text: content,finished: false}]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.cancel()
    }
   
  },
  destroytodo(event){
    let index = event.currentTarget.dataset.index
    
    this.data.lists[index].finished = true
    this.setData({lists:this.data.lists})
  },
  cancel() {
    this.setData({visible:false})
  },
  showConfirm(){
    this.setData({visible:true})
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