(function(t){function e(e){for(var r,c,o=e[0],i=e[1],u=e[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},s={app:0},n=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/aces-up/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b33":function(t,e,a){},"2fd9":function(t,e,a){t.exports=a.p+"img/diamonds.1c8fafa5.svg"},"31e8":function(t,e,a){var r={"./clubs.svg":"bf20","./diamonds.svg":"2fd9","./hearts.svg":"6e1a","./logo.svg":"9b19","./spades.svg":"a3b0"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="31e8"},"336b":function(t,e,a){"use strict";a("b40d")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"modal"}},[a("Overlay",{directives:[{name:"show",rawName:"v-show",value:!t.gameOn,expression:"!gameOn"}]})],1),a("SlotView"),a("Talon",{attrs:{cards:t.cards}})],1)},n=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("h1",[t._v(t._s(t.headerText))]),a("div",{staticClass:"message-box"},[a("h2",{style:t.$store.state.firstGame?{fontSize:"2.5rem"}:{fontSize:"2.2rem"},on:{click:t.start}},[t._v(" "+t._s(t.buttonText)+" ")])])])},o=[],i={computed:{buttonText:function(){return this.$store.state.firstGame?"PLAY":"PLAY AGAIN"},headerText:function(){return this.$store.state.firstGame||this.$store.state.win?"ACES UP!":"GAME OVER"},played:function(){return!1},win:function(){return!1}},methods:{start:function(){this.$store.dispatch("startGame")}}},u=i,l=(a("336b"),a("2877")),d=Object(l["a"])(u,c,o,!1,null,"177508c8",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slot-view"},[a("div",{staticClass:"slot-wrapper"},[t.stack1.length?a("draggable",{staticClass:"card-slot one",attrs:{disabled:t.disableDraggable,move:t.allowDrop,group:"cards"},on:{start:t.resetMarginTop},model:{value:t.stack1,callback:function(e){t.stack1=e},expression:"stack1"}},t._l(t.stack1,(function(e,r){return a("Card",{key:e.name,style:{marginTop:2*r+"rem"},attrs:{card:e},nativeOn:{click:function(a){return t.discard(e,1)}}})})),1):a("draggable",{staticClass:"card-slot empty",attrs:{disabled:t.disableDraggable},model:{value:t.stack1,callback:function(e){t.stack1=e},expression:"stack1"}})],1),a("div",{staticClass:"slot-wrapper"},[t.stack2.length?a("draggable",{staticClass:"card-slot two",attrs:{disabled:t.disableDraggable,group:"cards",move:t.allowDrop},on:{start:t.resetMarginTop},model:{value:t.stack2,callback:function(e){t.stack2=e},expression:"stack2"}},t._l(t.stack2,(function(e,r){return a("Card",{key:e.name,style:{marginTop:2*r+"rem"},attrs:{card:e},nativeOn:{click:function(a){return t.discard(e,2)}}})})),1):a("draggable",{staticClass:"card-slot empty",attrs:{disabled:t.disableDraggable},model:{value:t.stack2,callback:function(e){t.stack2=e},expression:"stack2"}})],1),a("div",{staticClass:"slot-wrapper"},[t.stack3.length?a("draggable",{staticClass:"card-slot three",attrs:{disabled:t.disableDraggable,group:"cards",move:t.allowDrop},on:{start:t.resetMarginTop},model:{value:t.stack3,callback:function(e){t.stack3=e},expression:"stack3"}},t._l(t.stack3,(function(e,r){return a("Card",{key:e.name,style:{marginTop:2*r+"rem"},attrs:{card:e},nativeOn:{click:function(a){return t.discard(e,3)}}})})),1):a("draggable",{staticClass:"card-slot empty",attrs:{disabled:t.disableDraggable},model:{value:t.stack3,callback:function(e){t.stack3=e},expression:"stack3"}})],1),a("div",{staticClass:"slot-wrapper"},[t.stack4.length?a("draggable",{staticClass:"card-slot four",attrs:{disabled:t.disableDraggable,group:"cards",move:t.allowDrop},on:{start:t.resetMarginTop},model:{value:t.stack4,callback:function(e){t.stack4=e},expression:"stack4"}},t._l(t.stack4,(function(e,r){return a("Card",{key:e.name,style:{marginTop:2*r+"rem"},attrs:{card:e},nativeOn:{click:function(a){return t.discard(e,4)}}})})),1):a("draggable",{staticClass:"card-slot empty",attrs:{disabled:t.disableDraggable},model:{value:t.stack4,callback:function(e){t.stack4=e},expression:"stack4"}})],1)])},g=[],m=(a("caad"),a("2532"),a("b76a")),h=a.n(m),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.flipped?r("article",{staticClass:"card flipped",style:{transform:"rotate("+2*(Math.random()-.5)+"deg"}},[r("img",{attrs:{src:a("9b19"),alt:"Aces Up Logo"}})]):r("article",{staticClass:"card",style:{transform:"rotate("+2*(Math.random()-.5)+"deg"}},[r("div",{staticClass:"upper-left"},[r("img",{attrs:{src:t.getImage,alt:"Heart"}}),r("p",[t._v(t._s(t.cardValue))])]),r("div",{staticClass:"center"},[r("img",{attrs:{src:t.getImage,alt:"Heart"}})]),r("div",{staticClass:"lower-right"},[r("img",{attrs:{src:t.getImage,alt:"Heart"}}),r("p",[t._v(t._s(t.cardValue))])])])},b=[],v={computed:{cardValue:function(){switch(this.card.value){case 11:return"J";case 12:return"Q";case 13:return"K";case 14:return"A";default:return this.card.value}},getImage:function(){return a("31e8")("./".concat(this.card.suit,".svg"))}},props:{card:Object,flipped:Boolean}},_=v,E=(a("7211"),Object(l["a"])(_,k,b,!1,null,"14d19f47",null)),T=E.exports,C={order:1,components:{Card:T,draggable:h.a},computed:{disableDraggable:function(){return!this.$store.getters.getCurrentFour.includes(void 0)},stack1:{get:function(){return this.$store.state.stack1},set:function(t){this.$store.commit("UPDATE_STACK_1",t),this.$store.commit("SET_CURRENT_FOUR"),this.$store.dispatch("checkGameOver")}},stack2:{get:function(){return this.$store.state.stack2},set:function(t){this.$store.commit("UPDATE_STACK_2",t),this.$store.commit("SET_CURRENT_FOUR"),this.$store.dispatch("checkGameOver")}},stack3:{get:function(){return this.$store.state.stack3},set:function(t){this.$store.commit("UPDATE_STACK_3",t),this.$store.commit("SET_CURRENT_FOUR"),this.$store.dispatch("checkGameOver")}},stack4:{get:function(){return this.$store.state.stack4},set:function(t){this.$store.commit("UPDATE_STACK_4",t),this.$store.commit("SET_CURRENT_FOUR"),this.$store.dispatch("checkGameOver")}}},methods:{allowDrop:function(t){var e=0;switch(t.from.classList[1]){case"one":e=this.stack1.length;break;case"two":e=this.stack2.length;break;case"three":e=this.stack3.length;break;case"four":e=this.stack4.length;break}return"empty"!=t.to.classList[1]||t.draggedContext.index<e-1&&t.to!=t.from?t.dragged.style.opacity=1:t.dragged.style.opacity=0,"empty"==t.to.classList[1]&&!(t.draggedContext.index<e-1)},checkWin:function(){console.log("check win")},discard:function(t,e){t.deletable&&(this.$store.dispatch("deleteCard",{card:t,slot:e}),this.$store.commit("SET_CURRENT_FOUR"),this.$store.dispatch("checkGameOver"))},resetMarginTop:function(t){t.to!=t.from&&(t.item.style.marginTop=0)}},updated:function(){this.$store.commit("SET_DELETABLE")}},S=C,A=(a("8689"),Object(l["a"])(S,p,g,!1,null,"6862c3d3",null)),D=A.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"talon",style:t.cardsInDeck?{cursor:"pointer"}:{cursor:"default"},on:{click:t.deal}},t._l(t.cards,(function(t){return a("Card",{key:t.id,attrs:{flipped:"",card:t}})})),1)},O=[],w=(a("96cf"),a("1da1")),x={components:{Card:T},computed:{cardsInDeck:function(){return this.$store.getters.getDeck.length>0}},methods:{deal:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.cardsInDeck){e.next=5;break}return e.next=3,t.$store.dispatch("deal");case 3:t.$store.commit("SET_CURRENT_FOUR"),t.$store.dispatch("checkGameOver");case 5:case"end":return e.stop()}}),e)})))()}},props:{cards:Array}},$=x,R=(a("b6db"),Object(l["a"])($,y,O,!1,null,"74654d05",null)),U=R.exports,F={name:"App",components:{Overlay:f,SlotView:D,Talon:U},computed:{cards:function(){return this.$store.getters.getDeck},gameOn:function(){return this.$store.state.game}}},G=F,P=(a("5c0b"),Object(l["a"])(G,s,n,!1,null,null,null)),L=P.exports,j=a("2f62"),M=(a("99af"),a("4160"),function(){var t=["hearts","diamonds","clubs","spades"],e=[];return t.forEach((function(t){for(var a=2;a<=14;a++)e.push({suit:t,value:a,id:"".concat(t,"-").concat(a),deletable:!1})})),e}),K=function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[a],t[a]=r}return t},N=(a("fb6a"),a("d3b7"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("2909")),I={checkGameOver:function(t){var e=t.dispatch,a=t.getters,r=!0,s=a.getCurrentFour,n=a.getDeck;if(n.length)r=!1,s.forEach((function(t){t&&14!=t.value?r=!0:t||(r=!0)}));else{var c=[];s.forEach((function(t){t&&c.push(t.suit)})),c=Object(N["a"])(new Set(Object(N["a"])(c))),c.length>3&&(r=!1)}r||e("endGame")},checkWin:function(t){var e=t.getters,a=e.getCurrentFour,r=!0;return a.forEach((function(t){t&&14!=t.value&&(r=!1)})),(e.getStacksLength>4||e.getDeck.length)&&(r=!1),r},endGame:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,r=e.dispatch,t.next=3,r("checkWin");case 3:s=t.sent,s&&a("SET_WIN",!0),a("SET_FIRST_GAME_FALSE"),a("SET_GAME",!1);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),deal:function(t){var e=t.commit;e("DEAL")},deleteCard:function(t,e){var a=t.state,r=t.commit;switch(r("DELETE_CARD",e.card),e.slot){case 1:r("UPDATE_STACK_1",a.stack1.slice(0,-1));break;case 2:r("UPDATE_STACK_2",a.stack2.slice(0,-1));break;case 3:r("UPDATE_STACK_3",a.stack3.slice(0,-1));break;case 4:r("UPDATE_STACK_4",a.stack4.slice(0,-1));break}},startGame:function(t){var e=t.dispatch,a=t.commit;a("RESET_STACKS"),a("CREATE_NEW_DECK"),e("shuffleDeck"),a("SET_WIN",!1),a("SET_GAME",!0)},shuffleDeck:function(t){var e=t.commit;e("SHUFFLE_DECK")}},W=(a("4de4"),{CREATE_NEW_DECK:function(t){t.deck=M()},DEAL:function(t){t.stack1.push(t.deck.pop()),t.stack2.push(t.deck.pop()),t.stack3.push(t.deck.pop()),t.stack4.push(t.deck.pop())},DELETE_CARD:function(t,e){t.deck=t.deck.filter((function(t){return t.id!==e.id}))},RESET_STACKS:function(t){t.stack1=[],t.stack2=[],t.stack3=[],t.stack4=[]},SET_CURRENT_FOUR:function(t){t.currentFour=[],t.currentFour.push(t.stack1[t.stack1.length-1]),t.currentFour.push(t.stack2[t.stack2.length-1]),t.currentFour.push(t.stack3[t.stack3.length-1]),t.currentFour.push(t.stack4[t.stack4.length-1])},SET_DELETABLE:function(t){t.currentFour.forEach((function(e){if(e)for(var a=0;a<4;a++)t.currentFour[a]&&e.suit==t.currentFour[a].suit&&e.value<t.currentFour[a].value&&(e.deletable=!0)}))},SET_FIRST_GAME_FALSE:function(t){t.firstGame=!1},SET_GAME:function(t,e){t.game=e},SET_WIN:function(t,e){t.win=e},SHUFFLE_DECK:function(t){t.deck=K(t.deck)},UPDATE_STACK_1:function(t,e){t.stack1=e},UPDATE_STACK_2:function(t,e){t.stack2=e},UPDATE_STACK_3:function(t,e){t.stack3=e},UPDATE_STACK_4:function(t,e){t.stack4=e}}),V={getDeck:function(t){return t.deck},getCurrentFour:function(t){return t.currentFour},getStacksLength:function(t){return t.stack1.length+t.stack2.length+t.stack3.length+t.stack4.length}};r["a"].use(j["a"]);var H=M(),B=new j["a"].Store({state:{currentFour:[],deck:H,firstGame:!0,game:!1,win:!1,stack1:[],stack2:[],stack3:[],stack4:[]},mutations:W,actions:I,getters:V});r["a"].config.productionTip=!1,new r["a"]({store:B,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6e1a":function(t,e,a){t.exports=a.p+"img/hearts.95bb77b1.svg"},7211:function(t,e,a){"use strict";a("9335")},8689:function(t,e,a){"use strict";a("1b33")},9335:function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.99b6a636.svg"},"9c0c":function(t,e,a){},a2b9:function(t,e,a){},a3b0:function(t,e,a){t.exports=a.p+"img/spades.a27b6da8.svg"},b40d:function(t,e,a){},b6db:function(t,e,a){"use strict";a("a2b9")},bf20:function(t,e,a){t.exports=a.p+"img/clubs.c744b1ed.svg"}});
//# sourceMappingURL=app.1d4e018e.js.map