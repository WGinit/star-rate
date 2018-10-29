const app = getApp()

Page({
  data: {
    score: 0
  },

  onLoad(options){

  },
  changeStar (e) {
    if (e.detail.score !== '' && e.detail.hasHalfStar) {
      this.setData({
        score: e.detail.score
      })
    }
    if (!e.detail.hasHalfStar) {
      console.log(e.detail.score)
    }
  }
})