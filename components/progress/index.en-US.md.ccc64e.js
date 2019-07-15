(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1608:function(t,e){t.exports={content:["section",["p","Display the current progress of an operation flow."],["h2","When To Use"],["p","If it will take a long time to complete an operation, you can use ",["code","Progress"]," to show the current progress and status."],["ul",["li",["p","When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds."]],["li",["p","When you need to display the completion percentage of an operation."]]]],meta:{category:"Components",type:"Feedback",title:"Progress",filename:"components/progress/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Properties that shared by all types."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","type"],["td","to set the type, options: ",["code","line"]," ",["code","circle"]," ",["code","dashboard"]],["td","string"],["td",["code","line"]],["td"]],["tr",["td","format"],["td","template function of the content"],["td","function(percent, successPercent)"],["td",["code","percent => percent + '%'"]],["td"]],["tr",["td","percent"],["td","to set the completion percentage"],["td","number"],["td","0"],["td"]],["tr",["td","showInfo"],["td","whether to display the progress value and the status icon"],["td","boolean"],["td","true"],["td"]],["tr",["td","status"],["td","to set the status of the Progress, options: ",["code","success"]," ",["code","exception"]," ",["code","normal"]," ",["code","active"],"(line only)"],["td","string"],["td","-"],["td"]],["tr",["td","strokeLinecap"],["td","to set the style of the progress linecap"],["td","Enum{ 'round', 'square' }"],["td",["code","round"]],["td","3.8.0"]],["tr",["td","strokeColor"],["td","color of progress bar"],["td","string"],["td","-"],["td","3.7.0"]],["tr",["td","successPercent"],["td","segmented success percent"],["td","number"],["td","0"],["td","3.2.0"]]]],["h3",["code",'type="line"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","strokeWidth"],["td","to set the width of the progress bar, unit: ",["code","px"]],["td","number"],["td","10"],["td","3.13.1"]],["tr",["td","strokeColor"],["td","color of progress bar, render ",["code","linear-gradient"]," when passing an object"],["td","string ","|"," { from: string; to: string; direction: string }"],["td","-"],["td","3.16.0"]]]],["h3",["code",'type="circle"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","width"],["td","to set the canvas width of the circular progress, unit: ",["code","px"]],["td","number"],["td","132"],["td","3.13.1"]],["tr",["td","strokeWidth"],["td","to set the width of the circular progress, unit: percentage of the canvas width"],["td","number"],["td","6"],["td","3.13.1"]],["tr",["td","strokeColor"],["td","color of circular progress, render ",["code","linear-gradient"]," when passing an object"],["td","string ","|"," object"],["td","-"],["td","3.19.8"]]]],["h3",["code",'type="dashboard"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","width"],["td","to set the canvas width of the dashboard progress, unit: ",["code","px"]],["td","number"],["td","132"],["td","3.13.1"]],["tr",["td","strokeWidth"],["td","to set the width of the dashboard progress, unit: percentage of the canvas width"],["td","number"],["td","6"],["td","3.13.1"]],["tr",["td","gapDegree"],["td","the gap degree of half circle, 0 ~ 360"],["td","number"],["td","0"],["td","3.13.1"]],["tr",["td","gapPosition"],["td","the gap position, options: ",["code","top"]," ",["code","bottom"]," ",["code","left"]," ",["code","right"]],["td","string"],["td",["code","top"]],["td","3.13.1"]]]]]}}}]);