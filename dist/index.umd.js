!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("styled-components")):"function"==typeof define&&define.amd?define(["exports","styled-components"],t):t(e.styledExpression={},e.styledComponents)}(this,function(e,t){const n={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},s=(e,s)=>{switch(s){case"inline":e._.display="inline-flex";break;case"center":e._.justifyContent="center",e._.alignItems="center"}return(e=>{const s=function(){const e=i(s._||Object.assign({},n));return t.css`
      display: ${e("display")};
      justify-content: ${e("justifyContent")};
    `};return s._=e._,s})(e)},i=e=>t=>()=>e[t];e.flex=((e=Proxy)=>new e({_:Object.assign({},n)},{get:s}))});
//# sourceMappingURL=index.umd.js.map
