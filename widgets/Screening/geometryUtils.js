// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/webMercatorUtils dojo/Deferred dojo/_base/array dojo/_base/lang esri/geometry/geometryEngine esri/SpatialReference esri/geometry/scaleUtils".split(" "),function(C,z,A,w,D,E,B,k,t,F){var l={getProjectedGeometry:function(b,a,c){var d=new D;if(w.canProject(b,a)){var f=w.project(b,a);d.resolve(f)}else c.project([b],a,function(e){f=e[0];d.resolve(f)});return d.promise},getDestinationPoint:function(b,a,c){var d=b.x*Math.PI/
180,f=a*Math.PI/180;a=Math.sin(f);f=Math.cos(f);var e=.9966471893352243*Math.tan(b.y*Math.PI/180);b=1/Math.sqrt(1+e*e);var h=e*b,p=Math.atan2(e,f);e=b*a;var n=1-e*e,g=2.7233160610984375E11*n/4.040829998465916E13,u=1+g/16384*(4096+g*(-768+g*(320-175*g))),x=g/1024*(256+g*(-128+g*(74-47*g))),q=c/(6356752.314245*u),v=0;do{g=Math.cos(2*p+q);var m=Math.sin(q);var r=Math.cos(q);var y=x*m*(g+x/4*(r*(-1+2*g*g)-x/6*g*(-3+4*m*m)*(-3+4*g*g)));var G=q;q=c/(6356752.314245*u)+y}while(1E-12<Math.abs(q-G)&&200>++v);
if(200<=v)return console.error("Formula failed to converge"),null;c=h*m-b*r*f;c=Math.atan2(h*r+b*m*f,.9966471893352243*Math.sqrt(e*e+c*c));n=2.0955066654848088E-4*n*(4+.003352810664775694*(4-3*n));d=(d+(Math.atan2(m*a,b*r-h*m*f)-.003352810664775694*(1-n)*e*(q+n*m*(g+n*r*(-1+2*g*g))))+3*Math.PI)%(2*Math.PI)-Math.PI;c=180*c/Math.PI;d=180*d/Math.PI;return new C(d,c,new t(4326))},getInverseCalculations:function(b,a){var c=a.x*Math.PI/180-b.x*Math.PI/180,d=.9966471893352243*Math.tan(b.y*Math.PI/180);b=
1/Math.sqrt(1+d*d);d*=b;var f=.9966471893352243*Math.tan(a.y*Math.PI/180);a=1/Math.sqrt(1+f*f);f*=a;var e=c,h=0;do{var p=Math.sin(e);var n=Math.cos(e);var g=a*p*a*p+(b*f-d*a*n)*(b*f-d*a*n);g=Math.sqrt(g);if(0==g)return 0;var u=d*f+b*a*n;var x=Math.atan2(g,u);var q=b*a*p/g;var v=1-q*q;var m=u-2*d*f/v;isNaN(m)&&(m=0);var r=2.0955066654848088E-4*v*(4+.003352810664775694*(4-3*v));var y=e;e=c+.003352810664775694*(1-r)*q*(x+r*g*(m+r*u*(-1+2*m*m)))}while(1E-12<Math.abs(e-y)&&200>++h);if(200<=h)return null;
e=2.7233160610984375E11*v/4.040829998465916E13;h=e/1024*(256+e*(-128+e*(74-47*e)));c=Math.atan2(a*p,b*f-d*a*n);b=Math.atan2(b*p,-d*a+b*f*n);c=(c+2*Math.PI)%(2*Math.PI);b=(b+2*Math.PI)%(2*Math.PI);d=Number((6356752.314245*(1+e/16384*(4096+e*(-768+e*(320-175*e))))*(x-h*g*(m+h/4*(u*(-1+2*m*m)-h/6*m*(-3+4*g*g)*(-3+4*m*m))))).toFixed(3));c=180*c/Math.PI;b=180*b/Math.PI;return{distance:d,initialBearing:c,finalBearing:b}},getLineBetweenPoints:function(b){var a,c=[];E.forEach(b,B.hitch(this,function(d){c.push([d.x,
d.y])}));0<c.length&&(a=new z({paths:[c],spatialReference:{wkid:4326}}));return a},getAngleBetweenPoints:function(b,a){b=l.getInverseCalculations(b,a);return null===b?0:b.initialBearing},getDistanceBetweenPoints:function(b,a){b=l.getInverseCalculations(b,a);return null===b?0:b.distance},getLengthOfGeometry:function(b){var a;var c={};(a=k.simplify(b))?b.spatialReference.isWebMercator()||4326===b.spatialReference.wkid?(c.meters=k.geodesicLength(a,"meters"),c.miles=k.geodesicLength(a,"miles"),c.kilometers=
k.geodesicLength(a,"kilometers"),c.feet=k.geodesicLength(a,"feet")):(c.meters=k.planarLength(a,"meters"),c.miles=k.planarLength(a,"miles"),c.kilometers=k.planarLength(a,"kilometers"),c.feet=k.planarLength(a,"feet")):(c.meters=0,c.miles=0,c.kilometers=0,c.feet=0);return c},getAreaOfGeometry:function(b){var a=k.simplify(b);var c={};a?b.spatialReference.isWebMercator()||4326===b.spatialReference.wkid?(c.acres=k.geodesicArea(a,"acres"),c.squareMeters=k.geodesicArea(a,"square-meters"),c.squareFeet=k.geodesicArea(a,
"square-feet"),c.squareUsFeet=k.geodesicArea(a,109406),c.squareKilometer=k.geodesicArea(a,"square-kilometers"),c.hectares=k.geodesicArea(a,"hectares"),c.squareMiles=k.geodesicArea(a,"square-miles")):(c.acres=k.planarArea(a,"acres"),c.squareMeters=k.planarArea(a,"square-meters"),c.squareFeet=k.planarArea(a,"square-feet"),c.squareUsFeet=k.planarArea(a,109406),c.squareKilometer=k.planarArea(a,"square-kilometers"),c.hectares=k.planarArea(a,"hectares"),c.squareMiles=k.planarArea(a,"square-miles")):(c.acres=
0,c.squareMeters=0,c.squareFeet=0,c.squareUsFeet=0,c.squareKilometer=0,c.hectares=0,c.squareMiles=0);return c},getPolyLineFromPaths:function(b){var a;var c=new z(new t({wkid:4326}));for(a=0;a<b.length;a++)c.addPath(b[a]);return c},getPolygonFromPolyLines:function(b,a,c,d){var f,e;var h=[];d=d?new A(new t(d)):new A(new t({wkid:4326}));for(f=0;f<b.length;f++)for(e=0;e<b[f].length;e++)h.push(b[f][e]);a?h.push(B.clone(h[0])):c&&(h[h.length-1][0]=h[0][0],h[h.length-1][1]=h[0][1]);d.isClockwise(h)||h.reverse();
d.addRing(h);return d},getPointsForArc:function(b,a,c,d){var f=[];var e=a-b;a=parseInt(e,10);0>=a&&(a=1);var h=Math.abs(e)/Math.abs(a);if(0<h)for(e=0;e<Math.abs(a)+1;e++){var p=b+h*e;(p=l.getDestinationPoint(c,p,Math.abs(d)))&&f.push(p)}return f},getArcParam:function(b){var a={};0>b.distance?0>b.radius?(a.bearing=b.initBearing+90,a.centerPoint=l.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint),a.endAngle=l.getAngleBetweenPoints(a.centerPoint,
b.chordStartPoint)):(a.bearing=b.initBearing-90,a.centerPoint=l.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint),a.endAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint)):0<b.radius?(a.bearing=b.initBearing+90,a.centerPoint=l.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint),a.endAngle=l.getAngleBetweenPoints(a.centerPoint,
b.chordEndPoint)):(a.bearing=b.initBearing-90,a.centerPoint=l.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint),a.endAngle=l.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint));return a},removeNegativeExponents:function(b){return 1<b.toString().toLowerCase().split("e-").length?0:b},getChordLengthFromArcLength:function(b,a){b=Math.abs(b);var c=Math.PI*Math.abs(a);a=Math.abs(a)*Math.sin(Math.abs(b)/Math.abs(a)/
2);return b<=c?2*a:-2*a},getArcLengthFromChordLength:function(b,a){var c=Math.abs(b);a=Math.abs(a);c=2*Math.asin(c/(2*a))*a;0>b&&(c=2*Math.PI*a-c);return c},chordBearingToTangentBearing:function(b,a,c){var d=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(a));a/=Math.abs(a);b=b+90*a-c/Math.abs(c)*a*d;return l.removeNegativeExponents(0>b?b+360:360<=b?b%360:b)},tangentBearingToChordBearing:function(b,a,c){var d=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(a));a/=Math.abs(a);b=b+90*a-c/Math.abs(c)*a*d;
return l.removeNegativeExponents(0>b?b+360:360<=b?b%360:b)},getUnitValueForSR:function(b){switch(F.getUnitValueForSR(b)){case 1:return"meters";case 111194.87428468118:return"meters";case .3048:return"feet";case .3048006096:case .3048006096012192:return"uSSurveyFeet"}},getRotationAngleBetweenPoints:function(b,a){b=w.project(b,new t(102100));a=w.project(a,new t(102100));var c=a.x-b.x;b=a.y-b.y;a=180*Math.atan2(Math.abs(c),Math.abs(b))/Math.PI;var d=180*Math.atan2(Math.abs(b),Math.abs(c))/Math.PI;c=
l.removeNegativeExponents(c);b=l.removeNegativeExponents(b);a=l.removeNegativeExponents(a);d=l.removeNegativeExponents(d);if(0===b){if(0===c)return 0;if(0<c)return 90;if(0>c)return 270}else if(0<b){if(0===c)return 0;if(0<c)return a;if(0>c)return 270+d}else if(0>b){if(0===c)return 180;if(0<c)return 90+d;if(0>c)return 180+a}},getScaleDistanceBetweenPoints:function(b,a){b=w.project(b,new t(102100));a=w.project(a,new t(102100));b=k.distance(b,a,9001);return l.removeNegativeExponents(b)}};return l});