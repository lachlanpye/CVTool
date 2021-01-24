(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(38),r=n.n(c),l=(n(74),n(3)),u=n(4),o=n(2),h=n(6),j=n(5),b=(n(75),n(76),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"sidenav",children:[Object(a.jsx)("button",{onClick:function(){return e.props.changePage("home")},children:"Home"}),Object(a.jsx)("button",{onClick:function(){return e.props.changePage("find")},children:"Find"}),Object(a.jsx)("button",{onClick:function(){return e.props.changePage("new-resume")},children:"New Resume"}),Object(a.jsx)("button",{onClick:function(){return e.props.changePage("new-cover-letter")},children:"New Cover Letter"})]})}}]),n}(i.Component)),d=(n(77),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Home page"}),Object(a.jsx)("p",{children:"Welcome to CV Tool!"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Home"})," - home page"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Find"})," - search for saved resumes and cover letters"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"New Resume"})," - upload your resume and save it"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"New Cover Letter"})," - write your cover letter and tag it"]})]})}}]),n}(i.Component)),g=(n(78),n(40)),O=n(10),p=n.n(O),v=(n(96),n(97),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{id:this.props.id,type:"button",className:"button-class",value:this.props.value,onClick:this.props.onClick,disabled:this.props.disabled},this.props.key)}}]),n}(i.Component)),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.props.tagList.length>0?Object(a.jsx)("div",{children:this.props.tagList.map((function(t,n){return Object(a.jsx)(v,{value:t,onClick:function(){return e.props.onRemoveTag(t)}},n)}))}):Object(a.jsx)("div",{children:Object(a.jsx)("p",{})})}}]),n}(i.Component),m=(n(98),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{id:this.props.id,type:"text",className:"text-input-class",value:this.props.value,onChange:this.props.onChange,list:this.props.list,placeholder:this.props.placeholder})}}]),n}(i.Component)),x=(n(99),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={fullTagList:[],currentTagList:[],tagInputValue:""},a.addTag=a.addTag.bind(Object(o.a)(a)),a.removeTag=a.removeTag.bind(Object(o.a)(a)),a.onTagInputChange=a.onTagInputChange.bind(Object(o.a)(a)),a.refreshTags=a.refreshTags.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.refreshTags()}},{key:"refreshTags",value:function(){var e=this;p()({method:"get",url:"/api/v1/get-tags"}).then((function(t){var n=t.data;e.setState({fullTagList:n})}))}},{key:"onTagInputChange",value:function(e){this.setState({tagInputValue:e.target.value})}},{key:"addTag",value:function(e){var t=this;this.state.tagInputValue.length>0&&(p()({method:"post",url:"/api/v1/add-tag",data:{tag:this.state.tagInputValue}}).then({}),this.setState((function(e){return{currentTagList:[].concat(Object(g.a)(e.currentTagList),[e.tagInputValue]),tagInputValue:""}}),(function(){t.props.onTagChange(t.state.currentTagList)})))}},{key:"removeTag",value:function(e){var t=this,n=Object(g.a)(this.state.currentTagList),a=n.indexOf(e);-1!==a&&(n.splice(a,1),this.setState({currentTagList:n},(function(){t.props.onTagChange(t.state.currentTagList)})))}},{key:"render",value:function(){return void 0!==this.state.fullTagList.data?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"tag-search-bar",children:[Object(a.jsx)(m,{id:"tag-search",list:"tag-datalist",placeholder:"Search...",value:this.state.tagInputValue,onChange:this.onTagInputChange}),Object(a.jsx)("datalist",{id:"tag-datalist",children:this.state.fullTagList.data.map((function(e,t){return Object(a.jsx)("option",{value:e},t)}))}),Object(a.jsx)(v,{value:"Add tag",onClick:this.addTag})]}),Object(a.jsx)(f,{tagList:this.state.currentTagList,onRemoveTag:this.removeTag})]}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"tag-search-bar",children:[Object(a.jsx)(m,{id:"tag-search"}),Object(a.jsx)(v,{value:"Add tag"})]}),Object(a.jsx)(f,{tagList:this.state.currentTagList})]})}}]),n}(i.Component)),C=(n(100),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:this.props.filename}),Object(a.jsx)("td",{children:this.props.taglist}),Object(a.jsxs)("td",{children:[Object(a.jsx)(v,{value:"View",onClick:function(){return e.props.viewPage(e.props.filename)}}),Object(a.jsx)(v,{value:"Download"}),Object(a.jsx)(v,{value:"Delete"})]})]})}}]),n}(i.Component)),T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selectValue:"tag",searchType:"inc",filter:[],fileList:[]},a.onSelectChange=a.onSelectChange.bind(Object(o.a)(a)),a.onSearchTypeChange=a.onSearchTypeChange.bind(Object(o.a)(a)),a.onTagChange=a.onTagChange.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFiles()}},{key:"onSelectChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"onTagChange",value:function(e){this.setState({filter:e})}},{key:"onSearchTypeChange",value:function(e){this.setState({searchType:e.target.value})}},{key:"getFiles",value:function(){var e=this;p()({method:"get",url:"/api/v1/get-cover-letter-list"}).then((function(t){var n=t.data.map((function(e){return{name:e.name,tags:e.tags}}));e.setState({fileList:n})})).catch((function(e){console.log(e)}))}},{key:"inclusiveFilter",value:function(e){var t=!1;return this.state.filter.forEach((function(n){e.tags.includes(n)&&(t=!0)})),t}},{key:"exclusiveFilter",value:function(e){var t=this.state.filter.length,n=0;return this.state.filter.forEach((function(t){e.tags.includes(t)&&n++})),t===n}},{key:"render",value:function(){var e,t=this,n=Object(a.jsx)("div",{});switch(this.state.selectValue){case"tag":n=Object(a.jsx)(x,{onTagChange:this.onTagChange});break;case"name":n=Object(a.jsx)("p",{children:"Name search bar"})}return this.state.fileList.length>0&&(e=this.state.fileList.map((function(e){if(!0===("inc"===t.state.searchType?!(t.state.filter.length>0)||t.inclusiveFilter(e):!(t.state.filter.length>0)||t.exclusiveFilter(e))){var n=e.tags.length,i=e.tags.map((function(e,i){var s="";return n!==i+1&&(s=", "),t.state.filter.includes(e)?Object(a.jsxs)("b",{children:[e,s]}):Object(a.jsxs)(a.Fragment,{children:[e,s]})}));return Object(a.jsx)(C,{viewPage:function(e){return t.props.handleViewFile(e)},filename:e.name,taglist:i})}return Object(a.jsx)(a.Fragment,{})}))),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Find page"}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Search by: "}),Object(a.jsxs)("select",{id:"search-select",onChange:function(e){return t.onSelectChange(e)},children:[Object(a.jsx)("option",{value:"tag",children:"Tag"}),Object(a.jsx)("option",{value:"name",children:"Name"})]}),n,Object(a.jsxs)("div",{onChange:this.onSearchTypeChange,children:[Object(a.jsx)("input",{type:"radio",value:"inc",name:"searchType",defaultChecked:!0}),Object(a.jsx)("label",{children:"Must have at least one tag"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",value:"exc",name:"searchType"}),Object(a.jsx)("label",{children:"Must have all tags"})]})]}),Object(a.jsx)("div",{className:"searchTable",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"File name"}),Object(a.jsx)("th",{children:"Matching tags"}),Object(a.jsx)("th",{children:"Options"})]}),e]})})]})}}]),n}(i.Component),y=(n(101),n(25)),k=n(39);function S(e){var t=Object(i.useState)(null),n=Object(y.a)(t,2),s=n[0],c=n[1],r=Object(i.useState)(1),l=Object(y.a)(r,2),u=l[0],o=l[1],h=Object(i.useState)(!1),j=Object(y.a)(h,2),b=j[0],d=j[1];function g(e){o((function(t){return t+e}))}var O=Object(a.jsx)("div",{});return b&&(O=Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Page ",u||(s?1:"--")," of ",s||"--"]}),Object(a.jsx)(v,{value:"Previous",disabled:u<=1,onClick:function(){g(-1)}}),Object(a.jsx)(v,{value:"Next",disabled:u>=s,onClick:function(){g(1)}})]})),Object(a.jsxs)("div",{className:"pdfObject",children:[Object(a.jsx)(k.Document,{file:e.pdf,onLoadSuccess:function(t){var n=t.numPages;c(n),o(1),d(!0),e.onSuccess()},onLoadError:function(){d(!1),e.onFailure()},noData:"",children:Object(a.jsx)(k.Page,{pageNumber:u,scale:.5})}),O]})}n(153);var w=function(e){var t=s.a.useRef(null),n=Object(i.useState)("No file uploaded"),c=Object(y.a)(n,2),r=c[0],l=c[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"file-chooser-class",children:[Object(a.jsx)(v,{onClick:function(e){t.current.click()},value:"Upload resume..."}),Object(a.jsx)("p",{children:r})]}),Object(a.jsx)("input",{type:"file",ref:t,onChange:function(t){var n=t.target.files[0];l(n.name),e.handleFile(n)},style:{display:"none"}})]})},F=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={resumeFileName:"",resumeFile:"",tags:[],showSubmitOption:!1},a.onResumeFileNameChange=a.onResumeFileNameChange.bind(Object(o.a)(a)),a.onResumeUploadSuccess=a.onResumeUploadSuccess.bind(Object(o.a)(a)),a.onResumeUploadFailure=a.onResumeUploadFailure.bind(Object(o.a)(a)),a.onResumeFileChange=a.onResumeFileChange.bind(Object(o.a)(a)),a.onTagChange=a.onTagChange.bind(Object(o.a)(a)),a.onSubmit=a.onSubmit.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"onResumeFileNameChange",value:function(e){this.setState({resumeFileName:e.target.value})}},{key:"onResumeFileChange",value:function(e){this.setState({resumeFile:e})}},{key:"onTagChange",value:function(e){this.setState({tags:e})}},{key:"onResumeUploadSuccess",value:function(){this.setState({showSubmitOption:!0})}},{key:"onResumeUploadFailure",value:function(){this.setState({showSubmitOption:!1})}},{key:"onSubmit",value:function(){var e=this,t=new FormData;t.append("name",this.state.resumeFileName),t.append("content",this.state.resumeFile),t.append("tags",JSON.stringify(this.state.tags)),p()({method:"post",url:"/api/v1/submit-resume",data:t}).then((function(t){e.props.returnHome()})).catch((function(e){console.log(e.response.data)}))}},{key:"render",value:function(){var e=Object(a.jsx)("div",{});return this.state.showSubmitOption&&(e=Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Add tags: "}),Object(a.jsx)(x,{onTagChange:this.onTagChange}),Object(a.jsx)("br",{}),Object(a.jsx)(v,{value:"Submit",onClick:this.onSubmit})]})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"New resume page"}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Save resume as: "}),Object(a.jsx)(m,{id:"resume-file-name",value:this.state.resumeFileName,onChange:this.onResumeFileNameChange})]}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Select resume: "}),Object(a.jsx)("br",{}),Object(a.jsx)(w,{handleFile:this.onResumeFileChange}),Object(a.jsx)("br",{}),Object(a.jsx)(S,{pdf:this.state.resumeFile,onSuccess:this.onResumeUploadSuccess,onFailure:this.onResumeUploadFailure})]}),e]})}}]),n}(i.Component),N=(n(154),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={cvNameValue:"",cvTextValue:"",tags:[]},a.onSubmit=a.onSubmit.bind(Object(o.a)(a)),a.onTagChange=a.onTagChange.bind(Object(o.a)(a)),a.onNameChange=a.onNameChange.bind(Object(o.a)(a)),a.onTextChange=a.onTextChange.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"onTagChange",value:function(e){this.setState({tags:e})}},{key:"onNameChange",value:function(e){this.setState({cvNameValue:e.target.value})}},{key:"onTextChange",value:function(e){this.setState({cvTextValue:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;p()({method:"post",url:"/api/v1/submit-cover-letter",data:{name:this.state.cvNameValue,content:this.state.cvTextValue,tags:this.state.tags}}).then((function(e){t.props.returnHome()}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"New cover letter page"}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Name of cover letter: "}),Object(a.jsx)(m,{id:"cv-name",value:this.state.cvNameValue,onChange:this.onNameChange})]}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Cover letter content: "}),Object(a.jsx)("textarea",{id:"cv-text",rows:"20",columns:"30",value:this.state.cvTextValue,onChange:this.onTextChange})]}),Object(a.jsxs)("div",{className:"inputDiv",children:[Object(a.jsx)("label",{children:"Add tags: "}),Object(a.jsx)(x,{onTagChange:this.onTagChange})]}),Object(a.jsx)("div",{className:"inputDiv",children:Object(a.jsx)(v,{id:"submit-button",value:"Submit",onClick:this.onSubmit})})]})}}]),n}(i.Component)),L=(n(155),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={fileName:null,fileContent:null,fileTags:null,fileType:null,plainContent:null,mode:"view"},a.swapMode=a.swapMode.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;p()({method:"post",url:"/api/v1/get-cover-letter",data:{filename:this.props.page}}).then((function(t){e.setState({fileName:t.data.name,fileContent:t.data.content.split("\n").map((function(e,t){return Object(a.jsxs)("span",{children:[e,Object(a.jsx)("br",{})]},t)})),fileTags:t.data.tags.map((function(e,n){var i="";return t.data.tags.length!==n+1&&(i=", "),Object(a.jsxs)("b",{children:[e,i]})})),fileType:t.data.type,plainContent:t.data.content})}))}},{key:"swapMode",value:function(){"view"===this.state.mode?this.setState({mode:"edit"}):this.setState({mode:"view"})}},{key:"render",value:function(){var e=this,t=Object(a.jsx)("div",{}),n="";return"view"===this.state.mode?(t=Object(a.jsx)("p",{id:"file-content-view",children:this.state.fileContent}),n="Edit"):"edit"===this.state.mode&&(t=Object(a.jsx)("textarea",{id:"file-content-edit",rows:"20",cols:"100",children:this.state.plainContent}),n="Save"),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{id:"file-name",children:this.state.fileName}),t,Object(a.jsxs)("p",{id:"file-tags",children:["Tags: ",this.state.fileTags]}),Object(a.jsxs)("div",{id:"view-page-options",children:[Object(a.jsx)(v,{value:n,onClick:this.swapMode}),Object(a.jsx)(v,{value:"Copy",onClick:function(){return navigator.clipboard.writeText(e.state.plainContent)}}),Object(a.jsx)(v,{value:"Delete"})]}),Object(a.jsx)("br",{})]})}}]),n}(i.Component)),V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={current:"home",page:""},a.handlePageChange=a.handlePageChange.bind(Object(o.a)(a)),a.handleViewFile=a.handleViewFile.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"handlePageChange",value:function(e){this.setState({current:e,page:""})}},{key:"handleViewFile",value:function(e){this.setState({current:"view-page",page:e})}},{key:"render",value:function(){var e=this,t=Object(a.jsx)("div",{});switch(this.state.current){case"home":t=Object(a.jsx)(d,{});break;case"find":t=Object(a.jsx)(T,{handleViewFile:this.handleViewFile});break;case"new-resume":t=Object(a.jsx)(F,{returnHome:function(){e.handlePageChange("home")}});break;case"new-cover-letter":t=Object(a.jsx)(N,{returnHome:function(){e.handlePageChange("home")}});break;case"view-page":t=Object(a.jsx)(L,{page:this.state.page})}return Object(a.jsxs)("div",{id:"page-background",children:[Object(a.jsx)(b,{changePage:this.handlePageChange}),t]})}}]),n}(i.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},P=n(68),D=n.n(P);r.a.render(Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsxs)(D.a,{children:[Object(a.jsx)("title",{children:"CV Tool"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(a.jsx)(V,{})]}),document.getElementById("root")),R()},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[158,1,2]]]);
//# sourceMappingURL=main.ca1a0b9c.chunk.js.map