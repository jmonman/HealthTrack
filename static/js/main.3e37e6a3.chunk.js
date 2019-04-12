(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),i=t(4),n=t.n(i),r=(t(16),t(5)),o=t(6),c=t(8),u=t(7),m=t(9),h=t(1),d=(t(3),{max:24,min:8}),g={max:9,min:7},p={obese:30,overweight:25,normal:18.5},E={limit:2300},b={femaleLimit:6,maleLimit:9},f={limit:2};Object.freeze(d),Object.freeze(g),Object.freeze(p),Object.freeze(E),Object.freeze(b),Object.freeze(f);var O=function(){return s.a.createElement("div",{className:"legend"},s.a.createElement("br",null),s.a.createElement("h3",null,"Formulas and Information"),s.a.createElement("ul",null,s.a.createElement("li",null,"Gender & Age"),s.a.createElement("ul",null,s.a.createElement("li",null,"Both are factors in determining Base Metabolic Rate (BMR)"),s.a.createElement("li",null,"BMR is the number of calories your body burns in a resting state per day"),s.a.createElement("li",null,"BMR is calculated using the The Harris Benedict equations revised by Mifflin and St Jeor 1990 defined below:"),s.a.createElement("ul",null,s.a.createElement("li",null,"For Women: ",s.a.createElement("br",null),"BMR = (4.536 \xd7 weight in pounds) + (15.88 \xd7 height in inches) \u2212 (5 \xd7 age) \u2212 161"),s.a.createElement("li",null,"For Men: ",s.a.createElement("br",null),"BMR = (4.536 \xd7 weight in pounds) + (15.88 \xd7 height in inches) \u2212 (5 \xd7 age) + 5"))),s.a.createElement("li",null,"Weight Goal (Lose, Maintain, or Gain weight)"),s.a.createElement("ul",null,s.a.createElement("li",null,"Depending on personal factors including Body Mass Index (BMI) an individual may want to lose, gain, or maintain their current weight"),s.a.createElement("li",null,"This is used as a factor to determine based on total calories consumed in a day and BMR if an individual had a caloric surplus or caloric deficit for the day which can be used as baseline to determine whether or not they will lose or gain weight."),s.a.createElement("li",null,"Caloric Surplus or Deficit = Calories consumed per day - BMR"),s.a.createElement("li",null,"It is considered healthy to meet your goal based on the criteria and a comparison is done in the application to check this based on the chosen goal")),s.a.createElement("li",null,"Cups of water consumed in a day"),s.a.createElement("ul",null,s.a.createElement("li",null,"It is healthy to drink between 8 and 24 glasses of water per day")),s.a.createElement("li",null,"Hours of sleep in a day"),s.a.createElement("ul",null,s.a.createElement("li",null,"It is healthy to sleep 7 to 9 hours per day")),s.a.createElement("li",null,"Calories consumed in a day"),s.a.createElement("ul",null,s.a.createElement("li",null,"The total number of kCals consumed in a day"),s.a.createElement("li",null,"Used as factor in detemining caloric surplus or deficit for the day")),s.a.createElement("li",null,"Height and Weight"),s.a.createElement("ul",null,s.a.createElement("li",null,"Both are used as factors in determining BMR as well as Body Mass Index or BMI"),s.a.createElement("ul",null,s.a.createElement("li",null,"BMI is calculated by the formula:",s.a.createElement("br",null),"BMI = ((lbs)/(in^2)) X 703"),s.a.createElement("li",null," ","Values for BMR are:",s.a.createElement("br",null),"Underweight = <18.5",s.a.createElement("br",null),"Normal weight = 18.5\u201324.9",s.a.createElement("br",null),"Overweight = 25\u201329.9",s.a.createElement("br",null),"Obesity = BMI of 30 or greater",s.a.createElement("br",null)))),s.a.createElement("li",null,"Milligrams of sodium consumed in a day"),s.a.createElement("ul",null,s.a.createElement("li",null,"It is considered healthy to consume no more than 2300mg of sodium in a day")),s.a.createElement("li",null,"Teaspoons of sugar consumed in a day"),s.a.createElement("ul",null,s.a.createElement("li",null,"For women it is unhealthy to consume 6 teaspoon or more of sugar in a day"),s.a.createElement("li",null,"For men it is unhealthy to consume 9 teaspoon or more of sugar in a day")),s.a.createElement("li",null,"Hours spent in front of a screen"),s.a.createElement("ul",null,s.a.createElement("li",null,"It is unhealthy to spend more than 2 hours in a day staring at electronic screens such as computer monitors, televisions, or cell phones which can be challenging in a world which relies more and more on our devices"))),s.a.createElement("ul",null,s.a.createElement("li",null,"This app was built using ",s.a.createElement("a",{href:"https://reactjs.org/"},"React.js"),", styled with"," ",s.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS")," and hosted via ",s.a.createElement("a",{href:"https://pages.github.com/"},"Github Pages"))))},y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).totalGood=0,t.gender="female",t.goal="lose",t.cupsOfWater="",t.hoursOfSleep="",t.dailyCalories="",t.bmi="",t.bmiMessage="",t.minutesOfExcercise="",t.teaspoonsOfSugar="",t.sodiumMilligrams="",t.screenTime="",t.goalsMet="",t.overallHeathMessage="",t.state={age:"",cupsOfWater:"",hoursOfSleep:"",dailyCalories:"",height:"",weight:"",minutesOfExcercise:"",sodiumMilligrams:"",teaspoonsOfSugar:"",screenTime:""},t.updateAge=t.updateAge.bind(Object(h.a)(Object(h.a)(t))),t.updateWater=t.updateWater.bind(Object(h.a)(Object(h.a)(t))),t.updateSleep=t.updateSleep.bind(Object(h.a)(Object(h.a)(t))),t.updateCalories=t.updateCalories.bind(Object(h.a)(Object(h.a)(t))),t.updateHeight=t.updateHeight.bind(Object(h.a)(Object(h.a)(t))),t.updateWeight=t.updateWeight.bind(Object(h.a)(Object(h.a)(t))),t.updateExcercise=t.updateExcercise.bind(Object(h.a)(Object(h.a)(t))),t.updateMilligrams=t.updateMilligrams.bind(Object(h.a)(Object(h.a)(t))),t.updateSugar=t.updateSugar.bind(Object(h.a)(Object(h.a)(t))),t.updateScreenTime=t.updateScreenTime.bind(Object(h.a)(Object(h.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(Object(h.a)(t))),t.handleClear=t.handleClear.bind(Object(h.a)(Object(h.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"setGender",value:function(e){this.gender=e.target.value}},{key:"setGoal",value:function(e){this.goal=e.target.value}},{key:"updateWater",value:function(e){this.setState({cupsOfWater:e.target.value})}},{key:"updateSleep",value:function(e){this.setState({hoursOfSleep:e.target.value})}},{key:"updateCalories",value:function(e){this.setState({dailyCalories:e.target.value})}},{key:"updateHeight",value:function(e){this.setState({height:e.target.value})}},{key:"updateWeight",value:function(e){this.setState({weight:e.target.value})}},{key:"updateExcercise",value:function(e){this.setState({minutesOfExcercise:e.target.value})}},{key:"updateMilligrams",value:function(e){this.setState({sodiumMilligrams:e.target.value})}},{key:"updateSugar",value:function(e){this.setState({teaspoonsOfSugar:e.target.value})}},{key:"updateScreenTime",value:function(e){this.setState({screenTime:e.target.value})}},{key:"updateAge",value:function(e){this.setState({age:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.totalGood=0,this.goalsMet="Goals Met",this.forceUpdate(),this.state.cupsOfWater>=d.min&&this.state.cupsOfWater<d.max?(this.cupsOfWater="GOAL MET: "+this.state.cupsOfWater+" Cups is healthy",this.totalGood++):this.state.cupsOfWater>=d.max?this.cupsOfWater="GOAL NOT MET: "+this.state.cupsOfWater+" Cups is too much":this.cupsOfWater="GOAL NOT MET: "+this.state.cupsOfWater+" Cup(s) is not enough",this.state.hoursOfSleep>=g.min&&this.state.hoursOfSleep<=g.max?(this.hoursOfSleep="GOAL MET: "+this.state.hoursOfSleep+" Hrs. is healthy",this.totalGood++):this.state.hoursOfSleep>g.max?this.hoursOfSleep="GOAL NOT MET: "+this.state.hoursOfSleep+" Hrs. is too much":this.hoursOfSleep="GOAL NOT MET: "+this.state.hoursOfSleep+" Hour(s) is not enough";var a=0;"female"===this.gender?(a=4.536*this.state.weight+15.88*this.state.height-5*this.state.age-161,console.log("F BMR -> "+a)):(a=4.536*this.state.weight+15.88*this.state.height-5*this.state.age+5,console.log("M BMR -> "+a));var t=this.state.dailyCalories-a;"lose"===this.goal&&(console.log("Goal Lose Weight"),0===t&&(this.dailyCalories="GOAL NOT MET: you are on track to maintain weight"),t>0&&(this.dailyCalories="GOAL NOT MET: you are on track to gain weight"),t<0&&(this.dailyCalories="GOAL MET: you are on track to lose weight",this.totalGood++)),"maintain"===this.goal&&(console.log("Goal Maintain Weight"),0===t&&(this.dailyCalories="GOAL MET: you are on track to maintain weight",this.totalGood++),t>0&&(this.dailyCalories="GOAL NOT MET: you are on track to gain weight"),t<0&&(this.dailyCalories="GOAL NOT MET: you are on track to lose weight")),"gain"===this.goal&&(console.log("Goal: Gain Weight"),0===t&&(this.dailyCalories="GOAL MET: you are on track to maintain weight"),t>0&&(this.dailyCalories="GOAL MET: you are on track to gain weight",this.totalGood++),t<0&&(this.dailyCalories="GOAL NOT MET: you are on track to lose weight")),this.dailyCalories=this.dailyCalories+" ("+this.state.dailyCalories+"cal consumed)-( "+a+"cal bmr ) = "+t.toFixed(2)+"cal";var l=this.state.weight/Math.pow(this.state.height,2)*703;switch(this.bmi=l.toFixed(2),!0){case this.bmi>=p.obese:this.bmiMessage="GOAL NOT MET: A BMI of "+this.bmi+" is considered obese";break;case this.bmi<p.obese&&this.bmi>=p.overweight:this.bmiMessage="GOAL NOT MET: A BMI of "+this.bmi+" is considered overweight";break;case this.bmi<p.overweight&&this.bmi>=p.normal:this.bmiMessage="GOAL MET: A BMI of "+this.bmi+" is considered healthy",this.totalGood++;break;case this.bmi<p.normal:this.bmiMessage="GOAL NOT MET: A BMI of "+this.bmi+" is considered underweight"}this.state.sodiumMilligrams>=E.limit?this.sodiumMilligrams="GOAL NOT MET: "+this.state.sodiumMilligrams+"mg of sodium is too much.":(this.sodiumMilligrams="GOAL MET: "+this.state.sodiumMilligrams+"mg of sodium is healthy.",this.totalGood++),"female"===this.gender?this.state.teaspoonsOfSugar>=b.femaleLimit?this.teaspoonsOfSugar="GOAL NOT MET: "+this.state.teaspoonsOfSugar+" tsp is too much.":(this.teaspoonsOfSugar="GOAL MET: "+this.state.teaspoonsOfSugar+" tsp is healthy",this.totalGood++):this.state.teaspoonsOfSugar>=b.maleLimit?this.teaspoonsOfSugar="GOAL NOT MET: "+this.state.teaspoonsOfSugar+" tsp is too much.":(this.teaspoonsOfSugar="GOAL MET: "+this.state.teaspoonsOfSugar+" tsp is healthy",this.totalGood++),this.state.screenTime>f.limit?this.screenTime="GOAL NOT MET: "+this.state.screenTime+" hrs. is too much":(this.screenTime="GOAL MET: "+this.state.screenTime+" hrs. is healthy",this.totalGood++),this.totalGood>=6?this.overallHeathMessage="You're in good health, Good job!":this.totalGood<6&&this.totalGood>3?this.overallHeathMessage="You're in ok health, Look below for information on how to do better":this.overallHeathMessage="Your health may not be very good, look for information below on how to do better and consider changing your habits!"}},{key:"handleClear",value:function(){console.log("Clearing"),this.cupsOfWater="",this.hoursOfSleep="",this.dailyCalories="",this.bmi="",this.bmiMessage="",this.minutesOfExcercise="",this.teaspoonsOfSugar="",this.sodiumMilligrams="",this.screenTime="",this.goalsMet="",this.overallHeathMessage="",this.totalGood=0,this.setState({cupsOfWater:"",hoursOfSleep:"",dailyCalories:"",height:"",weight:"",minutesOfExcercise:"",sodiumMilligrams:"",teaspoonsOfSugar:"",screenTime:"",age:""}),this.forceUpdate()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("h1",null,"Health Snapshot"),s.a.createElement("hr",{className:"sep"}),s.a.createElement("h5",null,"Enter Information Below to help determine what daily habits may say about your health and goals. Your total number of healthy items will be displayed out of 7"),s.a.createElement("h5",null,"To Find out How your health snapshot is calculated including which fomulas are used and what healthy ranges are read the information located below the form"),s.a.createElement("br",null),s.a.createElement("h3",null,this.totalGood+" / 7 "+this.goalsMet),s.a.createElement("h4",null,this.overallHeathMessage),s.a.createElement("hr",{className:"sep"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("div",{className:"row",onChange:this.setGender.bind(this)},s.a.createElement("input",{className:"rb",defaultChecked:!0,type:"radio",value:"female",name:"gender"}),s.a.createElement("span",{className:"inputText"},"Female"),s.a.createElement("input",{className:"rb",type:"radio",value:"male",name:"gender"}),s.a.createElement("span",{className:"inputText"},"Male"),s.a.createElement("br",null),s.a.createElement("label",null,"Gender"))),s.a.createElement("div",{className:"group output ag e"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",className:"half",type:"number",value:this.state.age,onChange:this.updateAge,min:"0"}),s.a.createElement("span",{className:"highlight half"}),s.a.createElement("span",{className:"halfbar"}),s.a.createElement("label",null,"Age")))),s.a.createElement("div",{className:"group"},s.a.createElement("div",{className:"row",onChange:this.setGoal.bind(this)},s.a.createElement("input",{className:"rb",defaultChecked:!0,type:"radio",value:"lose",name:"goal"}),s.a.createElement("span",{className:"inputText"},"Lose Weight"),s.a.createElement("input",{className:"rb",type:"radio",value:"maintain",name:"goal"}),s.a.createElement("span",{className:"inputText"},"Maintain Weight"),s.a.createElement("input",{className:"rb",type:"radio",value:"male",name:"goal"}),s.a.createElement("span",{className:"inputText"},"Gain Weight"),s.a.createElement("br",null),s.a.createElement("label",null,"Goal"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.cupsOfWater,onChange:this.updateWater,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Cups of Water per Day")),s.a.createElement("div",{className:"group output",id:"water"},s.a.createElement("p",null,this.cupsOfWater),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.hoursOfSleep,onChange:this.updateSleep,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Hrs. of Sleep")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.hoursOfSleep),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.dailyCalories,onChange:this.updateCalories,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Calories Consumed per Day")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.dailyCalories),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",className:"half",type:"number",value:this.state.height,onChange:this.updateHeight,min:"0"}),s.a.createElement("span",{className:"highlight half"}),s.a.createElement("span",{className:"halfbar"}),s.a.createElement("label",null,"Height (in.)")),s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",className:"half",type:"number",value:this.state.weight,onChange:this.updateWeight,min:"0"}),s.a.createElement("span",{className:"highlight half"}),s.a.createElement("span",{className:"halfbar"}),s.a.createElement("label",null,"Weight (lbs.)")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.bmiMessage),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.sodiumMilligrams,onChange:this.updateMilligrams,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Milligrams of Sodium per Day")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.sodiumMilligrams),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.teaspoonsOfSugar,onChange:this.updateSugar,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Tsp of Sugar per Day")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.teaspoonsOfSugar),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"group"},s.a.createElement("input",{required:"required",type:"number",value:this.state.screenTime,onChange:this.updateScreenTime,min:"0"}),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}),s.a.createElement("label",null,"Hrs. of Screen Time per Day")),s.a.createElement("div",{className:"group output"},s.a.createElement("p",null,this.screenTime),s.a.createElement("span",{className:"highlight"}),s.a.createElement("span",{className:"bar"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"btn-box"},s.a.createElement("button",{className:"btn",onClick:this.handleClear},"clear"),s.a.createElement("button",{className:"btn btn-submit",type:"submit"},"submit")))),s.a.createElement(O,null)))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.3e37e6a3.chunk.js.map