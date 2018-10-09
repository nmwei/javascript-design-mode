var getUserInfo = function () {
  ajax('http:// xxx.com/userInfo', function (data) {
    console.log('userId: ' + data.userId);
    console.log('userName: ' + data.userName);
    console.log('nickName: ' + data.nickName);
  })
}

//改成
var getUserInfo = function () {
  ajax('http:// xxx.com/userInfo', function (data) {
    printDetails(data);
  });
};
var printDetails = function (data) {
  console.log('userId: ' + data.userId);
  console.log('userName: ' + data.userName);
  console.log('nickName: ' + data.nickName);
};





var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
    jump(currPage); // 跳转 
  } else if (currPage >= totalPage) {
    currPage = totalPage;
    jump(currPage);
  } else {
    jump(currPage);
  }
};

//改成
var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
  } else if (currPage >= totalPage) {
    currPage = totalPage;
  }
  jump(currPage); // 把 jump 函数独立出来 
};



var getPrice = function (price) {
  var date = new Date();
  if (date.getMonth() >= 6 && date.getMonth() <= 9) {
    return price * 0.8;
  }
  return price;
};


var isSummer = function () {
  var date = new Date();
  return date.getMonth() >= 6 && date.getMonth() <= 9;
};
var getPrice = function (price) {
  if (isSummer()) { // 夏天
    return price * 0.8;
  }
  return price;
};


var createXHR = function () {
  var xhr;
  try {
    xhr = new ActiveXObject('MSXML2.XMLHttp.6.0');
  } catch (e) {
    try {
      xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
    } catch (e) {
      xhr = new ActiveXObject('MSXML2.XMLHttp');
    }
  }
  return xhr;
};
var xhr = createXHR();


var createXHR = function () {
  var versions = ['MSXML2.XMLHttp.6.0ddd', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
  for (var i = 0, version; version = versions[i++];) {
    try {
      return new ActiveXObject(version);
    } catch (e) {
    }
  }
};
var xhr = createXHR();


var del = function (obj) {
  var ret;
  if (!obj.isReadOnly) { // 不为只读的才能被删除
    if (obj.isFolder) { // 如果是文件夹
      ret = deleteFolder(obj);
    } else if (obj.isFile) {
      ret = deleteFile(obj);
    }
  }
  return ret;
};

var del = function (obj) {
  if (obj.isReadOnly) {
    return;
  }
  if (obj.isFolder) {
    return deleteFolder(obj);
  }
  if (obj.isFile) {
    return deleteFile(obj);
  }
};