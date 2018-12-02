(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(1),s=t.n(i),c=t(963),o=t(103),u=t(515),l=function(e){var n=e.title,t=e.eventUrl,a=e.catchMessage,i=e.place,s=e.interactive;return r.a.createElement(c.a,{interactive:s,onClick:function(){return e=t,window.open(e,"_blank");var e},elevation:o.a.TWO},r.a.createElement("h3",{className:"bp3-heading"},n),a&&r.a.createElement(u.a,null,"概要：".concat(a)),i&&r.a.createElement(u.a,null,"場所：".concat(i)))};l.displayName="EventCard",l.propTypes={title:s.a.string.isRequired,eventUrl:s.a.string.isRequired,catchMessage:s.a.string,place:s.a.string,interactive:s.a.bool},l.defaultProps={catchMessage:"",place:"",interactive:!0},n.a=l,l.__docgenInfo={description:"",methods:[],displayName:"EventCard",props:{catchMessage:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},place:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},interactive:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},title:{type:{name:"string"},required:!0,description:""},eventUrl:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/EventCard/index.js"]={name:"EventCard",docgenInfo:l.__docgenInfo,path:"src/components/organisms/EventCard/index.js"})},232:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(516),s=t(1),c=t.n(s),o=function(e){var n=e.appName;return r.a.createElement(i.a,null,r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Heading,null,n)))};o.displayName="NavigationBar",o.propTypes={appName:c.a.string.isRequired},n.a=o,o.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{appName:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/NavigationBar/index.js"]={name:"NavigationBar",docgenInfo:o.__docgenInfo,path:"src/components/molecules/NavigationBar/index.js"})},511:function(e,n,t){"use strict";var a=t(231),r=t.n(a),i=t(0),s=t.n(i),c=t(512),o=t(1),u=t.n(o),l=t(515),d=t(232),p=t(210);function v(){var e=r()(["\n  margin: 8px 0;\n"]);return v=function(){return e},e}function m(){var e=r()(["\n  padding: 10px 15px;\n"]);return m=function(){return e},e}var f=c.a.div(m()),g=c.a.div(v()),E=function(e){var n=e.data,t=n.loading,a=n.connpass;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{appName:"IPPO"}),s.a.createElement(f,null,t?s.a.createElement(l.a,null,"Loading..."):a.events.map(function(e){return s.a.createElement(g,null,s.a.createElement(p.a,{key:e.event_id,title:e.title,eventUrl:e.event_url,catchMessage:e.catch,place:e.place,interactive:!0}))})))};E.displayName="Events",E.propTypes={data:u.a.shape({loading:u.a.bool.isRequired,connpass:u.a.shape({events:u.a.arrayOf(u.a.shape({title:u.a.string,event_url:u.a.string,catch:u.a.string,place:u.a.string}))})})},E.defaultProps={data:{loading:!1,connpass:{events:[]}}},n.a=E,E.__docgenInfo={description:"",methods:[],displayName:"Events",props:{data:{defaultValue:{value:"{\n  loading: false,\n  connpass: {\n    events: [],\n  },\n}",computed:!1},type:{name:"shape",value:{loading:{name:"bool",required:!0},connpass:{name:"shape",value:{events:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},event_url:{name:"string",required:!1},catch:{name:"string",required:!1},place:{name:"string",required:!1}}},required:!1}},required:!1}}},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/Events/index.js"]={name:"Events",docgenInfo:E.__docgenInfo,path:"src/components/pages/Events/index.js"})},600:function(e,n,t){t(234),t(601),e.exports=t(602)},602:function(e,n,t){"use strict";t.r(n),function(e){var n=t(81),a=t(75),r=t(597);t(648),t(649),t(650);Object(n.addDecorator)(a.withKnobs),Object(n.addDecorator)(r.withInfo);var i=t(651);Object(n.configure)(function(){i.keys().forEach(function(e){return i(e)})},e)}.call(this,t(168)(e))},620:function(e,n,t){var a={"./nestedObjectAssign":522,"./nestedObjectAssign.js":522};function r(e){var n=i(e);return t(n)}function i(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=620},650:function(e,n,t){},651:function(e,n,t){var a={"./molecules/NavigationBar/index.stories.js":652,"./organisms/EventCard/index.stories.js":653,"./pages/Events/index.stories.js":654};function r(e){var n=i(e);return t(n)}function i(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=651},652:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),r=t(81),i=t(75),s=t(232);Object(r.storiesOf)("molecules/NavigationBar",e).add("通常パターン",function(){return a.a.createElement(s.a,{appName:Object(i.text)("appName","タイトル")})})}.call(this,t(168)(e))},653:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),r=t(81),i=t(75),s=t(210),c=Object(r.storiesOf)("organisms/EventCard",e);c.add("タイトルとリンクのみの場合",function(){return a.a.createElement(s.a,{title:Object(i.text)("タイトル","イベントのタイトル"),eventUrl:Object(i.text)("url","https://connpass.com/")})}),c.add("全項目ある場合",function(){return a.a.createElement(s.a,{title:Object(i.text)("タイトル","イベントのタイトル"),eventUrl:Object(i.text)("url","https://connpass.com/"),catchMessage:Object(i.text)("説明","イベントの説明です"),place:Object(i.text)("場所","東京都千代田区丸の内")})})}.call(this,t(168)(e))},654:function(e,n,t){"use strict";t.r(n),function(e){var n=t(65),a=t.n(n),r=t(0),i=t.n(r),s=t(81),c=t(511),o=Object(s.storiesOf)("pages/Events",e),u={connpass:{events:a()(Array(10)).map(function(e,n){return function(e){return{event_id:e,title:"イベントのタイトル".concat(e),event_url:"https://connpass.com/",catch:"イベントの説明です",place:"東京都千代田区丸の内"}}(n)})}};o.add("通常パターン",function(){return i.a.createElement(c.a,{data:u})}),o.add("ロード中",function(){return i.a.createElement(c.a,{data:{loading:!0}})})}.call(this,t(168)(e))}},[[600,2,4]]]);
//# sourceMappingURL=iframe.a55aabc8e6e65e032849.bundle.js.map