(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Chandler.9a6671f4.png"},function(e,t,a){e.exports=a.p+"static/media/Gunther.da8a201d.png"},function(e,t,a){e.exports=a.p+"static/media/Jack Geller.33fa83ee.png"},function(e,t,a){e.exports=a.p+"static/media/Janice.4a0f7b92.png"},function(e,t,a){e.exports=a.p+"static/media/Joey.c5e4e7a7.png"},function(e,t,a){e.exports=a.p+"static/media/Judy Geller.4e606f05.png"},function(e,t,a){e.exports=a.p+"static/media/Monica.66a1138a.png"},function(e,t,a){e.exports=a.p+"static/media/Paul.c69b5578.png"},function(e,t,a){e.exports=a.p+"static/media/Phoebe.0efce8e9.png"},function(e,t,a){e.exports=a.p+"static/media/Rachel.7d9f9879.png"},function(e,t,a){e.exports=a.p+"static/media/Ross.bede4385.png"},function(e,t,a){e.exports=a.p+"static/media/Gary.08409079.png"},,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),i=a(4),o=a(5),l=a(19),u=a(6),h=a(1),f=a(20),p=(a(27),function(e){return c.a.createElement("div",{className:"nav "},c.a.createElement("div",null,"Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score:"," ",e.highScore))}),m=(a(28),a(29),function(e){return c.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),d=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map(function(t,a){return c.a.createElement(m,{name:t,key:a,clickEvent:e.clickEvent})}))},g=(a(30),function(){return c.a.createElement("div",{className:"footer text-center"},"React Cliky Game")}),v=(a(31),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but do not click on any more than once!"))}),k=a(7),C=a.n(k),E=a(8),x=a.n(E),y=a(9),b=a.n(y),M=a(10),w=a.n(M),S=a(11),j=a.n(S),N=a(12),G=a.n(N),J=a(13),O=a.n(J),A=a(14),R=a.n(A),I=a(15),P=a.n(I),B=a(16),H=a.n(B),T=a(17),Y=a.n(T),q=a(18),z=a.n(q),D=[C.a,x.a,b.a,w.a,j.a,G.a,O.a,R.a,H.a,P.a,Y.a,z.a],F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click an image to begin!",allCharacters:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=D.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,r=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===r?(c++,r++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:r,navMsgColor:"incorrect",navMessage:"Incorrect guess!",allCharacters:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:r,navMsgColor:"correct",navMessage:"You Guessed Correctly!",allCharacters:n,wasClicked:a,shake:!1}),setTimeout(function(){return t.setState({navMsgColor:""})},500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(p,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(v,null),c.a.createElement(d,{shake:e.shake,characters:e.allCharacters,clickEvent:this.clickEvent}),c.a.createElement(g,null))}}]),t}(n.Component);a(32);s.a.render(c.a.createElement(F,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ed67adfd.chunk.js.map