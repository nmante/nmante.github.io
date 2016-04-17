!function(){"use strict";angular.module("nii-website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"}];this.getTec=t}angular.module("nii-website").service("webDevTec",t)}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"PROXEE",tags:["iOS","mobile"],description:"An iOS app for helping people find apartments and roommates",url:"",logo:"proxee.png"},{title:"DEDUP",tags:["Python","Algorithms"],description:"A multiprocess python program for de-duplicating images",url:"",logo:"dedup-architecture-preview.tiff"},{title:"MEGA",tags:["HTML","CSS","JavaScript","Web"],description:"A mockup website for the Minority Engineering Graduate Association",url:"",logo:"mega-web.tiff"},{title:"LIL TRON",tags:["AngularJS","NodeJS","Python","AWS"],description:"An artificially intelligent rap lyric bot",url:"",logo:"liltron-iphone.tiff"},{title:"OLTS",tags:["C++","Computer Vision","Algorithms"],description:"A real time object tracking program for the visually impaired",url:"",logo:"terminal_icon.png"},{title:"VISOR.AI",tags:["Deep Learning","Algorithms","Computer Vision","Lua","Torch"],description:"A deep learning program for recognizing grocery store items in real time",url:"",logo:"neural-net.png"}];this.getProjects=t}angular.module("nii-website").service("projectService",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("nii-website").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,a,i,o){var n,r=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),n=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){n()})}function a(t,e){function a(){return i().then(function(){t.info("Activated Contributors View")})}function i(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return i}t.$inject=["malarkey"],angular.module("nii-website").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function a(a){function o(t){return t.data}function n(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(i+"/contributors?per_page="+a).then(o)["catch"](n)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:i,getContributors:a};return o}t.$inject=["$log","$http"],angular.module("nii-website").factory("githubContributor",t)}(),function(){"use strict";function t(t){}t.$inject=["$timeout"],angular.module("nii-website").controller("ProjectsController",t)}(),function(){"use strict";function t(t,e,a,i){function o(){r(),t(function(){l.classAnimation="rubberBand"},4e3)}function n(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){angular.forEach(l.awesomeThings,function(t){t.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1460721166629,l.showToastr=n,l.abouts=[{img:"Multiple-Devices-50.png",alt:"mobile-web",title:"FRONT END",text:"I love spending my spare time building iOS apps and websites."},{img:"Cloud-50.png",alt:"algos",title:"BACK END",text:"I've written NodeJS, Python, or even deep learning and computer vision programs."},{img:"Airport-50.png",alt:"travel",title:"TRAVELER",text:"Traveling is a passion of mine! I've visited Europe, Africa, South America and I hope to add more to the list soon."},{img:"Football-50.png",alt:"sports",title:"SPORTS",text:"I absolutely love to compete. When I'm not coding, you can find me playing soccer or even basketball."}],l.projects=a.getProjects();for(var s=0;s<l.projects.length;s++)for(var c="",u=l.projects[s].tags,p=0;p<u.length;p++)c+="<a ng-src=''>"+u[p]+"</a>",p!=u.length-1&&(c+=", "),l.projects[s].tagline=c;l.socials=[{name:"Github",id:"social-icon",link:"http://www.github.com/nmante",icon:"fa fa-github"},{name:"Twitter",id:"social-icon",link:"http://www.twitter.com/niimante",icon:"fa fa-twitter"},{name:"LinkedIn","class":"social-icon",link:"https://www.linkedin.com/pub/nii-mante/45/a27/6a4",icon:"fa fa-linkedin"}],o()}t.$inject=["$timeout","webDevTec","projectService","toastr"],angular.module("nii-website").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("nii-website").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("projects",{url:"/projects",templateUrl:"app/projects/projects.html",controller:"ProjectsController",controllerAs:"projects"}).state("blog",{url:"/blog",templateUrl:"app/blog/blog.html",controller:"BlogController",controllerAs:"blog"}).state("resume",{url:"/resume",templateUrl:"app/resume/resume.html",controller:"ResumeController",controllerAs:"resume"}).state("contact",{}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("nii-website").config(t)}(),function(){"use strict";angular.module("nii-website").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("nii-website").config(t)}(),angular.module("nii-website").run(["$templateCache",function(t){t.put("app/blog/blog.html",""),t.put("app/main/main.html",'<div id=masthead class="jumbotron vertical-center text-center"><div class=container><h1 class="wow fadeInDown">NII MANTE</h1><p class="lead wow fadeInDown"><!-- <img src="assets/images/nii_profile.jpg" alt="I\'m Yeoman"><br> --> Full Stack Software Engineer</p><h4 class="socials wow fadeInUp"><span ng-repeat="social in main.socials"><!-- class="wow fadeInRight"  --> <a href={{social.link}} target=_blank><i class={{social.icon}}></i></a></span></h4></div></div><div class=container-fluid><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div id=about class="row text-center"><br><br><h3>ABOUT NII</h3><div class="col-sm-2 col-xs-1 col-md-3 col-lg-3"></div><div class="col-sm-8 col-xs-10 col-md-6 col-lg-6 text-justify"><br><p>I\'m a PhD candidate at the University of Southern California. I graduated from the University of Maryland in 2010 with a BS in Bioengineering. I\'ll be graduating from USC in 2016 with an MS in Computer Science and PhD in Biomedical Engineering.</p><br><br><br></div><div class="col-sm-2 col-xs-1 col-md-3 col-lg-3"></div><br><br><br><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center wow fadeInUp" ng-repeat="about in main.abouts"><img ng-src=assets/images/{{about.img}} alt="{{ about.alt }}"><br><br><p class=lead>{{ about.title }}</p><p class=about-col>{{ about.text }}</p><br><br><br></div></div><div id=projects class="row text-center wow fadeInUp"><br><br><h3>PROJECTS</h3><br><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" ng-repeat="project in main.projects"><div class=thumbnail><div class="col-xs-3 col-sm-3 col-md-4 col-lg-4"><br><img class=pull-left ng-src="assets/images/{{ project.logo }}" alt="{{ project.title }}"></div><div class="col-xs-9 col-sm-9 col-md-8 col-lg-8"><div class="caption text-left"><h3 class=lead>{{ project.title }}</h3><p>{{ project.description }} <a ng-href={{project.url}}>...more</a></p><span></span><p><i class="fa fa-tags" aria-hidden=true></i> <span ng-bind-html=project.tagline></span></p></div></div></div></div></div><div id=contact class=row><br><br><br><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><h3 style="color: #fff" class=text-center>CONTACT NII</h3><p class=lead>Feel free to contact me about business, or coding</p><br></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><p class=lead><i class="fa fa-user" aria-hidden=true></i> NII MANTE</p><p class=lead><i class="fa fa-location-arrow" aria-hidden=true></i> LOS ANGELES, CA</p><p class=lead><i class="fa fa-envelope" aria-hidden=true></i> <a href=mailto:nii@niimante.com>NII@NIIMANTE.COM</a></p><br><br><br></div></div><div id=social class=row><!--  social icons --><div class="socials col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center" ng-repeat="social in main.socials"><br><a href={{social.link}} target=_blank><i class="{{social.icon}} social-icon"></i></a><br><br></div></div></div>'),t.put("app/projects/projects.html",""),t.put("app/resume/resume.html",""),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default navbar-fixed-top wow slideInDown"><div class=container><div class=navbar-header><a class=navbar-brand href=/ >NM </a><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class="collapse navbar-collapse" id=navbar><ul class="nav navbar-nav navbar-right"><li class=active><a ng-href=/ >Home</a></li><!-- <li><a ng-href="#about">About</a></li>\n        <li><a ng-href="/projects">Projects</a></li>\n        <li><a ng-href="#contact">Contact</a></li>\n        <li><a ng-href="/blog">Blog</a></li>\n        <li><a ng-href="/resume">Resume</a></li> --></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-299592e360.js.map
