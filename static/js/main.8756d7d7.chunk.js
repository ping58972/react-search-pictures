(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=(a(24),a(8)),u=a.n(s),o=a(16),m=a(2),l=a(3),p=a(5),f=a(4),h=a(6),d=a(17),b=a.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 2dcdae42afe95d0d62232899b6d1dce549ebde2916c1dcb799e37608bcc151f0"}}),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmitRun(a.state.term)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:""},"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component),v=(a(45),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({span:t})},a.state={span:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.span)}},r.a.createElement("img",{ref:this.imageRef,src:a.regular,alt:t}))}}]),t}(r.a.Component)),j=function(e){var t=e.images.map(function(e){return r.a.createElement(v,{key:e.id,image:e})});return r.a.createElement("div",{className:"image-list"},t)},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(o.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search/photos",{params:{query:t}});case 2:n=e.sent,a.setState({images:n.data.results});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment",style:{marginTop:"10px"}},r.a.createElement(g,{onSubmitRun:this.onSearchSubmit}),r.a.createElement(j,{images:this.state.images}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8756d7d7.chunk.js.map