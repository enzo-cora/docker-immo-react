(this.webpackJsonpsite_immo=this.webpackJsonpsite_immo||[]).push([[4],{105:function(e,t,n){e.exports={menuAdmin:"admin-pannel_menuAdmin__1x_RZ",ulAdmin:"admin-pannel_ulAdmin__1d12N",mesParagraphe:"admin-pannel_mesParagraphe__3R7iu"}},106:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(105),c=n.n(r),m=n(10),i=n(5),u=n(24),o=n(106),E=n.n(o),p=n(9),s=n(33),d={fetchNewImmo:s.e},b=Object(p.b)(null,d)((function(e){var t=e.fetchNewImmo;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n,a=new FormData,l=e.target.elements,r=Object(u.a)(l);try{for(r.s();!(n=r.n()).done;){var c=n.value;if("file"===c.type&&c.files.length)switch(c.name){case"img":a.append("img",c.files[0]);break;case"imgs":for(var m in c.files)a.append("imgs",c.files[m])}else"checkbox"===c.type?a.append(c.name,c.checked):a.append(c.name,c.value)}}catch(o){r.e(o)}finally{r.f()}var i=+l.bedroom.value+ +l.living_room.value;a.append("rooms",i),t(a)},className:E.a.column},l.a.createElement("div",null,"Banniere",l.a.createElement("input",{required:!0,type:"file",name:"img",accept:"image/jpeg"})),l.a.createElement("div",null,"Miniatures",l.a.createElement("input",{type:"file",name:"imgs",multiple:!0,accept:"image/jpeg"})),l.a.createElement("div",null,l.a.createElement("select",{name:"status"},l.a.createElement("option",{value:"location"},"Location"),l.a.createElement("option",{value:"achat"},"Achat"))),l.a.createElement("div",null,l.a.createElement("select",{name:"type"},l.a.createElement("option",{value:"maison"},"Maison"),l.a.createElement("option",{value:"appartement"},"Maison"),l.a.createElement("option",{value:"local"},"Maison"))),l.a.createElement("div",null,l.a.createElement("label",null,"title",l.a.createElement("input",{type:"text",name:"title"}))),l.a.createElement("div",null,l.a.createElement("label",null,"Description",l.a.createElement("textarea",{name:"description",cols:100,rows:2}))),l.a.createElement("div",null,l.a.createElement("label",null,"surface",l.a.createElement("input",{type:"number",name:"surface"}))),l.a.createElement("div",null,l.a.createElement("label",null,"price",l.a.createElement("input",{type:"number",name:"price"}))),l.a.createElement("div",null,l.a.createElement("label",null,"bedroom",l.a.createElement("input",{type:"number",name:"bedroom"}))),l.a.createElement("div",null,l.a.createElement("label",null,"bathroom",l.a.createElement("input",{type:"number",name:"bathroom"}))),l.a.createElement("div",null,l.a.createElement("label",null,"kitchen",l.a.createElement("input",{type:"number",name:"kitchen"}))),l.a.createElement("div",null,l.a.createElement("label",null,"living-room",l.a.createElement("input",{type:"number",name:"living_room"}))),l.a.createElement("div",null,l.a.createElement("label",null,"garage",l.a.createElement("input",{type:"checkbox",name:"garage"}))),l.a.createElement("div",null,l.a.createElement("label",null,"terasse",l.a.createElement("input",{type:"checkbox",name:"terrace"}))),l.a.createElement("div",null,l.a.createElement("label",null,"country",l.a.createElement("input",{type:"text",name:"country"}))),l.a.createElement("div",null,l.a.createElement("label",null,"region",l.a.createElement("input",{type:"text",name:"region"}))),l.a.createElement("div",null,l.a.createElement("label",null,"postal_code",l.a.createElement("input",{type:"text",name:"postal_code"}))),l.a.createElement("div",null,l.a.createElement("label",null,"city",l.a.createElement("input",{type:"text",name:"city"}))),l.a.createElement("div",null,l.a.createElement("label",null,"street",l.a.createElement("input",{type:"text",name:"street"}))),l.a.createElement("div",null,l.a.createElement("label",null,"longitude",l.a.createElement("input",{type:"number",name:"longitude"}))),l.a.createElement("div",null,l.a.createElement("label",null,"latitude",l.a.createElement("input",{type:"number",name:"latitude"}))),l.a.createElement("div",null,l.a.createElement("label",null,"selleurName",l.a.createElement("input",{type:"text",name:"sellerName"}))),l.a.createElement("div",null,l.a.createElement("label",null,"selleurFirstName",l.a.createElement("input",{type:"text",name:"sellerFirstName"}))),l.a.createElement("button",{type:"submit"},"Envoyer")))})),f=n(92),h=n(93),v=n(127),g=n(126),y=n(107),A=n.n(y),k=n(109),w=n.n(k),F=function(){function e(t){Object(f.a)(this,e),this.loader=t,this.loader=t}return Object(h.a)(e,[{key:"upload",value:function(){return this.loader.file.then((function(e){return new Promise((function(t,n){var a=new FileReader;a.onloadend=function(e){t({default:a.result})},a.readAsDataURL(e)}))}))}},{key:"abort",value:function(){console.log("L'uplaod a ete annulee")}}]),e}(),x=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"urlToBase64",value:function(e){var t=this;return fetch(e).then((function(e){return e.blob().then((function(e){return t.blobToBase64(e)}))}))}},{key:"urlToBlob",value:function(e){return fetch(e).then((function(e){return e.blob()})).then((function(e){return e}))}},{key:"base64ToFile",value:function(e,t){for(var n=e.split(","),a=n[0].match(/:(.*?);/)[1],l=atob(n[1]),r=l.length,c=new Uint8Array(r);r--;)c[r]=l.charCodeAt(r);return new File([c],t,{type:a})}},{key:"blobToBase64",value:function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){n(e)}}))}}]),e}(),j=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).refForm=void 0,a.listCategorie=["autre","achat","vente","location","confiance"],a.div=document.createElement("div"),a.fileTransform=new x,a.handleChange=function(e){a.div.innerHTML=e.getData()},a.handleSubmit=function(){var e,t=a.refForm.current.elements,n=new FormData,l=Object(u.a)(t);try{for(l.s();!(e=l.n()).done;){var r=e.value;switch(r.type){case"file":n.append("img",r.files[0]);break;case"checkbox":n.append(r.name,r.checked);break;default:n.append(r.name,r.value)}}}catch(m){l.e(m)}finally{l.f()}var c=a.div.querySelectorAll("img");c.length&&c.forEach((function(e,t){var l=e.getAttribute("src"),r=a.fileTransform.base64ToFile(l,"images"+t);n.append("imgs",r)})),n.append("contenu",a.div.innerHTML),a.props.fetchNewArticle(n)},a.refForm=l.a.createRef(),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{ref:this.refForm},l.a.createElement("div",null,l.a.createElement("label",null," Banniere ",l.a.createElement("input",{type:"file",name:"img"}))),l.a.createElement("div",null,l.a.createElement("label",null,"Titre",l.a.createElement("input",{type:"text",name:"titre"}))),l.a.createElement("div",null,l.a.createElement("label",null,"Sous titre",l.a.createElement("input",{type:"text",name:"sousTitre"}))),l.a.createElement("div",null,"Categorie",l.a.createElement("select",{name:"categorie"},this.listCategorie.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)})))),l.a.createElement("div",null,l.a.createElement("label",null,"En ligne ",l.a.createElement("input",{type:"checkbox",name:"online"})))),l.a.createElement("h2",null,"Rediger un article"),l.a.createElement(A.a,{editor:w.a,onInit:function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new F(e)}},onChange:function(t,n){return e.handleChange(n)}}),l.a.createElement("button",{onClick:this.handleSubmit},"Envoyer"))}}]),n}(a.Component),_={fetchNewArticle:s.c},N=Object(p.b)((function(e){return{}}),_)(j),O={fetchAllArticles:s.a,resetInAdmin:s.g},T=Object(p.b)((function(e){return{articles:e.admin.articles}}),O)((function(e){var t=e.articles,n=e.resetInAdmin,r=e.fetchAllArticles;return Object(a.useEffect)((function(){return r(),function(){return n("articles")}}),[]),l.a.createElement("section",null,t&&l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Reference"),l.a.createElement("th",null,"Titre"),l.a.createElement("th",null,"Categorie"),l.a.createElement("th",null,"Date de publication"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.reference),l.a.createElement("td",null,e.titre),l.a.createElement("td",null,e.categorie),l.a.createElement("td",null,e.date),e.online&&l.a.createElement("td",{style:{color:"green"}},"En ligne"),!e.online&&l.a.createElement("td",{style:{color:"red"}},"Hors ligne"),l.a.createElement("td",null,l.a.createElement("button",null,"voir"),l.a.createElement("button",null,"Modif"),l.a.createElement("button",null,"Supp")))})))))}));t.default=function(){var e="/admin";return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:c.a.menuAdmin},l.a.createElement("h3",null,"Admin"),l.a.createElement(m.b,{to:"/"},l.a.createElement("button",null,"Retour")),l.a.createElement("ul",{className:c.a.ulAdmin},l.a.createElement("h4",null,"Ajouter :"),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/admin/immo/new"},l.a.createElement("button",null,"immo"))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/admin/article/new"},l.a.createElement("button",null,"Articles")))),l.a.createElement("ul",{className:c.a.ulAdmin},l.a.createElement("h4",null,"Voir tous :"),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/admin/immo/all"},l.a.createElement("button",null,"immo"))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/admin/article/all"},l.a.createElement("button",null,"Articles"))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/admin/users/all"},l.a.createElement("button",null,"utilisateurs")))),l.a.createElement("ul",{className:c.a.ulAdmin},l.a.createElement("h4",null,"Modifier :"),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/aPropos"},l.a.createElement("button",null,"Agence"))))),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"".concat(e,"/immo"),render:function(e){var t=e.match.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{path:"".concat(t,"/new"),component:b}),l.a.createElement(i.b,{path:"".concat(t,"/all"),component:b}),l.a.createElement(i.b,{path:"".concat(t,"/update/:id"),component:b}))}}),l.a.createElement(i.b,{path:"".concat(e,"/article"),render:function(e){var t=e.match.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{path:"".concat(t,"/new"),component:N}),l.a.createElement(i.b,{path:"".concat(t,"/all"),component:T}),l.a.createElement(i.b,{path:"".concat(t,"/update/:id"),component:N}))}}),l.a.createElement(i.b,{path:"".concat(e,"/users"),render:function(e){var t=e.match.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{path:"".concat(t,"/new"),component:N}),l.a.createElement(i.b,{path:"".concat(t,"/all"),component:N}),l.a.createElement(i.b,{path:"".concat(t,"/update/:id"),component:N}))}})))}}}]);
//# sourceMappingURL=4.e0845130.chunk.js.map