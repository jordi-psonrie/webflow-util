(()=>{function s(t){if(!!t)return new Date(t)}var n=class{constructor(e=void 0){this["@type"]="EntryPoint",this.urlTemplate=e}};window.LdJsonEntryPoint=n;var d=class{constructor(e=void 0){this["@context"]="https://schema.org",this["@type"]="SearchAction",this.queryInput=e,this.target=new n}};window.LdJsonSearchAction=d;var o=class{constructor(e=void 0,i=void 0){this["@type"]="WebSite",this.name=e,this.url=i}toJSON(){return{"@content":"https://schema.org","@type":this["@type"],name:this.name,url:this.url,potentialAction:this.potentialAction}}generate(){console.log(JSON.stringify(this,null,2));let e=document.createElement("script");e.setAttribute("type","application/ld+json"),e.innerHTML=JSON.stringify(this,null,2),document.body.appendChild(e)}};window.LdJsonWebSite=o;var r=class{constructor(e=void 0,i=void 0){this["@type"]="Person",this.name=e,this.url=i}};window.LdJsonPerson=r;var a=class{constructor(){this.author=[];this.addAuthor=function(e=void 0,i=void 0){this.author.push(new r(e,i))};this.setFallbackImage=function(e){this.image=this.image||e};this.generate=function(){console.log(JSON.stringify(this,null,2));let e=document.createElement("script");e.setAttribute("type","application/ld+json"),e.textContent=JSON.stringify(this,null,2),document.head.appendChild(e),console.log("appended.")};this["@type"]="Article"}toJSON(){return{"@context":"https://schema.org","@type":"Article",headline:this.headline,dependencies:this.dependencies,proficiencyLevel:this.proficiencyLevel||void 0,alternativeHeadline:this.alternativeHeadline,image:this.image,author:this.author,award:this.award,editor:this.editor,genre:this.genre,keywords:this.keywords,wordcount:this.wordcount,publisher:this.publisher,url:this.url,dateCreated:s(this.dateCreated),dateModified:s(this.dateModified),datePublished:s(this.datePublished),description:this.description,articleBody:this.articleBody}}};window.LdJsonArticle=a;})();
//# sourceMappingURL=webflow-seo.js.map
