"use strict";(self["webpackChunkannal_stream"]=self["webpackChunkannal_stream"]||[]).push([[33],{5644:function(e,l,t){t.r(l),t.d(l,{default:function(){return D}});var r=t(3396),n=t(7139);const a={class:"brewery-detail"},s=(0,r._)("strong",null,"Name: ",-1),i=(0,r._)("strong",null,"Type: ",-1),u=(0,r._)("strong",null,"Country: ",-1),b=(0,r._)("strong",null,"State: ",-1),o=(0,r._)("strong",null,"Street: ",-1),w=(0,r._)("strong",null,"Website: ",-1),c=["href"];function _(e,l,t,_,y,k){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("button",{class:"back-btn",onClick:l[0]||(l[0]=l=>e.$router.back())},"Go back"),(0,r._)("ul",null,[(0,r._)("li",null,[s,(0,r.Uk)((0,n.zw)(_.breweryDetails.name),1)]),(0,r._)("li",null,[i,(0,r.Uk)((0,n.zw)(_.breweryDetails.type||"Not available"),1)]),(0,r._)("li",null,[u,(0,r.Uk)((0,n.zw)(_.breweryDetails.country),1)]),(0,r._)("li",null,[b,(0,r.Uk)((0,n.zw)(_.breweryDetails.state),1)]),(0,r._)("li",null,[o,(0,r.Uk)((0,n.zw)(_.breweryDetails.street||"Not available"),1)]),(0,r._)("li",null,[w,(0,r._)("a",{href:_.breweryDetails.website_url},(0,n.zw)(_.breweryDetails.website_url||"Not Available"),9,c)])])])}var y=t(4870),k=t(678),f={setup(){let e=(0,y.iH)({});const l="https://api.openbrewerydb.org/breweries/",t=(0,k.yj)();(0,r.bv)((()=>{n()}));const n=()=>{fetch(l+t.params.id).then((e=>e.json())).then((l=>{e.value=l}))};return{fetchAllBreweryDetail:n,breweryDetails:e}}},h=t(89);const p=(0,h.Z)(f,[["render",_]]);var D=p}}]);
//# sourceMappingURL=BreweryDetail.ecc242da.js.map