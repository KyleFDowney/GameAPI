(this["webpackJsonpgame-api"]=this["webpackJsonpgame-api"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),l=a.n(s),o=(a(21),a(4)),c=a.n(o),i=a(5),u=a(11),m=a(12),p=a(14),d=a(13),g=a(15),f=a(2),E=a(3),h=a(6),v=function(e){return function(e){return e.sort((function(e,t){return e.order-t.order}))}(w(e)).map((function(e){return r.a.createElement("div",{className:"platformIcon",key:e.slug},"xbox"===(t=e.slug)||"xbox-one"===t||"xbox360"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.g}),r.a.createElement("span",{className:"Icon-text"},"Xbox One")):"pc"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:h.b}),r.a.createElement("span",{className:"Icon-text"},"Windows")):"playstation"===t||"playstation4"===t||"playstation3"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.e}),r.a.createElement("span",{className:"Icon-text"},"Playstation 4")):"nintendo"===t||"nintendo-switch"===t||"nintendo-3ds"===t?r.a.createElement("span",null,r.a.createElement("img",{className:"nintendoSwitchSpecial",src:"/NintendoSwitch.svg"}),r.a.createElement("span",{className:"Icon-text"},"Switch")):"mac"===t||"macos"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.b}),r.a.createElement("span",{className:"Icon-text"},"MacOS")):"ios"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.b}),r.a.createElement("span",{className:"Icon-text"},"iOS")):"linux"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.d}),r.a.createElement("span",{className:"Icon-text"},"Linux")):"android"===t?r.a.createElement("span",null,r.a.createElement(f.a,{icon:E.a}),r.a.createElement("span",{className:"Icon-text"},"Android")):void 0);var t}))},x=function(e){return function(e){return e.sort((function(e,t){return e.order-t.order}))}(N(e)).map((function(e){return r.a.createElement("div",{className:"storeIcon",key:e.slug},function(e,t){if("xbox"===e){var a=t||"https://www.xbox.com/en-US/microsoft-store";return r.a.createElement("a",{href:a},r.a.createElement(f.a,{icon:E.g}),r.a.createElement("span",{className:"Icon-text"},"Microsoft Store"))}if("steam"===e){var n=t||"https://store.steampowered.com/";return r.a.createElement("a",{href:n},r.a.createElement(f.a,{icon:E.f}),r.a.createElement("span",{className:"Icon-text"},"Steam"))}if("playstation"===e){var s=t||"https://store.playstation.com/en-us/home/games";return r.a.createElement("a",{href:s},r.a.createElement(f.a,{icon:E.e}),r.a.createElement("span",{className:"Icon-text"},"Playstation Store"))}if("nintendo"===e){var l=t||"https://www.nintendo.com/games/switch/";return r.a.createElement("a",{href:l},r.a.createElement("img",{className:"nintendoSwitchSpecial",src:"/NintendoSwitch.svg"}),r.a.createElement("span",{className:"Icon-text"},"Nintendo Store"))}if("apple"===e){var o=t||"https://www.apple.com/ios/app-store/";return r.a.createElement("a",{href:o},r.a.createElement(f.a,{icon:E.b}),r.a.createElement("span",{className:"Icon-text"},"Apple App Store"))}if("gog"===e){var c=t||"https://www.gog.com/";return r.a.createElement("a",{href:c},r.a.createElement("img",{className:"gogSpecial",src:"/GOG.svg"}),r.a.createElement("span",{className:"Icon-text"},"Good Old Games"))}if("google"===e){var i=t||"https://play.google.com/store";return r.a.createElement("a",{href:i},r.a.createElement(f.a,{icon:E.c}),r.a.createElement("span",{className:"Icon-text"},"Google Play"))}if("epic"===e){var u=t||"https://www.epicgames.com/store/";return r.a.createElement("a",{href:u},r.a.createElement("img",{className:"epicGamesSpecial",src:"/EpicGames.svg"}),r.a.createElement("span",{className:"Icon-text"},"Epic Game Store"))}}(e.slug,e.url_en))}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a=!0,n=!1,r=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var o=s.value;o.platform.slug.indexOf("pc")>=0&&(t.some((function(e){return"pc"===e.slug}))||t.push({slug:"pc",order:1})),o.platform.slug.indexOf("mac")>=0&&(t.some((function(e){return"mac"===e.slug}))||t.push({slug:"mac",order:2})),o.platform.slug.indexOf("linux")>=0&&(t.some((function(e){return"linux"===e.slug}))||t.push({slug:"linux",order:3})),o.platform.slug.indexOf("xbox")>=0&&(t.some((function(e){return"xbox"===e.slug}))||t.push({slug:"xbox",order:21})),o.platform.slug.indexOf("playstation")>=0&&(t.some((function(e){return"playstation"===e.slug}))||t.push({slug:"playstation",order:22})),o.platform.slug.indexOf("nintendo")>=0&&(t.some((function(e){return"nintendo"===e.slug}))||t.push({slug:"nintendo",order:23})),o.platform.slug.indexOf("android")>=0&&(t.some((function(e){return"android"===e.slug}))||t.push({slug:"android",order:31})),o.platform.slug.indexOf("iOS")>=0&&(t.some((function(e){return"iOS"===e.slug}))||t.push({slug:"iOS",order:32}))}}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return t},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a=!0,n=!1,r=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var o=s.value;o.store.slug.indexOf("steam")>=0&&(t.some((function(e){return"steam"===e.slug}))||t.push({slug:"steam",order:1,url_en:o.url_en})),o.store.slug.indexOf("gog")>=0&&(t.some((function(e){return"gog"===e.slug}))||t.push({slug:"gog",order:2,url_en:o.url_en})),o.store.slug.indexOf("epic")>=0&&(t.some((function(e){return"epic"===e.slug}))||t.push({slug:"epic",order:3,url_en:o.url_en})),o.store.slug.indexOf("xbox")>=0&&(t.some((function(e){return"xbox"===e.slug}))||t.push({slug:"xbox",order:11,url_en:o.url_en})),o.store.slug.indexOf("playstation")>=0&&(t.some((function(e){return"playstation"===e.slug}))||t.push({slug:"playstation",order:12,url_en:o.url_en})),o.store.slug.indexOf("nintendo")>=0&&(t.some((function(e){return"nintendo"===e.slug}))||t.push({slug:"nintendo",order:13,url_en:o.url_en})),o.store.slug.indexOf("google")>=0&&(t.some((function(e){return"google"===e.slug}))||t.push({slug:"google",order:21,url_en:o.url_en})),o.store.slug.indexOf("apple")>=0&&(t.some((function(e){return"apple"===e.slug}))||t.push({slug:"apple",order:22,url_en:o.url_en}))}}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return t},b=function(e){var t=e.name,a=e.description,n=e.metacritic,s=e.rating,l=e.released,o=e.background_image,c=e.website,i=e.clip,u=e.hideGameDetail,m=e.parent_platforms,p=e.stores,d=v(m),g=x(p),E={backgroundImage:"url("+o+")"};return console.log(e.id),r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"Outer-wrapper",style:E},r.a.createElement("div",{className:"Inner-wrapper"},r.a.createElement("button",{className:"Back-button",onClick:u},r.a.createElement("b",null,r.a.createElement(f.a,{icon:h.a}))),r.a.createElement("div",{className:"Game-title"},t),r.a.createElement("div",{className:"Ratings"},null!=n&&r.a.createElement("div",{className:"Metacritic",style:n>=75&&{backgroundColor:"#6c3"}||n>=50&&{backgroundColor:"#fc3"}||n>=0&&{backgroundColor:"#f00"}},r.a.createElement("div",null,n)),r.a.createElement("div",{className:"User-rating"},s>0&&r.a.createElement("div",null,"User rating: ",s))),r.a.createElement("div",{className:"Platform-list"},d),r.a.createElement("div",{className:"Store-list"},g),r.a.createElement("p",{className:"Release-date"},"Released: ",l),r.a.createElement("div",{className:"Detail-description",dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",null,"Preview:"),i&&r.a.createElement("video",{src:i,controls:!0}),r.a.createElement("br",null),r.a.createElement("div",{className:"Detail-website"},r.a.createElement("span",null,"Website: ",r.a.createElement("a",{href:c}," "+c)))))))},k=function(e){var t=e.name,a=e.metacritic,n=e.rating,s=e.released,l=e.icon,o=e.parent_platforms,c=e.stores,i=v(o),u=x(c),m={backgroundImage:"url("+l+")"},p=e.onClick;return r.a.createElement("div",{className:"Outer-list-wrapper",style:m,onClick:p},r.a.createElement("div",{className:"Inner-list-wrapper"},r.a.createElement("div",{className:"Game-title"},t),r.a.createElement("div",{className:"Ratings"},null!=a&&r.a.createElement("div",{className:"Metacritic",style:a>=75&&{backgroundColor:"#6c3"}||a>=50&&{backgroundColor:"#fc3"}||a>=0&&{backgroundColor:"#f00"}},r.a.createElement("div",null,a)),r.a.createElement("div",{className:"User-rating"},n>0&&r.a.createElement("div",null,"User rating: ",n))),r.a.createElement("br",null),r.a.createElement("div",{className:"Floating-title"},"Platforms"),r.a.createElement("div",{className:"Platform-list"},i),r.a.createElement("div",{className:"Floating-title"},"Stores"),r.a.createElement("div",{className:"Store-list"},u),r.a.createElement("p",{className:"Release-date"},"Released: ",s)))},y=function(e){var t=e.onClickList,a=e.onClickRandom,n=e.onClickMeh;return r.a.createElement("div",{className:"Nav-bar"},r.a.createElement("span",{onClick:t},"Top Games"),r.a.createElement("span",{onClick:a},"Random Game"),r.a.createElement("span",{onClick:n},"Meh Game"))},O=(a(28),function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&t(n.responseText)},n.open("GET",e,!0),n.send(null)}))}),S=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||(3e3,3500,a=Math.floor(500*Math.random())+3e3,t=a.toString()),console.log("games.js: ",t),n="https://api.rawg.io/api/games/"+t,e.next=5,O(n);case 5:return r=e.sent,e.abrupt("return",JSON.parse(r));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.rawg.io/api/games?page_size=40",t&&(a=a+"&genres="+t),e.next=4,O(a);case 4:return n=e.sent,r=JSON.parse(n),s=r.results,l=s.filter((function(e){return!!e.clip})),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).getGameDetail=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,s,l,o,i,u,m,p,d,g,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,r=n.name,s=n.id,l=n.description,o=n.metacritic,i=n.rating,u=n.released,m=n.background_image,p=n.website,d=n.parent_platforms,g=n.stores,f=n.clip&&n.clip.clip,a.setState({name:r,id:s,description:l,metacritic:o,rating:i,released:u,background_image:m,website:p,parent_platforms:d,stores:g,clip:f,showDetail:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleGenreChange=function(e){a.setState({selectedGenre:e.target.value})},a.getGameList=Object(i.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.selectedGenre,e.next=3,_(t);case 3:n=e.sent,r=n.map((function(e){return a.createGamesListNode(e)})),a.setState({gameListNodes:r,showDetail:!1});case 6:case"end":return e.stop()}}),e)}))),a.createGamesListNode=function(e){var t=e.name,n=e.id,s=e.metacritic,l=e.rating,o=e.released,c=e.background_image,i=e.parent_platforms,u=e.stores;return r.a.createElement(k,{name:t,id:n,metacritic:s,rating:l,released:o,icon:c,parent_platforms:i,stores:u,onClick:function(){return a.getGameDetail(n)}})},a.showGameDetail=function(e){console.log("game clicked",e)},a.hideGameDetail=function(){a.setState({showDetail:!1})},a.state={showDetail:!1},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getGameList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.background_image,n=t.clip,s=t.description,l=t.gameListNodes,o=t.metacritic,c=t.name,i=t.parent_platforms,u=t.stores,m=t.rating,p=t.released,d=t.showDetail,g=t.website,f=t.id;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{onClickList:function(){return e.getGameList()},onClickRandom:function(){return e.getGameDetail()},onClickMeh:function(){return e.getGameDetail(3256)}}),!d&&r.a.createElement("div",{className:"List-nodes"},l),d&&r.a.createElement(b,{name:c,description:s,metacritic:o,rating:m,released:p,background_image:a,website:g,parent_platforms:i,stores:u,clip:n,id:f,hideGameDetail:this.hideGameDetail}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.bcc719e1.chunk.js.map