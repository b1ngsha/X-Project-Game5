window.__require=function t(s,n,i){function e(c,o){if(!n[c]){if(!s[c]){var h=c.split("/");if(h=h[h.length-1],!s[h]){var r="function"==typeof __require&&__require;if(!o&&r)return r(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+c+"'")}c=h}var d=n[c]={exports:{}};s[c][0].call(d.exports,function(t){return e(s[c][1][t]||t)},d,d.exports,t,s,n,i)}return n[c].exports}for(var a="function"==typeof __require&&__require,c=0;c<i.length;c++)e(i[c]);return e}({BoyPants:[function(t,s){"use strict";cc._RF.push(s,"99c80D2YhdIa4JwcAj1TX/e","BoyPants"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Boy"),i=cc.find("Canvas/BackGround/Girl");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1&&(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s),Math.sqrt((this.x-1)*(this.x-1)+(this.y-557)*(this.y-557))<=20?(this.parent=n,this.x=1,this.y=-33,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)},this.node)}}),cc._RF.pop()},{}],Control:[function(t,s){"use strict";cc._RF.push(s,"018e84CQ3pNSIoPfe8YGogf","Control"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.find("Canvas/BackGround/Text1").setSiblingIndex(0),cc.find("Canvas/BackGround/Girl").setSiblingIndex(0),cc.find("Canvas/BackGround/Boy").setSiblingIndex(0),cc.find("Canvas/BackGround/Text2").setSiblingIndex(0),cc.find("Canvas/BackGround/ClothesArea").setSiblingIndex(10),cc.find("Canvas/BackGround/FalseTip").setSiblingIndex(20),cc.find("Canvas/BackGround/FinishTips").setSiblingIndex(20)},start:function(){}}),cc._RF.pop()},{}],Face:[function(t,s){"use strict";cc._RF.push(s,"63dadS9wOVNeJ5CXYHCIJfh","Face"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Boy"),i=cc.find("Canvas/BackGround/Girl");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y-390,2))<1?Math.sqrt((this.x- -3)*(this.x- -3)+(this.y-757)*(this.y-757))<=20?(this.parent=n,this.x=-3,this.y=167):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s):Math.sqrt((this.x- -6)*(this.x- -6)+(this.y-745)*(this.y-745))<=20?(this.parent=i,this.x=-6,this.y=155):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)},this.node)}}),cc._RF.pop()},{}],Finish1:[function(t,s){"use strict";cc._RF.push(s,"e6631jLrrlIJ7P2p6W0paxa","Finish1"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},btnClick:function(){var t=cc.find("Canvas/BackGround/Text1"),s=cc.find("Canvas/BackGround/Text2"),n=cc.find("Canvas/BackGround/Girl/GirlUnderwear2"),i=cc.find("Canvas/BackGround/Girl/GirlUnderwear1"),e=cc.find("Canvas/BackGround/Boy/BoyUnderwear"),a=cc.find("Canvas/BackGround/FalseTip"),c=this.node.getComponent("Sheet");if(1===e.x&&-33===e.y&&5===i.x&&-33===i.y&&1.5===n.x&&52===n.y){t.active=!1,s.active=!0;for(var o=0;o<c.clothes.length;o++)c.clothes[o].active=!0;cc.find("Canvas/BackGround/CompleteBtn").active=!1,cc.find("Canvas/BackGround/CompleteBtn1").active=!0}else a.active=!0,i.parent=cc.find("Canvas/BackGround/ClothesArea"),i.resumeSystemEvents(!0),n.parent=cc.find("Canvas/BackGround/ClothesArea"),n.resumeSystemEvents(!0),e.parent=cc.find("Canvas/BackGround/ClothesArea"),e.resumeSystemEvents(!0),e.x=this.node.getComponent("Position").boyInitX,e.y=this.node.getComponent("Position").boyInitY,i.x=this.node.getComponent("Position").girlInitX1,i.y=this.node.getComponent("Position").girlInitY1,n.x=this.node.getComponent("Position").girlInitX2,n.y=this.node.getComponent("Position").girlInitY2}}),cc._RF.pop()},{}],GirlsPants:[function(t,s){"use strict";cc._RF.push(s,"1d617CJzZ5GVJ2ujd5PGjOt","GirlsPants"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s):this===cc.find("Canvas/BackGround/ClothesArea/PinkSkirt")?Math.sqrt(Math.pow(this.x-5,2)+Math.pow(this.y-557,2))<=20?(this.parent=n,this.x=1,this.y=-43,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s):Math.sqrt(Math.pow(this.x-5,2)+Math.pow(this.y-557,2))<=20?(this.x=5,this.parent=n,this.y=-33,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)},this.node)}}),cc._RF.pop()},{}],GirlsShirt:[function(t,s){"use strict";cc._RF.push(s,"af21dYv2edP/4isoQvITqM5","GirlsShirt"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s):Math.sqrt(Math.pow(this.x-1.5,2)+Math.pow(this.y-642,2))<=20&&(this.parent=n,this.x=1.5,this.y=52,this.pauseSystemEvents(!0)),this===cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear2")&&(this.parent=n,Math.sqrt(Math.pow(this.x- -4,2)+Math.pow(this.y-743,2))<=10?(this.x=-4,this.y=153,this.pauseSystemEvents(!0)):Math.sqrt(Math.pow(this.x- -1.5,2)+Math.pow(this.y-703,2))<=10?(this.x=-1.5,this.y=113,this.pauseSystemEvents(!0)):Math.sqrt(Math.pow(this.x-5.5,2)+Math.pow(this.y-488,2))<=10?(this.x=5.5,this.y=-102,this.pauseSystemEvents(!0)):Math.sqrt(Math.pow(this.x-5.5,2)+Math.pow(this.y-392,2))<=10?(this.x=5.5,this.y=-198,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))},this.node)}}),cc._RF.pop()},{}],Hand:[function(t,s){"use strict";cc._RF.push(s,"05567TFeLdN8oEzRcHBSmTX","Hand"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?(this===cc.find("Canvas/BackGround/ClothesArea/BlueBag")&&(Math.sqrt(Math.pow(this.x- -85,2)+Math.pow(this.y-492,2))<=20?(this.x=-85,this.y=-98,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/RedGlove1")&&(Math.sqrt(Math.pow(this.x-46,2)+Math.pow(this.y-543,2))<=20?(this.x=46,this.y=-47,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/RedGlove2")&&(Math.sqrt(Math.pow(this.x- -45.5,2)+Math.pow(this.y-537.5,2))<=20?(this.x=-45.5,this.y=-52.5,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))):(this===cc.find("Canvas/BackGround/ClothesArea/BlueBag")&&(Math.sqrt(Math.pow(this.x- -88,2)+Math.pow(this.y-502,2))<=20?(this.x=-88,this.y=-88,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/RedGlove1")&&(Math.sqrt(Math.pow(this.x-53,2)+Math.pow(this.y-532,2))<=20?(this.x=53,this.y=-58,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/RedGlove2")&&(Math.sqrt(Math.pow(this.x- -50,2)+Math.pow(this.y-539,2))<=20?(this.x=-50,this.y=-51,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)))},this.node)}}),cc._RF.pop()},{}],Hat:[function(t,s){"use strict";cc._RF.push(s,"f3d4aQFHf9DZKtPZy2jyUiw","Hat"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?this===cc.find("Canvas/BackGround/ClothesArea/RedHat")&&(Math.sqrt(Math.pow(this.x- -12,2)+Math.pow(this.y-791.5,2))<=20?(this.parent=i,this.x=-12,this.y=201.5,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)):this===cc.find("Canvas/BackGround/ClothesArea/RedHat")&&(Math.sqrt(Math.pow(this.x- -12,2)+Math.pow(this.y-784.5,2))<=20?(this.parent=n,this.x=-12,this.y=194.5,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))},this.node)}}),cc._RF.pop()},{}],Position:[function(t,s){"use strict";cc._RF.push(s,"f3d29DPeZNAV5QtDHd2Iblk","Position"),cc.Class({extends:cc.Component,properties:{boyInitX:{default:0},boyInitY:{default:0},girlInitX1:{default:0},girlInitY1:{default:0},girlInitX2:{default:0},girlInitY2:{default:0}},start:function(){}}),cc._RF.pop()},{}],Restart1:[function(t,s){"use strict";cc._RF.push(s,"f1501/n7LVA6qRW4V8tcAjL","Restart1"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){var t=cc.find("Canvas/BackGround/Text1"),s=cc.find("Canvas/BackGround/Text2"),n=cc.find("Canvas/BackGround/Girl/GirlUnderwear2"),i=cc.find("Canvas/BackGround/Girl/GirlUnderwear1"),e=cc.find("Canvas/BackGround/Boy/BoyUnderwear"),a=this.node.getComponent("Sheet");t.active=!0,s.active=!1;for(var c=0;c<a.clothes.length;c++)a.clothes[c].active=!1;i.active=!0,n.active=!0,e.active=!0,cc.find("Canvas/BackGround/CompleteBtn").active=!0,cc.find("Canvas/BackGround/CompleteBtn1").active=!1,i.parent=cc.find("Canvas/BackGround/ClothesArea"),n.parent=cc.find("Canvas/BackGround/ClothesArea"),e.parent=cc.find("Canvas/BackGround/ClothesArea"),e.x=this.node.getComponent("Position").boyInitX,e.y=this.node.getComponent("Position").boyInitY,i.x=this.node.getComponent("Position").girlInitX1,i.y=this.node.getComponent("Position").girlInitY1,n.x=this.node.getComponent("Position").girlInitX2,n.y=this.node.getComponent("Position").girlInitY2,cc.find("Canvas/BackGround/FinishTips").active=!1}}),cc._RF.pop()},{}],Restart:[function(t,s){"use strict";cc._RF.push(s,"816e9I5xzROXLJInWVr5Tq/","Restart"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){cc.find("Canvas/BackGround/FalseTip").active=!1}}),cc._RF.pop()},{}],Scarf:[function(t,s){"use strict";cc._RF.push(s,"5760cfUdA9GpIlRy5MlnE8v","Scarf"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?this===cc.find("Canvas/BackGround/ClothesArea/RedScarf")&&(Math.sqrt(Math.pow(this.x-5,2)+Math.pow(this.y-690,2))<=20?(this.parent=i,this.x=5,this.y=100,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)):this===cc.find("Canvas/BackGround/ClothesArea/RedScarf")&&(Math.sqrt(Math.pow(this.x-6,2)+Math.pow(this.y-670,2))<=20?(this.parent=n,this.x=6,this.y=80,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))},this.node)}}),cc._RF.pop()},{}],ScreenAdapt:[function(t,s){"use strict";cc._RF.push(s,"2cef1+6u65HfqatT0nlxnxf","ScreenAdapt"),cc.Class({extends:cc.Component,onLoad:function(){var t=this;cc.view.setResizeCallback(function(){return t.screenAdapter()}),this.screenAdapter()},screenAdapter:function(){var t=cc.winSize.width/cc.winSize.height,s=cc.Canvas.instance.designResolution.width/cc.Canvas.instance.designResolution.height;t<=1&&t<=s?this.setFitWidth():this.setFitHeight()},setFitWidth:function(){cc.Canvas.instance.fitHeight=!1,cc.Canvas.instance.fitWidth=!0},setFitHeight:function(){cc.Canvas.instance.fitHeight=!0,cc.Canvas.instance.fitWidth=!1}}),cc._RF.pop()},{}],Sheet:[function(t,s){"use strict";cc._RF.push(s,"1a38apSRUJNZpbEQZwD+Hzg","Sheet"),cc.Class({extends:cc.Component,properties:{clothes:{default:[],type:cc.Node}},start:function(){}}),cc._RF.pop()},{}],Shoes:[function(t,s){"use strict";cc._RF.push(s,"1449cq2bMlLsZV1eJJo19aC","Shoes"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){console.log(this.x,this.y),Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?(this===cc.find("Canvas/BackGround/ClothesArea/PinkShoes")&&(Math.sqrt(Math.pow(this.x-1.15,2)+Math.pow(this.y-390,2))<=20?(this.x=1.15,this.y=-200,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/BlueShoes")&&(Math.sqrt(Math.pow(this.x-.1,2)+Math.pow(this.y-388,2))<=20?(this.x=.1,this.y=-202,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))):(this===cc.find("Canvas/BackGround/ClothesArea/PinkShoes")&&(Math.sqrt(Math.pow(this.x-5.34,2)+Math.pow(this.y-386,2))<=20?(this.x=5.34,this.y=-204,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/BlueShoes")&&(Math.sqrt(Math.pow(this.x-5.64,2)+Math.pow(this.y-384,2))<=20?(this.x=5.64,this.y=-206,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)))},this.node)}}),cc._RF.pop()},{}],Socks:[function(t,s){"use strict";cc._RF.push(s,"dfd84nnsatMypVhpIdbrV9g","Socks"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,s=this.node.y,n=cc.find("Canvas/BackGround/Girl"),i=cc.find("Canvas/BackGround/Boy");this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x,this.y+=s.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){console.log(this.x,this.y),Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y-390,2))<1?(this===cc.find("Canvas/BackGround/ClothesArea/BlackSocks1")&&(Math.sqrt(Math.pow(this.x-5.1,2)+Math.pow(this.y-395.85,2))<=20?(this.x=5.1,this.y=395.85-590,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/BlackSocks2")&&(Math.sqrt(Math.pow(this.x-40.4,2)+Math.pow(this.y-379.5,2))<=20?(this.x=40.4,this.y=-210.5,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/PinkSocks")&&(Math.sqrt(Math.pow(this.x- -33.4,2)+Math.pow(this.y-393.6,2))<=20?(this.x=-33.4,this.y=393.6-590,this.parent=i,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s))):(this===cc.find("Canvas/BackGround/ClothesArea/BlackSocks1")&&(Math.sqrt(Math.pow(this.x- -27.8,2)+Math.pow(this.y-385.3,2))<=20?(this.x=-27.8,this.y=-204.7,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/BlackSocks2")&&(Math.sqrt(Math.pow(this.x-39,2)+Math.pow(this.y-385,2))<=20?(this.x=39,this.y=-205,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)),this===cc.find("Canvas/BackGround/ClothesArea/PinkSocks")&&(Math.sqrt(Math.pow(this.x-9.25,2)+Math.pow(this.y-393,2))<=20?(this.x=9.25,this.y=-197,this.parent=n,this.pauseSystemEvents(!0)):(this.parent=cc.find("Canvas/BackGround/ClothesArea"),this.x=t,this.y=s)))},this.node)}}),cc._RF.pop()},{}],Start:[function(t,s){"use strict";cc._RF.push(s,"0ec03CSVn1EI5iZo5YMkDSC","Start"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){cc.find("Canvas/Introduction").active=!1}}),cc._RF.pop()},{}],correctTips:[function(t,s){"use strict";cc._RF.push(s,"5fd6c91DRNLWb/PglG0NEYx","correctTips"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},btnClick:function(){cc.find("Canvas/BackGround/FinishTips").active=!0}}),cc._RF.pop()},{}],moveBoy:[function(t,s){"use strict";cc._RF.push(s,"2df109fEd1MHo7sR+E2Vq7P","moveBoy"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=cc.find("Canvas/BackGround/Boy"),s=cc.find("Canvas/BackGround/Girl"),n=0,i=390;cc.find("Canvas/BackGround/ClothesArea/BoyUnderwear"),cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear2"),cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear1"),this.node.on(cc.Node.EventType.TOUCH_START,function(){n=this.x,i=this.y},this.node),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(this.x>n){var e=cc.moveTo(2,cc.v2(440,390)),a=cc.moveTo(2,cc.v2(0,390));t.runAction(e),s.runAction(a)}else this.x=n,this.y=i},this.node)}}),cc._RF.pop()},{}],moveGirl:[function(t,s){"use strict";cc._RF.push(s,"130a8Mt/jFF07qEfqG9UZd9","moveGirl"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=cc.find("Canvas/BackGround/Boy"),s=cc.find("Canvas/BackGround/Girl"),n=0,i=390;this.node.on(cc.Node.EventType.TOUCH_START,function(){n=this.x,i=this.y},this.node),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var s=t.touch.getDelta();this.x+=s.x},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){if(this.x<n){var e=cc.moveTo(2,cc.v2(0,390)),a=cc.moveTo(2,cc.v2(-440,390));t.runAction(e),s.runAction(a)}else this.x=n,this.y=i},this.node)}}),cc._RF.pop()},{}]},{},["BoyPants","Control","Face","Finish1","GirlsPants","GirlsShirt","Hand","Hat","Position","Restart","Restart1","Scarf","ScreenAdapt","Sheet","Shoes","Socks","Start","correctTips","moveBoy","moveGirl"]);