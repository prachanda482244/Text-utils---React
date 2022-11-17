(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(27)},23:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(13),c=t.n(o),r=(t(23),t(3));t(25);function s(e){return n.a.createElement("div",{style:{height:"40px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))}function m(e){var a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return console.log(a),n.a.createElement("div",{className:"container p-3",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null," Analyse your text "))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Text Utils gives you a way to analyse your text quickly and efficiently. Be it word count,character count."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo",style:a,"aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null," Free to use "))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Text utils reports the number of words and characters. Thus it is suitable for writing text with words/character limit."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree",style:a,"aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null," Browser Compatiable "))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This word counter software works in any browser such as chrome , Firefox ,Internet explorer, safari,opera . It suits to count characters in facebook, blogs,books , excel document, pdf format,essays etc.")))))}var i=t(8);function d(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search")),n.a.createElement("div",{className:"colorPallete mx-2"},n.a.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Color palette")),n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h1",{className:"modal-title fs-5",id:"exampleModalLabel"},"Color Palette"),n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),n.a.createElement("div",{className:"modal-body"}),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"))))),n.a.createElement("div",{className:"form-check  mx-2 form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark mode")))))}function u(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("div",{className:"mb-3"},n.a.createElement("h1",null,e.heading),n.a.createElement("textarea",{className:"form-control",value:o,id:"myBox",onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"black"},rows:"8",placeholder:"Enter text here"})),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=document.getElementById("myBox");a.select(),a.setSelectionRange(0,9999),navigator.clipboard.writeText(a.value),e.showAlert("Copied to clipboard","success")}},"Copy Text"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra spaces has been removed","success")}},"Remove Extra Spaces"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){c(o.split("").join(" ")),e.showAlert("Add extra space","success")}},"Add extra space"),n.a.createElement("button",{className:"btn btn-danger mx-1 my-1 ",onClick:function(){c(""),e.showAlert("Text cleared","success")}},"Clear Text")),n.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your summary"),n.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length," words and ",o.length," characters"),n.a.createElement("p",null,"In ",n.a.createElement("span",{className:"text-danger"},.008*o.split(" ").length)," minutes you can finish to read"),n.a.createElement("h3",null,"Preview "),n.a.createElement("p",null,o.length>0?o:"Enter something in the above textbox to preview it here.")))}d.defaultProps={title:"Default title",aboutText:"About"};var b=t(0);var p=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),p=Object(r.a)(c,2),h=p[0],E=p[1],g=function(e,a){E({msg:e,type:a}),setTimeout(function(){E(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(d,{title:"TextUtils2",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor=" #042743",g("Dark mode has been enabled","success"),document.title="Text utils - Dark mode"):(o("light"),document.body.style.backgroundColor="#fff",g("Light mode has been enabled","success"),document.title="Text utils - Light mode")}}),n.a.createElement(s,{alert:h}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/about",element:n.a.createElement(m,{mode:t})}),n.a.createElement(b.a,{path:"/",element:n.a.createElement(u,{showAlert:g,heading:"Enter the text to analyze below",mode:t})})))))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,28)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null))),h()}},[[14,3,2]]]);
//# sourceMappingURL=main.6a0e5f6d.chunk.js.map