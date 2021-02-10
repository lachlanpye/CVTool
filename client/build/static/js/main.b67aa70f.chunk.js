(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},128:function(e,t){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(38),c=n.n(i),o=(n(73),n(3)),r=n(4),l=n(2),u=n(6),h=n(5),d=(n(74),n(75),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"sidenav",children:[Object(d.jsx)("button",{onClick:function(){return e.props.changePage("home")},children:"Home"}),this.props.loggedIn?Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return e.props.changePage("account")},children:"Account"}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:function(){return e.props.changePage("find")},children:"Find"}),Object(d.jsx)("button",{onClick:function(){return e.props.changePage("new-resume")},children:"New Resume"}),Object(d.jsx)("button",{onClick:function(){return e.props.changePage("new-cover-letter")},children:"New Cover Letter"})]}):Object(d.jsx)("button",{onClick:function(){return e.props.changePage("login")},children:"Log In"})]})}}]),n}(a.Component),p=(n(77),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(d.jsx)("div",{});return e=this.props.loggedIn?Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Welcome to CV Tool!"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Home"})," - home page"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Log Out"})," - log out of your account"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Find"})," - search for saved resumes and cover letters"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"New Resume"})," - upload your resume and save it"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"New Cover Letter"})," - write your cover letter and tag it"]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Welcome to CV Tool! To access the site's features, please log in to your account or create a new account."}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Home"})," - home page"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Log In"})," - log in to your account or create a new account"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Home page"}),e]})}}]),n}(a.Component)),b=(n(78),n(40)),g=n(7),v=n.n(g),m=(n(96),n(97),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("input",{id:this.props.id,type:"button",className:"button-class",value:this.props.value,onClick:this.props.onClick,disabled:this.props.disabled},this.props.key)}}]),n}(a.Component)),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.props.tagList.length>0?Object(d.jsx)("div",{children:this.props.tagList.map((function(t,n){return Object(d.jsx)(m,{value:t,onClick:function(){return e.props.onRemoveTag(t)}},n)}))}):Object(d.jsx)("div",{children:Object(d.jsx)("p",{})})}}]),n}(a.Component),f=(n(98),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"text-input-expand",children:[Object(d.jsx)("input",{id:this.props.id,type:void 0!==this.props.type?this.props.type:"text",className:"text-input-class",value:this.props.value,onChange:this.props.onChange,list:this.props.list,placeholder:this.props.placeholder}),Object(d.jsx)("div",{className:"text-input-border"})]})}}]),n}(a.Component)),x=(n(99),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={fullTagList:[],currentTagList:[],tagInputValue:""},a.addTag=a.addTag.bind(Object(l.a)(a)),a.removeTag=a.removeTag.bind(Object(l.a)(a)),a.onTagInputChange=a.onTagInputChange.bind(Object(l.a)(a)),a.refreshTags=a.refreshTags.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.refreshTags()}},{key:"refreshTags",value:function(){var e=this;v()({method:"get",url:"/api/v1/get-tags"}).then((function(t){var n=t.data;e.setState({fullTagList:n})}))}},{key:"onTagInputChange",value:function(e){this.setState({tagInputValue:e.target.value})}},{key:"addTag",value:function(e){var t=this;this.state.tagInputValue.length>0&&(v()({method:"post",url:"/api/v1/add-tag",data:{tag:this.state.tagInputValue}}).then({}),this.setState((function(e){return{currentTagList:[].concat(Object(b.a)(e.currentTagList),[e.tagInputValue]),tagInputValue:""}}),(function(){t.props.onTagChange(t.state.currentTagList)})))}},{key:"removeTag",value:function(e){var t=this,n=Object(b.a)(this.state.currentTagList),a=n.indexOf(e);-1!==a&&(n.splice(a,1),this.setState({currentTagList:n},(function(){t.props.onTagChange(t.state.currentTagList)})))}},{key:"render",value:function(){return void 0!==this.state.fullTagList.data?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"tag-search-bar",children:[Object(d.jsx)(f,{id:"tag-search",list:"tag-datalist",placeholder:"Add tags...",value:this.state.tagInputValue,onChange:this.onTagInputChange}),Object(d.jsx)("datalist",{id:"tag-datalist",children:this.state.fullTagList.data.map((function(e,t){return Object(d.jsx)("option",{value:e},t)}))}),Object(d.jsx)(m,{value:"Add tag",onClick:this.addTag})]}),Object(d.jsx)(O,{tagList:this.state.currentTagList,onRemoveTag:this.removeTag})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"tag-search-bar",children:[Object(d.jsx)(f,{id:"tag-search"}),Object(d.jsx)(m,{value:"Add tag"})]}),Object(d.jsx)(O,{tagList:this.state.currentTagList})]})}}]),n}(a.Component)),C=(n(100),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onDownload=a.onDownload.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onDownload",value:function(){var e=this;v()({method:"post",url:"/api/v1/download-resume",data:{filename:this.props.filename,email:this.props.email},responseType:"blob"}).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=n,a.setAttribute("download",e.props.filename+".pdf"),document.body.appendChild(a),a.click()}))}},{key:"render",value:function(){var e=this,t="",n=Object(d.jsx)(d.Fragment,{});return"cover-letter"===this.props.filetype?t="Cover Letter":"resume"===this.props.filetype&&(t="Resume",n=Object(d.jsx)(m,{value:"Download",onClick:this.onDownload})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:this.props.filename}),Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:this.props.taglist}),Object(d.jsxs)("td",{children:[Object(d.jsx)(m,{value:"View",onClick:function(){return e.props.viewPage(e.props.filename,e.props.filetype)}}),n,Object(d.jsx)(m,{value:"Delete",onClick:function(){return e.props.deleteFile(e.props.filename,e.props.filetype)}})]})]})}}]),n}(a.Component)),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={selectValue:"tag",searchType:"inc",filter:[],fileList:[]},a.onSelectChange=a.onSelectChange.bind(Object(l.a)(a)),a.onSearchTypeChange=a.onSearchTypeChange.bind(Object(l.a)(a)),a.onTagChange=a.onTagChange.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getFiles()}},{key:"onSelectChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"onTagChange",value:function(e){this.setState({filter:e})}},{key:"onSearchTypeChange",value:function(e){this.setState({searchType:e.target.value})}},{key:"getFiles",value:function(){var e=this,t=[];t.push(new Promise((function(t,n){v()({method:"post",url:"/api/v1/get-cover-letter-list",data:{email:e.props.email}}).then((function(n){var a=n.data.map((function(t){return{name:t.name,tags:t.tags,type:"cover-letter",email:e.props.email}}));t({fileList:a})}))}))),t.push(new Promise((function(t,n){v()({method:"post",url:"/api/v1/get-resume-list",data:{email:e.props.email}}).then((function(e){var n=e.data.map((function(e){return{name:e.name,tags:e.tags,type:"resume"}}));t({fileList:n})}))}))),Promise.all(t).then((function(t){e.setState({fileList:t[0].fileList.concat(t[1].fileList)})}))}},{key:"inclusiveFilter",value:function(e){var t=!1;return this.state.filter.forEach((function(n){e.tags.includes(n)&&(t=!0)})),t}},{key:"exclusiveFilter",value:function(e){var t=this.state.filter.length,n=0;return this.state.filter.forEach((function(t){e.tags.includes(t)&&n++})),t===n}},{key:"onDelete",value:function(e,t){var n=this;"cover-letter"===t&&v()({method:"post",url:"/api/v1/delete-cover-letter",data:{name:e,email:this.props.email}}).then((function(e){n.getFiles()})),"resume"===t&&v()({method:"post",url:"/api/v1/delete-resume",data:{name:e,email:this.props.email}}).then((function(e){n.getFiles()}))}},{key:"render",value:function(){var e,t=this,n=Object(d.jsx)("div",{});switch(this.state.selectValue){case"tag":n=Object(d.jsx)(x,{onTagChange:this.onTagChange});break;case"name":n=Object(d.jsx)("p",{children:"Name search bar"})}return this.state.fileList.length>0&&(e=this.state.fileList.map((function(e){if(!0===("inc"===t.state.searchType?!(t.state.filter.length>0)||t.inclusiveFilter(e):!(t.state.filter.length>0)||t.exclusiveFilter(e))){var n=e.tags.length,a=e.tags.map((function(e,a){var s="";return n!==a+1&&(s=", "),t.state.filter.includes(e)?Object(d.jsxs)("b",{children:[e,s]}):Object(d.jsxs)(d.Fragment,{children:[e,s]})}));return Object(d.jsx)(C,{viewPage:function(e,n){return t.props.handleViewFile(e,n)},deleteFile:function(e,n){return t.onDelete(e,n)},filename:e.name,filetype:e.type,taglist:a,email:t.props.email})}return Object(d.jsx)(d.Fragment,{})}))),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Find page"}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("label",{children:"Filter by tag: "}),n,Object(d.jsxs)("div",{onChange:this.onSearchTypeChange,children:[Object(d.jsx)("input",{type:"radio",value:"inc",name:"searchType",defaultChecked:!0}),Object(d.jsx)("label",{children:"Must have at least one tag"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",value:"exc",name:"searchType"}),Object(d.jsx)("label",{children:"Must have all tags"})]})]}),Object(d.jsxs)("div",{className:"searchTable",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"File name"}),Object(d.jsx)("th",{children:"File type"}),Object(d.jsx)("th",{children:"Matching tags"}),Object(d.jsx)("th",{children:"Options"})]}),e]}),Object(d.jsx)("br",{})]})]})}}]),n}(a.Component),y=(n(101),n(25)),T=n(39);n(155);function k(e){var t=Object(a.useState)(null),n=Object(y.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)(1),o=Object(y.a)(c,2),r=o[0],l=o[1],u=Object(a.useState)(!1),h=Object(y.a)(u,2),j=h[0],p=h[1];function b(e){l((function(t){return t+e}))}var g=Object(d.jsx)("div",{});return j&&(g=Object(d.jsxs)("div",{id:"pdf-pages",children:[Object(d.jsxs)("p",{children:["Page ",r||(s?1:"--")," of ",s||"--"]}),Object(d.jsx)(m,{value:"Previous",disabled:r<=1,onClick:function(){b(-1)}}),Object(d.jsx)(m,{value:"Next",disabled:r>=s,onClick:function(){b(1)}})]})),Object(d.jsxs)("div",{className:"pdfObject",children:[Object(d.jsx)(T.Document,{file:e.pdf,onLoadSuccess:function(t){var n=t.numPages;i(n),l(1),p(!0),e.onSuccess()},onLoadError:function(){p(!1),e.onFailure()},noData:"",children:Object(d.jsx)(T.Page,{pageNumber:r,scale:.5})}),g]})}n(156);var S=function(e){var t=s.a.useRef(null),n=Object(a.useState)("No file uploaded"),i=Object(y.a)(n,2),c=i[0],o=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"file-chooser-class",children:[Object(d.jsx)(m,{onClick:function(e){t.current.click()},value:"Upload resume..."}),Object(d.jsx)("p",{children:c})]}),Object(d.jsx)("input",{type:"file",ref:t,onChange:function(t){var n=t.target.files[0];o(n.name),e.handleFile(n)},style:{display:"none"}})]})},D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={resumeFileName:"",resumeFile:"",tags:[],warnText:"",showSubmitOption:!1},a.onResumeFileNameChange=a.onResumeFileNameChange.bind(Object(l.a)(a)),a.onResumeUploadSuccess=a.onResumeUploadSuccess.bind(Object(l.a)(a)),a.onResumeUploadFailure=a.onResumeUploadFailure.bind(Object(l.a)(a)),a.onResumeFileChange=a.onResumeFileChange.bind(Object(l.a)(a)),a.onTagChange=a.onTagChange.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onResumeFileNameChange",value:function(e){this.setState({resumeFileName:e.target.value})}},{key:"onResumeFileChange",value:function(e){this.setState({resumeFile:e})}},{key:"onTagChange",value:function(e){this.setState({tags:e})}},{key:"onResumeUploadSuccess",value:function(){this.setState({showSubmitOption:!0})}},{key:"onResumeUploadFailure",value:function(){this.setState({showSubmitOption:!1})}},{key:"onSubmit",value:function(){var e=this;if(0===this.state.resumeFileName.length)this.setState({warnText:"Enter a name for this resume."});else if(0===this.state.tags.length)this.setState({warnText:"Enter at least one tag for this resume."});else{var t=new FormData;t.append("name",this.state.resumeFileName),t.append("content",this.state.resumeFile),t.append("tags",JSON.stringify(this.state.tags)),t.append("email",this.props.email),v()({method:"post",url:"/api/v1/submit-resume",data:t}).then((function(t){e.props.returnHome()})).catch((function(e){console.log(e.response.data)}))}}},{key:"render",value:function(){var e=Object(d.jsx)(d.Fragment,{}),t=Object(d.jsx)(d.Fragment,{});return 0!==this.state.warnText.length&&(t=Object(d.jsx)("p",{id:"warning-text",children:this.state.warnText})),this.state.showSubmitOption&&(e=Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)(x,{onTagChange:this.onTagChange}),Object(d.jsx)("br",{}),t,Object(d.jsx)(m,{value:"Submit",onClick:this.onSubmit})]})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"New resume page"}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Save resume as",id:"resume-file-name",value:this.state.resumeFileName,onChange:this.onResumeFileNameChange})}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("label",{children:"Select resume: "}),Object(d.jsx)("br",{}),Object(d.jsx)(S,{handleFile:this.onResumeFileChange}),Object(d.jsx)("br",{}),Object(d.jsx)(k,{id:"pdf-view",pdf:this.state.resumeFile,onSuccess:this.onResumeUploadSuccess,onFailure:this.onResumeUploadFailure}),Object(d.jsx)("br",{})]}),e]})}}]),n}(a.Component),N=(n(157),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={cvNameValue:"",cvTextValue:"",tags:[],warnText:""},a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a.onTagChange=a.onTagChange.bind(Object(l.a)(a)),a.onNameChange=a.onNameChange.bind(Object(l.a)(a)),a.onTextChange=a.onTextChange.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onTagChange",value:function(e){this.setState({tags:e})}},{key:"onNameChange",value:function(e){this.setState({cvNameValue:e.target.value})}},{key:"onTextChange",value:function(e){this.setState({cvTextValue:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;0===this.state.cvNameValue.length?this.setState({warnText:"Enter a name for this cover letter."}):0===this.state.cvTextValue.length?this.setState({warnText:"Enter some text for this cover letter."}):0===this.state.tags.length?this.setState({warnText:"Enter at least one tag for this cover letter."}):v()({method:"post",url:"/api/v1/submit-cover-letter",data:{name:this.state.cvNameValue,content:this.state.cvTextValue,tags:this.state.tags,email:this.props.email}}).then((function(e){t.props.returnHome()}))}},{key:"render",value:function(){var e=Object(d.jsx)(d.Fragment,{});return 0!==this.state.warnText.length&&(e=Object(d.jsx)("p",{id:"warning-text",children:this.state.warnText})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"New cover letter page"}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{id:"cv-name",placeholder:"Cover letter name",value:this.state.cvNameValue,onChange:this.onNameChange})}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)("textarea",{id:"cv-text",placeholder:"Cover letter content",rows:"20",columns:"30",value:this.state.cvTextValue,onChange:this.onTextChange})}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(x,{onTagChange:this.onTagChange})}),Object(d.jsxs)("div",{className:"inputDiv",children:[e,Object(d.jsx)(m,{id:"submit-button",value:"Submit",onClick:this.onSubmit})]})]})}}]),n}(a.Component)),L=(n(158),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={fileName:"",fileContent:"",fileTags:[],fileType:"",plainContent:"",mode:"view"},a.swapMode=a.swapMode.bind(Object(l.a)(a)),a.onViewSuccess=a.onViewSuccess.bind(Object(l.a)(a)),a.onViewFailure=a.onViewFailure.bind(Object(l.a)(a)),a.onDownload=a.onDownload.bind(Object(l.a)(a)),a.onTextChange=a.onTextChange.bind(Object(l.a)(a)),a.onDelete=a.onDelete.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;"cover-letter"===this.props.type&&v()({method:"post",url:"/api/v1/get-cover-letter",data:{filename:this.props.page,email:this.props.email}}).then((function(t){e.setState({fileName:t.data.name,fileContent:t.data.content,fileTags:t.data.tags,fileType:"cover-letter",plainContent:t.data.content})})),"resume"===this.props.type&&v()({method:"post",url:"/api/v1/get-resume-file-data",data:{filename:this.props.page,email:this.props.email}}).then((function(t){v()({method:"post",url:"/api/v1/get-resume",responseType:"arraybuffer",data:{filename:e.props.page,email:e.props.email}}).then((function(n){e.setState({fileName:t.data.name,fileContent:n.data,fileTags:t.data.tags,fileType:"resume",plainContent:null})}))}))}},{key:"swapMode",value:function(){"view"===this.state.mode?this.setState({mode:"edit"}):(v()({method:"post",url:"/api/v1/submit-cover-letter",data:{name:this.state.fileName,content:this.state.plainContent,tags:this.state.fileTags,email:this.props.email}}),this.setState({mode:"view",fileContent:this.state.plainContent}))}},{key:"onTextChange",value:function(e){this.setState({plainContent:e.target.value})}},{key:"onViewSuccess",value:function(){console.log("SUCESS")}},{key:"onViewFailure",value:function(){console.log("FAILURE")}},{key:"onDownload",value:function(){var e=this;v()({method:"post",url:"/api/v1/download-resume",data:{filename:this.props.page,email:this.props.email},responseType:"blob"}).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=n,a.setAttribute("download",e.state.fileName+".pdf"),document.body.appendChild(a),a.click()}))}},{key:"onDelete",value:function(){"cover-letter"===this.state.fileType&&v()({method:"post",url:"/api/v1/delete-cover-letter",data:{name:this.state.fileName,email:this.props.email}}),"resume"===this.state.fileType&&v()({method:"post",url:"/api/v1/delete-resume",data:{name:this.state.fileName,email:this.props.email}}),this.props.returnHome()}},{key:"render",value:function(){var e=this,t=Object(d.jsx)("div",{}),n=Object(d.jsx)("div",{}),a=Object(d.jsx)("div",{});"cover-letter"===this.state.fileType&&(a=Object(d.jsx)(m,{value:"Copy",onClick:function(){return navigator.clipboard.writeText(e.state.plainContent)}}),"view"===this.state.mode?(t=Object(d.jsx)("p",{id:"file-content-view",children:this.state.fileContent.split("\n").map((function(e,t){return Object(d.jsxs)("span",{children:[e,Object(d.jsx)("br",{})]},t)}))}),n=Object(d.jsx)(m,{value:"Edit",onClick:this.swapMode})):"edit"===this.state.mode&&(t=Object(d.jsx)("textarea",{id:"file-content-edit",value:this.state.plainContent,onChange:this.onTextChange,rows:"20",cols:"100"}),n=Object(d.jsx)(m,{value:"Save",onClick:this.swapMode}))),"resume"===this.state.fileType&&(a=Object(d.jsx)(m,{value:"Download",onClick:this.onDownload}),t=Object(d.jsx)(k,{pdf:this.state.fileContent,onSuccess:this.onViewSuccess,onFailure:this.onViewFailure}));var s=Object(d.jsx)("div",{});if(this.state.fileTags.length>0){var i=this.state.fileTags.length;s=this.state.fileTags.map((function(e,t){var n="";return i!==t+1&&(n=", "),Object(d.jsxs)("b",{children:[e,n]})}))}return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{id:"file-name",children:this.state.fileName}),t,Object(d.jsxs)("p",{id:"file-tags",children:["Tags: ",s]}),Object(d.jsxs)("div",{id:"view-page-options",children:[n,a,Object(d.jsx)(m,{value:"Delete",onClick:this.onDelete})]}),Object(d.jsx)("br",{})]})}}]),n}(a.Component)),F=(n(159),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",warningText:""},a.onPasswordChange=a.onPasswordChange.bind(Object(l.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(l.a)(a)),a.onLogin=a.onLogin.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onLogin",value:function(){var e=this;/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)?""===this.state.password?this.setState({warningText:"Please enter a password."}):(this.setState({warningText:""}),v()({method:"post",url:"/api/v1/confirm-login",data:{email:this.state.email,password:this.state.password}}).then((function(t){t.data.foundAccount?(e.props.changeLoggedStatus(e.state.email,e.state.password),e.props.handlePageChange("home")):e.setState({warningText:"Account not found. You have the wrong email or password."})}))):this.setState({warningText:"Please enter a valid email."})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login page"}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Email",value:this.state.email,onChange:this.onEmailChange})}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Password",type:"password",value:this.state.password,onChange:this.onPasswordChange})}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("p",{className:"warning-text",children:this.state.warningText}),Object(d.jsx)(m,{value:"Login",onClick:this.onLogin})]}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("p",{children:"New here?"}),Object(d.jsx)(m,{value:"Create account",onClick:function(){return e.props.handlePageChange("create-account")}})]})]})}}]),n}(a.Component)),P=(n(160),n(161),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"slide-open-div",children:this.props.children})}}]),n}(a.Component)),V=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={logoutDivOpen:!1,deleteAccountDivOpen:!1,passwordInputValue:""},a.onLogout=a.onLogout.bind(Object(l.a)(a)),a.onDeleteAccount=a.onDeleteAccount.bind(Object(l.a)(a)),a.toggleLogoutDiv=a.toggleLogoutDiv.bind(Object(l.a)(a)),a.onPasswordVerifierChange=a.onPasswordVerifierChange.bind(Object(l.a)(a)),a.toggleDeleteAccountDiv=a.toggleDeleteAccountDiv.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onPasswordVerifierChange",value:function(e){this.setState({passwordInputValue:e.target.value})}},{key:"onLogout",value:function(){this.props.changeLoggedStatus(null,null),this.props.returnHome()}},{key:"onDeleteAccount",value:function(){var e=this;v()({method:"post",url:"/api/v1/delete-account",data:{email:this.props.email,password:this.state.passwordInputValue}}).then((function(t){e.props.changeLoggedStatus(null,null),e.props.returnHome()}))}},{key:"toggleLogoutDiv",value:function(){this.setState({logoutDivOpen:!this.state.logoutDivOpen})}},{key:"toggleDeleteAccountDiv",value:function(){this.setState({deleteAccountDivOpen:!this.state.deleteAccountDivOpen})}},{key:"render",value:function(){var e=Object(d.jsx)("div",{}),t=Object(d.jsx)("div",{});return this.state.logoutDivOpen&&(e=Object(d.jsx)("div",{className:"openDiv",children:Object(d.jsxs)(P,{children:[Object(d.jsx)("p",{children:"Are you sure you would like to log out?"}),Object(d.jsx)(m,{value:"Confirm logout",onClick:this.onLogout})]})})),this.state.deleteAccountDivOpen&&(t=Object(d.jsx)("div",{className:"openDiv",children:Object(d.jsxs)(P,{children:[Object(d.jsx)("p",{children:"Are you sure you would like to delete your account?"}),Object(d.jsx)(f,{value:this.state.passwordInputValue,onChange:this.onPasswordVerifierChange,placeholder:"Confirm password",type:"password"}),Object(d.jsx)(m,{value:"Confirm deletion",onClick:this.onDeleteAccount})]})})),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("h2",{children:"Log out"}),Object(d.jsx)(m,{value:"Log out",onClick:this.toggleLogoutDiv}),e]}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("h2",{children:"Delete account"}),Object(d.jsx)(m,{value:"Delete account",onClick:this.toggleDeleteAccountDiv}),t]})]})}}]),n}(a.Component),I=(n(162),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",confirmPassword:"",warningText:""},a.onPasswordChange=a.onPasswordChange.bind(Object(l.a)(a)),a.onConfirmPasswordChange=a.onConfirmPasswordChange.bind(Object(l.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(l.a)(a)),a.onLogin=a.onLogin.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onConfirmPasswordChange",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"onLogin",value:function(){var e=this;""===this.state.email?this.setState({warningText:"Please enter a valid email."}):""===this.state.password?this.setState({warningText:"Please enter a password."}):this.state.password!==this.state.confirmPassword?this.setState({warningText:"Passwords must match."}):(this.setState({warningText:""}),v()({method:"post",url:"/api/v1/add-account",data:{email:this.state.email,password:this.state.password}}).then((function(t){e.props.handlePageChange("home"),e.props.changeLoggedStatus(e.state.email,e.state.password)})).catch((function(t){e.setState({warningText:"Email already in use."})})))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Create account"}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Email",value:this.state.email,onChange:this.onEmailChange})}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Password",type:"password",value:this.state.password,onChange:this.onPasswordChange})}),Object(d.jsx)("div",{className:"inputDiv",children:Object(d.jsx)(f,{placeholder:"Confirm password",type:"password",value:this.state.confirmPassword,onChange:this.onConfirmPasswordChange})}),Object(d.jsxs)("div",{className:"inputDiv",children:[Object(d.jsx)("p",{className:"warning-text",children:this.state.warningText}),Object(d.jsx)(m,{value:"Create account",onClick:this.onLogin})]})]})}}]),n}(a.Component)),R=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={current:"home",page:"",loggedIn:!1,email:"",password:""},a.handlePageChange=a.handlePageChange.bind(Object(l.a)(a)),a.handleViewFile=a.handleViewFile.bind(Object(l.a)(a)),a.loggedIn=a.loggedIn.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"handlePageChange",value:function(e){this.setState({current:e,page:""})}},{key:"handleViewFile",value:function(e,t){this.setState({current:"view-page",page:e,type:t})}},{key:"loggedIn",value:function(e,t){this.setState({loggedIn:null!==e||null!==t,email:e,password:t})}},{key:"render",value:function(){var e=this,t=Object(d.jsx)("div",{});switch(this.state.current){case"login":t=Object(d.jsx)(F,{handlePageChange:this.handlePageChange,changeLoggedStatus:function(t,n){e.loggedIn(t,n)}});break;case"account":t=Object(d.jsx)(V,{returnHome:function(){e.handlePageChange("home")},email:this.state.email,changeLoggedStatus:function(t,n){e.loggedIn(t,n)}});break;case"create-account":t=Object(d.jsx)(I,{handlePageChange:this.handlePageChange,changeLoggedStatus:function(t,n){e.loggedIn(t,n)}});break;case"home":t=Object(d.jsx)(p,{loggedIn:this.state.loggedIn});break;case"find":t=Object(d.jsx)(w,{handleViewFile:this.handleViewFile,email:this.state.email});break;case"new-resume":t=Object(d.jsx)(D,{returnHome:function(){e.handlePageChange("home")},email:this.state.email});break;case"new-cover-letter":t=Object(d.jsx)(N,{returnHome:function(){e.handlePageChange("home")},email:this.state.email});break;case"view-page":t=Object(d.jsx)(L,{page:this.state.page,type:this.state.type,returnHome:function(){e.handlePageChange("home")},email:this.state.email})}return Object(d.jsxs)("div",{id:"page-background",children:[Object(d.jsx)(j,{changePage:this.handlePageChange,loggedIn:this.state.loggedIn}),t]})}}]),n}(a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))},E=n(67),U=n.n(E);c.a.render(Object(d.jsxs)(s.a.StrictMode,{children:[Object(d.jsxs)(U.a,{children:[Object(d.jsx)("title",{children:"CV Tool"}),Object(d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(d.jsx)(R,{})]}),document.getElementById("root")),A()},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[165,1,2]]]);
//# sourceMappingURL=main.b67aa70f.chunk.js.map