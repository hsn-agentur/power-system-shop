function variableProductsInit(e){function t(){if(e.currentCollectionSlug||e.onSearchPages){const e=".collection-filter__item--count";document.querySelectorAll(e).forEach(e=>{const t=e.innerHTML.trim().match(/^(\d+)\s/),o=document.querySelectorAll(".variable-products").length;t&&o>t[1]&&(e.innerHTML=e.innerHTML.replace(t[1],o))})}}function o(){try{"undefined"!=typeof Shopify&&(Shopify.theme.name.toLowerCase().includes("wokiee")||document.querySelector(".tt-image-box"))&&(variableProductsInit.wokieeInterval=setInterval(()=>$(document).trigger("resize"),800)),document.querySelector(".tt-cart button").addEventListener("click",()=>{clearInterval(variableProductsInit.wokieeInterval)})}catch(e){}}function a(){function t(t){const a=n(t);if(!a)return 0;variableProductsInit.transformVariantValueToCondition||(variableProductsInit.transformVariantValueToCondition=(e=>e)),o(t,!0,(t,o,n)=>{if(o.shown=!0,o.wrap=t,!a.conditions.length||e.showProductsWithoutVariants&&1===n.variants.length&&"Default Title"===n.variants[0].option1)return;t.classList.contains("variable-products")||(t=t.parentElement);const r=[1,2,3];if("all"==a.match_type)a.conditions.forEach(e=>{const a=e.option_value.replace(/"/g,"").toLowerCase(),i=e.option_name.toLowerCase();let l=!1;if(r.forEach(r=>{const c=`option${r}`,s=o[c].replace(/\s/g," ").toLowerCase();if(n.options[c]&&n.options[c].name.toLowerCase()===i)switch(l=!0,e.operator){case"equal_to":variableProductsInit.transformVariantValueToCondition(s)!==a&&(t.classList.add("variable-removing"),o.shown=!1);break;case"not_equal_to":s===a&&(t.classList.add("variable-removing"),o.shown=!1);break;case"contains":s.includes(a)||(t.classList.add("variable-removing"),o.shown=!1);break;case"not_contains":s.includes(a)&&(t.classList.add("variable-removing"),o.shown=!1);break;default:t.classList.add("variable-removing"),o.shown=!1}}),!l)switch(e.operator){case"equal_to":case"contains":t.classList.add("variable-removing"),o.shown=!1}});else if("any"==a.match_type){let e=!1,i=!1;a.conditions.forEach(t=>{const a=t.option_value.replace(/"/g,"").toLowerCase(),l=t.option_name.toLowerCase();if(r.forEach(r=>{const c=`option${r}`,s=o[c].replace(/\s/g," ").toLowerCase();if(n.options[c]&&n.options[c].name.toLowerCase()===l)switch(i=!0,t.operator){case"equal_to":s===a&&(e=!0);break;case"not_equal_to":s!==a&&(e=!0);break;case"contains":s.includes(a)&&(e=!0);break;case"not_contains":s.includes(a)||(e=!0)}}),!i)switch(t.operator){case"equal_to":case"not_contains":case"contains":break;case"not_equal_to":e=!0}}),e||(t.classList.add("variable-removing"),o.shown=!1)}}),h&&S.forEach(e=>{!(e=e[Object.keys(e)[0]]).variants.find(e=>!0===e.shown)&&e.variants.length&&(e.variants[0].shown=!0,e.variants[0].wrap&&e.variants[0].wrap.classList.remove("variable-removing"))});const r=document.querySelectorAll(".variable-removing");return r.forEach(e=>{e.remove()}),r.length}function o(e,t,o){[...e].forEach(e=>{try{let i;if(t&&(i=e.closest(".variable-products")),i||(i=e.closest(".variable-products").children[0]),i){!i.querySelector("img, .grid-view-item__image")&&(1==i.parentElement.querySelectorAll("img").length||i.parentElement.classList.contains("variable-products")&&i.parentElement.querySelectorAll("img").length)&&(i=i.parentElement);let t=e.closest('a[href*="/products/"]');t||i.querySelectorAll('a[href*="/products/"]').forEach(function(e){e.href.match(/.*\/products\/([\S-]+)/)&&(t=e)}),t||"A"!=i.tagName||(t=i);var a=t.href.match(/.*\/products\/([\S-]+)/);productSlug=a[1];var n=productSlug.match(/([\S-]+)\?/);productSlug=n?n[1]:productSlug;let r=S.find(function(e){return e[productSlug]||e[decodeURIComponent(productSlug)]});if(r){r=r[productSlug]||r[decodeURIComponent(productSlug)],variantMatch=t.href.match(/variant=(\d+)/),variantId=variantMatch?variantMatch[1]:r.variants[0].id;const e=r.variants.find(e=>e.id==variantId);o(i,e,r,productSlug,variantId)}}}catch(r){console.log(r)}})}function a(t){if(e.add_to_cart_enabled&&!u()&&e.currentCollectionSlug&&"undefined"!=typeof VariableAddToCart){const a=new VariableAddToCart({params:e,linkSelector:P,productsCount:i,collection:t,initActionsByProductData:o});a.init(),variableProductsInit.VariableAddToCart=a}}let r=document.querySelectorAll(P);var i=r.length;S&&(i=-m,S.forEach(function(e){i+=e[Object.keys(e)[0]].variants.length}),document.querySelectorAll(".variable-products-list").forEach(e=>{const o=e.querySelectorAll(P);i-=t(o)}),r=document.querySelectorAll(P),foundProducts=[],[...r].forEach(e=>{var t=e.closest(".variable-products");t&&!foundProducts.includes(t)&&foundProducts.push(t)}),foundProducts.length==i&&a(r))}function n(t){let o=undefined;if(e.collectionConditions.length){const a=window.location.pathname.match(/.*\/collections\/([\w\d-]+)/)||decodeURI(window.location.pathname).match(/.*\/collections\/((\w|[^\x00-\x7F]|-)+)/);if(a&&a[1])o=e.collectionConditions.find(e=>e.collection_handle===a[1]);else if(t.length){const a=d(t[0],e=>e.dataset.collectionConditionHandle);a?o=e.collectionConditions.find(e=>e.collection_handle===a.dataset.collectionConditionHandle):v&&(o=e.collectionConditions.find(e=>"search"===e.collection_handle))}}return o}function r(){function t(e){return"function"==typeof customLocaleConvert?customLocaleConvert(e,Shopify.locale):e}var o=e.variants_titles;for(var a in o){document.querySelectorAll('[data-behavior="variable-product_title"][data-variant_id="'+a+'"]').forEach(function(e){e&&o[a].length>1&&(e.innerHTML=t(o[a]))})}Shopify.theme.name.includes("Turbo")&&document.querySelectorAll('[data-behavior="variable-product_title"]').forEach(e=>e.classList.add("title"))}function i(){const t=document.querySelector(".variable-products");if(t&&!t.classList.contains("Grid__Cell")){const o=t.style.display,a=e.lazyload.firstAmount,n=25,r=document.querySelectorAll(".variable-products:not(style)"),i=r.length;if(r.forEach((e,t)=>{t>=a&&(e.style.display="none")}),i>a){let t=!1,r=a;document.addEventListener("scroll",function(){let a=e.styles.footer_min_size||(u()?2300:1700);const l=document.querySelector("footer");if(l)try{const e=parseInt(getComputedStyle(l).height.slice(0,-2))+400;e>a&&(a=e);const t=document.querySelector('[data-section-id="recently-viewed-products"]');t&&(a+=parseInt(getComputedStyle(t).height.slice(0,-2)))}catch(c){}!t&&window.scrollY+a>document.body.clientHeight-window.innerHeight&&(t=!0,r<i&&(r+=n,document.querySelectorAll(".variable-products").forEach((e,t)=>{t<r&&(e.style.display=o)}),t=!1))})}}}function l(){const e=document.querySelector("#variable-products-load-css");e&&e.remove()}function c(e){const t=[...e.querySelectorAll(".variable-products")].map(e=>"A"==e.tagName?e.href:e.querySelector('a[href*="products"]')&&e.querySelector('a[href*="products"]').href).filter(e=>e);let o={};const a=s(t.map(e=>{const t=decodeURI(e).match(/.*\/products\/([\S]+)\?/);if(t)return o[t[1]]||(o[t[1]]=[]),o[t[1]].push(e),t[1]}));let n=[];a.forEach(function(e){e&&(n.push(o[e][0]),o[e].shift())}),n.forEach(function(t){const o=e.querySelector(`a[href*="${t.match(/\/products\/([\S]+)/)[0]}"]`);o?e.append(o.closest(".variable-products")):console.log(t)})}function s(e){function t(e){let t=[];const o=e.length,a=Math.floor(o/2);for(let n=0;n<a;n++)t.push(e[n]),t.push(e[o-1-n]);return a!==o/2&&t.push(e[a]),t}function o(){let e=0;if(n.forEach(t=>{for(var o=a.length-1;o>=0;o--)if(a[o]&&a[o]!=t&&a[o-1]!=t)return a.splice(o,0,t),void(e+=1)}),n.length-e)for(var t=0;t<n.length-e;t++)a.push(n[n.length-1])}let a=[],n=[];return t(t(t(t(t(e))))).forEach(e=>{if(a[a.length-1]!=e){a.push(e);const t=n[n.length-1];t&&t!=e&&(a.push(t),n.pop())}else n.push(e)}),o(),a}function d(e,t){return e==document.body?undefined:t(e.parentElement)?e.parentElement:d(e.parentElement,t)}function u(){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))return!0}function p(){e.currentCollectionSlug&&document.querySelectorAll(".product-block__image-container").forEach(e=>{"0px"===e.style.height&&e.style.removeProperty("height")})}if(variableProductsInited)return;variableProductsInited=!0;let m=0,h=!1;try{const t=window.location.pathname.match(/.*\/products\/([\w\d-]+)/);if(t)return l(),void(e.enable&&e.storeProductViewsUrl&&!Shopify.designMode&&$&&$.ajax&&fetch(t[0]+".js").then(e=>e.json()).then(t=>{var o=window.location.search.match(/variant=(\d+)/),a=null;if(o){a=t.variants.find(function(e){return e.id==o[1]}).title;var n={product:{product_id:t.id,variant_id:o[1],vendor:t.vendor,product_type:t.type,product_handle:t.handle,product_title:t.title,variant_title:a}};$.ajax({method:"GET",url:e.storeProductViewsUrl,data:n})}}));var f=document.querySelector('[data-behavior="variable-products"]'),v="/search"===window.location.pathname,b='a[href*="/products/"]:not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])';if(f&&f.dataset.nextPage&&(e.nextPage=f.dataset.nextPage),e.enable){try{let t=window.location.search.split("&"),o=!1;if(t){y();const a=["Color","Colour","Colore","Kolor","Kleur","Kolore","Couleur","Farbe","F\xe4rg","Farve","\uc0c9","\u8272","Pattern"];let n=[];t=t.filter(e=>e.includes("filter.v.option."));let r="";const i=e=>{t.map(t=>{let o=(t=t.split("="))[0],i=t[1];(o=o.split("filter.v.option.")[1])&&(o=o[0].toUpperCase()+o.slice(1),e?a.includes(o)&&i&&n.push({name:o,value:i}):o.toLowerCase()===r&&i&&n.push({name:o,value:i}))})};i(!0),!n.length&&t.length&&(r=t[0].split("=")[0].split("filter.v.option.")[1],i(!1)),n.length&&(e.collectionConditions.push({collection_handle:v?"search":e.currentCollectionSlug,match_type:"any",conditions:n.map(e=>({operator:"equal_to",option_name:g(e.name),option_value:g(e.value)})),sort_conditions:[],options_can_be_empty:!1}),variableProductsInit.withFilters=!0,o=!0)}else y();function g(e){let t="",o=decodeURIComponent(e);for(let e=0;e<o.length;e++)t+="+"===o[e]?" ":o[e];return t}function y(){!o&&variableProductsInit.withFilters&&(e.collectionConditions=e.collectionConditions.filter(t=>t.collection_handle!==(v?"search":e.currentCollectionSlug)))}}catch(E){console.log(`Filter: ${E}`)}const t=window.location.pathname.match(/.*\/collections\/([\w\d-]+)/)||decodeURI(window.location.pathname).match(/.*\/collections\/((\w|[^\x00-\x7F]|-)+)/);let o;if(t||!e.onCollectionPages&&(!v||e.onSearchPages)){function w(){let t=e.collectionConditions.find(t=>t.collection_handle===e.currentCollectionSlug);v&&e.onSearchPages&&(t=e.collectionConditions.find(e=>"search"===e.collection_handle));let a=!("/"===window.location.pathname)&&!t&&e.lazyload.enabled;document.querySelectorAll('[data-behavior="variable-products"]').forEach(function(n){const r=n.dataset.collectionHandle;e.currentCollectionSlug||(t=e.collectionConditions.find(e=>e.collection_handle===r))&&(n.parentElement.dataset.collectionConditionHandle=r),(t||e.manualSorting[r])&&(a=!1),n.dataset.collectionHandle&&(o=e.blackListsForCollections[n.dataset.collectionHandle]),[...n.parentElement.children].forEach(t=>{"variable-products"===t.dataset.behavior||!t.querySelector(b)&&!t.matches(b)||t.classList.contains("variable-products")||t.querySelector('[data-behavior="variable-products"]')||t.classList.add("variable-removing"),"HEADER"===t.tagName&&(e.unpackPrependLogic=!1)}),[...n.children].forEach(e=>{if('<div style="clear:both"></div>'===e.outerHTML||e.classList.contains("collection-grid-item-advertisement"))e.remove();else if(e.classList.add("variable-products"),o){const t=e.querySelector('[data-behavior="variable-product_title"]');t&&o.includes(t.dataset.variant_id)&&(e.remove(),m+=1)}}),n.parentElement.classList.add("variable-products-list")}),document.querySelectorAll('[data-behavior="variable-products"]').forEach(function(t){e.mixVariantsEnabled&&c(t),t.parentElement.querySelector("[data-banner-promo]")&&(e.unpackPrependLogic=!1),e.unpackPrependLogic?[...t.children].filter(e=>"SCRIPT"!=e.tagName).reverse().forEach(function(e){t.parentElement.prepend(e)}):t.parentElement.querySelector(".pagination")&&t.parentElement.querySelector(".variable-products")?[...t.children].filter(e=>"SCRIPT"!=e.tagName).forEach(function(e){const o=[...t.parentElement.children].filter(e=>e.classList.contains("variable-products"));o[o.length-1].after(e)}):[...t.children].filter(e=>"SCRIPT"!=e.tagName).forEach(function(e){t.parentElement.append(e)}),t.remove()});try{a&&i()}catch(E){console.log(E)}document.querySelectorAll(".variable-removing").forEach(e=>{e.remove()})}t&&(o=e.blackListsForCollections[e.currentCollectionSlug]),w(),r()}else document.querySelectorAll('[data-behavior="variable-products"]').forEach(e=>{e.remove()})}else document.querySelectorAll('[data-behavior="variable-products"]').forEach(e=>{e.remove()}),setInterval(()=>{const e=document.querySelector('[data-behavior="variable-products"]');e&&e.remove()},500)}catch(E){console.log(E),document.querySelectorAll('[data-behavior="variable-products"]').forEach(e=>{e.remove()})}finally{const e=document.querySelector(".variable-loader");e&&(e.style.display="none"),l(),p()}let S=e.productsData||[];if(f){document.querySelectorAll('[data-behavior="variable_product_list"]').forEach(t=>{t.remove();try{const o=JSON.parse(t.dataset.product_list);S.length?o.forEach(e=>{for(const[t,o]of Object.entries(e)){const e=S.find(e=>e[t]);if(e)o.variants.forEach(o=>{e[t].variants.some(e=>e.id===o.id)||e[t].variants.push(o)});else{const e={};e[t]=o,S.push(e)}}}):S=o,VariableProductsParams.productsData=S,variableProductsInit.productOffset=+t.dataset.prodOffset,variableProductsInit.variantOffset=+t.dataset.varOffset,variableProductsInit.productDataByHandle=(t=>{let o;return e.productsData.forEach(e=>{for(const[a,n]of Object.entries(e))if(a===t)return void(o=n)}),o}),variableProductsInit.optionsDataByHandle=(e=>{let t={};const o=variableProductsInit.productDataByHandle(e);for(let e in o.options)t[o.options[e].name]=e;return t})}catch(E){console.log(E)}});var P='[data-behavior="variable-product_title"]';setTimeout(function(){a()},0)}else e.enabledGlobal;let C=!1;const _=document.querySelector(".variable-products"),q=n(document.querySelectorAll(P));if(q&&q.sort_conditions.length&&"undefined"!=typeof SortConditions){const t=new SortConditions({productsData:e.productsData,sort_conditions:q.sort_conditions});try{t.sort(_.parentElement)}catch(E){console.log(E)}}if(_&&e.currentCollectionSlug){if("undefined"!=typeof ManualSorting&&e.manualSorting[e.currentCollectionSlug]){const t=new ManualSorting({manualSorting:e.manualSorting[e.currentCollectionSlug]});try{t.sort(_.parentElement)}catch(E){console.log(E)}}if("undefined"!=typeof VariablePaging){const t=new VariablePaging({liquidSectionId:e.lazyload.paging.liquidSectionId,container:_.parentElement});setTimeout(()=>{t.initLoading()},2e3)}}o(),(f&&S||C||(!v||e.onSearchPages)&&document.querySelector(".boost-pfs-filter-wrapper-page, .boost-pfs-filter-products, #bc-sf-filter-products"))&&(variableProductsInit.reinit||(variableProductsInit.reinit=(()=>{function t(){document.querySelector('[data-behavior="variable-products"]')&&(document.querySelector('script[src*="variable-loader.js"]')||document.head.innerText.match(/variable.js/)||document.head.innerHTML.match(/variable-loader.js/)||document.body.innerHTML.match(/variable-loader.js/))&&(variableProductsInited=!1,document.querySelector(".variable-products")&&(e.unpackPrependLogic=!1),variableProductsInit(e))}setInterval(t,500)}),variableProductsInit.reinit()),t())}var VariableProductsParams={enable:!0,checkoutRedirect:"",btnLabel:"",onCollectionPages:!1,showProductsWithoutVariants:!0,storeProductViewsUrl:"",optionsViewType:"show_all",optionsInfo:{only:"",variantsBlackList:[],variantsWhiteList:[],variantTitleType:"",customTitleCode:""},variants_titles:{},wrapSelector:".grid",wrapSelectorsUrl:"https://variable.zubrcommerce.com/selectors/wrap.json",jqueryPresented:!1,jqueryStatusUrl:"https://variable.zubrcommerce.com/selectors/jquery.json",blackListsForCollections:{vegan:["46502853902663","46502872777031","46502853935431","46502853968199","46508438421831","46508432818503","46508438389063","46508432785735","46508438356295","46508432752967","46502872809799","46508471353671"],pulver:["46508616646983","46508481282375","46508501795143","46508501827911","46508616581447","46508616614215","46508481249607","46508438356295","46508438389063","46508438421831","46508471353671"],riegel:["46498980528455","46498980462919","46498980593991","46502853902663","46502853935431","46502853968199","46502854263111","46502854295879","46506001105223","46506001170759","46506001236295","46506015654215","46508053365063","46508053430599","46508113363271","46508417122631"],neuheiten:["46498980528455","46498980561223","46498980462919","46498980495687","46498980593991","46498980626759","46506001105223","46506015555911","46506001236295","46506015588679","46506001170759","46506015621447","46506015654215","46508089639239","46508113363271","46508053365063","46508053430599"],bestseller:["46498980528455","46498980462919","46498980593991","46508113363271","46502853902663","46502853935431","46502853968199","46502854263111","46502854295879","46506001105223","46506001170759","46506001236295","46508113396039","46498980626759","46498980495687","46506015588679","46508501795143","46508501565767","46508501827911","46506015621447","46506015654215","46508089639239","46508053365063","46508053397831","46508053430599","46508053463367","46502861340999","46502872777031"],muskelaufbau:["46498980528455","46498980462919","46498980593991","46508113363271","46502853902663","46502853935431","46502853968199","46502854263111","46502854295879"],"abnehmen-fitness":["46506001105223","46506001170759","46506001236295","46506015654215","46508053365063","46508053430599"]},add_to_cart_enabled:!1,displayOutOfStock:!0,outOfStockLimit:0,addToCartLabels:{addToCart:"Add to cart",goToCheckout:"Go to checkout",soldOut:"Sold out",quantity:"Quantity"},addToCartInfo:{initOnParent:!1},styles:{},mixVariantsEnabled:!1,collectionConditions:[],enabledByDefault:!0,disabledCollections:[],enabledCollections:[],manualSorting:{},collectionsWithDiscount:[],unpackPrependLogic:!0,lazyload:{enabled:!0,firstAmount:36,paging:{}}},variableProductsInited=!1;"undefined"==typeof variableParams&&(variableParams={...VariableProductsParams});try{const t=decodeURI(window.location.pathname).match(/.*\/collections\/((?:\w|[^\x00-\x7F]|-)+)/);if(t&&t[1]){let e;(e=VariableProductsParams.enabledByDefault?VariableProductsParams.disabledCollections.find(e=>e===t[1]):!VariableProductsParams.enabledCollections.find(e=>e===t[1]))&&(VariableProductsParams.enabledGlobal=VariableProductsParams.enable,VariableProductsParams.enable=!1),VariableProductsParams.currentCollectionSlug=t[1]}!t&&VariableProductsParams.onCollectionPages&&(VariableProductsParams.enable=!1)}catch(e){console.log(e)}document.addEventListener("DOMContentLoaded",function(){document.head.innerText.match(/variable-loader.js/)||document.head.innerText.match(/variable.js/)||document.body.innerHTML.match(/variable-loader.js/)||document.head.innerHTML.match(/variable-loader.js/)||(VariableProductsParams.enable=!1),variableProductsInit(VariableProductsParams)});