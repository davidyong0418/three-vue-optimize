(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22615d"],{e6c9:function(e,o,a){"use strict";a.r(o);var t=a("5a89"),n=a("993b"),i=a("db49"),r=a("643b");a("cffa");o["default"]={render:function(){},created:function(){var e=new n["a"],o=(new r["a"],800),a=i["a"].totalTimelineDuration+3e3,s=-a/2,d=4,w=new t["MeshPhongMaterial"]({color:3685445,shininess:0,dithering:!0}),c=new t["PlaneBufferGeometry"](o+2*d,a,8,8),h=new t["Mesh"](c,w);h.position.z=s,h.rotation.x=-Math.PI/2,e.add(h);for(var l=new t["MeshBasicMaterial"]({color:16777215}),M=new t["PlaneBufferGeometry"](10,200,4,4),p=new t["Mesh"](M,l),f=300,u=0;u<100;u++){var P=p.clone();P.position.set(-393,1,-200*u),P.rotation.x=-Math.PI/2,e.add(P);var v=p.clone();v.position.set(-110,1,-f*u),v.rotation.x=-Math.PI/2,e.add(v);var I=p.clone();I.position.set(110,1,-f*u),I.rotation.x=-Math.PI/2,e.add(I);var B=p.clone();B.position.set(393,1,-200*u),B.rotation.x=-Math.PI/2,e.add(B)}var b=1e3,x=20,m=new t["MeshBasicMaterial"]({color:3267259}),y=new t["BoxBufferGeometry"](b,x,a,8,8),G=new t["Mesh"](y,m),k=G.clone();G.position.set(-(o/2+d+b/2),x/2,s),k.position.set(o/2+d+b/2,x/2,s),e.add(G),e.add(k);var S=new t["MeshBasicMaterial"]({color:44969,side:t["DoubleSide"]}),g=new t["PlaneBufferGeometry"](x,a,4,4),D=window.paveSideL=new t["Mesh"](g,S),J=window.paveSideR=D.clone();D.rotation.set(-Math.PI/2,-Math.PI/2,0),J.rotation.set(-Math.PI/2,-Math.PI/2,0),D.position.set(-(o/2+d-3),x/2,s),J.position.set(o/2+d-3,x/2,s),e.add(D),e.add(J)}}}}]);