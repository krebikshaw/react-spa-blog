(this["webpackJsonpspa-blog"]=this["webpackJsonpspa-blog"]||[]).push([[0],{35:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),o=e.n(c),i=e(20),a=e.n(i),u=e(4),s=e(3),f=e(2),l=e(6),j=e(5),x=Object(c.createContext)(null);function b(){var n=Object(s.a)(["\n  margin: 10px;\n  width: 45px;\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    font-size: ",";\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(s.a)(["\n  margin: 10px;\n  width: 45px;\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    font-size: ",";\n  }\n"]);return h=function(){return n},n}function d(){var n=Object(s.a)(["\n  margin-right: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return d=function(){return n},n}function p(){var n=Object(s.a)(["\n  margin-left: 80px;\n  color: ",";\n  font-size: ",";\n  font-weight: initial;\n  text-shadow: 0 0 5px rgba(0,0,0,0.2);\n"]);return p=function(){return n},n}function m(){var n=Object(s.a)(["\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 3px #024048;\n  background: linear-gradient(#dbdbdb, rgba(255,255,255,0.85));\n  z-index: 99;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return m=function(){return n},n}var O=f.c.div(m()),g=Object(f.c)(l.b)(p(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.brand})),v=f.c.ul(d()),y=Object(f.c)(l.b)(h(),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.hover})),z=f.c.div(b(),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.hover})),w=function(){var n=Object(j.f)(),t=Object(j.g)(),e=Object(c.useContext)(x),o=Object(u.a)(e,2),i=o[0],a=o[1];return Object(r.jsxs)(O,{children:[Object(r.jsx)(g,{to:"/",children:"SPA-BLOG"}),Object(r.jsxs)(v,{children:[!i&&Object(r.jsx)(y,{to:"/register",children:"\u8a3b\u518a"}),!i&&Object(r.jsx)(y,{to:"/login",children:"\u767b\u5165"}),i&&Object(r.jsx)(z,{onClick:function(){a(null),localStorage.setItem("token",null),"/"!==t.pathname&&n.push("/")},children:"\u767b\u51fa"})]})]})};function k(){var n=Object(s.a)(["\n  padding: 5px 0;\n  margin-right: 50px;\n  text-align: center;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  &:hover {\n    border-bottom: 3px solid ",";\n  }\n  ","\n"]);return k=function(){return n},n}function S(){var n=Object(s.a)(["\n  height: 85px;\n  width: 600px;\n  padding: 40px 10px 10px 20px;\n  border-bottom: 2px solid ",";\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n"]);return S=function(){return n},n}var _=f.c.div(S(),(function(n){return n.theme.colors.primary})),C=Object(f.c)(l.b)(k(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.primary}),(function(n){return n.$active&&"\n      border-bottom: 3px solid ".concat(n.theme.colors.primary,";\n    ")})),P=function(){var n=Object(j.g)(),t=Object(c.useContext)(x),e=Object(u.a)(t,1)[0];return Object(r.jsxs)(_,{children:[Object(r.jsx)(C,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),e&&Object(r.jsx)(C,{to:"/post",$active:"/post"===n.pathname,children:"\u767c\u4f48\u6587\u7ae0"}),Object(r.jsx)(C,{to:"/list",$active:"/list"===n.pathname,children:"\u6587\u7ae0\u5217\u8868"}),Object(r.jsx)(C,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc"})]})},I=e(7);function E(){var n=Object(s.a)(["\n  margin: 0 10px;\n  color: #333;\n"]);return E=function(){return n},n}function D(){var n=Object(s.a)(["\n  margin: 0 5px;\n  & img {\n    width: 10px;\n  }\n"]);return D=function(){return n},n}function L(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return L=function(){return n},n}var A=f.c.div(L()),J=f.c.a(D()),$=f.c.div(E()),B=function(n){var t=n.page,e=n.handleChangePage;return Object(r.jsxs)(A,{children:[Object(r.jsx)(J,{onClick:function(){e(1)},children:Object(r.jsx)("img",{src:"first.svg"})}),Object(r.jsx)(J,{onClick:function(){e(t.currentPage-1)},children:Object(r.jsx)("img",{src:"previous.svg"})}),Object(r.jsxs)($,{children:["\u9801\u78bc\uff1a",t.currentPage," / ",t.totalPages]}),Object(r.jsx)(J,{onClick:function(){e(t.currentPage+1)},children:Object(r.jsx)("img",{src:"next.svg"})}),Object(r.jsx)(J,{onClick:function(){e(t.totalPages)},children:Object(r.jsx)("img",{src:"last.svg"})})]})},N="https://student-json-api.lidemy.me",T=function(){var n=localStorage.getItem("token");return fetch("".concat(N,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},H=function(n){return fetch("".concat(N,"/posts?_page=").concat(n,"&_limit=5")).then((function(n){return n.json()}))};function M(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  justify-content: center;\n  align-items: center;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return M=function(){return n},n}function G(){var n=Object(s.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return G=function(){return n},n}function R(){var n=Object(s.a)([""]);return R=function(){return n},n}function q(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return q=function(){return n},n}function F(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  width: 100%;\n  max-height: 72px;\n  line-height: 1.5rem;\n  letter-spacing: 0.1rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 20px 0;\n"]);return F=function(){return n},n}function K(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 15px 0;\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n  padding: 20px 30px;\n  /*border-left: 5px solid ",";*/\n  margin-bottom: 50px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);\n"]);return Q=function(){return n},n}function U(){var n=Object(s.a)([""]);return U=function(){return n},n}var V=f.c.div(U()),W=f.c.div(Q(),(function(n){return n.theme.colors.primary})),X=f.c.h2(K(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Y=f.c.div(F(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Z=Object(f.c)(l.b)(q(),(function(n){return n.theme.colors.read_more}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),nn=f.c.div(R()),tn=f.c.div(G(),(function(n){return n.theme.colors.error})),en=f.c.div(M(),(function(n){return n.theme.colors.text})),rn=function(n){var t=n.post;return Object(r.jsxs)(W,{children:[Object(r.jsx)(X,{children:t.title}),Object(r.jsx)(Y,{children:t.body}),Object(r.jsx)(Z,{to:"/article/".concat(t.id),children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},cn=function(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),s=a[0],f=a[1],l=Object(c.useState)([]),j=Object(u.a)(l,2),x=j[0],b=j[1],h=Object(c.useState)({currentPage:1,totalPages:1}),d=Object(u.a)(h,2),p=d[0],m=d[1];return Object(c.useEffect)((function(){f(!0),H(1).then((function(n){f(!1),b(n)})).catch((function(n){return o(n.message)})),fetch("".concat(N,"/posts")).then((function(n){return n.json()})).then((function(n){return Math.ceil(n.length/5)})).then((function(n){return m(Object(I.a)(Object(I.a)({},p),{},{totalPages:n}))}))}),[]),Object(c.useEffect)((function(){H(p.currentPage).then((function(n){b(n)})).catch((function(n){return o(n.message)}))}),[p]),Object(r.jsxs)(V,{children:[Object(r.jsxs)(nn,{children:[s&&Object(r.jsx)(en,{children:Object(r.jsx)("p",{children:"Loading..."})}),x.map((function(n){return Object(r.jsx)(rn,{post:n},n.id)})),e&&Object(r.jsx)(tn,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"})]}),!s&&Object(r.jsx)(B,{page:p,handleChangePage:function(n){m(Object(I.a)(Object(I.a)({},p),{},{currentPage:n}))}})]})},on=e(10);function an(){var n=Object(s.a)(["\n  color: ",";\n  margin: -20px;\n"]);return an=function(){return n},n}function un(){var n=Object(s.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"], & input[type="password"] {\n    width: 280px;\n    height: 30px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return sn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return fn=function(){return n},n}function ln(){var n=Object(s.a)([""]);return ln=function(){return n},n}var jn=f.c.div(ln()),xn=f.c.div(fn()),bn=f.c.div(sn(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),hn=f.c.form(un(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),dn=f.c.div(an(),(function(n){return n.theme.colors.error})),pn=function(){var n=Object(c.useContext)(x),t=Object(u.a)(n,2),e=(t[0],t[1]),o=Object(c.useState)(""),i=Object(u.a)(o,2),a=(i[0],i[1]),s=Object(c.useState)(""),f=Object(u.a)(s,2),l=f[0],b=f[1],h=Object(c.useState)({username:"",password:""}),d=Object(u.a)(h,2),p=d[0],m=d[1],O=Object(j.f)(),g=function(n){var t=n.target.name;m(Object(I.a)(Object(I.a)({},p),{},Object(on.a)({},t,n.target.value)))};return Object(r.jsx)(jn,{children:Object(r.jsxs)(xn,{children:[Object(r.jsx)(bn,{children:"\u767b\u5165\u6703\u54e1"}),l&&Object(r.jsx)(dn,{children:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"}),Object(r.jsxs)(hn,{children:[Object(r.jsx)("input",{type:"text",name:"username",placeholder:"\u5e33\u865f",value:p.username,onChange:g}),Object(r.jsx)("input",{type:"password",name:"password",placeholder:"\u5bc6\u78bc",value:p.password,onChange:g}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(n){var t,r;n.preventDefault(),b(""),(t=p.username,r=p.password,fetch("".concat(N,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:r})}).then((function(n){return n.json()}))).then((function(n){if(0===n.ok)return b(n.message);localStorage.setItem("token",n.token),T().then((function(n){0===n.ok&&(localStorage.setItem("token",null),b(n.message)),e(n.data),O.push("/")}))})).catch((function(n){return a(n.message)}))},children:"\u63d0\u4ea4"}),Object(r.jsx)("button",{onClick:function(){O.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function mn(){var n=Object(s.a)(["\n  color: ",";\n  margin: -20px;\n"]);return mn=function(){return n},n}function On(){var n=Object(s.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"], & input[type="password"] {\n    width: 280px;\n    height: 30px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return On=function(){return n},n}function gn(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return gn=function(){return n},n}function vn(){var n=Object(s.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return vn=function(){return n},n}function yn(){var n=Object(s.a)([""]);return yn=function(){return n},n}var zn=f.c.div(yn()),wn=f.c.div(vn()),kn=f.c.div(gn(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Sn=f.c.form(On(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),_n=f.c.div(mn(),(function(n){return n.theme.colors.error})),Cn=function(){var n=Object(j.f)(),t=Object(c.useContext)(x),e=Object(u.a)(t,2),o=(e[0],e[1]),i=Object(c.useState)(""),a=Object(u.a)(i,2),s=(a[0],a[1]),f=Object(c.useState)(""),l=Object(u.a)(f,2),b=l[0],h=l[1],d=Object(c.useState)({nickname:"",username:"",password:""}),p=Object(u.a)(d,2),m=p[0],O=p[1],g=function(n){var t=n.target.name;O(Object(I.a)(Object(I.a)({},m),{},Object(on.a)({},t,n.target.value)))};return Object(r.jsx)(zn,{children:Object(r.jsxs)(wn,{children:[Object(r.jsx)(kn,{children:"\u8a3b\u518a\u6703\u54e1"}),b&&Object(r.jsx)(_n,{children:b}),Object(r.jsxs)(Sn,{children:[Object(r.jsx)("input",{value:m.nickname,onChange:g,type:"text",name:"nickname",placeholder:"\u66b1\u7a31"}),Object(r.jsx)("input",{value:m.username,onChange:g,type:"text",name:"username",placeholder:"\u5e33\u865f"}),Object(r.jsx)("input",{value:m.password,onChange:g,type:"password",name:"password",placeholder:"\u5bc6\u78bc"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(t){h(""),t.preventDefault(),m.nickname&&m.username&&m.password||h("\u8acb\u586b\u5beb\u5fc5\u8981\u6b04\u4f4d"),fetch("https://student-json-api.lidemy.me/register",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:m.nickname,username:m.username,password:m.password})}).then((function(n){return n.json()})).then((function(t){if(0===t.ok)return h(t.message);localStorage.setItem("token",t.token),T().then((function(t){0===t.ok&&(localStorage.setItem("token",null),h(t.message)),o(t.data),n.push("/")})).catch((function(n){return s(n.message)}))})).catch((function(n){return s(n.message)}))},children:"\u63d0\u4ea4"}),Object(r.jsx)("button",{onClick:function(){n.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function Pn(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return Pn=function(){return n},n}function In(){var n=Object(s.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return In=function(){return n},n}function En(){var n=Object(s.a)(["\n  padding: 5px 0;\n  text-shadow: 0 0 1px rgba(0,0,0,0.5);\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return En=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 50px 0 20px 0;\n"]);return Dn=function(){return n},n}function Ln(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  width: 100%;\n  line-height: 1.5rem;\n  letter-spacing: 0.1rem;\n  margin: 50px 0;\n"]);return Ln=function(){return n},n}function An(){var n=Object(s.a)([""]);return An=function(){return n},n}function Jn(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  margin-left: 60px;\n"]);return Jn=function(){return n},n}function $n(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 80px 0 20px 0;\n"]);return $n=function(){return n},n}function Bn(){var n=Object(s.a)(["\n  min-height: 70vh;\n  padding: 0 30px;\n  & div {\n    display: flex;\n    align-items: center;\n  }\n"]);return Bn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n  \n"]);return Nn=function(){return n},n}var Tn=f.c.div(Nn()),Hn=f.c.div(Bn()),Mn=f.c.h1($n(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Gn=f.c.div(Jn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Rn=f.c.div(An()),qn=f.c.div(Ln(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Fn=f.c.div(Dn()),Kn=f.c.div(En(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),Qn=f.c.div(In(),(function(n){return n.theme.colors.error})),Un=f.c.div(Pn(),(function(n){return n.theme.colors.text})),Vn=function(){var n=Object(j.g)().pathname.split("/")[2],t=Object(c.useState)({}),e=Object(u.a)(t,2),o=e[0],i=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),f=s[0],l=s[1],x=Object(c.useState)(!1),b=Object(u.a)(x,2),h=b[0],d=b[1],p=Object(c.useState)(""),m=Object(u.a)(p,2),O=m[0],g=m[1];return Object(c.useEffect)((function(){d(!0),function(n){return fetch("".concat(N,"/posts?id=").concat(n)).then((function(n){return n.json()})).then((function(n){return n[0]}))}(n).then((function(n){i(n),function(n,t){return fetch("".concat(N,"/posts?id=").concat(n,"&userId=").concat(t,"&_expand=user")).then((function(n){return n.json()})).then((function(n){return n[0].user}))}(n.id,n.userId).then((function(n){d(!1),l(n.nickname)})).catch((function(n){return g(n.message)}))})).catch((function(n){return g(n.message)}))}),[]),Object(r.jsxs)(Tn,{children:[Object(r.jsxs)(Hn,{children:[h&&Object(r.jsx)(Un,{children:Object(r.jsx)("p",{children:"Loading..."})}),O&&Object(r.jsx)(Qn,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"}),Object(r.jsx)(Mn,{children:o.title}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Rn,{children:f}),Object(r.jsx)(Gn,{children:!h&&new Date(o.createdAt).toLocaleString()})]}),Object(r.jsx)(qn,{children:o.body})]}),Object(r.jsx)(Fn,{children:!h&&Object(r.jsx)(Kn,{onClick:function(){window.history.go(-1)},children:"\u8fd4\u56de"})})]})};function Wn(){var n=Object(s.a)(["\n  color: ",";\n  margin: -20px;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(s.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"] {\n    height: 30px;\n  }\n  & input[type="text"], & textarea {\n    width: 500px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return Zn=function(){return n},n}function nt(){var n=Object(s.a)([""]);return nt=function(){return n},n}var tt=f.c.div(nt()),et=f.c.div(Zn()),rt=f.c.div(Yn(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),ct=f.c.form(Xn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),ot=f.c.div(Wn(),(function(n){return n.theme.colors.error})),it=function(){var n=Object(j.f)(),t=Object(c.useContext)(x),e=Object(u.a)(t,2),o=e[0],i=(e[1],Object(c.useState)("")),a=Object(u.a)(i,2),s=(a[0],a[1],Object(c.useState)("")),f=Object(u.a)(s,2),l=f[0],b=f[1],h=Object(c.useState)({title:"",content:""}),d=Object(u.a)(h,2),p=d[0],m=d[1],O=function(n){var t=n.target.name;m(Object(I.a)(Object(I.a)({},p),{},Object(on.a)({},t,n.target.value)))};return Object(c.useEffect)((function(){o||n.push("/")}),[]),Object(r.jsx)(tt,{children:Object(r.jsxs)(et,{children:[Object(r.jsx)(rt,{children:"\u767c\u4f48\u6587\u7ae0"}),l&&Object(r.jsx)(ot,{children:l}),Object(r.jsxs)(ct,{children:[Object(r.jsx)("input",{value:p.title,onChange:O,type:"text",name:"title",placeholder:"\u6a19\u984c"}),Object(r.jsx)("textarea",{value:p.content,onChange:O,rows:"10",name:"content",placeholder:"\u8acb\u8f38\u5165\u5167\u5bb9..."}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),function(n,t){var e=localStorage.getItem("token");return T().then((function(r){var c=r.data.id;return fetch("".concat(N,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:c,title:n,body:t})}).then((function(n){return n.json()}))}))}(p.title,p.content).then((function(t){if(0===t.ok)return b(t.message);n.push("/")}))},children:"\u9001\u51fa"}),Object(r.jsx)("button",{onClick:function(){n.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function at(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  justify-content: center;\n  align-items: center;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return at=function(){return n},n}function ut(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return ut=function(){return n},n}function st(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n"]);return st=function(){return n},n}function ft(){var n=Object(s.a)(["\n  max-width: 550px;\n  overflow-wrap: break-word;\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 10px 0;\n"]);return ft=function(){return n},n}function lt(){var n=Object(s.a)(["\n  margin: 30px 0;\n  & div {\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n"]);return lt=function(){return n},n}function jt(){var n=Object(s.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return jt=function(){return n},n}function xt(){var n=Object(s.a)(["\n  padding-left: 30px;\n  border-left: 5px solid ",";\n  margin: 0 30px;\n"]);return xt=function(){return n},n}var bt=f.c.div(xt(),(function(n){return n.theme.colors.primary})),ht=f.c.div(jt(),(function(n){return n.theme.colors.error})),dt=f.c.div(lt()),pt=f.c.h2(ft(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),mt=f.c.div(st(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Ot=Object(f.c)(l.b)(ut(),(function(n){return n.theme.colors.read_more}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),gt=f.c.div(at(),(function(n){return n.theme.colors.text})),vt=function(n){var t=n.post;return Object(r.jsxs)(dt,{children:[Object(r.jsx)(pt,{children:t.title}),Object(r.jsx)(mt,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(Ot,{to:"/article/".concat(t.id),children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},yt=function(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),s=a[0],f=a[1],l=Object(c.useState)([]),j=Object(u.a)(l,2),x=j[0],b=j[1];return Object(c.useEffect)((function(){f(!0),fetch("".concat(N,"/posts")).then((function(n){return n.json()})).then((function(n){f(!1),b(n)})).catch((function(n){return o(n.message)}))}),[]),Object(r.jsxs)(bt,{children:[s&&Object(r.jsx)(gt,{children:Object(r.jsx)("p",{children:"Loading..."})}),x.map((function(n){return Object(r.jsx)(vt,{post:n},n.id)})),e&&Object(r.jsx)(ht,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"})]})};function zt(){var n=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n  text-align: center;\n"]);return zt=function(){return n},n}function wt(){var n=Object(s.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n  text-align: center;\n"]);return wt=function(){return n},n}function kt(){var n=Object(s.a)(["\n  padding: 0 100px;\n"]);return kt=function(){return n},n}var St=f.c.div(kt()),_t=f.c.h2(wt(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Ct=f.c.p(zt(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Pt=function(){return Object(r.jsxs)(St,{children:[Object(r.jsx)(_t,{children:"\u95dc\u65bc\u6211"}),Object(r.jsx)(Ct,{children:"2020 \u5e74 6 \u6708 \u958b\u59cb\u8e0f\u5165\u524d\u7aef\u7684\u5b78\u7fd2\u4e4b\u8def\uff0c\u9019\u500b\u90e8\u843d\u683c\u662f\u5728\u5b78\u7fd2\u7b2c 22 \u9031\u7684\u6642\u5019\uff0c\u5229\u7528 React \u5be6\u73fe SPA \u7684\u7df4\u7fd2\u7db2\u7ad9\u3002 \u5be6\u4f5c\u904e\u7a0b\u4e2d\uff0c\u9664\u4e86\u7ffb\u95b1\u7b46\u8a18\u4e4b\u5916\uff0c\u9084\u53c3\u8003\u4e86\u5f88\u591a\u8c93\u54aa\u5f71\u7247\u3002\u9047\u5230 bug \u7684\u6642\u5019\uff0c\u6211\u90fd\u662f\u5750\u6642\u5149\u6a5f\u53bb\u53e4\u4ee3\u627e\u7b54\u6848\u518d\u56de\u4f86\u6539\u7684\u5537\u3002 \u5662\uff01\u5c0d\u4e86\uff5e \u672c\u7db2\u7ad9\b\u56e0\u70ba\u6bd4\u8f03\u6709\u500b\u6027\uff0c\u6240\u4ee5\u8ddf\u5b83\u4e92\u52d5\u8981\u591a\u4e00\u9ede\u8010\u5fc3\uff0c\u5225\u8ddf\u5b83\u4e00\u822c\u898b\u8b58\u3002\u90a3\u6211\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u5927\u5bb6\u7576\u81ea\u5df1\u5bb6\u300c\u96a8\u610f\u901b\u901b\u300d\uff0c\u6211\u53bb\u5695\u8c93\u4e86\uff01"})]})};function It(){var n=Object(s.a)(["\n  height: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & p {\n    color: ",";\n    font-size: ",";\n    text-shadow: 0 0 15px rgba(0,0,0,0.5);\n  }\n"]);return It=function(){return n},n}var Et=f.c.div(It(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.text})),Dt=function(){return Object(r.jsx)(Et,{children:Object(r.jsx)("p",{children:"Design by krebikshaw"})})};function Lt(){var n=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n  \n  a {\n    text-decoration: none;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  input {\n    outline: none;\n    border: none;\n  }\n\n  textarea {\n    border: none;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  button {\n    border: none;\n    background-color: #fff;\n    cursor: pointer;\n  }\n\n  button:hover, button:focus {\n    outline: none;\n  }\n\n  body {\n    font:  14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n  }\n"]);return Lt=function(){return n},n}var At=Object(f.b)(Lt());function Jt(){var n=Object(s.a)(["\n  min-height: 90vh;\n  position: relative;\n  padding: 40px 60px;\n  margin: 0 220px;\n  background: rgba(255,255,255, 0.6);\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);\n  border-radius: 8px;\n  z-index: 2;\n"]);return Jt=function(){return n},n}function $t(){var n=Object(s.a)(["\n  position: relative;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n"]);return $t=function(){return n},n}var Bt={colors:{primary:"#245277",text:"#787b7b",cross_line:"#6daeaf",read_more:"#0891ff",error:"#f53224"},bg_colors:{bg_primary:"#f2fffb"},font_size:{brand:"2rem",title:"1.6rem",text:"1rem",input:"1.5rem",hover:"1.05rem"}},Nt=f.c.div($t()),Tt=f.c.div(Jt()),Ht=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),s=a[0],b=a[1];return Object(c.useEffect)((function(){localStorage.getItem("token")&&(b(!0),T().then((function(n){b(!1),1===n.ok&&o(n.data)})))}),[]),Object(r.jsx)(x.Provider,{value:[e,o],children:Object(r.jsx)(Nt,{children:Object(r.jsxs)(f.a,{theme:Bt,children:[Object(r.jsx)(At,{}),Object(r.jsxs)(l.a,{children:[Object(r.jsxs)(Tt,{children:[!s&&Object(r.jsx)(w,{}),Object(r.jsx)(P,{}),Object(r.jsx)(w,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(cn,{})}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(pn,{})}),Object(r.jsx)(j.a,{path:"/register",children:Object(r.jsx)(Cn,{})}),Object(r.jsx)(j.a,{path:"/article",children:Object(r.jsx)(Vn,{})}),Object(r.jsx)(j.a,{path:"/post",children:Object(r.jsx)(it,{})}),Object(r.jsx)(j.a,{path:"/list",children:Object(r.jsx)(yt,{})}),Object(r.jsx)(j.a,{path:"/about",children:Object(r.jsx)(Pt,{})})]})]}),Object(r.jsx)(Dt,{})]})]})})})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Ht,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1ce782d4.chunk.js.map