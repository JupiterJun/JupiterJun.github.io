//document.write('IP地址:' + returnCitySN["cip"] + ', CID:' + returnCitySN["cid"] + ', 地区:' + returnCitySN["cname"] + ",浏览器版本:" + getBrowserInfo());

AV.init({
    appId: "VSGmCrxfAW5rz5SELuCzwOWX-gzGzoHsz",
    appKey: "pycmoYrCM6dKYG1cmwCvukct",
    serverURL: "https://vsgmcrxf.lc-cn-n1-shared.com"
  });
// 声明 class
const IP = AV.Object.extend('IP');

// 构建对象
const IP = new IP();

// 为属性赋值
IP.set('ip', returnCitySN["cip"]);
IP.set('cid', returnCitySN["cid"]);
IP.set('city', returnCitySN["cname"]);
IP.set('browser', getBrowserInfo());

// 将对象保存到云端
IP.save().then((IP) => {
    // 成功保存之后，执行其他逻辑
    console.log(`保存成功。objectId：${IP.id}`);
}, (error) => {
    // 异常处理
});

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }

}