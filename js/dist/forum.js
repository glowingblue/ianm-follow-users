module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=28)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.extensions["fof-follow-tags"]},function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/components/Notification"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e,o){"use strict";var n=o(2),r=n.utils.followingPageOptions;e.a=function(t){var e=r(t);return e.users=app.translator.trans("ianm-follow-users.lib.following_link"),e}},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,o){t.exports=o(27)},function(t,e){t.exports=flarum.core.compat["common/components/Badge"]},function(t,e){t.exports=flarum.extensions["fof-user-directory"]},function(t,e){t.exports=flarum.core.compat["common/components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["common/utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["common/components/UserPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Link"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/helpers/username"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserPage"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["common/components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["common/states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["common/components/Separator"]},function(t,e,o){var n=function(t){"use strict";var e=Object.prototype,o=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,o){return t[e]=o}}function l(t,e,o,n){var r=e&&e.prototype instanceof f?e:f,a=Object.create(r.prototype),i=new L(n||[]);return a._invoke=function(t,e,o){var n="suspendedStart";return function(r,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw a;return O()}for(o.method=r,o.arg=a;;){var i=o.delegate;if(i){var s=b(i,o);if(s){if(s===c)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var l=u(t,e,o);if("normal"===l.type){if(n=o.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n="completed",o.method="throw",o.arg=l.arg)}}}(t,o,i),a}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var c={};function f(){}function p(){}function m(){}var h={};h[r]=function(){return this};var d=Object.getPrototypeOf,w=d&&d(d(F([])));w&&w!==e&&o.call(w,r)&&(h=w);var v=m.prototype=f.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(r,a){function i(){return new e((function(n,i){!function n(r,a,i,s){var l=u(t[r],t,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,s)}))}s(l.arg)}(r,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var o=t.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function F(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v.constructor=m,m.constructor=p,p.displayName=s(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,o,n,r,a){void 0===a&&(a=Promise);var i=new g(l(e,o,n,r),a);return t.isGeneratorFunction(o)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),s(v,i,"Generator"),v[r]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=F,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(o,n){return i.type="throw",i.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),_(o),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;_(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:F(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(12),a=o.n(r),i=o(8),s=o.n(i),l=o(4),u=o.n(l),c=o(0),f=o.n(c),p=o(13),h=o.n(p),d=o(6),w=o.n(d);function v(t,e,o,n,r,a,i){try{var s=t[a](i),l=s.value}catch(t){return void o(t)}s.done?e(l):Promise.resolve(l).then(n,r)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,g(t,e)}var x=o(9),_=o.n(x),L=o(14),F=o.n(L),O=o(15),j=o.n(O),P=o(3),k=o.n(P),U=function(t){return function(e){return k.a.translator.trans("ianm-follow-users.lib.follow_levels."+t,e)}},S=Object.freeze([{value:"unfollow",name:U("unfollow.name"),description:U("unfollow.description")},{value:"follow",name:U("follow.name"),description:U("follow.description")},{value:"lurk",name:U("lurk.name"),description:U("lurk.description")}]),E=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={user:null,saving:!1,followState:void 0},e.className=function(){return"iam_follow_users-selectFollowLevelModal"},e}b(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.state.user=this.attrs.user,this.state.followState=this.state.user.followed()||"unfollow"},o.title=function(){var t;return this.trans("title",{username:m("em",null,null==(t=this.state.user)||null==t.username?void 0:t.username())})},o.content=function(){var t=this;if(!(this.state.user instanceof u.a))return m("div",{class:"Modal-body"},m("p",null,this.trans("no_user_attr_provided_err"+(f.a.forum.attribute("debug")?"_debug":""))));var e=this.state.user,o=S.reduce((function(t,e){var o;return y({},t,((o={})[e.value]=e.name(),o))}),{}),n=S.find((function(e){return e.value===t.state.followState}));return m("div",{class:"Modal-body"},m("fieldset",null,m("legend",null,this.trans("description",{user:e})),m("div",{class:"selectFollowLevelModal-level"},m("label",{for:"selectFollowLevelModal-select"},this.trans("follow_select_label")),m(j.a,{disabled:this.state.saving,id:"selectFollowLevelModal-select",onchange:this.onFollowLevelChange.bind(this),value:n.value,"aria-described-by":"selectFollowLevelModal-"+n.value+"-help",options:o}),m("p",{id:"selectFollowLevelModal-"+n.value+"-help"},n.description({user:e})))),m("fieldset",{class:"selectFollowLevelModal-actions"},m(w.a,{disabled:this.state.saving,class:"Button",onclick:this.hide.bind(this)},this.trans("cancel_btn")),m(w.a,{disabled:this.state.saving,class:"Button Button--primary",onclick:this.saveFollowLevel.bind(this),loading:this.state.saving},this.trans("save_btn"))))},o.onFollowLevelChange=function(){var t=this.$(".Select-input")[0];this.state.followState=t.value||"unfollow"},o.trans=function(t){for(var e,o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return(e=f.a.translator).trans.apply(e,["ianm-follow-users.forum.modals.select_follow_level."+t].concat(n))},o.onsubmit=function(){this.saveFollowLevel()},o.saveFollowLevel=function(){var t,e=(t=_.a.mark((function t(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="unfollow"===this.state.followState?null:this.state.followState,this.state.saving=!0,this.state.user.attribute("following")!==e){t.next=5;break}return this.hide(),t.abrupt("return");case 5:return t.next=7,this.state.user.save({followUsers:e});case 7:t.sent,this.hide();case 9:case"end":return t.stop()}}),t,this)})),function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function i(t){v(a,n,r,i,s,"next",t)}function s(t){v(a,n,r,i,s,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),e}(F.a),N=o(16),B=o.n(N),M=o(17),G=o.n(M),T=o(18),C=o.n(T),D=o(19),I=o.n(D),z=o(20),A=o.n(z),R=o(21),Y=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.refresh()},o.refresh=function(){this.loading=!0,this.followedUsers=f.a.session.user.followedUsers(),this.loadUser(f.a.session.user.username())},o.changeUserFollowOptions=function(t){f.a.modal.show(E,{user:t})},o.content=function(){var t=this;return 0===this.followedUsers.length?m("div",{class:"Placeholder"},m("p",null,f.a.translator.trans("ianm-follow-users.forum.profile_page.no_following"))):m("table",{className:"NotificationGrid followPage-grid"},this.followedUsers.map((function(e,o){return m("tr",{class:"followPage-user"},m("td",null,m(C.a,{href:f.a.route.user(e)},m("h3",null,I()(e,{className:"followPage-avatar"}),m("div",{class:"followPage-userInfo"},A()(e),m("span",{class:"followPage-type"},f.a.translator.trans("ianm-follow-users.forum.badge.label."+e.followed())))))),m("td",{className:"followPage-button"},m(w.a,{icon:"fas fa-user-friends",type:"button",className:"Button Button--warning",onclick:function(){return t.changeUserFollowOptions(e)}},f.a.translator.trans("ianm-follow-users.forum.user_controls.unfollow_button"))))})))},o.show=function(){this.user=f.a.session.user,m.redraw()},e}(o.n(R).a),q=o(5),$=o.n(q),H=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-user-friends"},o.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},o.content=function(){return app.translator.trans("ianm-follow-users.forum.notifications.new_discussion_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},e}($.a),J=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-user-friends"},o.href=function(){var t=this.attrs.notification,e=t.subject(),o=t.content()||{};return app.route.discussion(e,o.postNumber)},o.content=function(){return app.translator.trans("ianm-follow-users.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},e}($.a),K=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-user-plus"},o.href=function(){var t=this.attrs.notification.subject();return app.route.user(t)},o.content=function(){return app.translator.trans("ianm-follow-users.forum.notifications.new_follower_text",{user:this.attrs.notification.fromUser()})},e}($.a),Q=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-user-minus"},o.href=function(){var t=this.attrs.notification.subject();return app.route.user(t)},o.content=function(){return app.translator.trans("ianm-follow-users.forum.notifications.new_unfollower_text",{user:this.attrs.notification.fromUser()})},e}($.a),V=o(22),W=o.n(V),X=o(10),Z=o.n(X);var tt=o(23),et=o.n(tt),ot=o(24),nt=o.n(ot),rt=o(2),at=o(11),it=o(25),st=o.n(it),lt=o(7),ut=o(26),ct=o.n(ut);app.initializers.add("ianm-follow-users",(function(){u.a.prototype.followed=s.a.attribute("followed"),u.a.prototype.followedUsers=s.a.hasMany("followedUsers"),u.a.prototype.blocksFollow=s.a.attribute("blocksFollow"),u.a.prototype.canBeFollowed=s.a.attribute("canBeFollowed"),app.routes.followedUsers={path:"/followedUsers",component:Y},Object(n.extend)(h.a,"userControls",(function(t,e){f.a.session.user&&f.a.session.user!==e&&t.add("follow",m(w.a,{icon:"fas fa-user-friends",onclick:function(t){t instanceof u.a&&f.a.modal.show(E,{user:t})}.bind(this,e)},f.a.translator.trans("ianm-follow-users.forum.user_controls."+(e.followed()?"unfollow_button":"follow_button"))))})),Object(n.extend)(G.a.prototype,"navItems",(function(t){k.a.session.user&&k.a.session.user===this.user&&t.add("followed-users",m(B.a,{href:k.a.route("followedUsers"),icon:"fas fa-user-friends"},k.a.translator.trans("ianm-follow-users.forum.profile_link")))})),Object(n.extend)(W.a.prototype,"badges",(function(t){var e;null!=(e=this.user())&&null!=e.followed&&e.followed()&&t.add("user-following",m(Z.a,{label:app.translator.trans("ianm-follow-users.forum.badge.label."+this.user().followed()),icon:"fas fa-user-friends",type:"friend"}))})),Object(n.extend)(u.a.prototype,"badges",(function(t){this.followed()&&t.add("user-following",m(Z.a,{label:app.translator.trans("ianm-follow-users.forum.badge.label."+this.followed()),icon:"fas fa-user-friends",type:"friend"}))})),Object(n.extend)(et.a.prototype,"privacyItems",(function(t){var e=this;t.add("follow-users-block",m(nt.a,{state:this.user.preferences().blocksFollow,onchange:function(t){e.blocksFollowLoading=!0,e.user.savePreferences({blocksFollow:t}).then((function(){e.blocksFollowLoading=!1,m.redraw()}))},loading:this.blocksFollowLoading},app.translator.trans("ianm-follow-users.forum.settings.block_follow")))})),app.initializers.has("fof/follow-tags")&&(rt.utils.followingPageOptions=lt.a,rt.utils.followingPageOptions("forum.index.following"),Object(n.extend)(st.a.prototype,"requestParams",(function(t){if(rt.utils.isFollowingPage()&&app.session.user){this.followTags||(this.followTags=rt.utils.getDefaultFollowingFiltering());var e=this.followTags;"following"===app.current.get("routeName")&&"users"===e&&(t.filter["following-users"]=!0,delete t.filter.subscription)}}))),app.initializers.has("fof-user-directory")&&Object(n.extend)(at.UserDirectoryPage.prototype,"groupItems",(function(t){var e=this;t.add("follow-users",at.CheckableButton.component({className:"GroupFilterButton",icon:"fas fa-user-friends",checked:"is:followeduser"===this.enabledSpecialGroupFilters["ianm-follow-users"],onclick:function(){var t="ianm-follow-users";"is:followeduser"===e.enabledSpecialGroupFilters[t]?e.enabledSpecialGroupFilters[t]="":e.enabledSpecialGroupFilters[t]="is:followeduser",e.changeParams(e.params().sort)}},app.translator.trans("ianm-follow-users.forum.filter.following")),65),t.add("separator",m(ct.a,null),50)})),app.notificationComponents.newFollower=K,app.notificationComponents.newUnfollower=Q,app.notificationComponents.newDiscussionByUser=H,app.notificationComponents.newPostByUser=J,Object(n.extend)(a.a.prototype,"notificationTypes",(function(t){t.add("newFollower",{name:"newFollower",icon:"fas fa-user-plus",label:app.translator.trans("ianm-follow-users.forum.settings.notify_new_follower_label")}),t.add("newUnfollower",{name:"newUnfollower",icon:"fas fa-user-minus",label:app.translator.trans("ianm-follow-users.forum.settings.notify_new_unfollower_label")}),t.add("newDiscussionByUser",{name:"newDiscussionByUser",icon:"fas fa-user-friends",label:app.translator.trans("ianm-follow-users.forum.settings.notify_new_discussion_label")}),t.add("newPostByUser",{name:"newPostByUser",icon:"fas fa-user-friends",label:app.translator.trans("ianm-follow-users.forum.settings.notify_new_post_label")})}))}),-1)}]);
//# sourceMappingURL=forum.js.map