(window.webpackJsonpgym=window.webpackJsonpgym||[]).push([[0],{106:function(e,t,a){e.exports=a(205)},117:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(44),i=a.n(r),c=a(8),o=a(16),l=a(104),m=(a(117),a(118),a(27)),d=a.n(m),p=function(e,t){d.a.defaults.headers.common["x-app-id"]=e,d.a.defaults.headers.common["x-app-key"]=t},u={common:[],branded:[]},h=a(103),f=a(94);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={first_name:"Jane",last_name:"Appleseed",height_cm:163,weight_kg:57,daily_goal:1500,data_points:[{date:"20-09-2019",intake_list:[]},{date:"19-09-2019",intake_list:[{nix_item_id:"55c9298af0432259369100c4",food_name:"Italian sausage",serving_unit:"link",serving_weight_grams:75,serving_qty:1,nf_calories:258,serving_size:2,meal_type:"breakfast",thumb:"https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"},{food_name:"salmon salad",serving_unit:"cup",serving_weight_grams:407.01,serving_qty:1,nf_calories:389.27,serving_size:1.5,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{food_name:"boneless skinless chicken breasts",serving_qty:1,serving_unit:"breast",serving_weight_grams:120,nf_calories:198,serving_size:2,meal_type:"dinner",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]},{date:"18-09-2019",intake_list:[{food_name:"fried eggs",serving_qty:1,serving_unit:"large",serving_weight_grams:46,nf_calories:90.16,serving_size:2,meal_type:"breakfast",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"},{food_name:"chicken salad",serving_qty:.5,serving_unit:"cup",serving_weight_grams:112.1,nf_calories:253.99,serving_size:1,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{nix_item_id:"598c0695306b814040ff908b",food_name:"Boneless Skinless Chicken Breasts",serving_unit:"oz",serving_qty:4,nf_calories:110,serving_size:1,meal_type:"dinner",thumb:"https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]}]},v=Object(o.c)({diet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},target:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TARGET_FOOD_RESPONSE":return t.payload;default:return e}},savedFood:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FOOD_RESPONSE":return e.some((function(e){return e.food_name===t.payload.food_name&&e.meal_type===t.payload.meal_type}))?e.map((function(e){return e.food_name===t.payload.food_name&&e.meal_type===t.payload.meal_type?b({},e,{nf_calories:e.nf_calories+t.payload.nf_calories,serving_qty:e.serving_qty+t.payload.serving_qty}):e})):[].concat(Object(h.a)(e),[t.payload]);default:return e}},food:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_FOOD_RESPONSE":return t.payload;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERROR":return t.payload;default:return e}}}),y=a(18),O=a.n(y),N=a(14),_="https://trackapi.nutritionix.com/v2",k=O.a.mark(S),w=O.a.mark(R),j=O.a.mark(D);function S(e){var t;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.get("".concat(_,"/search/instant?query=").concat(e.payload));case 3:return t=a.sent,a.next=6,Object(N.b)({type:"SEARCH_FOOD_RESPONSE",payload:t.data});case 6:a.next=14;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(N.b)({type:"GET_ERROR",payload:a.t0.response.data});case 12:return a.next=14,Object(N.b)({type:"SEARCH_FOOD_RESPONSE",payload:{common:[],branded:[]}});case 14:case"end":return a.stop()}}),k,null,[[0,8]])}function R(e){var t;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"common"!==e.payload.category){a.next=7;break}return a.next=4,d.a.post("".concat(_,"/natural/nutrients"),{query:e.payload.query});case 4:t=a.sent,a.next=10;break;case 7:return a.next=9,d.a.get("".concat(_,"/search/item?nix_item_id=").concat(e.payload.query));case 9:t=a.sent;case 10:return a.next=12,Object(N.b)({type:"TARGET_FOOD_RESPONSE",payload:t.data.foods[0]});case 12:a.next=20;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(N.b)({type:"GET_ERROR",payload:a.t0.response.data});case 18:return a.next=20,Object(N.b)({type:"SEARCH_FOOD_RESPONSE",payload:{common:[],branded:[]}});case 20:case"end":return a.stop()}}),w,null,[[0,14]])}function D(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)("SEARCH_FOOD_REQUEST",S);case 2:return e.next=4,Object(N.c)("TARGET_FOOD_REQUEST",R);case 4:case"end":return e.stop()}}),j)}var B=O.a.mark(C);function C(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)(D);case 2:case"end":return e.stop()}}),B)}var x=a(5),F=a(6),T=a(9),I=a(7),A=a(10),Q=a(207),P=function(){return{type:"SEARCH_FOOD_RESPONSE",payload:{common:[],branded:[]}}},z=function(e){return{type:"ADD_FOOD_RESPONSE",payload:e}},G=a(95),U=a.n(G),Z=(a(136),function(e){return s.a.createElement("div",{className:"profile"},s.a.createElement("div",{className:"profile-weight"},s.a.createElement("span",{className:"profile-number"},e.weight_kg),s.a.createElement("span",{className:"profile-unit"},"kg")),s.a.createElement("img",{className:"profile-avatar",alt:"avatar",src:U.a}),s.a.createElement("div",{className:"profile-height"},s.a.createElement("span",{className:"profile-number"},e.height_cm),s.a.createElement("span",{className:"profile-unit"},"cm")),s.a.createElement("span",{className:"profile-name"},e.first_name,"\xa0",s.a.createElement("span",{className:"profile-last-name"},e.last_name)))}),q=(a(137),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).change=function(e){e.preventDefault(),a.setState({searchValue:e.currentTarget.value}),e.currentTarget.value?a.props.searchFood(e.currentTarget.value):a.props.clearFood()},a.state={searchValue:""},a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-input-group"},s.a.createElement("label",{htmlFor:"search",className:"header-label"},"Search:"),s.a.createElement(Q.a,{type:"search",className:"header-icon"}),s.a.createElement("input",{type:"text",className:"header-input",id:"search",placeholder:"Search foods...",autoComplete:"off",value:this.state.searchValue,onChange:this.change})),s.a.createElement(Z,{first_name:this.props.first_name,last_name:this.props.last_name,weight_kg:this.props.weight_kg,height_cm:this.props.height_cm}),s.a.createElement("div",{className:"header-date-group"},s.a.createElement("span",{className:"header-date-btn"},s.a.createElement(Q.a,{type:"left",onClick:this.props.prevDay})),s.a.createElement("span",{className:"header-date-title"},this.props.date),s.a.createElement("span",{className:"header-date-btn"},s.a.createElement(Q.a,{type:"right",onClick:this.props.nextDay}))))}}]),t}(n.PureComponent)),L=Object(c.b)(null,{searchFood:function(e){return{type:"SEARCH_FOOD_REQUEST",payload:e}},clearFood:P})(q),H=(a(181),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).calculate=function(e){var t,n=0,s=0,r=0,i=0,c=0;e.forEach((function(e){switch(e.meal_type){case"breakfast":s+=e.nf_calories,n+=e.nf_calories;break;case"lunch":r+=e.nf_calories,n+=e.nf_calories;break;case"dinner":i+=e.nf_calories,n+=e.nf_calories;break;case"snack":c+=e.nf_calories,n+=e.nf_calories}})),t=Math.floor(n/a.props.daily_goal*100),a.barRef.current.style.width=t>100?"100%":t+"%",a.perRef.current.style.marginLeft="".concat(t>95?95:t,"%"),a.setState({totalCal:n,breakfast:s,lunch:r,dinner:i,snack:c,percentage:t})},a.state={totalCal:0,breakfast:0,lunch:0,dinner:0,snack:0,percentage:0},a.barRef=s.a.createRef(),a.perRef=s.a.createRef(),a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){this.props!==e&&(0===this.props.data.length?this.calculate(this.props.savedFood):this.calculate(this.props.data))}},{key:"render",value:function(){return s.a.createElement("div",{className:"statistic"},s.a.createElement("div",{className:"statistic-cal"},s.a.createElement("div",{className:"statistic-cal-consumed"},s.a.createElement("span",{className:"number"},this.state.totalCal," Cal"),s.a.createElement("span",{className:"description"},"consumed")),s.a.createElement("div",{className:"statistic-cal-goal"},s.a.createElement("span",{className:"number"},this.props.daily_goal," Cal"),s.a.createElement("span",{className:"description"},"daily goal"))),s.a.createElement("div",{className:"statistic-percentage"},s.a.createElement("span",{className:"progress-bar"},s.a.createElement("span",{ref:this.barRef,className:"progress-bar-before"})),s.a.createElement("span",{ref:this.perRef,className:"number"},this.state.percentage,"%")),s.a.createElement("div",{className:"statistic-meal"},s.a.createElement("div",{className:"statistic-meal-common"},s.a.createElement("span",{className:"number"},this.state.breakfast),s.a.createElement("span",{className:"meal"},"Breakfast")),s.a.createElement("div",{className:"statistic-meal-common"},s.a.createElement("span",{className:"number"},this.state.lunch),s.a.createElement("span",{className:"meal"},"Lunch")),s.a.createElement("div",{className:"statistic-meal-common"},s.a.createElement("span",{className:"number"},this.state.dinner),s.a.createElement("span",{className:"meal"},"Dinner")),s.a.createElement("div",{className:"statistic-meal-common"},s.a.createElement("span",{className:"number"},this.state.snack),s.a.createElement("span",{className:"meal"},"Snack"))))}}]),t}(n.PureComponent)),K=Object(c.b)((function(e){return{savedFood:e.savedFood}}),{})(H),Y=(a(182),function(e){function t(){return Object(x.a)(this,t),Object(T.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sider"},s.a.createElement(Z,{first_name:this.props.first_name,last_name:this.props.last_name,weight_kg:this.props.weight_kg,height_cm:this.props.height_cm}),s.a.createElement(K,{data:this.props.data,daily_goal:this.props.daily_goal}))}}]),t}(n.PureComponent)),J=(a(183),function(e){var t=e.target;return s.a.createElement("div",{className:"foodlist-item"},s.a.createElement("img",{className:"foodlist-image",alt:t.food_name,src:t.thumb}),s.a.createElement("div",{className:"foodlist-main"},s.a.createElement("div",{className:"foodlist-main-info"},s.a.createElement("span",{className:"foodlist-main-name"},t.food_name),s.a.createElement("span",{className:"foodlist-main-number"},t.serving_qty," ",t.serving_unit," (",t.serving_weight_grams,"g)")),s.a.createElement("div",{className:"foodlist-main-info"},s.a.createElement("span",{className:"foodlist-main-cal"},t.nf_calories," Cal"),s.a.createElement("span",{className:"foodlist-main-category"},t.meal_type))))}),V=(a(184),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).renderList=function(e){return 0===a.props.data.length?e.length>0?e.map((function(e,t){return s.a.createElement(J,{key:t,target:e})})):null:a.props.data.map((function(e,t){return s.a.createElement(J,{key:t,target:e})}))},a.siderRef=s.a.createRef(),a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){document.body.clientWidth>=768&&(this.siderRef.current.style.height="".concat(document.body.clientHeight-128,"px"))}},{key:"render",value:function(){return s.a.createElement("div",{className:"food",ref:this.siderRef},this.renderList(this.props.savedFood))}}]),t}(n.PureComponent)),W=Object(c.b)((function(e){return{savedFood:e.savedFood}}),{})(V),M=(a(185),function(){document.getElementById("search").focus()}),X=function(){return s.a.createElement("span",{className:"add-btn",onClick:M},s.a.createElement(Q.a,{type:"plus",className:"add-btn-icon"}))},$=(a(186),function(e){var t=e.item,a=e.toggleModal;return s.a.createElement("div",{className:"result-item",onClick:function(){return a(t)}},s.a.createElement("img",{src:t.photo.thumb,alt:t.food_name,className:"result-image"}),s.a.createElement("span",{className:"result-title"},t.food_name))}),ee=a(206),te=(a(187),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).toggleModal=function(){a.props.toggleModal("")},a.focus=function(){a.selectRef.current.focus()},a.change=function(e){a.setState({meal:e.target.value})},a.addOne=function(){a.setState({serves:a.state.serves+1,grams:a.props.item.serving_weight_grams+a.state.grams,cal:Math.floor(a.props.item.nf_calories)+a.state.cal})},a.removeOne=function(){var e=a.state.serves;e=e>=0?e-1:0,a.setState({serves:e,grams:a.props.item.serving_weight_grams*e,cal:Math.floor(a.props.item.nf_calories)*e})},a.submit=function(e){e.preventDefault(),a.state.serves>0&&a.props.addFood({food_name:a.props.item.food_name,meal_type:a.state.meal,nf_calories:a.state.cal,serving_qty:a.state.serves,serving_size:1,serving_unit:a.props.item.serving_unit,serving_weight_grams:a.state.grams,thumb:a.props.item.photo.thumb}),a.toggleModal(),a.props.clearFood(),a.props.goToToday()},a.state={serves:1,meal:"breakfast",grams:0,cal:0},a.selectRef=s.a.createRef(),a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.target.nix_brand_id?this.props.targetFood(this.props.target.nix_item_id,"branded"):this.props.targetFood(this.props.target.food_name,"common")}},{key:"componentDidUpdate",value:function(e){e.item!==this.props.item&&this.props.item&&this.setState({grams:this.props.item.serving_weight_grams,cal:Math.floor(this.props.item.nf_calories)})}},{key:"componentWillUnmount",value:function(){this.props.clearTargetFood()}},{key:"render",value:function(){return null===(e=this.props.item)||void 0===e||e.hasOwnProperty("length")&&0===e.length||e.constructor===Object&&0===Object.keys(e).length?s.a.createElement(ee.a,{className:"item-modal-spinner",size:"large"}):s.a.createElement("div",{className:"item-modal ".concat(this.props.visibility?"active":"")},s.a.createElement("div",null,s.a.createElement("img",{src:this.props.item.photo.thumb,alt:this.props.item.food_name,className:"item-image"}),s.a.createElement("span",{className:"item-title"},this.props.item.food_name),s.a.createElement(Q.a,{type:"close",className:"close-btn",onClick:this.toggleModal})),s.a.createElement("div",{className:"item-amount-container"},s.a.createElement("div",{className:"item-amount"},s.a.createElement("span",{className:"item-amount-label"},"Servings"),s.a.createElement("span",{className:"item-amount-input"},this.state.serves,".0"),s.a.createElement("span",{className:"item-amount-unit"},this.props.item.serving_unit),s.a.createElement(Q.a,{type:"up",className:"item-amount-up",onClick:this.addOne}),s.a.createElement(Q.a,{type:"down",className:"item-amount-down",onClick:this.removeOne})),s.a.createElement("div",{className:"item-weight"},s.a.createElement("span",{className:"item-number"},this.state.grams),s.a.createElement("span",{className:"item-unit"},"grams")),s.a.createElement("div",{className:"item-cal"},s.a.createElement("span",{className:"item-number"},this.state.cal),s.a.createElement("span",{className:"item-unit"},"calories"))),s.a.createElement("div",{className:"form"},s.a.createElement("form",{onSubmit:this.submit},s.a.createElement("span",{className:"item-span"},"add to today"),s.a.createElement(Q.a,{type:"down",className:"item-input-icon",onClick:this.focus}),s.a.createElement("select",{className:"item-input",name:"meal",onChange:this.change,value:this.state.meal,ref:this.selectRef},s.a.createElement("option",{value:"breakfast"},"Breakfast"),s.a.createElement("option",{value:"lunch"},"Lunch"),s.a.createElement("option",{value:"dinner"},"Dinner"),s.a.createElement("option",{value:"snack"},"Snack")),s.a.createElement("button",{className:"add-btn",type:"submit"},"ADD"))));var e}}]),t}(n.PureComponent)),ae=Object(c.b)((function(e){return{item:e.target}}),{targetFood:function(e,t){return{type:"TARGET_FOOD_REQUEST",payload:{query:e,category:t}}},clearTargetFood:function(){return{type:"TARGET_FOOD_RESPONSE",payload:{}}},addFood:z,clearFood:P})(te),ne=(a(203),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).renderList=function(e){return e.map((function(e,t){return s.a.createElement($,{key:t,item:e,toggleModal:a.toggleModal})}))},a.toggleModal=function(e){a.setState({modalVisibility:!a.state.modalVisibility,targetItem:e})},a.close=function(){a.setState({modalVisibility:!1,common:[],branded:[]})},a.state={common:[],branded:[],modalVisibility:!1,targetItem:""},a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props.searchResults,a=t.common,n=t.branded;this.setState({common:a,branded:n})}}},{key:"render",value:function(){return this.state.common.length>0||this.state.branded.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"result-list"},s.a.createElement("div",null,s.a.createElement("span",{className:"result-category"},"Common"),this.renderList(this.state.common)),s.a.createElement("div",null,s.a.createElement("span",{className:"result-category"},"Braded"),this.renderList(this.state.branded))),this.state.modalVisibility&&s.a.createElement(ae,{visibility:this.state.modalVisibility,target:this.state.targetItem,toggleModal:this.toggleModal,goToToday:this.props.goToToday}),s.a.createElement("div",{className:"shield ".concat(this.state.modalVisibility?"active":""),onClick:this.close})):null}}]),t}(n.PureComponent)),se=Object(c.b)((function(e){return{searchResults:e.food}}),{addFood:z})(ne),re=(a(204),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(T.a)(this,Object(I.a)(t).call(this,e))).goToToday=function(){a.setState({date:"Today",data:[]})},a.prevDay=function(){switch(a.state.date){case"Today":a.setState({date:"Yesterday",data:a.props.diet.data_points[1].intake_list});break;case"Yesterday":a.setState({date:"TDBY",data:a.props.diet.data_points[2].intake_list});break;case"TDBY":a.setState({date:"Today",data:[]})}},a.nextDay=function(){switch(a.state.date){case"Today":a.setState({date:"TDBY",data:a.props.diet.data_points[2].intake_list});break;case"Yesterday":a.setState({date:"Today",data:[]});break;case"TDBY":a.setState({date:"Yesterday",data:a.props.diet.data_points[1].intake_list})}},a.state={date:"Today",data:[]},a}return Object(A.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.diet,t=e.first_name,a=e.last_name,n=e.weight_kg,r=e.height_cm,i=e.daily_goal;return s.a.createElement("div",{className:"App"},s.a.createElement(L,{first_name:t,last_name:a,weight_kg:n,height_cm:r,prevDay:this.prevDay,nextDay:this.nextDay,date:this.state.date}),s.a.createElement("div",{className:"content"},s.a.createElement(Y,{data:this.state.data,first_name:t,last_name:a,weight_kg:n,height_cm:r,daily_goal:i}),s.a.createElement(W,{data:this.state.data})),s.a.createElement(se,{goToToday:this.goToToday}),s.a.createElement(X,null))}}]),t}(n.PureComponent)),ie=Object(c.b)((function(e){return{diet:e.diet}}),{})(re);var ce=function(){return s.a.createElement(ie,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,le=Object(l.a)(),me=Object(o.e)(v,oe(Object(o.a)(le)));le.run(C),p("af490ff1","12d315468184e280bfd0357a9abd958f"),i.a.render(s.a.createElement(c.a,{store:me},s.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t){e.exports="data:image/png;base64,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"}},[[106,1,2]]]);
//# sourceMappingURL=main.61383a2e.chunk.js.map