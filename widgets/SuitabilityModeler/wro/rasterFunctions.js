// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
(function(a,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof exports?module.exports=b():a.rasterFunctions=b()})(this,function(){return{createColormapParams:function(a){a||(a={});return{rasterFunction:"Colormap",rasterFunctionArguments:{Raster:a.raster||"$$",Colormap:a.colormap||[]}}},createRemapParams:function(a){a||(a={});return{rasterFunction:"Remap",rasterFunctionArguments:{Raster:a.Raster||"$$",UseTable:!1,InputRanges:a.InputRanges||[],OutputValues:a.OutputValues||[],NoDataRanges:a.NoDataRanges||
[],AllowUnmatched:!0}}},createLocalParams:function(a,b){b||(b={});a={rasterFunction:"Local",rasterFunctionArguments:{Operation:a,ExtentType:0,CellsizeType:1,Rasters:b.rasters||[]}};b.outputPixelType&&(a.outputPixelType=b.outputPixelType);return a},createWeightedSumParams:function(a,b){a=a.map(function(c){var d=this.createRemapParams(c);return this.createLocalParams(3,{rasters:[d,c.weight]})},this);a=this.createLocalParams(55,{rasters:a});a=this.createLocalParams(49,{rasters:[a],outputPixelType:"U8"});
return this.createColormapParams({raster:a,colormap:b})}}});