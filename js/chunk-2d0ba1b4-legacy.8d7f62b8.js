(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba1b4"],{3694:function(e,t,a){"use strict";a.r(t);a("c5f6");var o=a("5a89"),n=(a("74b5"),a("31c8")),i=a("993b");t["default"]={props:{objUrl:{type:String,required:!0},textureUrl:{type:String,required:!0},name:{type:String,default:"icon"},x:{type:Number,default:0},y:{type:Number,default:0},gap:{type:Number,default:0},color:{type:Number,default:16777215},scale:{type:Number,default:.06}},created:function(){var e=this,t=new i["a"],a=function(e){if(e.lengthComputable)e.loaded,e.total},r=o["ImageUtils"].loadTexture(this.textureUrl),l=new n["OBJLoader2"];l.setMaterials({default:new o["MeshPhongMaterial"]({color:16777215,dithering:!0,shininess:10}),lampost:new o["MeshPhongMaterial"]({map:r,shininess:30})}),l.load(this.objUrl,function(a){var o=window.lamp=a.detail.loaderRootNode;o.scale.setScalar(e.scale),o.position.x=e.x,o.position.y=e.y;for(var n=0;n<17;n++){var i=window["lamp".concat(n)]=o.clone();i.position.z=e.gap*n,t.add(i);var r=o.clone();r.position.z=e.gap*n-e.gap/2,r.position.x=-1*e.x,t.add(r)}},a)},render:function(){}}}}]);