// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     message:'hello world！',
     div2:2,
     condition:true,
     arr:[{
       id:1,
       text:4
     },{
       id:2,
       text:5
       }, {
         id: 3,
         text: 6
       },],
       str:"我是一条信息",
       arr1:[1,2,3,4],
       obj:{id:1,text:"我是信息一"},
       xxx:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeColor(){
    this.setData({xx:!this.data.xx})
  },
  changeObjText(){
    this.setData({ "obj.text" : "我是信息2"})

    
  },
  reverseStr(){
    this.setData({str:this.data.str.split('').reverse().join('')})
  },
  pushItem(){//不能使用push 方法
    let last = this.data.arr1[this.data.arr1.length-1]+1
    let newArr = [last]
    this.data.arr1= this.data.arr1.concat(newArr)
    this.setData({arr1:this.data.arr1})
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