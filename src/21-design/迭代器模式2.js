const getActiveUploadObj = () => {
  try{
    return new ActiveXObject('TXFTNActiveX.FTNUpload')
  } catch (e) {
    return false
  }
}

const getFlashUploadObj = () => {
  if(supportFlash()) {
    const str = '<object type="application/x-shockwave-flash"></object>'
    return $(str).appendTo($('body'))
  }
}

const getFormUploadObj = () => {
  const str = '<input name="file" type="file" class="ui-file" />'
  return $(str).appendTo($('body'))
}

const interatorUploadObj = function(){
  for(let i = 0, fn; fn=arguments[i++];) {
    var uploadObj = fn()
    if(uploadObj !== false) {
      return uploadObj
    }
  } 
}

const uploadObj = interatorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)
