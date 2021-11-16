// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/LayerList/LayerListView.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-list-operations" role\x3d\'button\' aria-haspopup\x3d\'true\' aria-label\x3d"${nls.tipLayerListOperation}" aria-expanded\x3d"false" tabindex\x3d"0" data-dojo-attach-point\x3d"layerListOperations"\x3e\r\n    \x3c!--div class\x3d"setting-image jimu-icon jimu-icon-setting jimu-state-disabled"\x3e\x3c/div--\x3e\r\n  \x3c/div\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n  \x3cdiv class\x3d"supports-508-node" tabindex\x3d"0" data-dojo-attach-point\x3d"supports508Node"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-construct dojo/on dojo/keys dijit/focus dojo/query jimu/dijit/CheckBox jimu/dijit/DropMenu jimu/dijit/LoadingShelter jimu/utils ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-class dojo/dom-style ./NlsStrings".split(" "),function(B,C,l,t,x,m,q,k,n,v,D,E,F,A,G,H,I,y,r,J){return C([B,H],{templateString:I,_currentSelectedLayerRowNode:null,operationsDropMenu:null,_layerNodeHandles:null,
_layerDomNodeStorage:null,_firstLayerNode:!1,_lastLayerNode:null,_eventHandlers:null,_layerIndexs:null,postMixInProperties:function(){this.inherited(arguments);this.nls=J.value;this._layerDomNodeStorage={};this._eventHandlers=[];this._initLayerIndexs()},postCreate:function(){this.refresh();this._initOperations()},_initLayerIndexs:function(){var a=2;this._layerIndexs={};this.operLayerInfos.traversalAll(l.hitch(this,function(b){this._layerIndexs[b.id]=a++}))},refresh:function(){this._removeLayerNodes();
t.forEach(this.operLayerInfos.getLayerInfoArray(),function(a){this.drawListNode(a,0,this.layerListTable)},this);this.config.showBasemap&&t.forEach(this.operLayerInfos.getBasemapLayerInfoArray(),function(a){this.drawListNode(a,0,this.layerListTable)},this);t.forEach(this.operLayerInfos.getTableInfoArray(),function(a){this.drawListNode(a,0,this.tableListTable)},this);t.forEach(this._eventHandlers,function(a){a.remove&&a.remove()});this._supports508Accessibility()},drawListNode:function(a,b,c,d){if(!this.isLayerHiddenInWidget(a)&&
this.layerFilter.isValidLayerInfo(a)){var e=this._layerDomNodeStorage[a.getObjectId()];(a.isRootLayer()||a.isTable)&&e?(m.place(e.layerTrNode,c,d),m.place(e.layerContentTrNode,c,d)):0===a.newSubLayers.length?(e=this.addLayerNode(a,b,c,d),this.config.showLegend?this.addLegendNode(a,b,e.subNode):(a=v(".showLegend-div",e.layerTrNode)[0])&&y.add(a,"hidden-showLegend-div")):(e=this.addLayerNode(a,b,c,d),t.forEach(a.newSubLayers,l.hitch(this,function(f,g){this.drawListNode(g,f+1,e.subNode)},b)))}},addLayerNode:function(a,
b,c,d){var e=this._layerIndexs[a.id],f,g=a.getRootLayerInfo();this._layerDomNodeStorage[a.getObjectId()]={layerTrNode:null,layerContentTrNode:null,layerNodeEventHandles:[],layerNodeReferredDijits:[],layerInfo:a};var h=m.create("tr",{"class":"jimu-widget-row layer-row layer-tr-node-"+a.id,tabindex:0,"aria-label":(a.isTable?window.jimuNls.common.table:window.jimuNls.common.layer)+" "+a.title,layerTrNodeId:a.id});m.place(h,c,d);this._firstLayerNode||(this._firstLayerNode=h);this._lastLayerNode=h;this._lastLayerInfo=
a;var p=m.create("td",{"class":"col col1"},h);for(f=0;f<b;f++)m.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},p);var u=m.create("div",{"class":"showLegend-div jimu-float-leading ",tabindex:e,role:"button","aria-label":this.nls.expandLayer,"aria-expanded":"false",imageShowLegendDivId:a.id},p);f=m.create("div",{"class":"div-select jimu-float-leading"},p);var z=new D({checked:a.isVisible(),"class":"visible-checkbox-"+a.id});m.place(z.domNode,f);x.setAttr(z.domNode,"tabindex",
e);var w=m.create("div",{"class":"noLegend-div jimu-float-leading"},p);var K=a.isTable?"images/table.png":a.isBasemap()?"images/basemap.png":"images/noLegend.png";m.create("img",{"class":"noLegend-image",src:this.layerListWidget.folderUrl+K,alt:"l"},w);if(a.isTiled||a.isTable)r.set(u,"display","none"),r.set(f,"display","none"),r.set(w,"display","block");a.isBasemap()&&(r.set(u,"display","block"),r.set(f,"display","none"),r.set(w,"display","block"),r.set(w,"width","auto"),r.set(w,"margin-left","2px"));
r.set(p,"width",12*b+40+"px");b=m.create("td",{"class":"col col2"},h);p="";try{a.isInScale()||(p="grayed-title")}catch(L){console.warn(L.message)}w="layer-title-div-"+a.id;m.create("div",{innerHTML:A.sanitizeHTML(a.title),"class":w+" div-content jimu-float-leading "+p},b);p=m.create("td",{"class":"col col3"},h);w=this.hasContentMenu()?"display: block":"display: none";e=m.create("div",{"class":"layers-list-popupMenu-div ",tabindex:e,role:"button","aria-haspopup":"true","aria-expanded":"false","aria-label":this.nls.tipLayerOperation,
style:w},p);p=m.create("tr",{"class":"",layerContentTrNodeId:a.id});m.place(p,c,d);c=m.create("td",{"class":"",colspan:"3"},p);c=m.create("table",{"class":"layer-sub-node",subNodeId:a.id},c);d=this.own(q(b,"click",l.hitch(this,this._onRowTrClick,a,u,h,c)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(u,"click",l.hitch(this,this._onRowTrClick,a,u,h,c)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(z.domNode,"click",l.hitch(this,this._onCkSelectNodeClick,a,z)));this._storeLayerNodeEventHandle(g,
d[0]);d=this.own(q(e,"click",l.hitch(this,this._onPopupMenuClick,a,e,h)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(h,"keydown",l.hitch(this,this._onLayerNodeKey,u,e)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(u,"keydown",l.hitch(this,this._onImageShowLegendKey,a,u,h,c,e)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(f,"keydown",l.hitch(this,this._onCkSelectDivKey,a,z,h)));this._storeLayerNodeEventHandle(g,d[0]);d=this.own(q(e,"keydown",l.hitch(this,this._onPopupMenuNodeKey,
a,e,h,u)));this._storeLayerNodeEventHandle(g,d[0]);this._layerDomNodeStorage[a.getObjectId()].layerTrNode=h;this._layerDomNodeStorage[a.getObjectId()].layerContentTrNode=p;this.layerFilter.isExpanded(a)&&this._foldOrUnfoldLayer(a,!1,u,c);return{layerTrNode:h,subNode:c}},hasContentMenu:function(){var a=!1,b;if(this.config.contextMenu)for(b in this.config.contextMenu)this.config.contextMenu.hasOwnProperty(b)&&"function"!==typeof this.config.contextMenu[b]&&(a=a||this.config.contextMenu[b]);else a=!0;
return a},addLegendNode:function(a,b,c){c=m.create("tr",{"class":"legend-node-tr",tabindex:0},c);m.create("td",{"aria-label":window.jimuNls.common.layer+" "+window.jimuNls.statisticsChart.legend},c);c=m.create("td",{"class":"legend-node-td"},c);try{var d=a.createLegendsNode();r.set(d,"font-size",12*(b+1)+"px");m.place(d,c)}catch(e){console.error(e)}},redrawLegends:function(a){var b=v("div[legendsDivId\x3d'"+a.id+"']",this.layerListTable)[0];b&&(b._legendDijit&&b._legendDijit.destroy&&b._legendDijit.destroy(),
a.drawLegends(b,this.layerListWidget.appConfig.portalUrl))},_storeLayerNodeEventHandle:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeEventHandles.push(b)},_storeLayerNodeDijit:function(a,b){(a=this._layerDomNodeStorage[a.getObjectId()])&&a.layerNodeReferredDijits.push(b)},_clearLayerDomNodeStorage:function(){var a=[];this.operLayerInfos.traversalAll(function(d){a.push(d)});for(var b in this._layerDomNodeStorage)if(this._layerDomNodeStorage.hasOwnProperty(b)&&"function"!==
typeof this._layerDomNodeStorage[b]){var c=t.some(a,function(d){if(d.getObjectId().toString()===b)return!0},this);c||(t.forEach(this._layerDomNodeStorage[b].layerNodeEventHandles,function(d){d.remove()},this),t.forEach(this._layerDomNodeStorage[b].layerNodeReferredDijits,function(d){d.destroy()},this),m.destroy(this._layerDomNodeStorage[b].layerTrNode),m.destroy(this._layerDomNodeStorage[b].layerContentTrNode),delete this._layerDomNodeStorage[b])}},_removeLayerNodes:function(){var a,b;this._clearLayerDomNodeStorage();
for(var c in this._layerDomNodeStorage)this._layerDomNodeStorage.hasOwnProperty(c)&&"function"!==typeof this._layerDomNodeStorage[c]&&(a=this._layerDomNodeStorage[c])&&a.layerInfo&&a.layerInfo.isRootLayer()&&a.layerContentTrNode&&a.layerTrNode&&((b=a.layerTrNode.parentNode)&&b.removeChild(a.layerTrNode),(b=a.layerContentTrNode.parentNode)&&b.removeChild(a.layerContentTrNode))},_foldSwitch:function(a,b,c){return"none"===r.get(c,"display")?this._foldOrUnfoldLayer(a,!1,b,c):this._foldOrUnfoldLayer(a,
!0,b,c)},_foldOrUnfoldLayer:function(a,b,c,d){var e=e?c:v("div[imageShowLegendDivId\x3d'"+a.id+"']",this.layerListTable)[0],f=f?d:v("table[subNodeId\x3d'"+a.id+"']",this.layerListTable)[0];c=null;e&&f&&(b?(r.set(f,"display","none"),y.remove(e,"unfold"),c=!0,x.setAttr(e,"aria-label",this.nls.expandLayer),x.setAttr(e,"aria-expanded","false")):(r.set(f,"display","table"),y.add(e,"unfold"),c=!1,x.setAttr(e,"aria-label",this.nls.collapseLayer),x.setAttr(e,"aria-expanded","true"),a.isLeaf()&&(b=v(".legends-div",
f)[0],e=v(".legends-loading-img",b)[0],b&&e&&a.drawLegends(b,this.layerListWidget.appConfig.portalUrl))));return c},_foldOrUnfoldLayers:function(a,b){t.forEach(a,function(c){this._foldOrUnfoldLayer(c,b)},this)},_onCkSelectNodeClick:function(a,b,c){c.ctrlKey||c.metaKey?a.isRootLayer()?this.turnAllRootLayers(b.checked):this.turnAllSameLevelLayers(a,b.checked):(this.layerListWidget._denyLayerInfosIsVisibleChangedResponseOneTime=!0,a.setTopLayerVisible(b.checked));c.stopPropagation()},_onPopupMenuClick:function(a,
b,c,d){var e=a.getRootLayerInfo(),f=b.popupMenu;if(!f){f=(new G({_layerInfo:a,box:this.layerListWidget.domNode.parentNode,popupMenuNode:b,layerListWidget:this.layerListWidget,_config:this.config})).placeAt(b);b.popupMenu=f;this._storeLayerNodeDijit(e,f);var g=this.own(q(f,"onMenuClick",l.hitch(this,this._onPopupMenuItemClick,a,f)));this._storeLayerNodeEventHandle(e,g[0]);g=this.own(b.popupMenu.on("onOpenMenu",l.hitch(this,this._onPopupMenuOpen,a,b,e)));this._storeLayerNodeEventHandle(e,g[0])}this._changeSelectedLayerRow(c);
f&&"opened"===f.state?f.closeDropMenu():(this._hideCurrentPopupMenu(),f&&(this.currentPopupMenu=f,f.openDropMenu()));this.operationsDropMenu&&"opened"===this.operationsDropMenu.state&&this.operationsDropMenu.closeDropMenu();d.stopPropagation()},_hideCurrentPopupMenu:function(){this.currentPopupMenu&&"opened"===this.currentPopupMenu.state&&this.currentPopupMenu.closeDropMenu()},_onLayerListWidgetPaneClick:function(){this.operationsDropMenu&&this.operationsDropMenu.closeDropMenu()},_onRowTrClick:function(a,
b,c,d,e){this._changeSelectedLayerRow(c);b=this._foldSwitch(a,b,d);c._expanded=!b;if(e.ctrlKey||e.metaKey)a.isRootLayer()?this.foldOrUnfoldAllRootLayers(b):this.foldOrUnfoldSameLevelLayers(a,b)},_changeSelectedLayerRow:function(a){this._currentSelectedLayerRowNode&&this._currentSelectedLayerRowNode===a||(this._currentSelectedLayerRowNode&&y.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),y.add(a,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=a)},_onPopupMenuItemClick:function(a,
b,c,d){d={itemKey:c.key,extraData:d,layerListWidget:this.layerListWidget,layerListView:this};"transparency"===c.key?"none"===r.get(b.transparencyDiv,"display")?b.showTransNode(a.getOpacity(),c):b.hideTransNode():"setVisibilityRange"===c.key?"none"===r.get(b.setVisibilityRangeNode,"display")?b.showSetVisibilityRangeNode(a,c):b.hideSetVisibilityRangeNode():(a=b.popupMenuInfo.onPopupMenuClick(d),a.closeMenu&&b.closeDropMenu())},_exchangeLayerTrNode:function(a,b){a=v("tr[layerTrNodeId\x3d'"+a.id+"']",
this.layerListTable)[0];var c=v("tr[layerTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];b=v("tr[layerContentTrNodeId\x3d'"+b.id+"']",this.layerListTable)[0];a&&c&&b&&(this.layerListTable.removeChild(c),this.layerListTable.insertBefore(c,a),this.layerListTable.removeChild(b),this.layerListTable.insertBefore(b,a))},_getMovedSteps:function(a,b){var c=1,d,e=this.operLayerInfos.getLayerInfoArray();t.forEach(e,function(f,g){a.id===f.id&&(d=g)},this);if("moveup"===b)for(;!e[d].isFirst&&!(d--,!this.isLayerHiddenInWidget(e[d])&&
this.layerFilter.isValidLayerInfo(e[d])||e[d].isFirst);)c++;else for(;!e[d].isLast&&!(d++,!this.isLayerHiddenInWidget(e[d])&&this.layerFilter.isValidLayerInfo(e[d])||e[d].isLast);)c++;return c},moveUpLayer:function(a){var b=this._getMovedSteps(a,"moveup");this.operLayerInfos.moveUpLayer(a,b)},moveDownLayer:function(a){var b=this._getMovedSteps(a,"movedown");this.operLayerInfos.moveDownLayer(a,b)},isLayerHiddenInWidget:function(a){var b=!1,c=a;if(a&&this.config.layerOptions&&void 0!==this.config.layerOptions[a.id])for(;c&&
!(b=b||!this.config.layerOptions[c.id].display);)c=c.parentLayerInfo;else b=!1;return b},isFirstDisplayedLayerInfo:function(a){if(a.isFirst||!a.isRootLayer()||a.isBasemap())var b=!0;else{b=this._getMovedSteps(a,"moveup");var c=this.operLayerInfos.getLayerInfoArray();a=this.operLayerInfos._getTopLayerInfoIndexById(a.id);b=this.isLayerHiddenInWidget(c[a-b])||!this.layerFilter.isValidLayerInfo(c[a-b])?!0:!1}return b},isLastDisplayedLayerInfo:function(a){if(a.isLast||!a.isRootLayer()||a.isBasemap())var b=
!0;else{b=this._getMovedSteps(a,"movedown");var c=this.operLayerInfos.getLayerInfoArray();a=this.operLayerInfos._getTopLayerInfoIndexById(a.id);b=this.isLayerHiddenInWidget(c[a+b])||!this.layerFilter.isValidLayerInfo(c[a+b])?!0:!1}return b},_initOperations:function(){this.operationsDropMenu=(new E({items:[{key:"turnAllLayersOn",label:this.nls.turnAllLayersOn},{key:"turnAllLayersOff",label:this.nls.turnAllLayersOff},{key:"separator"},{key:"expandAllLayers",label:this.nls.expandAllLayers},{key:"collapseAlllayers",
label:this.nls.collapseAlllayers}],box:this.layerListWidget.domNode.parentNode})).placeAt(this.layerListOperations);var a=v("div.jimu-dropmenu \x3e div:first-child",this.layerListOperations)[0];a&&(y.remove(a,["jimu-icon-btn","popup-menu-button"]),y.add(a,["feature-action","icon-operation"]));this.operationsDropMenu.btnNode&&this.own(q(this.operationsDropMenu.btnNode,"click",l.hitch(this,this._onLayerListOperationsClick)));this.own(q(this.operationsDropMenu,"onMenuClick",l.hitch(this,this._onOperationsMenuItemClick)));
this.operationsDropMenuLoading=(new F({hidden:!0})).placeAt(this.operationsDropMenu.domNode);this.own(q(this.layerListOperations,"keydown",l.hitch(this,this._onLayerListOperationsKey)));this.own(q(this.operationsDropMenu,"onOpenMenu",l.hitch(this,this._onOperationsDropMenuOpen)))},_onLayerListOperationsClick:function(){this._hideCurrentPopupMenu()},_onOperationsMenuItemClick:function(a){switch(a.key){case "turnAllLayersOn":this.turnAllRootLayers(!0);break;case "turnAllLayersOff":this.turnAllRootLayers(!1);
break;case "expandAllLayers":this.foldOrUnfoldAllLayers(!1);break;case "collapseAlllayers":this.foldOrUnfoldAllLayers(!0)}},turnAllRootLayers:function(a){var b=this.operLayerInfos.getLayerInfoArray();t.forEach(b,function(c){this.isLayerHiddenInWidget(c)||c.setTopLayerVisible(a)},this)},turnAllSameLevelLayers:function(a,b){var c={},d=a.getRootLayerInfo();d.traversal(l.hitch(this,function(e){e.parentLayerInfo&&e.parentLayerInfo.id===a.parentLayerInfo.id&&!this.isLayerHiddenInWidget(e)?c[e.id]={visible:b}:
c[e.id]={visible:e.isVisible()}}));d.resetLayerObjectVisibility(c)},foldOrUnfoldAllRootLayers:function(a){var b=t.filter(this.operLayerInfos.getLayerInfoArray(),function(c){return!this.isLayerHiddenInWidget(c)},this);this._foldOrUnfoldLayers(b,a)},foldOrUnfoldSameLevelLayers:function(a,b){a.parentLayerInfo&&(a=t.filter(a.parentLayerInfo.getSubLayers(),function(c){return!this.isLayerHiddenInWidget(c)},this),this._foldOrUnfoldLayers(a,b))},foldOrUnfoldAllLayers:function(a){var b=[],c=[];this.operationsDropMenuLoading.show();
this.operLayerInfos.traversal(l.hitch(this,function(f){this.isLayerHiddenInWidget(f)||(f.isRootLayer()?c.push(f):b.push(f))}));b=c.concat(b);var d=0,e=b.length;setTimeout(l.hitch(this,function(){if(d<e){var f=b.slice(d,d+50);this._foldOrUnfoldLayers(f,a);d+=50;setTimeout(l.hitch(this,arguments.callee),60)}else this.operationsDropMenuLoading.hide()}),60)},_supports508Accessibility:function(){if(this._lastLayerNode){var a=q(this.layerListWidget.layerFilter.searchButton,"keydown",l.hitch(this,"_onSearchButtonKey"));
this._eventHandlers.push(a);a=q(this.supports508Node,"focus",l.hitch(this,"_onLastNodeFocus"));this._eventHandlers.push(a);A.initLastFocusNode(this.layerListWidget.domNode,this.supports508Node)}else A.initLastFocusNode(this.layerListWidget.domNode,this.layerListOperations),a=q(this.supports508Node,"focus",l.hitch(this,"_onLastNodeFocus")),this._eventHandlers.push(a)},_onSearchButtonKey:function(a){a.keyCode===k.TAB&&a.shiftKey&&(a.stopPropagation(),a.preventDefault(),this._backToLastNodeFlag=!0)},
_getLastExpandedLayerNode:function(){for(var a=this._lastLayerNode,b=null,c=this._lastLayerInfo;c;){var d=c.parentLayerInfo;if(d){if((b=this._layerDomNodeStorage[d.getObjectId()].layerTrNode)&&b._expanded){a=this._layerDomNodeStorage[c.getObjectId()].layerTrNode;break}}else{a=this._layerDomNodeStorage[c.getObjectId()].layerTrNode;break}c=d}return a},_onLastNodeFocus:function(){if(this._backToLastNodeFlag){var a=this._getLastExpandedLayerNode();a&&n.focus(a);this._backToLastNodeFlag=!1}else n.focus(this.layerListWidget.layerFilter.searchButton)},
_onLastLayerNodeKey:function(a){a.keyCode!==k.TAB||a.shiftKey||(a.stopPropagation(),a.preventDefault(),n.focus(this.layerListWidget.layerFilter.searchButton))},_onLayerNodeKey:function(a,b,c){c.keyCode===k.ENTER&&(c.stopPropagation(),c.preventDefault(),"none"===x.getStyle(a,"display")?n.focus(b):n.focus(a))},_onImageShowLegendKey:function(a,b,c,d,e,f){f.keyCode===k.TAB&&f.stopPropagation();f.keyCode===k.TAB&&f.shiftKey?(f.stopPropagation(),f.preventDefault(),n.focus(e)):f.keyCode===k.ESCAPE?(f.stopPropagation(),
f.preventDefault(),n.focus(c)):f.keyCode===k.ENTER&&(f.stopPropagation(),f.preventDefault(),this._onRowTrClick(a,b,c,d,f))},_onCkSelectDivKey:function(a,b,c,d){d.keyCode===k.TAB&&d.stopPropagation();if(d.keyCode===k.ESCAPE)d.stopPropagation(),d.preventDefault(),n.focus(c);else if(d.keyCode===k.SPACE||d.keyCode===k.ENTER)d.stopPropagation(),d.preventDefault(),b.checked?b.uncheck(!0):b.check(!0),this._onCkSelectNodeClick(a,b,d)},_onPopupMenuNodeKey:function(a,b,c,d,e){e.keyCode===k.TAB&&e.stopPropagation();
if(e.keyCode===k.TAB&&!e.shiftKey)e.stopPropagation(),e.preventDefault(),n.focus(d);else if(e.keyCode===k.ESCAPE)e.stopPropagation(),e.preventDefault(),n.focus(c);else if(e.keyCode===k.ENTER||e.keyCode===k.DOWN_ARROW||e.keyCode===k.UP_ARROW)e.stopPropagation(),e.preventDefault(),this._onPopupMenuClick(a,b,c,e)},_onPopupMenuOpen:function(a,b,c){var d=v(".menu-item",b.popupMenu.dropMenuNode);d=d.filter(function(g){return x.hasClass(g,"menu-item-hidden")?!1:!0});var e=d[0],f=d[d.length-1];d.forEach(function(g,
h){var p=!1,u=!1,z=d[h-1],w=d[h+1];0===h?(n.focus(g),p=!0):h===d.length-1&&(u=!0);g.hasBeenOpened||(h=this.own(q(g,"keydown",l.hitch(this,this._onPopupMenuItemKey,b,z,w,e,f,p,u))),this._storeLayerNodeEventHandle(c,h[0]),g.hasBeenOpened=!0)},this)},_onPopupMenuItemKey:function(a,b,c,d,e,f,g,h){if(h.keyCode===k.DOWN_ARROW)h.stopPropagation(),h.preventDefault(),c&&n.focus(c);else if(h.keyCode===k.UP_ARROW)h.stopPropagation(),h.preventDefault(),b&&n.focus(b);else if(h.keyCode===k.HOME)h.stopPropagation(),
h.preventDefault(),d&&n.focus(d);else if(h.keyCode===k.END)h.stopPropagation(),h.preventDefault(),e&&n.focus(e);else if(h.keyCode===k.ESCAPE||h.keyCode===k.TAB)h.stopPropagation(),h.preventDefault(),n.focus(a),a.popupMenu.closeDropMenu()},_enableNavMode:function(a){a.keyCode!==k.TAB||A.isInNavMode()||x.addClass(document.body,"jimu-nav-mode")},_onLayerListOperationsKey:function(a){a.keyCode===k.ENTER&&this.operationsDropMenu._onBtnClick(a)},_onOperationsDropMenuOpen:function(){var a=v(".menu-item",
this.operationsDropMenu.domNode);a=a.filter(function(d){return x.hasClass(d,"menu-item-hidden")?!1:!0});var b=a[0],c=a[a.length-1];a.forEach(function(d,e){var f=!1,g=!1,h=a[e-1],p=a[e+1];0===e?(n.focus(d),f=!0):e===a.length-1&&(g=!0);d.hasBeenOpened||(this.own(q(d,"keydown",l.hitch(this,this._onLayerListOperationsMenuItemKey,h,p,b,c,f,g))),d.hasBeenOpened=!0)},this)},_onLayerListOperationsMenuItemKey:function(a,b,c,d,e,f,g){if(g.keyCode===k.DOWN_ARROW)g.stopPropagation(),g.preventDefault(),b&&n.focus(b);
else if(g.keyCode===k.UP_ARROW)g.stopPropagation(),g.preventDefault(),a&&n.focus(a);else if(g.keyCode===k.HOME)g.stopPropagation(),g.preventDefault(),c&&n.focus(c);else if(g.keyCode===k.END)g.stopPropagation(),g.preventDefault(),d&&n.focus(d);else if(g.keyCode===k.ESCAPE||g.keyCode===k.TAB)g.stopPropagation(),g.preventDefault(),n.focus(this.layerListOperations),this.operationsDropMenu.closeDropMenu()}})});