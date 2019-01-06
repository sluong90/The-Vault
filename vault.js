'use strict';
module.exports = function() {
  let obj = {};
    function setValue(key,value){
    obj[key] = value;
    }
    function getValue(key){
    if(obj[key]=== undefined){
    return null  }else{
    return obj[key]    
    }
}
    
return{
setValue,
getValue
}
}
    
