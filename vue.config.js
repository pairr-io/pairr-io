module.exports = {
  //vuex-persist is for keeping state on page refresh
transpileDependencies: ['vuex-persist'],
devServer:{
  proxy:{
    '/api':{
      target:'http://localhost:8080',
      ws:true,
      changeOrigin:true
    }
  }
}
}