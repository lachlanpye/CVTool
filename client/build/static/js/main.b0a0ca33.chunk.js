(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t){},117:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),u=a(37),l=a.n(u),c=(a(73),a(2)),r=a(3),o=a(1),s=a(5),m=a(4),h=(a(74),a(75),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("button",{onClick:function(){return e.props.changePage("home")}},"Home"),i.a.createElement("button",{onClick:function(){return e.props.changePage("find")}},"Find"),i.a.createElement("button",{onClick:function(){return e.props.changePage("new-resume")}},"New Resume"),i.a.createElement("button",{onClick:function(){return e.props.changePage("new-cover-letter")}},"New Cover Letter"))}}]),a}(n.Component)),v=(a(76),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Home page"))}}]),a}(n.Component)),g=(a(77),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Find page"))}}]),a}(n.Component)),d=(a(78),a(23)),p=a.n(d),b=a(31),f=a(38);function E(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),u=a[0],l=a[1],c=Object(n.useState)(1),r=Object(b.a)(c,2),o=r[0],s=r[1],m=Object(n.useState)(!1),h=Object(b.a)(m,2),v=h[0],g=h[1];function d(e){s((function(t){return t+e}))}var p=i.a.createElement("div",null);return v&&(p=i.a.createElement("div",null,i.a.createElement("p",null,"Page ",o||(u?1:"--")," of ",u||"--"),i.a.createElement("button",{type:"button",disabled:o<=1,onClick:function(){d(-1)}},"Previous"),i.a.createElement("button",{type:"button",disabled:o>=u,onClick:function(){d(1)}},"Next"))),i.a.createElement("div",{className:"pdfObject"},i.a.createElement(f.Document,{file:e.pdf,onLoadSuccess:function(t){var a=t.numPages;l(a),s(1),g(!0),e.onSuccess()},onLoadError:function(){g(!1),e.onFailure()}},i.a.createElement(f.Page,{pageNumber:o,scale:.5})),p)}var O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={resumeFileName:"",resumeFile:"",showSubmitOption:!1},n.onResumeFileNameChange=n.onResumeFileNameChange.bind(Object(o.a)(n)),n.onResumeUploadSuccess=n.onResumeUploadSuccess.bind(Object(o.a)(n)),n.onResumeUploadFailure=n.onResumeUploadFailure.bind(Object(o.a)(n)),n.onResumeFileChange=n.onResumeFileChange.bind(Object(o.a)(n)),n.onSubmit=n.onSubmit.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"onResumeFileNameChange",value:function(e){this.setState({resumeFileName:e.target.value})}},{key:"onResumeFileChange",value:function(e){var t=e.target.files[0];this.setState({resumeFile:t})}},{key:"onResumeUploadSuccess",value:function(){this.setState({showSubmitOption:!0})}},{key:"onResumeUploadFailure",value:function(){this.setState({showSubmitOption:!1})}},{key:"onSubmit",value:function(e){var t=new FormData;t.append("name",this.state.resumeFileName),t.append("content",this.state.resumeFile),t.append("tags",JSON.stringify(["React","NodeJS","Express"])),p.a.post("/api/v1/submit-resume",t).catch((function(e){console.log(e.response.data)}))}},{key:"render",value:function(){var e=i.a.createElement("div",null);return this.state.showSubmitOption&&(e=i.a.createElement("div",{className:"inputDiv"},i.a.createElement("input",{type:"button",value:"Submit",onClick:this.onSubmit}))),i.a.createElement("div",null,i.a.createElement("h1",null,"New resume page"),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("label",null,"Save resume as: "),i.a.createElement("input",{type:"text",id:"resume-file-name",value:this.state.resumeFileName,onChange:this.onResumeFileNameChange})),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("label",null,"Select resume: "),i.a.createElement("input",{type:"file",id:"resume-file",onChange:this.onResumeFileChange}),i.a.createElement(E,{pdf:this.state.resumeFile,onSuccess:this.onResumeUploadSuccess,onFailure:this.onResumeUploadFailure})),e)}}]),a}(n.Component),C=(a(146),a(39)),j=(a(147),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return this.props.tagList.length>0?i.a.createElement("div",null,this.props.tagList.map((function(t,a){return i.a.createElement("input",{type:"button",classtype:"tagListButton",key:a,value:t,onClick:function(){return e.props.onRemoveTag(t)}})}))):i.a.createElement("div",null,i.a.createElement("p",null))}}]),a}(n.Component)),y=(a(148),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={fullTagList:[],currentTagList:[],tagInputValue:""},n.addTag=n.addTag.bind(Object(o.a)(n)),n.removeTag=n.removeTag.bind(Object(o.a)(n)),n.onTagInputChange=n.onTagInputChange.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({method:"get",url:"/api/v1/get-tags"}).then((function(t){var a=t.data;e.setState({fullTagList:a})}))}},{key:"onTagInputChange",value:function(e){this.setState({tagInputValue:e.target.value})}},{key:"addTag",value:function(e){var t=this;this.state.tagInputValue.length>0&&this.setState((function(e){return{currentTagList:[].concat(Object(C.a)(e.currentTagList),[e.tagInputValue]),tagInputValue:""}}),(function(){t.props.onTagChange(t.state.currentTagList)}))}},{key:"removeTag",value:function(e){var t=Object(C.a)(this.state.currentTagList),a=t.indexOf(e);-1!==a&&(t.splice(a,1),this.setState({currentTagList:t}))}},{key:"render",value:function(){return void 0!==this.state.fullTagList.data?i.a.createElement("div",null,i.a.createElement("div",{id:"tag-search-bar"},i.a.createElement("input",{id:"tag-search",list:"tag-datalist",type:"text",value:this.state.tagInputValue,onChange:this.onTagInputChange}),i.a.createElement("datalist",{id:"tag-datalist"},this.state.fullTagList.data.map((function(e,t){return i.a.createElement("option",{key:t,value:e})}))),i.a.createElement("input",{type:"button",value:"Add tag",onClick:this.addTag})),i.a.createElement(j,{tagList:this.state.currentTagList,onRemoveTag:this.removeTag})):i.a.createElement("div",null,i.a.createElement("div",{id:"tag-search-bar"},i.a.createElement("input",{id:"tag-search",type:"text"}),i.a.createElement("input",{type:"button",value:"Add tag"})),i.a.createElement(j,{tagList:this.state.currentTagList}))}}]),a}(n.Component)),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={cvNameValue:"",cvTextValue:"",tags:[]},n.onSubmit=n.onSubmit.bind(Object(o.a)(n)),n.onTagChange=n.onTagChange.bind(Object(o.a)(n)),n.onNameChange=n.onNameChange.bind(Object(o.a)(n)),n.onTextChange=n.onTextChange.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"onTagChange",value:function(e){this.setState({tags:e})}},{key:"onNameChange",value:function(e){this.setState({cvNameValue:e.target.value})}},{key:"onTextChange",value:function(e){this.setState({cvTextValue:e.target.value})}},{key:"onSubmit",value:function(e){p()({method:"post",url:"/api/v1/submit-cover-letter",data:{name:this.state.cvNameValue,content:this.state.cvTextValue,tags:this.state.tags}})}},{key:"render",value:function(){return console.log("yea"),i.a.createElement("div",null,i.a.createElement("h1",null,"New cover letter page"),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("label",null,"Name of cover letter: "),i.a.createElement("input",{id:"cv-name",type:"text",value:this.state.cvNameValue,onChange:this.onNameChange})),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("label",null,"Cover letter content: "),i.a.createElement("textarea",{id:"cv-text",value:this.state.cvTextValue,onChange:this.onTextChange})),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("label",null,"Add tags: "),i.a.createElement(y,{onTagChange:this.onTagChange})),i.a.createElement("div",{className:"inputDiv"},i.a.createElement("input",{type:"button",id:"submit-button",value:"Submit",onClick:this.onSubmit})))}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={current:"home"},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"handleClick",value:function(e){this.setState({current:e})}},{key:"render",value:function(){var e=i.a.createElement("div",null);switch(this.state.current){case"home":e=i.a.createElement(v,null);break;case"find":e=i.a.createElement(g,null);break;case"new-resume":e=i.a.createElement(O,null);break;case"new-cover-letter":e=i.a.createElement(k,null)}return i.a.createElement("div",{className:"App"},i.a.createElement(h,{changePage:this.handleClick}),e)}}]),a}(n.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,u=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),u(e),l(e)}))},N=a(68),F=a.n(N);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F.a,null,i.a.createElement("title",null,"CV Tool"),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),i.a.createElement(T,null)),document.getElementById("root")),S()},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.b0a0ca33.chunk.js.map