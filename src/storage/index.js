// 浏览器存值取值
const STORAGE_KEY = 'mall';
export default{
  setItem(key,value,module_name){
    if(module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
      this.setItem(module_name,val)
    }
    let val = this.getStorage()
    val[key] = value;
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  },
  getItem(key,module_name){
    // 获取某一个模块下面的属性user下面的username
    if(module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key]
  },
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) ||'{}'
  },
  clear(key,module_name){
    let val = this.getStorage()
    if(module_name && val[module_name]){
      delete val[module_name][key]
    }else{
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  }
}