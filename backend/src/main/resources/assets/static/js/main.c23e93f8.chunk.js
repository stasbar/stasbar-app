(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/StackOverflowIcon.3ae582d5.svg"},101:function(e,t,a){e.exports=a.p+"static/media/VapeToolLogo.3e2427a7.svg"},102:function(e,t,a){e.exports=a.p+"static/media/TaxLedgerLogo.7fc1e6f1.svg"},103:function(e,t,a){e.exports=a.p+"static/media/VapeToolLongFramed.8e23a94d.png"},104:function(e,t,a){e.exports=a.p+"static/media/GoLureLongFramed.e20bd3bf.png"},105:function(e,t,a){e.exports=a.p+"static/media/Wallpapers4KLongFramed.8c15a6bd.png"},106:function(e,t,a){e.exports=a.p+"static/media/WallpapersOneClickLongFramed.dc77aea2.png"},107:function(e,t,a){e.exports=a.p+"static/media/WishesLongFramed.224111de.png"},108:function(e,t,a){e.exports=a.p+"static/media/TaxLedgerFramed.6358a5c7.png"},109:function(e,t,a){e.exports=a.p+"static/media/VapeToolLongFramed.41166ef3.webp"},110:function(e,t,a){e.exports=a.p+"static/media/GoLureLongFramed.4f47a5bd.webp"},111:function(e,t,a){e.exports=a.p+"static/media/Wallpapers4KLongFramed.843ab7e0.webp"},112:function(e,t,a){e.exports=a.p+"static/media/WallpapersOneClickLongFramed.83bf14cd.webp"},113:function(e,t,a){e.exports=a.p+"static/media/WishesLongFramed.16c18fde.webp"},114:function(e,t,a){e.exports=a.p+"static/media/TaxLedgerFramed.0ddcba0d.webp"},115:function(e,t,a){e.exports=a.p+"static/media/RaspberryWalletFramed.fa91ab95.png"},116:function(e,t,a){e.exports=a.p+"static/media/RaspberryWalletFramed.72714878.webp"},117:function(e,t,a){e.exports=a.p+"static/media/MyWebsiteRecurrenceFramed.f8c0e62d.png"},118:function(e,t,a){e.exports=a.p+"static/media/MyWebsiteRecurrenceFramed.505f3f93.webp"},213:function(e,t,a){e.exports=a(321)},220:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),i=a(27),s=a(20),l=a(2),p=a(325),m=a(324),u=a(326),g=(a(220),a(12)),h=a.n(g),d=a(17),b=a(7),f=a(8),y=a(10),j=a(9),w=a(11),E=a(4),k=a(89),x=a(323),v="production"===Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_STAGE?window.location.origin:"",O={fetchAllBooks:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching books"),e.next=3,fetch(v+"/api/books?shelf=read");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw console.error(t),Error(t.statusText);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchFeaturedBooks:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching website books"),e.next=3,fetch(v+"/api/books?shelf=featured");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw console.error(t),Error(t.statusText);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchProgrammingBooks:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching programming books"),e.next=3,fetch(v+"/api/books?shelf=programming");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw console.error(t),Error(t.statusText);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchAllQuotes:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching quotes"),e.next=3,fetch(v+"/api/quotes");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw console.error(t),Error(t.statusText);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchFeaturedQuotes:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching quotes"),e.next=3,fetch(v+"/api/quotes?limit=10");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:throw console.error(t),Error(t.statusText);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},S=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.book;return r.a.createElement("div",{id:e.hash},r.a.createElement("h3",null,"Title: ",e.title),r.a.createElement("h3",null,"Author: ",e.author),r.a.createElement("h3",null,"Rating: ",e.rating))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={books:new Array,loading:!0},a.fetchBooks(),a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.classes,n=this.state,o=n.books,c=n.loading;return r.a.createElement("div",{className:a.root},r.a.createElement(l.e,{container:!0,spacing:16},c&&r.a.createElement(l.e,{item:!0,sm:12},r.a.createElement(l.j,{variant:"h5"},"Loading...")),o.map(function(e){return r.a.createElement(l.e,{key:e.hash,item:!0,xs:4,sm:3,md:3,lg:2,style:{height:"auto",width:"100%"}},r.a.createElement(l.f,{component:function(a){return r.a.createElement(x.a,Object.assign({},a,{to:"".concat(t.url,"/").concat(e.hash)}))}},r.a.createElement("img",{src:e.imageUrl,alt:e.title,className:a.img}),r.a.createElement(l.g,{title:e.title,subtitle:r.a.createElement("span",null,"by: ",e.author)})))})),r.a.createElement(k.a,{path:"".concat(t.path,"/:hash"),component:function(e){return r.a.createElement(S,Object.assign({},e,{book:o.find(function(t){return t.hash===e.match.params.hash})}))}}))}},{key:"fetchBooks",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.fetchAllBooks();case 3:t=e.sent,console.log(t),this.setState({books:t,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),C=Object(s.withStyles)(function(e){var t;return Object(s.createStyles)({root:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(E.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(E.a)(t,"display","flex"),Object(E.a)(t,"flexWrap","wrap"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"flexDirection","column"),Object(E.a)(t,"justifyContent","space-around"),Object(E.a)(t,"overflow","hidden"),Object(E.a)(t,"padding","".concat(8*e.spacing.unit,"px 0")),t),img:{width:"100%",height:"auto"}})})(_),N=a(96),L=a(327),F=a(119),B=a(35),W=a.n(B),T=a(47),A=a.n(T),I=a(48),P=a.n(I),R=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.createElement("footer",{className:this.props.classes.footer},n.createElement(l.j,{variant:"h6",align:"center",gutterBottom:!0},n.createElement(l.b,{href:"https://github.com/stasbar/stasbar-app"},"Source Code")),n.createElement(l.j,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"build with ",n.createElement("a",{className:e.link,href:"https://kotlinlang.org/"},"Kotlin \u2764\ufe0f")," hosted on ",n.createElement("a",{className:e.link,href:"https://ipfs.io/"},"IPFS")))}}]),t}(n.Component),G=Object(s.withStyles)(function(e){return Object(s.createStyles)({footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit},link:{textDecoration:"none",color:e.palette.text.primary}})})(R),D=(a(90),a(45)),M=a.n(D),V=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.children,r=n.createElement(l.a,{position:"static",className:t.appBar},n.createElement(l.i,null,n.createElement(M.a,{component:x.a,to:"/",className:t.logoText,color:"secondary"},"\n          __             __\n    _____/ /_____ ______/ /_  ____ ______\n   / ___/ __/ __ `/ ___/ __ \\/ __ `/ ___/\n  (__  ) /_/ /_/ (__  ) /_/ / /_/ / /\n /____/\\__/\\__,_/____/_.___/\\__,_/_/\n            "),n.createElement(W.a,{className:t.menuButton,variant:"outlined",component:x.a,to:"/books",color:"secondary"},"Books",n.createElement(A.a,{className:t.rightIcon})),n.createElement(W.a,{className:t.menuButton,variant:"outlined",component:x.a,to:"/quotes",color:"secondary"},"Quotes",n.createElement(P.a,{className:t.rightIcon}))));return n.createElement(n.Fragment,null,n.createElement(l.d,null),r,n.createElement("main",{className:t.main},a),n.createElement(G,null))}}]),t}(n.Component),Q=Object(F.a)(L.a,Object(s.withStyles)(function(e){var t;return{appBar:{position:"relative"},main:{flexGrow:1},logoText:(t={},Object(E.a)(t,e.breakpoints.down(500+3*e.spacing.unit*2),{marginRight:20,marginLeft:-12}),Object(E.a)(t,"textDecoration","none"),Object(E.a)(t,"fontFamily","B612Mono, monospace"),Object(E.a)(t,"whiteSpace","pre"),Object(E.a)(t,"fontStyle","bold"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"fontSize",5),t),menuButton:Object(E.a)({marginRight:0,marginLeft:0},e.breakpoints.up(500+3*e.spacing.unit*2),{marginRight:20,marginLeft:-12}),rightIcon:{marginLeft:e.spacing.unit},content:{display:"flex",flexGrow:1,padding:3*e.spacing.unit},mainPaper:Object(N.a)({flexGrow:1,alignSelf:"center"},e.mixins.gutters(),{maxWidth:1200,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}}))(V);function q(e){return n.createElement(l.h,e,n.createElement("path",{fill:"#006CAC",d:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}))}function K(e){return n.createElement(l.h,e,n.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))}var z=a(99),H=a.n(z),U=a(100),J=a.n(U),Z=a(101),Y=a.n(Z),$=a(102),X=a.n($),ee=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;var t=function(t){return n.createElement(l.e,{item:!0,className:e.intentButton},n.createElement(i.a,{to:t.href,eventLabel:t.name,target:"_blank",style:{textDecoration:"none"}},n.createElement(l.b,{variant:"contained",color:"primary",style:{color:t.textColor,backgroundColor:t.backgroundColor}},t.name,t.Icon)))};return n.createElement("div",{className:e.content},n.createElement(l.j,{variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,className:e.nameTitle},"STANISLAW BARANSKI"),n.createElement(l.j,{variant:"h6",align:"center",gutterBottom:!0},n.createElement("u",{className:e.keyword},"full stack software developer"),", ",n.createElement("u",{className:e.keyword},"beginner entrepreneur"),", ",n.createElement("u",{className:e.keyword},"b.s. in computer science"),", ",n.createElement("u",{className:e.keyword},function(){var e=new Date,t=Math.sign(e.getUTCMonth()-3);return e.getUTCFullYear()-1995+t}()," years old")),n.createElement(l.e,{container:!0,spacing:0,justify:"center",className:e.buttons},n.createElement(t,{name:"LinkedIn",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement(q,null),textColor:"#243641",backgroundColor:"#FFF"}),n.createElement(t,{name:"Github",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement(K,null),textColor:"#FFF",backgroundColor:"#212529"}),n.createElement(t,{name:"StackOverflow",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement("img",{src:J.a,width:20}),textColor:"#343536",backgroundColor:"#F9F9FA"}),n.createElement(t,{name:"Keybase",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement("img",{src:H.a,width:20}),textColor:"#FFF",backgroundColor:"#3095F4"}),n.createElement(t,{name:"TaxLedger",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement("img",{src:X.a,width:20}),textColor:"#243641",backgroundColor:"#FFF"}),n.createElement(t,{name:"VapeTool",href:"https://www.linkedin.com/in/stasbar/",Icon:n.createElement("img",{src:Y.a,width:20}),textColor:"#FFF",backgroundColor:"#3546A7"})),n.createElement(l.e,{container:!0,spacing:0,justify:"center",className:e.specs},n.createElement(l.e,{item:!0,xs:6,sm:6,md:3,lg:3,className:e.specGridItem},n.createElement(l.j,{className:e.specName},"Android"),n.createElement(l.j,{component:"p",color:"textSecondary"},"My main specialty is mobile applications for Android in Java and Kotlin.")),n.createElement(l.e,{item:!0,xs:6,sm:6,md:3,lg:3,className:e.specGridItem},n.createElement(l.j,{className:e.specName},"Backend"),n.createElement(l.j,{component:"p",color:"textSecondary"},"I chose Firebase whenever it's possible. Otherwise Kotlin with ktor")),n.createElement(l.e,{item:!0,xs:6,sm:6,md:3,lg:3,className:e.specGridItem},n.createElement(l.j,{className:e.specName},"Frontend"),n.createElement(l.j,{component:"p",color:"textSecondary"},"I prefer reusability over simplicity, that's why I use React with TypeScript")),n.createElement(l.e,{item:!0,xs:6,sm:6,md:3,lg:3,className:e.specGridItem},n.createElement(l.j,{className:e.specName},"Tools"),n.createElement(l.j,{component:"p",color:"textSecondary"},"When it comes to tools I love IntelliJ & Android Studio running on macOS"))))}}]),t}(n.Component),te=Object(s.withStyles)(function(e){return Object(s.createStyles)({nameTitle:{fontSize:"2rem",fontWeight:600,marginBottom:"1rem"},content:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},buttons:{marginTop:4*e.spacing.unit},intentButton:{margin:e.spacing.unit},specs:{marginTop:4*e.spacing.unit},keyword:{color:e.palette.secondary.main,borderBottom:".1rem solid currentColor",textDecoration:"none",textOverflow:"ellipsis",whiteSpace:"nowrap"},specGridItem:{background:"inherit",padding:e.spacing.unit},specName:{color:e.palette.secondary.main,margin:e.spacing.unit,fontSize:"1rem",fontWeight:700,textAlign:"center"}})})(ee),ae=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.createElement("div",{className:e.heroContent},n.createElement(l.j,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Motivated by the newest technologies and business opportunities. Currently focusing on blockchain technology. Key values in my life:",n.createElement("br",null),"Efficiency\ud83c\udfcd\ufe0f, Development\ud83d\ude80, Adaptation\ud83e\udd8e, Freedom\ud83c\udf0e and Simplicity\uf8ff"))}}]),t}(n.Component),ne=Object(s.withStyles)(function(e){return Object(s.createStyles)({heroContent:{maxWidth:700,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")}})})(ae),re=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.app,a=e.classes,r=function(e){return n.createElement("a",{className:a.link,href:e.href},e.text)};return n.createElement(l.e,{item:!0,sm:"mobile"===t.platform?3:6,md:"mobile"===t.platform?3:6,lg:"mobile"===t.platform?3:6,className:a.root},n.createElement(l.j,{variant:"h4",color:"secondary",className:a.name},t.name),n.createElement("picture",null,n.createElement("source",{srcSet:t.imgSrc,type:"image/png",className:a.img}),n.createElement("source",{srcSet:t.imgWebp,type:"image/webp",className:a.img}),n.createElement("img",{src:t.imgSrc,alt:t.name,className:a.img})),n.createElement(l.j,{className:a.description},t.description,t.links.googlePlay&&t.links.appStore&&". Both on ",t.links.googlePlay&&t.links.appStore&&n.createElement(r,{href:t.links.googlePlay,text:"Android"}),t.links.googlePlay&&t.links.appStore&&" and ",t.links.googlePlay&&t.links.appStore&&n.createElement(r,{href:t.links.appStore,text:"iOS"}),t.links.googlePlay&&!t.links.appStore&&". Check out on ",t.links.googlePlay&&!t.links.appStore&&n.createElement(r,{href:t.links.googlePlay,text:"Google Play"}),t.links.github&&". Check it out on ",t.links.github&&n.createElement(r,{href:t.links.github,text:"Github"}),t.links.website&&". See ",t.links.website&&n.createElement(r,{href:t.links.website,text:"website"})))}}]),t}(n.Component),oe=Object(s.withStyles)(function(e){return Object(s.createStyles)({root:{display:"flex",alignSelf:"flex-start",flexDirection:"column",justifyItems:"center",alignItems:"center",textDecoration:"none"},name:{marginBottom:e.spacing.unit,fontSize:"1rem",fontWeight:700},img:{height:"auto",width:"100%"},description:{textDecoration:"none",color:e.palette.text.secondary,fontSize:"1rem"},link:{textDecoration:"none",borderBottom:".1rem solid currentColor",paddingBottom:"0.05rem",color:e.palette.text.primary,"&:hover":{color:e.palette.secondary.main}}})})(re),ce=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.createElement("div",{className:e.root},n.createElement(l.j,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,className:e.nameTitle},this.props.title),n.createElement("div",{className:e.layout},n.createElement(l.e,{container:!0,justify:"center",spacing:40,style:{alignContent:"flex-start",alignItems:"stretch",flexGrow:1}},this.props.apps.map(function(e){return n.createElement(oe,{key:e.name,app:e})}))))}}]),t}(n.Component),ie=Object(s.withStyles)(function(e){var t;return Object(s.createStyles)({root:{margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},nameTitle:{fontWeight:500,fontSize:"2rem"},layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,padding:"".concat(8*e.spacing.unit,"px 0")},Object(E.a)(t,e.breakpoints.up(800+3*e.spacing.unit*2),{width:800,marginLeft:"auto",marginRight:"auto"}),Object(E.a)(t,"display","flex"),Object(E.a)(t,"flexWrap","wrap"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"flexDirection","column"),Object(E.a)(t,"justifyContent","space-around"),Object(E.a)(t,"overflow","hidden"),t)})})(ce),se=a(103),le=a.n(se),pe=a(104),me=a.n(pe),ue=a(105),ge=a.n(ue),he=a(106),de=a.n(he),be=a(107),fe=a.n(be),ye=a(108),je=a.n(ye),we=a(109),Ee=a.n(we),ke=a(110),xe=a.n(ke),ve=a(111),Oe=a.n(ve),Se=a(112),_e=a.n(Se),Ce=a(113),Ne=a.n(Ce),Le=a(114),Fe=a.n(Le),Be=[{name:"Vape Tool",imgSrc:le.a,imgWebp:Ee.a,description:"Fully fledged utility arsenal and social media for Vapers. Over 1M downloads and 300k active users",platform:"mobile",links:{website:"https://vapetool.stasbar.com",github:null,googlePlay:"https://play.google.com/store/apps/details?id=com.stasbar.vape_tool",appStore:"https://itunes.apple.com/us/app/coil-builder/id1210289983?mt=8"}},{name:"Tax Ledger",imgSrc:je.a,imgWebp:Fe.a,description:"Desktop application for settle taxes from cryptocurrencies exchanges",platform:"desktop",links:{website:"https://tax-ledger.com",github:null,googlePlay:null,appStore:null}},{name:"4K Wallpapers",imgSrc:ge.a,imgWebp:Oe.a,description:"High resolution wallpapers",platform:"mobile",links:{website:null,github:null,googlePlay:"https://play.google.com/store/apps/details?id=com.wallpapers.new_wallpapers4k",appStore:null}},{name:"Go Lure",imgSrc:me.a,imgWebp:xe.a,description:"Catching the Pokemon Go hype, with addon scheduler for lure module party on a map",platform:"mobile",links:{website:null,github:null,googlePlay:"https://play.google.com/store/apps/details?id=com.stasbar.golure",appStore:null}},{name:"Easy Wallpapers",imgSrc:de.a,imgWebp:_e.a,description:"Easy to use wallpaper apps build with many category flavors",platform:"mobile",links:{website:null,github:null,googlePlay:"https://play.google.com/store/apps/details?id=com.david_wallpapers.city_night",appStore:null}},{name:"Wishes",imgSrc:fe.a,imgWebp:Ne.a,description:"Wishes application for many occasion flavors",platform:"mobile",links:{website:null,github:null,googlePlay:"https://play.google.com/store/apps/details?id=com.allwishes.christmas",appStore:null}}],We=a(115),Te=a.n(We),Ae=a(116),Ie=a.n(Ae),Pe=a(117),Re=a.n(Pe),Ge=a(118),De=a.n(Ge),Me=[{name:"Raspberry Wallet",imgSrc:Te.a,imgWebp:Ie.a,description:"Bitcoin hardware wallet on Raspberry Pi Zero",platform:"desktop",links:{website:"https://raspberrywallet.github.io/readme.html",github:"https://github.com/RaspberryWallet",googlePlay:null,appStore:null}},{name:"website",imgSrc:Re.a,imgWebp:De.a,description:"This website & android app itself are good pieces of software, so I think it's worth mention here",platform:"desktop",links:{website:null,github:"https://github.com/stasbar/stasbar-app",googlePlay:null,appStore:null}}],Ve=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={books:new Array,loading:!0},a.fetchBooks(),a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.classes,n=this.state,o=n.books,c=n.loading;return r.a.createElement("div",{className:a.root},r.a.createElement(l.j,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,className:a.nameTitle},"My favorite books"),r.a.createElement("div",{className:a.layout},r.a.createElement(l.e,{container:!0,spacing:40,justify:"center"},c&&r.a.createElement(l.e,{item:!0,sm:12},r.a.createElement(l.j,{variant:"h5"},"Loading...")),o.map(function(e){return r.a.createElement(l.e,{key:e.hash,item:!0,xs:6,sm:3,md:2,lg:2,style:{height:"auto",width:"100%"}},r.a.createElement(l.f,{component:function(a){return r.a.createElement(x.a,Object.assign({},a,{to:"".concat(t.url,"/").concat(e.hash)}))}},r.a.createElement("img",{src:e.imageUrl,alt:e.title,className:a.img}),r.a.createElement(l.g,{title:e.title,subtitle:r.a.createElement("span",null,"by: ",e.author)})))})),r.a.createElement(l.b,{className:a.moreBooksButton,variant:"outlined",component:function(e){return r.a.createElement(x.a,Object.assign({},e,{to:"/books"}))},color:"secondary"},"Books",r.a.createElement(A.a,{className:a.rightIcon}))))}},{key:"fetchBooks",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.fetchFeaturedBooks();case 3:t=e.sent,console.log(t),this.setState({books:t,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),Qe=Object(s.withStyles)(function(e){var t;return Object(s.createStyles)({root:{margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(E.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(E.a)(t,"display","flex"),Object(E.a)(t,"flexWrap","wrap"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"flexDirection","column"),Object(E.a)(t,"justifyContent","space-around"),Object(E.a)(t,"overflow","hidden"),Object(E.a)(t,"padding","".concat(8*e.spacing.unit,"px 0")),t),img:{width:"100%",height:"auto"},nameTitle:{fontWeight:500,fontSize:"2rem"},moreBooksButton:{width:"auto",alignSelf:"center",marginTop:50,marginLeft:-12,marginRight:20},rightIcon:{marginLeft:e.spacing.unit}})})(Ve),qe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={quotes:new Array,loading:!0},a.fetchQuotes(),a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.classes,n=this.state,o=n.quotes,c=n.loading;return r.a.createElement("div",{className:a.root},r.a.createElement(l.j,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,className:a.nameTitle},"My favorite quotes"),r.a.createElement("div",{className:a.layout},c&&r.a.createElement(l.e,{item:!0,sm:12},r.a.createElement(l.j,{variant:"h5"},"Loading...")),o.map(function(e){return r.a.createElement(l.c,{key:e.hash,className:a.cardQuote,component:function(a){return r.a.createElement(x.a,Object.assign({},a,{to:"".concat(t.url,"/").concat(e.hash)}))}},r.a.createElement(l.j,{variant:"body1"},r.a.createElement("i",null,e.text)," ~",e.author))}),r.a.createElement(l.b,{className:a.moreQuotesButton,variant:"outlined",component:function(e){return r.a.createElement(x.a,Object.assign({},e,{to:"/quotes"}))},color:"secondary"},"Quotes",r.a.createElement(P.a,{className:a.rightIcon}))))}},{key:"fetchQuotes",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.fetchFeaturedQuotes();case 3:t=e.sent,console.log(t),this.setState({quotes:t,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),Ke=Object(s.withStyles)(function(e){var t;return Object(s.createStyles)({root:{margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(E.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(E.a)(t,"display","flex"),Object(E.a)(t,"flexWrap","wrap"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"flexDirection","column"),Object(E.a)(t,"justifyContent","space-around"),Object(E.a)(t,"overflow","hidden"),Object(E.a)(t,"padding","".concat(8*e.spacing.unit,"px 0")),t),cardQuote:{backgroundColor:e.palette.primary.light,textDecoration:"none",margin:"".concat(e.spacing.unit,"px 0"),padding:"".concat(e.spacing.unit,"px")},nameTitle:{fontWeight:500,fontSize:"2rem"},moreQuotesButton:{width:"auto",alignSelf:"center",marginTop:50,marginLeft:-12,marginRight:20},rightIcon:{marginLeft:e.spacing.unit}})})(qe),ze=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.createElement("div",null,n.createElement("div",{className:e.odd},n.createElement(te,null)),n.createElement("div",{className:e.even},n.createElement(ne,null)),n.createElement("div",{className:e.odd},n.createElement(ie,{title:"My Apps",apps:Be})),n.createElement("div",{className:e.even},n.createElement(ie,{title:"Other Projects",apps:Me})),n.createElement("div",{className:e.odd},n.createElement(Qe,{match:this.props.match,history:this.props.history,location:this.props.location})),n.createElement("div",{className:e.even},n.createElement(Ke,{match:this.props.match,history:this.props.history,location:this.props.location})))}}]),t}(n.Component),He=Object(s.withStyles)(function(e){return Object(s.createStyles)({odd:{backgroundColor:e.palette.primary.light},even:{backgroundColor:e.palette.primary.dark}})})(ze),Ue=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={quotes:new Array,loading:!0},a.fetchQuotes(),a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.classes,r=this.state,o=r.quotes,c=r.loading;return n.createElement("div",{className:a.root},c&&n.createElement(l.e,{item:!0,sm:12},n.createElement(l.j,{variant:"h5"},"Loading...")),o.map(function(e){return n.createElement(l.c,{className:a.cardQuote,component:function(a){return n.createElement(x.a,Object.assign({},a,{to:"".concat(t.url,"/").concat(e.hash)}))}},n.createElement(l.j,{variant:"body1"},e.text," ~",e.author))}))}},{key:"fetchQuotes",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.fetchAllQuotes();case 3:t=e.sent,console.log(t),this.setState({quotes:t,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),Je=Object(s.withStyles)(function(e){var t;return Object(s.createStyles)({root:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(E.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(E.a)(t,"display","flex"),Object(E.a)(t,"flexWrap","wrap"),Object(E.a)(t,"flexGrow",1),Object(E.a)(t,"flexDirection","column"),Object(E.a)(t,"justifyContent","space-around"),Object(E.a)(t,"overflow","hidden"),Object(E.a)(t,"padding","".concat(8*e.spacing.unit,"px 0")),t),cardQuote:{textDecoration:"none",margin:"".concat(e.spacing.unit,"px 0"),padding:"".concat(e.spacing.unit,"px")}})})(Ue),Ze=Object(s.createMuiTheme)({palette:{type:"dark",primary:{main:"#343B3A",light:"#343838",dark:"#2E3231"},secondary:{main:"#04C78E"}},typography:{useNextVariants:!0}}),Ye=function(){return i.b.set({page:window.location.pathname}),i.b.pageview(window.location.pathname),null},$e=function(){return r.a.createElement("div",null,r.a.createElement(l.j,{variant:"h2"},"Whoops"),r.a.createElement(l.j,{variant:"body1"},"Sorry but ",location.pathname," didn\u2019t match any pages"))},Xe=function(){return r.a.createElement("h2",null,"About")},et=function(){return r.a.createElement(p.a,null,r.a.createElement(s.MuiThemeProvider,{theme:Ze},r.a.createElement(Q,null,r.a.createElement(m.a,{path:"/",component:Ye}),r.a.createElement(u.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:He}),r.a.createElement(m.a,{path:"/about",component:Xe}),r.a.createElement(m.a,{path:"/books",component:C}),r.a.createElement(m.a,{path:"/quotes",component:Je}),r.a.createElement(m.a,{component:$e})))))};a(319),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.b.initialize("UA-123888398-1"),c.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/KeybaseLogo.256c7062.svg"}},[[213,2,1]]]);
//# sourceMappingURL=main.c23e93f8.chunk.js.map