window.__require=function t(i,n,s){function e(o,h){if(!n[o]){if(!i[o]){var a=o.split("/");if(a=a[a.length-1],!i[a]){var r="function"==typeof __require&&__require;if(!h&&r)return r(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+o+"'")}o=a}var d=n[o]={exports:{}};i[o][0].call(d.exports,function(t){return e(i[o][1][t]||t)},d,d.exports,t,i,n,s)}return n[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<s.length;o++)e(s[o]);return e}({BoyPants:[function(t,i){"use strict";cc._RF.push(i,"99c80D2YhdIa4JwcAj1TX/e","BoyPants"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x-150)*(this.x-150)+(this.y-495)*(this.y-495))<=20?(this.x=150,this.y=495):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Control:[function(t,i){"use strict";cc._RF.push(i,"018e84CQ3pNSIoPfe8YGogf","Control"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.find("Canvas/BackGround/Text1").setSiblingIndex(0),cc.find("Canvas/BackGround/Girl").setSiblingIndex(0),cc.find("Canvas/BackGround/Boy").setSiblingIndex(0),cc.find("Canvas/BackGround/Text2").setSiblingIndex(0)},start:function(){}}),cc._RF.pop()},{}],Face:[function(t,i){"use strict";cc._RF.push(i,"63dadS9wOVNeJ5CXYHCIJfh","Face"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x-145)*(this.x-145)+(this.y-660)*(this.y-660))<=20?(this.x=145,this.y=660):Math.sqrt((this.x- -155)*(this.x- -155)+(this.y-650)*(this.y-650))<=20?(this.x=-155,this.y=650):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Finish1:[function(t,i){"use strict";cc._RF.push(i,"e6631jLrrlIJ7P2p6W0paxa","Finish1"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},btnClick:function(){var t=cc.find("Canvas/BackGround/Text1"),i=cc.find("Canvas/BackGround/Text2"),n=cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear2"),s=cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear1"),e=cc.find("Canvas/BackGround/ClothesArea/BoyUnderwear"),c=cc.find("Canvas/BackGround/Shadow"),o=cc.find("Canvas/BackGround/FalseTip"),h=this.node.getComponent("Sheet");if(150==e.x&&495==e.y&&-146==s.x&&490==s.y&&-148==n.x&&568==n.y){t.active=!1,i.active=!0;for(var a=0;a<h.clothes.length;a++)h.clothes[a].active=!0;cc.find("Canvas/BackGround/CompleteBtn").active=!1,cc.find("Canvas/BackGround/CompleteBtn1").active=!0}else c.active=!0,o.active=!0,e.x=this.node.getComponent("initPosition").boyInitX,e.y=this.node.getComponent("initPosition").boyInitY,s.x=this.node.getComponent("initPosition").girlInitX1,s.y=this.node.getComponent("initPosition").girlInitY1,n.x=this.node.getComponent("initPosition").girlInitX2,n.y=this.node.getComponent("initPosition").girlInitY2}}),cc._RF.pop()},{}],GirlsPants:[function(t,i){"use strict";cc._RF.push(i,"1d617CJzZ5GVJ2ujd5PGjOt","GirlsPants"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x- -146)*(this.x- -146)+(this.y-490)*(this.y-490))<=20?(this.x=-146,this==cc.find("Canvas/BackGround/ClothesArea/PinkSkirt")?this.y=480:this.y=490):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],GirlsShirt:[function(t,i){"use strict";cc._RF.push(i,"af21dYv2edP/4isoQvITqM5","GirlsShirt"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x- -148)*(this.x- -148)+(this.y-568)*(this.y-568))<=20?(this.x=-148,this.y=568):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Hand:[function(t,i){"use strict";cc._RF.push(i,"05567TFeLdN8oEzRcHBSmTX","Hand"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){console.log(this.x,this.y),Math.sqrt((this.x- -225)*(this.x- -225)+(this.y-445)*(this.y-445))<=30?(this.x=-225,this.y=445):Math.sqrt((this.x-73)*(this.x-73)+(this.y-442)*(this.y-442))<=30?(this.x=73,this.y=442):this==cc.find("Canvas/BackGround/ClothesArea/RedGlove1")?Math.sqrt((this.x- -105)*(this.x- -105)+(this.y-470)*(this.y-470))<=30?(this.x=-105,this.y=470):Math.sqrt((this.x-190)*(this.x-190)+(this.y-477)*(this.y-477))<=30?(this.x=190,this.y=477):(this.x=t,this.y=i):this==cc.find("Canvas/BackGround/ClothesArea/RedGlove2")?Math.sqrt((this.x- -190)*(this.x- -190)+(this.y-475)*(this.y-475))<=30?(this.x=-190,this.y=475):Math.sqrt((this.x-115)*(this.x-115)+(this.y-475)*(this.y-475))<=30?(this.x=115,this.y=475):(this.x=t,this.y=i):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Hat:[function(t,i){"use strict";cc._RF.push(i,"f3d4aQFHf9DZKtPZy2jyUiw","Hat"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x- -160)*(this.x- -160)+(this.y-685)*(this.y-685))<=20?(this.x=-160,this.y=685):Math.sqrt((this.x-135)*(this.x-135)+(this.y-690)*(this.y-690))<=20?(this.x=135,this.y=690):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Restart1:[function(t,i){"use strict";cc._RF.push(i,"f1501/n7LVA6qRW4V8tcAjL","Restart1"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){var t=cc.find("Canvas/BackGround/Text1"),i=cc.find("Canvas/BackGround/Text2"),n=cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear2"),s=cc.find("Canvas/BackGround/ClothesArea/GirlUnderwear1"),e=cc.find("Canvas/BackGround/ClothesArea/BoyUnderwear"),c=(cc.find("Canvas/BackGround/Shadow"),cc.find("Canvas/BackGround/FalseTip"),this.node.getComponent("Sheet"));t.active=!0,i.active=!1;for(var o=0;o<c.clothes.length;o++)c.clothes[o].active=!1;s.active=!0,n.active=!0,e.active=!0,cc.find("Canvas/BackGround/CompleteBtn").active=!0,cc.find("Canvas/BackGround/CompleteBtn1").active=!1,e.x=this.node.getComponent("initPosition").boyInitX,e.y=this.node.getComponent("initPosition").boyInitY,s.x=this.node.getComponent("initPosition").girlInitX1,s.y=this.node.getComponent("initPosition").girlInitY1,n.x=this.node.getComponent("initPosition").girlInitX2,n.y=this.node.getComponent("initPosition").girlInitY2,cc.find("Canvas/BackGround/FinishTips").active=!1}}),cc._RF.pop()},{}],Restart:[function(t,i){"use strict";cc._RF.push(i,"816e9I5xzROXLJInWVr5Tq/","Restart"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){var t=cc.find("Canvas/BackGround/FalseTip"),i=cc.find("Canvas/BackGround/Shadow");t.active=!1,i.active=!1}}),cc._RF.pop()},{}],Scarf:[function(t,i){"use strict";cc._RF.push(i,"5760cfUdA9GpIlRy5MlnE8v","Scarf"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x- -140)*(this.x- -140)+(this.y-580)*(this.y-580))<=20?(this.x=-140,this.y=580):Math.sqrt((this.x-155)*(this.x-155)+(this.y-595)*(this.y-595))<=20?(this.x=155,this.y=595):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],ScreenAdapt:[function(t,i){"use strict";cc._RF.push(i,"2cef1+6u65HfqatT0nlxnxf","ScreenAdapt"),cc.Class({extends:cc.Component,onLoad:function(){var t=this;cc.view.setResizeCallback(function(){return t.screenAdapter()}),this.screenAdapter()},screenAdapter:function(){var t=cc.winSize.width/cc.winSize.height,i=cc.Canvas.instance.designResolution.width/cc.Canvas.instance.designResolution.height;t<=1&&t<=i?this.setFitWidth():this.setFitHeight()},setFitWidth:function(){cc.Canvas.instance.fitHeight=!1,cc.Canvas.instance.fitWidth=!0},setFitHeight:function(){cc.Canvas.instance.fitHeight=!0,cc.Canvas.instance.fitWidth=!1}}),cc._RF.pop()},{}],Sheet:[function(t,i){"use strict";cc._RF.push(i,"1a38apSRUJNZpbEQZwD+Hzg","Sheet"),cc.Class({extends:cc.Component,properties:{clothes:{default:[],type:cc.Node}},start:function(){}}),cc._RF.pop()},{}],Shoes:[function(t,i){"use strict";cc._RF.push(i,"1449cq2bMlLsZV1eJJo19aC","Shoes"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){Math.sqrt((this.x- -145)*(this.x- -145)+(this.y-365)*(this.y-365))<=20?(this.x=-145,this.y=365):Math.sqrt((this.x-155)*(this.x-155)+(this.y-365)*(this.y-365))<=20?(this.x=155,this.y=365):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Socks:[function(t,i){"use strict";cc._RF.push(i,"dfd84nnsatMypVhpIdbrV9g","Socks"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this.node.x,i=this.node.y;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var i=t.touch.getDelta();this.x+=i.x,this.y+=i.y},this.node),this.node.on(cc.Node.EventType.TOUCH_END,function(){console.log(this.x,this.y),Math.sqrt((this.x- -145)*(this.x- -145)+(this.y-365)*(this.y-365))<=20?(this.x=-145,this.y=365):Math.sqrt((this.x-155)*(this.x-155)+(this.y-365)*(this.y-365))<=20?(this.x=155,this.y=365):this==cc.find("Canvas/BackGround/ClothesArea/BlackSocks2")?Math.sqrt((this.x- -120)*(this.x- -120)+(this.y-360)*(this.y-360))<=20?(this.x=-120,this.y=360):Math.sqrt((this.x-185)*(this.x-185)+(this.y-355)*(this.y-355))<=20?(this.x=185,this.y=355):(this.x=t,this.y=i):this==cc.find("Canvas/BackGround/ClothesArea/BlackSocks1")?Math.sqrt((this.x- -175)*(this.x- -175)+(this.y-360)*(this.y-360))<=20?(this.x=-175,this.y=360):Math.sqrt((this.x-125)*(this.x-125)+(this.y-365)*(this.y-360))<=20?(this.x=125,this.y=365):(this.x=t,this.y=i):(this.x=t,this.y=i)},this.node)}}),cc._RF.pop()},{}],Start:[function(t,i){"use strict";cc._RF.push(i,"0ec03CSVn1EI5iZo5YMkDSC","Start"),cc.Class({extends:cc.Component,properties:{},start:function(){},btnClick:function(){cc.find("Canvas/Introduction").active=!1}}),cc._RF.pop()},{}],correctTips:[function(t,i){"use strict";cc._RF.push(i,"5fd6c91DRNLWb/PglG0NEYx","correctTips"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},btnClick:function(){cc.find("Canvas/BackGround/FinishTips").active=!0}}),cc._RF.pop()},{}],initPosition:[function(t,i){"use strict";cc._RF.push(i,"840b599KY1GL5RUNdGRYC7D","initPosition"),cc.Class({extends:cc.Component,properties:{boyInitX:{default:0},boyInitY:{default:0},girlInitX1:{default:0},girlInitY1:{default:0},girlInitX2:{default:0},girlInitY2:{default:0}},start:function(){}}),cc._RF.pop()},{}]},{},["BoyPants","Control","Face","Finish1","GirlsPants","GirlsShirt","Hand","Hat","Restart","Restart1","Scarf","ScreenAdapt","Sheet","Shoes","Socks","Start","correctTips","initPosition"]);