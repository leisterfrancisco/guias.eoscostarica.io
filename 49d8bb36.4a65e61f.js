(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return d}));var r=n(2),t=n(9),l=(n(0),n(195)),o={id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves Privadas"},c={id:"aprender-eosio/llaves-privadas",isDocsHomePage:!1,title:"Manejo de Llaves Privadas",description:"Crear cuenta en el blockchain p\xfablico",source:"@site/docs/aprender-eosio/llaves-privadas.md",permalink:"/docs/aprender-eosio/llaves-privadas",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1594829230,sidebar_label:"Llaves Privadas",sidebar:"docs",previous:{title:"Funciones Importantes en EOSIO",permalink:"/docs/aprender-eosio/funciones-importantes"},next:{title:"Desarrollo de Dapps",permalink:"/docs/aprender-eosio/desarrollo-de-dapps"}},i=[{value:"Crear cuenta en el blockchain p\xfablico",id:"crear-cuenta-en-el-blockchain-p\xfablico",children:[]},{value:"Generar y gestionar las llaves",id:"generar-y-gestionar-las-llaves",children:[]},{value:"Administrar la billetera con cleos",id:"administrar-la-billetera-con-cleos",children:[]},{value:"Autenticadores Externos (Wallets)",id:"autenticadores-externos-wallets",children:[]}],s={rightToc:i};function d(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"crear-cuenta-en-el-blockchain-p\xfablico"},"Crear cuenta en el blockchain p\xfablico"),Object(l.b)("p",null,"En la mayor\xeda de las billeteras puede generar nuevas llaves para EOSIO, en esta gu\xeda crearemos claves en el terminal. Ejecutemos el comando ",Object(l.b)("inlineCode",{parentName:"p"},"cleos")," para generar las claves criptogr\xe1ficas necesarias para crear una cuenta. Para crear una cuenta en Jungle Testnet."),Object(l.b)("h2",{id:"generar-y-gestionar-las-llaves"},"Generar y gestionar las llaves"),Object(l.b)("p",null,"Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando ",Object(l.b)("inlineCode",{parentName:"p"},"cleos create key")," en la terminal. Este comando nos va a generar llaves privadas y p\xfablicas \u2014 podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una ",Object(l.b)("inlineCode",{parentName:"p"},"active key")," y una ",Object(l.b)("inlineCode",{parentName:"p"},"owner key")," (para recuperar cuenta en caso de perder la active key)."),Object(l.b)("p",null,"Una vez generadas las llaves, nos dirigimos al sandbox, Jungle Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en min\xfascula, n\xfameros del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: ",Object(l.b)("inlineCode",{parentName:"p"},"holacontrato"),"."),Object(l.b)("p",null,"Luego, introducimos las llaves p\xfablicas de ",Object(l.b)("inlineCode",{parentName:"p"},"owner")," y ",Object(l.b)("inlineCode",{parentName:"p"},"active")," para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando cleos create key anteriormente. Se recomienda no compartir las llaves privadas."),Object(l.b)("h2",{id:"administrar-la-billetera-con-cleos"},"Administrar la billetera con cleos"),Object(l.b)("p",null,"Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es ",Object(l.b)("inlineCode",{parentName:"p"},"holacontrato"),", mediante el comando ",Object(l.b)("inlineCode",{parentName:"p"},"cleos wallet create -n holacontrato --to-console"),"."),Object(l.b)("p",null,"En este momento, las llaves est\xe1n guardadas \xfanicamente en la consola, por lo que es necesario crear la billetera que contendr\xe1 las llaves. De esta manera, se podr\xe1 acceder a estas llaves con una \xfanica contrase\xf1a. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: ",Object(l.b)("inlineCode",{parentName:"p"},"cleos wallet import")," y a\xf1adiendo el nombre de la cuenta."),Object(l.b)("h2",{id:"autenticadores-externos-wallets"},"Autenticadores Externos (Wallets)"),Object(l.b)("p",null,"La \xfaltima actualizaci\xf3n importante para EOSJS incluy\xf3 soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gesti\xf3n segura de claves de su alcance y mejorando la interoperabilidad. Lo que es m\xe1s importante, esta es una mejora importante de seguridad que limita la exposici\xf3n de las claves de un usuario en muchas aplicaciones a un \xfanico proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un c\xf3digo malicioso o un error del usuario al usar aplicaciones blockchain."))}d.isMDXComponent=!0},195:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return m}));var r=n(0),t=n.n(r);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),d=function(e){var a=t.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},u=function(e){var a=d(e.components);return t.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},b=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||l;return n?t.a.createElement(m,c(c({ref:a},s),{},{components:n})):t.a.createElement(m,c({ref:a},s))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);