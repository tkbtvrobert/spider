
var xhr = new XMLHttpRequest()

xhr.open('POST', 'http://www.cninfo.com.cn/new/disclosure', true)

xhr.setRequestHeader('aaaa', 'Frank')

xhr.onreadystatechange = function () {
    if(xhr.status === 200){
        console.log(xhr.response);
    }
}

xhr.send('column=szse_gem_latest&pageNum=1&pageSize=30&sortName=&sortType=&clusterFlag=true')