(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ZcoD:function(t,e,n){"use strict";n.r(e);var a=n("kD0k"),r=n.n(a),o=(n("ls82"),n("91GP"),n("SRfc"),n("dRSK"),n("ZBNC")),i=n("tRbT"),c=n("ofer"),s=n("kKik"),l=n("ldJd"),u=n("H2TA"),p=n("q1tI"),h=n.n(p),d=n("axFy");p.Component;var f=function(t){var e,n;function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={books:new Array,loading:!0},e}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.fetchBooks()},o.render=function(){var t=this.props.classes,e=this.state,n=e.books,a=e.loading;return h.a.createElement("div",{className:t.root},h.a.createElement(i.a,{container:!0,spacing:16},a&&h.a.createElement(i.a,{item:!0,sm:12},h.a.createElement(c.a,{variant:"h5"},"Loading...")),n.map((function(e){return h.a.createElement(i.a,{key:e.hash,item:!0,xs:4,sm:3,md:3,lg:2,style:{height:"auto",width:"100%"}},h.a.createElement(s.a,null,h.a.createElement("img",{src:e.imageUrl,alt:e.title,className:t.img}),h.a.createElement(l.a,{title:e.title,subtitle:h.a.createElement("span",null,"by: ",e.author)})))}))))},o.fetchBooks=function(){var t;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.awrap(d.a.fetchAllBooks());case 3:t=e.sent,this.setState({books:t,loading:!1}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1});case 11:case"end":return e.stop()}}),null,this,[[0,7]])},a}(p.Component);e.default=Object(u.a)((function(t){var e;return Object(o.a)({root:(e={minHeight:"100vh",width:"auto",marginLeft:t.spacing(3),marginRight:t.spacing(3)},e[t.breakpoints.up(1100+t.spacing(6))]={width:1100,marginLeft:"auto",marginRight:"auto"},e.display="flex",e.flexWrap="wrap",e.flexGrow=1,e.flexDirection="column",e.justifyContent="space-around",e.overflow="hidden",e.padding=t.spacing(8)+"px 0",e),img:{width:"100%",height:"auto"}})}))(f)},dRSK:function(t,e,n){"use strict";var a=n("XKFU"),r=n("CkkT")(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")}}]);
//# sourceMappingURL=component---src-pages-books-tsx-f77efece928ae0019df0.js.map