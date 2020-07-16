// 记录用户IP和UA
var pathname = window.location.pathname;
var useragent = navigator.userAgent
AV.init({
    appId: "xGabresvEiGFcdMmIJCouOUq-gzGzoHsz",
    appKey: "hvMtv68FBw2HCRPFXe7oHAPy",
    serverURL: "https://xgabresv.lc-cn-n1-shared.com"
  });

const IP = AV.Object.extend('IP');
const ip = new IP();

ip.set('ip', returnCitySN["cip"]);
ip.set('cid', returnCitySN["cid"]);
ip.set('city', returnCitySN["cname"]);
ip.set('browser',useragent);
ip.set('path',pathname);

ip.save()
