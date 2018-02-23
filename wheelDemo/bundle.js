(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}
};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter
});}
};__webpack_require__.n=function(module){var getter=module && module.__esModule ?
function getDefault(){return module['default'];}:
function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=61);})
([
(function(module,__webpack_exports__,__webpack_require__){"use strict";const DEG_TO_RAD=0.0174532925199432957,RAD_TO_DEG=57.29577951308232,EPSILON=8.854187817e-12,RGB_TO_DEC=0.00390625;__webpack_exports__["g"]=DEG_TO_RAD;__webpack_exports__["_59"]=RGB_TO_DEC;const SPRITE_DEFAULT_ID=-1;__webpack_exports__["_63"]=SPRITE_DEFAULT_ID;const EGT_NULL=0,EGT_QUAD=1,EGT_SPRITE_SHEET=2,EGT_SCALED_FRAME=3,EGT_MESH_FILE=4,EGT_FONT=5;__webpack_exports__["_20"]=EGT_NULL;__webpack_exports__["_21"]=EGT_QUAD;__webpack_exports__["_23"]=EGT_SPRITE_SHEET;__webpack_exports__["_22"]=EGT_SCALED_FRAME;__webpack_exports__["_19"]=EGT_MESH_FILE;__webpack_exports__["_18"]=EGT_FONT;const EPT_NULL=0,EPT_PERSPECTIVE=1,EPT_ORTHOGRAPHIC=2;__webpack_exports__["_45"]=EPT_PERSPECTIVE;__webpack_exports__["_44"]=EPT_ORTHOGRAPHIC;const EHA_HORZ_LEFT=0,EHA_HORZ_CENTER=1,EHA_HORZ_RIGHT=2;__webpack_exports__["_25"]=EHA_HORZ_LEFT;__webpack_exports__["_24"]=EHA_HORZ_CENTER;__webpack_exports__["_26"]=EHA_HORZ_RIGHT;const EVA_VERT_TOP=0,EVA_VERT_CENTER=1,EVA_VERT_BOTTOM=2;__webpack_exports__["_54"]=EVA_VERT_TOP;__webpack_exports__["_53"]=EVA_VERT_CENTER;__webpack_exports__["_52"]=EVA_VERT_BOTTOM;const CHAR_CODE_SPACE=32,CHAR_CODE_PIPE=124;__webpack_exports__["e"]=CHAR_CODE_SPACE;__webpack_exports__["d"]=CHAR_CODE_PIPE;const EAP_IDLE=0,EAP_DOWN=1,EAP_UP=2;__webpack_exports__["l"]=EAP_IDLE;__webpack_exports__["k"]=EAP_DOWN;__webpack_exports__["m"]=EAP_UP;const DEVICE_NULL=-1,KEYBOARD=0,MOUSE=1,GAMEPAD=2;__webpack_exports__["h"]=DEVICE_NULL;__webpack_exports__["_56"]=KEYBOARD;__webpack_exports__["_57"]=MOUSE;__webpack_exports__["_55"]=GAMEPAD;const TRANSLATE=0x01,ROTATE=0x02,SCALE=0x04,CENTER_POINT=0x08,CROP_OFFSET=0x10;__webpack_exports__["_66"]=TRANSLATE;__webpack_exports__["_60"]=ROTATE;__webpack_exports__["_61"]=SCALE;__webpack_exports__["c"]=CENTER_POINT;__webpack_exports__["f"]=CROP_OFFSET;const TRANSFORM=0x20,WAS_TRANSFORMED=0x40;__webpack_exports__["_65"]=TRANSFORM;__webpack_exports__["_68"]=WAS_TRANSFORMED;const MATRIX_ROTATION=0x80;const VISIBLE=0x100;__webpack_exports__["_67"]=VISIBLE;const SPRITE2D=0x200,ACTOR2D=0x400;__webpack_exports__["_62"]=SPRITE2D;const EGE_MENU_TRANS_IN=100,EGE_MENU_TRANS_OUT=101,EGE_MENU_ESCAPE_ACTION=102,EGE_MENU_TOGGLE_ACTION=103,EGE_MENU_BACK_ACTION=104,EGE_MENU_TO_TREE=105,EGE_MENU_TO_MENU=106,EGE_MENU_GAME_STATE_CHANGE=107,EGE_MENU_UP_ACTION=108,EGE_MENU_DOWN_ACTION=109,EGE_MENU_LEFT_ACTION=110,EGE_MENU_RIGHT_ACTION=111,EGE_MENU_CONTROL_STATE_CHANGE=112,EGE_MENU_SELECT_ACTION=113,EGE_MENU_SELECT_EXECUTE=114,EGE_MENU_SET_ACTIVE_CONTROL=115,EGE_MENU_REACTIVATE=116,EGE_MENU_SCROLL_UP=117,EGE_MENU_SCROLL_DOWN=118,EGE_MENU_SCROLL_LEFT=119,EGE_MENU_SCROLL_RIGHT=120,EGE_MENU_TAB_LEFT=121,EGE_MENU_TAB_RIGHT=122;__webpack_exports__["_15"]=EGE_MENU_TRANS_IN;__webpack_exports__["_16"]=EGE_MENU_TRANS_OUT;__webpack_exports__["Y"]=EGE_MENU_ESCAPE_ACTION;__webpack_exports__["_12"]=EGE_MENU_TOGGLE_ACTION;__webpack_exports__["V"]=EGE_MENU_BACK_ACTION;__webpack_exports__["_14"]=EGE_MENU_TO_TREE;__webpack_exports__["_13"]=EGE_MENU_TO_MENU;__webpack_exports__["Z"]=EGE_MENU_GAME_STATE_CHANGE;__webpack_exports__["_17"]=EGE_MENU_UP_ACTION;__webpack_exports__["X"]=EGE_MENU_DOWN_ACTION;__webpack_exports__["_0"]=EGE_MENU_LEFT_ACTION;__webpack_exports__["_2"]=EGE_MENU_RIGHT_ACTION;__webpack_exports__["W"]=EGE_MENU_CONTROL_STATE_CHANGE;__webpack_exports__["_7"]=EGE_MENU_SELECT_ACTION;__webpack_exports__["_8"]=EGE_MENU_SELECT_EXECUTE;__webpack_exports__["_9"]=EGE_MENU_SET_ACTIVE_CONTROL;__webpack_exports__["_1"]=EGE_MENU_REACTIVATE;__webpack_exports__["_6"]=EGE_MENU_SCROLL_UP;__webpack_exports__["_3"]=EGE_MENU_SCROLL_DOWN;__webpack_exports__["_4"]=EGE_MENU_SCROLL_LEFT;__webpack_exports__["_5"]=EGE_MENU_SCROLL_RIGHT;__webpack_exports__["_10"]=EGE_MENU_TAB_LEFT;__webpack_exports__["_11"]=EGE_MENU_TAB_RIGHT;const ESMA_PRESS_TYPE=0,ESMA_DEVICE_TYPE=1,ESMA_MOUSE_X=2,ESMA_MOUSE_Y=3;__webpack_exports__["_49"]=ESMA_PRESS_TYPE;__webpack_exports__["_46"]=ESMA_DEVICE_TYPE;__webpack_exports__["_47"]=ESMA_MOUSE_X;__webpack_exports__["_48"]=ESMA_MOUSE_Y;const EMSC_STATE=0,EMSC_CONTROL=1;__webpack_exports__["_28"]=EMSC_STATE;__webpack_exports__["_27"]=EMSC_CONTROL;const EMTS_INACTIVE=0,EMTS_IDLE=1,EMTS_ACTIVE=2,EMTS_MAX_MENU_TREE_STATES=3;__webpack_exports__["_37"]=EMTS_IDLE;__webpack_exports__["_36"]=EMTS_ACTIVE;const EMS_INACTIVE=0,EMS_IDLE=1,EMS_ACTIVE=2,EMS_MAX_MENU_STATES=3;__webpack_exports__["_35"]=EMS_INACTIVE;__webpack_exports__["_34"]=EMS_IDLE;__webpack_exports__["_33"]=EMS_ACTIVE;const EMNS_NULL=0,EMNS_MOUSE=1,EMNS_GAMEPAD_KEYBAORD=2;const ETC_RESET=0,ETC_BEGIN=1,ETC_END=2;__webpack_exports__["_50"]=ETC_BEGIN;__webpack_exports__["_51"]=ETC_END;const EAC_NULL=0,EAC_FIRST_ACTIVE_CONTROL=1,EAC_LAST_ACTIVE_CONTROL=2;__webpack_exports__["i"]=EAC_FIRST_ACTIVE_CONTROL;__webpack_exports__["j"]=EAC_LAST_ACTIVE_CONTROL;const EAR_UP=1,EAR_DOWN=2,EAR_LEFT=4,EAR_RIGHT=8;__webpack_exports__["q"]=EAR_UP;__webpack_exports__["n"]=EAR_DOWN;__webpack_exports__["o"]=EAR_LEFT;__webpack_exports__["p"]=EAR_RIGHT;const EDO_NULL=0,EDO_LEFT=1,EDO_RIGHT=2,EDO_HORZ_CENTER=4,EDO_TOP=8,EDO_BOTTOM=16,EDO_VERT_CENTER=32;__webpack_exports__["R"]=EDO_LEFT;__webpack_exports__["S"]=EDO_RIGHT;__webpack_exports__["Q"]=EDO_HORZ_CENTER;__webpack_exports__["T"]=EDO_TOP;__webpack_exports__["P"]=EDO_BOTTOM;__webpack_exports__["U"]=EDO_VERT_CENTER;const ENAV_NODE_UP=0,ENAV_NODE_DOWN=1,ENAV_NODE_LEFT=2,ENAV_NODE_RIGHT=3;__webpack_exports__["_41"]=ENAV_NODE_UP;__webpack_exports__["_38"]=ENAV_NODE_DOWN;__webpack_exports__["_39"]=ENAV_NODE_LEFT;__webpack_exports__["_40"]=ENAV_NODE_RIGHT;const TOGGLE_STATE_ON=true,TOGGLE_STATE_OFF=false;__webpack_exports__["_64"]=TOGGLE_STATE_ON;const NO_ACTIVE_CONTROL=-1;__webpack_exports__["_58"]=NO_ACTIVE_CONTROL;const BTN_DEC=0,BTN_INC=1;__webpack_exports__["a"]=BTN_DEC;__webpack_exports__["b"]=BTN_INC;const ECT_NULL=0,ECT_LABEL=1,ECT_BUTTON=2,ECT_BUTTON_LIST=3,ECT_CHECK_BOX=4,ECT_SLIDER=5,ECT_SCROLL_BOX=6,ECT_SUB_CONTROL=7,ECT_METER=8,ECT_TAB_CONTROL=9,ECT_PROGRESS_BAR=10,ECT_AMOUNT_BUTTON=11;__webpack_exports__["J"]=ECT_LABEL;__webpack_exports__["G"]=ECT_BUTTON;__webpack_exports__["H"]=ECT_BUTTON_LIST;__webpack_exports__["I"]=ECT_CHECK_BOX;__webpack_exports__["N"]=ECT_SLIDER;__webpack_exports__["M"]=ECT_SCROLL_BOX;__webpack_exports__["O"]=ECT_SUB_CONTROL;__webpack_exports__["K"]=ECT_METER;__webpack_exports__["L"]=ECT_PROGRESS_BAR;const ECS_NULL=0,ECS_INIT=1,ECS_DISABLED=2,ECS_INACTIVE=3,ECS_ACTIVE=4,ECS_SELECTED=5;__webpack_exports__["E"]=ECS_NULL;__webpack_exports__["D"]=ECS_INIT;__webpack_exports__["B"]=ECS_DISABLED;__webpack_exports__["C"]=ECS_INACTIVE;__webpack_exports__["A"]=ECS_ACTIVE;__webpack_exports__["F"]=ECS_SELECTED;const ECAT_NULL=0,ECAT_ACTION=1,ECAT_TO_TREE=2,ECAT_TO_MENU=3,ECAT_BACK=4,ECAT_CLOSE=5,ECAT_CHANGE_FOCUS=6,ECAT_GAME_STATE_CHANGE=7,ECAT_QUIT_GAME=8;__webpack_exports__["w"]=ECAT_NULL;__webpack_exports__["r"]=ECAT_ACTION;__webpack_exports__["z"]=ECAT_TO_TREE;__webpack_exports__["y"]=ECAT_TO_MENU;__webpack_exports__["s"]=ECAT_BACK;__webpack_exports__["u"]=ECAT_CLOSE;__webpack_exports__["t"]=ECAT_CHANGE_FOCUS;__webpack_exports__["v"]=ECAT_GAME_STATE_CHANGE;__webpack_exports__["x"]=ECAT_QUIT_GAME;const ECSF_ON_ACTIVE=0,ECSF_ON_SELECTED=1;const EMSF_ON_INIT=0,EMSF_ON_START=1,EMSF_ON_STOP=2,EMSF_ON_CLEAR=3;__webpack_exports__["_30"]=EMSF_ON_INIT;__webpack_exports__["_31"]=EMSF_ON_START;__webpack_exports__["_32"]=EMSF_ON_STOP;__webpack_exports__["_29"]=EMSF_ON_CLEAR;const EO_HORIZONTAL=0,EO_VERTICAL=1;__webpack_exports__["_42"]=EO_HORIZONTAL;__webpack_exports__["_43"]=EO_VERTICAL;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Size
{constructor(w=0,h=0)
{this.w=w;this.h=h;}
copy(obj)
{this.w=obj.w;this.h=obj.h;}
set(w=0,h=0)
{this.w=w;this.h=h;}
reset()
{this.w=0;this.h=0;}
isEmpty()
{if((this.w==0)&&(this.h==0))
return true;return false;}
round()
{this.w=Math.round(this.w);this.h=Math.round(this.h);}
set u(value){this.w=value;}
get u(){return this.w;}
set v(value){this.h=value;}
get v(){return this.h;}
}
__webpack_exports__["a"]=Size;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return device;});__webpack_require__.d(__webpack_exports__,"b",function(){return gl;});var __WEBPACK_IMPORTED_MODULE_0__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__=__webpack_require__(10);class Device
{constructor()
{this.perspectiveMatrix=new __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__["a"];this.orthographicMatrix=new __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__["a"];this.canvas=null;this.glContext=null;this.create();}
create()
{this.canvas=document.getElementById('game-surface');this.glContext=this.canvas.getContext('webgl',{premultipliedAlpha:false,alpha:false,stencil:true,preserveDrawingBuffer:true});if(!this.glContext)
{console.log('WebGL not supported,falling back on experimental-webgl');this.glContext=this.canvas.getContext('experimental-webgl',{premultipliedAlpha:false,alpha:false,stencil:true,preserveDrawingBuffer:true});}
if(!this.glContext)
{alert('Your browser does not support WebGL');}
}
createProjMatrix()
{this.perspectiveMatrix.perspectiveFovRH(
__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].viewAngle,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].screenAspectRatio.w,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].minZdist,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].maxZdist);this.orthographicMatrix.orthographicRH(
__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].defaultSize.w,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].defaultSize.h,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].minZdist,__WEBPACK_IMPORTED_MODULE_0__utilities_settings__["a"].maxZdist);}
}
var device=new Device;var gl=device.glContext;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["b"]=downloadFile;__webpack_exports__["a"]=countStrOccurrence;__webpack_exports__["c"]=modulus;__webpack_exports__["d"]=randomInt;__webpack_exports__["e"]=shuffle;var __WEBPACK_IMPORTED_MODULE_0__managers_signalmanager__=__webpack_require__(23);function downloadFile(fileType,filepath,callback)
{let request=null;if(fileType!=='img')
request=new XMLHttpRequest();if(fileType==='xml')
{request.responseType='document';request.overrideMimeType('text/xml');}
else if(fileType==='txt')
{request.responseType='text';request.overrideMimeType('text/plain');}
else if(fileType==='binary')
{request.responseType='arraybuffer';}
else if(fileType==='img')
{}
if(request)
{request.onreadystatechange=
function()
{if(this.readyState===4)
{if((this.status>=200 && this.status<300)|| this.status===304)
{if(fileType==='xml')
callback(this.responseXML.childNodes[0]);else if(fileType==='txt')
callback(this.responseText);else if(fileType==='binary')
callback(this.response);__WEBPACK_IMPORTED_MODULE_0__managers_signalmanager__["a"].broadcast_loadComplete();}
else
{throw new Error(`HTTP Request failed(${filepath}).`);}
}
}
request.open('GET',filepath+'?please-dont-cache='+Math.random(),true);request.send();}
else
{let image=new Image();image.onload=()=>{callback(image);__WEBPACK_IMPORTED_MODULE_0__managers_signalmanager__["a"].broadcast_loadComplete();}
image.onerror=(event)=>{throw new Error(`Error downloading file(${filepath})!`);}
image.src=filepath;}
}
function countStrOccurrence(searchStr,subStr)
{let result=0;let found=-1;do
{found=searchStr.indexOf(subStr,found+1);if(found!=-1)
++result;}
while(found!=-1);return result;}
function modulus(v1,v2)
{return(v1-v2*Math.floor(v1/v2));}
function randomInt(min,max)
{min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min+1))+min;}
function randomArbitrary(min,max)
{return Math.floor(Math.random()*(max-min))+min;}
function shuffle(array)
{if(array.length>2)
{let currentIndex=array.length,temp,randomIndex;let oldLastElement=array[array.length-1];while(0!==currentIndex)
{randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temp=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temp;}
if(oldLastElement===array[0])
{randomIndex=Math.trunc(array.length/2);array[0]=array[randomIndex];array[randomIndex]=oldLastElement;}
}
}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return objectDataManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__managers_meshmanager__=__webpack_require__(43);var __WEBPACK_IMPORTED_MODULE_3__managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_4__managers_spritesheetmanager__=__webpack_require__(45);var __WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_6__objectdata2d__=__webpack_require__(72);var __WEBPACK_IMPORTED_MODULE_7__objectdata3d__=__webpack_require__(76);var __WEBPACK_IMPORTED_MODULE_8__utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_9__common_defs__=__webpack_require__(0);const LOAD_2D=0;const LOAD_3D=1;class ObjectDataManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.loadType;this.objectDataMapMap=new Map;}
loadXMLGroup2D(groupAry,finishCallback)
{this.loadType=LOAD_2D;super.loadGroup('Object data list',this.objectDataMapMap,groupAry,finishCallback);}
loadXMLGroup3D(groupAry,finishCallback)
{this.loadType=LOAD_3D;super.loadGroup('Object data list',this.objectDataMapMap,groupAry,finishCallback);}
loadFromNode(group,node,filePath,finishCallback)
{let groupMap=this.objectDataMapMap.get(group);let defaultData;if(this.loadType===LOAD_2D)
defaultData=new __WEBPACK_IMPORTED_MODULE_6__objectdata2d__["a"];else
defaultData=new __WEBPACK_IMPORTED_MODULE_7__objectdata3d__["a"];defaultData.loadObjData(node.getElementsByTagName('default')[0],'','');let objNode=node.getElementsByTagName('object');for(let i=0;i<objNode.length;++i)
{let name=objNode[i].getAttribute('name');if(groupMap.get(name)===undefined)
{let objData
if(this.loadType===LOAD_2D)
objData=new __WEBPACK_IMPORTED_MODULE_6__objectdata2d__["a"];else
objData=new __WEBPACK_IMPORTED_MODULE_7__objectdata3d__["a"];objData.copy(defaultData);objData.loadObjData(objNode[i],group,name);groupMap.set(name,objData);}
else
{throw new Error(`Group object already exists(${group},${name})!`);}
}
}
loadTextureGroup2D(groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{let dupPathCheck=[];for(let [key,objData] of groupMap.entries())
{let filePath=objData.visualData.textureFilePath;if(filePath &&(dupPathCheck.indexOf(filePath)===-1))
{dupPathCheck.push(filePath);if(!__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].has(group,filePath))
{this.downloadFile('img',group,filePath,finishCallback,(group,image,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].set(group,filePath,image);__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].load(group,filePath,image);});}
else
{__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].load(group,filePath,__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].get(group,filePath));}
}
}
if(this.loadCounter===0)
finishCallback();}
else
{throw new Error(`Can't create from data because object group does not exist(${group})!`);}
}
}
loadMeshGroup2D(groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{let dupPathCheck=[];for(let [key,objData] of groupMap.entries())
{let filePathAry=[objData.visualData.meshFilePath,objData.visualData.spriteSheetFilePath];for(let i=0;i<filePathAry.length;++i)
{if(filePathAry[i] &&(dupPathCheck.indexOf(filePathAry[i])===-1))
{dupPathCheck.push(filePathAry[i]);if(!__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].has(group,filePathAry[i]))
{this.downloadFile('xml',group,filePathAry[i],finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].set(group,filePath,xmlNode);if(filePath===objData.visualData.spriteSheetFilePath)
__WEBPACK_IMPORTED_MODULE_4__managers_spritesheetmanager__["a"].loadFromNode(filePath,xmlNode);});}
else
{if(filePathAry[i]===objData.visualData.spriteSheetFilePath)
__WEBPACK_IMPORTED_MODULE_4__managers_spritesheetmanager__["a"].loadFromNode(filePathAry[i],__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].get(group,filePathAry[i]));}
}
}
}
if(this.loadCounter===0)
finishCallback();}
else
{throw new Error(`Can't create load mesh data because object group does not exist(${group})!`);}
}
}
loadMeshGroup3D(groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{let dupPathCheck=[];for(let [key,objData] of groupMap.entries())
{let filePath=objData.visualData.meshFilePath;if(filePath &&(dupPathCheck.indexOf(filePath)===-1))
{dupPathCheck.push(filePath);if(!__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].has(group,filePath))
{this.downloadFile('binary',group,filePath,finishCallback,(group,binaryFile,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].set(group,filePath,binaryFile);objData.visualData.meshGrp=
__WEBPACK_IMPORTED_MODULE_2__managers_meshmanager__["a"].load(group,filePath,binaryFile);});}
else
{objData.visualData.meshGrp=
__WEBPACK_IMPORTED_MODULE_2__managers_meshmanager__["a"].load(group,filePath,__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].get(group,filePath));}
}
}
if(this.loadCounter===0)
finishCallback();}
else
{throw new Error(`Can't load mesh data because object group does not exist(${group})!`);}
}
}
loadTextureGroup3D(groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{let dupPathCheck=[];for(let [key,objData] of groupMap.entries())
{let filePath=objData.visualData.meshFilePath;if(filePath &&(dupPathCheck.indexOf(filePath)===-1))
{dupPathCheck.push(filePath);for(let i=0;i<objData.visualData.meshGrp.uniqueTexturePathAry.length;++i)
{filePath=objData.visualData.meshGrp.uniqueTexturePathAry[i].path;if(!__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].has(group,filePath))
{this.downloadFile('img',group,filePath,finishCallback,(group,image,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].set(group,filePath,image);__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].load(group,filePath,image);});}
else
{__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].load(group,filePath,__WEBPACK_IMPORTED_MODULE_5__utilities_assetholder__["a"].get(group,filePath));}
}
}
}
if(this.loadCounter===0)
finishCallback();}
else
{throw new Error(`Can't create from data because object group does not exist(${group})!`);}
}
}
createFromData(groupAry,callback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{for(let [key,objData] of groupMap.entries())
objData.createFromData(group);}
}
callback();}
freeGroup(groupAry)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];if(this.listTableMap.get(group)===undefined)
throw new Error(`Object data list group name can't be found(${group})!`);if(this.objectDataMapMap.has(group))
{__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].deleteGroup(group);__WEBPACK_IMPORTED_MODULE_3__managers_vertexbuffermanager__["a"].deleteGroup(group);__WEBPACK_IMPORTED_MODULE_2__managers_meshmanager__["a"].deleteGroup(group);this.objectDataMapMap.delete(group);}
}
}
getData(group,name)
{let groupMap=this.objectDataMapMap.get(group);if(groupMap!==undefined)
{let objData=groupMap.get(name);if(objData)
return objData;else
throw new Error(`Object data not found(${group},${name})!`);}
else
throw new Error(`Object group not found(${group},${name})!`);return null;}
}
var objectDataManager=new ObjectDataManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return assetHolder;});class AssetHolder
{constructor()
{this.loadMapMap=new Map;}
has(group,name)
{let groupMap=this.loadMapMap.get(group);if(groupMap===undefined)
return false;return groupMap.has(name);}
set(group,name,data=null)
{let groupMap=this.loadMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.loadMapMap.set(group,groupMap);}
groupMap.set(name,data);}
get(group,name)
{let groupMap=this.loadMapMap.get(group);if(groupMap===undefined)
throw new Error(`Group does not exist!(${group}).`);let data=groupMap.get(name);if(data===undefined)
throw new Error(`Data does not exist!(${name}).`);return data;}
deleteGroup(groupAry)
{for(let i=0;i<groupAry.length;++i)
this.loadMapMap.delete(groupAry[i]);}
clear()
{this.loadMapMap=new Map;}
}
var assetHolder=new AssetHolder;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__visualcomponent2d__=__webpack_require__(83);var __WEBPACK_IMPORTED_MODULE_1__physics_physicscomponent2d__=__webpack_require__(84);var __WEBPACK_IMPORTED_MODULE_2__script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_3__script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_4__object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_5__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_6__common_defs__=__webpack_require__(0);class Sprite2D extends __WEBPACK_IMPORTED_MODULE_4__object2d__["a"]
{constructor(objData,id=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_63"])
{super();this.objData=objData;this.visualComponent=new __WEBPACK_IMPORTED_MODULE_0__visualcomponent2d__["a"](objData.visualData);if(objData.physicsData.isActive())
this.physicsComponent=new __WEBPACK_IMPORTED_MODULE_1__physics_physicscomponent2d__["a"](objData.physicsData);this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_2__script_scriptcomponent__["a"];this.id=id;this.ai=null;this.scriptFactoryMap=new Map;this.setVisible(objData.visualData.isActive());if(objData.visualData.genType===__WEBPACK_IMPORTED_MODULE_6__common_defs__["_23"])
this.setCropOffset(objData.visualData.spriteSheet.getGlyph().cropOffset);this.parameters.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["_62"]);}
initScriptFactoryFunctions(node)
{let scriptNode=node.getElementsByTagName('script');for(let i=0;i<scriptNode.length;++i)
{let attr=scriptNode[i].attributes[0];if(attr)
this.scriptFactoryMap.set(attr.name,__WEBPACK_IMPORTED_MODULE_3__script_scriptmanager__["a"].get(attr.value));}
}
prepareScriptFactoryFunction(scriptFactoryId,forceUpdate=false)
{let scriptFactory=this.scriptFactoryMap.get(scriptFactoryId);if(scriptFactory)
{this.scriptComponent.set(scriptFactory(this));if(forceUpdate)
this.scriptComponent.update();}
}
prepareScriptFactory(scriptFactory,forceUpdate=false)
{this.scriptComponent.set(scriptFactory(this));if(forceUpdate)
this.scriptComponent.update();}
init()
{if(this.visualComponent.isFontSprite())
this.visualComponent.createFontStringFromData();}
cleanUp()
{if(this.visualComponent.isFontSprite())
this.visualComponent.deleteFontVBO();}
initPhysics()
{this.physicsComponent.init(this);}
handleEvent(event)
{if(this.ai)
this.ai.handleEvent(event);}
update()
{this.scriptComponent.update();if(this.ai)
this.ai.update();}
physicsUpdate()
{this.physicsComponent.update(this);}
render(matrix)
{if(this.isVisible())
{this.visualComponent.render(this.matrix,matrix);}
}
setAI(ai)
{this.ai=ai;this.ai.init();}
setColor(color)
{this.visualComponent.color.copy(color);}
setRGBA(r,g,b,a)
{this.visualComponent.color.set(r,g,b,a);}
setAlpha(alpha,allowToExceed=false)
{if(allowToExceed||(alpha<this.objData.visualData.color.a))
this.visualComponent.color.a=alpha;else
this.visualComponent.color.a=this.objData.visualData.color.a;}
getAlpha()
{return this.visualComponent.color.a;}
getDefaultAlpha()
{return this.objData.visualData.color.a;}
setDefaultColor()
{this.visualComponent.color.copy(this.objData.visualData.color);}
getColor()
{return this.visualComponent.color;}
getDefaultColor()
{return this.objData.visualData.color;}
setFrame(index)
{if(this.visualComponent.frameIndex!=index)
{this.visualComponent.setFrame(index);if(this.objData.visualData.genType===__WEBPACK_IMPORTED_MODULE_6__common_defs__["_23"])
this.setCropOffset(this.objData.visualData.spriteSheet.getGlyph(index).cropOffset);}
}
getFrameCount()
{if(this.objData.visualData.spriteSheet)
return this.objData.visualData.spriteSheet.getCount();return 1;}
}
__webpack_exports__["a"]=Sprite2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_defs__=__webpack_require__(0);class Point
{constructor(x=0,y=0,z=0)
{this.data=new Float32Array([x,y,z]);}
set x(value){this.data[0]=value;}
get x(){return this.data[0];}
set y(value){this.data[1]=value;}
get y(){return this.data[1];}
set z(value){this.data[2]=value;}
get z(){return this.data[2];}
copy(obj)
{this.data[0]=obj.data[0];this.data[1]=obj.data[1];this.data[2]=obj.data[2];}
convertToRads()
{this.x*=__WEBPACK_IMPORTED_MODULE_0__common_defs__["g"];this.y*=__WEBPACK_IMPORTED_MODULE_0__common_defs__["g"];this.z*=__WEBPACK_IMPORTED_MODULE_0__common_defs__["g"];}
setXYZ(x=0,y=0,z=0)
{this.data[0]=x;this.data[1]=y;this.data[2]=z;}
set(point)
{this.data[0]=point.data[0];this.data[1]=point.data[1];this.data[2]=point.data[2];}
incXYZ(x=0,y=0,z=0)
{this.data[0]+=x;this.data[1]+=y;this.data[2]+=z;}
inc(point)
{this.data[0]+=point.data[0];this.data[1]+=point.data[1];this.data[2]+=point.data[2];}
cap(value)
{if(value>0)
{if(this.x>value)
{this.x-=value;}
else if(this.x<0)
{this.x+=value;}
if(this.y>value)
{this.y-=value;}
else if(this.y<0)
{this.y+=value;}
if(this.z>value)
{this.z-=value;}
else if(this.z<0)
{this.z+=value;}
}
else
{if(this.x>value)
{this.x+=value;}
else if(this.x<0)
{this.x-=value;}
if(this.y>value)
{this.y+=value;}
else if(this.y<0)
{this.y-=value;}
if(this.z>value)
{this.z+=value;}
else if(this.z<0)
{this.z-=value;}
}
}
getInvert()
{let tmp=new Point;tmp.invert();return tmp;}
invert()
{this.data[0]=-this.data[0];this.data[1]=-this.data[1];this.data[2]=-this.data[2];}
isEmpty()
{if((this.x==0)&&(this.y==0)&&(this.z==0))
return true;return false;}
isXEmpty()
{return(0===this.x);}
isYEmpty()
{return(0===this.y);}
isZEmpty()
{return(0===this.z);}
}
__webpack_exports__["a"]=Point;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return highResTimer;});class HighResTimer
{constructor()
{this.lastTime=performance.now();this.timer;this.elapsedTime;this.fps;}
timerStart()
{this.timer=performance.now();}
timerStop()
{return(performance.now()-this.timer);}
calcElapsedTime()
{let time=performance.now();this.elapsedTime=time-this.lastTime;this.fps=1000.0/this.elapsedTime;if(this.elapsedTime>100.0)
this.elapsedTime=100.0;this.lastTime=time;}
}
var highResTimer=new HighResTimer;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["l"]=loadVertex2d;__webpack_exports__["e"]=loadPosition;__webpack_exports__["h"]=loadRotation;__webpack_exports__["i"]=loadScale;__webpack_exports__["a"]=loadCenterPos;__webpack_exports__["b"]=loadColor;__webpack_exports__["j"]=loadSize;__webpack_exports__["f"]=loadRect;__webpack_exports__["g"]=loadRectFromChild;__webpack_exports__["d"]=loadHorzAlignment;__webpack_exports__["k"]=loadVertAlignment;__webpack_exports__["c"]=loadDynamicOffset;var __WEBPACK_IMPORTED_MODULE_0__common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_1__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_2__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_3__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_4__common_vertex2d__=__webpack_require__(27);var __WEBPACK_IMPORTED_MODULE_5__common_dynamicoffset__=__webpack_require__(32);var __WEBPACK_IMPORTED_MODULE_6__common_defs__=__webpack_require__(0);function loadVertex2d(node)
{if(node)
{let vert2d=new __WEBPACK_IMPORTED_MODULE_4__common_vertex2d__["a"];let attr=node.getAttribute('x');if(attr)
vert2d.x=Number(attr);attr=node.getAttribute('y');if(attr)
vert2d.y=Number(attr);attr=node.getAttribute('z');if(attr)
vert2d.z=Number(attr);attr=node.getAttribute('u');if(attr)
vert2d.u=Number(attr);attr=node.getAttribute('v');if(attr)
vert2d.v=Number(attr);return vert2d;}
return null;}
function loadPosition(node)
{let positionNode=node.getElementsByTagName('position');if(positionNode.length)
{let point=new __WEBPACK_IMPORTED_MODULE_2__common_point__["a"];let attr=positionNode[0].getAttribute('x');if(attr)
point.x=Number(attr);attr=positionNode[0].getAttribute('y');if(attr)
point.y=Number(attr);attr=positionNode[0].getAttribute('z');if(attr)
point.z=Number(attr);return point;}
return null;}
function loadRotation(node)
{let rotationNode=node.getElementsByTagName('rotation');if(rotationNode.length)
{let rotation=new __WEBPACK_IMPORTED_MODULE_2__common_point__["a"];let attr=rotationNode[0].getAttribute('x');if(attr)
rotation.x=Number(attr);attr=rotationNode[0].getAttribute('y');if(attr)
rotation.y=Number(attr);attr=rotationNode[0].getAttribute('z');if(attr)
rotation.z=Number(attr);return rotation;}
return null;}
function loadScale(node)
{let scaleNode=node.getElementsByTagName('scale');if(scaleNode.length)
{let scale=new __WEBPACK_IMPORTED_MODULE_2__common_point__["a"];let attr=scaleNode[0].getAttribute('x');if(attr)
scale.x=Number(attr);attr=scaleNode[0].getAttribute('y');if(attr)
scale.y=Number(attr);attr=scaleNode[0].getAttribute('z');if(attr)
scale.z=Number(attr);return scale;}
return null;}
function loadCenterPos(node)
{let centerPosNode=node.getElementsByTagName('centerPos');if(centerPosNode.length)
{let centerPos=new __WEBPACK_IMPORTED_MODULE_2__common_point__["a"];let attr=centerPosNode[0].getAttribute('x');if(attr)
centerPos.x=Number(attr);attr=centerPosNode[0].getAttribute('y');if(attr)
centerPos.y=Number(attr);attr=centerPosNode[0].getAttribute('z');if(attr)
centerPos.z=Number(attr);return centerPos;}
return null;}
function loadXYZ(node)
{let point=new __WEBPACK_IMPORTED_MODULE_2__common_point__["a"];let attr=node.getAttribute('x');if(attr)
point.x=Number(attr);attr=node.getAttribute('y');if(attr)
point.y=Number(attr);attr=node.getAttribute('z');if(attr)
point.z=Number(attr);return point;}function loadColor(node,currentColor=null)
{let color=new __WEBPACK_IMPORTED_MODULE_0__common_color__["a"];if(currentColor)
color.copy(currentColor);let colorNode=node.getElementsByTagName('color');if(colorNode.length)
{let attr=colorNode[0].getAttribute('r');if(attr)
color.r=Number(attr);attr=colorNode[0].getAttribute('g');if(attr)
color.g=Number(attr);attr=colorNode[0].getAttribute('b');if(attr)
color.b=Number(attr);attr=colorNode[0].getAttribute('a');if(attr)
color.a=Number(attr);color.convert();}
return color;}
function loadSize(node,currentSize=null)
{let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"];if(currentSize)
size.copy(currentSize);let sizeNode=node.getElementsByTagName('size');if(sizeNode.length)
{let attr=sizeNode[0].getAttribute('width');if(attr)
size.w=Number(attr);attr=sizeNode[0].getAttribute('height');if(attr)
size.h=Number(attr);}
return size;}
function loadRect(node)
{let rectNode=node.getElementsByTagName('rect');if(rectNode.length)
return loadRectFromChild(rectNode[0]);return new __WEBPACK_IMPORTED_MODULE_3__common_rect__["a"];}
function loadRectFromChild(node)
{let rect=new __WEBPACK_IMPORTED_MODULE_3__common_rect__["a"];let attr=node.getAttribute('x1');if(attr)
rect.x1=Number(attr);attr=node.getAttribute('y1');if(attr)
rect.y1=Number(attr);attr=node.getAttribute('x2');if(attr)
rect.x2=Number(attr);attr=node.getAttribute('y2');if(attr)
rect.y2=Number(attr);return rect;}
function loadHorzAlignment(node,aHorzAlign)
{let horzAlign=aHorzAlign;let horzAlignAttr=node.getAttribute('horzAlign');if(horzAlignAttr)
{if(horzAlignAttr==='left')
horzAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_25"];else if(horzAlignAttr==='center')
horzAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_24"];else if(horzAlignAttr==='right')
horzAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_26"];}
return horzAlign;}
function loadVertAlignment(node,aVertAlign)
{let vertAlign=aVertAlign;let vertAlignAttr=node.getAttribute('vertAlign');if(vertAlignAttr)
{if(vertAlignAttr==='top')
vertAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_54"];else if(vertAlignAttr==='center')
vertAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_53"];else if(vertAlignAttr==='bottom')
vertAlign=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_52"];}
return vertAlign;}
function loadDynamicOffset(node)
{let dynamicOffsetNode=node.getElementsByTagName('dynamicOffset');if(dynamicOffsetNode.length)
{let dynamicOffset=new __WEBPACK_IMPORTED_MODULE_5__common_dynamicoffset__["a"];let attr=dynamicOffsetNode[0].getAttribute('left');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["R"]);dynamicOffset.setX(Number(attr));}
else
{attr=dynamicOffsetNode[0].getAttribute('right');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["S"]);dynamicOffset.setX(Number(attr));}
else
{attr=dynamicOffsetNode[0].getAttribute('horzCenter');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["Q"]);dynamicOffset.setX(Number(attr));}
}
}
attr=dynamicOffsetNode[0].getAttribute('top');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["T"]);dynamicOffset.setY(Number(attr));}
else
{attr=dynamicOffsetNode[0].getAttribute('bottom');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["P"]);dynamicOffset.setY(Number(attr));}
else
{attr=dynamicOffsetNode[0].getAttribute('vertCenter');if(attr)
{dynamicOffset.add(__WEBPACK_IMPORTED_MODULE_6__common_defs__["U"]);dynamicOffset.setX(Number(attr));}
}
}
return dynamicOffset;}
return null;}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";const NO_ROT=0;const ROT_Z=1;const ROT_Y=2;const ROT_X=4;const ROT_ALL=ROT_Z| ROT_Y| ROT_X;class Matrix
{constructor(matrix=null)
{this.matrix=new Float32Array(16);if(matrix===null)
this.initilizeMatrix();else
this.copy(matrix);}
copy(obj)
{let i=this.matrix.length;while(i--)
this.matrix[i]=obj.matrix[i];}
initilizeMatrix()
{this.initIdentityMatrix(this.matrix);}
initIdentityMatrix(mat)
{mat[0]=1.0;mat[1]=0.0;mat[2]=0.0;mat[3]=0.0;mat[4]=0.0;mat[5]=1.0;mat[6]=0.0;mat[7]=0.0;mat[8]=0.0;mat[9]=0.0;mat[10]=1.0;mat[11]=0.0;mat[12]=0.0;mat[13]=0.0;mat[14]=0.0;mat[15]=1.0;}
mergeMatrix(matrix)
{let temp=new Float32Array(16);for(let i=0;i<4;++i)
{for(let j=0;j<4;++j)
{temp[(i*4)+j]=(this.matrix[i*4]*matrix[j])
+(this.matrix[(i*4)+1]*matrix[4+j])
+(this.matrix[(i*4)+2]*matrix[8+j])
+(this.matrix[(i*4)+3]*matrix[12+j]);}
}
this.matrix=temp;}
rotate(point)
{let flags=NO_ROT;let rMatrix=new Float32Array(16);this.initIdentityMatrix(rMatrix);if(!point.isZEmpty())
{this.rotateZRad(rMatrix,point.z,flags);flags|=ROT_Z;}
if(!point.isYEmpty())
{this.rotateYRad(rMatrix,point.y,flags);flags|=ROT_Y;}
if(!point.isXEmpty())
{this.rotateXRad(rMatrix,point.x,flags);flags|=ROT_X;}
this.mergeMatrix(rMatrix);}
rotateZRad(dest,value)
{let cos=Math.cos(value);let sin=Math.sin(value);dest[0]=cos;dest[1]=sin;dest[4]=-sin;dest[5]=cos;}
rotateYRad(dest,value,rotFlags)
{let cos=Math.cos(value);let sin=Math.sin(value);switch(rotFlags)
{case ROT_Z:
{let tmp0,tmp1,tmp8,tmp9;tmp0=dest[0]*cos;tmp1=dest[1]*cos;tmp8=dest[0]*sin;tmp9=dest[1]*sin;dest[0]=tmp0;dest[1]=tmp1;dest[2]=-sin;dest[8]=tmp8;dest[9]=tmp9;dest[10]=cos;break;}
case NO_ROT:
{dest[0]=cos;dest[2]=-sin;dest[8]=sin;dest[10]=cos;break;}
}
}
rotateXRad(dest,value,rotFlags)
{let cos=Math.cos(value);let sin=Math.sin(value);switch(rotFlags)
{case ROT_Z:
{let tmp4,tmp5,tmp8,tmp9;tmp4=dest[4]*cos;tmp5=dest[5]*cos;tmp8=dest[4]*-sin;tmp9=dest[5]*-sin;dest[4]=tmp4;dest[5]=tmp5;dest[6]=sin;dest[8]=tmp8;dest[9]=tmp9;dest[10]=cos;break;}
case ROT_Y:
{let tmp4,tmp6,tmp8,tmp10;tmp4=dest[8]*sin;tmp6=dest[10]*sin;tmp8=dest[8]*cos;tmp10=dest[10]*cos;dest[4]=tmp4;dest[5]=cos;dest[6]=tmp6;dest[8]=tmp8;dest[9]=-sin;dest[10]=tmp10;break;}
case ROT_Z| ROT_Y:
{let tmp4,tmp5,tmp6,tmp8,tmp9,tmp10;tmp4=(dest[4]*cos)+(dest[8]*sin);tmp5=(dest[5]*cos)+(dest[9]*sin);tmp6=dest[10]*sin;tmp8=(dest[4]*-sin)+(dest[8]*cos);tmp9=(dest[5]*-sin)+(dest[9]*cos);tmp10=dest[10]*cos;dest[4]=tmp4;dest[5]=tmp5;dest[6]=tmp6;dest[8]=tmp8;dest[9]=tmp9;dest[10]=tmp10;break;}
case NO_ROT:
{dest[5]=cos;dest[6]=sin;dest[9]=-sin;dest[10]=cos;break;}
}
}
translate(point)
{this.matrix[12]+=point.x;this.matrix[13]+=point.y;this.matrix[14]+=point.z;}
translateSize(size)
{this.matrix[12]+=size.w;this.matrix[13]+=size.h;}
transformPoint(dest,source)
{dest.x=(source.x*this.matrix[0])
+(source.y*this.matrix[4])
+(source.z*this.matrix[8])
+this.matrix[12];dest.y=(source.x*this.matrix[1])
+(source.y*this.matrix[5])
+(source.z*this.matrix[9])
+this.matrix[13];dest.z=(source.x*this.matrix[2])
+(source.y*this.matrix[6])
+(source.z*this.matrix[10])
+this.matrix[14];}
transformRect(dest,source)
{dest.x1=(source.x1*this.matrix[0])
+(source.y1*this.matrix[4])
+this.matrix[12];dest.y1=(source.x1*this.matrix[1])
+(source.y1*this.matrix[5])
+this.matrix[13];dest.x2=(source.x2*this.matrix[0])
+(source.y2*this.matrix[4])
+this.matrix[12];dest.y2=(source.x2*this.matrix[1])
+(source.y2*this.matrix[5])
+this.matrix[13];}
transformQuad(dest,source)
{for(let i=0;i<4;++i)
this.transformPoint(dest.point[i],source.point[i]);}
setScaleFromPoint(point)
{this.matrix[0]*=point.x;this.matrix[5]*=point.y;this.matrix[10]*=point.z;}
setScaleFromSize(size)
{this.matrix[0]*=size.w;this.matrix[5]*=size.h;this.matrix[10]*=1.0;}
setScaleFromValue(scale)
{this.matrix[0]*=scale;this.matrix[5]*=scale;this.matrix[10]*=1.0;}
scaleFromPoint(point)
{this.mergeScale(point.x,point.y,point.z);}
scaleFromSize(size)
{this.mergeScale(size.w,size.h,1.0);}
scaleFromValue(scale)
{this.mergeScale(scale,scale,scale);}
mergeScale(x,y,z)
{let temp=new Float32Array(16);this.initIdentityMatrix(temp);temp[0]=x;temp[5]=y;temp[10]=z;this.mergeMatrix(temp);}
orthographicRH(w,h,zn,zf)
{this.matrix[0]=2/w;this.matrix[5]=2/h;this.matrix[10]=1/(zn-zf);this.matrix[14]=zn/(zn-zf);}
perspectiveFovRH(fovy,aspect,zn,zf)
{let yScale=1/Math.tan(fovy/2);let xScale=yScale/aspect;this.matrix[0]=xScale;this.matrix[5]=yScale;this.matrix[10]=zf/(zn-zf);this.matrix[11]=-1;this.matrix[14]=zn*zf/(zn-zf);}
invertX()
{this.matrix[12]=-this.matrix[12];}
invertY()
{this.matrix[13]=-this.matrix[13];}
invertZ()
{this.matrix[14]=-this.matrix[14];}
}
__webpack_exports__["a"]=Matrix;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return textureManager;});var __WEBPACK_IMPORTED_MODULE_0__common_texture__=__webpack_require__(42);var __WEBPACK_IMPORTED_MODULE_1__system_device__=__webpack_require__(2);class TextureManager
{constructor()
{this.textureForMapMap=new Map;this.currentTexture=null;}
load(group,filePath,image)
{if(!image.complete)
throw new Error(`Image file not completely loaded!(${group},${filePath}).`);let groupMap=this.textureForMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.textureForMapMap.set(group,groupMap);}
let texture=groupMap.get(filePath);if(texture===undefined)
{let texture=new __WEBPACK_IMPORTED_MODULE_0__common_texture__["a"];texture.id=__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].createTexture();texture.size.w=image.width;texture.size.h=image.height;__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].bindTexture(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,texture.id);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].texParameteri(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_WRAP_S,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].CLAMP_TO_EDGE);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].texParameteri(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_WRAP_T,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].CLAMP_TO_EDGE);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].texParameteri(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_MIN_FILTER,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].LINEAR);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].texParameteri(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_MAG_FILTER,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].LINEAR);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].texImage2D(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,0,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].RGBA,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].RGBA,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].UNSIGNED_BYTE,image);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].bindTexture(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,null);groupMap.set(filePath,texture);}
return texture;}
deleteGroup(group)
{let groupMap=this.textureForMapMap.get(group);if(groupMap!==undefined)
{for(let [key,texture] of groupMap.entries())
__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].deleteTexture(texture.id);this.textureForMapMap.delete(group);}
}
getTexture(group,filePath)
{let groupMap=this.textureForMapMap.get(group);if(groupMap!==undefined)
{let texture=groupMap.get(filePath);if(texture!==undefined)
return texture;throw new Error(`Texture does not exists!(${group},${filePath}).`);}
else
{throw new Error(`Texture group does not exists!(${group},${filePath}).`);}
return null;}
bind(textureId)
{if(this.currentTexture!=textureId)
{this.currentTexture=textureId;__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].bindTexture(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,textureId);}
}
unbind()
{this.currentTexture=null;__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].bindTexture(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].TEXTURE_2D,null);}
}
var textureManager=new TextureManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return eventManager;});class EventManager
{constructor()
{this.canvas=document.getElementById('game-surface');this.queue=[];this.canvas.addEventListener('mousedown',this.onMouseDown.bind(this));this.canvas.addEventListener('mouseup',this.onMouseUp.bind(this));this.canvas.addEventListener('mousemove',this.onMouseMove.bind(this));document.addEventListener('keydown',this.onKeyDown.bind(this));document.addEventListener('keyup',this.onKeyUp.bind(this));document.addEventListener('scroll',this.onScroll.bind(this));this.lastMouseMoveX=0;this.lastMouseMoveY=0;this.mouseMoveRelX=0;this.mouseMoveRelY=0;this.mouseMoveOffsetX=(document.documentElement.scrollLeft-this.canvas.offsetLeft);this.mouseMoveOffsetY=(document.documentElement.scrollTop-this.canvas.offsetTop);}
get mouseX(){return this.lastMouseMoveX;}
get mouseY(){return this.lastMouseMoveY;}
get mouseRelX(){return this.mouseMoveRelX;}
get mouseRelY(){return this.mouseMoveRelY;}
get mouseOffsetX(){return this.mouseMoveOffsetX;}
get mouseOffsetY(){return this.mouseMoveOffsetY;}
pollEvent()
{if(this.queue.length)
return this.queue.shift();return null;}
dispatchEvent(_type,...args)
{let event=new CustomEvent('customEvent',{detail:
{type:_type,arg:args
}
});this.queue.push(event);}
onScroll(event)
{this.mouseMoveOffsetX=(document.documentElement.scrollLeft-this.canvas.offsetLeft);this.mouseMoveOffsetY=(document.documentElement.scrollTop-this.canvas.offsetTop);}
onMouseDown(event)
{this.queue.push(event);}
onMouseUp(event)
{this.queue.push(event);}
onMouseMove(event)
{this.queue.push(event);this.mouseMoveRelX=event.movementX;this.mouseMoveRelY=event.movementY;this.lastMouseMoveX=event.clientX+this.mouseMoveOffsetX;this.lastMouseMoveY=event.clientY+this.mouseMoveOffsetY;}
onKeyDown(event)
{if(event.repeat===false)
{this.queue.push(event);}
}
onKeyUp(event)
{this.queue.push(event);}
onCustomEvent(event)
{this.queue.push(event);}
}
var eventManager=new EventManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";const ED_NULL=0,ED_REEL=1,ED_WHEEL=2;__webpack_exports__["c"]=ED_REEL;__webpack_exports__["d"]=ED_WHEEL;const ESD_UP=0,ESD_DOWN=1,ESD_LEFT=2,ESD_RIGHT=3,EDS_CLOCKWISE=4,EDS_COUNTERCLOCKWISE=5;__webpack_exports__["j"]=ESD_UP;__webpack_exports__["g"]=ESD_DOWN;__webpack_exports__["h"]=ESD_LEFT;__webpack_exports__["i"]=ESD_RIGHT;__webpack_exports__["a"]=EDS_CLOCKWISE;__webpack_exports__["b"]=EDS_COUNTERCLOCKWISE;const EP_PAYLINE=0,EP_SCATTER=1;__webpack_exports__["e"]=EP_PAYLINE;__webpack_exports__["f"]=EP_SCATTER;const ESS_STOPPED=0,ESS_SPIN_STARTING=1,ESS_SPINNING=2,ESS_PREPARE_TO_STOP=3,ESS_SPIN_STOPPING=4;__webpack_exports__["D"]=ESS_STOPPED;__webpack_exports__["B"]=ESS_SPIN_STARTING;__webpack_exports__["A"]=ESS_SPINNING;__webpack_exports__["z"]=ESS_PREPARE_TO_STOP;__webpack_exports__["C"]=ESS_SPIN_STOPPING;const ESLOT_IDLE=0,ESLOT_PLACE_WAGER=1,ESLOT_GENERATE_STOPS=2,ESLOT_EVALUATE=3,ESLOT_PRE_SPIN=4,ESLOT_SPIN=5,ESLOT_POST_SPIN=6,ESLOT_PRE_AWARD_WIN=7,ESLOT_BONUS_DECISION=8,ESLOT_PRE_BONUS=9,ESLOT_BONUS=10,ESLOT_POST_BONUS=11,ESLOT_POST_AWARD_WIN=12,ESLOT_WAIT_FOR_AWARD=13,ESLOT_END=14;__webpack_exports__["p"]=ESLOT_IDLE;__webpack_exports__["q"]=ESLOT_PLACE_WAGER;__webpack_exports__["o"]=ESLOT_GENERATE_STOPS;__webpack_exports__["n"]=ESLOT_EVALUATE;__webpack_exports__["w"]=ESLOT_PRE_SPIN;__webpack_exports__["x"]=ESLOT_SPIN;__webpack_exports__["t"]=ESLOT_POST_SPIN;__webpack_exports__["u"]=ESLOT_PRE_AWARD_WIN;__webpack_exports__["l"]=ESLOT_BONUS_DECISION;__webpack_exports__["v"]=ESLOT_PRE_BONUS;__webpack_exports__["k"]=ESLOT_BONUS;__webpack_exports__["s"]=ESLOT_POST_BONUS;__webpack_exports__["r"]=ESLOT_POST_AWARD_WIN;__webpack_exports__["y"]=ESLOT_WAIT_FOR_AWARD;__webpack_exports__["m"]=ESLOT_END;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return settings;});var __WEBPACK_IMPORTED_MODULE_0__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class Settings
{constructor()
{this.size=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.size_half=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.nativeSize=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.screenAspectRatio=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.orthoAspectRatio=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.defaultSize=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.defaultSize_half=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.enableDepthBuffer=false;this.createStencilBuffer=false;this.clearStencilBuffer=false;this.stencilBufferBitSize=1;this.clearTargetBuffer=true;this.projectionType=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_45"];this.viewAngle=45.0*__WEBPACK_IMPORTED_MODULE_1__common_defs__["g"];this.minZdist=5.0;this.maxZdist=1000.5;this.sectorSize=0;this.sectorSizeHalf=0;}
load(node)
{if(node)
{let display=node.getElementsByTagName('display');if(display.length)
{let resolution=display[0].getElementsByTagName('resolution');if(resolution.length)
{this.size.w=Number(resolution[0].getAttribute('width'));this.size.h=Number(resolution[0].getAttribute('height'));}
let defaultRes=display[0].getElementsByTagName('default');if(defaultRes.length)
{this.nativeSize.w=Number(defaultRes[0].getAttribute('width'));this.nativeSize.h=Number(defaultRes[0].getAttribute('height'));this.defaultSize.h=this.nativeSize.h;}
}
let device=node.getElementsByTagName('device');if(device.length)
{let projection=device[0].getElementsByTagName('projection');if(projection.length)
{let attr=projection[0].getAttribute('projectType');if(attr &&(attr==='orthographic'))
this.projectionType=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_44"];attr=projection[0].getAttribute('minZDist');if(attr)
this.minZdist=Number(attr);attr=projection[0].getAttribute('maxZDist');if(attr)
this.maxZdist=Number(attr);attr=projection[0].getAttribute('view_angle');if(attr)
this.viewAngle=Number(attr)*__WEBPACK_IMPORTED_MODULE_1__common_defs__["g"];}
let depthStencilBuffer=device[0].getElementsByTagName('depthStencilBuffer');if(depthStencilBuffer.length)
{this.enableDepthBuffer=(depthStencilBuffer[0].getAttribute('enableDepthBuffer')==='true');this.createStencilBuffer=(depthStencilBuffer[0].getAttribute('createStencilBuffer')==='true');this.clearStencilBuffer=(depthStencilBuffer[0].getAttribute('clearStencilBuffer')==='true');this.stencilBufferBitSize=Number(depthStencilBuffer[0].getAttribute('stencilBufferBitSize'));}
let targetBuffer=device[0].getElementsByTagName('targetBuffer');if(targetBuffer.length)
this.clearTargetBuffer=(targetBuffer[0].getAttribute('clear')==='true');}
let worldNode=node.getElementsByTagName('world');if(worldNode.length)
{this.sectorSize=Number(worldNode[0].getAttribute('sectorSize'));this.sectorSizeHalf=Math.trunc(this.sectorSize/2);}
}
this.calcRatio();}
calcRatio()
{this.screenAspectRatio.w=this.size.w/this.size.h;this.screenAspectRatio.h=this.size.h/this.size.w;this.defaultSize.w=Math.floor((this.screenAspectRatio.w*this.defaultSize.h)+0.5);this.defaultSize_half.w=this.defaultSize.w/2;this.defaultSize_half.h=this.defaultSize.h/2;this.size_half.w=this.size.w/2;this.size_half.h=this.size.h/2;this.orthoAspectRatio.h=this.size.h/this.defaultSize.h;this.orthoAspectRatio.w=this.size.w/this.defaultSize.w;}
}
var settings=new Settings;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_object__=__webpack_require__(35);var __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_2__common_defs__=__webpack_require__(0);class Object2D extends __WEBPACK_IMPORTED_MODULE_0__common_object__["a"]
{constructor()
{super();this.matrix=new __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__["a"];}
transformLocal(matrix)
{matrix.initilizeMatrix();if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["f"]))
matrix.translateSize(this.cropOffset);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_61"]))
this.applyScale(matrix);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_60"]))
this.applyRotation(matrix);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_66"]))
matrix.translate(this.pos);this.parameters.remove(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_65"]);this.parameters.add(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]);}
transform(matrix=null,tranformWorldPos=null)
{this.parameters.remove(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]);if(matrix)
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_65"])|| tranformWorldPos)
{this.transformLocal(this.matrix);this.matrix.mergeMatrix(matrix.matrix);}
}
else
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_65"]))
this.transformLocal(this.matrix);}
}
applyScale(matrix)
{this.matrix.setScaleFromPoint(this.scale);}
applyRotation(matrix)
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["c"]))
this.matrix.translate(this.centerPos);this.matrix.rotate(this.rot);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["c"]))
this.matrix.translate(this.centerPos.getInvert());}
wasWorldPosTranformed()
{return this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]);}
forceTransform()
{this.parameters.Add(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_65"]);}
}
__webpack_exports__["a"]=Object2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return scriptManager;});class ScriptManager
{constructor()
{this.scriptMap=new Map;}
set(name,factory)
{if(this.scriptMap.has(name))
{throw new Error(`Script name has already been added(${name}).`);return;}
this.scriptMap.set(name,factory);}
get(name)
{let scriptFactory=this.scriptMap.get(name);if(scriptFactory===undefined)
{throw new Error(`Script name could not be found!(${name})`);return null;}
return scriptFactory;}
}
var scriptManager=new ScriptManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return shaderManager;});var __WEBPACK_IMPORTED_MODULE_0__common_shaderdata__=__webpack_require__(68);var __WEBPACK_IMPORTED_MODULE_1__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_2__utilities_genfunc__=__webpack_require__(3);class ShaderManager
{constructor()
{this.shaderMap=new Map;this.currentShaderData=null;this.currentAttributeCount=0;this.loadCompleteCallback=null;this.loadCounter=0;this.initShaderCallback=null;}
load(xmlNode,callback)
{if(xmlNode)
{let shader=xmlNode.getElementsByTagName('shader');if(shader)
{this.loadCompleteCallback=callback;for(let i=0;i<shader.length;++i)
{++this.loadCounter;this.createShader(shader[i]);}
}
}
}
createShader(node)
{let shaderTxtId=node.getAttribute('Id');let vertexNode=node.getElementsByTagName('vertDataLst');let fragmentNode=node.getElementsByTagName('fragDataLst');if(this.shaderMap.has(shaderTxtId))
throw new Error(`Shader of this name already exists(${shaderTxtId}).`);let shaderData=new __WEBPACK_IMPORTED_MODULE_0__common_shaderdata__["a"];this.shaderMap.set(shaderTxtId,shaderData);__WEBPACK_IMPORTED_MODULE_2__utilities_genfunc__["b"]('txt',vertexNode[0].getAttribute('file'),(vertText)=>
{this.create(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].VERTEX_SHADER,shaderData,shaderTxtId,vertText);__WEBPACK_IMPORTED_MODULE_2__utilities_genfunc__["b"]('txt',fragmentNode[0].getAttribute('file'),(fragText)=>
{this.create(__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].FRAGMENT_SHADER,shaderData,shaderTxtId,fragText);this.createProgram(shaderData);this.locateShaderVariables(shaderData,vertexNode[0].getElementsByTagName('dataType'),fragmentNode[0].getElementsByTagName('dataType'));this.initShaderCallback(shaderTxtId);--this.loadCounter;if(this.loadCounter===0)
this.loadCompleteCallback();});});}
create(shaderType,shaderData,shaderTxtId,shaderTxt)
{let id=__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].createShader(shaderType);if(id===0)
throw new Error(`Error creating shader(${shaderTxtId}).`);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].shaderSource(id,shaderTxt);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].compileShader(id);if(!__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getShaderParameter(id,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].COMPILE_STATUS))
throw new Error(`ERROR compiling shader!(${__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getShaderInfoLog(id)}).`);if(shaderType===__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].VERTEX_SHADER)
shaderData.vertexId=id;else
shaderData.fragmentId=id;}
createProgram(shaderData)
{shaderData.programId=__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].createProgram();__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].attachShader(shaderData.programId,shaderData.vertexId);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].attachShader(shaderData.programId,shaderData.fragmentId);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].linkProgram(shaderData.programId);if(!__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getProgramParameter(shaderData.programId,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].LINK_STATUS))
throw new Error(`ERROR linking program!(${__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getProgramInfoLog(shaderData.programId)}).`);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].validateProgram(shaderData.programId);if(!__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getProgramParameter(shaderData.programId,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].VALIDATE_STATUS))
throw new Error(`ERROR validating program!(${__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getProgramInfoLog(shaderData.programId)}).`);}
locateShaderVariables(shaderData,vertNode,fragNode)
{for(let i=0;i<vertNode.length;++i)
{let name=vertNode[i].getAttribute('name');if(vertNode[i].getAttribute('location'))
{shaderData.locationMap.set(name,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getAttribLocation(shaderData.programId,name));++shaderData.attributeCount;}
else
{shaderData.locationMap.set(name,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getUniformLocation(shaderData.programId,name));}
}
for(let i=0;i<fragNode.length;++i)
{let name=fragNode[i].getAttribute('name');shaderData.locationMap.set(name,__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].getUniformLocation(shaderData.programId,name));}
}
bind(shaderData)
{if(this.currentShaderData!=shaderData)
{let gl=__WEBPACK_IMPORTED_MODULE_1__system_device__["a"].glContext;if(this.currentShaderData===null)
{this.currentAttributeCount=shaderData.attributeCount;for(let i=0;i<this.currentAttributeCount;++i)
gl.enableVertexAttribArray(i);}
else if(this.currentAttributeCount!=shaderData.attributeCount)
{if(this.currentAttributeCount<shaderData.attributeCount)
{for(let i=this.currentAttributeCount;i<shaderData.attributeCount;++i)
gl.enableVertexAttribArray(i);}
else
{for(let i=shaderData.attributeCount;i<this.currentAttributeCount;++i)
gl.disableVertexAttribArray(i);}
this.currentAttributeCount=shaderData.attributeCount;}
this.currentShaderData=shaderData;gl.useProgram(shaderData.programId);}
}
unbind()
{for(let i=0;i<this.currentAttributeCount;++i)
__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].disableVertexAttribArray(i);this.currentShaderData=null;this.currentAttributeCount=0;__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].useProgram(null);}
getShaderData(shaderId)
{let shader=this.shaderMap.get(shaderId);if(shader!==undefined)
return shader;else
throw new Error(`ERROR Shader has not been created!(${shaderId}).`);return null;}
setShaderValue4fv(shaderId,locationId,data)
{let shaderData=this.getShaderData(shaderId);if(shaderData.hasLocation(locationId))
{let location=shaderData.getLocation(locationId);this.bind(shaderData);__WEBPACK_IMPORTED_MODULE_1__system_device__["b"].uniform4fv(location,data);this.unbind();}
}
setAllShaderValue4fv(locationId,data)
{for(let [key,shaderData] of this.shaderMap.entries())
this.setShaderValue4fv(key,locationId,data);}
}
var shaderManager=new ShaderManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return vertexBufferManager;});var __WEBPACK_IMPORTED_MODULE_0__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_1__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__common_quad2d__=__webpack_require__(67);class VertexBufferManager
{constructor()
{this.vertexBufMapMap=new Map;this.indexBufMapMap=new Map;this.currentVBO=null;this.currentIBO=null;this.currentMaxFontIndices=0;}
createVBO(group,name,vertAry)
{let groupMap=this.vertexBufMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.vertexBufMapMap.set(group,groupMap);}
let vboID=groupMap.get(name);if(vboID===undefined)
{vboID=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,vboID);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,new Float32Array(vertAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,null);groupMap.set(name,vboID);}
return vboID;}
createIBO(group,name,indexAry,intAs8bit)
{let groupMap=this.indexBufMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.indexBufMapMap.set(group,groupMap);}
let iboID=groupMap.get(name);if(iboID===undefined)
{iboID=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,iboID);if(intAs8bit)
__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,new Uint8Array(indexAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);else
__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,new Uint16Array(indexAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,null);groupMap.set(name,iboID);}
return iboID;}
createDynamicFontIBO(group,name,indexAry,maxIndicies)
{let groupMap=this.indexBufMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.indexBufMapMap.set(group,groupMap);}
let iboID=groupMap.get(name);if(iboID===undefined)
{iboID=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();groupMap.set(name,iboID);} 
if(maxIndicies>this.currentMaxFontIndices)
{__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,iboID);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,new Uint16Array(indexAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,null);this.currentMaxFontIndices=maxIndicies;}
return iboID;}
createScaledFrame(group,name,scaledFrame,textureSize,glyphSize,frameSize,spriteSheetOffset,meshFileVertAry=null)
{let groupMap=this.vertexBufMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.vertexBufMapMap.set(group,groupMap);}
let vboID=groupMap.get(name);if(vboID===undefined)
{let vertAry=[];this.generateScaledFrame(vertAry,scaledFrame,textureSize,glyphSize,frameSize,spriteSheetOffset);if(meshFileVertAry!==null)
Array.prototype.push.apply(vertAry,meshFileVertAry);vboID=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,vboID);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,new Float32Array(vertAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,null);groupMap.set(name,vboID);}
return vboID;}
generateScaledFrame(vertAry,scaledFrame,textureSize,glyphSize,frameSize,spriteSheetOffset)
{let center=new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](frameSize.w/2,frameSize.h/2);let frameLgth=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](frameSize.w-(scaledFrame.frame.w*2.0),frameSize.h-(scaledFrame.frame.h*2.0));let uvLgth=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](glyphSize.w-(scaledFrame.frame.w*2.0),glyphSize.h-(scaledFrame.frame.h*2.0));let quadBuf=[new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"],new __WEBPACK_IMPORTED_MODULE_3__common_quad2d__["a"]];this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](-center.x,center.y-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-frameLgth.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](0,scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,uvLgth.h),textureSize,frameSize,spriteSheetOffset,quadBuf[0]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](-center.x,center.y),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](0,0),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[1]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](-(center.x-scaledFrame.frame.w),center.y),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](frameLgth.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,0),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](uvLgth.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[2]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](center.x-scaledFrame.frame.w,center.y),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w+uvLgth.w,0),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[3]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](center.x-scaledFrame.frame.w,center.y-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-frameLgth.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w+uvLgth.w,scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,uvLgth.h),textureSize,frameSize,spriteSheetOffset,quadBuf[4]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](center.x-scaledFrame.frame.w,-(center.y-scaledFrame.frame.h)),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w+uvLgth.w,scaledFrame.frame.h+uvLgth.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[5]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](-(center.x-scaledFrame.frame.w),-(center.y-scaledFrame.frame.h)),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](frameLgth.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,scaledFrame.frame.h+uvLgth.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](uvLgth.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[6]);this.createQuad(
new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"](-center.x,-(center.y-scaledFrame.frame.h)),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,-scaledFrame.frame.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](0,scaledFrame.frame.h+uvLgth.h),new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](scaledFrame.frame.w,scaledFrame.frame.h),textureSize,frameSize,spriteSheetOffset,quadBuf[7]);Array.prototype.push.apply(vertAry,quadBuf[0].vert[0].data);Array.prototype.push.apply(vertAry,quadBuf[0].vert[1].data);Array.prototype.push.apply(vertAry,quadBuf[0].vert[2].data);Array.prototype.push.apply(vertAry,quadBuf[0].vert[3].data);Array.prototype.push.apply(vertAry,quadBuf[1].vert[1].data);Array.prototype.push.apply(vertAry,quadBuf[1].vert[2].data);Array.prototype.push.apply(vertAry,quadBuf[2].vert[1].data);Array.prototype.push.apply(vertAry,quadBuf[2].vert[3].data);Array.prototype.push.apply(vertAry,quadBuf[3].vert[1].data);Array.prototype.push.apply(vertAry,quadBuf[3].vert[3].data);Array.prototype.push.apply(vertAry,quadBuf[4].vert[0].data);Array.prototype.push.apply(vertAry,quadBuf[4].vert[3].data);Array.prototype.push.apply(vertAry,quadBuf[5].vert[0].data);Array.prototype.push.apply(vertAry,quadBuf[5].vert[3].data);Array.prototype.push.apply(vertAry,quadBuf[6].vert[0].data);Array.prototype.push.apply(vertAry,quadBuf[7].vert[0].data);}
createQuad(vert,vSize,uv,uvSize,textureSize,frameSize,spriteSheetOffset,quadBuf)
{let additionalOffsetX=0;if(Math.trunc(frameSize.w)% 2!=0)
additionalOffsetX=0.5;let additionalOffsetY=0;if(Math.trunc(frameSize.h)% 2!=0)
additionalOffsetY=0.5;quadBuf.vert[0].x=vert.x+additionalOffsetX;quadBuf.vert[0].y=vert.y+additionalOffsetY+vSize.h;quadBuf.vert[0].u=spriteSheetOffset.x1+(uv.u/textureSize.w);quadBuf.vert[0].v=spriteSheetOffset.y1+((uv.v+uvSize.h)/textureSize.h);quadBuf.vert[1].x=vert.x+additionalOffsetX+vSize.w;quadBuf.vert[1].y=vert.y+additionalOffsetY;quadBuf.vert[1].u=spriteSheetOffset.x1+((uv.u+uvSize.w)/textureSize.w);quadBuf.vert[1].v=spriteSheetOffset.y1+(uv.v/textureSize.h);quadBuf.vert[2].x=quadBuf.vert[0].x;quadBuf.vert[2].y=quadBuf.vert[1].y;quadBuf.vert[2].u=quadBuf.vert[0].u;quadBuf.vert[2].v=quadBuf.vert[1].v;quadBuf.vert[3].x=quadBuf.vert[1].x;quadBuf.vert[3].y=quadBuf.vert[0].y;quadBuf.vert[3].u=quadBuf.vert[1].u;quadBuf.vert[3].v=quadBuf.vert[0].v;}
deleteGroup(group)
{let groupMap=this.vertexBufMapMap.get(group);if(groupMap!==undefined)
{for(let [key,vboID] of groupMap.entries())
__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].deleteBuffer(vboID);this.vertexBufMapMap.delete(group);}
groupMap=this.indexBufMapMap.get(group);if(groupMap!==undefined)
{for(let [key,iboID] of groupMap.entries())
__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].deleteBuffer(iboID);this.indexBufMapMap.delete(group);}
}
isVBO(group,name)
{let groupMap=this.vertexBufMapMap.get(group);if(groupMap===undefined)
return null;let vboId=groupMap.get(name);if(vboId===undefined)
return null;return vboId;}
bind(vbo,ibo)
{if(this.currentVBO!=vbo)
{this.currentVBO=vbo;__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,vbo);}
if(this.currentIBO!=ibo)
{this.currentIBO=ibo;__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,ibo);}
}
unbind()
{this.currentVBO=null;this.currentIBO=null;__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,null);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,null);}
}
var vertexBufferManager=new VertexBufferManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__=__webpack_require__(3);class ManagerBase
{constructor()
{this.listTableMap=new Map;this.loadCounter=0;}
loadListTable(xmlNode)
{if(xmlNode)
{let groupLst=xmlNode.getElementsByTagName('groupList');for(let i=0;i<groupLst.length;++i)
{let groupName=groupLst[i].getAttribute('groupName');let fileLst=groupLst[i].getElementsByTagName('file');if(fileLst.length)
{let pathAry=[];for(let j=0;j<fileLst.length;++j)
{pathAry.push(fileLst[j].getAttribute('path'));}
this.listTableMap.set(groupName,pathAry);}
}
}
}
downloadFile(fileType,group,filePath,finishCallback,loadCallback)
{++this.loadCounter;__WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__["b"](fileType,filePath,(fileData)=>
{loadCallback(group,fileData,filePath,finishCallback);--this.loadCounter;if(this.loadCounter===0)
finishCallback();});}
loadGroup(groupNameStr,groupMapMap,groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let pathAry=this.listTableMap.get(group);if(pathAry!==undefined)
{if(groupMapMap.get(group)===undefined)
{groupMapMap.set(group,new Map);this.load(group,finishCallback);}
else
{throw new Error(`${groupNameStr} group has alread been loaded(${group})!`);}
}
else
{throw new Error(`${groupNameStr} group name can't be found(${group})!`);}
}
}
load(group,finishCallback)
{let pathAry=this.listTableMap.get(group);if(pathAry!==undefined)
{for(let i=0;i<pathAry.length;++i)
{if(!__WEBPACK_IMPORTED_MODULE_0__utilities_assetholder__["a"].has(group,pathAry[i]))
{this.downloadFile('xml',group,pathAry[i],finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_0__utilities_assetholder__["a"].set(group,filePath,xmlNode);this.loadFromNode(group,xmlNode,filePath,finishCallback);});}
else
{this.loadFromNode(group,__WEBPACK_IMPORTED_MODULE_0__utilities_assetholder__["a"].get(group,pathAry[i]),pathAry[i],null);}
}
if(this.loadCounter===0)
finishCallback();}
}
}
__webpack_exports__["a"]=ManagerBase;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__defs__=__webpack_require__(0);class Color
{constructor(r=1,g=1,b=1,a=1)
{this.data=new Float32Array([r,g,b,a]);}
set(r=1,g=1,b=1,a=1)
{this.data[0]=r;this.data[1]=g;this.data[2]=b;this.data[3]=a;}
copy(obj)
{this.data[0]=obj.data[0];this.data[1]=obj.data[1];this.data[2]=obj.data[2];this.data[3]=obj.data[3];}
set r(value)
{if(value>1.5)
value*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];this.data[0]=value;}
get r(){return this.data[0];}
set g(value)
{if(value>1.5)
value*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];this.data[1]=value;}
get g(){return this.data[1];}
set b(value)
{if(value>1.5)
value*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];this.data[2]=value;}
get b(){return this.data[2];}
set a(value)
{if(value>1.5)
value*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];this.data[3]=value;}
get a(){return this.data[3];}
convert()
{if(this.r>1.5)
this.r*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];if(this.g>1.5)
this.g*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];;if(this.b>1.5)
this.b*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];if(this.a>1.5)
this.a*=__WEBPACK_IMPORTED_MODULE_0__defs__["_59"];}
transformHSV(hue,sat,val)
{let VSU=val*sat*Math.cos(hue*__WEBPACK_IMPORTED_MODULE_0__defs__["g"]);let VSW=val*sat*Math.sin(hue*__WEBPACK_IMPORTED_MODULE_0__defs__["g"]);let _r=this.data[0],_g=this.data[1],_b=this.data[2];this.data[0]=(.299*val+.701*VSU+.168*VSW)*_r
+(.587*val-.587*VSU+.330*VSW)*_g
+(.114*val-.114*VSU-.497*VSW)*_b;this.data[1]=(.299*val-.299*VSU-.328*VSW)*_r
+(.587*val+.413*VSU+.035*VSW)*_g
+(.114*val-.114*VSU+.292*VSW)*_b;this.data[2]=(.299*val-.3*VSU+1.25*VSW)*_r
+(.587*val-.588*VSU-1.05*VSW)*_g
+(.114*val+.886*VSU-.203*VSW)*_b;}
}
__webpack_exports__["a"]=Color;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class ScriptComponent
{constructor()
{this.scriptAry=[];}
set(script)
{this.scriptAry.push(script);}
update()
{for(let i=this.scriptAry.length-1;i>-1;--i)
{this.scriptAry[i].execute();if(this.scriptAry[i].isFinished)
this.scriptAry.splice(i,1);}
}
isActive()
{return(this.scriptAry.length>0);}
reset()
{this.scriptAry=[];}
}
__webpack_exports__["a"]=ScriptComponent;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__controlbase__=__webpack_require__(87);var __WEBPACK_IMPORTED_MODULE_1__scrollparam__=__webpack_require__(49);var __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_3__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_4__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_5__common_quad__=__webpack_require__(88);var __WEBPACK_IMPORTED_MODULE_6__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_7__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_8__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_9__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_11__managers_actionmanager__=__webpack_require__(36);var __WEBPACK_IMPORTED_MODULE_12__script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_13__script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_14__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_15__common_defs__=__webpack_require__(0);class UIControl extends __WEBPACK_IMPORTED_MODULE_0__controlbase__["a"]
{constructor(group)
{super(group);this.spriteAry=[];this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_12__script_scriptcomponent__["a"];this.defaultState;this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["E"];this.lastState=__WEBPACK_IMPORTED_MODULE_15__common_defs__["E"];this.executionAction;this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["r"];this.size=new __WEBPACK_IMPORTED_MODULE_3__common_size__["a"];this.sizeModifier=new __WEBPACK_IMPORTED_MODULE_6__common_rect__["a"];this.collisionQuad=new __WEBPACK_IMPORTED_MODULE_5__common_quad__["a"];this.collisionCenter=new __WEBPACK_IMPORTED_MODULE_4__common_point__["a"];this.smartGui=null;this.mouseSelectType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["m"];this.scriptFactoryMap=new Map;this.scrollParam=null;this.executionActionCallback=null;}
loadFromNode(node)
{super.loadFromNode(node);let attr=node.getAttribute('defaultState');if(attr)
this.setDefaultState(attr);attr=node.getAttribute('mouseSelectDown');if(attr &&(attr==='true'))
this.mouseSelectType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["k"];let actionNode=node.getElementsByTagName('action');if(actionNode.length)
{attr=actionNode[0].getAttribute('actionType')
if(attr)
this.setActionType(attr);attr=actionNode[0].getAttribute('executionAction')
if(attr)
this.executionAction=attr;}
let stateScriptNode=node.getElementsByTagName('stateScript');if(stateScriptNode.length)
{let attr=stateScriptNode[0].getAttribute("onDisabled");if(attr)
this.scriptFactoryMap.set(__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"],__WEBPACK_IMPORTED_MODULE_13__script_scriptmanager__["a"].get(attr));attr=stateScriptNode[0].getAttribute("onInactive");if(attr)
this.scriptFactoryMap.set(__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"],__WEBPACK_IMPORTED_MODULE_13__script_scriptmanager__["a"].get(attr));attr=stateScriptNode[0].getAttribute("onActive");if(attr)
this.scriptFactoryMap.set(__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"],__WEBPACK_IMPORTED_MODULE_13__script_scriptmanager__["a"].get(attr));attr=stateScriptNode[0].getAttribute("onSelect");if(attr)
this.scriptFactoryMap.set(__WEBPACK_IMPORTED_MODULE_15__common_defs__["F"],__WEBPACK_IMPORTED_MODULE_13__script_scriptmanager__["a"].get(attr));}
let scrollParamNode=node.getElementsByTagName('scroll');if(scrollParamNode.length)
{this.scrollParam=new __WEBPACK_IMPORTED_MODULE_1__scrollparam__["a"];this.scrollParam.loadFromNode(scrollParamNode);}
this.sizeModifier=__WEBPACK_IMPORTED_MODULE_14__utilities_xmlparsehelper__["f"](node);this.revertToDefaultState();}
loadControlFromNode(node)
{let spriteNode=node.getElementsByTagName('sprite');if(spriteNode.length)
{let fontSpriteCount=[0];for(let i=0;i<spriteNode.length;++i)
this.loadSpriteFromNode(spriteNode[i],fontSpriteCount);}
}
loadSpriteFromNode(node,fontSpriteCount)
{let objectName=node.getAttribute('objectName');let sprite=new __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_9__objectdatamanager_objectdatamanager__["a"].getData(this.group,objectName));this.spriteAry.push(sprite);sprite.loadTransFromNode(node);sprite.initScriptFactoryFunctions(node);if(sprite.visualComponent.isFontSprite())
{sprite.visualComponent.loadFontPropFromNode(node);if(this.stringAry.length &&(fontSpriteCount[0]<this.stringAry.length))
sprite.visualComponent.setFontString(this.stringAry[fontSpriteCount[0]]);sprite.visualComponent.color=__WEBPACK_IMPORTED_MODULE_14__utilities_xmlparsehelper__["b"](node,sprite.visualComponent.color);++fontSpriteCount[0];}
else
{let width=sprite.objData.size.w+Math.abs(sprite.pos.x);let height=sprite.objData.size.h+Math.abs(sprite.pos.y);if(width>this.size.w)
this.size.w=width;if(height>this.size.h)
this.size.h=height;}
}
loadSpriteFromArray(objectNameAry)
{for(let i=0;i<objectNameAry.length;++i)
{this.spriteAry.push(new __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_9__objectdatamanager_objectdatamanager__["a"].getData(this.group,objectNameAry[i])));}
}
update()
{this.scriptComponent.update();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].update();}
doTransform(object=null)
{if(object)
this.transform(object.matrix,object.wasWorldPosTranformed());else
this.transform();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());this.transformCollision();}
transformCollision()
{if(this.wasWorldPosTranformed()&&!this.size.isEmpty())
{let finalMatrix=new __WEBPACK_IMPORTED_MODULE_7__utilities_matrix__["a"](this.matrix);finalMatrix.scaleFromValue(__WEBPACK_IMPORTED_MODULE_8__utilities_settings__["a"].orthoAspectRatio.h);finalMatrix.invertY();let screenHalf=__WEBPACK_IMPORTED_MODULE_8__utilities_settings__["a"].size_half;let halfwidth=this.size.w*0.5;let halfHeight=this.size.h*0.5;let quad=new __WEBPACK_IMPORTED_MODULE_5__common_quad__["a"];quad.point[0].x=-halfwidth+-this.sizeModifier.x1;quad.point[0].y=-halfHeight+-this.sizeModifier.y1;quad.point[1].x=halfwidth+this.sizeModifier.x2;quad.point[1].y=-halfHeight+-this.sizeModifier.y1;quad.point[2].x=halfwidth+this.sizeModifier.x2;quad.point[2].y=halfHeight+this.sizeModifier.y2;quad.point[3].x=-halfwidth+-this.sizeModifier.x1;quad.point[3].y=halfHeight+this.sizeModifier.y2;finalMatrix.transformQuad(this.collisionQuad,quad);this.collisionQuad.point[0].x+=screenHalf.w;this.collisionQuad.point[0].y+=screenHalf.h;this.collisionQuad.point[1].x+=screenHalf.w;this.collisionQuad.point[1].y+=screenHalf.h;this.collisionQuad.point[2].x+=screenHalf.w;this.collisionQuad.point[2].y+=screenHalf.h;this.collisionQuad.point[3].x+=screenHalf.w;this.collisionQuad.point[3].y+=screenHalf.h;finalMatrix.transformPoint(this.collisionCenter,new __WEBPACK_IMPORTED_MODULE_4__common_point__["a"]);this.collisionCenter.x+=screenHalf.w;this.collisionCenter.y+=screenHalf.h;}
}
render(matrix)
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);}
handleEvent(event)
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["W"])
{this.onStateChange(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_8"])
{this.onSelectExecute(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_9"])
{this.onSetActiveControl(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_1"])
{this.onReactivate(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_15"])
{this.onTransIn(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_16"])
{this.onTransOut(event);}
this.smartHandleEvent(event);}
onTransIn(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_50"])
{if(this.lastState!=this.state)
this.setDisplayState();}
}
onTransOut(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_50"])
{this.reset();this.resetSpriteScript();if(this.lastState!=this.state)
this.setDisplayState();}
}
onStateChange(event)
{if(event.detail.arg[1]===this)
this.changeState(event.detail.arg[0]);else
this.deactivateControl();}
onSelectExecute(event)
{if(this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["F"])
{if(this.actionType===__WEBPACK_IMPORTED_MODULE_15__common_defs__["z"])
__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_15__common_defs__["_14"],this.executionAction);else if(this.actionType===__WEBPACK_IMPORTED_MODULE_15__common_defs__["y"])
__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_15__common_defs__["_13"],this.executionAction,this);else if(this.actionType===__WEBPACK_IMPORTED_MODULE_15__common_defs__["s"])
__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_15__common_defs__["V"]);else if(this.actionType===__WEBPACK_IMPORTED_MODULE_15__common_defs__["u"])
__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_15__common_defs__["_12"]);else if(this.actionType===__WEBPACK_IMPORTED_MODULE_15__common_defs__["v"])
__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_15__common_defs__["Z"],__WEBPACK_IMPORTED_MODULE_15__common_defs__["_50"],this.executionAction);this.smartExecuteAction();if(this.executionActionCallback!==null)
for(let i=0;i<this.executionActionCallback.length;++i)
this.executionActionCallback[i](this);}
}
onSetActiveControl(event)
{if((event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_15__common_defs__["j"])&&
(this.lastState>__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"]))
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"];if(!__WEBPACK_IMPORTED_MODULE_11__managers_actionmanager__["a"].wasLastDeviceMouse())
{this.resetSpriteScript();this.setDisplayState();}
}
}
onReactivate(event)
{if(this.state>__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"])
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"];if(!__WEBPACK_IMPORTED_MODULE_11__managers_actionmanager__["a"].wasLastDeviceMouse()||
this.isPointInControl(__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].mouseX,__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].mouseY))
{this.resetSpriteScript();this.setDisplayState();}
}
}
onMouseMove(event)
{let result=false;if(!this.isDisabled()&& this.isPointInControl(event.clientX+__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].mouseOffsetX,event.clientY+__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].mouseOffsetY))
{result=true;if(!this.isActive())
{__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_15__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"],this);}
}
return result;}
changeState(state)
{if(this.state!==state)
{this.state=state;this.prepareControlScriptFactory(this.state);this.resetSpriteScript();this.setDisplayState();this.lastState=this.state;}
}
activateControl()
{if(!this.isDisabled())
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"];this.resetSpriteScript();this.setDisplayState();return true;}
return false;}
deactivateControl()
{if((this.lastState===__WEBPACK_IMPORTED_MODULE_15__common_defs__["E"])||
(this.lastState>__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"]))
{this.reset();this.resetSpriteScript();this.setDisplayState();this.lastState=this.state;}
}
disableControl()
{if((this.lastState===__WEBPACK_IMPORTED_MODULE_15__common_defs__["E"])||
(this.lastState>__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"]))
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"];this.resetSpriteScript();this.setDisplayState();}
}
enableControl()
{if(this.lastState<=__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"])
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"];this.resetSpriteScript();this.setDisplayState();}
}
setDisplayState()
{this.prepareSpriteScriptFactoryFunction(this.state);}
init()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].init();this.prepareSpriteScriptFactoryFunction(__WEBPACK_IMPORTED_MODULE_15__common_defs__["D"]);}
cleanUp()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].cleanUp();}
prepareSpriteScriptFactoryFunction(controlState)
{let scriptFactoryMapKey;let forceUpdate=false;switch(controlState)
{case __WEBPACK_IMPORTED_MODULE_15__common_defs__["D"]:
scriptFactoryMapKey="init";forceUpdate=true;break;case __WEBPACK_IMPORTED_MODULE_15__common_defs__["B"]:
scriptFactoryMapKey="disabled";forceUpdate=true;break;case __WEBPACK_IMPORTED_MODULE_15__common_defs__["C"]:
scriptFactoryMapKey="inactive";forceUpdate=true;break;case __WEBPACK_IMPORTED_MODULE_15__common_defs__["A"]:
scriptFactoryMapKey="active";break;case __WEBPACK_IMPORTED_MODULE_15__common_defs__["F"]:
scriptFactoryMapKey="selected";break;};this.prepareSpriteScriptFactory(scriptFactoryMapKey,forceUpdate);}
prepareSpriteScriptFactory(scriptFactoryMapKey,forceUpdate)
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].prepareScriptFactoryFunction(scriptFactoryMapKey,forceUpdate);}
prepareControlScriptFactory(controlState)
{let scriptFactory=this.scriptFactoryMap.get(controlState);if(scriptFactory)
this.scriptComponent.set(scriptFactory(this));}
reset(complete=false)
{if(this.state>__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"])
this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"];if(complete)
this.lastState=this.state;}
resetSpriteScript()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].scriptComponent.reset();}
setDefaultState(value)
{if(value==='inactive')
this.defaultState=__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"];else if(value==='active')
this.defaultState=__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"];else if(value==='disabled')
this.defaultState=__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"];else if(value==='selected')
this.defaultState=__WEBPACK_IMPORTED_MODULE_15__common_defs__["F"];}
smartCreate()
{if(this.smartGui)
this.smartGui.create();}
smartHandleEvent(event)
{if(this.smartGui)
this.smartGui.handleEvent(event);}
smartExecuteAction()
{if(this.smartGui)
this.smartGui.execute();}
revertToDefaultState()
{this.state=this.defaultState;}
setState(state,setLastState)
{this.state=state;if(setLastState)
this.lastState=state;}
setActionType(value)
{if(value==='action')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["r"];else if(value==='to_tree')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["z"];else if(value==='to_menu')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["y"];else if(value==='back')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["s"];else if(value==='close')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["u"];else if(value==='change_focus')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["t"];else if(value==='game_state_change')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["v"];else if(value==='quit_game')
this.actionType=__WEBPACK_IMPORTED_MODULE_15__common_defs__["x"];}
createFontStr(fontString,spriteIndex=0)
{let fontSpriteCounter=0;for(let i=0;i<this.spriteAry.length;++i)
{if(this.spriteAry[i].visualComponent.isFontSprite())
{if(fontSpriteCounter===spriteIndex)
{this.spriteAry[i].visualComponent.createFontString(fontString);break;}
++fontSpriteCounter;}
}
}
createFontString(stringIndex=0,spriteIndex=0)
{if(this.stringAry.length)
this.createFontStr(this.stringAry[stringIndex],spriteIndex);}
setFontString(fontString,spriteIndex=0)
{let fontSpriteCounter=0;for(let i=0;i<this.spriteAry.length;++i)
{if(this.spriteAry[i].visualComponent.isFontSprite())
{if(fontSpriteCounter===spriteIndex)
{this.spriteAry[i].visualComponent.setFontString(fontString);break;}
++fontSpriteCounter;}
}
}
handleSelectAction(event)
{if((this.isSelectable()&&
(event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_46"]]===__WEBPACK_IMPORTED_MODULE_15__common_defs__["_57"])&&
(event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_49"]]===this.mouseSelectType)&&
this.isPointInControl(event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_47"]],event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_48"]]))||
(this.isActive()&&(event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_46"]]!==__WEBPACK_IMPORTED_MODULE_15__common_defs__["_57"])&&(event.detail.arg[__WEBPACK_IMPORTED_MODULE_15__common_defs__["_49"]]===__WEBPACK_IMPORTED_MODULE_15__common_defs__["k"])))
{__WEBPACK_IMPORTED_MODULE_10__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_15__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_15__common_defs__["F"],this);return true;}
return false;}
activateFirstInactiveControl()
{if(__WEBPACK_IMPORTED_MODULE_11__managers_actionmanager__["a"].wasLastDeviceMouse())
{if(!this.isDisabled())
{this.lastState=this.state=__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"];return true;}
return false;}
return this.activateControl();}
isPointInControl(x,y)
{return this.collisionQuad.isPointInQuad(x,y);}
findControlByName(name)
{if(this.name===name)
return this;return null;}
findControlByRef(ctrl)
{if(ctrl===this)
return this;return null;}
setStringToList(str)
{this.stringAry.push(str);}
isDisabled()
{return this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["B"];}
isInactive()
{return this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"];}
isActive()
{return(this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"]);}
isSelected()
{return(this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["F"]);}
isSelectable()
{return((this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["C"])||(this.state===__WEBPACK_IMPORTED_MODULE_15__common_defs__["A"]));}
isSubControl()
{return false;}
connect_ExecutionAction(callback)
{if(this.executionActionCallback===null)
this.executionActionCallback=[];this.executionActionCallback.push(callback);}
getActiveControl()
{return this;}
setAlpha(alpha)
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].setAlpha(alpha);}
canScroll(msg)
{if(this.isActive()&& this.scrollParam && this.scrollParam.canScroll(msg))
return true;return false;}
}
__webpack_exports__["a"]=UIControl;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return signalManager;});class SignalManager
{constructor()
{this.smartGuiControlSignal=[];this.smartMenuSignal=[];this.aiCreateSignal=[];this.loadCompleteSignal=[];this.resolutionChangeSignal=[];}
connect_smartGui(slot)
{this.smartGuiControlSignal.push(slot);}
connect_smartMenu(slot)
{this.smartMenuSignal.push(slot);}
connect_aiCreate(slot)
{this.aiCreateSignal.push(slot);}
connect_loadComplete(slot)
{this.loadCompleteSignal.push(slot);}
connect_resolutionChange(slot)
{this.resolutionChangeSignal.push(slot);}
clear_loadComplete(slot)
{this.loadCompleteSignal=[];}
broadcast_smartGui(control)
{for(let i=0;i<this.smartGuiControlSignal.length;++i)
this.smartGuiControlSignal[i](control);}
broadcast_smartMenu(menu)
{for(let i=0;i<this.smartMenuSignal.length;++i)
this.smartMenuSignal[i](menu);}
broadcast_aiCreate(aiName,actorSprite)
{for(let i=0;i<this.aiCreateSignal.length;++i)
this.aiCreateSignal[i](aiName,actorSprite);}
broadcast_loadComplete()
{for(let i=0;i<this.loadCompleteSignal.length;++i)
this.loadCompleteSignal[i]();}
broadcast_resolutionChange()
{for(let i=0;i<this.resolutionChangeSignal.length;++i)
this.resolutionChangeSignal[i]();}
}
var signalManager=new SignalManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Rect
{constructor(x1=0,y1=0,x2=0,y2=0)
{this.data=new Float32Array([x1,y1,x2,y2]);}
set(x1=0,y1=0,x2=0,y2=0)
{this.data[0]=x1;this.data[1]=y1;this.data[2]=x2;this.data[3]=y2;}
set x1(value){this.data[0]=value;}
get x1(){return this.data[0];}
set y1(value){this.data[1]=value;}
get y1(){return this.data[1];}
set x2(value){this.data[2]=value;}
get x2(){return this.data[2];}
set y2(value){this.data[3]=value;}
get y2(){return this.data[3];}
}
__webpack_exports__["a"]=Rect;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__statemessage__=__webpack_require__(106);const GAME_STATE_NULL=0;const GAME_STATE_STARTUP=1;__webpack_exports__["c"]=GAME_STATE_STARTUP;const GAME_STATE_TITLESCREEN=2;__webpack_exports__["d"]=GAME_STATE_TITLESCREEN;const GAME_STATE_LOAD=3;__webpack_exports__["a"]=GAME_STATE_LOAD;const GAME_STATE_RUN=4;__webpack_exports__["b"]=GAME_STATE_RUN;class GameState
{constructor(gameState,nextState,callback)
{this.stateChange=false;this.gameState=gameState;this.nextState=nextState;this.callback=callback;this.stateMessage=new __WEBPACK_IMPORTED_MODULE_0__statemessage__["a"];}
init()
{}
cleanUp()
{}
handleEvent(event)
{}
doStateChange()
{return this.stateChange;}
miscProcess()
{}
physics()
{}
update()
{}
transform()
{}
preRender()
{}
postRender()
{}
}
__webpack_exports__["e"]=GameState;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return menuManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__=__webpack_require__(36);var __WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_3__managers_signalmanager__=__webpack_require__(23);var __WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_5__gui_menu__=__webpack_require__(82);var __WEBPACK_IMPORTED_MODULE_6__gui_menutree__=__webpack_require__(96);var __WEBPACK_IMPORTED_MODULE_7__utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_8__common_defs__=__webpack_require__(0);class MenuManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.menuTreeMapMap=new Map;this.menuMapMap=new Map;this.activeMenuTreeAry=[];this.activeInterTreeAry=[];this.active=false;this.backAction;this.toggleAction;this.escapeAction;this.selectAction;this.upAction;this.downAction;this.leftAction;this.rightAction;this.tabLeft;this.tabRight;this.defaultTree;this.scrollTimerId=0;this.allow=false;}
preloadGroup(groupAry,finishCallback)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let pathAry=this.listTableMap.get(group);if(pathAry!==undefined)
{if(this.menuMapMap.get(group)===undefined)
{this.menuMapMap.set(group,new Map);this.menuTreeMapMap.set(group,new Map);for(let i=0;i<pathAry.length;++i)
this.downloadFile('xml',group,pathAry[i],finishCallback,this.preload.bind(this));}
else
{throw new Error(`Menu group has alread been loaded(${group})!`);}
}
else
{throw new Error(`Menu Manager list group name can't be found(${group})!`);}
}
}
preload(group,node,filePath,finishCallback)
{this.preloadMenuXML(group,node,finishCallback);this.loadTreesFromNode(group,node);}
preloadMenuXML(group,node,finishCallback)
{let groupMap=this.menuMapMap.get(group);let menuNode=node.getElementsByTagName('menu');for(let i=0;i<menuNode.length;++i)
{let name=menuNode[i].getAttribute('name');let filePath=menuNode[i].getAttribute('file');if(groupMap.get(name)!==undefined)
throw new Error(`Duplicate menu name!(${name}).`);let menu=new __WEBPACK_IMPORTED_MODULE_5__gui_menu__["a"](name,group,filePath);groupMap.set(name,menu);menu.loadTransFromNode(menuNode[i]);menu.loadDynamicOffsetFromNode(menuNode[i]);if(!__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].has(group,filePath))
{__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].set(group,filePath);this.downloadFile('xml',group,filePath,finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].set(group,filePath,xmlNode);this.preloadControlXML(group,xmlNode,finishCallback);});}
}
}
loadTreesFromNode(group,node)
{let menuGroupMap=this.menuMapMap.get(group);let treeGroupMap=this.menuTreeMapMap.get(group);let treeNode=node.getElementsByTagName('tree');for(let i=0;i<treeNode.length;++i)
{let name=treeNode[i].getAttribute('name');let rootMenu=treeNode[i].getAttribute('root');let defaultMenu=treeNode[i].getAttribute('default');let interfaceMenu=(treeNode[i].getAttribute('interfaceMenu')==='true');if(treeGroupMap.get(name)!==undefined)
throw new Error(`Duplicate tree name!(${name}).`);treeGroupMap.set(name,new __WEBPACK_IMPORTED_MODULE_6__gui_menutree__["a"](name,menuGroupMap,rootMenu,defaultMenu,interfaceMenu));if(rootMenu!=='')
{if(menuGroupMap.get(rootMenu)===undefined)
throw new Error(`Root menu doesn't exist!(${name}).`);}
else if(defaultMenu!=='')
{if(menuGroupMap.get(defaultMenu)===undefined)
throw new Error(`Default menu doesn't exist!(${name}).`);}
}
}
preloadControlXML(group,node,finishCallback)
{let controlLst=['staticMenuControls','mouseOnlyControls','menuControls','subControlList','scrollBoxControlList'];for(let i=0;i<controlLst.length;++i)
{let nodeLst=node.getElementsByTagName(controlLst[i]);if(nodeLst.length)
{let controlNode=nodeLst[0].getElementsByTagName('control');for(let j=0;j<controlNode.length;++j)
{let filePathNode=controlNode[j].getElementsByTagName('filePath');if(filePathNode.length)
{let filePath=filePathNode[0].getAttribute('file');if(filePath)
{if(!__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].has(group,filePath))
{__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].set(group,filePath);this.downloadFile('xml',group,filePath,finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].set(group,filePath,xmlNode);this.preloadControlXML(group,xmlNode,finishCallback);});}
}
}
}
}
}
}
createGroup(groupAry,doInit=true)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];let groupMap=this.menuMapMap.get(group);if(groupMap===undefined)
throw new Error(`Group map can't be found!(${group}).`);for(let [key,menu] of groupMap.entries())
{let node=__WEBPACK_IMPORTED_MODULE_4__utilities_assetholder__["a"].get(group,menu.filePath);menu.loadFromNode(node);__WEBPACK_IMPORTED_MODULE_3__managers_signalmanager__["a"].broadcast_smartMenu(menu);menu.smartCreate();}
if(doInit)
this.initGroup(group);}
}
freeGroup(groupAry)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];if(this.listTableMap.get(group)===undefined)
throw new Error(`Object data list group name can't be found(${group})!`);let groupMap=this.menuTreeMapMap.get(group);if(groupMap!==undefined)
{for(let [key,menuTree] of groupMap.entries())
{if(menuTree.interfaceMenu)
{let index=this.activeInterTreeAry.indexOf(menuTree);if(index>-1)
this.activeInterTreeAry.splice(index,1);}
else
{let index=this.activeMenuTreeAry.indexOf(menuTree);if(index>-1)
this.activeMenuTreeAry.splice(index,1);}
}
this.menuTreeMapMap.delete(group);this.menuMapMap.delete(group);}
}
}
initGroup(group)
{let groupMap=this.menuMapMap.get(group);if(groupMap!==undefined)
{for(let [key,menu] of groupMap.entries())
menu.init();}
else
{throw new Error(`Menu group name can't be found to init(${group})!`);}
}
cleanUpGroup(group)
{let groupMap=this.menuMapMap.get(group);if(groupMap!==undefined)
{for(let [key,menu] of groupMap.entries())
menu.cleanUp();}
else
{throw new Error(`Menu group name can't be found to clean up(${group})!`);}
}
loadMenuAction(node)
{this.backAction=node.getElementsByTagName('backAction')[0].childNodes[0].nodeValue;this.toggleAction=node.getElementsByTagName('toggleAction')[0].childNodes[0].nodeValue;this.escapeAction=node.getElementsByTagName('escapeAction')[0].childNodes[0].nodeValue;this.selectAction=node.getElementsByTagName('selectAction')[0].childNodes[0].nodeValue;this.upAction=node.getElementsByTagName('upAction')[0].childNodes[0].nodeValue;this.downAction=node.getElementsByTagName('downAction')[0].childNodes[0].nodeValue;this.leftAction=node.getElementsByTagName('leftAction')[0].childNodes[0].nodeValue;this.rightAction=node.getElementsByTagName('rightAction')[0].childNodes[0].nodeValue;this.tabLeft=node.getElementsByTagName('tabLeft')[0].childNodes[0].nodeValue;this.tabRight=node.getElementsByTagName('tabRight')[0].childNodes[0].nodeValue;this.defaultTree=node.getElementsByTagName('defaultTree')[0].childNodes[0].nodeValue;}
activateTree(treeAry)
{for(let tree=0;tree<treeAry.length;++tree)
{let treeStr=treeAry[tree];let found=false;for(let [groupKey,groupMap] of this.menuTreeMapMap.entries())
{for(let [key,tree] of groupMap.entries())
{if(key===treeStr)
{this.activateTreeGroup(groupKey,key);found=true;break;}
}
if(found)
break;}
if(!found)
throw new Error(`Menu tree doesn't exist(${treeStr})!`);}
}
activateTreeGroup(group,treeStr)
{let groupMap=this.menuTreeMapMap.get(group);if(groupMap!==undefined)
{let tree=groupMap.get(treeStr);if(tree!==undefined)
{if(tree.interfaceMenu)
{if(this.activeInterTreeAry.indexOf(tree)!==-1)
throw new Error(`Menu tree already active(${group}-${treeStr})!`);this.activeInterTreeAry.push(tree);}
else
{if(this.activeMenuTreeAry.indexOf(tree)!==-1)
throw new Error(`Menu tree already active(${group}-${treeStr})!`);this.activeMenuTreeAry.push(tree);}
tree.init();}
else
{throw new Error(`Menu tree doesn't exist(${group}-${treeStr})!`);}
}
else
{throw new Error(`Menu tree group doesn't exist(${group}-${treeStr})!`);}
this.setActiveState();}
deactivateTree(treeStr)
{for(let [groupKey,groupMap] of this.menuTreeMapMap.entries())
{for(let [key,tree] of groupMap.entries())
{if(key===treeStr)
{ActivateTree(groupIter.first,treeIter.first);return;}
}
}
throw new Error(`Menu tree doesn't exist(${treeStr})!`);}
deactivateTreeGroup(group,treeStr)
{let groupMap=this.menuTreeMapMap.get(group);if(groupMap!==undefined)
{let tree=groupMap.get(treeStr);if(tree!==undefined)
{if(tree.interfaceMenu)
{let index=this.activeInterTreeAry.indexOf(tree);if(index>-1)
this.activeInterTreeAry.splice(index,1);}
else
{let index=this.activeMenuTreeAry.indexOf(tree);if(index>-1)
this.activeMenuTreeAry.splice(index,1);}
}
else
{throw new Error(`Menu tree doesn't exist(${group}-${treeStr})!`);}
}
else
{throw new Error(`Menu tree group doesn't exist(${group}-${treeStr})!`);}
this.setActiveState();}
clearActiveTrees()
{this.active=false;if(this.scrollTimerId!==0)
clearInterval(this.scrollTimerId);this.activeMenuTreeAry=[];this.activeInterTreeAry=[];}
handleEvent(event)
{if(this.allow)
{if(event instanceof CustomEvent)
{if((event.detail.type>=__WEBPACK_IMPORTED_MODULE_8__common_defs__["_17"])&&(event.detail.type<=__WEBPACK_IMPORTED_MODULE_8__common_defs__["_2"]))
{if(this.scrollTimerId!=0)
clearTimeout(this.scrollTimerId);this.scrollTimerId=0;if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_8__common_defs__["k"])
this.handleEventForScrolling(event);}
this.handleEventForTrees(event);this.setActiveState();}
else
{if(__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasActionPress(event,this.escapeAction,__WEBPACK_IMPORTED_MODULE_8__common_defs__["k"]))
{let tree=this.getActiveTree();if(tree===null)
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["Y"],this.defaultTree);else
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["Y"],tree.name);}
else if(__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasActionPress(event,this.toggleAction,__WEBPACK_IMPORTED_MODULE_8__common_defs__["k"]))
{let tree=this.getActiveTree();if(tree===null)
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_12"],this.defaultTree);else
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_12"],tree.name);}
else if(this.active)
{let pressType;if(event.type==='mousemove')
{this.handleEventForTrees(event);}
else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.selectAction))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
{if(event instanceof KeyboardEvent)
{__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_7"],pressType,__WEBPACK_IMPORTED_MODULE_8__common_defs__["_56"]);}
else if(event instanceof MouseEvent)
{__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_8__common_defs__["_7"],pressType,__WEBPACK_IMPORTED_MODULE_8__common_defs__["_57"],event.clientX+__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].mouseOffsetX,event.clientY+__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].mouseOffsetY);}
}
else if(__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasActionPress(event,this.backAction,__WEBPACK_IMPORTED_MODULE_8__common_defs__["k"]))
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["V"]);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.upAction))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_17"],pressType);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.downAction))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["X"],pressType);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.leftAction))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_0"],pressType);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.rightAction))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_2"],pressType);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.tabLeft))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_10"],pressType);else if((pressType=__WEBPACK_IMPORTED_MODULE_1__managers_actionmanager__["a"].wasAction(event,this.tabRight))>__WEBPACK_IMPORTED_MODULE_8__common_defs__["l"])
__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_8__common_defs__["_11"],pressType);else
{this.handleEventForTrees(event);}
}
}
}
}
handleEventForTrees(event)
{let menuActive=false;for(let i=0;i<this.activeMenuTreeAry.length;++i)
{menuActive|=this.activeMenuTreeAry[i].isActive();this.activeMenuTreeAry[i].handleEvent(event);}
if(!menuActive)
{for(let i=0;i<this.activeInterTreeAry.length;++i)
{if(this.activeInterTreeAry[i].isActive())
this.activeInterTreeAry[i].handleEvent(event);}
}
}
handleEventForScrolling(event)
{if(this.active)
{if(!this.handleMenuScrolling(event,this.activeMenuTreeAry))
{this.handleMenuScrolling(event,this.activeInterTreeAry);}
}
}
handleMenuScrolling(event,activeTreeAry)
{let menuActive=false;for(let i=0;i<activeTreeAry.length;++i)
{if(activeTreeAry[i].isActive())
{menuActive=true;let scrollParam=activeTreeAry[i].getScrollParam(event.detail.type);if(scrollParam.canScroll(event.detail.type))
{this.scrollTimerId=setTimeout(
()=>
{this.scrollTimerId=setInterval(
()=>__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(scrollParam.msg),scrollParam.scrollDelay);__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(scrollParam.msg);},scrollParam.startDelay);break;}
}
}
return menuActive;}
update()
{if(this.active)
{if(!this.updateMenu(this.activeMenuTreeAry))
{this.updateMenu(this.activeInterTreeAry);}
}
}
updateMenu(activeTreeAry)
{let menuActive=false;for(let i=0;i<activeTreeAry.length;++i)
{if(activeTreeAry[i].isActive())
{menuActive=true;activeTreeAry[i].update();}
}
return menuActive;}
transform()
{if(this.active)
{if(!this.transformMenu(this.activeMenuTreeAry))
{this.transformMenu(this.activeInterTreeAry);}
}
}
transformMenu(activeTreeAry)
{let menuActive=false;for(let i=0;i<activeTreeAry.length;++i)
{if(activeTreeAry[i].isActive())
{menuActive=true;activeTreeAry[i].doTransform();}
}
return menuActive;}
render(matrix)
{if(this.active)
{for(let i=0;i<this.activeMenuTreeAry.length;++i)
if(this.activeMenuTreeAry[i].isActive())
this.activeMenuTreeAry[i].render(matrix);}
}
renderInterface(matrix)
{if(this.active)
{for(let i=0;i<this.activeInterTreeAry.length;++i)
if(this.activeInterTreeAry[i].isActive())
this.activeInterTreeAry[i].render(matrix);}
}
isMenuActive()
{if(this.active)
for(let i=0;i<this.activeMenuTreeAry.length;++i)
if(this.activeMenuTreeAry[i].isActive())
return true;return false;}
isMenuItemActive()
{let result=false;if(this.active)
{for(let i=0;i<this.activeMenuTreeAry.length;++i)
{if(this.activeMenuTreeAry[i].isActive())
{result=this.activeMenuTreeAry[i].isMenuItemActive();break;}
}
}
return result;}
isInterfaceItemActive()
{let result=false;if(this.active)
{for(let i=0;i<this.activeInterTreeAry.length;++i)
{if(this.activeInterTreeAry[i].isActive())
{result=this.activeInterTreeAry[i].isMenuItemActive();break;}
}
}
return result;}
setActiveState()
{this.active=false;for(let i=0;i<this.activeMenuTreeAry.length;++i)
{if(this.activeMenuTreeAry[i].isActive())
{this.active=true;break;}
}
if(!this.active)
{for(let i=0;i<this.activeInterTreeAry.length;++i)
{if(this.activeInterTreeAry[i].isActive())
{this.active=true;break;}
}
}
}
getMenu(name)
{let menu=undefined;for(let [groupKey,groupMap] of this.menuMapMap.entries())
{menu=groupMap.get(name);if(menu!==undefined)
break;}
if(menu===undefined)
throw new Error(`Menu being asked for is missing(${name})!`);return menu;}
getMenuControl(name,controlName)
{let menu=this.getMenu(name);let control=menu.getControl(controlName);if(control===null)
throw new Error(`Menu control being asked for is missing(${name})!`);return control;}
getActiveControl(name)
{let menu=this.getMenu(name);return menu.GetActiveControl();}
getActiveMenu()
{let menu=null;for(let i=0;i<this.activeMenuTreeAry.length;++i)
{if(this.activeMenuTreeAry[i].isActive())
{menu=this.activeMenuTreeAry[i].getActiveMenu();break;}
}
if(menu===null)
throw new Error('There is no active menu!');return menu;}
getActiveTree()
{let tree=null;for(let i=0;i<this.activeMenuTreeAry.length;++i)
{if(this.activeMenuTreeAry[i].isActive())
{tree=this.activeMenuTreeAry[i];break;}
}
return tree;}
resetTransform()
{for(let [groupKey,groupMap] of this.menuMapMap.entries())
for(let [key,menu] of groupMap.entries())
menu.forceTransform();}
resetDynamicOffset()
{for(let [groupKey,groupMap] of this.menuMapMap.entries())
for(let [key,menu] of groupMap.entries())
menu.resetDynamicPos();}
get allowEventHandling(){return this.allow;}
set allowEventHandling(value){this.allow=value;}
}
var menuManager=new MenuManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Vertex2d
{constructor(x=0,y=0,z=0,u=0,v=0)
{this.data=[x,y,z,u,v];}
set x(value){this.data[0]=value;}
get x(){return this.data[0];}
set y(value){this.data[1]=value;}
get y(){return this.data[1];}
set z(value){this.data[2]=value;}
get z(){return this.data[2];}
set u(value){this.data[3]=value;}
get u(){return this.data[3];}
set v(value){this.data[4]=value;}
get v(){return this.data[4];}
}
__webpack_exports__["a"]=Vertex2d;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__gui_uicontrolnavnode__=__webpack_require__(51);var __WEBPACK_IMPORTED_MODULE_2__uicontrolfactory__=__webpack_require__(37);var __WEBPACK_IMPORTED_MODULE_3__common_defs__=__webpack_require__(0);class UISubControl extends __WEBPACK_IMPORTED_MODULE_0__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_3__common_defs__["O"];this.subControlAry=[];this.controlNodeAry=[];this.activeNode=null;this.respondsToSelectMsg=false;}
loadControlFromNode(node)
{super.loadControlFromNode(node);let subControlSettingsNode=node.getElementsByTagName('subControlSettings');if(subControlSettingsNode.length)
{let attr=subControlSettingsNode[0].getAttribute('respondsToSelectMsg');if(attr==='true')
this.respondsToSelectMsg=true;}
let controlListNode=node.getElementsByTagName('subControlList');if(controlListNode.length)
{let navNodeMap=new Map;let controlNode=controlListNode[0].getElementsByTagName('control');for(let i=0;i<controlNode.length;++i)
{let control=__WEBPACK_IMPORTED_MODULE_2__uicontrolfactory__["a"](controlNode[i],this.group);this.subControlAry.push(control);if(control.name)
{let navNode=new __WEBPACK_IMPORTED_MODULE_1__gui_uicontrolnavnode__["a"](control);this.controlNodeAry.push(navNode);navNodeMap.set(control.name,navNode);}
}
if(navNodeMap.size>0)
{for(let i=0;i<controlNode.length;++i)
this.findNodes(controlNode[i],i,navNodeMap);}
}
}
init()
{super.init();for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].init();}
cleanUp()
{super.cleanUp();for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].cleanUp();}
findNodes(node,nodeIndex,navNodeMap)
{let navNode=node.getElementsByTagName('navigate');if(navNode.length)
{this.setNodes(navNode,nodeIndex,'up',__WEBPACK_IMPORTED_MODULE_3__common_defs__["_41"],navNodeMap);this.setNodes(navNode,nodeIndex,'down',__WEBPACK_IMPORTED_MODULE_3__common_defs__["_38"],navNodeMap);this.setNodes(navNode,nodeIndex,'left',__WEBPACK_IMPORTED_MODULE_3__common_defs__["_39"],navNodeMap);this.setNodes(navNode,nodeIndex,'right',__WEBPACK_IMPORTED_MODULE_3__common_defs__["_40"],navNodeMap);}
}
setNodes(node,nodeIndex,attrStr,navId,navNodeMap)
{let attr=node[0].getAttribute(attrStr);if(attr)
{let ctrlNode=navNodeMap.get(attr);if(ctrlNode!==undefined)
this.controlNodeAry[nodeIndex].setNode(navId,ctrlNode);else
throw new Error(`Control node doesn't exist!(${name})`);}
}
update()
{super.update();for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].update();}
doTransform(object)
{super.doTransform(object);for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].doTransform(this);}
render(matrix)
{super.render(matrix);for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].render(matrix);}
handleEvent(event)
{super.handleEvent(event);for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].handleEvent(event);if(this.isActive()&&(event instanceof CustomEvent))
{if((event.detail.type>=__WEBPACK_IMPORTED_MODULE_3__common_defs__["_17"])&&
(event.detail.type<=__WEBPACK_IMPORTED_MODULE_3__common_defs__["_2"]))
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_17"])
{this.onUpAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["X"])
{this.onDownAction(event);}
if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_0"])
{this.onLeftAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_2"])
{this.onRightAction(event);}
}
else if((event.detail.type>=__WEBPACK_IMPORTED_MODULE_3__common_defs__["_6"])&&
(event.detail.type<=__WEBPACK_IMPORTED_MODULE_3__common_defs__["_5"]))
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_6"])
{this.onUpScroll(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_3"])
{this.onDownScroll(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_4"])
{this.onLeftScroll(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_5"])
{this.onRightScroll(event);}
}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_10"])
{this.onTabLeft(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__common_defs__["_11"])
{this.onTabRight(event);}
}
}
onUpAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_41"]);}
onDownAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_38"]);}
onLeftAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_39"]);}
onRightAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_40"]);}
onUpScroll(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_41"]);}
onDownScroll(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_38"]);}
onLeftScroll(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_39"]);}
onRightScroll(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_3__common_defs__["_40"]);}
onTabLeft(event)
{}
onTabRight(event)
{}
navigateMenu(navNode)
{if(this.activeNode!==null)
{let navNode=this.activeNode;do
{navNode=navNode.getNode(navNode);if(navNode===null)
{break;}
else if(!navNode.uiControl.isDisabled())
{this.activeNode=navNode;eventManager.dispatchEvent(
__WEBPACK_IMPORTED_MODULE_3__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_3__common_defs__["A"],navNode.uiControl);break;}
}
while(true);}
}
onStateChange(event)
{if(this.respondsToSelectMsg)
{super.onStateChange(event);}
else
{let state=event.detail.arg[__WEBPACK_IMPORTED_MODULE_3__common_defs__["_28"]];let ctrl=this.findSubControlByRef(event.detail.arg[__WEBPACK_IMPORTED_MODULE_3__common_defs__["_27"]]);if((state===__WEBPACK_IMPORTED_MODULE_3__common_defs__["A"])&&(ctrl!==null))
{if(ctrl.state!=state)
{this.setState(state,true);this.resetSpriteScript();this.setDisplayState();}
}
else if(state<__WEBPACK_IMPORTED_MODULE_3__common_defs__["F"])
super.onStateChange(event);}
}
reset(complete)
{super.reset(complete);for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].reset(complete);}
onMouseMove(event)
{let result=super.onMouseMove(event);let found=this.onSubControlMouseMove(event);if(result &&!found)
this.deactivateSubControl();return result|| found;}
onSubControlMouseMove(event)
{let result=false;for(let i=0;i<this.subControlAry.length &&!result;++i)
result=this.subControlAry[i].onMouseMove(event);return result;}
handleSelectAction(event)
{if(this.respondsToSelectMsg)
{return super.handleSelectAction(event);}
else
{for(let i=0;i<this.subControlAry.length;++i)
if(this.subControlAry[i].handleSelectAction(event))
return true;}
return false;}
findControlByName(name)
{let ctrl=super.findControlByName(name);if(ctrl===null)
ctrl=this.findSubControlByName(name);return ctrl;}
findControlByRef(control)
{let ctrl=super.findControlByRef(control);if(ctrl===null)
ctrl=this.findSubControlByRef(control);return ctrl;}
findSubControlByName(name)
{let ctrl=null;for(let i=0;i<this.subControlAry.length &&!ctrl;++i)
ctrl=this.subControlAry[i].findControlByName(name);return ctrl;}
findSubControlByRef(control)
{let ctrl=null;for(let i=0;i<this.subControlAry.length &&!ctrl;++i)
ctrl=this.subControlAry[i].findControlByRef(control);return ctrl;}
activateFirstInactiveControl()
{if(super.activateFirstInactiveControl())
{let found=false;for(let i=0;i<this.controlNodeAry.length;++i)
{if(!found && this.controlNodeAry[i].uiControl.activateFirstInactiveControl())
{this.activeNode=controlNodeAry[i];found=true;}
else
{this.controlNodeAry[i].uiControl.deactivateControl();}
}
return true;}
return false;}
baseActivateFirstInactiveControl()
{return super.activateFirstInactiveControl();}
deactivateControl()
{super.deactivateControl();this.deactivateSubControl();}
deactivateSubControl()
{for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].deactivateControl();}
isSubControl()
{return true;}
disableControl()
{super.disableControl();for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].disableControl();}
enableControl()
{super.enableControl();for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].enableControl();}
setAlpha(alpha)
{super.setAlpha(alpha);for(let i=0;i<this.subControlAry.length;++i)
this.subControlAry[i].setAlpha(alpha);}
getActiveControl()
{let result=null;for(let i=0;i<this.subControlAry.length;++i)
{if(this.subControlAry[i].getState()>__WEBPACK_IMPORTED_MODULE_3__common_defs__["C"])
{result=this.subControlAry[i].getActiveControl();break;}
}
return result;}
}
__webpack_exports__["a"]=UISubControl;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Timer
{constructor(interval=0,startExpired=false)
{this.expiredTime=false;this.timeInterval=interval;this.disabled=false;this.disableValue=false;if(startExpired)
this.setExpired();else
this.reset();}
reset()
{this.expiredTime=this.timeInterval+performance.now();this.disabled=false;}
setExpired()
{this.expiredTime=performance.now();}
set(interval)
{this.timeInterval=interval;this.reset();}
expired(resetOnExpire)
{if(this.disabled)
return this.disableValue;let result=false;if(performance.now()>this.expiredTime)
{result=true;if(resetOnExpire)
this.reset();}
return result;}
disable(disabled)
{this.disabled=disabled;}
setDisableValue(disableValue)
{this.disableValue=disableValue;}
}
__webpack_exports__["a"]=Timer;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return loadManager;});class LoadManager
{constructor()
{this.objects=[];this.loadCompleteCallback=null;}
add(obj)
{this.objects.push(obj);}
load()
{if(this.objects.length===0)
{if(this.loadCompleteCallback===null)
throw new Error('LoadManager:Load complete callback has not been set!');else
this.loadCompleteCallback();}
else
{let obj=this.objects.shift();obj(this.load.bind(this));}
}
}
var loadManager=new LoadManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return betManager;});class BetManager
{constructor()
{this.lineBet=0;this.totalBet=0;this.totalLines=0;this.credits=0;}
setLineBet(lineBet)
{this.lineBet=lineBet;}
setTotalLines(totalLines)
{this.totalLines=totalLines;}
getTotalBet()
{return this.lineBet*this.totalLines;}
setCredits(credits)
{this.credits=credits;}
getCredits()
{return this.credits;}
allowPlay()
{return((this.credits>0)&&(this.credits>=this.getTotalBet()));}
deductBet()
{if(this.allowPlay())
this.credits-=this.getTotalBet();}
addAward(award)
{this.credits+=award;}
}
var betManager=new BetManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_bitmask__=__webpack_require__(33);var __WEBPACK_IMPORTED_MODULE_1__point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__common_defs__=__webpack_require__(0);class DynamicOffset
{constructor()
{this.parameters=new __WEBPACK_IMPORTED_MODULE_0__utilities_bitmask__["a"];this.point=new __WEBPACK_IMPORTED_MODULE_1__point__["a"];}
add(value)
{this.parameters.add(value);}
setX(value)
{this.point.x=value;}
setY(value)
{this.point.y=value;}
isEmpty()
{return this.parameters.isEmpty();}
getPos(defaultHalfSize)
{let pos=new __WEBPACK_IMPORTED_MODULE_1__point__["a"];let halfSize=new __WEBPACK_IMPORTED_MODULE_2__size__["a"](defaultHalfSize.w,defaultHalfSize.h);halfSize.round();if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["R"]))
pos.x=-(halfSize.w-this.point.x);else if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["S"]))
pos.x=halfSize.w-this.point.x;else if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["Q"]))
pos.x=this.point.x;if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["T"]))
pos.y=halfSize.h-this.point.y;else if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["P"]))
pos.y=-(halfSize.h-this.point.y);else if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["U"]))
pos.y=this.point.y;return pos;}
}
__webpack_exports__["a"]=DynamicOffset;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class BitMask
{constructor(value=0)
{this.bitmask=value;}
add(args)
{this.bitmask|=args;}
remove(args)
{this.bitmask &=args ^-1;}
removeAllExcept(args)
{this.bitmask &=args;}
clear()
{this.bitmask=0;}
isEmpty()
{return(this.bitmask===0);}
isSet(args)
{return(this.bitmask & args)!==0;}
areAllSet(args)
{return(this.bitmask & args)===args;}
getIncluding(args)
{return this.bitmask| args;}
getExcluding(args)
{return this.bitmask &(args ^-1);}
}
__webpack_exports__["a"]=BitMask;}),(function(module,exports,__webpack_require__){var require;var require;!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self&&(i=self),i.planck=t()}}(function(){return function t(i,o,e){function s(r,m){if(!o[r]){if(!i[r]){var a="function"==typeof require&&require;if(!m&&a)return require(r,!0);if(n)return n(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var c=o[r]={exports:{}};i[r][0].call(c.exports,function(t){var o=i[r][1][t];return s(o?o:t)},c,c.exports,t,i,o,e)}return o[r].exports}for(var n="function"==typeof require&&require,r=0;r<e.length;r++)s(e[r]);return s}({1:[function(t,i,o){o.internal={},o.Math=t("./common/Math"),o.Vec2=t("./common/Vec2"),o.Transform=t("./common/Transform"),o.Rot=t("./common/Rot"),o.AABB=t("./collision/AABB"),o.Shape=t("./Shape"),o.Fixture=t("./Fixture"),o.Body=t("./Body"),o.Contact=t("./Contact"),o.Joint=t("./Joint"),o.World=t("./World"),o.Circle=t("./shape/CircleShape"),o.Edge=t("./shape/EdgeShape"),o.Polygon=t("./shape/PolygonShape"),o.Chain=t("./shape/ChainShape"),o.Box=t("./shape/BoxShape"),t("./shape/CollideCircle"),t("./shape/CollideEdgeCircle"),o.internal.CollidePolygons=t("./shape/CollidePolygon"),t("./shape/CollideCirclePolygone"),t("./shape/CollideEdgePolygon"),o.DistanceJoint=t("./joint/DistanceJoint"),o.FrictionJoint=t("./joint/FrictionJoint"),o.GearJoint=t("./joint/GearJoint"),o.MotorJoint=t("./joint/MotorJoint"),o.MouseJoint=t("./joint/MouseJoint"),o.PrismaticJoint=t("./joint/PrismaticJoint"),o.PulleyJoint=t("./joint/PulleyJoint"),o.RevoluteJoint=t("./joint/RevoluteJoint"),o.RopeJoint=t("./joint/RopeJoint"),o.WeldJoint=t("./joint/WeldJoint"),o.WheelJoint=t("./joint/WheelJoint"),o.internal.Sweep=t("./common/Sweep"),o.internal.stats=t("./common/stats"),o.internal.Manifold=t("./Manifold"),o.internal.Distance=t("./collision/Distance"),o.internal.TimeOfImpact=t("./collision/TimeOfImpact"),o.internal.DynamicTree=t("./collision/DynamicTree"),o.internal.Settings=t("./Settings")},{"./Body":2,"./Contact":3,"./Fixture":4,"./Joint":5,"./Manifold":6,"./Settings":7,"./Shape":8,"./World":10,"./collision/AABB":11,"./collision/Distance":13,"./collision/DynamicTree":14,"./collision/TimeOfImpact":15,"./common/Math":18,"./common/Rot":20,"./common/Sweep":21,"./common/Transform":22,"./common/Vec2":23,"./common/stats":26,"./joint/DistanceJoint":27,"./joint/FrictionJoint":28,"./joint/GearJoint":29,"./joint/MotorJoint":30,"./joint/MouseJoint":31,"./joint/PrismaticJoint":32,"./joint/PulleyJoint":33,"./joint/RevoluteJoint":34,"./joint/RopeJoint":35,"./joint/WeldJoint":36,"./joint/WheelJoint":37,"./shape/BoxShape":38,"./shape/ChainShape":39,"./shape/CircleShape":40,"./shape/CollideCircle":41,"./shape/CollideCirclePolygone":42,"./shape/CollideEdgeCircle":43,"./shape/CollideEdgePolygon":44,"./shape/CollidePolygon":45,"./shape/EdgeShape":46,"./shape/PolygonShape":47}],2:[function(t,i,o){function e(t,i){i=n(i,d),this.m_world=t,this.m_awakeFlag=i.awake,this.m_autoSleepFlag=i.allowSleep,this.m_bulletFlag=i.bullet,this.m_fixedRotationFlag=i.fixedRotation,this.m_activeFlag=i.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=i.userData,this.m_type=i.type,this.m_type==y?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=h.identity(),this.m_xf.p=r.clone(i.position),this.m_xf.q.setAngle(i.angle),this.m_sweep=new a,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new c,this.c_position=new _,this.m_force=r.zero(),this.m_torque=0,this.m_linearVelocity=r.clone(i.linearVelocity),this.m_angularVelocity=i.angularVelocity,this.m_linearDamping=i.linearDamping,this.m_angularDamping=i.angularDamping,this.m_gravityScale=i.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null}function s(){this.mass=0,this.center=r.zero(),this.I=0}DEBUG=!1,ASSERT=!1,i.exports=e;var n=(t("./util/common"),t("./util/options")),r=t("./common/Vec2"),m=t("./common/Rot"),a=(t("./common/Math"),t("./common/Sweep")),h=t("./common/Transform"),c=t("./common/Velocity"),_=t("./common/Position"),l=t("./Fixture"),u=(t("./Shape"),t("./World"),e.STATIC="static"),p=e.KINEMATIC="kinematic",y=e.DYNAMIC="dynamic",d={type:u,position:r.zero(),angle:0,linearVelocity:r.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null};e.prototype.isWorldLocked=function(){return!(!this.m_world||!this.m_world.isLocked())},e.prototype.getWorld=function(){return this.m_world},e.prototype.getNext=function(){return this.m_next},e.prototype.setUserData=function(t){this.m_userData=t},e.prototype.getUserData=function(){return this.m_userData},e.prototype.getFixtureList=function(){return this.m_fixtureList},e.prototype.getJointList=function(){return this.m_jointList},e.prototype.getContactList=function(){return this.m_contactList},e.prototype.isStatic=function(){return this.m_type==u},e.prototype.isDynamic=function(){return this.m_type==y},e.prototype.isKinematic=function(){return this.m_type==p},e.prototype.setStatic=function(){return this.setType(u),this},e.prototype.setDynamic=function(){return this.setType(y),this},e.prototype.setKinematic=function(){return this.setType(p),this},e.prototype.getType=function(){return this.m_type},e.prototype.setType=function(t){if(1!=this.isWorldLocked()&&this.m_type!=t){this.m_type=t,this.resetMassData(),this.m_type==u&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var i=this.m_contactList;i;){var o=i;i=i.next,this.m_world.destroyContact(o.contact)}this.m_contactList=null;for(var e=this.m_world.m_broadPhase,s=this.m_fixtureList;s;s=s.m_next)for(var n=s.m_proxyCount,r=0;r<n;++r)e.touchProxy(s.m_proxies[r].proxyId)}},e.prototype.isBullet=function(){return this.m_bulletFlag},e.prototype.setBullet=function(t){this.m_bulletFlag=!!t},e.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},e.prototype.setSleepingAllowed=function(t){this.m_autoSleepFlag=!!t,0==this.m_autoSleepFlag&&this.setAwake(!0)},e.prototype.isAwake=function(){return this.m_awakeFlag},e.prototype.setAwake=function(t){t?0==this.m_awakeFlag&&(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},e.prototype.isActive=function(){return this.m_activeFlag},e.prototype.setActive=function(t){if(t!=this.m_activeFlag)if(this.m_activeFlag=!!t,this.m_activeFlag)for(var i=this.m_world.m_broadPhase,o=this.m_fixtureList;o;o=o.m_next)o.createProxies(i,this.m_xf);else{for(var i=this.m_world.m_broadPhase,o=this.m_fixtureList;o;o=o.m_next)o.destroyProxies(i);for(var e=this.m_contactList;e;){var s=e;e=e.next,this.m_world.destroyContact(s.contact)}this.m_contactList=null}},e.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},e.prototype.setFixedRotation=function(t){this.m_fixedRotationFlag!=t&&(this.m_fixedRotationFlag=!!t,this.m_angularVelocity=0,this.resetMassData())},e.prototype.getTransform=function(){return this.m_xf},e.prototype.setTransform=function(t,i){if(1!=this.isWorldLocked()){this.m_xf.set(t,i),this.m_sweep.setTransform(this.m_xf);for(var o=this.m_world.m_broadPhase,e=this.m_fixtureList;e;e=e.m_next)e.synchronize(o,this.m_xf,this.m_xf)}},e.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},e.prototype.synchronizeFixtures=function(){var t=h.identity();this.m_sweep.getTransform(t,0);for(var i=this.m_world.m_broadPhase,o=this.m_fixtureList;o;o=o.m_next)o.synchronize(i,t,this.m_xf)},e.prototype.advance=function(t){this.m_sweep.advance(t),this.m_sweep.c.set(this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},e.prototype.getPosition=function(){return this.m_xf.p},e.prototype.setPosition=function(t){this.setTransform(t,this.m_sweep.a)},e.prototype.getAngle=function(){return this.m_sweep.a},e.prototype.setAngle=function(t){this.setTransform(this.m_xf.p,t)},e.prototype.getWorldCenter=function(){return this.m_sweep.c},e.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},e.prototype.getLinearVelocity=function(){return this.m_linearVelocity},e.prototype.getLinearVelocityFromWorldPoint=function(t){var i=r.sub(t,this.m_sweep.c);return r.add(this.m_linearVelocity,r.cross(this.m_angularVelocity,i))},e.prototype.getLinearVelocityFromLocalPoint=function(t){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t))},e.prototype.setLinearVelocity=function(t){this.m_type!=u&&(r.dot(t,t)>0&&this.setAwake(!0),this.m_linearVelocity.set(t))},e.prototype.getAngularVelocity=function(){return this.m_angularVelocity},e.prototype.setAngularVelocity=function(t){this.m_type!=u&&(t*t>0&&this.setAwake(!0),this.m_angularVelocity=t)},e.prototype.getLinearDamping=function(){return this.m_linearDamping},e.prototype.setLinearDamping=function(t){this.m_linearDamping=t},e.prototype.getAngularDamping=function(){return this.m_angularDamping},e.prototype.setAngularDamping=function(t){this.m_angularDamping=t},e.prototype.getGravityScale=function(){return this.m_gravityScale},e.prototype.setGravityScale=function(t){this.m_gravityScale=t},e.prototype.getMass=function(){return this.m_mass},e.prototype.getInertia=function(){return this.m_I+this.m_mass*r.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},e.prototype.getMassData=function(t){t.mass=this.m_mass,t.I=this.getInertia(),t.center.set(this.m_sweep.localCenter)},e.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_sweep.localCenter.setZero(),this.isStatic()||this.isKinematic())return this.m_sweep.c0.set(this.m_xf.p),this.m_sweep.c.set(this.m_xf.p),void(this.m_sweep.a0=this.m_sweep.a);for(var t=r.zero(),i=this.m_fixtureList;i;i=i.m_next)if(0!=i.m_density){var o=new s;i.getMassData(o),this.m_mass+=o.mass,t.wAdd(o.mass,o.center),this.m_I+=o.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,t.mul(this.m_invMass)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&0==this.m_fixedRotationFlag?(this.m_I-=this.m_mass*r.dot(t,t),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0);var e=r.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(t,this.m_xf),this.m_linearVelocity.add(r.cross(this.m_angularVelocity,r.sub(this.m_sweep.c,e)))},e.prototype.setMassData=function(t){if(1!=this.isWorldLocked()&&this.m_type==y){this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=t.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,t.I>0&&0==this.m_fixedRotationFlag&&(this.m_I=t.I-this.m_mass*r.dot(t.center,t.center),this.m_invI=1/this.m_I);var i=r.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(t.center,this.m_xf),this.m_linearVelocity.add(r.cross(this.m_angularVelocity,r.sub(this.m_sweep.c,i)))}},e.prototype.applyForce=function(t,i,o){this.m_type==y&&(o&&0==this.m_awakeFlag&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(t),this.m_torque+=r.cross(r.sub(i,this.m_sweep.c),t)))},e.prototype.applyForceToCenter=function(t,i){this.m_type==y&&(i&&0==this.m_awakeFlag&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(t))},e.prototype.applyTorque=function(t,i){this.m_type==y&&(i&&0==this.m_awakeFlag&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=t))},e.prototype.applyLinearImpulse=function(t,i,o){this.m_type==y&&(o&&0==this.m_awakeFlag&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.wAdd(this.m_invMass,t),this.m_angularVelocity+=this.m_invI*r.cross(r.sub(i,this.m_sweep.c),t)))},e.prototype.applyAngularImpulse=function(t,i){this.m_type==y&&(i&&0==this.m_awakeFlag&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*t))},e.prototype.shouldCollide=function(t){if(this.m_type!=y&&t.m_type!=y)return!1;for(var i=this.m_jointList;i;i=i.next)if(i.other==t&&0==i.joint.m_collideConnected)return!1;return!0},e.prototype.createFixture=function(t,i){if(1==this.isWorldLocked())return null;var o=new l(this,t,i);if(this.m_activeFlag){var e=this.m_world.m_broadPhase;o.createProxies(e,this.m_xf)}return o.m_next=this.m_fixtureList,this.m_fixtureList=o,o.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,o},e.prototype.destroyFixture=function(t){if(1!=this.isWorldLocked()){for(var i=this.m_fixtureList,o=!1;null!=i;){if(i==t){i=t.m_next,o=!0;break}i=i.m_next}for(var e=this.m_contactList;e;){var s=e.contact;e=e.next;var n=s.getFixtureA(),r=s.getFixtureB();t!=n&&t!=r||this.m_world.destroyContact(s)}if(this.m_activeFlag){var m=this.m_world.m_broadPhase;t.destroyProxies(m)}t.m_body=null,t.m_next=null,this.m_world.publish("remove-fixture",t),this.resetMassData()}},e.prototype.getWorldPoint=function(t){return h.mul(this.m_xf,t)},e.prototype.getWorldVector=function(t){return m.mul(this.m_xf.q,t)},e.prototype.getLocalPoint=function(t){return h.mulT(this.m_xf,t)},e.prototype.getLocalVector=function(t){return m.mulT(this.m_xf.q,t)}},{"./Fixture":4,"./Shape":8,"./World":10,"./common/Math":18,"./common/Position":19,"./common/Rot":20,"./common/Sweep":21,"./common/Transform":22,"./common/Vec2":23,"./common/Velocity":25,"./util/common":50,"./util/options":52}],3:[function(t,i,o){function e(t){this.contact=t,this.prev,this.next,this.other}function s(t,i,o,s,n){this.m_nodeA=new e(this),this.m_nodeB=new e(this),this.m_fixtureA=t,this.m_fixtureB=o,this.m_indexA=i,this.m_indexB=s,this.m_evaluateFcn=n,this.m_manifold=new y,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=r(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=m(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution),this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.v_points=[],this.v_normal=c.zero(),this.v_normalMass=new l,this.v_K=new l,this.v_pointCount,this.v_tangentSpeed,this.v_friction,this.v_restitution,this.v_invMassA,this.v_invMassB,this.v_invIA,this.v_invIB,this.p_localPoints=[],this.p_localNormal=c.zero(),this.p_localPoint=c.zero(),this.p_localCenterA=c.zero(),this.p_localCenterB=c.zero(),this.p_type,this.p_radiusA,this.p_radiusB,this.p_pointCount,this.p_invMassA,this.p_invMassB,this.p_invIA,this.p_invIB}function n(){this.rA=c.zero(),this.rB=c.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}function r(t,i){return h.sqrt(t*i)}function m(t,i){return t>i?t:i}DEBUG=!1,ASSERT=!1;var a=!1,h=(t("./util/common"),t("./common/Math")),c=t("./common/Vec2"),_=t("./common/Transform"),l=t("./common/Mat22"),u=t("./common/Rot"),p=t("./Settings"),y=t("./Manifold"),d=t("./collision/Distance");i.exports=s,s.prototype.initConstraint=function(t){var i=this.m_fixtureA,o=this.m_fixtureB,e=i.getShape(),s=o.getShape(),r=i.getBody(),m=o.getBody(),a=this.getManifold(),h=a.pointCount;this.v_invMassA=r.m_invMass,this.v_invMassB=m.m_invMass,this.v_invIA=r.m_invI,this.v_invIB=m.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=h,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=r.m_invMass,this.p_invMassB=m.m_invMass,this.p_invIA=r.m_invI,this.p_invIB=m.m_invI,this.p_localCenterA=c.clone(r.m_sweep.localCenter),this.p_localCenterB=c.clone(m.m_sweep.localCenter),this.p_radiusA=e.m_radius,this.p_radiusB=s.m_radius,this.p_type=a.type,this.p_localNormal=c.clone(a.localNormal),this.p_localPoint=c.clone(a.localPoint),this.p_pointCount=h;for(var _=0;_<h;++_){var l=a.points[_],u=this.v_points[_]=new n;t.warmStarting?(u.normalImpulse=t.dtRatio*l.normalImpulse,u.tangentImpulse=t.dtRatio*l.tangentImpulse):(u.normalImpulse=0,u.tangentImpulse=0),u.rA.setZero(),u.rB.setZero(),u.normalMass=0,u.tangentMass=0,u.velocityBias=0,this.p_localPoints[_]=c.clone(l.localPoint)}},s.prototype.getManifold=function(){return this.m_manifold},s.prototype.getWorldManifold=function(t){var i=this.m_fixtureA.getBody(),o=this.m_fixtureB.getBody(),e=this.m_fixtureA.getShape(),s=this.m_fixtureB.getShape();return this.m_manifold.getWorldManifold(t,i.getTransform(),e.m_radius,o.getTransform(),s.m_radius)},s.prototype.setEnabled=function(t){this.m_enabledFlag=!!t},s.prototype.isEnabled=function(){return this.m_enabledFlag},s.prototype.isTouching=function(){return this.m_touchingFlag},s.prototype.getNext=function(){return this.m_next},s.prototype.getFixtureA=function(){return this.m_fixtureA},s.prototype.getFixtureB=function(){return this.m_fixtureB},s.prototype.getChildIndexA=function(){return this.m_indexA},s.prototype.getChildIndexB=function(){return this.m_indexB},s.prototype.flagForFiltering=function(){this.m_filterFlag=!0},s.prototype.setFriction=function(t){this.m_friction=t},s.prototype.getFriction=function(){return this.m_friction},s.prototype.resetFriction=function(){this.m_friction=r(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction)},s.prototype.setRestitution=function(t){this.m_restitution=t},s.prototype.getRestitution=function(){return this.m_restitution},s.prototype.resetRestitution=function(){this.m_restitution=m(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},s.prototype.setTangentSpeed=function(t){this.m_tangentSpeed=t},s.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},s.prototype.evaluate=function(t,i,o){this.m_evaluateFcn(t,i,this.m_fixtureA,this.m_indexA,o,this.m_fixtureB,this.m_indexB)},s.prototype.update=function(t){this.m_enabledFlag=!0;var i=!1,o=this.m_touchingFlag,e=this.m_fixtureA.isSensor(),s=this.m_fixtureB.isSensor(),n=e||s,r=this.m_fixtureA.getBody(),m=this.m_fixtureB.getBody(),a=r.getTransform(),h=m.getTransform();if(n){var c=this.m_fixtureA.getShape(),_=this.m_fixtureB.getShape();i=d.testOverlap(c,this.m_indexA,_,this.m_indexB,a,h),this.m_manifold.pointCount=0}else{var l=this.m_manifold;this.m_manifold=new y,this.evaluate(this.m_manifold,a,h),i=this.m_manifold.pointCount>0;for(var u=0;u<this.m_manifold.pointCount;++u){var p=this.m_manifold.points[u];p.normalImpulse=0,p.tangentImpulse=0;for(var v=0;v<l.pointCount;++v){var f=l.points[v];if(f.id.key==p.id.key){p.normalImpulse=f.normalImpulse,p.tangentImpulse=f.tangentImpulse;break}}}i!=o&&(r.setAwake(!0),m.setAwake(!0))}this.m_touchingFlag=i,0==o&&1==i&&t&&t.beginContact(this),1==o&&0==i&&t&&t.endContact(this),0==n&&i&&t&&t.preSolve(this,l)},s.prototype.solvePositionConstraint=function(t){return this._solvePositionConstraint(t,!1)},s.prototype.solvePositionConstraintTOI=function(t,i,o){return this._solvePositionConstraint(t,!0,i,o)},s.prototype._solvePositionConstraint=function(t,i,o,e){var s=this.m_fixtureA,n=this.m_fixtureB,r=s.getBody(),m=n.getBody(),a=(r.c_velocity,m.c_velocity,r.c_position),l=m.c_position,d=c.clone(this.p_localCenterA),v=c.clone(this.p_localCenterB),f=0,A=0;i&&r!=o&&r!=e||(f=this.p_invMassA,A=this.p_invIA);var x=0,g=0;i&&m!=o&&m!=e||(x=this.p_invMassB,g=this.p_invIB);for(var b=c.clone(a.c),B=a.a,w=c.clone(l.c),S=l.a,C=0,M=0;M<this.p_pointCount;++M){var I=_.identity(),T=_.identity();I.q.set(B),T.q.set(S),I.p=c.sub(b,u.mul(I.q,d)),T.p=c.sub(w,u.mul(T.q,v));var P,V,z;switch(this.p_type){case y.e_circles:var L=_.mul(I,this.p_localPoint),R=_.mul(T,this.p_localPoints[0]);P=c.sub(R,L),P.normalize(),V=c.wAdd(.5,L,.5,R),z=c.dot(c.sub(R,L),P)-this.p_radiusA-this.p_radiusB;break;case y.e_faceA:P=u.mul(I.q,this.p_localNormal);var F=_.mul(I,this.p_localPoint),D=_.mul(T,this.p_localPoints[M]);z=c.dot(c.sub(D,F),P)-this.p_radiusA-this.p_radiusB,V=D;break;case y.e_faceB:P=u.mul(T.q,this.p_localNormal);var F=_.mul(T,this.p_localPoint),D=_.mul(I,this.p_localPoints[M]);z=c.dot(c.sub(D,F),P)-this.p_radiusA-this.p_radiusB,V=D,P.mul(-1)}var q=c.sub(V,b),E=c.sub(V,w);C=h.min(C,z);var k=i?p.toiBaugarte:p.baumgarte,j=p.linearSlop,J=p.maxLinearCorrection,O=h.clamp(k*(z+j),-J,0),N=c.cross(q,P),G=c.cross(E,P),U=f+x+A*N*N+g*G*G,W=U>0?-O/U:0,Y=c.mul(W,P);b.wSub(f,Y),B-=A*c.cross(q,Y),w.wAdd(x,Y),S+=g*c.cross(E,Y)}return a.c.set(b),a.a=B,l.c.set(w),l.a=S,C},s.prototype.initVelocityConstraint=function(t){var i=this.m_fixtureA,o=this.m_fixtureB,e=i.getBody(),s=o.getBody(),n=e.c_velocity,r=s.c_velocity,m=e.c_position,a=s.c_position,h=this.p_radiusA,l=this.p_radiusB,y=this.getManifold(),d=this.v_invMassA,v=this.v_invMassB,f=this.v_invIA,A=this.v_invIB,x=c.clone(this.p_localCenterA),g=c.clone(this.p_localCenterB),b=c.clone(m.c),B=m.a,w=c.clone(n.v),S=n.w,C=c.clone(a.c),M=a.a,I=c.clone(r.v),T=r.w,P=_.identity(),V=_.identity();P.q.set(B),V.q.set(M),P.p.wSet(1,b,-1,u.mul(P.q,x)),V.p.wSet(1,C,-1,u.mul(V.q,g));var z=y.getWorldManifold(null,P,h,V,l);this.v_normal.set(z.normal);for(var L=0;L<this.v_pointCount;++L){var R=this.v_points[L];R.rA.set(c.sub(z.points[L],b)),R.rB.set(c.sub(z.points[L],C));var F=c.cross(R.rA,this.v_normal),D=c.cross(R.rB,this.v_normal),q=d+v+f*F*F+A*D*D;R.normalMass=q>0?1/q:0;var E=c.cross(this.v_normal,1),k=c.cross(R.rA,E),j=c.cross(R.rB,E),J=d+v+f*k*k+A*j*j;R.tangentMass=J>0?1/J:0,R.velocityBias=0;var O=c.dot(this.v_normal,I)+c.dot(this.v_normal,c.cross(T,R.rB))-c.dot(this.v_normal,w)-c.dot(this.v_normal,c.cross(S,R.rA));O<-p.velocityThreshold&&(R.velocityBias=-this.v_restitution*O)}if(2==this.v_pointCount&&t.blockSolve){var N=this.v_points[0],G=this.v_points[1],U=c.cross(N.rA,this.v_normal),W=c.cross(N.rB,this.v_normal),Y=c.cross(G.rA,this.v_normal),H=c.cross(G.rB,this.v_normal),Z=d+v+f*U*U+A*W*W,K=d+v+f*Y*Y+A*H*H,X=d+v+f*U*Y+A*W*H,Q=1e3;Z*Z<Q*(Z*K-X*X)?(this.v_K.ex.set(Z,X),this.v_K.ey.set(X,K),this.v_normalMass.set(this.v_K.getInverse())):this.v_pointCount=1}m.c.set(b),m.a=B,n.v.set(w),n.w=S,a.c.set(C),a.a=M,r.v.set(I),r.w=T},s.prototype.warmStartConstraint=function(t){for(var i=this.m_fixtureA,o=this.m_fixtureB,e=i.getBody(),s=o.getBody(),n=e.c_velocity,r=s.c_velocity,m=(e.c_position,s.c_position,this.v_invMassA),a=this.v_invIA,h=this.v_invMassB,_=this.v_invIB,l=c.clone(n.v),u=n.w,p=c.clone(r.v),y=r.w,d=this.v_normal,v=c.cross(d,1),f=0;f<this.v_pointCount;++f){var A=this.v_points[f],x=c.wAdd(A.normalImpulse,d,A.tangentImpulse,v);u-=a*c.cross(A.rA,x),l.wSub(m,x),y+=_*c.cross(A.rB,x),p.wAdd(h,x)}n.v.set(l),n.w=u,r.v.set(p),r.w=y},s.prototype.storeConstraintImpulses=function(t){for(var i=this.m_manifold,o=0;o<this.v_pointCount;++o)i.points[o].normalImpulse=this.v_points[o].normalImpulse,i.points[o].tangentImpulse=this.v_points[o].tangentImpulse},s.prototype.solveVelocityConstraint=function(t){for(var i=this.m_fixtureA.m_body,o=this.m_fixtureB.m_body,e=i.c_velocity,s=(i.c_position,o.c_velocity),n=(o.c_position,this.v_invMassA),r=this.v_invIA,m=this.v_invMassB,_=this.v_invIB,u=c.clone(e.v),p=e.w,y=c.clone(s.v),d=s.w,v=this.v_normal,f=c.cross(v,1),A=this.v_friction,x=0;x<this.v_pointCount;++x){var g=this.v_points[x],b=c.zero();b.wAdd(1,y,1,c.cross(d,g.rB)),b.wSub(1,u,1,c.cross(p,g.rA));var B=c.dot(b,f)-this.v_tangentSpeed,w=g.tangentMass*-B,S=A*g.normalImpulse,C=h.clamp(g.tangentImpulse+w,-S,S);w=C-g.tangentImpulse,g.tangentImpulse=C;var M=c.mul(w,f);u.wSub(n,M),p-=r*c.cross(g.rA,M),y.wAdd(m,M),d+=_*c.cross(g.rB,M)}if(1==this.v_pointCount||0==t.blockSolve)for(var I=0;I<this.v_pointCount;++I){var g=this.v_points[I],b=c.zero();b.wAdd(1,y,1,c.cross(d,g.rB)),b.wSub(1,u,1,c.cross(p,g.rA));var T=c.dot(b,v),w=-g.normalMass*(T-g.velocityBias),C=h.max(g.normalImpulse+w,0);w=C-g.normalImpulse,g.normalImpulse=C;var M=c.mul(w,v);u.wSub(n,M),p-=r*c.cross(g.rA,M),y.wAdd(m,M),d+=_*c.cross(g.rB,M)}else{var P=this.v_points[0],V=this.v_points[1],z=c.neo(P.normalImpulse,V.normalImpulse),L=c.zero().add(y).add(c.cross(d,P.rB)).sub(u).sub(c.cross(p,P.rA)),R=c.zero().add(y).add(c.cross(d,V.rB)).sub(u).sub(c.cross(p,V.rA)),F=c.dot(L,v),D=c.dot(R,v),q=c.neo(F-P.velocityBias,D-V.velocityBias);q.sub(l.mul(this.v_K,z));for(;;){var E=c.neg(l.mul(this.v_normalMass,q));if(E.x>=0&&E.y>=0){var k=c.sub(E,z),j=c.mul(k.x,v),J=c.mul(k.y,v);u.wSub(n,j,n,J),p-=r*(c.cross(P.rA,j)+c.cross(V.rA,J)),y.wAdd(m,j,m,J),d+=_*(c.cross(P.rB,j)+c.cross(V.rB,J)),P.normalImpulse=E.x,V.normalImpulse=E.y,a&&(L=y+c.cross(d,P.rB)-u-c.cross(p,P.rA),R=y+c.cross(d,V.rB)-u-c.cross(p,V.rA),F=Dot(L,v),D=Dot(R,v));break}if(E.x=-P.normalMass*q.x,E.y=0,F=0,D=this.v_K.ex.y*E.x+q.y,E.x>=0&&D>=0){var k=c.sub(E,z),j=c.mul(k.x,v),J=c.mul(k.y,v);if(u.wSub(n,j,n,J),p-=r*(c.cross(P.rA,j)+c.cross(V.rA,J)),y.wAdd(m,j,m,J),d+=_*(c.cross(P.rB,j)+c.cross(V.rB,J)),P.normalImpulse=E.x,V.normalImpulse=E.y,a){var O=c.add(y,c.cross(d,P.rB)),N=c.add(u,c.cross(p,P.rA)),L=c.sub(O,N);F=c.dot(L,v)}break}if(E.x=0,E.y=-V.normalMass*q.y,F=this.v_K.ey.x*E.y+q.x,D=0,E.y>=0&&F>=0){var k=c.sub(E,z),j=c.mul(k.x,v),J=c.mul(k.y,v);if(u.wSub(n,j,n,J),p-=r*(c.cross(P.rA,j)+c.cross(V.rA,J)),y.wAdd(m,j,m,J),d+=_*(c.cross(P.rB,j)+c.cross(V.rB,J)),P.normalImpulse=E.x,V.normalImpulse=E.y,a){var G=c.add(y,c.cross(d,V.rB)),U=c.add(u,c.cross(p,V.rA)),L=c.sub(G,U);D=c.dot(R,v)}break}if(E.x=0,E.y=0,F=q.x,D=q.y,F>=0&&D>=0){var k=c.sub(E,z),j=c.mul(k.x,v),J=c.mul(k.y,v);u.wSub(n,j,n,J),p-=r*(c.cross(P.rA,j)+c.cross(V.rA,J)),y.wAdd(m,j,m,J),d+=_*(c.cross(P.rB,j)+c.cross(V.rB,J)),P.normalImpulse=E.x,V.normalImpulse=E.y;break}break}}e.v.set(u),e.w=p,s.v.set(y),s.w=d};var v=[];s.addType=function(t,i,o){v[t]=v[t]||{},v[t][i]=o},s.create=function(t,i,o,e){var n,r,m=t.getType(),a=o.getType();if(r=v[m]&&v[m][a])n=new s(t,i,o,e,r);else{if(!(r=v[a]&&v[a][m]))return null;n=new s(o,e,t,i,r)}t=n.getFixtureA(),o=n.getFixtureB(),i=n.getChildIndexA(),e=n.getChildIndexB();var h=t.getBody(),c=o.getBody();return n.m_nodeA.contact=n,n.m_nodeA.other=c,n.m_nodeA.prev=null,n.m_nodeA.next=h.m_contactList,null!=h.m_contactList&&(h.m_contactList.prev=n.m_nodeA),h.m_contactList=n.m_nodeA,n.m_nodeB.contact=n,n.m_nodeB.other=h,n.m_nodeB.prev=null,n.m_nodeB.next=c.m_contactList,null!=c.m_contactList&&(c.m_contactList.prev=n.m_nodeB),c.m_contactList=n.m_nodeB,0==t.isSensor()&&0==o.isSensor()&&(h.setAwake(!0),c.setAwake(!0)),n},s.destroy=function(t,i){var o=t.m_fixtureA,e=t.m_fixtureB,s=o.getBody(),n=e.getBody();t.isTouching()&&i.endContact(t),t.m_nodeA.prev&&(t.m_nodeA.prev.next=t.m_nodeA.next),t.m_nodeA.next&&(t.m_nodeA.next.prev=t.m_nodeA.prev),t.m_nodeA==s.m_contactList&&(s.m_contactList=t.m_nodeA.next),t.m_nodeB.prev&&(t.m_nodeB.prev.next=t.m_nodeB.next),t.m_nodeB.next&&(t.m_nodeB.next.prev=t.m_nodeB.prev),t.m_nodeB==n.m_contactList&&(n.m_contactList=t.m_nodeB.next),t.m_manifold.pointCount>0&&0==o.isSensor()&&0==e.isSensor()&&(s.setAwake(!0),n.setAwake(!0));var r=o.getType(),m=e.getType(),a=v[r][m].destroyFcn;"function"==typeof a&&a(t)}},{"./Manifold":6,"./Settings":7,"./collision/Distance":13,"./common/Mat22":16,"./common/Math":18,"./common/Rot":20,"./common/Transform":22,"./common/Vec2":23,"./util/common":50}],4:[function(t,i,o){function e(t,i){this.aabb=new m,this.fixture=t,this.childIndex=i,this.proxyId}function s(t,i,o){i.shape?(o=i,i=i.shape):"number"==typeof o&&(o={density:o}),o=n(o,a),this.m_body=t,this.m_friction=o.friction,this.m_restitution=o.restitution,this.m_density=o.density,this.m_isSensor=o.isSensor,this.m_filterGroupIndex=o.filterGroupIndex,this.m_filterCategoryBits=o.filterCategoryBits,this.m_filterMaskBits=o.filterMaskBits,this.m_shape=i,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var s=this.m_shape.getChildCount(),r=0;r<s;++r)this.m_proxies[r]=new e(this,r);this.m_userData=o.userData}DEBUG=!1,ASSERT=!1,i.exports=s;var n=(t("./util/common"),t("./util/options")),r=t("./common/Vec2"),m=t("./collision/AABB"),a={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535};s.prototype.getType=function(){return this.m_shape.getType()},s.prototype.getShape=function(){return this.m_shape},s.prototype.isSensor=function(){return this.m_isSensor},s.prototype.setSensor=function(t){t!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=t)},s.prototype.getUserData=function(){return this.m_userData},s.prototype.setUserData=function(t){this.m_userData=t},s.prototype.getBody=function(){return this.m_body},s.prototype.getNext=function(){return this.m_next},s.prototype.getDensity=function(){return this.m_density},s.prototype.setDensity=function(t){this.m_density=t},s.prototype.getFriction=function(){return this.m_friction},s.prototype.setFriction=function(t){this.m_friction=t},s.prototype.getRestitution=function(){return this.m_restitution},s.prototype.setRestitution=function(t){this.m_restitution=t},s.prototype.testPoint=function(t){return this.m_shape.testPoint(this.m_body.getTransform(),t)},s.prototype.rayCast=function(t,i,o){return this.m_shape.rayCast(t,i,this.m_body.getTransform(),o)},s.prototype.getMassData=function(t){this.m_shape.computeMass(t,this.m_density)},s.prototype.getAABB=function(t){return this.m_proxies[t].aabb},s.prototype.createProxies=function(t,i){this.m_proxyCount=this.m_shape.getChildCount();for(var o=0;o<this.m_proxyCount;++o){var e=this.m_proxies[o];this.m_shape.computeAABB(e.aabb,i,o),e.proxyId=t.createProxy(e.aabb,e)}},s.prototype.destroyProxies=function(t){for(var i=0;i<this.m_proxyCount;++i){var o=this.m_proxies[i];t.destroyProxy(o.proxyId),o.proxyId=null}this.m_proxyCount=0},s.prototype.synchronize=function(t,i,o){for(var e=0;e<this.m_proxyCount;++e){var s=this.m_proxies[e],n=new m,a=new m;this.m_shape.computeAABB(n,i,s.childIndex),this.m_shape.computeAABB(a,o,s.childIndex),s.aabb.combine(n,a);var h=r.sub(o.p,i.p);t.moveProxy(s.proxyId,s.aabb,h)}},s.prototype.setFilterData=function(t){this.m_filterGroupIndex=t.groupIndex,this.m_filterCategoryBits=t.categoryBits,this.m_filterMaskBits=t.maskBits,this.refilter()},s.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},s.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},s.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},s.prototype.refilter=function(){if(null!=this.m_body){for(var t=this.m_body.getContactList();t;){var i=t.contact,o=i.getFixtureA(),e=i.getFixtureB();o!=this&&e!=this||i.flagForFiltering(),t=t.next}var s=this.m_body.getWorld();if(null!=s)for(var n=s.m_broadPhase,r=0;r<this.m_proxyCount;++r)n.touchProxy(this.m_proxies[r].proxyId)}},s.prototype.shouldCollide=function(t){if(t.m_filterGroupIndex==this.m_filterGroupIndex&&0!=t.m_filterGroupIndex)return t.m_filterGroupIndex>0;var i=0!=(t.m_filterMaskBits&this.m_filterCategoryBits)&&0!=(t.m_filterCategoryBits&this.m_filterMaskBits);return i}},{"./collision/AABB":11,"./common/Vec2":23,"./util/common":50,"./util/options":52}],5:[function(t,i,o){function e(){this.other=null,this.joint=null,this.prev=null,this.next=null}function s(t,i,o){i=t.bodyA||i,o=t.bodyB||o,this.m_type="unknown-joint",this.m_bodyA=i,this.m_bodyB=o,this.m_index=0,this.m_collideConnected=!!t.collideConnected,this.m_prev=null,this.m_next=null,this.m_edgeA=new e,this.m_edgeB=new e,this.m_islandFlag=!1,this.m_userData=t.userData}DEBUG=!1,ASSERT=!1,i.exports=s;t("./util/common");s.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},s.prototype.getType=function(){return this.m_type},s.prototype.getBodyA=function(){return this.m_bodyA},s.prototype.getBodyB=function(){return this.m_bodyB},s.prototype.getNext=function(){return this.m_next},s.prototype.getUserData=function(){return this.m_userData},s.prototype.setUserData=function(t){this.m_userData=t},s.prototype.getCollideConnected=function(){return this.m_collideConnected},s.prototype.getAnchorA=function(){},s.prototype.getAnchorB=function(){},s.prototype.getReactionForce=function(t){},s.prototype.getReactionTorque=function(t){},s.prototype.shiftOrigin=function(t){},s.prototype.initVelocityConstraints=function(t){},s.prototype.solveVelocityConstraints=function(t){},s.prototype.solvePositionConstraints=function(t){}},{"./util/common":50}],6:[function(t,i,o){function e(){this.type,this.localNormal=_.zero(),this.localPoint=_.zero(),this.points=[new s,new s],this.pointCount=0}function s(){this.localPoint=_.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.id=new n}function n(){this.cf=new r,this.key}function r(){this.indexA,this.indexB,this.typeA,this.typeB}function m(){this.normal,this.points=[],this.separations=[]}function a(t,i,o,e){for(var s=0;s<o.pointCount;++s){var n=o.points[s].id;t[s]=y.removeState;for(var r=0;r<e.pointCount;++r)if(e.points[r].id.key==n.key){t[s]=y.persistState;break}}for(var s=0;s<e.pointCount;++s){var n=e.points[s].id;i[s]=y.addState;for(var r=0;r<o.pointCount;++r)if(o.points[r].id.key==n.key){i[s]=y.persistState;break}}}function h(){this.v=_.zero(),this.id=new n}function c(t,i,o,e,s){var n=0,m=_.dot(o,i[0].v)-e,a=_.dot(o,i[1].v)-e;if(m<=0&&t[n++].set(i[0]),a<=0&&t[n++].set(i[1]),m*a<0){var h=m/(m-a);t[n].v.wSet(1-h,i[0].v,h,i[1].v),t[n].id.cf.indexA=s,t[n].id.cf.indexB=i[0].id.cf.indexB,t[n].id.cf.typeA=r.e_vertex,t[n].id.cf.typeB=r.e_face,++n}return n}DEBUG=!1,ASSERT=!1;var _=(t("./util/common"),t("./common/Vec2")),l=t("./common/Transform"),u=t("./common/Math"),p=t("./common/Rot");i.exports=e,i.exports.clipSegmentToLine=c,i.exports.clipVertex=h,i.exports.getPointStates=a,i.exports.PointState=y,e.e_circles=0,e.e_faceA=1,e.e_faceB=2,e.e_vertex=0,e.e_face=1,n.prototype.set=function(t){this.key=t.key,this.cf.set(t.cf)},r.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,this.typeA=t.typeA,this.typeB=t.typeB},e.prototype.getWorldManifold=function(t,i,o,s,n){if(0!=this.pointCount){t=t||new m;var r=t.normal,a=t.points,h=t.separations;switch(this.type){case e.e_circles:r=_.neo(1,0);var c=l.mul(i,this.localPoint),y=l.mul(s,this.points[0].localPoint),d=_.sub(y,c);_.lengthSquared(d)>u.EPSILON*u.EPSILON&&(r.set(d),r.normalize()),a[0]=_.mid(c,y),h[0]=-n-o,a.length=1,h.length=1;break;case e.e_faceA:r=p.mul(i.q,this.localNormal);for(var v=l.mul(i,this.localPoint),f=0;f<this.pointCount;++f){var A=l.mul(s,this.points[f].localPoint),x=_.clone(A).wAdd(o-_.dot(_.sub(A,v),r),r),g=_.clone(A).wSub(n,r);a[f]=_.mid(x,g),h[f]=_.dot(_.sub(g,x),r)}a.length=this.pointCount,h.length=this.pointCount;break;case e.e_faceB:r=p.mul(s.q,this.localNormal);for(var v=l.mul(s,this.localPoint),f=0;f<this.pointCount;++f){var A=l.mul(i,this.points[f].localPoint),g=_.zero().wSet(1,A,n-_.dot(_.sub(A,v),r),r),x=_.zero().wSet(1,A,-o,r);a[f]=_.mid(x,g),h[f]=_.dot(_.sub(x,g),r)}a.length=this.pointCount,h.length=this.pointCount,r.mul(-1)}return t.normal=r,t.points=a,t.separations=h,t}};var y={nullState:0,addState:1,persistState:2,removeState:3};h.prototype.set=function(t){this.v.set(t.v),this.id.set(t.id)}},{"./common/Math":18,"./common/Rot":20,"./common/Transform":22,"./common/Vec2":23,"./util/common":50}],7:[function(t,i,o){DEBUG=!1,ASSERT=!1;var e=o;e.maxManifoldPoints=2,e.maxPolygonVertices=12,e.aabbExtension=.1,e.aabbMultiplier=2,e.linearSlop=.005,e.linearSlopSquared=e.linearSlop*e.linearSlop,e.angularSlop=2/180*Math.PI,e.polygonRadius=2*e.linearSlop,e.maxSubSteps=8,e.maxTOIContacts=32,e.maxTOIIterations=20,e.maxDistnceIterations=20,e.velocityThreshold=1,e.maxLinearCorrection=.2,e.maxAngularCorrection=8/180*Math.PI,e.maxTranslation=2,e.maxTranslationSquared=e.maxTranslation*e.maxTranslation,e.maxRotation=.5*Math.PI,e.maxRotationSquared=e.maxRotation*e.maxRotation,e.baumgarte=.2,e.toiBaugarte=.75,e.timeToSleep=.5,e.linearSleepTolerance=.01,e.linearSleepToleranceSqr=Math.pow(e.linearSleepTolerance,2),e.angularSleepTolerance=2/180*Math.PI,e.angularSleepToleranceSqr=Math.pow(e.angularSleepTolerance,2)},{}],8:[function(t,i,o){function e(){this.m_type,this.m_radius}DEBUG=!1,ASSERT=!1,i.exports=e;t("./common/Math");e.isValid=function(t){return!!t},e.prototype.getRadius=function(){return this.m_radius},e.prototype.getType=function(){return this.m_type},e.prototype._clone=function(){},e.prototype.getChildCount=function(){},e.prototype.testPoint=function(t,i){},e.prototype.rayCast=function(t,i,o,e){},e.prototype.computeAABB=function(t,i,o){},e.prototype.computeMass=function(t,i){},e.prototype.computeDistanceProxy=function(t){}},{"./common/Math":18}],9:[function(t,i,o){function e(){this.solveInit,this.solveVelocity,this.solvePosition}function s(t){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}function n(t){this.m_world=t,this.m_profile=new e,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}function r(){this.normalImpulses=[],this.tangentImpulses=[]}DEBUG=!1,ASSERT=!1,i.exports=n,i.exports.TimeStep=s;var m=t("./Settings"),a=t("./util/common"),h=t("./util/Timer"),c=t("./common/Vec2"),_=t("./common/Math"),l=(t("./Body"),t("./Contact"),t("./Joint"),t("./collision/TimeOfImpact")),u=l.Input,p=l.Output,y=t("./collision/Distance");y.Input,y.Output,y.Proxy,y.Cache;s.prototype.reset=function(t){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=t,this.inv_dt=0==t?0:1/t,this.dtRatio=t*this.inv_dt0},n.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},n.prototype.addBody=function(t){this.m_bodies.push(t)},n.prototype.addContact=function(t){this.m_contacts.push(t)},n.prototype.addJoint=function(t){this.m_joints.push(t)},n.prototype.solveWorld=function(t){var i=this.m_world,o=this.m_profile;o.solveInit=0,o.solveVelocity=0,o.solvePosition=0;for(var e=i.m_bodyList;e;e=e.m_next)e.m_islandFlag=!1;for(var s=i.m_contactList;s;s=s.m_next)s.m_islandFlag=!1;for(var n=i.m_jointList;n;n=n.m_next)n.m_islandFlag=!1;for(var r=this.m_stack,m=-1,a=i.m_bodyList;a;a=a.m_next)if(m++,!a.m_islandFlag&&0!=a.isAwake()&&0!=a.isActive()&&!a.isStatic()){for(this.clear(),r.push(a),a.m_islandFlag=!0;r.length>0;){var e=r.pop();if(this.addBody(e),e.setAwake(!0),!e.isStatic()){for(var h=e.m_contactList;h;h=h.next){var c=h.contact;if(!c.m_islandFlag&&0!=c.isEnabled()&&0!=c.isTouching()){var _=c.m_fixtureA.m_isSensor,l=c.m_fixtureB.m_isSensor;if(!_&&!l){this.addContact(c),c.m_islandFlag=!0;var u=h.other;u.m_islandFlag||(r.push(u),u.m_islandFlag=!0)}}}for(var p=e.m_jointList;p;p=p.next)if(1!=p.joint.m_islandFlag){var u=p.other;0!=u.isActive()&&(this.addJoint(p.joint),p.joint.m_islandFlag=!0,u.m_islandFlag||(r.push(u),u.m_islandFlag=!0))}}}this.solveIsland(t);for(var y=0;y<this.m_bodies.length;++y){var e=this.m_bodies[y];e.isStatic()&&(e.m_islandFlag=!1)}}},n.prototype.solveIsland=function(t){for(var i=this.m_world,o=this.m_profile,e=i.m_gravity,s=i.m_allowSleep,n=h.now(),r=t.dt,l=0;l<this.m_bodies.length;++l){var u=this.m_bodies[l],p=c.clone(u.m_sweep.c),y=u.m_sweep.a,d=c.clone(u.m_linearVelocity),v=u.m_angularVelocity;u.m_sweep.c0.set(u.m_sweep.c),u.m_sweep.a0=u.m_sweep.a,u.isDynamic()&&(d.wAdd(r*u.m_gravityScale,e),d.wAdd(r*u.m_invMass,u.m_force),v+=r*u.m_invI*u.m_torque,d.mul(1/(1+r*u.m_linearDamping)),v*=1/(1+r*u.m_angularDamping)),a.debug("A:",y,p.x,p.y,v,d.x,d.y),u.c_position.c=p,u.c_position.a=y,u.c_velocity.v=d,u.c_velocity.w=v}n=h.now();for(var l=0;l<this.m_contacts.length;++l){var f=this.m_contacts[l];f.initConstraint(t)}for(var l=0;l<this.m_contacts.length;++l){var f=this.m_contacts[l];f.initVelocityConstraint(t)}if(t.warmStarting)for(var l=0;l<this.m_contacts.length;++l){var f=this.m_contacts[l];f.warmStartConstraint(t)}for(var l=0;l<this.m_joints.length;++l){var A=this.m_joints[l];A.initVelocityConstraints(t)}o.solveInit=h.diff(n),n=h.now();for(var l=0;l<t.velocityIterations;++l){for(var x=0;x<this.m_joints.length;++x){var A=this.m_joints[x];A.solveVelocityConstraints(t)}for(var x=0;x<this.m_contacts.length;++x){var f=this.m_contacts[x];f.solveVelocityConstraint(t)}}for(var l=0;l<this.m_contacts.length;++l){var f=this.m_contacts[l];f.storeConstraintImpulses(t)}o.solveVelocity=h.diff(n);for(var l=0;l<this.m_bodies.length;++l){var u=this.m_bodies[l],p=c.clone(u.c_position.c),y=u.c_position.a,d=c.clone(u.c_velocity.v),v=u.c_velocity.w,g=c.mul(r,d);if(c.lengthSquared(g)>m.maxTranslationSquared){var b=m.maxTranslation/g.length();d.mul(b)}var B=r*v;if(B*B>m.maxRotationSquared){var b=m.maxRotation/_.abs(B);v*=b}p.wAdd(r,d),y+=r*v,u.c_position.c.set(p),u.c_position.a=y,u.c_velocity.v.set(d),u.c_velocity.w=v}n=h.now();for(var w=!1,l=0;l<t.positionIterations;++l){for(var S=0,x=0;x<this.m_contacts.length;++x){var f=this.m_contacts[x],C=f.solvePositionConstraint(t);S=_.min(S,C)}for(var M=S>=-3*m.linearSlop,I=!0,x=0;x<this.m_joints.length;++x){var A=this.m_joints[x],T=A.solvePositionConstraints(t);I=I&&T}if(M&&I){w=!0;break}}for(var l=0;l<this.m_bodies.length;++l){var u=this.m_bodies[l];u.m_sweep.c.set(u.c_position.c),u.m_sweep.a=u.c_position.a,u.m_linearVelocity.set(u.c_velocity.v),u.m_angularVelocity=u.c_velocity.w,u.synchronizeTransform()}if(o.solvePosition=h.diff(n),this.postSolveIsland(),s){for(var P=1/0,V=m.linearSleepToleranceSqr,z=m.angularSleepToleranceSqr,l=0;l<this.m_bodies.length;++l){var u=this.m_bodies[l];u.isStatic()||(0==u.m_autoSleepFlag||u.m_angularVelocity*u.m_angularVelocity>z||c.lengthSquared(u.m_linearVelocity)>V?(u.m_sleepTime=0,P=0):(u.m_sleepTime+=r,P=_.min(P,u.m_sleepTime)))}if(P>=m.timeToSleep&&w)for(var l=0;l<this.m_bodies.length;++l){var u=this.m_bodies[l];u.setAwake(!1)}}},n.prototype.printBodies=function(t){for(var i=0;i<this.m_bodies.length;++i){var o=this.m_bodies[i];a.debug(t,o.c_position.a,o.c_position.c.x,o.c_position.c.y,o.c_velocity.w,o.c_velocity.v.x,o.c_velocity.v.y)}};var d=new s;n.prototype.solveWorldTOI=function(t){var i=this.m_world;this.m_profile;if(i.m_stepComplete){for(var o=i.m_bodyList;o;o=o.m_next)o.m_islandFlag=!1,o.m_sweep.alpha0=0;for(var e=i.m_contactList;e;e=e.m_next)e.m_toiFlag=!1,e.m_islandFlag=!1,e.m_toiCount=0,e.m_toi=1}for(var e;;){for(var s=null,n=1,e=i.m_contactList;e;e=e.m_next)if(0!=e.isEnabled()&&!(e.m_toiCount>m.maxSubSteps)){var r=1;if(e.m_toiFlag)r=e.m_toi;else{var a=e.getFixtureA(),h=e.getFixtureB();if(a.isSensor()||h.isSensor())continue;var c=a.getBody(),y=h.getBody(),v=c.isAwake()&&!c.isStatic(),f=y.isAwake()&&!y.isStatic();if(0==v&&0==f)continue;var A=c.isBullet()||!c.isDynamic(),x=y.isBullet()||!y.isDynamic();if(0==A&&0==x)continue;var g=c.m_sweep.alpha0;c.m_sweep.alpha0<y.m_sweep.alpha0?(g=y.m_sweep.alpha0,c.m_sweep.advance(g)):y.m_sweep.alpha0<c.m_sweep.alpha0&&(g=c.m_sweep.alpha0,y.m_sweep.advance(g));var b=e.getChildIndexA(),B=e.getChildIndexB(),w=(c.m_sweep,y.m_sweep,new u);w.proxyA.set(a.getShape(),b),w.proxyB.set(h.getShape(),B),w.sweepA.set(c.m_sweep),w.sweepB.set(y.m_sweep),w.tMax=1;var S=new p;l(S,w);var C=S.t;r=S.state==p.e_touching?_.min(g+(1-g)*C,1):1,e.m_toi=r,e.m_toiFlag=!0}r<n&&(s=e,n=r)}if(null==s||1-10*_.EPSILON<n){i.m_stepComplete=!0;break}var a=s.getFixtureA(),h=s.getFixtureB(),c=a.getBody(),y=h.getBody(),M=c.m_sweep.clone(),I=y.m_sweep.clone();if(c.advance(n),y.advance(n),s.update(i),s.m_toiFlag=!1,++s.m_toiCount,0!=s.isEnabled()&&0!=s.isTouching()){c.setAwake(!0),y.setAwake(!0),this.clear(),this.addBody(c),this.addBody(y),this.addContact(s),c.m_islandFlag=!0,y.m_islandFlag=!0,s.m_islandFlag=!0;for(var T=[c,y],P=0;P<T.length;++P){var V=T[P];if(V.isDynamic())for(var z=V.m_contactList;z;z=z.next){var L=z.contact;if(!L.m_islandFlag){var R=z.other;if(!R.isDynamic()||V.isBullet()||R.isBullet()){var F=L.m_fixtureA.m_isSensor,D=L.m_fixtureB.m_isSensor;if(!F&&!D){var q=R.m_sweep.clone();0==R.m_islandFlag&&R.advance(n),L.update(i),0!=L.isEnabled()&&0!=L.isTouching()?(L.m_islandFlag=!0,this.addContact(L),R.m_islandFlag||(R.m_islandFlag=!0,R.isStatic()||R.setAwake(!0),this.addBody(R))):(R.m_sweep.set(q),R.synchronizeTransform())}}}}}d.reset((1-n)*t.dt),d.dtRatio=1,d.positionIterations=20,d.velocityIterations=t.velocityIterations,d.warmStarting=!1,this.solveIslandTOI(d,c,y);for(var P=0;P<this.m_bodies.length;++P){var V=this.m_bodies[P];if(V.m_islandFlag=!1,V.isDynamic()){V.synchronizeFixtures();for(var z=V.m_contactList;z;z=z.next)z.contact.m_toiFlag=!1,z.contact.m_islandFlag=!1}}if(i.findNewContacts(),i.m_subStepping){i.m_stepComplete=!1;break}}else s.setEnabled(!1),c.m_sweep.set(M),y.m_sweep.set(I),c.synchronizeTransform(),y.synchronizeTransform()}var o,e},n.prototype.solveIslandTOI=function(t,i,o){for(var e=(this.m_world,this.m_profile,0);e<this.m_bodies.length;++e){var s=this.m_bodies[e];s.c_position.c.set(s.m_sweep.c),s.c_position.a=s.m_sweep.a,s.c_velocity.v.set(s.m_linearVelocity),s.c_velocity.w=s.m_angularVelocity}for(var e=0;e<this.m_contacts.length;++e){var n=this.m_contacts[e];n.initConstraint(t)}for(var e=0;e<t.positionIterations;++e){for(var r=0,a=0;a<this.m_contacts.length;++a){var n=this.m_contacts[a],h=n.solvePositionConstraintTOI(t,i,o);r=_.min(r,h)}var l=r>=-1.5*m.linearSlop;if(l)break}var e,u;i.m_sweep.c0.set(i.c_position.c),i.m_sweep.a0=i.c_position.a,o.m_sweep.c0.set(o.c_position.c),o.m_sweep.a0=o.c_position.a;for(var e=0;e<this.m_contacts.length;++e){var n=this.m_contacts[e];n.initVelocityConstraint(t)}for(var e=0;e<t.velocityIterations;++e)for(var a=0;a<this.m_contacts.length;++a){var n=this.m_contacts[a];n.solveVelocityConstraint(t)}for(var p=t.dt,e=0;e<this.m_bodies.length;++e){var s=this.m_bodies[e],u=c.clone(s.c_position.c),y=s.c_position.a,d=c.clone(s.c_velocity.v),v=s.c_velocity.w,f=c.mul(p,d);if(c.dot(f,f)>m.maxTranslationSquared){var A=m.maxTranslation/f.length();d.mul(A)}var x=p*v;if(x*x>m.maxRotationSquared){var A=m.maxRotation/_.abs(x);v*=A}u.wAdd(p,d),y+=p*v,s.c_position.c=u,s.c_position.a=y,s.c_velocity.v=d,s.c_velocity.w=v,s.m_sweep.c=u,s.m_sweep.a=y,s.m_linearVelocity=d,s.m_angularVelocity=v,s.synchronizeTransform()}this.postSolveIsland()},n.prototype.postSolveIsland=function(){for(var t=new r,i=0;i<this.m_contacts.length;++i){for(var o=this.m_contacts[i],e=0;e<o.v_points.length;++e)t.normalImpulses.push(o.v_points[e].normalImpulse),t.tangentImpulses.push(o.v_points[e].tangentImpulse);this.m_world.postSolve(o,t)}}},{"./Body":2,"./Contact":3,"./Joint":5,"./Settings":7,"./collision/Distance":13,"./collision/TimeOfImpact":15,"./common/Math":18,"./common/Vec2":23,"./util/Timer":49,"./util/common":50}],10:[function(t,i,o){function e(t){return this instanceof e?(t&&n.isValid(t)&&(t={gravity:t}),t=s(t,c),this.m_solver=new m(this),this.m_broadPhase=new r,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=t.allowSleep,this.m_gravity=n.clone(t.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=t.warmStarting,this.m_continuousPhysics=t.continuousPhysics,this.m_subStepping=t.subStepping,this.m_blockSolve=t.blockSolve,this.m_velocityIterations=t.velocityIterations,this.m_positionIterations=t.positionIterations,this.m_t=0,this.m_stepCount=0,void(this.addPair=this.createContact.bind(this))):new e(t)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("./util/options"),n=(t("./util/common"),t("./util/Timer"),t("./common/Vec2")),r=t("./collision/BroadPhase"),m=t("./Solver"),a=t("./Body"),h=t("./Contact"),c={gravity:n.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3};e.prototype.getBodyList=function(){return this.m_bodyList},e.prototype.getJointList=function(){return this.m_jointList},e.prototype.getContactList=function(){return this.m_contactList},e.prototype.getBodyCount=function(){return this.m_bodyCount},e.prototype.getJointCount=function(){return this.m_jointCount},e.prototype.getContactCount=function(){return this.m_contactCount},e.prototype.setGravity=function(t){this.m_gravity=t},e.prototype.getGravity=function(){return this.m_gravity},e.prototype.isLocked=function(){return this.m_locked},e.prototype.setAllowSleeping=function(t){if(t!=this.m_allowSleep&&(this.m_allowSleep=t,0==this.m_allowSleep))for(var i=this.m_bodyList;i;i=i.m_next)i.setAwake(!0)},e.prototype.getAllowSleeping=function(){return this.m_allowSleep},e.prototype.setWarmStarting=function(t){this.m_warmStarting=t},e.prototype.getWarmStarting=function(){return this.m_warmStarting},e.prototype.setContinuousPhysics=function(t){this.m_continuousPhysics=t},e.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},e.prototype.setSubStepping=function(t){this.m_subStepping=t},e.prototype.getSubStepping=function(){return this.m_subStepping},e.prototype.setAutoClearForces=function(t){this.m_clearForces=t},e.prototype.getAutoClearForces=function(){return this.m_clearForces},e.prototype.clearForces=function(){for(var t=this.m_bodyList;t;t=t.getNext())t.m_force.setZero(),t.m_torque=0},e.prototype.queryAABB=function(t,i){var o=this.m_broadPhase;this.m_broadPhase.query(t,function(t){var e=o.getUserData(t);return i(e.fixture)})},e.prototype.rayCast=function(t,i,o){var e=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:t,p2:i},function(t,i){var s=e.getUserData(i),r=s.fixture,m=s.childIndex,a={},h=r.rayCast(a,t,m);if(h){var c=a.fraction,_=n.add(n.mul(1-c,t.p1),n.mul(c,t.p2));return o(r,_,a.normal,c)}return t.maxFraction})},e.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},e.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},e.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},e.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},e.prototype.shiftOrigin=function(t){if(!this.m_locked){for(var i=this.m_bodyList;i;i=i.m_next)i.m_xf.p.sub(t),i.m_sweep.c0.sub(t),i.m_sweep.c.sub(t);for(var o=this.m_jointList;o;o=o.m_next)o.shiftOrigin(t);this.m_broadPhase.shiftOrigin(t)}},e.prototype.createBody=function(t,i){if(this.isLocked())return null;t&&n.isValid(t)&&(t={position:t,angle:i});var o=new a(this,t);return o.m_prev=null,o.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=o),this.m_bodyList=o,++this.m_bodyCount,o},e.prototype.createDynamicBody=function(t,i){return t?n.isValid(t)&&(t={position:t,angle:i}):t={},t.type="dynamic",this.createBody(t)},e.prototype.createKinematicBody=function(t,i){return t?n.isValid(t)&&(t={position:t,angle:i}):t={},t.type="kinematic",this.createBody(t)},e.prototype.destroyBody=function(t){if(!this.isLocked()){if(t.m_destroyed)return!1;for(var i=t.m_jointList;i;){var o=i;i=i.next,this.publish("remove-joint",o.joint),this.destroyJoint(o.joint),t.m_jointList=i}t.m_jointList=null;for(var e=t.m_contactList;e;){var s=e;e=e.next,this.destroyContact(s.contact),t.m_contactList=e}t.m_contactList=null;for(var n=t.m_fixtureList;n;){var r=n;n=n.m_next,this.publish("remove-fixture",r),r.destroyProxies(this.m_broadPhase),t.m_fixtureList=n}return t.m_fixtureList=null,t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_bodyList&&(this.m_bodyList=t.m_next),t.m_destroyed=!0,--this.m_bodyCount,!0}},e.prototype.createJoint=function(t){if(this.isLocked())return null;if(t.m_prev=null,t.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=t),this.m_jointList=t,++this.m_jointCount,t.m_edgeA.joint=t,t.m_edgeA.other=t.m_bodyB,t.m_edgeA.prev=null,t.m_edgeA.next=t.m_bodyA.m_jointList,t.m_bodyA.m_jointList&&(t.m_bodyA.m_jointList.prev=t.m_edgeA),t.m_bodyA.m_jointList=t.m_edgeA,t.m_edgeB.joint=t,t.m_edgeB.other=t.m_bodyA,t.m_edgeB.prev=null,t.m_edgeB.next=t.m_bodyB.m_jointList,t.m_bodyB.m_jointList&&(t.m_bodyB.m_jointList.prev=t.m_edgeB),t.m_bodyB.m_jointList=t.m_edgeB,0==t.m_collideConnected)for(var i=t.m_bodyB.getContactList();i;i=i.next)i.other==t.m_bodyA&&i.contact.flagForFiltering();return t},e.prototype.destroyJoint=function(t){if(!this.isLocked()){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_jointList&&(this.m_jointList=t.m_next);var i=t.m_bodyA,o=t.m_bodyB;if(i.setAwake(!0),o.setAwake(!0),t.m_edgeA.prev&&(t.m_edgeA.prev.next=t.m_edgeA.next),t.m_edgeA.next&&(t.m_edgeA.next.prev=t.m_edgeA.prev),t.m_edgeA==i.m_jointList&&(i.m_jointList=t.m_edgeA.next),t.m_edgeA.prev=null,t.m_edgeA.next=null,t.m_edgeB.prev&&(t.m_edgeB.prev.next=t.m_edgeB.next),t.m_edgeB.next&&(t.m_edgeB.next.prev=t.m_edgeB.prev),t.m_edgeB==o.m_jointList&&(o.m_jointList=t.m_edgeB.next),t.m_edgeB.prev=null,t.m_edgeB.next=null,--this.m_jointCount,0==t.m_collideConnected)for(var e=o.getContactList();e;)e.other==i&&e.contact.flagForFiltering(),e=e.next;this.publish("remove-joint",t)}};var _=new m.TimeStep;e.prototype.step=function(t,i,o){if((0|i)!==i&&(i=0),i=i||this.m_velocityIterations,o=o||this.m_positionIterations,this.m_stepCount++,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,_.reset(t),_.velocityIterations=i,_.positionIterations=o,_.warmStarting=this.m_warmStarting,_.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&t>0){this.m_solver.solveWorld(_);for(var e=this.m_bodyList;e;e=e.getNext())0!=e.m_islandFlag&&(e.isStatic()||e.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&t>0&&this.m_solver.solveWorldTOI(_),this.m_clearForces&&this.clearForces(),this.m_locked=!1},e.prototype.findNewContacts=function(){this.m_broadPhase.updatePairs(this.addPair)},e.prototype.createContact=function(t,i){var o=t.fixture,e=i.fixture,s=t.childIndex,n=i.childIndex,r=o.getBody(),m=e.getBody();if(r!=m){for(var a=m.getContactList();a;){if(a.other==r){var c=a.contact.getFixtureA(),_=a.contact.getFixtureB(),l=a.contact.getChildIndexA(),u=a.contact.getChildIndexB();if(c==o&&_==e&&l==s&&u==n)return;if(c==e&&_==o&&l==n&&u==s)return}a=a.next}if(0!=m.shouldCollide(r)&&0!=e.shouldCollide(o)){var p=h.create(o,s,e,n);null!=p&&(p.m_prev=null,null!=this.m_contactList&&(p.m_next=this.m_contactList,this.m_contactList.m_prev=p),this.m_contactList=p,++this.m_contactCount)}}},e.prototype.updateContacts=function(){for(var t,i=this.m_contactList;t=i;){i=t.getNext();var o=t.getFixtureA(),e=t.getFixtureB(),s=t.getChildIndexA(),n=t.getChildIndexB(),r=o.getBody(),m=e.getBody();if(t.m_filterFlag){if(0==m.shouldCollide(r)){this.destroyContact(t);continue}if(0==e.shouldCollide(o)){this.destroyContact(t);continue}t.m_filterFlag=!1}var a=r.isAwake()&&!r.isStatic(),h=m.isAwake()&&!m.isStatic();if(0!=a||0!=h){var c=o.m_proxies[s].proxyId,_=e.m_proxies[n].proxyId,l=this.m_broadPhase.testOverlap(c,_);0!=l?t.update(this):this.destroyContact(t)}}},e.prototype.destroyContact=function(t){h.destroy(t,this),t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_contactList&&(this.m_contactList=t.m_next),--this.m_contactCount},e.prototype._listeners=null,e.prototype.on=function(t,i){return"string"!=typeof t||"function"!=typeof i?this:(this._listeners||(this._listeners={}),this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(i),this)},e.prototype.off=function(t,i){if("string"!=typeof t||"function"!=typeof i)return this;var o=this._listeners&&this._listeners[t];if(!o||!o.length)return this;var e=o.indexOf(i);return e>=0&&o.splice(e,1),this},e.prototype.publish=function(t,i,o,e){var s=this._listeners&&this._listeners[t];if(!s||!s.length)return 0;for(var n=0;n<s.length;n++)s[n].call(this,i,o,e);return s.length},e.prototype.beginContact=function(t){this.publish("begin-contact",t)},e.prototype.endContact=function(t){this.publish("end-contact",t)},e.prototype.preSolve=function(t,i){this.publish("pre-solve",t,i)},e.prototype.postSolve=function(t,i){this.publish("post-solve",t,i)}},{"./Body":2,"./Contact":3,"./Solver":9,"./collision/BroadPhase":12,"./common/Vec2":23,"./util/Timer":49,"./util/common":50,"./util/options":52}],11:[function(t,i,o){function e(t,i){return this instanceof e?(this.lowerBound=n.zero(),this.upperBound=n.zero(),"object"==typeof t&&this.lowerBound.set(t),void("object"==typeof i&&this.upperBound.set(i))):new e(t,i)}DEBUG=!1,ASSERT=!1;var s=(t("../Settings"),t("../common/Math")),n=t("../common/Vec2");i.exports=e,e.prototype.isValid=function(){return e.isValid(this)},e.isValid=function(t){var i=n.sub(t.upperBound,t.lowerBound),o=i.x>=0&&i.y>=0&&n.isValid(t.lowerBound)&&n.isValid(t.upperBound);return o},e.prototype.getCenter=function(){return n.neo(.5*(this.lowerBound.x+this.upperBound.x),.5*(this.lowerBound.y+this.upperBound.y))},e.prototype.getExtents=function(){return n.neo(.5*(this.upperBound.x-this.lowerBound.x),.5*(this.upperBound.y-this.lowerBound.y))},e.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},e.prototype.combine=function(t,i){i=i||this,this.lowerBound.set(s.min(t.lowerBound.x,i.lowerBound.x),s.min(t.lowerBound.y,i.lowerBound.y)),this.upperBound.set(s.max(t.upperBound.x,i.upperBound.x),s.max(t.upperBound.y,i.upperBound.y))},e.prototype.combinePoints=function(t,i){this.lowerBound.set(s.min(t.x,i.x),s.min(t.y,i.y)),this.upperBound.set(s.max(t.x,i.x),s.max(t.y,i.y))},e.prototype.set=function(t){this.lowerBound.set(t.lowerBound.x,t.lowerBound.y),this.upperBound.set(t.upperBound.x,t.upperBound.y)},e.prototype.contains=function(t){var i=!0;return i=i&&this.lowerBound.x<=t.lowerBound.x,i=i&&this.lowerBound.y<=t.lowerBound.y,i=i&&t.upperBound.x<=this.upperBound.x,i=i&&t.upperBound.y<=this.upperBound.y},e.prototype.extend=function(t){e.extend(this,t)},e.extend=function(t,i){t.lowerBound.x-=i,t.lowerBound.y-=i,t.upperBound.x+=i,t.upperBound.y+=i},e.testOverlap=function(t,i){var o=i.lowerBound.x-t.upperBound.x,e=t.lowerBound.x-i.upperBound.x,s=i.lowerBound.y-t.upperBound.y,n=t.lowerBound.y-i.upperBound.y;return!(o>0||s>0||e>0||n>0)},e.areEqual=function(t,i){return n.areEqual(t.lowerBound,i.lowerBound)&&n.areEqual(t.upperBound,i.upperBound)},e.diff=function(t,i){var o=s.max(0,s.min(t.upperBound.x,i.upperBound.x)-s.max(i.lowerBound.x,t.lowerBound.x)),e=s.max(0,s.min(t.upperBound.y,i.upperBound.y)-s.max(i.lowerBound.y,t.lowerBound.y)),n=t.upperBound.x-t.lowerBound.x,r=t.upperBound.y-t.lowerBound.y,m=i.upperBound.y-i.lowerBound.y,m=i.upperBound.y-i.lowerBound.y;return n*r+wB*m-o*e},e.prototype.rayCast=function(t,i){for(var o=-(1/0),e=1/0,r=i.p1,m=n.sub(i.p2,i.p1),a=n.abs(m),h=n.zero(),c="x";null!==c;c="x"===c?"y":null)if(a.x<s.EPSILON){if(r[c]<this.lowerBound[c]||this.upperBound[c]<r[c])return!1}else{var _=1/m[c],l=(this.lowerBound[c]-r[c])*_,u=(this.upperBound[c]-r[c])*_,p=-1;if(l>u){var y=l;l=u,u=y,p=1}if(l>o&&(h.setZero(),h[c]=p,o=l),e=s.min(e,u),o>e)return!1}return!(o<0||i.maxFraction<o)&&(t.fraction=o,t.normal=h,!0)},e.prototype.toString=function(){return JSON.stringify(this)}},{"../Settings":7,"../common/Math":18,"../common/Vec2":23}],12:[function(t,i,o){function e(){this.m_tree=new r,this.m_proxyCount=0,this.m_moveBuffer=[],this.queryCallback=this.queryCallback.bind(this)}DEBUG=!1,ASSERT=!1;var s=(t("../Settings"),t("../util/common"),t("../common/Math")),n=t("./AABB"),r=t("./DynamicTree");i.exports=e,e.prototype.getUserData=function(t){return this.m_tree.getUserData(t)},e.prototype.testOverlap=function(t,i){var o=this.m_tree.getFatAABB(t),e=this.m_tree.getFatAABB(i);return n.testOverlap(o,e)},e.prototype.getFatAABB=function(t){return this.m_tree.getFatAABB(t)},e.prototype.getProxyCount=function(){return this.m_proxyCount},e.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},e.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},e.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},e.prototype.query=function(t,i){this.m_tree.query(t,i)},e.prototype.rayCast=function(t,i){this.m_tree.rayCast(t,i)},e.prototype.shiftOrigin=function(t){this.m_tree.shiftOrigin(t)},e.prototype.createProxy=function(t,i){var o=this.m_tree.createProxy(t,i);return this.m_proxyCount++,this.bufferMove(o),o},e.prototype.destroyProxy=function(t){this.unbufferMove(t),this.m_proxyCount--,this.m_tree.destroyProxy(t)},e.prototype.moveProxy=function(t,i,o){var e=this.m_tree.moveProxy(t,i,o);e&&this.bufferMove(t)},e.prototype.touchProxy=function(t){this.bufferMove(t)},e.prototype.bufferMove=function(t){this.m_moveBuffer.push(t)},e.prototype.unbufferMove=function(t){for(var i=0;i<this.m_moveBuffer.length;++i)this.m_moveBuffer[i]==t&&(this.m_moveBuffer[i]=null)},e.prototype.updatePairs=function(t){for(this.m_callback=t;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),null!==this.m_queryProxyId){var i=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(i,this.queryCallback)}},e.prototype.queryCallback=function(t){if(t==this.m_queryProxyId)return!0;var i=s.min(t,this.m_queryProxyId),o=s.max(t,this.m_queryProxyId),e=this.m_tree.getUserData(i),n=this.m_tree.getUserData(o);return this.m_callback(e,n),!0}},{"../Settings":7,"../common/Math":18,"../util/common":50,"./AABB":11,"./DynamicTree":14}],13:[function(t,i,o){function e(){this.proxyA=new m,this.proxyB=new m,this.transformA=null,this.transformB=null,this.useRadii=!1}function s(){this.pointA=u.zero(),this.pointB=u.zero(),this.distance,this.iterations}function n(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}function r(t,i,o){++_.gjkCalls;var e=o.proxyA,s=o.proxyB,n=o.transformA,r=o.transformB,m=new h;m.readCache(i,e,n,s,r);for(var a=m.m_v,d=c.maxDistnceIterations,v=[],f=[],A=0,x=1/0,g=1/0,b=0;b<d;){A=m.m_count;for(var B=0;B<A;++B)v[B]=a[B].indexA,f[B]=a[B].indexB;if(m.solve(),3==m.m_count)break;var w=m.getClosestPoint();g=w.lengthSquared(),x=g;var S=m.getSearchDirection();if(S.lengthSquared()<l.EPSILON*l.EPSILON)break;var C=a[m.m_count];C.indexA=e.getSupport(p.mulT(n.q,u.neg(S))),C.wA=y.mul(n,e.getVertex(C.indexA)),C.indexB=s.getSupport(p.mulT(r.q,S)),C.wB=y.mul(r,s.getVertex(C.indexB)),C.w=u.sub(C.wB,C.wA),++b,++_.gjkIters;for(var M=!1,B=0;B<A;++B)if(C.indexA==v[B]&&C.indexB==f[B]){M=!0;break}if(M)break;++m.m_count}if(_.gjkMaxIters=l.max(_.gjkMaxIters,b),m.getWitnessPoints(t.pointA,t.pointB),t.distance=u.distance(t.pointA,t.pointB),t.iterations=b,m.writeCache(i),o.useRadii){var I=e.m_radius,T=s.m_radius;if(t.distance>I+T&&t.distance>l.EPSILON){t.distance-=I+T;var P=u.sub(t.pointB,t.pointA);P.normalize(),t.pointA.wAdd(I,P),t.pointB.wSub(T,P)}else{var w=u.mid(t.pointA,t.pointB);t.pointA.set(w),t.pointB.set(w),t.distance=0}}}function m(){this.m_buffer=[],this.m_vertices=[],this.m_count=0,this.m_radius=0}function a(){this.indexA,this.indexB,this.wA=u.zero(),this.wB=u.zero(),this.w=u.zero(),this.a}function h(){this.m_v1=new a,this.m_v2=new a,this.m_v3=new a,this.m_v=[this.m_v1,this.m_v2,this.m_v3],this.m_count}DEBUG=!1,ASSERT=!1,i.exports=r,i.exports.Input=e,i.exports.Output=s,i.exports.Proxy=m,i.exports.Cache=n;var c=t("../Settings"),_=(t("../util/common"),t("../util/Timer"),t("../common/stats")),l=t("../common/Math"),u=t("../common/Vec2"),p=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),y=(t("../common/Sweep"),t("../common/Transform"));t("../common/Velocity"),t("../common/Position");_.gjkCalls=0,_.gjkIters=0,_.gjkMaxIters=0,m.prototype.getVertexCount=function(){return this.m_count},m.prototype.getVertex=function(t){return this.m_vertices[t]},m.prototype.getSupport=function(t){for(var i=0,o=u.dot(this.m_vertices[0],t),e=0;e<this.m_count;++e){var s=u.dot(this.m_vertices[e],t);s>o&&(i=e,o=s)}return i},m.prototype.getSupportVertex=function(t){return this.m_vertices[this.getSupport(t)]},m.prototype.set=function(t,i){t.computeDistanceProxy(this,i)},a.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,this.wA=u.clone(t.wA),this.wB=u.clone(t.wB),this.w=u.clone(t.w),this.a=t.a},h.prototype.print=function(){return 3==this.m_count?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():2==this.m_count?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():1==this.m_count?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},h.prototype.readCache=function(t,i,o,e,s){this.m_count=t.count;for(var n=0;n<this.m_count;++n){var r=this.m_v[n];r.indexA=t.indexA[n],r.indexB=t.indexB[n];var m=i.getVertex(r.indexA),a=e.getVertex(r.indexB);r.wA=y.mul(o,m),r.wB=y.mul(s,a),r.w=u.sub(r.wB,r.wA),r.a=0}if(this.m_count>1){var h=t.metric,c=this.getMetric();(c<.5*h||2*h<c||c<l.EPSILON)&&(this.m_count=0)}if(0==this.m_count){var r=this.m_v[0];r.indexA=0,r.indexB=0;var m=i.getVertex(0),a=e.getVertex(0);r.wA=y.mul(o,m),r.wB=y.mul(s,a),r.w=u.sub(r.wB,r.wA),r.a=1,this.m_count=1}},h.prototype.writeCache=function(t){t.metric=this.getMetric(),t.count=this.m_count;for(var i=0;i<this.m_count;++i)t.indexA[i]=this.m_v[i].indexA,t.indexB[i]=this.m_v[i].indexB},h.prototype.getSearchDirection=function(){switch(this.m_count){case 1:return u.neg(this.m_v1.w);case 2:var t=u.sub(this.m_v2.w,this.m_v1.w),i=u.cross(t,u.neg(this.m_v1.w));return i>0?u.cross(1,t):u.cross(t,1);default:return u.zero()}},h.prototype.getClosestPoint=function(){switch(this.m_count){case 0:return u.zero();case 1:return u.clone(this.m_v1.w);case 2:return u.wAdd(this.m_v1.a,this.m_v1.w,this.m_v2.a,this.m_v2.w);case 3:return u.zero();default:return u.zero()}},h.prototype.getWitnessPoints=function(t,i){switch(this.m_count){case 0:break;case 1:t.set(this.m_v1.wA),i.set(this.m_v1.wB);break;case 2:t.wSet(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),i.wSet(this.m_v1.a,this.m_v1.wB,this.m_v2.a,this.m_v2.wB);break;case 3:t.wSet(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),t.wAdd(this.m_v3.a,this.m_v3.wA),i.set(t)}},h.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return u.distance(this.m_v1.w,this.m_v2.w);case 3:return u.cross(u.sub(this.m_v2.w,this.m_v1.w),u.sub(this.m_v3.w,this.m_v1.w));default:return 0}},h.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3()}},h.prototype.solve2=function(){var t=this.m_v1.w,i=this.m_v2.w,o=u.sub(i,t),e=-u.dot(t,o);if(e<=0)return this.m_v1.a=1,void(this.m_count=1);var s=u.dot(i,o);if(s<=0)return this.m_v2.a=1,this.m_count=1,void this.m_v1.set(this.m_v2);var n=1/(s+e);this.m_v1.a=s*n,this.m_v2.a=e*n,this.m_count=2},h.prototype.solve3=function(){var t=this.m_v1.w,i=this.m_v2.w,o=this.m_v3.w,e=u.sub(i,t),s=u.dot(t,e),n=u.dot(i,e),r=n,m=-s,a=u.sub(o,t),h=u.dot(t,a),c=u.dot(o,a),_=c,l=-h,p=u.sub(o,i),y=u.dot(i,p),d=u.dot(o,p),v=d,f=-y,A=u.cross(e,a),x=A*u.cross(i,o),g=A*u.cross(o,t),b=A*u.cross(t,i);if(m<=0&&l<=0)return this.m_v1.a=1,void(this.m_count=1);if(r>0&&m>0&&b<=0){var B=1/(r+m);return this.m_v1.a=r*B,this.m_v2.a=m*B,void(this.m_count=2)}if(_>0&&l>0&&g<=0){var w=1/(_+l);return this.m_v1.a=_*w,this.m_v3.a=l*w,this.m_count=2,void this.m_v2.set(this.m_v3)}if(r<=0&&f<=0)return this.m_v2.a=1,this.m_count=1,void this.m_v1.set(this.m_v2);if(_<=0&&v<=0)return this.m_v3.a=1,this.m_count=1,void this.m_v1.set(this.m_v3);if(v>0&&f>0&&x<=0){var S=1/(v+f);return this.m_v2.a=v*S,this.m_v3.a=f*S,this.m_count=2,void this.m_v1.set(this.m_v3)}var C=1/(x+g+b);this.m_v1.a=x*C,this.m_v2.a=g*C,this.m_v3.a=b*C,this.m_count=3},r.testOverlap=function(t,i,o,m,a,h){var c=new e;c.proxyA.set(t,i),c.proxyB.set(o,m),c.transformA=a,c.transformB=h,c.useRadii=!0;var _=new n,u=new s;return r(u,_,c),u.distance<10*l.EPSILON}},{"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../common/stats":26,"../util/Timer":49,"../util/common":50}],14:[function(t,i,o){function e(t){this.id=t,this.aabb=new c,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.toString=function(){return this.id+":"+this.userData}}function s(){this.m_root=null,this.m_nodes={},this.m_lastProxyId=0,this.m_pool=new m({create:function(){return new e}})}function n(){var t=[],i=[];return{preorder:function(o){return t.length=0,t.push(o),i.length=0,i.push(0),this},next:function(){for(;t.length>0;){var o=t.length-1,e=t[o];if(0===i[o])return i[o]=1,e;if(1===i[o]&&(i[o]=2,e.child1))return t.push(e.child1),i.push(1),e.child1;if(2===i[o]&&(i[o]=3,e.child2))return t.push(e.child2),i.push(1),e.child2;t.pop(),i.pop()}},close:function(){t.length=0}}}DEBUG=!1,ASSERT=!1;var r=t("../Settings"),m=(t("../util/common"),t("../util/Pool")),a=t("../common/Vec2"),h=t("../common/Math"),c=t("./AABB");i.exports=s,e.prototype.isLeaf=function(){return null==this.child1},s.prototype.getUserData=function(t){var i=this.m_nodes[t];return i.userData},s.prototype.getFatAABB=function(t){var i=this.m_nodes[t];return i.aabb},s.prototype.allocateNode=function(){var t=this.m_pool.allocate();return t.id=++this.m_lastProxyId,t.userData=null,t.parent=null,t.child1=null,t.child2=null,t.height=-1,this.m_nodes[t.id]=t,t},s.prototype.freeNode=function(t){this.m_pool.release(t),t.height=-1,delete this.m_nodes[t.id]},s.prototype.createProxy=function(t,i){var o=this.allocateNode();return o.aabb.set(t),c.extend(o.aabb,r.aabbExtension),o.userData=i,o.height=0,this.insertLeaf(o),o.id},s.prototype.destroyProxy=function(t){var i=this.m_nodes[t];this.removeLeaf(i),this.freeNode(i)},s.prototype.moveProxy=function(t,i,o){var e=this.m_nodes[t];return!e.aabb.contains(i)&&(this.removeLeaf(e),e.aabb.set(i),i=e.aabb,c.extend(i,r.aabbExtension),o.x<0?i.lowerBound.x+=o.x*r.aabbMultiplier:i.upperBound.x+=o.x*r.aabbMultiplier,o.y<0?i.lowerBound.y+=o.y*r.aabbMultiplier:i.upperBound.y+=o.y*r.aabbMultiplier,this.insertLeaf(e),!0)},s.prototype.insertLeaf=function(t){if(null==this.m_root)return this.m_root=t,void(this.m_root.parent=null);for(var i=t.aabb,o=this.m_root;0==o.isLeaf();){var e=o.child1,s=o.child2,n=o.aabb.getPerimeter(),r=new c;r.combine(o.aabb,i);var m,a=r.getPerimeter(),_=2*a,l=2*(a-n);if(e.isLeaf()){var u=new c;u.combine(i,e.aabb),m=u.getPerimeter()+l}else{var u=new c;u.combine(i,e.aabb);var p=e.aabb.getPerimeter(),y=u.getPerimeter();m=y-p+l}var d;if(s.isLeaf()){var u=new c;u.combine(i,s.aabb),d=u.getPerimeter()+l}else{var u=new c;u.combine(i,s.aabb);var p=s.aabb.getPerimeter(),y=u.getPerimeter();d=y-p+l}if(_<m&&_<d)break;o=m<d?e:s}var v=o,f=v.parent,A=this.allocateNode();for(A.parent=f,A.userData=null,A.aabb.combine(i,v.aabb),A.height=v.height+1,null!=f?(f.child1==v?f.child1=A:f.child2=A,A.child1=v,A.child2=t,v.parent=A,t.parent=A):(A.child1=v,A.child2=t,v.parent=A,t.parent=A,this.m_root=A),o=t.parent;null!=o;){o=this.balance(o);var e=o.child1,s=o.child2;o.height=1+h.max(e.height,s.height),o.aabb.combine(e.aabb,s.aabb),o=o.parent}},s.prototype.removeLeaf=function(t){if(t==this.m_root)return void(this.m_root=null);var i,o=t.parent,e=o.parent;if(i=o.child1==t?o.child2:o.child1,null!=e){e.child1==o?e.child1=i:e.child2=i,i.parent=e,this.freeNode(o);for(var s=e;null!=s;){s=this.balance(s);var n=s.child1,r=s.child2;s.aabb.combine(n.aabb,r.aabb),s.height=1+h.max(n.height,r.height),s=s.parent}}else this.m_root=i,i.parent=null,this.freeNode(o)},s.prototype.balance=function(t){var i=t;if(i.isLeaf()||i.height<2)return t;var o=i.child1,e=i.child2,s=e.height-o.height;if(s>1){var n=e.child1,r=e.child2;return e.child1=i,e.parent=i.parent,i.parent=e,null!=e.parent?e.parent.child1==t?e.parent.child1=e:e.parent.child2=e:this.m_root=e,n.height>r.height?(e.child2=n,i.child2=r,r.parent=i,i.aabb.combine(o.aabb,r.aabb),e.aabb.combine(i.aabb,n.aabb),i.height=1+h.max(o.height,r.height),e.height=1+h.max(i.height,n.height)):(e.child2=r,i.child2=n,n.parent=i,i.aabb.combine(o.aabb,n.aabb),e.aabb.combine(i.aabb,r.aabb),i.height=1+h.max(o.height,n.height),e.height=1+h.max(i.height,r.height)),e}if(s<-1){var m=o.child1,a=o.child2;return o.child1=i,o.parent=i.parent,i.parent=o,null!=o.parent?o.parent.child1==i?o.parent.child1=o:o.parent.child2=o:this.m_root=o,m.height>a.height?(o.child2=m,i.child1=a,a.parent=i,i.aabb.combine(e.aabb,a.aabb),o.aabb.combine(i.aabb,m.aabb),i.height=1+h.max(e.height,a.height),o.height=1+h.max(i.height,m.height)):(o.child2=a,i.child1=m,m.parent=i,i.aabb.combine(e.aabb,m.aabb),o.aabb.combine(i.aabb,a.aabb),i.height=1+h.max(e.height,m.height),o.height=1+h.max(i.height,a.height)),o}return i},s.prototype.getHeight=function(){return null==this.m_root?0:this.m_root.height},s.prototype.getAreaRatio=function(){if(null==this.m_root)return 0;for(var t,i=this.m_root,o=i.aabb.getPerimeter(),e=0,s=u.allocate().preorder();t=s.next();)t.height<0||(e+=t.aabb.getPerimeter());return u.release(s),e/o},s.prototype.computeHeight=function(t){var i;if(i="undefined"!=typeof t?this.m_nodes[t]:this.m_root,i.isLeaf())return 0;var o=ComputeHeight(i.child1),e=ComputeHeight(i.child2);return 1+h.max(o,e)},s.prototype.validateStructure=function(t){if(null!=t){t==this.m_root;var i=t.child1,o=t.child2;t.isLeaf()||(this.validateStructure(i),this.validateStructure(o))}},s.prototype.validateMetrics=function(t){if(null!=t){var i=t.child1,o=t.child2;if(!t.isLeaf()){var e=this.m_nodes[i].height,s=this.m_nodes[o].height,n=(1+h.max(e,s),new c);n.combine(i.aabb,o.aabb),this.validateMetrics(i),this.validateMetrics(o)}}},s.prototype.validate=function(){ValidateStructure(this.m_root),ValidateMetrics(this.m_root)},s.prototype.getMaxBalance=function(){for(var t,i=0,o=u.allocate().preorder();t=o.next();)if(!(t.height<=1)){var e=h.abs(t.child2.height-t.child1.height);i=h.max(i,e)}return u.release(o),i},s.prototype.rebuildBottomUp=function(){for(var t,i=[],o=0,e=u.allocate().preorder();t=e.next();)t.height<0||(t.isLeaf()?(t.parent=null,i[o]=t,++o):this.freeNode(t));for(u.release(e);o>1;){for(var s=1/0,n=-1,r=-1,m=0;m<o;++m)for(var a=i[m].aabb,_=m+1;_<o;++_){var l=i[_].aabb,p=new c;p.combine(a,l);var y=p.getPerimeter();y<s&&(n=m,r=_,s=y)}var d=i[n],v=i[r],f=this.allocateNode();f.child1=d,f.child2=v,f.height=1+h.max(d.height,v.height),f.aabb.combine(d.aabb,v.aabb),f.parent=null,d.parent=f,v.parent=f,i[r]=i[o-1],i[n]=f,--o}this.m_root=i[0],this.validate()},s.prototype.shiftOrigin=function(t){for(var i,o=u.allocate().preorder();i=o.next();){var e=i.aabb;e.lowerBound.x-=t.x,e.lowerBound.y-=t.y,e.lowerBound.x-=t.x,e.lowerBound.y-=t.y}u.release(o)},s.prototype.query=function(t,i){var o=l.allocate();for(o.push(this.m_root);o.length>0;){var e=o.pop();if(null!=e&&c.testOverlap(e.aabb,t))if(e.isLeaf()){var s=i(e.id);if(0==s)return}else o.push(e.child1),o.push(e.child2)}l.release(o)},s.prototype.rayCast=function(t,i){var o=t.p1,e=t.p2,s=a.sub(e,o);s.normalize();var n=a.cross(1,s),r=a.abs(n),m=t.maxFraction,u=new c,p=a.wAdd(1-m,o,m,e);u.combinePoints(o,p);var y=l.allocate(),d=_.allocate();for(y.push(this.m_root);y.length>0;){var v=y.pop();if(null!=v&&0!=c.testOverlap(v.aabb,u)){var f=v.aabb.getCenter(),A=v.aabb.getExtents(),x=h.abs(a.dot(n,a.sub(o,f)))-a.dot(r,A);if(!(x>0))if(v.isLeaf()){d.p1=a.clone(t.p1),d.p2=a.clone(t.p2),d.maxFraction=m;var g=i(d,v.id);if(0==g)return;g>0&&(m=g,p=a.wAdd(1-m,o,m,e),u.combinePoints(o,p))}else y.push(v.child1),y.push(v.child2)}}l.release(y),_.release(d)};var _=new m({create:function(){return{}},release:function(t){}}),l=new m({create:function(){return[]},release:function(t){t.length=0}}),u=new m({create:function(){return new n},release:function(t){t.close()}})},{"../Settings":7,"../common/Math":18,"../common/Vec2":23,"../util/Pool":48,"../util/common":50,"./AABB":11}],15:[function(t,i,o){function e(){this.proxyA=new f,this.proxyB=new f,this.sweepA=new u,this.sweepB=new u,this.tMax}function s(){this.state,this.t}function n(t,i){var o=a.now();++h.toiCalls,t.state=s.e_unknown,t.t=i.tMax;var e=i.proxyA,n=i.proxyB,_=i.sweepA,l=i.sweepB;_.normalize(),l.normalize();var u=i.tMax,f=e.m_radius+n.m_radius,x=c.max(m.linearSlop,f-3*m.linearSlop),g=.25*m.linearSlop,b=0,B=m.maxTOIIterations,w=0,S=new A,C=new d;for(C.proxyA=i.proxyA,C.proxyB=i.proxyB,C.useRadii=!1;;){var M=p.identity(),I=p.identity();_.getTransform(M,b),l.getTransform(I,b),C.transformA=M,C.transformB=I;var T=new v;if(y(T,S,C),T.distance<=0){t.state=s.e_overlapped,t.t=0;break}if(T.distance<x+g){t.state=s.e_touching,t.t=b;break}var P=new r;P.initialize(S,e,_,n,l,b);for(var V=!1,z=u,L=0;;){var R=P.findMinSeparation(z);P.indexA,P.indexB;if(R>x+g){t.state=s.e_separated,t.t=u,V=!0;break}if(R>x-g){b=z;break}var F=P.evaluate(b);P.indexA,P.indexB;if(F<x-g){t.state=s.e_failed,t.t=b,V=!0;break}if(F<=x+g){t.state=s.e_touching,t.t=b,V=!0;break}for(var D=0,q=b,E=z;;){var k;k=1&D?q+(x-F)*(E-q)/(R-F):.5*(q+E),++D,++h.toiRootIters;var j=P.evaluate(k);P.indexA,P.indexB;if(c.abs(j-x)<g){z=k;break}if(j>x?(q=k,F=j):(E=k,R=j),50==D)break}if(h.toiMaxRootIters=c.max(h.toiMaxRootIters,D),++L,L==m.maxPolygonVertices)break}if(++w,++h.toiIters,V)break;if(w==B){t.state=s.e_failed,t.t=b;break}}h.toiMaxIters=c.max(h.toiMaxIters,w);var J=a.diff(o);h.toiMaxTime=c.max(h.toiMaxTime,J),h.toiTime+=J}function r(){this.m_proxyA=new f,this.m_proxyB=new f,this.m_sweepA,this.m_sweepB,this.m_type,this.m_localPoint=_.zero(),this.m_axis=_.zero()}DEBUG=!1,ASSERT=!1,i.exports=n,i.exports.Input=e,i.exports.Output=s;var m=t("../Settings"),a=(t("../util/common"),t("../util/Timer")),h=t("../common/stats"),c=t("../common/Math"),_=t("../common/Vec2"),l=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),u=t("../common/Sweep"),p=t("../common/Transform"),y=(t("../common/Velocity"),t("../common/Position"),t("./Distance")),d=y.Input,v=y.Output,f=y.Proxy,A=y.Cache;s.e_unknown=0,s.e_failed=1,s.e_overlapped=2,s.e_touching=3,s.e_separated=4,h.toiTime=0,h.toiMaxTime=0,h.toiCalls=0,h.toiIters=0,h.toiMaxIters=0,h.toiRootIters=0,h.toiMaxRootIters=0;var x=1,g=2,b=3;r.prototype.initialize=function(t,i,o,e,s,n){this.m_proxyA=i,this.m_proxyB=e;var r=t.count;this.m_sweepA=o,this.m_sweepB=s;var m=p.identity(),a=p.identity();if(this.m_sweepA.getTransform(m,n),this.m_sweepB.getTransform(a,n),1==r){this.m_type=x;var h=this.m_proxyA.getVertex(t.indexA[0]),c=this.m_proxyB.getVertex(t.indexB[0]),u=p.mul(m,h),y=p.mul(a,c);this.m_axis.wSet(1,y,-1,u);var d=this.m_axis.normalize();return d}if(t.indexA[0]==t.indexA[1]){this.m_type=b;var v=e.getVertex(t.indexB[0]),f=e.getVertex(t.indexB[1]);this.m_axis=_.cross(_.sub(f,v),1),this.m_axis.normalize();var A=l.mul(a.q,this.m_axis);this.m_localPoint=_.mid(v,f);var y=p.mul(a,this.m_localPoint),h=i.getVertex(t.indexA[0]),u=p.mul(m,h),d=_.dot(u,A)-_.dot(y,A);return d<0&&(this.m_axis=_.neg(this.m_axis),d=-d),d}this.m_type=g;var B=this.m_proxyA.getVertex(t.indexA[0]),w=this.m_proxyA.getVertex(t.indexA[1]);this.m_axis=_.cross(_.sub(w,B),1),this.m_axis.normalize();var A=l.mul(m.q,this.m_axis);this.m_localPoint=_.mid(B,w);var u=p.mul(m,this.m_localPoint),c=this.m_proxyB.getVertex(t.indexB[0]),y=p.mul(a,c),d=_.dot(y,A)-_.dot(u,A);return d<0&&(this.m_axis=_.neg(this.m_axis),d=-d),d},r.prototype.compute=function(t,i){var o=p.identity(),e=p.identity();switch(this.m_sweepA.getTransform(o,i),this.m_sweepB.getTransform(e,i),this.m_type){case x:if(t){var s=l.mulT(o.q,this.m_axis),n=l.mulT(e.q,_.neg(this.m_axis));this.indexA=this.m_proxyA.getSupport(s),this.indexB=this.m_proxyB.getSupport(n)}var r=this.m_proxyA.getVertex(this.indexA),m=this.m_proxyB.getVertex(this.indexB),a=p.mul(o,r),h=p.mul(e,m),c=_.dot(h,this.m_axis)-_.dot(a,this.m_axis);return c;case g:var u=l.mul(o.q,this.m_axis),a=p.mul(o,this.m_localPoint);if(t){var n=l.mulT(e.q,_.neg(u));this.indexA=-1,this.indexB=this.m_proxyB.getSupport(n)}var m=this.m_proxyB.getVertex(this.indexB),h=p.mul(e,m),c=_.dot(h,u)-_.dot(a,u);return c;case b:var u=l.mul(e.q,this.m_axis),h=p.mul(e,this.m_localPoint);if(t){var s=l.mulT(o.q,_.neg(u));this.indexB=-1,this.indexA=this.m_proxyA.getSupport(s)}var r=this.m_proxyA.getVertex(this.indexA),a=p.mul(o,r),c=_.dot(a,u)-_.dot(h,u);return c;default:return t&&(this.indexA=-1,this.indexB=-1),0}},r.prototype.findMinSeparation=function(t){return this.compute(!0,t)},r.prototype.evaluate=function(t){return this.compute(!1,t)}},{"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../common/stats":26,"../util/Timer":49,"../util/common":50,"./Distance":13}],16:[function(t,i,o){function e(t,i,o,e){"object"==typeof t&&null!==t?(this.ex=s.clone(t),this.ey=s.clone(i)):"number"==typeof t?(this.ex=s.neo(t,o),this.ey=s.neo(i,e)):(this.ex=s.zero(),this.ey=s.zero())}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Math"),t("./Vec2"));e.prototype.toString=function(){return JSON.stringify(this)},e.isValid=function(t){return t&&s.isValid(t.ex)&&s.isValid(t.ey)},e.assert=function(t){},e.prototype.set=function(t,i,o,e){"number"==typeof t&&"number"==typeof i&&"number"==typeof o&&"number"==typeof e?(this.ex.set(t,o),this.ey.set(i,e)):"object"==typeof t&&"object"==typeof i?(this.ex.set(t),this.ey.set(i)):"object"==typeof t&&(this.ex.set(t.ex),this.ey.set(t.ey))},e.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},e.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},e.prototype.getInverse=function(){var t=this.ex.x,i=this.ey.x,o=this.ex.y,s=this.ey.y,n=t*s-i*o;0!=n&&(n=1/n);var r=new e;return r.ex.x=n*s,r.ey.x=-n*i,r.ex.y=-n*o,r.ey.y=n*t,r},e.prototype.solve=function(t){var i=this.ex.x,o=this.ey.x,e=this.ex.y,n=this.ey.y,r=i*n-o*e;0!=r&&(r=1/r);var m=s.zero();return m.x=r*(n*t.x-o*t.y),m.y=r*(i*t.y-e*t.x),m},e.mul=function(t,i){if(i&&"x"in i&&"y"in i){var o=t.ex.x*i.x+t.ey.x*i.y,n=t.ex.y*i.x+t.ey.y*i.y;return s.neo(o,n)}if(i&&"ex"in i&&"ey"in i)return new e(s.mul(t,i.ex),s.mul(t,i.ey))},e.mulT=function(t,i){if(i&&"x"in i&&"y"in i)return s.neo(s.dot(i,t.ex),s.dot(i,t.ey));if(i&&"ex"in i&&"ey"in i){var o=s.neo(s.dot(t.ex,i.ex),s.dot(t.ey,i.ex)),n=s.neo(s.dot(t.ex,i.ey),s.dot(t.ey,i.ey));return new e(o,n)}},e.abs=function(t){return new e(s.abs(t.ex),s.abs(t.ey))},e.add=function(t,i){return new e(s.add(t.ex+i.ex),s.add(t.ey+i.ey))}},{"../util/common":50,"./Math":18,"./Vec2":23}],17:[function(t,i,o){function e(t,i,o){"object"==typeof t&&null!==t?(this.ex=n.clone(t),this.ey=n.clone(i),this.ez=n.clone(o)):(this.ex=n(),this.ey=n(),this.ez=n())}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Math"),t("./Vec2")),n=t("./Vec3");e.prototype.toString=function(){return JSON.stringify(this)},e.isValid=function(t){return t&&n.isValid(t.ex)&&n.isValid(t.ey)&&n.isValid(t.ez)},e.assert=function(t){},e.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},e.prototype.solve33=function(t){var i=n.dot(this.ex,n.cross(this.ey,this.ez));0!=i&&(i=1/i);var o=new n;return o.x=i*n.dot(t,n.cross(this.ey,this.ez)),o.y=i*n.dot(this.ex,n.cross(t,this.ez)),o.z=i*n.dot(this.ex,n.cross(this.ey,t)),o},e.prototype.solve22=function(t){var i=this.ex.x,o=this.ey.x,e=this.ex.y,n=this.ey.y,r=i*n-o*e;0!=r&&(r=1/r);var m=s.zero();return m.x=r*(n*t.x-o*t.y),m.y=r*(i*t.y-e*t.x),m},e.prototype.getInverse22=function(t){var i=this.ex.x,o=this.ey.x,e=this.ex.y,s=this.ey.y,n=i*s-o*e;0!=n&&(n=1/n),t.ex.x=n*s,t.ey.x=-n*o,t.ex.z=0,t.ex.y=-n*e,t.ey.y=n*i,t.ey.z=0,t.ez.x=0,t.ez.y=0,t.ez.z=0},e.prototype.getSymInverse33=function(t){var i=n.dot(this.ex,n.cross(this.ey,this.ez));0!=i&&(i=1/i);var o=this.ex.x,e=this.ey.x,s=this.ez.x,r=this.ey.y,m=this.ez.y,a=this.ez.z;t.ex.x=i*(r*a-m*m),t.ex.y=i*(s*m-e*a),t.ex.z=i*(e*m-s*r),t.ey.x=t.ex.y,t.ey.y=i*(o*a-s*s),t.ey.z=i*(s*e-o*m),t.ez.x=t.ex.z,t.ez.y=t.ey.z,t.ez.z=i*(o*r-e*e)},e.mul=function(t,i){if(i&&"z"in i&&"y"in i&&"x"in i){var o=t.ex.x*i.x+t.ey.x*i.y+t.ez.x*i.z,e=t.ex.y*i.x+t.ey.y*i.y+t.ez.y*i.z,r=t.ex.z*i.x+t.ey.z*i.y+t.ez.z*i.z;return new n(o,e,r)}if(i&&"y"in i&&"x"in i){var o=t.ex.x*i.x+t.ey.x*i.y,e=t.ex.y*i.x+t.ey.y*i.y;return s.neo(o,e)}},e.add=function(t,i){return new n(t.x+i.x,t.y+i.y,t.z+i.z)}},{"../util/common":50,"./Math":18,"./Vec2":23,"./Vec3":24}],18:[function(t,i,o){DEBUG=!1,ASSERT=!1;var e=(t("../util/common"),t("../util/create")),s=Math,n=i.exports=e(s);n.EPSILON=1e-9,n.isFinite=function(t){return"number"==typeof t&&isFinite(t)&&!isNaN(t)},n.assert=function(t){},n.invSqrt=function(t){return 1/s.sqrt(t)},n.nextPowerOfTwo=function(t){return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t+1},n.isPowerOfTwo=function(t){return t>0&&0==(t&t-1)},n.mod=function(t,i,o){return"undefined"==typeof i?(o=1,i=0):"undefined"==typeof o&&(o=i,i=0),o>i?(t=(t-i)%(o-i),t+(t<0?o:i)):(t=(t-o)%(i-o),t+(t<=0?i:o))},n.clamp=function(t,i,o){return t<i?i:t>o?o:t},n.random=function(t,i){return"undefined"==typeof t?(i=1,t=0):"undefined"==typeof i&&(i=t,t=0),t==i?t:s.random()*(i-t)+t}},{"../util/common":50,"../util/create":51}],19:[function(t,i,o){function e(){this.c=s.zero(),this.a=0}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("./Vec2"),n=t("./Rot");e.prototype.getTransform=function(t,i){return t.q.set(this.a),t.p.set(s.sub(this.c,n.mul(t.q,i))),t}},{"./Rot":20,"./Vec2":23}],20:[function(t,i,o){function e(t){return this instanceof e?void("number"==typeof t?this.setAngle(t):"object"==typeof t?this.set(t):this.setIdentity()):new e(t)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Vec2")),n=t("./Math");e.neo=function(t){var i=Object.create(e.prototype);return i.setAngle(t),i},e.clone=function(t){Object.create(e.prototype);return ojb.s=t.s,ojb.c=t.c,ojb},e.identity=function(t){var i=Object.create(e.prototype);return i.s=0,i.c=1,i},e.isValid=function(t){return t&&n.isFinite(t.s)&&n.isFinite(t.c)},e.assert=function(t){},e.prototype.setIdentity=function(){this.s=0,this.c=1},e.prototype.set=function(t){"object"==typeof t?(this.s=t.s,this.c=t.c):(this.s=n.sin(t),this.c=n.cos(t))},e.prototype.setAngle=function(t){this.s=n.sin(t),this.c=n.cos(t)},e.prototype.getAngle=function(){return n.atan2(this.s,this.c)},e.prototype.getXAxis=function(){return s.neo(this.c,this.s)},e.prototype.getYAxis=function(){return s.neo(-this.s,this.c)},e.mul=function(t,i){if("c"in i&&"s"in i){var o=e.identity();return o.s=t.s*i.c+t.c*i.s,o.c=t.c*i.c-t.s*i.s,o}if("x"in i&&"y"in i)return s.neo(t.c*i.x-t.s*i.y,t.s*i.x+t.c*i.y)},e.mulSub=function(t,i,o){var e=t.c*(i.x-o.x)-t.s*(i.y-o.y),n=t.s*(i.x-o.y)+t.c*(i.y-o.y);return s.neo(e,n)},e.mulT=function(t,i){if("c"in i&&"s"in i){var o=e.identity();return o.s=t.c*i.s-t.s*i.c,o.c=t.c*i.c+t.s*i.s,o}if("x"in i&&"y"in i)return s.neo(t.c*i.x+t.s*i.y,-t.s*i.x+t.c*i.y)}},{"../util/common":50,"./Math":18,"./Vec2":23}],21:[function(t,i,o){function e(t,i){this.localCenter=n.zero(),this.c=n.zero(),this.a=0,this.alpha0=0,this.c0=n.zero(),this.a0=0}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Math")),n=t("./Vec2"),r=t("./Rot"),m=t("./Transform");e.prototype.setTransform=function(t){var i=m.mul(t,this.localCenter);this.c.set(i),this.c0.set(i),this.a=t.q.getAngle(),this.a0=t.q.getAngle()},e.prototype.setLocalCenter=function(t,i){this.localCenter.set(t);var o=m.mul(i,this.localCenter);this.c.set(o),this.c0.set(o)},e.prototype.getTransform=function(t,i){i="undefined"==typeof i?0:i,t.q.setAngle((1-i)*this.a0+i*this.a),t.p.wSet(1-i,this.c0,i,this.c),t.p.sub(r.mul(t.q,this.localCenter))},e.prototype.advance=function(t){var i=(t-this.alpha0)/(1-this.alpha0);this.c0.wSet(i,this.c,1-i,this.c0),this.a0=i*this.a+(1-i)*this.a0,this.alpha0=t},e.prototype.forward=function(){this.a0=this.a,this.c0.set(this.c)},e.prototype.normalize=function(){var t=s.mod(this.a0,-s.PI,+s.PI);this.a-=this.a0-t,this.a0=t},e.prototype.clone=function(){var t=new e;return t.localCenter.set(this.localCenter),t.alpha0=this.alpha0,t.a0=this.a0,t.a=this.a,t.c0.set(this.c0),t.c.set(this.c),t},e.prototype.set=function(t){this.localCenter.set(t.localCenter),this.alpha0=t.alpha0,this.a0=t.a0,this.a=t.a,this.c0.set(t.c0),this.c.set(t.c)}},{"../util/common":50,"./Math":18,"./Rot":20,"./Transform":22,"./Vec2":23}],22:[function(t,i,o){function e(t,i){return this instanceof e?(this.p=s.zero(),this.q=n.identity(),"undefined"!=typeof t&&this.p.set(t),void("undefined"!=typeof i&&this.q.set(i))):new e(t,i)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Vec2")),n=t("./Rot");e.clone=function(t){var i=Object.create(e.prototype);return i.p=s.clone(t.p),i.q=n.clone(t.q),i},e.neo=function(t,i){var o=Object.create(e.prototype);return o.p=s.clone(t),o.q=n.clone(i),o},e.identity=function(){var t=Object.create(e.prototype);return t.p=s.zero(),t.q=n.identity(),t},e.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},e.prototype.set=function(t,i){e.isValid(t)?(this.p.set(t.p),this.q.set(t.q)):(this.p.set(t),this.q.set(i))},e.isValid=function(t){return t&&s.isValid(t.p)&&n.isValid(t.q)},e.assert=function(t){},e.mul=function(t,i){if(Array.isArray(i)){for(var o=[],r=0;r<i.length;r++)o[r]=e.mul(t,i[r]);return o}if("x"in i&&"y"in i){var m=t.q.c*i.x-t.q.s*i.y+t.p.x,a=t.q.s*i.x+t.q.c*i.y+t.p.y;return s.neo(m,a)}if("p"in i&&"q"in i){var h=e.identity();return h.q=n.mul(t.q,i.q),h.p=s.add(n.mul(t.q,i.p),t.p),h}},e.mulT=function(t,i){if("x"in i&&"y"in i){var o=i.x-t.p.x,r=i.y-t.p.y,m=t.q.c*o+t.q.s*r,a=-t.q.s*o+t.q.c*r;return s.neo(m,a)}if("p"in i&&"q"in i){var h=e.identity();return h.q.set(n.mulT(t.q,i.q)),h.p.set(n.mulT(t.q,s.sub(i.p,t.p))),h}}},{"../util/common":50,"./Rot":20,"./Vec2":23}],23:[function(t,i,o){function e(t,i){return this instanceof e?void("undefined"==typeof t?(this.x=0,this.y=0):"object"==typeof t?(this.x=t.x,this.y=t.y):(this.x=t,this.y=i)):new e(t,i)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Math"));e.zero=function(){var t=Object.create(e.prototype);return t.x=0,t.y=0,t},e.neo=function(t,i){var o=Object.create(e.prototype);return o.x=t,o.y=i,o},e.clone=function(t,i){return e.neo(t.x,t.y)},e.prototype.toString=function(){return JSON.stringify(this)},e.isValid=function(t){return t&&s.isFinite(t.x)&&s.isFinite(t.y)},e.assert=function(t){},e.prototype.clone=function(t){return e.clone(this,t)},e.prototype.setZero=function(){return this.x=0,this.y=0,this},e.prototype.set=function(t,i){return"object"==typeof t?(this.x=t.x,this.y=t.y):(this.x=t,this.y=i),this},e.prototype.wSet=function(t,i,o,e){var s=t*i.x,n=t*i.y;return"undefined"==typeof o&&"undefined"==typeof e||(s+=o*e.x,n+=o*e.y),this.x=s,this.y=n,this},e.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.prototype.wAdd=function(t,i,o,e){var s=t*i.x,n=t*i.y;return"undefined"==typeof o&&"undefined"==typeof e||(s+=o*e.x,n+=o*e.y),this.x+=s,this.y+=n,this},e.prototype.wSub=function(t,i,o,e){var s=t*i.x,n=t*i.y;return"undefined"==typeof o&&"undefined"==typeof e||(s+=o*e.x,n+=o*e.y),this.x-=s,this.y-=n,this},e.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},e.prototype.mul=function(t){return this.x*=t,this.y*=t,this},e.prototype.length=function(){return e.lengthOf(this)},e.prototype.lengthSquared=function(){return e.lengthSquared(this)},e.prototype.normalize=function(){var t=this.length();if(t<s.EPSILON)return 0;var i=1/t;return this.x*=i,this.y*=i,t},e.lengthOf=function(t){return s.sqrt(t.x*t.x+t.y*t.y)},e.lengthSquared=function(t){return t.x*t.x+t.y*t.y},e.distance=function(t,i){var o=t.x-i.x,e=t.y-i.y;return s.sqrt(o*o+e*e)},e.distanceSquared=function(t,i){var o=t.x-i.x,e=t.y-i.y;return o*o+e*e},e.areEqual=function(t,i){return t==i||"object"==typeof i&&null!==i&&t.x==i.x&&t.y==i.y},e.skew=function(t){return e.neo(-t.y,t.x)},e.dot=function(t,i){return t.x*i.x+t.y*i.y},e.cross=function(t,i){return"number"==typeof i?e.neo(i*t.y,-i*t.x):"number"==typeof t?e.neo(-t*i.y,t*i.x):t.x*i.y-t.y*i.x},e.addCross=function(t,i,o){return"number"==typeof o?e.neo(o*i.y+t.x,-o*i.x+t.y):"number"==typeof i?e.neo(-i*o.y+t.x,i*o.x+t.y):void 0},e.add=function(t,i){return e.neo(t.x+i.x,t.y+i.y)},e.wAdd=function(t,i,o,s){var n=e.zero();return n.wAdd(t,i,o,s),n},e.sub=function(t,i){return e.neo(t.x-i.x,t.y-i.y)},e.mul=function(t,i){return"object"==typeof t?e.neo(t.x*i,t.y*i):"object"==typeof i?e.neo(t*i.x,t*i.y):void 0},e.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},e.neg=function(t){return e.neo(-t.x,-t.y)},e.abs=function(t){return e.neo(s.abs(t.x),s.abs(t.y))},e.mid=function(t,i){return e.neo(.5*(t.x+i.x),.5*(t.y+i.y))},e.upper=function(t,i){return e.neo(s.max(t.x,i.x),s.max(t.y,i.y))},e.lower=function(t,i){return e.neo(s.min(t.x,i.x),s.min(t.y,i.y))},e.prototype.clamp=function(t){var i=this.x*this.x+this.y*this.y;if(i>t*t){var o=s.invSqrt(i);this.x*=o*t,this.y*=o*t}return this},e.clamp=function(t,i){return t=e.neo(t.x,t.y),t.clamp(i),t}},{"../util/common":50,"./Math":18}],24:[function(t,i,o){function e(t,i,o){return this instanceof e?void("undefined"==typeof t?(this.x=0,this.y=0,this.z=0):"object"==typeof t?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=i,this.z=o)):new e(t,i,o)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("./Math"));e.prototype.toString=function(){return JSON.stringify(this)},e.isValid=function(t){return t&&s.isFinite(t.x)&&s.isFinite(t.y)&&s.isFinite(t.z)},e.assert=function(t){},e.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},e.prototype.set=function(t,i,o){return this.x=t,this.y=i,this.z=o,this},e.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},e.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},e.prototype.mul=function(t){return this.x*=t,this.y*=t,this.z*=t,this},e.areEqual=function(t,i){return t==i||"object"==typeof i&&null!==i&&t.x==i.x&&t.y==i.y&&t.z==i.z},e.dot=function(t,i){return t.x*i.x+t.y*i.y+t.z*i.z},e.cross=function(t,i){return new e(t.y*i.z-t.z*i.y,t.z*i.x-t.x*i.z,t.x*i.y-t.y*i.x)},e.add=function(t,i){return new e(t.x+i.x,t.y+i.y,t.z+i.z)},e.sub=function(t,i){return new e(t.x-i.x,t.y-i.y,t.z-i.z)},e.mul=function(t,i){return new e(i*t.x,i*t.y,i*t.z)},e.prototype.neg=function(t){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},e.neg=function(t){return new e((-t.x),(-t.y),(-t.z))}},{"../util/common":50,"./Math":18}],25:[function(t,i,o){function e(){this.v=s.zero(),this.w=0}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("./Vec2")},{"./Vec2":23}],26:[function(t,i,o){DEBUG=!1,ASSERT=!1,o.toString=function(t){t="string"==typeof t?t:"\n";var i="";for(var o in this)"function"!=typeof this[o]&&"object"!=typeof this[o]&&(i+=o+":"+this[o]+t);return i}},{}],27:[function(t,i,o){function e(t,i,o,n,r){return this instanceof e?(t=s(t,_),c.call(this,t,i,n),this.m_type=e.TYPE,this.m_localAnchorA=t.localAnchorA||i.getLocalPoint(o),this.m_localAnchorB=t.localAnchorB||n.getLocalPoint(r),this.m_length=a.distance(r,o),this.m_frequencyHz=t.frequencyHz,this.m_dampingRatio=t.dampingRatio,this.m_impulse=0,this.m_gamma=0,this.m_bias=0,this.m_u,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,void this.m_mass):new e(t,i,o,n,r)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("../util/options"),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="distance-joint",e._super=c,e.prototype=n(e._super.prototype);var _={frequencyHz:0,dampingRatio:0};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.setLength=function(t){this.m_length=t},e.prototype.getLength=function(){return this.m_length},e.prototype.setFrequency=function(t){this.m_frequencyHz=t},e.prototype.getFrequency=function(){return this.m_frequencyHz},e.prototype.setDampingRatio=function(t){this.m_dampingRatio=t},e.prototype.getDampingRatio=function(){return this.m_dampingRatio},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){var i=a.mul(t*this.m_impulse,this.m_u);return i},e.prototype.getReactionTorque=function(t){return 0},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,n=this.m_bodyB.c_position.c,c=this.m_bodyB.c_position.a,_=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,u=h.neo(o),p=h.neo(c);this.m_rA=h.mul(u,a.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=h.mul(p,a.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=a.sub(a.add(n,this.m_rB),a.add(i,this.m_rA));var y=this.m_u.length();y>r.linearSlop?this.m_u.mul(1/y):this.m_u.set(0,0);var d=a.cross(this.m_rA,this.m_u),v=a.cross(this.m_rB,this.m_u),f=this.m_invMassA+this.m_invIA*d*d+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=0!=f?1/f:0,this.m_frequencyHz>0){var A=y-this.m_length,x=2*m.PI*this.m_frequencyHz,g=2*this.m_mass*this.m_dampingRatio*x,b=this.m_mass*x*x,B=t.dt;this.m_gamma=B*(g+B*b),this.m_gamma=0!=this.m_gamma?1/this.m_gamma:0,this.m_bias=A*B*b*this.m_gamma,f+=this.m_gamma,this.m_mass=0!=f?1/f:0}else this.m_gamma=0,this.m_bias=0;if(t.warmStarting){this.m_impulse*=t.dtRatio;var w=a.mul(this.m_impulse,this.m_u);e.wSub(this.m_invMassA,w),s-=this.m_invIA*a.cross(this.m_rA,w),_.wAdd(this.m_invMassB,w),l+=this.m_invIB*a.cross(this.m_rB,w)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.set(e),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.set(_),this.m_bodyB.c_velocity.w=l},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=a.add(i,a.cross(o,this.m_rA)),r=a.add(e,a.cross(s,this.m_rB)),m=a.dot(this.m_u,r)-a.dot(this.m_u,n),h=-this.m_mass*(m+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=h;var c=a.mul(h,this.m_u);i.wSub(this.m_invMassA,c),o-=this.m_invIA*a.cross(this.m_rA,c),e.wAdd(this.m_invMassB,c),s+=this.m_invIB*a.cross(this.m_rB,c),this.m_bodyA.c_velocity.v.set(i),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.set(e),this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){if(this.m_frequencyHz>0)return!0;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=h.neo(o),c=h.neo(s),_=h.mulSub(n,this.m_localAnchorA,this.m_localCenterA),l=h.mulSub(c,this.m_localAnchorB,this.m_localCenterB),u=a.sub(a.add(e,l),a.add(i,_)),p=u.normalize(),y=p-this.m_length;y=m.clamp(y,-r.maxLinearCorrection,r.maxLinearCorrection);var d=-this.m_mass*y,v=a.mul(d,u);return i.wSub(this.m_invMassA,v),o-=this.m_invIA*a.cross(_,v),e.wAdd(this.m_invMassB,v),s+=this.m_invIB*a.cross(l,v),this.m_bodyA.c_position.c.set(i),this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c.set(e),this.m_bodyB.c_position.a=s,m.abs(y)<r.linearSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/create":51,"../util/options":52}],28:[function(t,i,o){function e(t,i,o,n){return this instanceof e?(t=s(t,_),c.call(this,t,i,o),this.m_type=e.TYPE,n?(this.m_localAnchorA=i.getLocalPoint(n),this.m_localAnchorB=o.getLocalPoint(n)):(this.m_localAnchorA=m.zero(),this.m_localAnchorB=m.zero()),this.m_linearImpulse=m.zero(),this.m_angularImpulse=0,this.m_maxForce=t.maxForce,this.m_maxTorque=t.maxTorque,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,this.m_linearMass,void this.m_angularMass):new e(t,i,o,n)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=(t("../Settings"),t("../common/Math")),m=t("../common/Vec2"),a=(t("../common/Vec3"),t("../common/Mat22")),h=(t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="friction-joint",e._super=c,e.prototype=n(e._super.prototype);var _={maxForce:0,maxTorque:0};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.setMaxForce=function(t){this.m_maxForce=t},e.prototype.getMaxForce=function(){return this.m_maxForce},e.prototype.setMaxTorque=function(t){this.m_maxTorque=t},e.prototype.getMaxTorque=function(){return this.m_maxTorque},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){return t*this.m_linearImpulse},e.prototype.getReactionTorque=function(t){return t*this.m_angularImpulse},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,o=this.m_bodyA.c_velocity.v,e=this.m_bodyA.c_velocity.w,s=this.m_bodyB.c_position.a,n=this.m_bodyB.c_velocity.v,r=this.m_bodyB.c_velocity.w,c=h.neo(i),_=h.neo(s);this.m_rA=h.mul(c,m.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=h.mul(_,m.sub(this.m_localAnchorB,this.m_localCenterB));var l=this.m_invMassA,u=this.m_invMassB,p=this.m_invIA,y=this.m_invIB,d=new a;if(d.ex.x=l+u+p*this.m_rA.y*this.m_rA.y+y*this.m_rB.y*this.m_rB.y,d.ex.y=-p*this.m_rA.x*this.m_rA.y-y*this.m_rB.x*this.m_rB.y,d.ey.x=d.ex.y,d.ey.y=l+u+p*this.m_rA.x*this.m_rA.x+y*this.m_rB.x*this.m_rB.x,this.m_linearMass=d.getInverse(),this.m_angularMass=p+y,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),t.warmStarting){this.m_linearImpulse.mul(t.dtRatio),this.m_angularImpulse*=t.dtRatio;var v=m.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);o.wSub(l,v),e-=p*(m.cross(this.m_rA,v)+this.m_angularImpulse),n.wAdd(u,v),r+=y*(m.cross(this.m_rB,v)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=o,this.m_bodyA.c_velocity.w=e,this.m_bodyB.c_velocity.v=n,this.m_bodyB.c_velocity.w=r},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_invMassA,h=this.m_invMassB,c=this.m_invIA,_=this.m_invIB,l=t.dt,u=s-o,p=-this.m_angularMass*u,y=this.m_angularImpulse,d=l*this.m_maxTorque;this.m_angularImpulse=r.clamp(this.m_angularImpulse+p,-d,d),p=this.m_angularImpulse-y,o-=c*p,s+=_*p;var u=m.sub(m.add(e,m.cross(s,this.m_rB)),m.add(i,m.cross(o,this.m_rA))),p=m.neg(a.mul(this.m_linearMass,u)),y=this.m_linearImpulse;this.m_linearImpulse.add(p);var d=l*this.m_maxForce;this.m_linearImpulse.lengthSquared()>d*d&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(d)),p=m.sub(this.m_linearImpulse,y),i.wSub(n,p),o-=c*m.cross(this.m_rA,p),e.wAdd(h,p),s+=_*m.cross(this.m_rB,p),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){return!0}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],29:[function(t,i,o){function e(t,i,o,n,r,l){if(!(this instanceof e))return new e(t,i,o,n,r,l);t=s(t,_),h.call(this,t,i,o),this.m_type=e.TYPE,this.m_joint1=n,this.m_joint2=r,this.m_type1=this.m_joint1.getType(),this.m_type2=this.m_joint2.getType();var u,p;this.m_bodyC=this.m_joint1.getBodyA(),this.m_bodyA=this.m_joint1.getBodyB();var y=this.m_bodyA.m_xf,d=this.m_bodyA.m_sweep.a,v=this.m_bodyC.m_xf,f=this.m_bodyC.m_sweep.a;if(this.m_type1==c.TYPE){var A=n;this.m_localAnchorC=A.m_localAnchorA,this.m_localAnchorA=A.m_localAnchorB,this.m_referenceAngleA=A.m_referenceAngle,this.m_localAxisC=m.zero(),u=d-f-this.m_referenceAngleA}else{var x=n;this.m_localAnchorC=x.m_localAnchorA,this.m_localAnchorA=x.m_localAnchorB,this.m_referenceAngleA=x.m_referenceAngle,this.m_localAxisC=x.m_localXAxisA;var g=this.m_localAnchorC,b=a.mulT(v.q,m.add(a.mul(y.q,this.m_localAnchorA),m.sub(y.p,v.p)));u=m.dot(b,this.m_localAxisC)-m.dot(g,this.m_localAxisC)}this.m_bodyD=this.m_joint2.getBodyA(),this.m_bodyB=this.m_joint2.getBodyB();var B=this.m_bodyB.m_xf,w=this.m_bodyB.m_sweep.a,S=this.m_bodyD.m_xf,C=this.m_bodyD.m_sweep.a;if(this.m_type2==c.TYPE){var A=r;this.m_localAnchorD=A.m_localAnchorA,this.m_localAnchorB=A.m_localAnchorB,this.m_referenceAngleB=A.m_referenceAngle,this.m_localAxisD=m.zero(),p=w-C-this.m_referenceAngleB}else{var x=r;this.m_localAnchorD=x.m_localAnchorA,this.m_localAnchorB=x.m_localAnchorB,this.m_referenceAngleB=x.m_referenceAngle,this.m_localAxisD=x.m_localXAxisA;var M=this.m_localAnchorD,I=a.mulT(S.q,m.add(a.mul(B.q,this.m_localAnchorB),m.sub(B.p,S.p)));p=m.dot(I,this.m_localAxisD)-m.dot(M,this.m_localAxisD)}this.m_ratio=l||t.ratio,this.m_constant=u+this.m_ratio*p,this.m_impulse=0,this.m_lcA,this.m_lcB,this.m_lcC,this.m_lcD,this.m_mA,this.m_mB,this.m_mC,this.m_mD,this.m_iA,this.m_iB,this.m_iC,this.m_iD,this.m_JvAC,this.m_JvBD,this.m_JwA,this.m_JwB,this.m_JwC,this.m_JwD,this.m_mass}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=t("../Settings"),m=(t("../common/Math"),t("../common/Vec2")),a=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),h=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint")),c=t("./RevoluteJoint");t("./PrismaticJoint");e.TYPE="gear-joint",e._super=h,e.prototype=n(e._super.prototype);var _={ratio:1};e.prototype.getJoint1=function(){return this.m_joint1},e.prototype.getJoint2=function(){return this.m_joint2},e.prototype.setRatio=function(t){this.m_ratio=t},e.prototype.setRatio=function(){return this.m_ratio},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){var i=this.m_impulse*this.m_JvAC;return t*i},e.prototype.getReactionTorque=function(t){var i=this.m_impulse*this.m_JwA;return t*i},e.prototype.initVelocityConstraints=function(t){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var i=this.m_bodyA.c_position.a,o=this.m_bodyA.c_velocity.v,e=this.m_bodyA.c_velocity.w,s=this.m_bodyB.c_position.a,n=this.m_bodyB.c_velocity.v,r=this.m_bodyB.c_velocity.w,h=this.m_bodyC.c_position.a,_=this.m_bodyC.c_velocity.v,l=this.m_bodyC.c_velocity.w,u=this.m_bodyD.c_position.a,p=this.m_bodyD.c_velocity.v,y=this.m_bodyD.c_velocity.w,d=a.neo(i),v=a.neo(s),f=a.neo(h),A=a.neo(u);if(this.m_mass=0,this.m_type1==c.TYPE)this.m_JvAC=m.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var x=a.mul(f,this.m_localAxisC),g=a.mulSub(f,this.m_localAnchorC,this.m_lcC),b=a.mulSub(d,this.m_localAnchorA,this.m_lcA);this.m_JvAC=x,this.m_JwC=m.cross(g,x),this.m_JwA=m.cross(b,x),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==c.TYPE)this.m_JvBD=m.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var x=a.mul(A,this.m_localAxisD),B=a.mulSub(A,this.m_localAnchorD,this.m_lcD),w=a.mulSub(v,this.m_localAnchorB,this.m_lcB);this.m_JvBD=m.mul(this.m_ratio,x),this.m_JwD=this.m_ratio*m.cross(B,x),this.m_JwB=this.m_ratio*m.cross(w,x),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,t.warmStarting?(o.wAdd(this.m_mA*this.m_impulse,this.m_JvAC),e+=this.m_iA*this.m_impulse*this.m_JwA,n.wAdd(this.m_mB*this.m_impulse,this.m_JvBD),r+=this.m_iB*this.m_impulse*this.m_JwB,_.wSub(this.m_mC*this.m_impulse,this.m_JvAC),l-=this.m_iC*this.m_impulse*this.m_JwC,p.wSub(this.m_mD*this.m_impulse,this.m_JvBD),y-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.set(o),this.m_bodyA.c_velocity.w=e,this.m_bodyB.c_velocity.v.set(n),this.m_bodyB.c_velocity.w=r,this.m_bodyC.c_velocity.v.set(_),this.m_bodyC.c_velocity.w=l,this.m_bodyD.c_velocity.v.set(p),this.m_bodyD.c_velocity.w=y},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_bodyC.c_velocity.v,r=this.m_bodyC.c_velocity.w,a=this.m_bodyD.c_velocity.v,h=this.m_bodyD.c_velocity.w,c=m.dot(this.m_JvAC,i)-m.dot(this.m_JvAC,n)+m.dot(this.m_JvBD,e)-m.dot(this.m_JvBD,a);c+=this.m_JwA*o-this.m_JwC*r+(this.m_JwB*s-this.m_JwD*h);var _=-this.m_mass*c;this.m_impulse+=_,i.wAdd(this.m_mA*_,this.m_JvAC),o+=this.m_iA*_*this.m_JwA,e.wAdd(this.m_mB*_,this.m_JvBD),s+=this.m_iB*_*this.m_JwB,n.wSub(this.m_mC*_,this.m_JvAC),r-=this.m_iC*_*this.m_JwC,a.wSub(this.m_mD*_,this.m_JvBD),h-=this.m_iD*_*this.m_JwD,this.m_bodyA.c_velocity.v.set(i),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.set(e),this.m_bodyB.c_velocity.w=s,this.m_bodyC.c_velocity.v.set(n),this.m_bodyC.c_velocity.w=r,this.m_bodyD.c_velocity.v.set(a),this.m_bodyD.c_velocity.w=h},e.prototype.solvePositionConstraints=function(t){var i,o,e,s,n,h,_,l,u=this.m_bodyA.c_position.c,p=this.m_bodyA.c_position.a,y=this.m_bodyB.c_position.c,d=this.m_bodyB.c_position.a,v=this.m_bodyC.c_position.c,f=this.m_bodyC.c_position.a,A=this.m_bodyD.c_position.c,x=this.m_bodyD.c_position.a,g=a.neo(p),b=a.neo(d),B=a.neo(f),w=a.neo(x),S=0,C=0;if(this.m_type1==c.TYPE)e=m.zero(),n=1,_=1,C+=this.m_iA+this.m_iC,i=p-f-this.m_referenceAngleA;else{var M=a.mul(B,this.m_localAxisC),I=a.mulSub(B,this.m_localAnchorC,this.m_lcC),T=a.mulSub(g,this.m_localAnchorA,this.m_lcA);e=M,_=m.cross(I,M),n=m.cross(T,M),C+=this.m_mC+this.m_mA+this.m_iC*_*_+this.m_iA*n*n;var P=this.m_localAnchorC-this.m_lcC,V=a.mulT(B,m.add(T,m.sub(u,v)));i=Dot(V-P,this.m_localAxisC)}if(this.m_type2==c.TYPE)s=m.zero(),h=this.m_ratio,l=this.m_ratio,C+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),o=d-x-this.m_referenceAngleB;else{var M=a.mul(w,this.m_localAxisD),z=a.mulSub(w,this.m_localAnchorD,this.m_lcD),L=a.mulSub(b,this.m_localAnchorB,this.m_lcB);s=m.mul(this.m_ratio,M),l=this.m_ratio*m.cross(z,M),h=this.m_ratio*m.cross(L,M),C+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*l*l+this.m_iB*h*h;var R=m.sub(this.m_localAnchorD,this.m_lcD),F=a.mulT(w,m.add(L,m.sub(y,A)));o=m.dot(F,this.m_localAxisD)-m.dot(R,this.m_localAxisD)}var D=i+this.m_ratio*o-this.m_constant,q=0;return C>0&&(q=-D/C),u.wAdd(this.m_mA*q,e),p+=this.m_iA*q*n,y.wAdd(this.m_mB*q,s),d+=this.m_iB*q*h,v.wAdd(this.m_mC*q,e),f-=this.m_iC*q*_,A.wAdd(this.m_mD*q,s),x-=this.m_iD*q*l,this.m_bodyA.c_position.c.set(u),this.m_bodyA.c_position.a=p,this.m_bodyB.c_position.c.set(y),this.m_bodyB.c_position.a=d,this.m_bodyC.c_position.c.set(v),this.m_bodyC.c_position.a=f,this.m_bodyD.c_position.c.set(A),this.m_bodyD.c_position.a=x,S<r.linearSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52,"./PrismaticJoint":32,"./RevoluteJoint":34}],30:[function(t,i,o){function e(t,i,o){if(!(this instanceof e))return new e(t,i,o);t=s(t,_),c.call(this,t,i,o),this.m_type=e.TYPE;var n=o.getPosition();this.m_linearOffset=i.getLocalPoint(n);var r=i.getAngle(),a=o.getAngle();this.m_angularOffset=a-r,this.m_linearImpulse=m.zero(),this.m_angularImpulse=0,this.m_maxForce=t.maxForce,this.m_maxTorque=t.maxTorque,this.m_correctionFactor=t.correctionFactor,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_linearError,this.m_angularError,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,this.m_linearMass,this.m_angularMass}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=(t("../Settings"),t("../common/Math")),m=t("../common/Vec2"),a=(t("../common/Vec3"),t("../common/Mat22")),h=(t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="motor-joint",e._super=c,e.prototype=n(e._super.prototype);var _={maxForce:1,maxTorque:1,correctionFactor:.3};e.prototype.setMaxForce=function(t){this.m_maxForce=t},e.prototype.getMaxForce=function(){return this.m_maxForce},e.prototype.setMaxTorque=function(t){this.m_maxTorque=t},e.prototype.getMaxTorque=function(){return this.m_maxTorque},e.prototype.setCorrectionFactor=function(t){this.m_correctionFactor=t},e.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},e.prototype.setLinearOffset=function(t){t.x==this.m_linearOffset.x&&t.y==this.m_linearOffset.y||(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset=t)},e.prototype.getLinearOffset=function(){return this.m_linearOffset},e.prototype.setAngularOffset=function(t){t!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=t)},e.prototype.getAngularOffset=function(){return this.m_angularOffset},e.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},e.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},e.prototype.getReactionForce=function(t){return t*this.m_linearImpulse},e.prototype.getReactionTorque=function(t){return t*this.m_angularImpulse},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,n=this.m_bodyB.c_position.c,r=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,_=this.m_bodyB.c_velocity.w,l=h.neo(o),u=h.neo(r);this.m_rA=h.mul(l,m.neg(this.m_localCenterA)),this.m_rB=h.mul(u,m.neg(this.m_localCenterB));var p=this.m_invMassA,y=this.m_invMassB,d=this.m_invIA,v=this.m_invIB,f=new a;if(f.ex.x=p+y+d*this.m_rA.y*this.m_rA.y+v*this.m_rB.y*this.m_rB.y,f.ex.y=-d*this.m_rA.x*this.m_rA.y-v*this.m_rB.x*this.m_rB.y,f.ey.x=f.ex.y,f.ey.y=p+y+d*this.m_rA.x*this.m_rA.x+v*this.m_rB.x*this.m_rB.x,this.m_linearMass=f.getInverse(),this.m_angularMass=d+v,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=m.zero(),this.m_linearError.wAdd(1,n,1,this.m_rB),this.m_linearError.wSub(1,i,1,this.m_rA),this.m_linearError.sub(h.mul(l,this.m_linearOffset)),this.m_angularError=r-o-this.m_angularOffset,t.warmStarting){this.m_linearImpulse.mul(t.dtRatio),this.m_angularImpulse*=t.dtRatio;var A=m.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);e.wSub(p,A),s-=d*(m.cross(this.m_rA,A)+this.m_angularImpulse),c.wAdd(y,A),_+=v*(m.cross(this.m_rB,A)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=e,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=c,this.m_bodyB.c_velocity.w=_},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_invMassA,h=this.m_invMassB,c=this.m_invIA,_=this.m_invIB,l=t.dt,u=t.inv_dt,p=s-o+u*this.m_correctionFactor*this.m_angularError,y=-this.m_angularMass*p,d=this.m_angularImpulse,v=l*this.m_maxTorque;this.m_angularImpulse=r.clamp(this.m_angularImpulse+y,-v,v),y=this.m_angularImpulse-d,o-=c*y,s+=_*y;var p=m.zero();p.wAdd(1,e,1,m.cross(s,this.m_rB)),p.wSub(1,i,1,m.cross(o,this.m_rA)),p.wAdd(u*this.m_correctionFactor,this.m_linearError);var y=m.neg(a.mul(this.m_linearMass,p)),d=m.clone(this.m_linearImpulse);this.m_linearImpulse.add(y);var v=l*this.m_maxForce;this.m_linearImpulse.clamp(v),y=m.sub(this.m_linearImpulse,d),i.wSub(n,y),o-=c*m.cross(this.m_rA,y),e.wAdd(h,y),s+=_*m.cross(this.m_rB,y),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){return!0}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],31:[function(t,i,o){function e(t,i,o,n){return this instanceof e?(t=s(t,l),_.call(this,t,i,o),this.m_type=e.TYPE,this.m_targetA=m.clone(n),this.m_localAnchorB=c.mulT(this.m_bodyB.getTransform(),this.m_targetA),this.m_maxForce=t.maxForce,this.m_impulse=m.zero(),this.m_frequencyHz=t.frequencyHz,this.m_dampingRatio=t.dampingRatio,this.m_beta=0,this.m_gamma=0,this.m_rB=m.zero(),this.m_localCenterB=m.zero(),this.m_invMassB=0,this.m_invIB=0,this.mass=new a,void(this.m_C=m.zero())):new e(t,i,o,n)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=t("../common/Math"),m=t("../common/Vec2"),a=(t("../common/Vec3"),t("../common/Mat22")),h=(t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform")),_=(t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="mouse-joint",e._super=_,e.prototype=n(e._super.prototype);var l={maxForce:0,frequencyHz:5,dampingRatio:.7};e.prototype.setTarget=function(t){0==this.m_bodyB.isAwake()&&this.m_bodyB.setAwake(!0),this.m_targetA=m.clone(t)},e.prototype.getTarget=function(){return this.m_targetA},e.prototype.setMaxForce=function(t){this.m_maxForce=t},e.getMaxForce=function(){return this.m_maxForce},e.prototype.setFrequency=function(t){this.m_frequencyHz=t},e.prototype.getFrequency=function(){return this.m_frequencyHz},e.prototype.setDampingRatio=function(t){this.m_dampingRatio=t},e.prototype.getDampingRatio=function(){return this.m_dampingRatio},e.prototype.getAnchorA=function(){return m.clone(this.m_targetA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){return m.mul(t,this.m_impulse)},e.prototype.getReactionTorque=function(t){return 0*t},e.prototype.shiftOrigin=function(t){this.m_targetA.sub(t)},e.prototype.initVelocityConstraints=function(t){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyB.c_position,o=this.m_bodyB.c_velocity,e=i.c,s=i.a,n=o.v,c=o.w,_=h.neo(s),l=this.m_bodyB.getMass(),u=2*r.PI*this.m_frequencyHz,p=2*l*this.m_dampingRatio*u,y=l*(u*u),d=t.dt;this.m_gamma=d*(p+d*y),0!=this.m_gamma&&(this.m_gamma=1/this.m_gamma),this.m_beta=d*y*this.m_gamma,this.m_rB=h.mul(_,m.sub(this.m_localAnchorB,this.m_localCenterB));var v=new a;v.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,v.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=v.getInverse(),this.m_C.set(e),this.m_C.wAdd(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),c*=.98,t.warmStarting?(this.m_impulse.mul(t.dtRatio),n.wAdd(this.m_invMassB,this.m_impulse),c+=this.m_invIB*m.cross(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),o.v.set(n),o.w=c},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyB.c_velocity,o=m.clone(i.v),e=i.w,s=m.cross(e,this.m_rB);s.add(o),s.wAdd(1,this.m_C,this.m_gamma,this.m_impulse),s.neg();var n=a.mul(this.m_mass,s),r=m.clone(this.m_impulse);this.m_impulse.add(n);var h=t.dt*this.m_maxForce;this.m_impulse.clamp(h),n=m.sub(this.m_impulse,r),o.wAdd(this.m_invMassB,n),e+=this.m_invIB*m.cross(this.m_rB,n),i.v.set(o),i.w=e},e.prototype.solvePositionConstraints=function(t){return!0}},{"../Joint":5,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],32:[function(t,i,o){function e(t,i,o,n,r){return this instanceof e?(t=s(t,f),u.call(this,t,i,o),this.m_type=e.TYPE,this.m_localAnchorA=t.localAnchorA||i.getLocalPoint(n),this.m_localAnchorB=t.localAnchorB||o.getLocalPoint(n),this.m_localXAxisA=t.localAxisA||i.getLocalVector(r),this.m_localXAxisA.normalize(),this.m_localYAxisA=a.cross(1,this.m_localXAxisA),this.m_referenceAngle=o.getAngle()-i.getAngle(),this.m_impulse=h(),this.m_motorMass=0,this.m_motorImpulse=0,this.m_lowerTranslation=t.lowerTranslation,this.m_upperTranslation=t.upperTranslation,this.m_maxMotorForce=t.maxMotorForce,this.m_motorSpeed=t.motorSpeed,this.m_enableLimit=t.enableLimit,this.m_enableMotor=t.enableMotor,this.m_limitState=p,this.m_axis=a.zero(),this.m_perp=a.zero(),this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,this.m_axis,this.m_perp,this.m_s1,this.m_s2,this.m_a1,this.m_a2,this.m_K=new _,void this.m_motorMass):new e(t,i,o,n,r)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=t("../common/Vec3"),c=t("../common/Mat22"),_=t("../common/Mat33"),l=t("../common/Rot"),u=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint")),p=0,y=1,d=2,v=3;e.TYPE="prismatic-joint",e._super=u,e.prototype=n(e._super.prototype);var f={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.getLocalAxisA=function(){return this.m_localXAxisA},e.prototype.getReferenceAngle=function(){return this.m_referenceAngle},e.prototype.getJointTranslation=function(){var t=this.m_bodyA.getWorldPoint(this.m_localAnchorA),i=this.m_bodyB.getWorldPoint(this.m_localAnchorB),o=a.sub(i,t),e=this.m_bodyA.getWorldVector(this.m_localXAxisA),s=a.dot(o,e);return s},e.prototype.getJointSpeed=function(){var t=this.m_bodyA,i=this.m_bodyB,o=Mul(t.m_xf.q,this.m_localAnchorA-t.m_sweep.localCenter),e=Mul(i.m_xf.q,this.m_localAnchorB-i.m_sweep.localCenter),s=t.m_sweep.c+o,n=i.m_sweep.c+e,r=n-s,m=Mul(t.m_xf.q,this.m_localXAxisA),a=t.m_linearVelocity,h=i.m_linearVelocity,c=t.m_angularVelocity,_=i.m_angularVelocity,l=Dot(r,Cross(c,m))+Dot(m,h+Cross(_,e)-a-Cross(c,o));return l},e.prototype.isLimitEnabled=function(){return this.m_enableLimit},e.prototype.enableLimit=function(t){t!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=t,this.m_impulse.z=0)},e.prototype.getLowerLimit=function(){return this.m_lowerTranslation},e.prototype.getUpperLimit=function(){return this.m_upperTranslation},e.prototype.setLimits=function(t,i){t==this.m_lowerTranslation&&i==this.m_upperTranslation||(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=t,this.m_upperTranslation=i,this.m_impulse.z=0)},e.prototype.isMotorEnabled=function(){return this.m_enableMotor},e.prototype.enableMotor=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=t},e.prototype.setMotorSpeed=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=t},e.prototype.setMaxMotorForce=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=t},e.prototype.getMotorSpeed=function(){return this.m_motorSpeed},e.prototype.getMotorForce=function(t){return t*this.m_motorImpulse},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){return t*(this.m_impulse.x*this.m_perp+(this.m_motorImpulse+this.m_impulse.z)*this.m_axis)},e.prototype.getReactionTorque=function(t){return t*this.m_impulse.y},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,n=this.m_bodyB.c_position.c,h=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,_=this.m_bodyB.c_velocity.w,u=l.neo(o),f=l.neo(h),A=l.mul(u,a.sub(this.m_localAnchorA,this.m_localCenterA)),x=l.mul(f,a.sub(this.m_localAnchorB,this.m_localCenterB)),g=a.zero();g.wAdd(1,n,1,x),g.wSub(1,i,1,A);var b=this.m_invMassA,B=this.m_invMassB,w=this.m_invIA,S=this.m_invIB;this.m_axis=l.mul(u,this.m_localXAxisA),this.m_a1=a.cross(a.add(g,A),this.m_axis),this.m_a2=a.cross(x,this.m_axis),this.m_motorMass=b+B+w*this.m_a1*this.m_a1+S*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),this.m_perp=l.mul(u,this.m_localYAxisA),this.m_s1=a.cross(a.add(g,A),this.m_perp),this.m_s2=a.cross(x,this.m_perp);var C=(a.cross(A,this.m_perp),b+B+w*this.m_s1*this.m_s1+S*this.m_s2*this.m_s2),M=w*this.m_s1+S*this.m_s2,I=w*this.m_s1*this.m_a1+S*this.m_s2*this.m_a2,T=w+S;0==T&&(T=1);var P=w*this.m_a1+S*this.m_a2,V=b+B+w*this.m_a1*this.m_a1+S*this.m_a2*this.m_a2;if(this.m_K.ex.set(C,M,I),this.m_K.ey.set(M,T,P),this.m_K.ez.set(I,P,V),this.m_enableLimit){var z=a.dot(this.m_axis,g);m.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*r.linearSlop?this.m_limitState=v:z<=this.m_lowerTranslation?this.m_limitState!=y&&(this.m_limitState=y,this.m_impulse.z=0):z>=this.m_upperTranslation?this.m_limitState!=d&&(this.m_limitState=d,this.m_impulse.z=0):(this.m_limitState=p,this.m_impulse.z=0)}else this.m_limitState=p,this.m_impulse.z=0;if(0==this.m_enableMotor&&(this.m_motorImpulse=0),t.warmStarting){this.m_impulse.mul(t.dtRatio),this.m_motorImpulse*=t.dtRatio;var L=a.wAdd(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),R=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,F=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;e.wSub(b,L),s-=w*R,c.wAdd(B,L),_+=S*F}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.set(e),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.set(c),this.m_bodyB.c_velocity.w=_},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_invMassA,r=this.m_invMassB,c=this.m_invIA,_=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=v){var l=a.dot(this.m_axis,a.sub(e,i))+this.m_a2*s-this.m_a1*o,u=this.m_motorMass*(this.m_motorSpeed-l),f=this.m_motorImpulse,A=t.dt*this.m_maxMotorForce;this.m_motorImpulse=m.clamp(this.m_motorImpulse+u,-A,A),u=this.m_motorImpulse-f;var x=a.zero().wSet(u,this.m_axis),g=u*this.m_a1,b=u*this.m_a2;i.wSub(n,x),o-=c*g,e.wAdd(r,x),s+=_*b}var B=a.zero();if(B.x+=a.dot(this.m_perp,e)+this.m_s2*s,B.x-=a.dot(this.m_perp,i)+this.m_s1*o,B.y=s-o,this.m_enableLimit&&this.m_limitState!=p){var w=0;w+=a.dot(this.m_axis,e)+this.m_a2*s,w-=a.dot(this.m_axis,i)+this.m_a1*o;var l=h(B.x,B.y,w),S=h(this.m_impulse),C=this.m_K.solve33(h.neg(l));this.m_impulse.add(C),this.m_limitState==y?this.m_impulse.z=m.max(this.m_impulse.z,0):this.m_limitState==d&&(this.m_impulse.z=m.min(this.m_impulse.z,0));var M=a.wAdd(-1,B,-(this.m_impulse.z-S.z),a.neo(this.m_K.ez.x,this.m_K.ez.y)),I=a.add(this.m_K.solve22(M),a.neo(S.x,S.y));this.m_impulse.x=I.x,this.m_impulse.y=I.y,C=h.sub(this.m_impulse,S);var x=a.wAdd(C.x,this.m_perp,C.z,this.m_axis),g=C.x*this.m_s1+C.y+C.z*this.m_a1,b=C.x*this.m_s2+C.y+C.z*this.m_a2;i.wSub(n,x),o-=c*g,e.wAdd(r,x),s+=_*b}else{var C=this.m_K.solve22(a.neg(B));this.m_impulse.x+=C.x,this.m_impulse.y+=C.y;var x=a.zero().wAdd(C.x,this.m_perp),g=C.x*this.m_s1+C.y,b=C.x*this.m_s2+C.y;i.wSub(n,x),o-=c*g,e.wAdd(r,x),s+=_*b}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=l.neo(o),u=l.neo(s),p=this.m_invMassA,y=this.m_invMassB,d=this.m_invIA,v=this.m_invIB,f=l.mul(n,a.sub(this.m_localAnchorA,this.m_localCenterA)),A=l.mul(u,a.sub(this.m_localAnchorB,this.m_localCenterB)),x=a.sub(a.add(e,A),a.add(i,f)),g=l.mul(n,this.m_localXAxisA),b=a.cross(a.add(x,f),g),B=a.cross(A,g),w=l.mul(n,this.m_localYAxisA),S=a.cross(a.add(x,f),w),C=a.cross(A,w),M=h(),I=a.zero();I.x=a.dot(w,x),I.y=s-o-this.m_referenceAngle;var T=m.abs(I.x),P=m.abs(I.y),V=r.linearSlop,z=r.maxLinearCorrection,L=!1,R=0;if(this.m_enableLimit){var F=a.dot(g,x);m.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*V?(R=m.clamp(F,-z,z),T=m.max(T,m.abs(F)),L=!0):F<=this.m_lowerTranslation?(R=m.clamp(F-this.m_lowerTranslation+V,-z,0),T=m.max(T,this.m_lowerTranslation-F),L=!0):F>=this.m_upperTranslation&&(R=m.clamp(F-this.m_upperTranslation-V,0,z),T=m.max(T,F-this.m_upperTranslation),L=!0)}if(L){var D=p+y+d*S*S+v*C*C,q=d*S+v*C,E=d*S*b+v*C*B,k=d+v;0==k&&(k=1);var j=d*b+v*B,J=p+y+d*b*b+v*B*B,O=new _;O.ex.set(D,q,E),O.ey.set(q,k,j),O.ez.set(E,j,J);var N=h();N.x=I.x,N.y=I.y,N.z=R,M=O.solve33(h.neg(N))}else{var D=p+y+d*S*S+v*C*C,q=d*S+v*C,k=d+v;0==k&&(k=1);var O=new c;O.ex.set(D,q),O.ey.set(q,k);var G=O.solve(a.neg(I));M.x=G.x,M.y=G.y,M.z=0}var U=a.wAdd(M.x,w,M.z,g),W=M.x*S+M.y+M.z*b,Y=M.x*C+M.y+M.z*B;return i.wSub(p,U),o-=d*W,e.wAdd(y,U),s+=v*Y,this.m_bodyA.c_position.c=i,this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c=e,this.m_bodyB.c_position.a=s,T<=r.linearSlop&&P<=r.angularSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],33:[function(t,i,o){function e(t,i,o,n,r,m,h,c){return this instanceof e?(t=s(t,l),_.call(this,t,i,o),this.m_type=e.TYPE,this.m_groundAnchorA=n,this.m_groundAnchorB=r,this.m_localAnchorA=i.getLocalPoint(m),this.m_localAnchorB=o.getLocalPoint(h),this.m_lengthA=a.distance(m,n),this.m_lengthB=a.distance(h,r),this.m_ratio=t.ratio||c,this.m_constant=this.m_lengthA+this.m_ratio*this.m_lengthB,this.m_impulse=0,this.m_uA,this.m_uB,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,void this.m_mass):new e(t,i,o,n,r,m,h,c)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=t("../common/Vec3"),c=(t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),_=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="pulley-joint",e.MIN_PULLEY_LENGTH=2,e._super=_,e.prototype=n(e._super.prototype);var l={collideConnected:!0};e.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},e.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},e.prototype.getLengthA=function(){return this.m_lengthA},e.prototype.getLengthB=function(){return this.m_lengthB},e.prototype.setRatio=function(){return this.m_ratio},e.prototype.getCurrentLengthA=function(){var t=this.m_bodyA.getWorldPoint(this.m_localAnchorA),i=this.m_groundAnchorA;return a.distance(t,i)},e.prototype.getCurrentLengthB=function(){var t=this.m_bodyB.getWorldPoint(this.m_localAnchorB),i=this.m_groundAnchorB;return a.distance(t,i)},e.prototype.shiftOrigin=function(t){this.m_groundAnchorA-=t,this.m_groundAnchorB-=t},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){return h.mul(t*this.m_impulse,this.m_uB)},e.prototype.getReactionTorque=function(t){return 0},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,n=this.m_bodyB.c_position.c,m=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,_=this.m_bodyB.c_velocity.w,l=c.neo(o),u=c.neo(m);this.m_rA=c.mul(l,a.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=c.mul(u,a.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=a.sub(a.add(i,this.m_rA),this.m_groundAnchorA),this.m_uB=a.sub(a.add(n,this.m_rB),this.m_groundAnchorB);var p=this.m_uA.length(),y=this.m_uB.length();p>10*r.linearSlop?this.m_uA.mul(1/p):this.m_uA.setZero(),y>10*r.linearSlop?this.m_uB.mul(1/y):this.m_uB.setZero();var d=a.cross(this.m_rA,this.m_uA),v=a.cross(this.m_rB,this.m_uB),f=this.m_invMassA+this.m_invIA*d*d,A=this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=f+this.m_ratio*this.m_ratio*A,this.m_mass>0&&(this.m_mass=1/this.m_mass),t.warmStarting){this.m_impulse*=t.dtRatio;var x=a.mul(-this.m_impulse,this.m_uA),g=a.mul(-this.m_ratio*this.m_impulse,this.m_uB);e.wAdd(this.m_invMassA,x),s+=this.m_invIA*a.cross(this.m_rA,x),h.wAdd(this.m_invMassB,g),_+=this.m_invIB*a.cross(this.m_rB,g)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=e,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=h,this.m_bodyB.c_velocity.w=_},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=a.add(i,a.cross(o,this.m_rA)),r=a.add(e,a.cross(s,this.m_rB)),m=-a.dot(this.m_uA,n)-this.m_ratio*a.dot(this.m_uB,r),h=-this.m_mass*m;this.m_impulse+=h;var c=a.zero().wSet(-h,this.m_uA),_=a.zero().wSet(-this.m_ratio*h,this.m_uB);i.wAdd(this.m_invMassA,c),o+=this.m_invIA*a.cross(this.m_rA,c),e.wAdd(this.m_invMassB,_),s+=this.m_invIB*a.cross(this.m_rB,_),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=c.neo(o),h=c.neo(s),_=c.mul(n,a.sub(this.m_localAnchorA,this.m_localCenterA)),l=c.mul(h,a.sub(this.m_localAnchorB,this.m_localCenterB)),u=a.sub(a.add(i,this.m_rA),this.m_groundAnchorA),p=a.sub(a.add(e,this.m_rB),this.m_groundAnchorB),y=u.length(),d=p.length();y>10*r.linearSlop?u.mul(1/y):u.setZero(),d>10*r.linearSlop?p.mul(1/d):p.setZero();var v=a.cross(_,u),f=a.cross(l,p),A=this.m_invMassA+this.m_invIA*v*v,x=this.m_invMassB+this.m_invIB*f*f,g=A+this.m_ratio*this.m_ratio*x;g>0&&(g=1/g);var b=this.m_constant-y-this.m_ratio*d,B=m.abs(b),w=-g*b,S=a.zero().wSet(-w,u),C=a.zero().wSet(-this.m_ratio*w,p);return i.wAdd(this.m_invMassA,S),o+=this.m_invIA*a.cross(_,S),e.wAdd(this.m_invMassB,C),s+=this.m_invIB*a.cross(l,C),this.m_bodyA.c_position.c=i,this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c=e,this.m_bodyB.c_position.a=s,B<r.linearSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],34:[function(t,i,o){function e(t,i,o,n){return this instanceof e?(t=s(t,f),u.call(this,t,i,o),this.m_type=e.TYPE,this.m_localAnchorA=t.localAnchorA||i.getLocalPoint(n),this.m_localAnchorB=t.localAnchorB||o.getLocalPoint(n),this.m_referenceAngle=o.getAngle()-i.getAngle(),this.m_impulse=h(),this.m_motorImpulse=0,this.m_lowerAngle=t.lowerAngle,this.m_upperAngle=t.upperAngle,this.m_maxMotorTorque=t.maxMotorTorque,this.m_motorSpeed=t.motorSpeed,this.m_enableLimit=t.enableLimit,this.m_enableMotor=t.enableMotor,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,this.m_mass=new _,this.m_motorMass,void(this.m_limitState=p)):new e(t,i,o,n)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/options")),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=t("../common/Vec3"),c=t("../common/Mat22"),_=t("../common/Mat33"),l=t("../common/Rot"),u=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint")),p=0,y=1,d=2,v=3;e.TYPE="revolute-joint",e._super=u,e.prototype=n(e._super.prototype);var f={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.getReferenceAngle=function(){return this.m_referenceAngle},e.prototype.getJointAngle=function(){var t=this.m_bodyA,i=this.m_bodyB;return i.m_sweep.a-t.m_sweep.a-this.m_referenceAngle},e.prototype.getJointSpeed=function(){var t=this.m_bodyA,i=this.m_bodyB;return i.m_angularVelocity-t.m_angularVelocity},e.prototype.isMotorEnabled=function(){return this.m_enableMotor},e.prototype.enableMotor=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=t},e.prototype.getMotorTorque=function(t){return t*this.m_motorImpulse},e.prototype.setMotorSpeed=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=t},e.prototype.getMotorSpeed=function(){return this.m_motorSpeed},e.prototype.setMaxMotorTorque=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=t},e.prototype.isLimitEnabled=function(){return this.m_enableLimit},e.prototype.enableLimit=function(t){t!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=t,this.m_impulse.z=0)},e.prototype.getLowerLimit=function(){return this.m_lowerAngle},e.prototype.getUpperLimit=function(){return this.m_upperAngle},e.prototype.setLimits=function(t,i){t==this.m_lowerAngle&&i==this.m_upperAngle||(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=t,this.m_upperAngle=i)},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){var i=a.neo(this.m_impulse.x,this.m_impulse.y);return t*i},e.prototype.getReactionTorque=function(t){return t*this.m_impulse.z},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,o=this.m_bodyA.c_velocity.v,e=this.m_bodyA.c_velocity.w,s=this.m_bodyB.c_position.a,n=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,c=l.neo(i),_=l.neo(s);this.m_rA=l.mul(c,a.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=l.mul(_,a.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,A=this.m_invIA,x=this.m_invIB,g=A+x==0;if(this.m_mass.ex.x=u+f+this.m_rA.y*this.m_rA.y*A+this.m_rB.y*this.m_rB.y*x,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*A-this.m_rB.y*this.m_rB.x*x,this.m_mass.ez.x=-this.m_rA.y*A-this.m_rB.y*x,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=u+f+this.m_rA.x*this.m_rA.x*A+this.m_rB.x*this.m_rB.x*x,this.m_mass.ez.y=this.m_rA.x*A+this.m_rB.x*x,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=A+x,this.m_motorMass=A+x,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(0==this.m_enableMotor||g)&&(this.m_motorImpulse=0),this.m_enableLimit&&0==g){var b=s-i-this.m_referenceAngle;m.abs(this.m_upperAngle-this.m_lowerAngle)<2*r.angularSlop?this.m_limitState=v:b<=this.m_lowerAngle?(this.m_limitState!=y&&(this.m_impulse.z=0),this.m_limitState=y):b>=this.m_upperAngle?(this.m_limitState!=d&&(this.m_impulse.z=0),this.m_limitState=d):(this.m_limitState=p,this.m_impulse.z=0)}else this.m_limitState=p;if(t.warmStarting){this.m_impulse.mul(t.dtRatio),this.m_motorImpulse*=t.dtRatio;var B=a.neo(this.m_impulse.x,this.m_impulse.y);o.wSub(u,B),e-=A*(a.cross(this.m_rA,B)+this.m_motorImpulse+this.m_impulse.z),n.wAdd(f,B),h+=x*(a.cross(this.m_rB,B)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=o,this.m_bodyA.c_velocity.w=e,this.m_bodyB.c_velocity.v=n,this.m_bodyB.c_velocity.w=h},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_invMassA,r=this.m_invMassB,c=this.m_invIA,_=this.m_invIB,l=c+_==0;if(this.m_enableMotor&&this.m_limitState!=v&&0==l){var u=s-o-this.m_motorSpeed,f=-this.m_motorMass*u,A=this.m_motorImpulse,x=t.dt*this.m_maxMotorTorque;this.m_motorImpulse=m.clamp(this.m_motorImpulse+f,-x,x),f=this.m_motorImpulse-A,o-=c*f,s+=_*f}if(this.m_enableLimit&&this.m_limitState!=p&&0==l){var g=a.zero();g.wAdd(1,e,1,a.cross(s,this.m_rB)),g.wSub(1,i,1,a.cross(o,this.m_rA));var b=s-o,u=h(g.x,g.y,b),f=h.neg(this.m_mass.solve33(u));if(this.m_limitState==v)this.m_impulse.add(f);else if(this.m_limitState==y){var B=this.m_impulse.z+f.z;if(B<0){var w=a.wAdd(-1,g,this.m_impulse.z,a.neo(this.m_mass.ez.x,this.m_mass.ez.y)),S=this.m_mass.solve22(w);f.x=S.x,f.y=S.y,f.z=-this.m_impulse.z,this.m_impulse.x+=S.x,this.m_impulse.y+=S.y,this.m_impulse.z=0}else this.m_impulse.add(f)}else if(this.m_limitState==d){var B=this.m_impulse.z+f.z;if(B>0){var w=a.wAdd(-1,g,this.m_impulse.z,a.neo(this.m_mass.ez.x,this.m_mass.ez.y)),S=this.m_mass.solve22(w);f.x=S.x,f.y=S.y,f.z=-this.m_impulse.z,this.m_impulse.x+=S.x,this.m_impulse.y+=S.y,this.m_impulse.z=0}else this.m_impulse.add(f)}var C=a.neo(f.x,f.y);i.wSub(n,C),o-=c*(a.cross(this.m_rA,C)+f.z),e.wAdd(r,C),s+=_*(a.cross(this.m_rB,C)+f.z)}else{var u=a.zero();u.wAdd(1,e,1,a.cross(s,this.m_rB)),u.wSub(1,i,1,a.cross(o,this.m_rA));var f=this.m_mass.solve22(a.neg(u));this.m_impulse.x+=f.x,this.m_impulse.y+=f.y,i.wSub(n,f),o-=c*a.cross(this.m_rA,f),e.wAdd(r,f),s+=_*a.cross(this.m_rB,f)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=l.neo(o),h=l.neo(s),_=0,u=0,f=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=p&&0==f){var A=s-o-this.m_referenceAngle,x=0;if(this.m_limitState==v){var g=m.clamp(A-this.m_lowerAngle,-r.maxAngularCorrection,r.maxAngularCorrection);x=-this.m_motorMass*g,_=m.abs(g)}else if(this.m_limitState==y){var g=A-this.m_lowerAngle;_=-g,g=m.clamp(g+r.angularSlop,-r.maxAngularCorrection,0),x=-this.m_motorMass*g}else if(this.m_limitState==d){var g=A-this.m_upperAngle;_=g,g=m.clamp(g-r.angularSlop,0,r.maxAngularCorrection),x=-this.m_motorMass*g}o-=this.m_invIA*x,s+=this.m_invIB*x}n.set(o),h.set(s);var b=l.mul(n,a.sub(this.m_localAnchorA,this.m_localCenterA)),B=l.mul(h,a.sub(this.m_localAnchorB,this.m_localCenterB)),g=a.zero();g.wAdd(1,e,1,B),g.wSub(1,i,1,b),u=g.length();var w=this.m_invMassA,S=this.m_invMassB,C=this.m_invIA,M=this.m_invIB,I=new c;I.ex.x=w+S+C*b.y*b.y+M*B.y*B.y,I.ex.y=-C*b.x*b.y-M*B.x*B.y,I.ey.x=I.ex.y,I.ey.y=w+S+C*b.x*b.x+M*B.x*B.x;var T=a.neg(I.solve(g));return i.wSub(w,T),o-=C*a.cross(b,T),e.wAdd(S,T),s+=M*a.cross(B,T),this.m_bodyA.c_position.c.set(i),this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c.set(e),this.m_bodyB.c_position.a=s,u<=r.linearSlop&&_<=r.angularSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/common":50,"../util/create":51,"../util/options":52}],35:[function(t,i,o){function e(t,i,o,n){return this instanceof e?(t=s(t,u),c.call(this,t,i,o),this.m_type=e.TYPE,this.m_localAnchorA=t.localAnchorA||i.getLocalPoint(n),this.m_localAnchorB=t.localAnchorB||o.getLocalPoint(n),this.m_maxLength=t.maxLength,this.m_mass=0,this.m_impulse=0,this.m_length=0,this.m_state=_,this.m_u,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,void this.m_mass):new e(t,i,o,n)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("../util/options"),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint")),_=0,l=2;e.TYPE="rope-joint",e._super=c,e.prototype=n(e._super.prototype);var u={maxLength:0};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.setMaxLength=function(t){this.m_maxLength=t},e.prototype.getMaxLength=function(){return this.m_maxLength},e.prototype.getLimitState=function(){return this.m_state},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){var i=t*this.m_impulse*this.m_u;return i},e.prototype.getReactionTorque=function(t){return 0},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,n=this.m_bodyB.c_position.c,m=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,u=this.m_bodyB.c_velocity.w,p=h.neo(o),y=h.neo(m);this.m_rA=h.mulSub(p,this.m_localAnchorA,this.m_localCenterA),this.m_rB=h.mulSub(y,this.m_localAnchorB,this.m_localCenterB),this.m_u=a.zero(),this.m_u.wAdd(1,n,1,this.m_rB),this.m_u.wSub(1,i,1,this.m_rA),this.m_length=this.m_u.length();var d=this.m_length-this.m_maxLength;if(d>0?this.m_state=l:this.m_state=_,!(this.m_length>r.linearSlop))return this.m_u.setZero(),this.m_mass=0,void(this.m_impulse=0);this.m_u.mul(1/this.m_length);var v=a.cross(this.m_rA,this.m_u),f=a.cross(this.m_rB,this.m_u),A=this.m_invMassA+this.m_invIA*v*v+this.m_invMassB+this.m_invIB*f*f;if(this.m_mass=0!=A?1/A:0,t.warmStarting){this.m_impulse*=t.dtRatio;var x=a.mul(this.m_impulse,this.m_u);e.wSub(this.m_invMassA,x),s-=this.m_invIA*a.cross(this.m_rA,x),c.wAdd(this.m_invMassB,x),u+=this.m_invIB*a.cross(this.m_rB,x)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.set(e),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.set(c),this.m_bodyB.c_velocity.w=u},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=a.addCross(i,o,this.m_rA),r=a.addCross(e,s,this.m_rB),h=this.m_length-this.m_maxLength,c=a.dot(this.m_u,a.sub(r,n));h<0&&(c+=t.inv_dt*h);var _=-this.m_mass*c,l=this.m_impulse;this.m_impulse=m.min(0,this.m_impulse+_),_=this.m_impulse-l;var u=a.mul(_,this.m_u);i.wSub(this.m_invMassA,u),o-=this.m_invIA*a.cross(this.m_rA,u),e.wAdd(this.m_invMassB,u),s+=this.m_invIB*a.cross(this.m_rB,u),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=h.neo(o),c=h.neo(s),_=h.mulSub(n,this.m_localAnchorA,this.m_localCenterA),l=h.mulSub(c,this.m_localAnchorB,this.m_localCenterB),u=a.zero();u.wAdd(1,e,1,l),u.wSub(1,i,1,_);var p=u.normalize(),y=p-this.m_maxLength;y=m.clamp(y,0,r.maxLinearCorrection);var d=-this.m_mass*y,v=a.mul(d,u);return i.wSub(this.m_invMassA,v),o-=this.m_invIA*a.cross(_,v),e.wAdd(this.m_invMassB,v),s+=this.m_invIB*a.cross(l,v),this.m_bodyA.c_position.c.set(i),this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c.set(e),this.m_bodyB.c_position.a=s,p-this.m_maxLength<r.linearSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/create":51,"../util/options":52}],36:[function(t,i,o){function e(t,i,o,n){return this instanceof e?(t=s(t,u),l.call(this,t,i,o),this.m_type=e.TYPE,this.m_localAnchorA=i.getLocalPoint(n),this.m_localAnchorB=o.getLocalPoint(n),this.m_referenceAngle=o.getAngle()-i.getAngle(),this.m_frequencyHz=t.frequencyHz,this.m_dampingRatio=t.dampingRatio,this.m_impulse=h(),this.m_bias=0,this.m_gamma=0,this.m_rA,this.m_rB,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,void(this.m_mass=new c)):new e(t,i,o,n)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("../util/options"),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=t("../common/Vec3"),c=(t("../common/Mat22"),t("../common/Mat33")),_=t("../common/Rot"),l=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="weld-joint",e._super=l,e.prototype=n(e._super.prototype);var u={frequencyHz:0,dampingRatio:0};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.getReferenceAngle=function(){return this.m_referenceAngle},e.prototype.setFrequency=function(t){this.m_frequencyHz=t},e.prototype.getFrequency=function(){return this.m_frequencyHz},e.prototype.setDampingRatio=function(t){this.m_dampingRatio=t},e.prototype.getDampingRatio=function(){return this.m_dampingRatio},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){var i=a.neo(this.m_impulse.x,this.m_impulse.y);return t*i},e.prototype.getReactionTorque=function(t){return t*this.m_impulse.z},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,o=this.m_bodyA.c_velocity.v,e=this.m_bodyA.c_velocity.w,s=this.m_bodyB.c_position.a,n=this.m_bodyB.c_velocity.v,r=this.m_bodyB.c_velocity.w,h=_.neo(i),l=_.neo(s);this.m_rA=_.mul(h,a.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=_.mul(l,a.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,p=this.m_invMassB,y=this.m_invIA,d=this.m_invIB,v=new c;if(v.ex.x=u+p+this.m_rA.y*this.m_rA.y*y+this.m_rB.y*this.m_rB.y*d,v.ey.x=-this.m_rA.y*this.m_rA.x*y-this.m_rB.y*this.m_rB.x*d,v.ez.x=-this.m_rA.y*y-this.m_rB.y*d,v.ex.y=v.ey.x,v.ey.y=u+p+this.m_rA.x*this.m_rA.x*y+this.m_rB.x*this.m_rB.x*d,v.ez.y=this.m_rA.x*y+this.m_rB.x*d,v.ex.z=v.ez.x,v.ey.z=v.ez.y,v.ez.z=y+d,this.m_frequencyHz>0){v.getInverse22(this.m_mass);var f=y+d,A=f>0?1/f:0,x=s-i-this.m_referenceAngle,g=2*m.PI*this.m_frequencyHz,b=2*A*this.m_dampingRatio*g,B=A*g*g,w=t.dt;this.m_gamma=w*(b+w*B),this.m_gamma=0!=this.m_gamma?1/this.m_gamma:0,this.m_bias=x*w*B*this.m_gamma,f+=this.m_gamma,this.m_mass.ez.z=0!=f?1/f:0}else 0==v.ez.z?(v.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(v.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(t.warmStarting){this.m_impulse.mul(t.dtRatio);var S=a.neo(this.m_impulse.x,this.m_impulse.y);o.wSub(u,S),e-=y*(a.cross(this.m_rA,S)+this.m_impulse.z),n.wAdd(p,S),r+=d*(a.cross(this.m_rB,S)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=o,this.m_bodyA.c_velocity.w=e,this.m_bodyB.c_velocity.v=n,this.m_bodyB.c_velocity.w=r},e.prototype.solveVelocityConstraints=function(t){var i=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,e=this.m_bodyB.c_velocity.v,s=this.m_bodyB.c_velocity.w,n=this.m_invMassA,r=this.m_invMassB,m=this.m_invIA,_=this.m_invIB;if(this.m_frequencyHz>0){var l=s-o,u=-this.m_mass.ez.z*(l+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=u,o-=m*u,s+=_*u;var p=a.zero();p.wAdd(1,e,1,a.cross(s,this.m_rB)),p.wSub(1,i,1,a.cross(o,this.m_rA));var y=a.neg(c.mul(this.m_mass,p));this.m_impulse.x+=y.x,this.m_impulse.y+=y.y;var d=a.clone(y);i.wSub(n,d),o-=m*a.cross(this.m_rA,d),e.wAdd(r,d),s+=_*a.cross(this.m_rB,d)}else{var p=a.zero();p.wAdd(1,e,1,a.cross(s,this.m_rB)),p.wSub(1,i,1,a.cross(o,this.m_rA));var l=s-o,v=h(p.x,p.y,l),f=h.neg(c.mul(this.m_mass,v));this.m_impulse.add(f);var d=a.neo(f.x,f.y);i.wSub(n,d),o-=m*(a.cross(this.m_rA,d)+f.z),e.wAdd(r,d),s+=_*(a.cross(this.m_rB,d)+f.z)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=e,this.m_bodyB.c_velocity.w=s},e.prototype.solvePositionConstraints=function(t){var i,o,e=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,n=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,u=_.neo(s),p=_.neo(l),y=this.m_invMassA,d=this.m_invMassB,v=this.m_invIA,f=this.m_invIB,A=_.mul(u,a.sub(this.m_localAnchorA,this.m_localCenterA)),x=_.mul(p,a.sub(this.m_localAnchorB,this.m_localCenterB)),g=new c;if(g.ex.x=y+d+A.y*A.y*v+x.y*x.y*f,g.ey.x=-A.y*A.x*v-x.y*x.x*f,g.ez.x=-A.y*v-x.y*f,g.ex.y=g.ey.x,g.ey.y=y+d+A.x*A.x*v+x.x*x.x*f,g.ez.y=A.x*v+x.x*f,g.ex.z=g.ez.x,g.ey.z=g.ez.y,g.ez.z=v+f,this.m_frequencyHz>0){var b=a.zero();b.wAdd(1,n,1,x),b.wSub(1,e,1,A),i=b.length(),o=0;var B=a.neg(g.solve22(b));e.wSub(y,B),s-=v*a.cross(A,B),n.wAdd(d,B),l+=f*a.cross(x,B)}else{var b=a.zero();b.wAdd(1,n,1,x),b.wSub(1,e,1,A);var w=l-s-this.m_referenceAngle;i=b.length(),o=m.abs(w);var S=h(b.x,b.y,w),C=h();if(g.ez.z>0)C=h.neg(g.solve33(S));else{var M=a.neg(g.solve22(b));C.set(M.x,M.y,0)}var B=a.neo(C.x,C.y);e.wSub(y,B),s-=v*(a.cross(A,B)+C.z),n.wAdd(d,B),l+=f*(a.cross(x,B)+C.z)}return this.m_bodyA.c_position.c=e,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=n,this.m_bodyB.c_position.a=l,i<=r.linearSlop&&o<=r.angularSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/create":51,"../util/options":52}],37:[function(t,i,o){function e(t,i,o,n,r){return this instanceof e?(t=s(t,_),c.call(this,t,i,o),this.m_type=e.TYPE,this.m_localAnchorA=i.getLocalPoint(n),this.m_localAnchorB=o.getLocalPoint(n),this.m_localXAxisA=i.getLocalVector(r||a.neo(1,0)),this.m_localYAxisA=a.cross(1,this.m_localXAxisA),this.m_mass=0,this.m_impulse=0,this.m_motorMass=0,this.m_motorImpulse=0,this.m_springMass=0,this.m_springImpulse=0,this.m_maxMotorTorque=t.maxMotorTorque,this.m_motorSpeed=t.motorSpeed,this.m_enableMotor=t.enableMotor,this.m_frequencyHz=t.frequencyHz,this.m_dampingRatio=t.dampingRatio,this.m_bias=0,this.m_gamma=0,this.m_localCenterA,this.m_localCenterB,this.m_invMassA,this.m_invMassB,this.m_invIA,this.m_invIB,this.m_ax=a.zero(),this.m_ay=a.zero(),this.m_sAx,this.m_sBx,this.m_sAy,void this.m_sBy):new e(t,i,o,n,r)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("../util/options"),n=t("../util/create"),r=t("../Settings"),m=t("../common/Math"),a=t("../common/Vec2"),h=(t("../common/Vec3"),t("../common/Mat22"),t("../common/Mat33"),t("../common/Rot")),c=(t("../common/Sweep"),t("../common/Transform"),t("../common/Velocity"),t("../common/Position"),t("../Joint"));e.TYPE="wheel-joint",e._super=c,e.prototype=n(e._super.prototype);var _={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7};e.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},e.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},e.prototype.getLocalAxisA=function(){return this.m_localXAxisA},e.prototype.getJointTranslation=function(){var t=this.m_bodyA,i=this.m_bodyB,o=t.getWorldPoint(this.m_localAnchorA),e=i.getWorldPoint(this.m_localAnchorB),s=e-o,n=t.getWorldVector(this.m_localXAxisA),r=Dot(s,n);return r},e.prototype.getJointSpeed=function(){var t=this.m_bodyA.m_angularVelocity,i=this.m_bodyB.m_angularVelocity;return i-t},e.prototype.isMotorEnabled=function(){return this.m_enableMotor},e.prototype.enableMotor=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=t},e.prototype.setMotorSpeed=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=t},e.prototype.getMotorSpeed=function(){return this.m_motorSpeed},e.prototype.setMaxMotorTorque=function(t){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=t},e.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},e.prototype.getMotorTorque=function(t){return t*this.m_motorImpulse},e.prototype.setSpringFrequencyHz=function(t){this.m_frequencyHz=t},e.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},e.prototype.setSpringDampingRatio=function(t){this.m_dampingRatio=t},e.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},e.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},e.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},e.prototype.getReactionForce=function(t){return t*(this.m_impulse*this.m_ay+this.m_springImpulse*this.m_ax)},e.prototype.getReactionTorque=function(t){return t*this.m_motorImpulse},e.prototype.initVelocityConstraints=function(t){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_invMassA,o=this.m_invMassB,e=this.m_invIA,s=this.m_invIB,n=this.m_bodyA.c_position.c,r=this.m_bodyA.c_position.a,c=this.m_bodyA.c_velocity.v,_=this.m_bodyA.c_velocity.w,l=this.m_bodyB.c_position.c,u=this.m_bodyB.c_position.a,p=this.m_bodyB.c_velocity.v,y=this.m_bodyB.c_velocity.w,d=h.neo(r),v=h.neo(u),f=h.mul(d,a.sub(this.m_localAnchorA,this.m_localCenterA)),A=h.mul(v,a.sub(this.m_localAnchorB,this.m_localCenterB)),x=a.zero();if(x.wAdd(1,l,1,A),x.wSub(1,n,1,f),this.m_ay=h.mul(d,this.m_localYAxisA),this.m_sAy=a.cross(a.add(x,f),this.m_ay),this.m_sBy=a.cross(A,this.m_ay),this.m_mass=i+o+e*this.m_sAy*this.m_sAy+s*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=h.mul(d,this.m_localXAxisA),this.m_sAx=a.cross(a.add(x,f),this.m_ax),this.m_sBx=a.cross(A,this.m_ax);var g=i+o+e*this.m_sAx*this.m_sAx+s*this.m_sBx*this.m_sBx;if(g>0){this.m_springMass=1/g;var b=a.dot(x,this.m_ax),B=2*m.PI*this.m_frequencyHz,x=2*this.m_springMass*this.m_dampingRatio*B,w=this.m_springMass*B*B,S=t.dt;this.m_gamma=S*(x+S*w),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=b*S*w*this.m_gamma,this.m_springMass=g+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=e+s,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),t.warmStarting){this.m_impulse*=t.dtRatio,this.m_springImpulse*=t.dtRatio,this.m_motorImpulse*=t.dtRatio;var C=a.wAdd(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),M=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,I=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;c.wSub(this.m_invMassA,C),_-=this.m_invIA*M,p.wAdd(this.m_invMassB,C),y+=this.m_invIB*I}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.set(c),this.m_bodyA.c_velocity.w=_,this.m_bodyB.c_velocity.v.set(p),this.m_bodyB.c_velocity.w=y},e.prototype.solveVelocityConstraints=function(t){var i=this.m_invMassA,o=this.m_invMassB,e=this.m_invIA,s=this.m_invIB,n=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,_=a.dot(this.m_ax,h)-a.dot(this.m_ax,n)+this.m_sBx*c-this.m_sAx*r,l=-this.m_springMass*(_+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=l;var u=a.zero().wSet(l,this.m_ax),p=l*this.m_sAx,y=l*this.m_sBx;n.wSub(i,u),r-=e*p,h.wAdd(o,u),c+=s*y;var _=c-r-this.m_motorSpeed,l=-this.m_motorMass*_,d=this.m_motorImpulse,v=t.dt*this.m_maxMotorTorque;this.m_motorImpulse=m.clamp(this.m_motorImpulse+l,-v,v),l=this.m_motorImpulse-d,r-=e*l,c+=s*l;var _=a.dot(this.m_ay,h)-a.dot(this.m_ay,n)+this.m_sBy*c-this.m_sAy*r,l=-this.m_mass*_;this.m_impulse+=l;var u=a.zero().wSet(l,this.m_ay),p=l*this.m_sAy,y=l*this.m_sBy;n.wSub(i,u),r-=e*p,h.wAdd(o,u),c+=s*y,this.m_bodyA.c_velocity.v.set(n),this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v.set(h),this.m_bodyB.c_velocity.w=c},e.prototype.solvePositionConstraints=function(t){var i=this.m_bodyA.c_position.c,o=this.m_bodyA.c_position.a,e=this.m_bodyB.c_position.c,s=this.m_bodyB.c_position.a,n=h.neo(o),c=h.neo(s),_=h.mul(n,a.sub(this.m_localAnchorA,this.m_localCenterA)),l=h.mul(c,a.sub(this.m_localAnchorB,this.m_localCenterB)),u=a.zero();u.wAdd(1,e,1,l),u.wSub(1,i,1,_);var p,y=h.mul(n,this.m_localYAxisA),d=a.cross(a.sub(u,_),y),v=a.cross(l,y),f=a.dot(u,y),A=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy;p=0!=A?-f/A:0;var x=a.zero().wSet(p,y),g=p*d,b=p*v;return i.wSub(this.m_invMassA,x),o-=this.m_invIA*g,e.wAdd(this.m_invMassB,x),s+=this.m_invIB*b,this.m_bodyA.c_position.c.set(i),this.m_bodyA.c_position.a=o,this.m_bodyB.c_position.c.set(e),this.m_bodyB.c_position.a=s,m.abs(f)<=r.linearSlop}},{"../Joint":5,"../Settings":7,"../common/Mat22":16,"../common/Mat33":17,"../common/Math":18,"../common/Position":19,"../common/Rot":20,"../common/Sweep":21,"../common/Transform":22,"../common/Vec2":23,"../common/Vec3":24,"../common/Velocity":25,"../util/create":51,"../util/options":52}],38:[function(t,i,o){function e(t,i,o,s){if(!(this instanceof e))return new e(t,i,o,s);if(e._super.call(this),this.m_vertices[0]=m.neo(-t,-i),this.m_vertices[1]=m.neo(t,-i),this.m_vertices[2]=m.neo(t,i),this.m_vertices[3]=m.neo(-t,i),this.m_normals[0]=m.neo(0,-1),this.m_normals[1]=m.neo(1,0),this.m_normals[2]=m.neo(0,1),this.m_normals[3]=m.neo(-1,0),this.m_count=4,o&&"x"in o&&"y"in o){s=s||0,this.m_centroid.set(o);var a=n.identity();a.p.set(o),a.q.set(s);for(var h=0;h<this.m_count;++h)this.m_vertices[h]=n.mul(a,this.m_vertices[h]),this.m_normals[h]=r.mul(a.q,this.m_normals[h])}}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/create")),n=(t("../util/options"),t("../common/Math"),t("../common/Transform")),r=t("../common/Rot"),m=t("../common/Vec2"),a=(t("../collision/AABB"),t("../Settings"),t("./PolygonShape"));e._super=a,e.prototype=s(e._super.prototype),e.TYPE="polygon"},{"../Settings":7,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"../util/options":52,"./PolygonShape":47}],39:[function(t,i,o){function e(t,i){return this instanceof e?(e._super.call(this),this.m_type=e.TYPE,this.m_radius=m.polygonRadius,this.m_vertices=[],this.m_count=0,this.m_prevVertex=null,this.m_nextVertex=null,this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,void(t&&t.length&&(i?this._createLoop(t):this._createChain(t)))):new e(t,i)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/create")),n=(t("../util/options"),t("../common/Math"),t("../common/Transform")),r=(t("../common/Rot"),t("../common/Vec2")),m=(t("../collision/AABB"),t("../Settings")),a=t("../Shape"),h=t("./EdgeShape");e._super=a,e.prototype=s(e._super.prototype),e.TYPE="chain",e.prototype._createLoop=function(t){for(var i=1;i<t.length;++i){t[i-1],t[i]}this.m_vertices.length=0,this.m_count=t.length+1;for(var i=0;i<t.length;++i)this.m_vertices[i]=t[i].clone();return this.m_vertices[t.length]=t[0].clone(),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this},e.prototype._createChain=function(t){for(var i=1;i<t.length;++i){t[i-1],t[i]}this.m_count=t.length;for(var i=0;i<t.length;++i)this.m_vertices[i]=t[i].clone();return this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this.m_prevVertex=null,this.m_nextVertex=null,this},e.prototype._setPrevVertex=function(t){this.m_prevVertex=t,this.m_hasPrevVertex=!0},e.prototype._setNextVertex=function(t){this.m_nextVertex=t,this.m_hasNextVertex=!0},e.prototype._clone=function(){var t=new e;return t.createChain(this.m_vertices),t.m_type=this.m_type,t.m_radius=this.m_radius,t.m_prevVertex=this.m_prevVertex,t.m_nextVertex=this.m_nextVertex,t.m_hasPrevVertex=this.m_hasPrevVertex,t.m_hasNextVertex=this.m_hasNextVertex,t},e.prototype.getChildCount=function(){return this.m_count-1},e.prototype.getChildEdge=function(t,i){t.m_type=h.TYPE,t.m_radius=this.m_radius,t.m_vertex1=this.m_vertices[i],t.m_vertex2=this.m_vertices[i+1],i>0?(t.m_vertex0=this.m_vertices[i-1],t.m_hasVertex0=!0):(t.m_vertex0=this.m_prevVertex,t.m_hasVertex0=this.m_hasPrevVertex),i<this.m_count-2?(t.m_vertex3=this.m_vertices[i+2],t.m_hasVertex3=!0):(t.m_vertex3=this.m_nextVertex,t.m_hasVertex3=this.m_hasNextVertex)},e.prototype.getVertex=function(t){return t<this.m_count?this.m_vertices[t]:this.m_vertices[0]},e.prototype.testPoint=function(t,i){return!1},e.prototype.rayCast=function(t,i,o,e){var s=new h(this.getVertex(e),this.getVertex(e+1));return s.rayCast(t,i,o,0)},e.prototype.computeAABB=function(t,i,o){var e=n.mul(i,this.getVertex(o)),s=n.mul(i,this.getVertex(o+1));t.combinePoints(e,s)},e.prototype.computeMass=function(t,i){t.mass=0,t.center=r.neo(),t.I=0},e.prototype.computeDistanceProxy=function(t,i){t.m_buffer[0]=this.getVertex(i),t.m_buffer[1]=this.getVertex(i+1),t.m_vertices=t.m_buffer,t.m_count=2,t.m_radius=this.m_radius}},{"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"../util/options":52,"./EdgeShape":46}],40:[function(t,i,o){function e(t,i){return this instanceof e?(e._super.call(this),this.m_type=e.TYPE,this.m_p=m.zero(),this.m_radius=1,void("object"==typeof t&&m.isValid(t)?(this.m_p.set(t),"number"==typeof i&&(this.m_radius=i)):"number"==typeof t&&(this.m_radius=t))):new e(t,i)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=(t("../util/common"),t("../util/create")),n=(t("../util/options"),t("../common/Math")),r=(t("../common/Transform"),t("../common/Rot")),m=t("../common/Vec2"),a=(t("../collision/AABB"),t("../Settings"),t("../Shape"));e._super=a,e.prototype=s(e._super.prototype),e.TYPE="circle",e.prototype.getRadius=function(){return this.m_radius},e.prototype.getCenter=function(){return this.m_p},e.prototype.getSupportVertex=function(t){return this.m_p},e.prototype.getVertex=function(t){return this.m_p},e.prototype.getVertexCount=function(t){return 1},e.prototype._clone=function(){var t=new e;return t.m_type=this.m_type,t.m_radius=this.m_radius,t.m_p=this.m_p.clone(),t},e.prototype.getChildCount=function(){return 1},e.prototype.testPoint=function(t,i){var o=m.add(t.p,r.mul(t.q,this.m_p)),e=m.sub(i,o);return m.dot(e,e)<=this.m_radius*this.m_radius},e.prototype.rayCast=function(t,i,o,e){var s=m.add(o.p,r.mul(o.q,this.m_p)),a=m.sub(i.p1,s),h=m.dot(a,a)-this.m_radius*this.m_radius,c=m.sub(i.p2,i.p1),_=m.dot(a,c),l=m.dot(c,c),u=_*_-l*h;if(u<0||l<n.EPSILON)return!1;var p=-(_+n.sqrt(u));return 0<=p&&p<=i.maxFraction*l&&(p/=l,t.fraction=p,t.normal=m.add(a,m.mul(p,c)),t.normal.normalize(),!0)},e.prototype.computeAABB=function(t,i,o){var e=m.add(i.p,r.mul(i.q,this.m_p));t.lowerBound.set(e.x-this.m_radius,e.y-this.m_radius),t.upperBound.set(e.x+this.m_radius,e.y+this.m_radius)},e.prototype.computeMass=function(t,i){t.mass=i*n.PI*this.m_radius*this.m_radius,t.center=this.m_p,t.I=t.mass*(.5*this.m_radius*this.m_radius+m.dot(this.m_p,this.m_p))},e.prototype.computeDistanceProxy=function(t){t.m_vertices.push(this.m_p),t.m_count=1,t.m_radius=this.m_radius}},{"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"../util/options":52}],41:[function(t,i,o){function e(t,i,o,e,n,r,m){s(t,o.getShape(),i,r.getShape(),n)}function s(t,i,o,e,s){t.pointCount=0;var m=n.mul(o,i.m_p),h=n.mul(s,e.m_p),c=r.distanceSquared(h,m),_=i.m_radius,l=e.m_radius,u=_+l;c>u*u||(t.type=a.e_circles,t.localPoint.set(i.m_p),t.localNormal.setZero(),t.pointCount=1,t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0)}DEBUG=!1,ASSERT=!1;var n=(t("../util/common"),t("../util/create"),t("../common/Math"),t("../common/Transform")),r=t("../common/Vec2"),m=(t("../Settings"),t("../Shape"),t("../Contact")),a=t("../Manifold"),h=t("./CircleShape");m.addType(h.TYPE,h.TYPE,e),o.CollideCircles=s},{"../Contact":3,"../Manifold":6,"../Settings":7,"../Shape":8,"../common/Math":18,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"./CircleShape":40}],42:[function(t,i,o){function e(t,i,o,e,n,r,m){s(t,o.getShape(),i,r.getShape(),n)}function s(t,i,o,e,s){t.pointCount=0;for(var h=r.mul(s,e.m_p),c=r.mulT(o,h),_=0,l=-(1/0),u=i.m_radius+e.m_radius,p=i.m_count,y=i.m_vertices,d=i.m_normals,v=0;v<p;++v){var f=m.dot(d[v],m.sub(c,y[v]));if(f>u)return;f>l&&(l=f,_=v)}var A=_,x=A+1<p?A+1:0,g=y[A],b=y[x];if(l<n.EPSILON)return t.pointCount=1,t.type=a.e_faceA,t.localNormal.set(d[_]),t.localPoint.wSet(.5,g,.5,b),t.points[0].localPoint=e.m_p,void(t.points[0].id.key=0);var B=m.dot(m.sub(c,g),m.sub(b,g)),w=m.dot(m.sub(c,b),m.sub(g,b));if(B<=0){if(m.distanceSquared(c,g)>u*u)return;t.pointCount=1,t.type=a.e_faceA,t.localNormal.wSet(1,c,-1,g),t.localNormal.normalize(),t.localPoint=g,t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0}else if(w<=0){if(m.distanceSquared(c,b)>u*u)return;t.pointCount=1,t.type=a.e_faceA,t.localNormal.wSet(1,c,-1,b),t.localNormal.normalize(),t.localPoint.set(b),t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0}else{var S=m.mid(g,b),l=m.dot(c,d[A])-m.dot(S,d[A]);if(l>u)return;t.pointCount=1,t.type=a.e_faceA,t.localNormal.set(d[A]),t.localPoint.set(S),t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0}}DEBUG=!1,ASSERT=!1;var n=(t("../util/common"),t("../common/Math")),r=t("../common/Transform"),m=(t("../common/Rot"),t("../common/Vec2")),a=(t("../collision/AABB"),t("../Settings"),t("../Manifold")),h=t("../Contact"),c=(t("../Shape"),t("./CircleShape")),_=t("./PolygonShape");h.addType(_.TYPE,c.TYPE,e)},{"../Contact":3,"../Manifold":6,"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"./CircleShape":40,"./PolygonShape":47}],43:[function(t,i,o){function e(t,i,o,e,s,r,m){var a=o.getShape(),h=r.getShape();n(t,a,i,h,s)}function s(t,i,o,e,s,r,m){var a=o.getShape(),h=new c;a.getChildEdge(h,e);var _=h,l=r.getShape();n(t,_,i,l,s)}function n(t,i,o,e,s){t.pointCount=0;var n=r.mulT(o,r.mul(s,e.m_p)),a=i.m_vertex1,c=i.m_vertex2,_=m.sub(c,a),l=m.dot(_,m.sub(c,n)),u=m.dot(_,m.sub(n,a)),p=i.m_radius+e.m_radius;if(u<=0){var y=m.clone(a),d=m.sub(n,y),v=m.dot(d,d);if(v>p*p)return;if(i.m_hasVertex0){var f=i.m_vertex0,A=a,x=m.sub(A,f),g=m.dot(x,m.sub(A,n));if(g>0)return}return t.type=h.e_circles,t.localNormal.setZero(),t.localPoint.set(y),t.pointCount=1,t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0,t.points[0].id.cf.indexA=0,t.points[0].id.cf.typeA=h.e_vertex,t.points[0].id.cf.indexB=0,void(t.points[0].id.cf.typeB=h.e_vertex)}if(l<=0){var y=m.clone(c),d=m.sub(n,y),v=m.dot(d,d);if(v>p*p)return;if(i.m_hasVertex3){var b=i.m_vertex3,B=c,w=m.sub(b,B),S=m.dot(w,m.sub(n,B));if(S>0)return}return t.type=h.e_circles,t.localNormal.setZero(),t.localPoint.set(y),t.pointCount=1,t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0,t.points[0].id.cf.indexA=1,t.points[0].id.cf.typeA=h.e_vertex,t.points[0].id.cf.indexB=0,void(t.points[0].id.cf.typeB=h.e_vertex)}var C=m.dot(_,_),y=m.wAdd(l/C,a,u/C,c),d=m.sub(n,y),v=m.dot(d,d);if(!(v>p*p)){var M=m.neo(-_.y,_.x);m.dot(M,m.sub(n,a))<0&&M.set(-M.x,-M.y),M.normalize(),t.type=h.e_faceA,t.localNormal=M,t.localPoint.set(a),t.pointCount=1,t.points[0].localPoint.set(e.m_p),t.points[0].id.key=0,t.points[0].id.cf.indexA=0,t.points[0].id.cf.typeA=h.e_face,t.points[0].id.cf.indexB=0,t.points[0].id.cf.typeB=h.e_vertex}}DEBUG=!1,ASSERT=!1;var r=(t("../util/common"),t("../util/create"),t("../common/Math"),t("../common/Transform")),m=t("../common/Vec2"),a=(t("../common/Rot"),t("../Settings"),t("../Shape"),t("../Contact")),h=t("../Manifold"),c=t("./EdgeShape"),_=t("./ChainShape"),l=t("./CircleShape");a.addType(c.TYPE,l.TYPE,e),a.addType(_.TYPE,l.TYPE,s)},{"../Contact":3,"../Manifold":6,"../Settings":7,"../Shape":8,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"./ChainShape":39,"./CircleShape":40,"./EdgeShape":46}],44:[function(t,i,o){function e(t,i,o,e,s,n,r){a(t,o.getShape(),i,n.getShape(),s)}function s(t,i,o,e,s,n,r){var m=o.getShape(),h=new d;m.getChildEdge(h,e),a(t,h,i,n.getShape(),s)}function n(){this.type,this.index,this.separation}function r(){this.vertices=[],this.normals=[],this.count=0}function m(){this.i1,this.i2,this.v1,this.v2,this.normal=_.zero(),this.sideNormal1=_.zero(),this.sideOffset1,this.sideNormal2=_.zero(),this.sideOffset2}function a(t,i,o,e,s){var n=c.mulT(o,s),r=c.mul(n,e.m_centroid),m=i.m_vertex0,a=i.m_vertex1,p=i.m_vertex2,d=i.m_vertex3,v=i.m_hasVertex0,f=i.m_hasVertex3,C=_.sub(p,a);C.normalize();var M=_.neo(C.y,-C.x),I=_.dot(M,_.sub(r,a)),T=0,P=0,V=!1,z=!1;if(v){var L=_.sub(a,m);L.normalize();var R=_.neo(L.y,-L.x);V=_.cross(L,C)>=0,T=_.dot(R,r)-_.dot(R,m)}if(f){var F=_.sub(d,p);F.normalize();var D=_.neo(F.y,-F.x);z=_.cross(C,F)>0,P=_.dot(D,r)-_.dot(D,p)}var q,E=_.zero(),k=_.zero(),j=_.zero();v&&f?V&&z?(q=T>=0||I>=0||P>=0,q?(E.set(M),k.set(R),j.set(D)):(E.wSet(-1,M),k.wSet(-1,M),j.wSet(-1,M))):V?(q=T>=0||I>=0&&P>=0,q?(E.set(M),k.set(R),j.set(M)):(E.wSet(-1,M),k.wSet(-1,D),j.wSet(-1,M))):z?(q=P>=0||T>=0&&I>=0,q?(E.set(M),k.set(M),j.set(D)):(E.wSet(-1,M),k.wSet(-1,M),j.wSet(-1,R))):(q=T>=0&&I>=0&&P>=0,q?(E.set(M),k.set(M),j.set(M)):(E.wSet(-1,M),k.wSet(-1,D),j.wSet(-1,R))):v?V?(q=T>=0||I>=0,q?(E.set(M),k.set(R),j.wSet(-1,M)):(E.wSet(-1,M),k.set(M),j.wSet(-1,M))):(q=T>=0&&I>=0,q?(E.set(M),k.set(M),j.wSet(-1,M)):(E.wSet(-1,M),k.set(M),j.wSet(-1,R))):f?z?(q=I>=0||P>=0,q?(E.set(M),k.wSet(-1,M),j.set(D)):(E.wSet(-1,M),k.wSet(-1,M),j.set(M))):(q=I>=0&&P>=0,q?(E.set(M),k.wSet(-1,M),j.set(M)):(E.wSet(-1,M),k.wSet(-1,D),j.set(M))):(q=I>=0,q?(E.set(M),k.wSet(-1,M),j.wSet(-1,M)):(E.wSet(-1,M),k.set(M),j.set(M))),w.count=e.m_count;for(var J=0;J<e.m_count;++J)w.vertices[J]=c.mul(n,e.m_vertices[J]),w.normals[J]=l.mul(n.q,e.m_normals[J]);var O=2*u.polygonRadius;t.pointCount=0,b.type=x,b.index=q?0:1,b.separation=1/0;for(var J=0;J<w.count;++J){var N=_.dot(E,_.sub(w.vertices[J],a));N<b.separation&&(b.separation=N)}if(b.type!=A&&!(b.separation>O)){B.type=A,B.index=-1,B.separation=-(1/0);for(var G=_.neo(-E.y,E.x),J=0;J<w.count;++J){var U=_.neg(w.normals[J]),W=_.dot(U,_.sub(w.vertices[J],a)),Y=_.dot(U,_.sub(w.vertices[J],p)),N=h.min(W,Y);if(N>O){B.type=g,B.index=J,B.separation=N;break}if(_.dot(U,G)>=0){if(_.dot(_.sub(U,j),E)<-u.angularSlop)continue}else if(_.dot(_.sub(U,k),E)<-u.angularSlop)continue;N>B.separation&&(B.type=g,B.index=J,B.separation=N)}if(!(B.type!=A&&B.separation>O)){var H,Z=.98,K=.001;H=B.type==A?b:B.separation>Z*b.separation+K?B:b;var X=[new y.clipVertex,new y.clipVertex];if(H.type==x){t.type=y.e_faceA;for(var Q=0,$=_.dot(E,w.normals[0]),J=1;J<w.count;++J){var tt=_.dot(E,w.normals[J]);tt<$&&($=tt,Q=J)}var it=Q,ot=it+1<w.count?it+1:0;X[0].v=w.vertices[it],X[0].id.cf.indexA=0,X[0].id.cf.indexB=it,X[0].id.cf.typeA=y.e_face,X[0].id.cf.typeB=y.e_vertex,X[1].v=w.vertices[ot],X[1].id.cf.indexA=0,X[1].id.cf.indexB=ot,X[1].id.cf.typeA=y.e_face,X[1].id.cf.typeB=y.e_vertex,q?(S.i1=0,S.i2=1,S.v1=a,S.v2=p,S.normal.set(M)):(S.i1=1,S.i2=0,S.v1=p,S.v2=a,S.normal.wSet(-1,M))}else t.type=y.e_faceB,X[0].v=a,X[0].id.cf.indexA=0,X[0].id.cf.indexB=H.index,X[0].id.cf.typeA=y.e_vertex,X[0].id.cf.typeB=y.e_face,X[1].v=p,X[1].id.cf.indexA=0,X[1].id.cf.indexB=H.index,X[1].id.cf.typeA=y.e_vertex,X[1].id.cf.typeB=y.e_face,S.i1=H.index,S.i2=S.i1+1<w.count?S.i1+1:0,S.v1=w.vertices[S.i1],S.v2=w.vertices[S.i2],S.normal.set(w.normals[S.i1]);S.sideNormal1.set(S.normal.y,-S.normal.x),S.sideNormal2.wSet(-1,S.sideNormal1),S.sideOffset1=_.dot(S.sideNormal1,S.v1),S.sideOffset2=_.dot(S.sideNormal2,S.v2);var et,st=[new y.clipVertex,new y.clipVertex],nt=[new y.clipVertex,new y.clipVertex];if(et=y.clipSegmentToLine(st,X,S.sideNormal1,S.sideOffset1,S.i1),!(et<u.maxManifoldPoints||(et=y.clipSegmentToLine(nt,st,S.sideNormal2,S.sideOffset2,S.i2),et<u.maxManifoldPoints))){H.type==x?(t.localNormal=_.clone(S.normal),t.localPoint=_.clone(S.v1)):(t.localNormal=_.clone(e.m_normals[S.i1]),t.localPoint=_.clone(e.m_vertices[S.i1]));for(var rt=0,J=0;J<u.maxManifoldPoints;++J){var mt=_.dot(S.normal,_.sub(nt[J].v,S.v1));if(mt<=O){var at=t.points[rt];H.type==x?(at.localPoint=c.mulT(n,nt[J].v),at.id=nt[J].id):(at.localPoint=nt[J].v,at.id.cf.typeA=nt[J].id.cf.typeB,at.id.cf.typeB=nt[J].id.cf.typeA,at.id.cf.indexA=nt[J].id.cf.indexB,at.id.cf.indexB=nt[J].id.cf.indexA),++rt}}t.pointCount=rt}}}}DEBUG=!1,ASSERT=!1;var h=(t("../util/common"),t("../util/create"),t("../common/Math")),c=t("../common/Transform"),_=t("../common/Vec2"),l=t("../common/Rot"),u=t("../Settings"),p=(t("../Shape"),t("../Contact")),y=t("../Manifold"),d=t("./EdgeShape"),v=t("./ChainShape"),f=t("./PolygonShape");p.addType(d.TYPE,f.TYPE,e),p.addType(v.TYPE,f.TYPE,s);var A=-1,x=1,g=2,b=new n,B=new n,w=new r,S=new m},{"../Contact":3,"../Manifold":6,"../Settings":7,"../Shape":8,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"./ChainShape":39,"./EdgeShape":46,"./PolygonShape":47}],45:[function(t,i,o){function e(t,i,o,e,s,n,m){r(t,o.getShape(),i,n.getShape(),s)}function s(t,i,o,e){for(var n=t.m_count,r=o.m_count,c=t.m_normals,_=t.m_vertices,l=o.m_vertices,u=m.mulT(e,i),p=0,y=-(1/0),d=0;d<n;++d){for(var v=a.mul(u.q,c[d]),f=m.mul(u,_[d]),A=1/0,x=0;x<r;++x){var g=h.dot(v,l[x])-h.dot(v,f);g<A&&(A=g)}A>y&&(y=A,p=d)}s._maxSeparation=y,s._bestIndex=p}function n(t,i,o,e,s,n){for(var r=i.m_normals,c=s.m_count,l=s.m_vertices,u=s.m_normals,p=a.mulT(n.q,a.mul(o.q,r[e])),y=0,d=1/0,v=0;v<c;++v){var f=h.dot(p,u[v]);f<d&&(d=f,y=v)}var A=y,x=A+1<c?A+1:0;t[0].v=m.mul(n,l[A]),t[0].id.cf.indexA=e,t[0].id.cf.indexB=A,t[0].id.cf.typeA=_.e_face,t[0].id.cf.typeB=_.e_vertex,t[1].v=m.mul(n,l[x]),t[1].id.cf.indexA=e,t[1].id.cf.indexB=x,t[1].id.cf.typeA=_.e_face,t[1].id.cf.typeB=_.e_vertex}function r(t,i,o,e,r){t.pointCount=0;var l=i.m_radius+e.m_radius;s(i,o,e,r);var u=s._bestIndex,p=s._maxSeparation;if(!(p>l)){s(e,r,i,o);var y=s._bestIndex,d=s._maxSeparation;if(!(d>l)){var v,f,A,x,g,b,B=.1*c.linearSlop;d>p+B?(v=e,f=i,A=r,x=o,g=y,t.type=_.e_faceB,b=1):(v=i,f=e,A=o,x=r,g=u,t.type=_.e_faceA,b=0);var w=[new _.clipVertex,new _.clipVertex];n(w,v,A,g,f,x);var S=v.m_count,C=v.m_vertices,M=g,I=g+1<S?g+1:0,T=C[M],P=C[I],V=h.sub(P,T);V.normalize();var z=h.cross(V,1),L=h.wAdd(.5,T,.5,P),R=a.mul(A.q,V),F=h.cross(R,1);T=m.mul(A,T),P=m.mul(A,P);var D,q=h.dot(F,T),E=-h.dot(R,T)+l,k=h.dot(R,P)+l,j=[new _.clipVertex,new _.clipVertex],J=[new _.clipVertex,new _.clipVertex];if(D=_.clipSegmentToLine(j,w,h.neg(R),E,M),!(D<2||(D=_.clipSegmentToLine(J,j,R,k,I),D<2))){t.localNormal=z,t.localPoint=L;for(var O=0,N=0;N<J.length;++N){var G=h.dot(F,J[N].v)-q;if(G<=l){var U=t.points[O];if(U.localPoint.set(m.mulT(x,J[N].v)),U.id=J[N].id,b){var W=U.id.cf,Y=W.indexA,H=W.indexB,Z=W.typeA,K=W.typeB;W.indexA=H,W.indexB=Y,W.typeA=K,W.typeB=Z}++O}}t.pointCount=O}}}}DEBUG=!1,ASSERT=!1;var m=(t("../util/common"),t("../common/Math"),t("../common/Transform")),a=t("../common/Rot"),h=t("../common/Vec2"),c=(t("../collision/AABB"),t("../Settings")),_=t("../Manifold"),l=t("../Contact"),u=(t("../Shape"),t("./PolygonShape"));i.exports=r,l.addType(u.TYPE,u.TYPE,e)},{"../Contact":3,"../Manifold":6,"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"./PolygonShape":47}],46:[function(t,i,o){function e(t,i){return this instanceof e?(e._super.call(this),this.m_type=e.TYPE,this.m_radius=n.polygonRadius,this.m_vertex1=t?h.clone(t):h.zero(),this.m_vertex2=i?h.clone(i):h.zero(),this.m_vertex0=h.zero(),this.m_vertex3=h.zero(),this.m_hasVertex0=!1,void(this.m_hasVertex3=!1)):new e(t,i)}DEBUG=!1,ASSERT=!1,i.exports=e;var s=t("../util/create"),n=(t("../util/options"),t("../Settings")),r=t("../Shape"),m=(t("../common/Math"),t("../common/Transform")),a=t("../common/Rot"),h=t("../common/Vec2");t("../collision/AABB");e._super=r,e.prototype=s(e._super.prototype),e.TYPE="edge",e.prototype.setNext=function(t){return t?(this.m_vertex3.set(t),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},e.prototype.setPrev=function(t){return t?(this.m_vertex0.set(t),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},e.prototype._set=function(t,i){return this.m_vertex1.set(t),this.m_vertex2.set(i),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},e.prototype._clone=function(){var t=new e;return t.m_type=this.m_type,t.m_radius=this.m_radius,t.m_vertex1.set(this.m_vertex1),t.m_vertex2.set(this.m_vertex2),t.m_vertex0.set(this.m_vertex0),t.m_vertex3.set(this.m_vertex3),t.m_hasVertex0=this.m_hasVertex0,t.m_hasVertex3=this.m_hasVertex3,t},e.prototype.getChildCount=function(){return 1},e.prototype.testPoint=function(t,i){return!1},e.prototype.rayCast=function(t,i,o,e){var s=a.mulT(o.q,h.sub(i.p1,o.p)),n=a.mulT(o.q,h.sub(i.p2,o.p)),r=h.sub(n,s),m=this.m_vertex1,c=this.m_vertex2,_=h.sub(c,m),l=h.neo(_.y,-_.x);l.normalize();var u=h.dot(l,h.sub(m,s)),p=h.dot(l,r);if(0==p)return!1;var y=u/p;if(y<0||i.maxFraction<y)return!1;var d=h.add(s,h.mul(y,r)),v=h.sub(c,m),f=h.dot(v,v);if(0==f)return!1;var A=h.dot(h.sub(d,m),v)/f;return!(A<0||1<A)&&(t.fraction=y,u>0?t.normal=a.mul(o.q,l).neg():t.normal=a.mul(o.q,l),!0)},e.prototype.computeAABB=function(t,i,o){var e=m.mul(i,this.m_vertex1),s=m.mul(i,this.m_vertex2);t.combinePoints(e,s),t.extend(this.m_radius)},e.prototype.computeMass=function(t,i){t.mass=0,t.center.wSet(.5,this.m_vertex1,.5,this.m_vertex2),t.I=0},e.prototype.computeDistanceProxy=function(t){t.m_vertices.push(this.m_vertex1),t.m_vertices.push(this.m_vertex2),t.m_count=2,t.m_radius=this.m_radius}},{"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/create":51,"../util/options":52}],47:[function(t,i,o){function e(t){return this instanceof e?(e._super.call(this),this.m_type=e.TYPE,this.m_radius=c.polygonRadius,this.m_centroid=h.zero(),this.m_vertices=[],this.m_normals=[],this.m_count=0,void(t&&t.length&&this._set(t))):new e(t)}function s(t,i){for(var o,e=h.zero(),s=0,n=h.zero(),r=1/3,o=0;o<i;++o){var m=n,a=t[o],c=o+1<i?t[o+1]:t[0],_=h.sub(a,m),l=h.sub(c,m),u=h.cross(_,l),p=.5*u;s+=p,e.wAdd(p*r,m),e.wAdd(p*r,a),e.wAdd(p*r,c)}return e.mul(1/s),e}DEBUG=!1,ASSERT=!1,i.exports=e;var n=(t("../util/common"),t("../util/create")),r=(t("../util/options"),t("../common/Math")),m=t("../common/Transform"),a=t("../common/Rot"),h=t("../common/Vec2"),c=(t("../collision/AABB"),t("../Settings")),_=t("../Shape");e._super=_,e.prototype=n(e._super.prototype),e.TYPE="polygon",e.prototype.getVertex=function(t){return this.m_vertices[t]},e.prototype._clone=function(){var t=new e;t.m_type=this.m_type,t.m_radius=this.m_radius,t.m_count=this.m_count,t.m_centroid.set(this.m_centroid);for(var i=0;i<this.m_count;i++)t.m_vertices.push(this.m_vertices[i].clone());for(var i=0;i<this.m_normals.length;i++)t.m_normals.push(this.m_normals[i].clone());return t},e.prototype.getChildCount=function(){return 1},e.prototype._set=function(t){if(t.length<3)return void SetAsBox(1,1);for(var i=r.min(t.length,c.maxPolygonVertices),o=[],e=0,n=0;n<i;++n){for(var m=t[n],a=!0,_=0;_<e;++_)if(h.distanceSquared(m,o[_])<.25*c.linearSlopSquared){a=!1;break}a&&(o[e++]=m)}if(i=e,i<3)return void SetAsBox(1,1);for(var l=0,u=o[0].x,n=1;n<i;++n){var p=o[n].x;(p>u||p==u&&o[n].y<o[l].y)&&(l=n,u=p)}for(var y=[],d=0,v=l;;){y[d]=v;for(var f=0,_=1;_<i;++_)if(f!=v){var A=h.sub(o[f],o[y[d]]),m=h.sub(o[_],o[y[d]]),x=h.cross(A,m);x<0&&(f=_),0==x&&m.lengthSquared()>A.lengthSquared()&&(f=_)}else f=_;if(++d,v=f,f==l)break}if(d<3)return void SetAsBox(1,1);this.m_count=d;for(var n=0;n<d;++n)this.m_vertices[n]=o[y[n]];for(var n=0;n<d;++n){var g=n,b=n+1<d?n+1:0,B=h.sub(this.m_vertices[b],this.m_vertices[g]);this.m_normals[n]=h.cross(B,1),this.m_normals[n].normalize()}this.m_centroid=s(this.m_vertices,d)},e.prototype.testPoint=function(t,i){for(var o=a.mulT(t.q,h.sub(i,t.p)),e=0;e<this.m_count;++e){var s=h.dot(this.m_normals[e],h.sub(o,this.m_vertices[e]));if(s>0)return!1}return!0},e.prototype.rayCast=function(t,i,o,e){for(var s=a.mulT(o.q,h.sub(i.p1,o.p)),n=a.mulT(o.q,h.sub(i.p2,o.p)),r=h.sub(n,s),m=0,c=i.maxFraction,_=-1,l=0;l<this.m_count;++l){var u=h.dot(this.m_normals[l],h.sub(this.m_vertices[l],s)),p=h.dot(this.m_normals[l],r);if(0==p){if(u<0)return!1}else p<0&&u<m*p?(m=u/p,_=l):p>0&&u<c*p&&(c=u/p);if(c<m)return!1}return _>=0&&(t.fraction=m,t.normal=a.mul(o.q,this.m_normals[_]),!0)},e.prototype.computeAABB=function(t,i,o){for(var e=1/0,s=1/0,n=-(1/0),a=-(1/0),h=0;h<this.m_count;++h){var c=m.mul(i,this.m_vertices[h]);e=r.min(e,c.x),n=r.max(n,c.x),s=r.min(s,c.y),a=r.max(a,c.y)}t.lowerBound.set(e,s),t.upperBound.set(n,a),t.extend(this.m_radius)},e.prototype.computeMass=function(t,i){for(var o=h.zero(),e=0,s=0,n=h.zero(),r=0;r<this.m_count;++r)n.add(this.m_vertices[r]);n.mul(1/this.m_count);for(var m=1/3,r=0;r<this.m_count;++r){var a=h.sub(this.m_vertices[r],n),c=r+1<this.m_count?h.sub(this.m_vertices[r+1],n):h.sub(this.m_vertices[0],n),_=h.cross(a,c),l=.5*_;e+=l,o.wAdd(l*m,a,l*m,c);var u=a.x,p=a.y,y=c.x,d=c.y,v=u*u+y*u+y*y,f=p*p+d*p+d*d;s+=.25*m*_*(v+f)}t.mass=i*e,o.mul(1/e),t.center.wSet(1,o,1,n),t.I=i*s,t.I+=t.mass*(h.dot(t.center,t.center)-h.dot(o,o))},e.prototype.validate=function(){for(var t=0;t<this.m_count;++t)for(var i=t,o=t<this.m_count-1?i+1:0,e=this.m_vertices[i],s=h.sub(this.m_vertices[o],e),n=0;n<this.m_count;++n)if(n!=i&&n!=o){var r=h.sub(this.m_vertices[n],e),m=h.cross(s,r);if(m<0)return!1}return!0},e.prototype.computeDistanceProxy=function(t){t.m_vertices=this.m_vertices,t.m_count=this.m_count,t.m_radius=this.m_radius}},{"../Settings":7,"../Shape":8,"../collision/AABB":11,"../common/Math":18,"../common/Rot":20,"../common/Transform":22,"../common/Vec2":23,"../util/common":50,"../util/create":51,"../util/options":52}],48:[function(t,i,o){function e(t){var i=[],o=t.max||1/0,e=t.create,s=t.allocate,n=t.release,r=t.discard,m=0,a=0,h=0,c=0;this.max=function(t){return"number"==typeof t?(o=t,this):o},this.size=function(){return i.length},this.allocate=function(){var t;return i.length>0?t=i.shift():(m++,t="function"==typeof e?e():{}),a++,"function"==typeof s&&s(t),t},this.release=function(t){i.length<o?(h++,"function"==typeof n&&n(t),i.push(t)):(c++,"function"==typeof r&&(t=r(t)))},this.toString=function(){return"+"+m+">"+a+"<"+h+"-"+c+"="+i.length+"/"+o}}DEBUG=!1,ASSERT=!1,i.exports=e},{}],49:[function(t,i,o){DEBUG=!1,ASSERT=!1,i.exports.now=function(){return Date.now()},i.exports.diff=function(t){return Date.now()-t}},{}],50:[function(t,i,o){DEBUG=!1,ASSERT=!1,o.debug=function(){},o.assert=function(t,i,o){}},{}],51:[function(t,i,o){function e(){}"function"==typeof Object.create?i.exports=function(t,i){return Object.create.call(Object,t,i)}:i.exports=function(t,i){if(i)throw Error("Second argument is not supported!");if("object"!=typeof t||null===t)throw Error("Invalid prototype!");return e.prototype=t,new e}},{}],52:[function(t,i,o){DEBUG=!1,ASSERT=!1;Object.prototype.propertyIsEnumerable;i.exports=function(t,i){null!==t&&"undefined"!=typeof t||(t={});for(var o in i)i.hasOwnProperty(o)&&"undefined"==typeof t[o]&&(t[o]=i[o]);if("function"==typeof Object.getOwnPropertySymbols)for(var e=Object.getOwnPropertySymbols(i),s=0;s<e.length;s++){var n=e[s];i.propertyIsEnumerable(n)&&"undefined"==typeof t[o]&&(t[n]=i[n])}return t}},{}]},{},[1])(1)});}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_1__size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_2__utilities_bitmask__=__webpack_require__(33);var __WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_4__common_defs__=__webpack_require__(0);class Object
{constructor()
{this.parameters=new __WEBPACK_IMPORTED_MODULE_2__utilities_bitmask__["a"](__WEBPACK_IMPORTED_MODULE_4__common_defs__["_67"]);this.pos=new __WEBPACK_IMPORTED_MODULE_0__point__["a"];this.rot=new __WEBPACK_IMPORTED_MODULE_0__point__["a"];this.scale=new __WEBPACK_IMPORTED_MODULE_0__point__["a"](1,1,1);this.centerPos=new __WEBPACK_IMPORTED_MODULE_0__point__["a"];this.cropOffset=new __WEBPACK_IMPORTED_MODULE_1__size__["a"];}
setPos(pos)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_66"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.pos.set(pos);}
setPosXYZ(x=0,y=0,z=0)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_66"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.pos.setXYZ(x,y,z);}
incPos(pos)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_66"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.pos.inc(pos);}
incPosXYZ(x=0,y=0,z=0)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_66"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.pos.incXYZ(x,y,z);}
setRot(rot,convertToRadians=true)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_60"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);if(convertToRadians)
this.rot.setXYZ(rot.x*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],rot.y*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],rot.z*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);else
this.rot.set(rot);}
setRotXYZ(x=0,y=0,z=0,convertToRadians=true)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_60"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);if(convertToRadians)
this.rot.setXYZ(x*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],y*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],z*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);else
this.rot.setXYZ(x,y,z);}
incRot(rot,convertToRadians=true)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_60"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);if(convertToRadians)
this.rot.incXYZ(rot.x*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],rot.y*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],rot.z*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);else
this.rot.inc(rot);this.rot.cap(360*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);}
incRotXYZ(x=0,y=0,z=0,convertToRadians=true)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_60"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);if(convertToRadians)
this.rot.incXYZ(x*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],y*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"],z*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);else
this.rot.incXYZ(x,y,z);this.rot.cap(360*__WEBPACK_IMPORTED_MODULE_4__common_defs__["g"]);}
setScale(scale)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_61"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.scale.set(scale);}
setScaleXYZ(x=1,y=1,z=1)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_61"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.scale.setXYZ(x,y,z);}
incScale(scale)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_61"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.scale.inc(scale);}
incScaleXYZ(x=1,y=1,z=1)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_61"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.scale.incXYZ(x,y,z);}
setCenterPos(pos)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["c"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.centerPos=pos;}
setCenterPosXYZ(x=0,y=0,z=0)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["c"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.centerPos.setXYZ(x,y,z);}
setCropOffset(offset)
{if(!this.centerPos.isEmpty()||((offset!==null)&&(!offset.isEmpty())))
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["f"]| __WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]);this.cropOffset=offset;}
}
setVisible(value)
{if(value)
this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_67"]);else
this.parameters.remove(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_67"]);}
isVisible()
{return this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_67"]);}
copyTransform(object)
{if(object.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_66"]))
this.setPos(object.pos);if(object.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_60"]))
this.setRot(object.rot);if(object.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_61"]))
this.setScale(object.scale);if(object.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["c"]))
this.setCenterPos(object.centerPos);if(object.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["f"]))
this.setCropOffset(object.cropOffset);}
loadTransFromNode(node)
{let pos=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["e"](node);if(pos)
this.setPos(pos);let rot=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["h"](node);if(rot)
this.setRot(rot);let scale=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["i"](node);if(scale)
this.setScale(scale);let centerPos=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["a"](node);if(centerPos)
this.setCenterPos(centerPos);}
}
__webpack_exports__["a"]=Object;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return actionManager;});var __WEBPACK_IMPORTED_MODULE_0__common_keycodeaction__=__webpack_require__(81);var __WEBPACK_IMPORTED_MODULE_1__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__common_defs__=__webpack_require__(0);class ActionManager
{constructor()
{this.keyboardKeyCodeMap=new Map;this.mouseKeyCodeMap=new Map;this.keyboardActionMap=new Map;this.mouseActionMap=new Map;this.gamepadActionMap=new Map;this.allowAction=true;this.lastDeviceUsed=__WEBPACK_IMPORTED_MODULE_2__common_defs__["h"];this.keyboardKeyCodeMap.set('---',-1);this.keyboardKeyCodeMap.set('RETURN',13);this.keyboardKeyCodeMap.set('ESCAPE',27);this.keyboardKeyCodeMap.set('ARROW UP',38);this.keyboardKeyCodeMap.set('ARROW DOWN',40);this.keyboardKeyCodeMap.set('ARROW LEFT',37);this.keyboardKeyCodeMap.set('ARROW RIGHT',39);this.keyboardKeyCodeMap.set('A','A'.charCodeAt(0));this.keyboardKeyCodeMap.set('B','B'.charCodeAt(0));this.keyboardKeyCodeMap.set('C','C'.charCodeAt(0));this.keyboardKeyCodeMap.set('D','D'.charCodeAt(0));this.keyboardKeyCodeMap.set('E','E'.charCodeAt(0));this.keyboardKeyCodeMap.set('F','F'.charCodeAt(0));this.keyboardKeyCodeMap.set('G','G'.charCodeAt(0));this.keyboardKeyCodeMap.set('H','H'.charCodeAt(0));this.keyboardKeyCodeMap.set('I','I'.charCodeAt(0));this.keyboardKeyCodeMap.set('J','J'.charCodeAt(0));this.keyboardKeyCodeMap.set('K','K'.charCodeAt(0));this.keyboardKeyCodeMap.set('L','L'.charCodeAt(0));this.keyboardKeyCodeMap.set('M','M'.charCodeAt(0));this.keyboardKeyCodeMap.set('N','N'.charCodeAt(0));this.keyboardKeyCodeMap.set('O','O'.charCodeAt(0));this.keyboardKeyCodeMap.set('P','P'.charCodeAt(0));this.keyboardKeyCodeMap.set('Q','Q'.charCodeAt(0));this.keyboardKeyCodeMap.set('R','R'.charCodeAt(0));this.keyboardKeyCodeMap.set('S','S'.charCodeAt(0));this.keyboardKeyCodeMap.set('T','T'.charCodeAt(0));this.keyboardKeyCodeMap.set('U','U'.charCodeAt(0));this.keyboardKeyCodeMap.set('V','V'.charCodeAt(0));this.keyboardKeyCodeMap.set('W','W'.charCodeAt(0));this.keyboardKeyCodeMap.set('X','X'.charCodeAt(0));this.keyboardKeyCodeMap.set('Y','Y'.charCodeAt(0));this.keyboardKeyCodeMap.set('Z','Z'.charCodeAt(0));this.keyboardKeyCodeMap.set('0','0'.charCodeAt(0));this.keyboardKeyCodeMap.set('1','1'.charCodeAt(0));this.keyboardKeyCodeMap.set('2','2'.charCodeAt(0));this.keyboardKeyCodeMap.set('3','3'.charCodeAt(0));this.keyboardKeyCodeMap.set('4','4'.charCodeAt(0));this.keyboardKeyCodeMap.set('5','5'.charCodeAt(0));this.keyboardKeyCodeMap.set('6','6'.charCodeAt(0));this.keyboardKeyCodeMap.set('7','7'.charCodeAt(0));this.keyboardKeyCodeMap.set('8','8'.charCodeAt(0));this.keyboardKeyCodeMap.set('9','9'.charCodeAt(0));this.keyboardKeyCodeMap.set('F1',112);this.keyboardKeyCodeMap.set('F2',113);this.keyboardKeyCodeMap.set('F3',114);this.keyboardKeyCodeMap.set('F4',115);this.keyboardKeyCodeMap.set('F5',116);this.keyboardKeyCodeMap.set('F6',117);this.keyboardKeyCodeMap.set('F7',118);this.keyboardKeyCodeMap.set('F8',119);this.keyboardKeyCodeMap.set('F9',120);this.keyboardKeyCodeMap.set('F10',121);this.keyboardKeyCodeMap.set('F11',122);this.keyboardKeyCodeMap.set('F12',123);this.keyboardKeyCodeMap.set('NUMPAD 0',96);this.keyboardKeyCodeMap.set('NUMPAD 1',97);this.keyboardKeyCodeMap.set('NUMPAD 2',98);this.keyboardKeyCodeMap.set('NUMPAD 3',99);this.keyboardKeyCodeMap.set('NUMPAD 4',100);this.keyboardKeyCodeMap.set('NUMPAD 5',101);this.keyboardKeyCodeMap.set('NUMPAD 6',102);this.keyboardKeyCodeMap.set('NUMPAD 7',103);this.keyboardKeyCodeMap.set('NUMPAD 8',104);this.keyboardKeyCodeMap.set('NUMPAD 9',105);this.keyboardKeyCodeMap.set('NUM LOCK',144);this.keyboardKeyCodeMap.set('NUMPAD/',111);this.keyboardKeyCodeMap.set('NUMPAD*',106);this.keyboardKeyCodeMap.set('NUMPAD-',109);this.keyboardKeyCodeMap.set('NUMPAD+',107);this.keyboardKeyCodeMap.set('NUMPAD ENTER',13);this.keyboardKeyCodeMap.set('NUMPAD .',110);this.keyboardKeyCodeMap.set('CTRL',17);this.keyboardKeyCodeMap.set('SHIFT',16);this.keyboardKeyCodeMap.set('ALT',18);this.keyboardKeyCodeMap.set('PRINT SCREEN',42);this.keyboardKeyCodeMap.set('SCROLL LOCK',145);this.keyboardKeyCodeMap.set('PAUSE',19);this.keyboardKeyCodeMap.set('END',35);this.keyboardKeyCodeMap.set('INSERT',45);this.keyboardKeyCodeMap.set('DELETE',46);this.keyboardKeyCodeMap.set('HOME',36);this.keyboardKeyCodeMap.set('PAGE UP',33);this.keyboardKeyCodeMap.set('PAGE DOWN',34);this.keyboardKeyCodeMap.set('BACKSPACE',8);this.keyboardKeyCodeMap.set('TAB',9);this.keyboardKeyCodeMap.set('SPACE',32);this.keyboardKeyCodeMap.set(',',188);this.keyboardKeyCodeMap.set('-',173);this.keyboardKeyCodeMap.set('.',190);this.keyboardKeyCodeMap.set('/',191);this.keyboardKeyCodeMap.set('=',61);this.keyboardKeyCodeMap.set(';',59);this.keyboardKeyCodeMap.set('[',219);this.keyboardKeyCodeMap.set('\\',220);this.keyboardKeyCodeMap.set(']',221);this.keyboardKeyCodeMap.set('`',192);this.keyboardKeyCodeMap.set("'",222);this.mouseKeyCodeMap.set('---',-1);this.mouseKeyCodeMap.set('LEFT MOUSE',0);this.mouseKeyCodeMap.set('MIDDLE MOUSE',1);this.mouseKeyCodeMap.set('RIGHT MOUSE',2);}
load(node)
{if(node)
{this.loadKeyboardMappingFromNode(node.getElementsByTagName('keyboardMapping'));this.loadMouseMappingFromNode(node.getElementsByTagName('mouseMapping'));}
}
loadKeyboardMappingFromNode(node)
{this.loadActionFromNode(node[0].getElementsByTagName('playerHidden'),this.keyboardKeyCodeMap,this.keyboardActionMap);this.loadActionFromNode(node[0].getElementsByTagName('playerVisible'),this.keyboardKeyCodeMap,this.keyboardActionMap);}
loadMouseMappingFromNode(node)
{this.loadActionFromNode(node[0].getElementsByTagName('playerHidden'),this.mouseKeyCodeMap,this.mouseActionMap);this.loadActionFromNode(node[0].getElementsByTagName('playerVisible'),this.mouseKeyCodeMap,this.mouseActionMap);}
loadActionFromNode(node,keyCodeMap,actionMap)
{if(node.length)
{let actionNode=node[0].getElementsByTagName('actionMap');for(let i=0;i<actionNode.length;++i)
{let componentIdStr=actionNode[i].getAttribute('componetId');let keyCode=keyCodeMap.get(componentIdStr);if(keyCode!==undefined)
{let actionStr=actionNode[i].getAttribute('action');let action=actionMap.get(actionStr);if(action!==undefined)
{action.setId(keyCode);}
else
{actionMap.set(actionStr,new __WEBPACK_IMPORTED_MODULE_0__common_keycodeaction__["a"](keyCode));}
}
}
}
}
wasActionPress(event,actionStr,actionPress)
{if(this.wasAction(event,actionStr)===actionPress)
return true;return false;}
wasAction(event,actionStr)
{let result=__WEBPACK_IMPORTED_MODULE_2__common_defs__["l"];if(this.allowAction)
{if(event instanceof KeyboardEvent)
{this.lastDeviceUsed=__WEBPACK_IMPORTED_MODULE_2__common_defs__["_56"];if(this.wasActionMap(event.keyCode,actionStr,this.keyboardActionMap))
{result=__WEBPACK_IMPORTED_MODULE_2__common_defs__["m"];if(event.type.charCodeAt(3)===100)
{result=__WEBPACK_IMPORTED_MODULE_2__common_defs__["k"];}
}
}
else if(event instanceof MouseEvent)
{this.lastDeviceUsed=__WEBPACK_IMPORTED_MODULE_2__common_defs__["_57"];if(this.wasActionMap(event.button,actionStr,this.mouseActionMap))
{result=__WEBPACK_IMPORTED_MODULE_2__common_defs__["m"];if(event.type.charCodeAt(5)===100)
{result=__WEBPACK_IMPORTED_MODULE_2__common_defs__["k"];}
}
}
}
return result;}
wasActionMap(id,actionStr,actionMap)
{let result=false;let action=actionMap.get(actionStr);if(action!==undefined)
{result=action.wasAction(id);}
return result;}
wasLastDeviceGamepad()
{return(this.lastDeviceUsed===__WEBPACK_IMPORTED_MODULE_2__common_defs__["_55"]);}
wasLastDeviceKeyboard()
{return(this.lastDeviceUsed===__WEBPACK_IMPORTED_MODULE_2__common_defs__["_56"]);}
wasLastDeviceMouse()
{return(this.lastDeviceUsed===__WEBPACK_IMPORTED_MODULE_2__common_defs__["_57"]);}
}
var actionManager=new ActionManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]=create;var __WEBPACK_IMPORTED_MODULE_0__managers_signalmanager__=__webpack_require__(23);var __WEBPACK_IMPORTED_MODULE_1__uilabel__=__webpack_require__(89);var __WEBPACK_IMPORTED_MODULE_2__uibutton__=__webpack_require__(90);var __WEBPACK_IMPORTED_MODULE_3__uisubcontrol__=__webpack_require__(28);var __WEBPACK_IMPORTED_MODULE_4__uibuttonlist__=__webpack_require__(91);var __WEBPACK_IMPORTED_MODULE_5__uicheckbox__=__webpack_require__(92);var __WEBPACK_IMPORTED_MODULE_6__uislider__=__webpack_require__(93);var __WEBPACK_IMPORTED_MODULE_7__uiscrollbox__=__webpack_require__(94);var __WEBPACK_IMPORTED_MODULE_8__uimeter__=__webpack_require__(95);var __WEBPACK_IMPORTED_MODULE_9__uiprogressbar__=__webpack_require__(52);function create(node,group)
{let control=null;let ctrlType=node.getAttribute('controlType');if(ctrlType==='label')
control=new __WEBPACK_IMPORTED_MODULE_1__uilabel__["a"](group);else if(ctrlType==='button')
control=new __WEBPACK_IMPORTED_MODULE_2__uibutton__["a"](group);else if(ctrlType==='sub_control')
control=new __WEBPACK_IMPORTED_MODULE_3__uisubcontrol__["a"](group);else if(ctrlType==='button_list')
control=new __WEBPACK_IMPORTED_MODULE_4__uibuttonlist__["a"](group);else if(ctrlType==='check_box')
control=new __WEBPACK_IMPORTED_MODULE_5__uicheckbox__["a"](group);else if(ctrlType==='slider')
control=new __WEBPACK_IMPORTED_MODULE_6__uislider__["a"](group);else if(ctrlType==='scroll_box')
control=new __WEBPACK_IMPORTED_MODULE_7__uiscrollbox__["a"](group);else if(ctrlType==='meter')
control=new __WEBPACK_IMPORTED_MODULE_8__uimeter__["a"](group);else if(ctrlType==='progress_bar')
control=new __WEBPACK_IMPORTED_MODULE_9__uiprogressbar__["a"](group);else
throw new Error(`UI Control not defined!(${ctrlType})`);control.loadFromNode(node);__WEBPACK_IMPORTED_MODULE_0__managers_signalmanager__["a"].broadcast_smartGui(control);control.smartCreate();return control;}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return soundManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__common_sound__=__webpack_require__(97);var __WEBPACK_IMPORTED_MODULE_2__common_playlist__=__webpack_require__(98);var __WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__=__webpack_require__(5);class SoundManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.context=null;if(typeof AudioContext!=='undefined')
this.context=new AudioContext();else if(typeof webkitAudioContext!=='undefined')
this.context=new webkitAudioContext();else
throw new Error('AudioContext not supported.');this.soundMapMap=new Map;this.playListMapMap=new Map;}
loadGroup(groupAry,finishCallback)
{super.loadGroup('Sound',this.soundMapMap,groupAry,finishCallback);}
loadFromNode(group,node,filePath,finishCallback)
{let groupMap=this.soundMapMap.get(group);let loadFilesNode=node.getElementsByTagName('load');for(let i=0;i<loadFilesNode.length;++i)
{let id=loadFilesNode[i].getAttribute('id');let filePath=loadFilesNode[i].getAttribute('file');if(groupMap.has(id))
throw new Error(`Duplicate sound group id(${id},${group},${filePath})!`);let snd=new __WEBPACK_IMPORTED_MODULE_1__common_sound__["a"];groupMap.set(id,snd);snd.loadFromNode(loadFilesNode[i]);if(!__WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__["a"].has(group,filePath))
{this.downloadFile('binary',group,filePath,finishCallback,(group,audioData,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__["a"].set(group,filePath,audioData);this.loadFromBinaryData(group,id,audioData,filePath,finishCallback);});}
else
{this.loadFromBinaryData(group,id,__WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__["a"].get(group,filePath),filePath);}
}
let playListNode=node.getElementsByTagName('playList');if(playListNode.length)
{let groupMap=new Map;this.playListMapMap.set(group,groupMap);for(let i=0;i<playListNode.length;++i)
{let id=playListNode[i].getAttribute('id');if(groupMap.has(id))
throw new Error(`Duplicate playlist group id(${id},${group},${filePath})!`);let playLst=new __WEBPACK_IMPORTED_MODULE_2__common_playlist__["a"];groupMap.set(id,playLst);playLst.loadFromNode(playListNode[i],this.soundMapMap.get(group),group,filePath);}
}
}
loadFromBinaryData(group,id,audioData,filePath,finishCallback)
{++this.loadCounter;let groupMap=this.soundMapMap.get(group);let sound=groupMap.get(id);this.context.decodeAudioData(audioData,(soundBuffer)=>
{sound.init(this.context,soundBuffer);--this.loadCounter;if(this.loadCounter===0)
finishCallback();},(error)=>console.log(`Error decoding audio data(${error.err})!`));}
freeGroup(groupAry)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];if(this.listTableMap.get(group)===undefined)
throw new Error(`Sound group name can't be found(${group})!`);if(this.soundMapMap.has(group))
this.soundMapMap.delete(group);if(this.playListMapMap.has(group))
this.playListMapMap.delete(group);}
}
getSound(group,soundID)
{let playLst=this.getPlayList(group,soundID);if(playLst)
{return playLst.getSound();}
let groupMap=this.soundMapMap.get(group);if(!groupMap)
throw new Error(`Sound group name can't be found(${group})!`);let snd=groupMap.get(soundID);if(!snd)
throw new Error(`Sound ID can't be found(${group},${soundID})!`);return snd;}
getPlayList(group,playLstID)
{let groupMap=this.playListMapMap.get(group);if(groupMap)
{return groupMap.get(playLstID);}
return undefined;}
play(group,soundID,loop=false)
{this.getSound(group,soundID).play(loop);}
pause(group,soundID)
{this.getSound(group,soundID).pause();}
resume(group,soundID)
{this.getSound(group,soundID).resume();}
stop(group,soundID)
{this.getSound(group,soundID).stop();}
setVolume(group,soundID,volume)
{this.getSound(group,soundID).setVolume(volume);}
getVolume(group,soundID)
{return this.getSound(group,soundID).getVolume();}
isPlaying(group,soundID)
{return this.getSound(group,soundID).isPlaying();}
isPaused(group,soundID)
{return this.getSound(group,soundID).isPaused();}
}
var soundManager=new SoundManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return slotMathManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_2__slotmath__=__webpack_require__(99);var __WEBPACK_IMPORTED_MODULE_3__payline__=__webpack_require__(105);class SlotMathManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.slotMathMapMap=new Map;this.paylineMap=new Map;}
getSlotMath(group,id)
{let groupMap=this.slotMathMapMap.get(group);if(groupMap!==undefined)
{let slotMath=groupMap.get(id);if(slotMath)
return slotMath;else
throw new Error(`Slot Math name can't be found(${group},${name})!`);}
else
throw new Error(`Slot Math group can't be found(${group},${name})!`);return null;}
loadGroup(groupAry,finishCallback)
{super.loadGroup('Slot math',this.slotMathMapMap,groupAry,finishCallback);}
loadFromNode(group,node,filePath,finishCallback)
{let id=node.getAttribute("id");let groupMap=this.slotMathMapMap.get(group);if(groupMap.has(id))
throw new Error(`Duplicate math group id(${id},${group},${filePath})!`);let slotMath=new __WEBPACK_IMPORTED_MODULE_2__slotmath__["a"](group,id);groupMap.set(id,slotMath);slotMath.loadFromNode(node);}
freeGroup(groupAry)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];if(this.listTableMap.get(group)===undefined)
throw new Error(`Slot math group name can't be found(${group})!`);if(this.slotMathMapMap.has(group))
this.slotMathMapMap.delete(group);}
}
loadPaylineSetFromNode(node)
{let paylineSetNode=node.children;for(let i=0;i<paylineSetNode.length;++i)
{let id=paylineSetNode[i].getAttribute('id');if(this.paylineMap.has(id))
throw new Error(`Duplicate payline set id(${id},${this.group})!`);let payline=new __WEBPACK_IMPORTED_MODULE_3__payline__["a"];this.paylineMap.set(id,payline);let lineNode=paylineSetNode[i].getElementsByTagName('line');for(let j=0;j<lineNode.length;++j)
{let lineAry=[];payline.line.push(lineAry);for(let w=0;w<lineNode[j].attributes.length;++w)
lineAry.push(Number(lineNode[j].attributes[w].value));}
let scatterNode=paylineSetNode[i].getElementsByTagName('scatter');for(let j=0;j<scatterNode.length;++j)
{let scatterAry=[];payline.scatter.push(scatterAry);for(let w=0;w<scatterNode[j].attributes.length;++w)
scatterAry.push(Number(scatterNode[j].attributes[w].value));}
}
}
getPaylineSet(id)
{let paylineSet=this.paylineMap.get(id);if(!paylineSet)
throw new Error(`Payline Set id can't be found(${this.group},${id})!`);return paylineSet;}
freePaylineSet()
{this.paylineMap=new Map;}
}
var slotMathManager=new SlotMathManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["b"]=load;var __WEBPACK_IMPORTED_MODULE_0__commonstate__=__webpack_require__(55);var __WEBPACK_IMPORTED_MODULE_1__library_2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_2__library_3d_sprite3d__=__webpack_require__(107);var __WEBPACK_IMPORTED_MODULE_3__library_utilities_camera__=__webpack_require__(109);var __WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_5__library_managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_6__library_gui_menumanager__=__webpack_require__(26);var __WEBPACK_IMPORTED_MODULE_7__library_system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_8__library_script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_9__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_10__library_script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__=__webpack_require__(30);var __WEBPACK_IMPORTED_MODULE_12__library_utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__=__webpack_require__(39);var __WEBPACK_IMPORTED_MODULE_14__library_slot_slotgame__=__webpack_require__(110);var __WEBPACK_IMPORTED_MODULE_15__library_slot_symbolsetviewdatamanager__=__webpack_require__(47);var __WEBPACK_IMPORTED_MODULE_16__library_slot_betmanager__=__webpack_require__(31);var __WEBPACK_IMPORTED_MODULE_17__gamestate__=__webpack_require__(25);var __WEBPACK_IMPORTED_MODULE_18__library_common_defs__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_19__library_utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_20__library_slot_slotdefs__=__webpack_require__(13);class TitleScreenState extends __WEBPACK_IMPORTED_MODULE_0__commonstate__["a"]
{constructor(gameLoopCallback=null)
{super(__WEBPACK_IMPORTED_MODULE_17__gamestate__["d"],__WEBPACK_IMPORTED_MODULE_17__gamestate__["a"],gameLoopCallback);this.background=new __WEBPACK_IMPORTED_MODULE_1__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].getData('(title_screen)','background'));this.background.transform();this.camera=new __WEBPACK_IMPORTED_MODULE_3__library_utilities_camera__["a"];this.camera.setPosXYZ(0,0,20);this.camera.setRotXYZ(10,0,0);this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_8__library_script_scriptcomponent__["a"];this.scriptComponent.set(__WEBPACK_IMPORTED_MODULE_10__library_script_scriptmanager__["a"].get('ScreenFade')(0,1,500));this.slotGame=new __WEBPACK_IMPORTED_MODULE_14__library_slot_slotgame__["a"]('(title_screen)');}
init()
{__WEBPACK_IMPORTED_MODULE_6__library_gui_menumanager__["a"].allowEventHandling=true;__WEBPACK_IMPORTED_MODULE_6__library_gui_menumanager__["a"].activateTree(['title_screen_tree']);this.slotGame.createSlotGroup(
__WEBPACK_IMPORTED_MODULE_20__library_slot_slotdefs__["d"],'wheel_strip','wheel_paytable',__WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__["a"].getSlotMath('(title_screen)',"slot_wheel"),__WEBPACK_IMPORTED_MODULE_12__library_utilities_assetholder__["a"].get('(title_screen)','wheelgroup'),__WEBPACK_IMPORTED_MODULE_12__library_utilities_assetholder__["a"].get('(title_screen)','spinProfile'),__WEBPACK_IMPORTED_MODULE_15__library_slot_symbolsetviewdatamanager__["a"].getViewData('(title_screen)',"wheel_wedges"));this.slotGame.init();let spinBtn=__WEBPACK_IMPORTED_MODULE_6__library_gui_menumanager__["a"].getMenuControl('title_screen_menu','new_game_btn');spinBtn.connect_ExecutionAction(this.slotGame.playGame.bind(this.slotGame));__WEBPACK_IMPORTED_MODULE_16__library_slot_betmanager__["a"].setLineBet(1);__WEBPACK_IMPORTED_MODULE_16__library_slot_betmanager__["a"].setTotalLines(1);__WEBPACK_IMPORTED_MODULE_9__library_utilities_highresolutiontimer__["a"].calcElapsedTime();requestAnimationFrame(this.callback);}
cleanUp()
{this.slotGame.cleanUp();unload();}
handleEvent(event)
{super.handleEvent(event);if(event instanceof CustomEvent)
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_18__library_common_defs__["Z"])
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_18__library_common_defs__["_50"])
this.scriptComponent.set(__WEBPACK_IMPORTED_MODULE_10__library_script_scriptmanager__["a"].get('ScreenFade')(1,0,500,true));}
}
}
miscProcess()
{this.slotGame.processGameState();}
update()
{super.update();this.scriptComponent.update();this.slotGame.update();}
transform()
{super.transform();this.slotGame.transform();}
preRender()
{super.preRender();let matrix=__WEBPACK_IMPORTED_MODULE_7__library_system_device__["a"].orthographicMatrix;this.background.render(matrix);this.slotGame.render(matrix);}
postRender()
{super.postRender();}
}
__webpack_exports__["a"]=TitleScreenState;function unload()
{__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].freeGroup(['(title_screen)','(cube)']);__WEBPACK_IMPORTED_MODULE_15__library_slot_symbolsetviewdatamanager__["a"].freeGroup(['(title_screen)']);__WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__["a"].freeGroup(['(title_screen)']);__WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__["a"].freePaylineSet();}
function load()
{__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadXMLGroup2D(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadTextureGroup2D(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadMeshGroup2D(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].createFromData(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__["a"].loadGroup(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_15__library_slot_symbolsetviewdatamanager__["a"].loadGroup(['(title_screen)'],callback));__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_19__library_utilities_genfunc__["b"]('xml','data/objects/2d/slot/wheelgroup.cfg',(xmlData)=>
{__WEBPACK_IMPORTED_MODULE_12__library_utilities_assetholder__["a"].set('(title_screen)','wheelgroup',xmlData);callback();});});__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_19__library_utilities_genfunc__["b"]('xml','data/objects/2d/slot/spinProfile.cfg',(xmlData)=>
{__WEBPACK_IMPORTED_MODULE_12__library_utilities_assetholder__["a"].set('(title_screen)','spinProfile',xmlData);callback();});});__WEBPACK_IMPORTED_MODULE_11__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_19__library_utilities_genfunc__["b"]('xml','data/objects/2d/slot/payline_wheel.cfg',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_13__library_slot_slotmathmanager__["a"].loadPaylineSetFromNode(xmlNode);callback();});});}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__slotdefs__=__webpack_require__(13);class SpinProfile
{constructor()
{this.startDelay=0;this.accelation=0.0004;this.impulse=0;this.maxVelocity=2.5;this.maxVelocityTime=700;this.bounceDrag=0;this.bounceCorrection=0;this.timeOutDelay=0;this.decelerationRotationCount=1;this.safetyCheckDivisor=0;}
copy(obj)
{this.startDelay=obj.startDelay;this.accelation=obj.accelation;this.impulse=obj.impulse;this.maxVelocity=obj.maxVelocity;this.maxVelocityTime=obj.maxVelocityTime;this.bounceDrag=obj.bounceDrag;this.bounceCorrection=obj.bounceCorrection;this.timeOutDelay=obj.timeOutDelay;this.decelerationRotationCount=obj.decelerationRotationCount;this.safetyCheckDivisor=obj.safetyCheckDivisor;}
loadFromNode(node)
{let attr=node.getAttribute('startDelay');if(attr)
this.startDelay=Number(attr);attr=node.getAttribute('accelation');if(attr)
this.accelation=Number(attr)/1000.0;attr=node.getAttribute('impulse');if(attr)
this.impulse=Number(attr)/1000.0;attr=node.getAttribute('maxVelocity');if(attr)
this.maxVelocity=Number(attr)/1000.0;attr=node.getAttribute('maxVelocityTime');if(attr)
this.maxVelocityTime=Number(attr);attr=node.getAttribute('bounceDrag');if(attr)
this.bounceDrag=Number(attr)/1000.0;attr=node.getAttribute('bounceCorrection');if(attr)
this.bounceCorrection=Number(attr);attr=node.getAttribute('timeOutDelay');if(attr)
this.timeOutDelay=Number(attr);attr=node.getAttribute('decelerationRotationCount');if(attr)
this.decelerationRotationCount=Number(attr);attr=node.getAttribute('safetyCheckDivisor');if(attr)
this.safetyCheckDivisor=Number(attr);}
}
__webpack_exports__["a"]=SpinProfile;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__size__=__webpack_require__(1);class Texture
{constructor()
{this.id=0;this.type=0;this.size=new __WEBPACK_IMPORTED_MODULE_0__size__["a"];}
}
__webpack_exports__["a"]=Texture;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return meshManager;});var __WEBPACK_IMPORTED_MODULE_0__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_1__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__common_uv__=__webpack_require__(64);var __WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__=__webpack_require__(65);var __WEBPACK_IMPORTED_MODULE_4__common_mesh3d__=__webpack_require__(66);class MeshManager
{constructor()
{this.meshBufMapMap=new Map;this.currentVBO=null;this.currentIBO=null;this.counter=0;}
load(group,filePath,binaryData)
{let groupMap=this.meshBufMapMap.get(group);if(groupMap===undefined)
{groupMap=new Map;this.meshBufMapMap.set(group,groupMap);}
let meshGrp=groupMap.get(filePath);if(meshGrp===undefined)
{meshGrp=new __WEBPACK_IMPORTED_MODULE_4__common_mesh3d__["b"];groupMap.set(filePath,meshGrp);this.loadData(group,filePath,binaryData,meshGrp);}
return meshGrp;}
loadData(group,filePath,binaryData,meshGrp)
{this.counter=0;let dataView=new DataView(binaryData);let fileHeader=this.loadFileHeader(dataView,group,filePath);this.tagCheck(dataView,(fileHeader.text_count>0),group,filePath);this.loadTexturePaths(dataView,fileHeader,meshGrp);this.tagCheck(dataView,true,group,filePath);let vertAry=[];this.loadVerts(dataView,fileHeader,vertAry);this.tagCheck(dataView,true,group,filePath);let normAry=[];this.loadNormals(dataView,fileHeader,normAry);this.tagCheck(dataView,(fileHeader.uv_count>0),group,filePath);let uvAry=[];this.loadUVs(dataView,fileHeader,uvAry);this.buildMeshes(dataView,group,filePath,fileHeader,meshGrp,vertAry,normAry,uvAry);}
loadFileHeader(dataView,group,filePath)
{let fileHeader=new __WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["e"];fileHeader.file_header=dataView.getUint32(this.counter,true);this.counter+=4;fileHeader.vert_count=dataView.getUint16(this.counter,true);this.counter+=2;fileHeader.uv_count=dataView.getUint16(this.counter,true);this.counter+=2;fileHeader.vert_norm_count=dataView.getUint16(this.counter,true);this.counter+=2;fileHeader.face_group_count=dataView.getUint16(this.counter,true);this.counter+=2;fileHeader.text_count=dataView.getUint16(this.counter,true);this.counter+=2;fileHeader.joint_count=dataView.getUint16(this.counter,true);this.counter+=2;if(fileHeader.file_header!==__WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["d"])
throw new Error(`File header mismatch!(${group},${filePath}).`);return fileHeader;}
loadTexturePaths(dataView,fileHeader,meshGrp)
{for(let i=0;i<fileHeader.text_count;++i)
{let uniqueTextAry=new __WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["b"];meshGrp.uniqueTexturePathAry.push(uniqueTextAry);uniqueTextAry.type=dataView.getInt8(this.counter,true);this.counter+=1;for(let j=0;j<__WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["g"];++j)
{let charCode=dataView.getInt8(this.counter,true);this.counter+=1;if(charCode)
{uniqueTextAry.path+=String.fromCharCode(charCode);}
else
{this.counter+=__WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["g"]-j-1;break;}
}
}
}
loadVerts(dataView,fileHeader,vertAry)
{for(let i=0;i<fileHeader.vert_count;++i)
{let data=[0,0,0];vertAry.push(data);for(let j=0;j<3;++j)
{data[j]=dataView.getFloat32(this.counter,true);this.counter+=4;}
}
}
loadNormals(dataView,fileHeader,normAry)
{for(let i=0;i<fileHeader.vert_norm_count;++i)
{let data=[0,0,0];normAry.push(data);for(let j=0;j<3;++j)
{data[j]=dataView.getFloat32(this.counter,true);this.counter+=4;}
}
}
loadUVs(dataView,fileHeader,uvAry)
{for(let i=0;i<fileHeader.uv_count;++i)
{let data=[0,0];uvAry.push(data);for(let j=0;j<2;++j)
{data[j]=dataView.getFloat32(this.counter,true);this.counter+=4;}
}
}
buildMeshes(dataView,group,filePath,fileHeader,meshGrp,vertAry,normAry,uvAry)
{let faceGroup=new __WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["a"];for(let i=0;i<fileHeader.face_group_count;++i)
{this.tagCheck(dataView,true,group,filePath);let mesh=new __WEBPACK_IMPORTED_MODULE_4__common_mesh3d__["a"];meshGrp.meshAry.push(mesh);faceGroup.groupFaceCount=dataView.getUint16(this.counter,true);this.counter+=2;faceGroup.vertexBufCount=dataView.getUint16(this.counter,true);this.counter+=2;faceGroup.indexBufCount=dataView.getUint16(this.counter,true);this.counter+=2;faceGroup.textureCount=dataView.getUint16(this.counter,true);this.counter+=2;for(let j=0;j<faceGroup.textureCount;++j)
{mesh.textureIndexAry.push(dataView.getUint16(this.counter,true));this.counter+=2;}
let vertBufAry=[];for(let j=0;j<faceGroup.vertexBufCount;++j)
{let binaryVertex=new __WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["c"];vertBufAry.push(binaryVertex);binaryVertex.vert=dataView.getUint16(this.counter,true);this.counter+=2;binaryVertex.norm=dataView.getUint16(this.counter,true);this.counter+=2;if(fileHeader.uv_count)
{binaryVertex.uv=dataView.getUint16(this.counter,true);this.counter+=2;}
}
let iboAry=[];for(let j=0;j<faceGroup.indexBufCount;++j)
{iboAry.push(dataView.getUint16(this.counter,true));this.counter+=2;}
let vboAry=[];for(let j=0;j<faceGroup.vertexBufCount;++j)
{Array.prototype.push.apply(vboAry,vertAry[vertBufAry[j].vert]);Array.prototype.push.apply(vboAry,normAry[vertBufAry[j].norm]);if(fileHeader.uv_count)
Array.prototype.push.apply(vboAry,uvAry[vertBufAry[j].uv]);}
mesh.vbo=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,mesh.vbo);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,new Float32Array(vboAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ARRAY_BUFFER,null);mesh.ibo=__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,mesh.ibo);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,new Uint16Array(iboAry),__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].ELEMENT_ARRAY_BUFFER,null);mesh.iboCount=faceGroup.indexBufCount;}
}
tagCheck(dataView,allowCheck,group,filePath)
{if(allowCheck)
{let tag=dataView.getUint32(this.counter,true);this.counter+=4;if(tag!==__WEBPACK_IMPORTED_MODULE_3__common_meshbinaryfileheader__["f"])
throw new Error(`Tag check mismatch!(${group},${filePath}).`);}
}
deleteGroup(group)
{let groupMap=this.meshBufMapMap.get(group);if(groupMap!==undefined)
{for(let [key,meshGrp] of groupMap.entries())
{for(let i=0;i<meshGrp.meshAry.length;++i)
{__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].deleteBuffer(meshGrp.meshAry[i].vbo);__WEBPACK_IMPORTED_MODULE_0__system_device__["b"].deleteBuffer(meshGrp.meshAry[i].ibo);}
}
this.meshBufMapMap.delete(group);}
}
}
var meshManager=new MeshManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return fontManager;});var __WEBPACK_IMPORTED_MODULE_0__2d_font__=__webpack_require__(70);var __WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_2__managers_texturemanager__=__webpack_require__(11);class FontManager
{constructor()
{this.fontMap=new Map;this.group='';this.loadCompleteCallback=null;this.loadCounter=0;}
load(node,callback)
{if(node)
{this.loadCompleteCallback=callback;let listGroupNode=node.getElementsByTagName('listGroup');this.group=listGroupNode[0].getAttribute('name');let fontNode=node.getElementsByTagName('font');for(let i=0;i<fontNode.length;++i)
{let name=fontNode[i].getAttribute('name');if(this.fontMap.has(name))
{throw new Error(`Font name has already been loaded(${name}).`);return;}
this.fontMap.set(name,new __WEBPACK_IMPORTED_MODULE_0__2d_font__["a"]);++this.loadCounter;this.downloadFontFiles(name,fontNode[i].getAttribute('file'));}
}
}
downloadFontFiles(name,filePath)
{__WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__["b"]('img',filePath+'.png',(image)=>
{__WEBPACK_IMPORTED_MODULE_2__managers_texturemanager__["a"].load(this.group,name,image);__WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__["b"]('xml',filePath+'.fnt',(xmlNode)=>
{this.loadFont(name,xmlNode);--this.loadCounter;if(this.loadCounter===0)
{this.loadCompleteCallback();}
});});}
loadFont(name,xmlNode)
{let font=this.fontMap.get(name);if(font===undefined)
throw new Error(`Font name has not been added to the map(${name}).`);font.loadFromNode(this.group,name,xmlNode);}
getFont(name)
{let font=this.fontMap.get(name);if(font===undefined)
throw new Error(`Font name can't be found(${name}).`);return font;}
get groupName(){return this.group;}
}
var fontManager=new FontManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return spriteSheetManager;});var __WEBPACK_IMPORTED_MODULE_0__common_spritesheet__=__webpack_require__(46);class SpriteSheetManager
{constructor()
{this.spriteSheetMap=new Map;}
loadFromNode(filePath,node)
{let spriteSheet=this.spriteSheetMap.get(filePath);if(spriteSheet===undefined)
{spriteSheet=new __WEBPACK_IMPORTED_MODULE_0__common_spritesheet__["a"];spriteSheet.loadFromNode(node);this.spriteSheetMap.set(filePath,spriteSheet);}
}
getSpriteSheet(filePath)
{let spriteSheet=this.spriteSheetMap.get(filePath);if(spriteSheet===undefined)
throw new Error('Sprite sheet mesh file missing('+filePath+')!');return spriteSheet;}
clear()
{this.spriteSheetMap.clear();}
}
var spriteSheetManager=new SpriteSheetManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_spritesheetglyph__=__webpack_require__(71);var __WEBPACK_IMPORTED_MODULE_1__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_2__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__=__webpack_require__(9);class SpriteSheet
{constructor(defaultIndex=0,glyphCount=0,columns=0)
{this.defaultIndex=defaultIndex;this.glyphCount=glyphCount;this.columns=columns;this.glyphAry=null;this.glyphMap=null;}
copy(obj)
{this.defaultIndex=obj.defaultIndex;this.glyphCount=obj.glyphCount;this.columns=obj.columns;if(obj.glyphAry)
{if(this.glyphAry===null)
this.glyphAry=[];for(let i=0;i<obj.glyphAry.length;++i)
{let glyph=obj.glyphAry[i];let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](glyph.size.w,glyph.size.h);let rect=new __WEBPACK_IMPORTED_MODULE_2__common_rect__["a"](glyph.uv.x1,glyph.uv.y1,glyph.uv.x2,glyph.uv.y2);let cropOffset=null;if(glyph.cropOffset)
cropOffset=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](glyph.cropOffset.w,glyph.cropOffset.h);this.glyphAry.push(new __WEBPACK_IMPORTED_MODULE_0__common_spritesheetglyph__["a"](size,rect,cropOffset));}
}
}
build(sheetSize)
{if((this.glyphCount!=0)&&(this.columns!=0))
{this.glyphAry=[];let rows=Math.trunc(this.glyphCount/this.columns);if((this.glyphCount % this.columns)>0)
++rows;let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](sheetSize.w/this.columns,sheetSize.h/rows);for(let i=0;i<rows;++i)
{for(let j=0;j<this.columns;++j)
{let rect=new __WEBPACK_IMPORTED_MODULE_2__common_rect__["a"](
(j*size.w)/sheetSize.w,(i*size.h)/sheetSize.h,size.w/sheetSize.w,size.h/sheetSize.h);this.glyphAry.push(new __WEBPACK_IMPORTED_MODULE_0__common_spritesheetglyph__["a"](size,rect));if(this.glyphAry.length===this.glyphCount)
break;}
}
}
}
loadFromNode(node)
{this.glyphMap=new Map;let sheetSize=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"];let attr=node.getAttribute('width');if(attr)
sheetSize.w=Number(attr);attr=node.getAttribute('height');if(attr)
sheetSize.h=Number(attr);let rectNode=node.getElementsByTagName('rect');if(rectNode.length)
{for(let i=0;i<rectNode.length;++i)
{let rect=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["g"](rectNode[i]);let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](rect.x2,rect.y2);let uv=new __WEBPACK_IMPORTED_MODULE_2__common_rect__["a"](
rect.x1/sheetSize.w,rect.y1/sheetSize.h,rect.x2/sheetSize.w,rect.y2/sheetSize.h);let cropOffset=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](
Number(rectNode[i].getAttribute('cx')),Number(rectNode[i].getAttribute('cy')));let strId=rectNode[i].getAttribute('name');this.glyphMap.set(strId,new __WEBPACK_IMPORTED_MODULE_0__common_spritesheetglyph__["a"](size,uv,cropOffset));}
}
}
getGlyph(index=-1)
{if(index>-1)
return this.glyphAry[index];else
return this.glyphAry[this.defaultIndex];}
findGlyph(glyphId)
{let glyph=this.glyphMap.get(glyphId);if(glyph===undefined)
{throw new Error('Glyph name is missing('+glyphId+')!');}
return glyph;}
setGlyph(spriteSheet,glyphId)
{let glyph=this.glyphMap.get(glyphId);if(glyph!==undefined)
{if(spriteSheet.glyphAry===null)
spriteSheet.glyphAry=[];spriteSheet.glyphAry.push(glyph);}
else
{throw new Error('Glyph name is missing('+glyphId+')!');}
}
getCount()
{if((this.glyphAry!==null)&&(this.glyphAry.length))
return this.glyphAry.length;else if((this.glyphMap!==null)&&(this.glyphMap.length))
return this.glyphMap.length;return this.glyphCount;}
copyTo(spriteSheet,strIdAry)
{if(strIdAry.length===0)
{spriteSheet.glyphAry=this.glyphAry;}
else if(this.glyphMap.size)
{if(spriteSheet.glyphCount===0)
{for(let i=0;i<strIdAry.length;++i)
this.setGlyph(spriteSheet,strIdAry[i]);}
else
{if(strIdAry.length===1)
{for(let i=0;i<spriteSheet.glyphCount;++i)
this.setGlyph(spriteSheet,strIdAry[0]+i);}
else
{throw new Error('Sprite Sheet Incorrect configuration!');}
}
}
}
}
__webpack_exports__["a"]=SpriteSheet;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return symbolSetViewDataManager;});var __WEBPACK_IMPORTED_MODULE_0__symbolsetviewdata__=__webpack_require__(78);var __WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_2__managers_managerbase__=__webpack_require__(19);class SymbolSetViewDataManager extends __WEBPACK_IMPORTED_MODULE_2__managers_managerbase__["a"]
{constructor()
{super();this.symbolSetViewDataMapMap=new Map;}
getViewData(group,name)
{let groupMap=this.symbolSetViewDataMapMap.get(group);if(groupMap!==undefined)
{let objData=groupMap.get(name);if(objData)
return objData;else
throw new Error(`Symbol set name can't be found(${group},${name})!`);}
else
throw new Error(`Symbol set group can't be found(${group},${name})!`);return null;}
loadGroup(groupAry,finishCallback)
{super.loadGroup('Symbol set view data',this.symbolSetViewDataMapMap,groupAry,finishCallback);}
loadFromNode(group,node,filePath,finishCallback)
{let groupMap=this.symbolSetViewDataMapMap.get(group);let symbSetNode=node.children;for(let i=0;i<symbSetNode.length;++i)
{let name=symbSetNode[i].getAttribute("name");if(groupMap.has(name))
throw new Error(`Duplicate symbol set(${name},${group},${filePath})!`);let symbSetViewData=new __WEBPACK_IMPORTED_MODULE_0__symbolsetviewdata__["a"];groupMap.set(name,symbSetViewData);symbSetViewData.loadFromNode(symbSetNode[i],group,name);}
}
freeGroup(groupAry)
{for(let grp=0;grp<groupAry.length;++grp)
{let group=groupAry[grp];if(this.listTableMap.get(group)===undefined)
throw new Error(`Object data list group name can't be found(${group})!`);if(this.symbolSetViewDataMapMap.has(group))
this.symbolSetViewDataMapMap.delete(group);}
}
}
var symbolSetViewDataManager=new SymbolSetViewDataManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__fontproperties__=__webpack_require__(80);var __WEBPACK_IMPORTED_MODULE_1__size__=__webpack_require__(1);class FontData
{constructor()
{this.fontString='';this.fontProp=new __WEBPACK_IMPORTED_MODULE_0__fontproperties__["a"];this.fontStrSize=new __WEBPACK_IMPORTED_MODULE_1__size__["a"];}
copy(obj)
{this.fontString=obj.fontString;this.fontProp.copy(obj.fontProp);this.fontStrSize.copy(obj.fontStrSize);}
loadFromNode(node)
{let fontNode=node.getElementsByTagName('font');if(fontNode.length)
{let attr=fontNode[0].getAttribute('fontString');if(attr)
this.fontString=attr;this.fontProp.loadFromNode(fontNode[0]);}
}
}
__webpack_exports__["a"]=FontData;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_defs__=__webpack_require__(0);class ScrollParam
{constructor()
{this.scrollTypesMap=null;this.startDelay=-1;this.scrollDelay=-1;this.msg=-1;}
loadFromNode(node)
{if(node.length)
{this.scrollTypesMap=new Map;this.startDelay=Number(node[0].getAttribute('startDelay'));this.scrollDelay=Number(node[0].getAttribute('scrollDelay'));if(node[0].getAttribute('up')==='true')
this.scrollTypesMap.set(__WEBPACK_IMPORTED_MODULE_0__common_defs__["_17"],__WEBPACK_IMPORTED_MODULE_0__common_defs__["_6"]);if(node[0].getAttribute('down')==='true')
this.scrollTypesMap.set(__WEBPACK_IMPORTED_MODULE_0__common_defs__["X"],__WEBPACK_IMPORTED_MODULE_0__common_defs__["_3"]);if(node[0].getAttribute('left')==='true')
this.scrollTypesMap.set(__WEBPACK_IMPORTED_MODULE_0__common_defs__["_0"],__WEBPACK_IMPORTED_MODULE_0__common_defs__["_4"]);if(node[0].getAttribute('right')==='true')
this.scrollTypesMap.set(__WEBPACK_IMPORTED_MODULE_0__common_defs__["_2"],__WEBPACK_IMPORTED_MODULE_0__common_defs__["_5"]);}
}
canScroll(msg)
{if(this.scrollTypesMap)
{this.msg=-1;let result=this.scrollTypesMap.get(msg);if(result)
{this.msg=result;return true;}
}
return false;}
}
__webpack_exports__["a"]=ScrollParam;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return physicsWorldManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_2__physicsworld2d__=__webpack_require__(85);var __WEBPACK_IMPORTED_MODULE_3__physicsworld3d__=__webpack_require__(86);const LOAD_2D=0;const LOAD_3D=1;class PhysicsWorldManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.worldMap=new Map;}
loadWorldGroup2D(group,finishCallback)
{this.loadWorldGroup(LOAD_2D,group,finishCallback);}
loadWorldGroup3D(group,finishCallback)
{this.loadWorldGroup(LOAD_3D,group,finishCallback);}
loadWorldGroup(loadType,group,finishCallback)
{let pathAry=this.listTableMap.get(group);if(pathAry!==undefined)
{if(this.worldMap.get(group)===undefined)
{if(loadType===LOAD_2D)
this.worldMap.set(group,new __WEBPACK_IMPORTED_MODULE_2__physicsworld2d__["a"]);else
this.worldMap.set(group,new __WEBPACK_IMPORTED_MODULE_3__physicsworld3d__["a"]);let filePath=pathAry[0];if(!__WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__["a"].has(group,filePath))
{this.downloadFile('xml',group,filePath,finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__["a"].set(group,filePath,xmlNode);this.loadFromNode(group,xmlNode,filePath);});}
else
{this.loadFromNode(group,__WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__["a"].get(group,filePath),filePath);}
if(this.loadCounter===0)
finishCallback();}
else
{throw new Error(`Physics world group has alread been loaded(${group})!`);}
}
else
{throw new Error(`Physics world list group name can't be found(${group})!`);}
}
loadFromNode(group,node,filePath)
{let world=this.worldMap.get(group);if(world===undefined)
throw new Error(`Physics World doesn't exist(${group},${filePath})!`);world.loadFromNode(node);}
getWorld(group)
{let world=this.worldMap.get(group);if(world===undefined)
throw new Error(`Physics World doesn't exist(${group})!`);return world;}
destroyWorld(group)
{this.worldMap.delete(group);}
}
var physicsWorldManager=new PhysicsWorldManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class UIControlNavNode
{constructor(uiControl=null)
{this.uiControl=uiControl;this.upNode=null;this.downNode=null;this.leftNode=null;this.rightNode=null;}
setNode(navId,node)
{if(navId===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_41"])
this.upNode=node;else if(navId===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_38"])
this.downNode=node;else if(navId===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_39"])
this.leftNode=node;else if(navId===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_40"])
this.rightNode=node;}
getNode(navNode)
{if(navNode===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_41"])
return this.upNode;else if(navNode===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_38"])
return this.downNode;else if(navNode===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_39"])
return this.leftNode;else if(navNode===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_40"])
return this.rightNode;return null;}
}
__webpack_exports__["a"]=UIControlNavNode;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_2__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_4__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_5__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_6__common_defs__=__webpack_require__(0);class UIProgressBar extends __WEBPACK_IMPORTED_MODULE_0__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_6__common_defs__["L"];this.stencilMaskSprite;this.curValue=0;this.minValue=0;this.maxValue=0;this.spriteApplyIndex=-1;this.orentation=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_42"];this.alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_25"];this.progressBarSize=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"];this.progressBarPos=new __WEBPACK_IMPORTED_MODULE_3__common_point__["a"];this.progressBarScale=new __WEBPACK_IMPORTED_MODULE_3__common_point__["a"];}
loadFromNode(node)
{super.loadFromNode(node);let rangeNode=node.getElementsByTagName('range');if(rangeNode.length)
{let attr=rangeNode[0].getAttribute('cur');if(attr)
this.curValue=Number(attr);attr=rangeNode[0].getAttribute('min');if(attr)
this.minValue=Number(attr);attr=rangeNode[0].getAttribute('max');if(attr)
this.maxValue=Number(attr);}
let orentNode=node.getElementsByTagName("orentation");if(orentNode.length)
{let attr=orentNode[0].getAttribute("type");if(attr==='vert')
this.orentation=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_43"];attr=orentNode[0].getAttribute("alignment");if(attr)
{if(this.orentation===__WEBPACK_IMPORTED_MODULE_6__common_defs__["_42"])
{if(attr==='right')
this.alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_26"];else if(attr==='center')
this.alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_24"];}
else
{if(attr==='bottom')
this.alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_52"];else if(attr==='center')
this.alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_53"];}
}
}
this.setSizePos();}
loadControlFromNode(controlNode)
{super.loadControlFromNode(controlNode);let stencilMaskNode=controlNode.getElementsByTagName("stencilMask");if(stencilMaskNode.length)
{let objectName=stencilMaskNode[0].getAttribute("objectName");this.spriteApplyIndex=Number(stencilMaskNode[0].getAttribute("spriteIndex"));if(objectName && objectName.length)
{this.stencilMaskSprite=new __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_4__objectdatamanager_objectdatamanager__["a"].getData(this.group,objectName));this.stencilMaskSprite.loadTransFromNode(stencilMaskNode[0]);this.progressBarSize.copy(this.stencilMaskSprite.objData.size);this.progressBarPos.copy(this.stencilMaskSprite.pos);this.progressBarScale.copy(this.stencilMaskSprite.scale);}
else
{this.progressBarSize.copy(this.spriteAry[this.spriteApplyIndex].objData.size);this.progressBarPos.copy(this.spriteAry[this.spriteApplyIndex].pos);this.progressBarScale.copy(this.spriteAry[this.spriteApplyIndex].scale);}
}
}
initProgressBar(max=0,cur=0,min=0,orentation=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_42"],alignment=__WEBPACK_IMPORTED_MODULE_6__common_defs__["_25"])
{this.maxValue=max;this.curValue=cur;this.minValue=min;this.orentation=orentation;this.alignment=alignment;this.setSizePos();}
loadSpriteFromArray(objectNameAry,spriteApplyIndex,stencilMaskSprite=null)
{super.loadSpriteFromArray(objectNameAry);this.spriteApplyIndex=spriteApplyIndex;if(stencilMaskSprite)
{this.stencilMaskSprite=new __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_4__objectdatamanager_objectdatamanager__["a"].getData(this.group,stencilMaskSprite));this.progressBarSize.copy(this.stencilMaskSprite.objData.size);this.progressBarPos.copy(this.stencilMaskSprite.pos);this.progressBarScale.copy(this.stencilMaskSprite.scale);}
else
{this.progressBarSize.copy(this.spriteAry[this.spriteApplyIndex].objData.size);this.progressBarPos.copy(this.spriteAry[this.spriteApplyIndex].pos);this.progressBarScale.copy(this.spriteAry[this.spriteApplyIndex].scale);}
}
incCurrentValue(cur)
{this.curValue=cur;this.setSizePos();}
doTransform(object)
{super.doTransform(object);if(this.stencilMaskSprite)
this.stencilMaskSprite.transform(this.matrix,this.wasWorldPosTranformed());}
transformCollision()
{}
render(matrix)
{if(this.stencilMaskSprite)
{for(let i=0;i<this.spriteAry.length;++i)
{if(i===this.spriteApplyIndex)
{__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].colorMask(false,false,false,false);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].depthMask(false);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].enable(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].STENCIL_TEST);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].ALWAYS,0x1,0x1);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].REPLACE);this.stencilMaskSprite.render(matrix);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].colorMask(true,true,true,true);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].EQUAL,0x1,0x1);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].KEEP);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].depthMask(true);this.spriteAry[i].render(matrix);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].disable(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].STENCIL_TEST);}
else
this.spriteAry[i].render(matrix);}
}
else
{super.render(matrix);}
}
setSizePos()
{let scaleX=this.progressBarScale.x;let scaleY=this.progressBarScale.y;let posX=this.progressBarPos.x;let posY=this.progressBarPos.y;let scaler=(this.curValue-this.minValue)/(this.maxValue-this.minValue);if(this.orentation==__WEBPACK_IMPORTED_MODULE_6__common_defs__["_42"])
{scaleX=this.progressBarScale.x*scaler;let offset=this.progressBarSize.w*scaler;if(this.alignment==__WEBPACK_IMPORTED_MODULE_6__common_defs__["_25"])
posX-=(this.progressBarSize.w-offset)/2;else if(m_alignment.horz==__WEBPACK_IMPORTED_MODULE_6__common_defs__["_26"])
posX+=(this.progressBarSize.w-offset)/2;}
else
{scaleY=this.progressBarScale.y*scaler;let offset=this.progressBarSize.h*scaler;if(this.alignment===__WEBPACK_IMPORTED_MODULE_6__common_defs__["_54"])
posY+=(this.progressBarSize.h-offset)/2;else if(this.alignment===__WEBPACK_IMPORTED_MODULE_6__common_defs__["_52"])
posY-=(this.progressBarSize.h-offset)/2;}
if(this.stencilMaskSprite)
{this.stencilMaskSprite.setScaleXYZ(scaleX,scaleY,1);this.stencilMaskSprite.setPosXYZ(posX,posY);}
else
{this.spriteAry[this.spriteApplyIndex].setScaleXYZ(scaleX,scaleY,1);this.spriteAry[this.spriteApplyIndex].setPosXYZ(posX,posY,0);}
}
}
__webpack_exports__["a"]=UIProgressBar;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return spriteStrategyManager;});var __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__=__webpack_require__(19);var __WEBPACK_IMPORTED_MODULE_1__utilities_assetholder__=__webpack_require__(5);class SpriteStrategyManager extends __WEBPACK_IMPORTED_MODULE_0__managers_managerbase__["a"]
{constructor()
{super();this.strategyMap=new Map;this.spriteInc=0;}
load(strategyId,spriteStrategy,finishCallback)
{if(this.strategyMap.has(strategyId))
throw new Error(`Duplicate strategy id(${strategyId})!`);this.strategyMap.set(strategyId,spriteStrategy);super.load(strategyId,finishCallback);}
loadFromNode(strategyId,node,filePath,finishCallback)
{let strategy=this.strategyMap.get(strategyId);strategy.loadFromNode(strategyId,node,filePath,this.downloadFile.bind(this),finishCallback);}
get(strategyId)
{let strategy=this.strategyMap.get(strategyId);if(!strategy)
throw new Error(`Sprite Manager strategy Id can't be found(${strategyId}).`);return strategy;}
clear()
{this.cleanUp();this.strategyMap.clear();this.spriteInc=0;}
init()
{for(let [key,strategy] of this.strategyMap.entries())
strategy.init();}
cleanUp()
{for(let [key,strategy] of this.strategyMap.entries())
strategy.cleanUp();}
miscProcess()
{for(let [key,strategy] of this.strategyMap.entries())
strategy.miscProcess();}
update()
{for(let [key,strategy] of this.strategyMap.entries())
strategy.update();}
transform(object=null)
{for(let [key,strategy] of this.strategyMap.entries())
strategy.transform(object);}
render(matrix)
{for(let [key,strategy] of this.strategyMap.entries())
strategy.render(matrix);}
}
var spriteStrategyManager=new SpriteStrategyManager;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class ValueTable
{constructor(valueAry)
{this.valueAry=valueAry;}
getValue(index)
{return this.valueAry[index];}
}
__webpack_exports__["a"]=ValueTable;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__gamestate__=__webpack_require__(25);var __WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__=__webpack_require__(26);var __WEBPACK_IMPORTED_MODULE_2__library_system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_3__library_common_defs__=__webpack_require__(0);class CommonState extends __WEBPACK_IMPORTED_MODULE_0__gamestate__["e"]
{constructor(gameState,nextState,callBack)
{super(gameState,nextState,callBack);}
handleEvent(event)
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].handleEvent(event);if(event instanceof CustomEvent)
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_3__library_common_defs__["Z"])
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__library_common_defs__["_50"])
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].allowEventHandling=false;this.stateMessage.setMsg(this.getLoadState(event.detail.arg[1]),this.gameState);}
else if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__library_common_defs__["_51"])
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].clearActiveTrees();this.stateChange=true;}
}
}
}
update()
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].update();}
transform()
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].transform();}
preRender()
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].renderInterface(__WEBPACK_IMPORTED_MODULE_2__library_system_device__["a"].orthographicMatrix);}
postRender()
{__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].render(__WEBPACK_IMPORTED_MODULE_2__library_system_device__["a"].orthographicMatrix);}
getLoadState(loadStateStr)
{if(loadStateStr==='title_screen_state')
return __WEBPACK_IMPORTED_MODULE_0__gamestate__["d"];else if(loadStateStr==='run_state')
return __WEBPACK_IMPORTED_MODULE_0__gamestate__["b"];throw new Error(`State does not exist!.(${loadStateStr})`);}
}
__webpack_exports__["a"]=CommonState;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_2__common_defs__=__webpack_require__(0);class Object3D extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor()
{super();this.rotMatrix=new __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__["a"];}
applyRotation(matrix)
{super.applyRotation(matrix);this.rotMatrix.initilizeMatrix();this.rotMatrix.rotate(this.rot);}
}
__webpack_exports__["a"]=Object3D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__spinprofile__=__webpack_require__(41);var __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_4__slotdefs__=__webpack_require__(13);class SlotGroupView extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor(slotGroupModel)
{super();this.slotStripViewAry=[];this.slotGroupModel=slotGroupModel;this.spinProfileMapAry=new Map;this.defaultSpinProfile;this.cycleResultSymbAry=[];this.cycleResultsTxtSprite;}
create(node)
{let group=node.getAttribute('group');let attr=node.getElementsByTagName('translation');if(attr)
this.loadTransFromNode(attr[0]);let cycleResultsTxtNode=node.getElementsByTagName('cycleResultsText');let objectName=cycleResultsTxtNode[0].getAttribute('objectName');this.cycleResultsTxtSprite=new __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__["a"].getData(group,objectName));this.cycleResultsTxtSprite.setVisible(false);this.cycleResultsTxtSprite.loadTransFromNode(cycleResultsTxtNode[0]);this.cycleResultsTxtSprite.visualComponent.loadFontPropFromNode(cycleResultsTxtNode[0]);}
createSymbolStrip(symbolSetViewData)
{if(this.slotStripViewAry.length===0)
throw new Error(`Reelstrip views were not created!`);for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].createSymbolStrip(symbolSetViewData);}
init()
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].init();}
cleanUp()
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].cleanUp();}
setCycleResultText(visible,pay)
{this.cycleResultsTxtSprite.setVisible(visible);if(visible &&(pay!==null))
{let text;if(pay.payType==__WEBPACK_IMPORTED_MODULE_4__slotdefs__["e"])
{text=`Line ${pay.payLine+1} Pays ${pay.getFinalAward()}`;}
else
{if(pay.bonusCode>0)
text=`Bonus Pays ${pay.getFinalAward()}`;else
text=`Scatter Pays ${pay.getFinalAward()}`;}
this.cycleResultsTxtSprite.visualComponent.createFontString(text);}
}
loadSpinProfileFromNode(node)
{this.defaultSpinProfile=node.getAttribute("default");if(!this.defaultSpinProfile)
throw new Error(`Spin profile default attribute not set!`);let profileLstNode=node.children;for(let i=0;i<profileLstNode.length;++i)
{let profileId=profileLstNode[i].getAttribute("id");if(this.spinProfileMapAry.has(profileId))
throw new Error(`Duplicate spin profile id(${profileId})!`);let spinProfileAry=[]
this.spinProfileMapAry.set(profileId,spinProfileAry);let profileNode=profileLstNode[i].children;for(let j=0;j<profileNode.length;++j)
{let spinProfile=new __WEBPACK_IMPORTED_MODULE_1__spinprofile__["a"];spinProfileAry.push(spinProfile);spinProfile.loadFromNode(profileNode[j]);}
}
}
update()
{if(this.isVisible())
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].update();}
}
transform()
{if(this.isVisible())
{super.transform();for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].transform(this.matrix,this.wasWorldPosTranformed());this.cycleResultsTxtSprite.transform(this.matrix,this.wasWorldPosTranformed());}
}
render(matrix)
{if(this.isVisible())
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].render(matrix);this.cycleResultsTxtSprite.render(matrix);}
}
startSpin()
{if(this.isSpinState(__WEBPACK_IMPORTED_MODULE_4__slotdefs__["D"]))
{let spinProfile=this.spinProfileMapAry.get(this.defaultSpinProfile);if(!spinProfile)
throw new Error(`Spin profile does not exist!`);for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].setSpinProfile(spinProfile[i]);for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].startSpin();}
}
stopSpin()
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry[i].stopSpin();}
isSpinState(state)
{let result=true;for(let i=0;i<this.slotStripViewAry.length;++i)
{if(this.slotStripViewAry[i].spinState!==state)
{result=false;break;}
}
return result;}
allowStopSounds(allow)
{for(let i=0;i<this.slotStripViewAry.length;++i)
this.slotStripViewAry.allowStopSounds(allow);}
}
__webpack_exports__["a"]=SlotGroupView;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_spritechild2d__=__webpack_require__(121);var __WEBPACK_IMPORTED_MODULE_1__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_2__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_4__common_defs__=__webpack_require__(0);class Symbol2d extends __WEBPACK_IMPORTED_MODULE_1__2d_object2d__["a"]
{constructor(id)
{super();this.id=id;this.spriteAry=[];this.finalMatrix=new __WEBPACK_IMPORTED_MODULE_2__utilities_matrix__["a"];}
create(group,symbViewDataAry)
{for(let i=0;i<symbViewDataAry.length;++i)
{let sprite=new __WEBPACK_IMPORTED_MODULE_0__2d_spritechild2d__["a"](__WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__["a"].getData(group,symbViewDataAry[i].objName));if(!symbViewDataAry[i].isVisible())
sprite.setVisible(false);if(symbViewDataAry[i].fontData && sprite.visualComponent.isFontSprite())
sprite.visualComponent.fontData.copy(symbViewDataAry[i].fontData);sprite.copyTransform(symbViewDataAry[i]);this.spriteAry.push(sprite);}
}
init()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].init();}
cleanUp()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].cleanUp();}
update()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].update();}
transform(matrix=null,tranformWorldPos=null)
{this.parameters.remove(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_68"]);if(matrix)
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_65"]))
this.transformLocal(this.matrix);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_68"])|| tranformWorldPos)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_68"]);this.finalMatrix.copy(this.matrix);this.finalMatrix.mergeMatrix(matrix.matrix);}
}
else
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_68"]))
this.transformLocal(this.finalMatrix);}
for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.finalMatrix,this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_4__common_defs__["_68"]));}
render(matrix)
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);}
}
__webpack_exports__["a"]=Symbol2d;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["c"]=loadScripts;var __WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_1__library_managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_2__library_script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_3__library_managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_4__library_common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_5__library_common_defs__=__webpack_require__(0);class FadeTo
{constructor(current,final,time)
{this.current=current;this.final=final;this.time=time;this.inc=(this.final-this.current)/this.time;this.finished=false;}
execute()
{this.time-=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.finished=true;}
else
{this.current+=(this.inc*__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime);}
}
}
__webpack_exports__["b"]=FadeTo;class ColorTo
{constructor()
{this.current=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.inc=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.final;this.time;}
init(current,final,time)
{this.time=time;this.final=final;this.current.copy(current);for(let i=0;i<4;++i)
this.inc.data[i]=(this.final.data[i]-this.current.data[i])/this.time;this.finished=false;}
execute()
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;this.time-=elapsedTime;if(this.time<0)
{this.finished=true;}
else
{for(let i=0;i<4;++i)
this.current.data[i]+=this.inc.data[i]*elapsedTime;}
}
get isFinished(){return this.finished;}
get color()
{if(this.finished)
return this.final;else
return this.current;}
}
__webpack_exports__["a"]=ColorTo;class ScreenFade extends FadeTo
{constructor(current,final,time,gameStateChangeMsg)
{super(current,final,time);this.gameStateChangeMsg=gameStateChangeMsg;}
execute()
{super.execute();if(this.finished)
{__WEBPACK_IMPORTED_MODULE_1__library_managers_shadermanager__["a"].setAllShaderValue4fv('additive',[this.final,this.final,this.final,1]);if(this.gameStateChangeMsg)
__WEBPACK_IMPORTED_MODULE_3__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_5__library_common_defs__["Z"],__WEBPACK_IMPORTED_MODULE_5__library_common_defs__["_51"]);}
else
{__WEBPACK_IMPORTED_MODULE_1__library_managers_shadermanager__["a"].setAllShaderValue4fv('additive',[this.current,this.current,this.current,1]);}
}
get isFinished(){return this.finished;}
}
function loadScripts()
{__WEBPACK_IMPORTED_MODULE_2__library_script_scriptmanager__["a"].set('ScreenFade',(current,final,time,gameStateChangeMsg=false)=>{return new ScreenFade(current,final,time,gameStateChangeMsg);});}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["b"]=load;var __WEBPACK_IMPORTED_MODULE_0__library_gui_menumanager__=__webpack_require__(26);var __WEBPACK_IMPORTED_MODULE_1__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_2__library_script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_3__library_script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_4__library_physics_physicsworldmanager__=__webpack_require__(50);var __WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__=__webpack_require__(30);var __WEBPACK_IMPORTED_MODULE_7__library_managers_soundmanager__=__webpack_require__(38);var __WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__=__webpack_require__(53);var __WEBPACK_IMPORTED_MODULE_9__library_2d_basicstagestrategy2d__=__webpack_require__(126);var __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_11__library_system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_12__commonstate__=__webpack_require__(55);var __WEBPACK_IMPORTED_MODULE_13__gamestate__=__webpack_require__(25);var __WEBPACK_IMPORTED_MODULE_14__library_common_defs__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__=__webpack_require__(3);class RunState extends __WEBPACK_IMPORTED_MODULE_12__commonstate__["a"]
{constructor(gameLoopCallback=null)
{super(__WEBPACK_IMPORTED_MODULE_13__gamestate__["b"],__WEBPACK_IMPORTED_MODULE_13__gamestate__["a"],gameLoopCallback);this.physicsWorld=__WEBPACK_IMPORTED_MODULE_4__library_physics_physicsworldmanager__["a"].getWorld("(game)");this.fallObjects=[];for(let i=0;i<20;++i)
this.fallObjects.push(
this.generateObj(i % 5,__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](-700,700),__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](600,1000),__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](0,360)*__WEBPACK_IMPORTED_MODULE_14__library_common_defs__["g"]));this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_2__library_script_scriptcomponent__["a"];this.scriptComponent.set(__WEBPACK_IMPORTED_MODULE_3__library_script_scriptmanager__["a"].get('ScreenFade')(0,1,500));}
generateObj(type,offsetX,offsetY,rot)
{let object;if(type===0)
{object=new __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].getData('(run)','triangle_blue'));}
else if(type===1)
{object=new __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].getData('(run)','triangle_green'));}
else if(type===2)
{object=new __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].getData('(run)','circle_blue'));}
else if(type===3)
{object=new __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].getData('(run)','circle_green'));}
else
{object=new __WEBPACK_IMPORTED_MODULE_10__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].getData('(run)','square_red'));object.setScaleXYZ(0.9,0.9,1);}
object.setPosXYZ(offsetX,offsetY,0);object.setRotXYZ(0,0,rot);object.initPhysics();return object;}
handleEvent(event)
{super.handleEvent(event);if(event instanceof CustomEvent)
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_14__library_common_defs__["Z"])
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_14__library_common_defs__["_50"])
this.scriptComponent.set(__WEBPACK_IMPORTED_MODULE_3__library_script_scriptmanager__["a"].get('ScreenFade')(1,0,500,true));}
}
}
init()
{__WEBPACK_IMPORTED_MODULE_0__library_gui_menumanager__["a"].allowEventHandling=true;__WEBPACK_IMPORTED_MODULE_0__library_gui_menumanager__["a"].activateTree(['pause_tree']);__WEBPACK_IMPORTED_MODULE_1__library_utilities_highresolutiontimer__["a"].calcElapsedTime();requestAnimationFrame(this.callback);}
cleanUp()
{__WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__["a"].clear();__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].freeGroup(['(run)']);__WEBPACK_IMPORTED_MODULE_4__library_physics_physicsworldmanager__["a"].destroyWorld("(game)");}
physics()
{if(!__WEBPACK_IMPORTED_MODULE_0__library_gui_menumanager__["a"].active)
this.physicsWorld.variableTimeStep();}
update()
{super.update();this.scriptComponent.update();if(!__WEBPACK_IMPORTED_MODULE_0__library_gui_menumanager__["a"].active)
{__WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__["a"].update();for(let i=0;i<this.fallObjects.length;++i)
{this.fallObjects[i].physicsUpdate();if(this.fallObjects[i].pos.y<-600)
this.fallObjects[i].physicsComponent.setTransform(
__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](-700,700),__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](600,1000),__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["d"](0,360)*__WEBPACK_IMPORTED_MODULE_14__library_common_defs__["g"],true);}
}
}
transform()
{super.transform();__WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__["a"].transform();for(let i=0;i<this.fallObjects.length;++i)
this.fallObjects[i].transform();}
preRender()
{super.preRender();let matrix=__WEBPACK_IMPORTED_MODULE_11__library_system_device__["a"].orthographicMatrix;__WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__["a"].render(matrix);for(let i=0;i<this.fallObjects.length;++i)
this.fallObjects[i].render(matrix);}
postRender()
{super.postRender();}
}
__webpack_exports__["a"]=RunState;function load()
{__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].loadXMLGroup2D(['(run)'],callback));__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].loadTextureGroup2D(['(run)'],callback));__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].loadMeshGroup2D(['(run)'],callback));__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_5__library_objectdatamanager_objectdatamanager__["a"].createFromData(['(run)'],callback));__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_15__library_utilities_genfunc__["b"]('xml','data/objects/2d/physics/physicsListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_4__library_physics_physicsworldmanager__["a"].loadListTable(xmlNode);__WEBPACK_IMPORTED_MODULE_4__library_physics_physicsworldmanager__["a"].loadWorldGroup2D('(game)',callback);});});__WEBPACK_IMPORTED_MODULE_6__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_8__library_managers_spritestrategymanager__["a"].load('(stage1)',new __WEBPACK_IMPORTED_MODULE_9__library_2d_basicstagestrategy2d__["a"],callback));}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true });var __WEBPACK_IMPORTED_MODULE_0__game__=__webpack_require__(62);var game=new __WEBPACK_IMPORTED_MODULE_0__game__["a"];}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Game;});var __WEBPACK_IMPORTED_MODULE_0__library_managers_signalmanager__=__webpack_require__(23);var __WEBPACK_IMPORTED_MODULE_1__library_system_basegame__=__webpack_require__(63);var __WEBPACK_IMPORTED_MODULE_2__library_utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_3__library_utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_4__library_managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_5__state_startupstate__=__webpack_require__(69);var __WEBPACK_IMPORTED_MODULE_6__state_titlescreenstate__=__webpack_require__(40);var __WEBPACK_IMPORTED_MODULE_7__state_loadstate__=__webpack_require__(125);var __WEBPACK_IMPORTED_MODULE_8__state_runstate__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_9__smartGUI_smartconfirmbtn__=__webpack_require__(129);var __WEBPACK_IMPORTED_MODULE_10__library_slot_betmanager__=__webpack_require__(31);var __WEBPACK_IMPORTED_MODULE_11__state_gamestate__=__webpack_require__(25);class Game extends __WEBPACK_IMPORTED_MODULE_1__library_system_basegame__["a"]
{constructor()
{super();__WEBPACK_IMPORTED_MODULE_4__library_managers_shadermanager__["a"].initShaderCallback=this.shaderInitCallBack.bind(this);__WEBPACK_IMPORTED_MODULE_0__library_managers_signalmanager__["a"].connect_smartGui(this.smartGuiControlCreateCallBack.bind(this));Object(__WEBPACK_IMPORTED_MODULE_3__library_utilities_genfunc__["b"])('xml','data/settings/settings.cfg',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_2__library_utilities_settings__["a"].load(xmlNode);this.init();});}
init()
{super.init();__WEBPACK_IMPORTED_MODULE_10__library_slot_betmanager__["a"].setCredits(50000);this.gameState=new __WEBPACK_IMPORTED_MODULE_5__state_startupstate__["a"](this.gameLoop.bind(this));this.gameState.init();}
smartGuiControlCreateCallBack(control)
{if(control.faction==="decision_btn")
control.smartGui=new __WEBPACK_IMPORTED_MODULE_9__smartGUI_smartconfirmbtn__["a"](control);}
shaderInitCallBack(shaderId)
{__WEBPACK_IMPORTED_MODULE_4__library_managers_shadermanager__["a"].setShaderValue4fv(shaderId,'additive',[0,0,0,1]);}
doStateChange()
{if(this.gameState.doStateChange())
{this.gameState.cleanUp();if(this.gameState.nextState===__WEBPACK_IMPORTED_MODULE_11__state_gamestate__["d"])
this.gameState=new __WEBPACK_IMPORTED_MODULE_6__state_titlescreenstate__["a"](this.gameLoop.bind(this));else if(this.gameState.nextState===__WEBPACK_IMPORTED_MODULE_11__state_gamestate__["a"])
this.gameState=new __WEBPACK_IMPORTED_MODULE_7__state_loadstate__["a"](this.gameState.stateMessage,this.doStateChange.bind(this));else if(this.gameState.nextState===__WEBPACK_IMPORTED_MODULE_11__state_gamestate__["b"])
this.gameState=new __WEBPACK_IMPORTED_MODULE_8__state_runstate__["a"](this.gameLoop.bind(this));this.gameState.init();return true;}
return false;}
handleEvent(event)
{this.gameState.handleEvent(event);}
miscProcess()
{this.gameState.miscProcess();}
physics()
{this.gameState.physics();}
update()
{this.gameState.update();}
transform()
{this.gameState.transform();}
preRender()
{this.gameState.preRender();}
postRender()
{this.gameState.postRender();}
}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__managers_meshmanager__=__webpack_require__(43);var __WEBPACK_IMPORTED_MODULE_3__managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_4__managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_6__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__=__webpack_require__(8);class Basegame
{constructor()
{this.clearBufferMask=0;}
init()
{__WEBPACK_IMPORTED_MODULE_0__device__["a"].createProjMatrix();if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].createStencilBuffer)
__WEBPACK_IMPORTED_MODULE_0__device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_0__device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_0__device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_0__device__["b"].REPLACE);if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].enableDepthBuffer)
__WEBPACK_IMPORTED_MODULE_0__device__["b"].enable(__WEBPACK_IMPORTED_MODULE_0__device__["b"].DEPTH_TEST);__WEBPACK_IMPORTED_MODULE_0__device__["b"].clearColor(0.0,0.0,0.0,1.0);if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].stencilBufferBitSize===1)
{__WEBPACK_IMPORTED_MODULE_0__device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_0__device__["b"].ALWAYS,1,0x1);__WEBPACK_IMPORTED_MODULE_0__device__["b"].stencilMask(0x1);}
else if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].stencilBufferBitSize===8)
{__WEBPACK_IMPORTED_MODULE_0__device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_0__device__["b"].ALWAYS,1,0xFF);__WEBPACK_IMPORTED_MODULE_0__device__["b"].stencilMask(0xff);}
__WEBPACK_IMPORTED_MODULE_0__device__["b"].frontFace(__WEBPACK_IMPORTED_MODULE_0__device__["b"].CCW);__WEBPACK_IMPORTED_MODULE_0__device__["b"].cullFace(__WEBPACK_IMPORTED_MODULE_0__device__["b"].BACK);__WEBPACK_IMPORTED_MODULE_0__device__["b"].enable(__WEBPACK_IMPORTED_MODULE_0__device__["b"].CULL_FACE);__WEBPACK_IMPORTED_MODULE_0__device__["b"].enable(__WEBPACK_IMPORTED_MODULE_0__device__["b"].BLEND);__WEBPACK_IMPORTED_MODULE_0__device__["b"].blendFunc(__WEBPACK_IMPORTED_MODULE_0__device__["b"].SRC_ALPHA,__WEBPACK_IMPORTED_MODULE_0__device__["b"].ONE_MINUS_SRC_ALPHA);__WEBPACK_IMPORTED_MODULE_0__device__["b"].activeTexture(__WEBPACK_IMPORTED_MODULE_0__device__["b"].TEXTURE0);if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].clearTargetBuffer)
this.clearBufferMask|=__WEBPACK_IMPORTED_MODULE_0__device__["b"].COLOR_BUFFER_BIT;if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].enableDepthBuffer)
this.clearBufferMask|=__WEBPACK_IMPORTED_MODULE_0__device__["b"].DEPTH_BUFFER_BIT;if(__WEBPACK_IMPORTED_MODULE_6__utilities_settings__["a"].clearStencilBuffer)
this.clearBufferMask|=__WEBPACK_IMPORTED_MODULE_0__device__["b"].STENCIL_BUFFER_BIT;__WEBPACK_IMPORTED_MODULE_0__device__["b"].clear(this.clearBufferMask);}
pollEvents()
{let event=null;while((event=__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].pollEvent()))
this.handleEvent(event);}
handleEvent(event)
{}
doStateChange()
{}
miscProcess()
{}
physics()
{}
update()
{}
transform()
{}
render()
{__WEBPACK_IMPORTED_MODULE_0__device__["b"].clear(this.clearBufferMask);this.preRender();this.postRender();}
preRender()
{}
postRender()
{}
gameLoop()
{if(this.doStateChange())
return;this.pollEvents();__WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__["a"].calcElapsedTime();this.miscProcess();this.physics();this.update();this.transform();this.render();requestAnimationFrame(this.gameLoop.bind(this));__WEBPACK_IMPORTED_MODULE_4__managers_shadermanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_3__managers_vertexbuffermanager__["a"].unbind();}
}
__webpack_exports__["a"]=Basegame;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class UV
{constructor(u=0,v=0)
{this.data=new Float32Array([u,v]);}
set u(value){this.data[0]=value;}
get u(){return this.data[0];}
set v(value){this.data[1]=value;}
get v(){return this.data[1];}
}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";const MESH_FILE_HEADER=0x415382AE;__webpack_exports__["d"]=MESH_FILE_HEADER;const TAG_CHECK=0x6A82Fc4d;__webpack_exports__["f"]=TAG_CHECK;const TEXT_PATH_SIZE=128;__webpack_exports__["g"]=TEXT_PATH_SIZE;const JOINT_NAME_SIZE=20;class MeshBinaryFileHeader
{constructor()
{this.file_header=0;this.vert_count=0;this.uv_count=0;this.vert_norm_count=0;this.face_group_count=0;this.text_count=0;this.joint_count=0;}
}
__webpack_exports__["e"]=MeshBinaryFileHeader;class BinaryTexture
{constructor()
{this.type=0;this.path='';}
}
__webpack_exports__["b"]=BinaryTexture;;class BinaryFaceGroup
{constructor()
{this.groupFaceCount=0;this.vertexBufCount=0;this.indexBufCount=0;this.textureCount=0;}
}
__webpack_exports__["a"]=BinaryFaceGroup;;class BinaryFace
{constructor()
{this.vert=[];this.norm=[];this.uv=[];}
}
;class BinaryVertex
{constructor()
{this.vert=0;this.norm=0;this.uv=0;}
}
__webpack_exports__["c"]=BinaryVertex;;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class MeshGroup
{constructor()
{this.uniqueTexturePathAry=[];this.meshAry=[];}
}
__webpack_exports__["b"]=MeshGroup;class Mesh
{constructor()
{this.textureIndexAry=[];this.textureAry=[];this.vbo=null;this.ibo=null;this.iboCount=0;}
}
__webpack_exports__["a"]=Mesh;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_vertex2d__=__webpack_require__(27);class Quad2d
{constructor()
{this.vert=[new __WEBPACK_IMPORTED_MODULE_0__common_vertex2d__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_vertex2d__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_vertex2d__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_vertex2d__["a"]];}
}
__webpack_exports__["a"]=Quad2d;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class ShaderData
{constructor()
{this.programId=0;this.vertexId=0;this.fragmentId=0;this.attributeCount=0;this.locationMap=new Map;}
getLocation(id)
{let loc=this.locationMap.get(id);if(loc!==undefined)
return loc;else
throw new Error('ERROR Shader variable location does not exist!('+id+').');return null;}
hasLocation(id)
{return this.locationMap.has(id);}
}
__webpack_exports__["a"]=ShaderData;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_1__library_managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__library_managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_3__library_managers_fontmanager__=__webpack_require__(44);var __WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_5__library_slot_symbolsetviewdatamanager__=__webpack_require__(47);var __WEBPACK_IMPORTED_MODULE_6__library_managers_actionmanager__=__webpack_require__(36);var __WEBPACK_IMPORTED_MODULE_7__library_gui_menumanager__=__webpack_require__(26);var __WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__=__webpack_require__(30);var __WEBPACK_IMPORTED_MODULE_9__library_managers_signalmanager__=__webpack_require__(23);var __WEBPACK_IMPORTED_MODULE_10__library_managers_soundmanager__=__webpack_require__(38);var __WEBPACK_IMPORTED_MODULE_11__library_managers_spritestrategymanager__=__webpack_require__(53);var __WEBPACK_IMPORTED_MODULE_12__library_2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_13__library_system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_15__library_utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_16__library_gui_uiprogressbar__=__webpack_require__(52);var __WEBPACK_IMPORTED_MODULE_17__library_slot_slotmathmanager__=__webpack_require__(39);var __WEBPACK_IMPORTED_MODULE_18__state_titlescreenstate__=__webpack_require__(40);var __WEBPACK_IMPORTED_MODULE_19__scripts_utilityscripts__=__webpack_require__(59);var __WEBPACK_IMPORTED_MODULE_20__scripts_menuscripts__=__webpack_require__(124);var __WEBPACK_IMPORTED_MODULE_21__gamestate__=__webpack_require__(25);var __WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__=__webpack_require__(3);const STARTUP_ASSET_COUNT=90,LOGO_DISPLAY_DELAY=2000;class StartUpState extends __WEBPACK_IMPORTED_MODULE_21__gamestate__["e"]
{constructor(gameLoopCallback=null)
{super(__WEBPACK_IMPORTED_MODULE_21__gamestate__["c"],__WEBPACK_IMPORTED_MODULE_21__gamestate__["d"],gameLoopCallback);this.stateChange=true;this.spriteLogo;this.progressBar;this.current=0.0;this.final=1.0;this.time=500.0;this.inc=(this.final-this.current)/this.time;this.fadeCompleteCallback=this.assetLoad.bind(this);this.progressCounter=0;}
progressbarUpdate()
{__WEBPACK_IMPORTED_MODULE_13__library_system_device__["b"].clear(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["b"].COLOR_BUFFER_BIT);this.spriteLogo.render(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["a"].orthographicMatrix);this.progressBar.incCurrentValue(++this.progressCounter);this.progressBar.doTransform();this.progressBar.render(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["a"].orthographicMatrix);__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_1__library_managers_texturemanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_2__library_managers_vertexbuffermanager__["a"].unbind();}
init()
{let groupAry=['(startup)'];__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].loadCompleteCallback=this.startFade.bind(this);__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/shaders/shader.cfg',(xmlNode)=>__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].load(xmlNode,callback));});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/objectDataList/dataListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadListTable(xmlNode);__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadXMLGroup2D(groupAry,callback);});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadTextureGroup2D(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadMeshGroup2D(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].createFromData(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].load();}
startFade()
{this.spriteLogo=new __WEBPACK_IMPORTED_MODULE_12__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].getData('(startup)','logo'));this.spriteLogo.setScaleXYZ(1.5,1.5,1);this.spriteLogo.transform();this.progressBar=new __WEBPACK_IMPORTED_MODULE_16__library_gui_uiprogressbar__["a"]('(startup)');this.progressBar.setPosXYZ(0,-350,0);this.progressBar.loadSpriteFromArray(['progress_frame','progress_solid'],1);this.progressBar.initProgressBar(STARTUP_ASSET_COUNT);this.progressBar.doTransform();__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].calcElapsedTime();requestAnimationFrame(this.fade.bind(this));}
fade()
{__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].calcElapsedTime();this.time-=__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.renderFade(this.final);this.fadeCompleteCallback();}
else
{this.current+=this.inc*__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].elapsedTime;this.renderFade(this.current);requestAnimationFrame(this.fade.bind(this));}
}
renderFade(value)
{for(let [key,shaderData] of __WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].shaderMap.entries())
__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].setShaderValue4fv(key,'additive',[value,value,value,1]);__WEBPACK_IMPORTED_MODULE_13__library_system_device__["b"].clear(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["b"].COLOR_BUFFER_BIT);this.spriteLogo.render(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["a"].orthographicMatrix);this.progressBar.render(__WEBPACK_IMPORTED_MODULE_13__library_system_device__["a"].orthographicMatrix);__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_1__library_managers_texturemanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_2__library_managers_vertexbuffermanager__["a"].unbind();}
assetLoad()
{__WEBPACK_IMPORTED_MODULE_9__library_managers_signalmanager__["a"].connect_loadComplete(this.progressbarUpdate.bind(this));__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].timerStart();let groupAry=['(menu)','(loadingScreen)'];__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].loadCompleteCallback=this.loadComplete.bind(this);__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadXMLGroup2D(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadTextureGroup2D(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadMeshGroup2D(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].createFromData(groupAry,callback));__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/spritestrategy/spriteStrageyListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_11__library_managers_spritestrategymanager__["a"].loadListTable(xmlNode);callback();});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/sound/soundListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_10__library_managers_soundmanager__["a"].loadListTable(xmlNode);__WEBPACK_IMPORTED_MODULE_10__library_managers_soundmanager__["a"].loadGroup(['(menu)'],callback);});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/3d/objectDataList/dataListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].loadListTable(xmlNode);callback();});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/textures/fonts/font.lst',(xmlNode)=>__WEBPACK_IMPORTED_MODULE_3__library_managers_fontmanager__["a"].load(xmlNode,callback));});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/settings/controllerMapping.cfg',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_6__library_managers_actionmanager__["a"].load(xmlNode);callback();});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/menu/menuListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_7__library_gui_menumanager__["a"].loadListTable(xmlNode);__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/menu/menu_action.list',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_7__library_gui_menumanager__["a"].loadMenuAction(xmlNode);__WEBPACK_IMPORTED_MODULE_7__library_gui_menumanager__["a"].preloadGroup(['(menu)'],callback);});});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_20__scripts_menuscripts__["a"]();__WEBPACK_IMPORTED_MODULE_19__scripts_utilityscripts__["c"]();__WEBPACK_IMPORTED_MODULE_7__library_gui_menumanager__["a"].createGroup(['(menu)']);callback();});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/slot/mathListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_17__library_slot_slotmathmanager__["a"].loadListTable(xmlNode);callback();});});__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].add(
(callback)=>
{__WEBPACK_IMPORTED_MODULE_22__library_utilities_genfunc__["b"]('xml','data/objects/2d/slot/symbolSetListTable.lst',(xmlNode)=>
{__WEBPACK_IMPORTED_MODULE_5__library_slot_symbolsetviewdatamanager__["a"].loadListTable(xmlNode);callback();});});__WEBPACK_IMPORTED_MODULE_18__state_titlescreenstate__["b"]();__WEBPACK_IMPORTED_MODULE_8__library_managers_loadmanager__["a"].load();}
loadComplete()
{__WEBPACK_IMPORTED_MODULE_9__library_managers_signalmanager__["a"].clear_loadComplete();console.log(`StartUp State Download Count:${this.progressCounter}`);this.current=1.0;this.final=0.0;this.time=500.0;this.inc=(this.final-this.current)/this.time;this.fadeCompleteCallback=this.callback;__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].calcElapsedTime();let downloadTime=__WEBPACK_IMPORTED_MODULE_14__library_utilities_highresolutiontimer__["a"].timerStop();if(downloadTime>LOGO_DISPLAY_DELAY)
requestAnimationFrame(this.fade.bind(this));else
setTimeout(()=>requestAnimationFrame(this.fade.bind(this)),LOGO_DISPLAY_DELAY-downloadTime);}
cleanUp()
{__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].freeGroup(['(startup)']);__WEBPACK_IMPORTED_MODULE_15__library_utilities_assetholder__["a"].deleteGroup(['(startup)','(menu)']);}
}
__webpack_exports__["a"]=StartUpState;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_1__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_2__common_texture__=__webpack_require__(42);var __WEBPACK_IMPORTED_MODULE_3__managers_texturemanager__=__webpack_require__(11);class CharData
{constructor()
{this.offset=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.rect=new __WEBPACK_IMPORTED_MODULE_1__common_rect__["a"];this.xAdvance=0;}
}
class Font
{constructor()
{this.charDataMap=new Map;this.lineHeight=0;this.baselineOffset=0;this.horzPadding=0;this.vertPadding=0;this.texture=null;}
loadFromNode(group,name,xmlNode)
{this.texture=__WEBPACK_IMPORTED_MODULE_3__managers_texturemanager__["a"].getTexture(group,name);let padding=xmlNode.getElementsByTagName('info')[0].getAttribute('padding');this.horzPadding=Number(padding.substr(6,1));this.vertPadding=Number(padding.substr(0,1));let commonNode=xmlNode.getElementsByTagName('common');this.lineHeight=Number(commonNode[0].getAttribute('lineHeight'));this.baselineOffset=Number(commonNode[0].getAttribute('base'));let charNode=xmlNode.getElementsByTagName('char');for(let i=0;i<charNode.length;++i)
{let charData=new CharData;charData.offset.w=Number(charNode[i].getAttribute('xoffset'));charData.offset.h=Number(charNode[i].getAttribute('yoffset'));charData.xAdvance=Number(charNode[i].getAttribute('xadvance'));charData.rect.x1=Number(charNode[i].getAttribute('x'));charData.rect.y1=Number(charNode[i].getAttribute('y'));charData.rect.x2=Number(charNode[i].getAttribute('width'));charData.rect.y2=Number(charNode[i].getAttribute('height'));let id=Number(charNode[i].getAttribute('id'));this.charDataMap.set(id,charData);}
}
getCharData(id)
{let charData=this.charDataMap.get(id);if(charData===undefined)
throw new Error(`Font character ID can't be found(${id}).`);return charData;}
}
__webpack_exports__["a"]=Font;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_1__common_size__=__webpack_require__(1);class SpriteSheetGlyph
{constructor(size,uv,cropOffset=null)
{this.size=size;this.uv=uv;this.cropOffset=cropOffset;}
}
__webpack_exports__["a"]=SpriteSheetGlyph;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__objectphysicsdata2d__=__webpack_require__(73);var __WEBPACK_IMPORTED_MODULE_1__objectvisualdata2d__=__webpack_require__(74);var __WEBPACK_IMPORTED_MODULE_2__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__=__webpack_require__(9);class ObjectData2D
{constructor()
{this.visualData=new __WEBPACK_IMPORTED_MODULE_1__objectvisualdata2d__["a"];this.physicsData=new __WEBPACK_IMPORTED_MODULE_0__objectphysicsdata2d__["a"];this.name=null;this.group=null;this.size=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"];}
copy(obj)
{this.visualData.copy(obj.visualData);this.physicsData.copy(obj.physicsData);this.size.copy(obj.size);}
loadObjData(node,group,name)
{this.name=name;this.group=group;this.size=__WEBPACK_IMPORTED_MODULE_3__utilities_xmlparsehelper__["j"](node,this.size);this.visualData.loadObjData(node);this.physicsData.loadObjData(node);}
createFromData(group)
{this.visualData.createFromData(group,this.size);}
}
__webpack_exports__["a"]=ObjectData2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__Box2D_planck_min__=__webpack_require__(34);var __WEBPACK_IMPORTED_MODULE_0__Box2D_planck_min___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Box2D_planck_min__);class Fixture
{constructor()
{this.shape=null;this.radius=0.0;this.friction=0.2;this.density=0.2;this.restitution=0.2;this.topMod=0;this.bottomMod=0;this.leftMod=0;this.rightMod=0;this.chainLoop=false;this.sensor=false;this.filterGroupIndex=0;this.filterCategoryBits=1;this.filterMaskBits=65535;this.vertAry=[];}
copy(obj)
{this.shape=obj.shape;this.radius=obj.radius;this.friction=obj.friction;this.density=obj.density;this.restitution=obj.restitution;this.topMod=obj.topMod;this.bottomMod=obj.bottomMod;this.leftMod=obj.leftMod;this.rightMod=obj.rightMod;this.chainLoop=obj.chainLoop;this.sensor=obj.sensor;this.filterGroupIndex=obj.filterGroupIndex;this.filterCategoryBits=obj.filterCategoryBits;this.filterMaskBits=obj.filterMaskBits;for(let i=0;i<obj.vertAry.length;++i)
{let vert=obj.vertAry[i];this.vertAry.push(new __WEBPACK_IMPORTED_MODULE_0__Box2D_planck_min__["Vec2"](vert.x,vert.y));}
}
}
class ObjectPhysicsData2D
{constructor()
{this.world=null;this.bodyType=null;this.linearDamping=0;this.angularDamping=0;this.fixedRotation=false;this.fixtureAry=[];}
copy(obj)
{this.world=obj.world;this.bodyType=obj.bodyType;this.linearDamping=obj.linearDamping;this.angularDamping=obj.angularDamping;this.fixedRotation=obj.fixedRotation;for(let i=0;i<obj.fixtureAry.length;++i)
{let fixture=new Fixture;fixture.copy(obj.fixtureAry[i]);this.fixtureAry.push(fixture);}
}
loadObjData(node)
{let physicsNode=node.getElementsByTagName('physics');if(physicsNode.length)
{let attr=physicsNode[0].getAttribute('world');if(attr)
this.world=attr;let bodyNode=physicsNode[0].getElementsByTagName('body');if(bodyNode.length)
{attr=bodyNode[0].getAttribute('type');if(attr)
this.bodyType=attr;attr=bodyNode[0].getAttribute('linearDamping');if(attr)
this.linearDamping=Number(attr);attr=bodyNode[0].getAttribute('angularDamping');if(attr)
this.angularDamping=Number(attr);attr=bodyNode[0].getAttribute('fixedRotation');if(attr)
this.fixedRotation=(attr==='true');}
let fixtureNode=physicsNode[0].getElementsByTagName('fixture');for(let i=0;i<fixtureNode.length;++i)
{let fixture=this.fixtureAry[i];if(fixture===undefined)
{fixture=new Fixture;this.fixtureAry.push(fixture);}
attr=fixtureNode[i].getAttribute('shape');if(attr)
fixture.shape=attr;attr=fixtureNode[i].getAttribute('friction');if(attr)
fixture.friction=Number(attr);attr=fixtureNode[i].getAttribute('density');if(attr)
fixture.density=Number(attr);attr=fixtureNode[i].getAttribute('restitution');if(attr)
fixture.restitution=Number(attr);attr=fixtureNode[i].getAttribute('radius');if(attr)
fixture.radius=Number(attr);attr=fixtureNode[i].getAttribute('chainLoop');if(attr)
fixture.chainLoop=(attr==='true');attr=fixtureNode[i].getAttribute('sensor');if(attr)
fixture.sensor=(attr==='true');let vertNode=fixtureNode[i].getElementsByTagName('vert');for(let j=0;j<vertNode.length;++j)
{fixture.vertAry.push(
new __WEBPACK_IMPORTED_MODULE_0__Box2D_planck_min__["Vec2"](
Number(vertNode[j].getAttribute('x')),Number(vertNode[j].getAttribute('y'))));}
let filterNode=fixtureNode[i].getElementsByTagName('collisionFilter');if(filterNode.length)
{attr=filterNode[0].getAttribute('categoryBits');if(attr)
fixture.filterGroupIndex=Number(attr);attr=filterNode[0].getAttribute('maskBits');if(attr)
fixture.filterMaskBits=Number(attr);attr=filterNode[0].getAttribute('groupIndex');if(attr)
fixture.filterGroupIndex=Number(attr);}
let sizeModNode=fixtureNode[i].getElementsByTagName('sizeMod');if(sizeModNode.length)
{attr=sizeModNode[0].getAttribute('top');if(attr)
fixture.topMod=Number(attr);attr=sizeModNode[0].getAttribute('bottom');if(attr)
fixture.bottomMod=Number(attr);attr=sizeModNode[0].getAttribute('left');if(attr)
fixture.leftMod=Number(attr);attr=sizeModNode[0].getAttribute('right');if(attr)
fixture.rightMod=Number(attr);}
}
}
}
isActive()
{return(this.bodyType!==null);}
}
__webpack_exports__["a"]=ObjectPhysicsData2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_rect__=__webpack_require__(24);var __WEBPACK_IMPORTED_MODULE_1__common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_2__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__common_vertex2d__=__webpack_require__(27);var __WEBPACK_IMPORTED_MODULE_4__common_scaledframe__=__webpack_require__(75);var __WEBPACK_IMPORTED_MODULE_5__common_spritesheet__=__webpack_require__(46);var __WEBPACK_IMPORTED_MODULE_6__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_8__managers_spritesheetmanager__=__webpack_require__(45);var __WEBPACK_IMPORTED_MODULE_9__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_10__common_defs__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_11__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_12__utilities_genfunc__=__webpack_require__(3);class ObjectVisualData2D
{constructor()
{this.texture=null;this.vbo=null;this.ibo=null;this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_20"];this.shaderID=null;this.color=new __WEBPACK_IMPORTED_MODULE_1__common_color__["a"];this.textureFilePath='';this.meshFilePath=null;this.spriteSheetFilePath=null;this.iboCount=0;this.vertexScale=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"];this.scaledFrame=null;this.spriteSheet=null;this.glyphIDs=null;this.defaultUniformScale=1;}
copy(obj)
{this.genType=obj.genType;this.shaderID=obj.shaderID;this.textureFilePath=obj.textureFilePath;this.meshFilePath=obj.meshFilePath;this.spriteSheetFilePath=obj.spriteSheetFilePath;this.defaultUniformScale=obj.defaultUniformScale;this.color.copy(obj.color);if(obj.glyphIDs)
{if(this.glyphIDs===null)
this.glyphIDs=[];for(let i=0;i<obj.glyphIDs.length;++i)
this.glyphIDs[i]=obj.glyphIDs[i];}
if(obj.scaledFrame)
{this.scaledFrame=new __WEBPACK_IMPORTED_MODULE_4__common_scaledframe__["a"];this.scaledFrame.copy(obj.scaledFrame);}
if(obj.spriteSheet)
{this.spriteSheet=new __WEBPACK_IMPORTED_MODULE_5__common_spritesheet__["a"];this.spriteSheet.copy(obj.spriteSheet);}
}
loadObjData(node)
{let visualNode=node.getElementsByTagName('visual');if(visualNode.length)
{let attr=visualNode[0].getAttribute('defaultUniformScale');if(attr)
this.defaultUniformScale=Number(attr);let textureNode=visualNode[0].getElementsByTagName('texture');if(textureNode.length)
{let file=textureNode[0].getAttribute('file');if(file)
this.textureFilePath=file;}
let meshNode=visualNode[0].getElementsByTagName('mesh');if(meshNode.length)
{let genTypeStr=meshNode[0].getAttribute('genType');if(genTypeStr)
{if(genTypeStr==='quad')
this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_21"];else if(genTypeStr==='sprite_sheet')
this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"];else if(genTypeStr==='scaled_frame')
this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_22"];else if(genTypeStr==='mesh_file')
this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_19"];else if(genTypeStr==='font')
this.genType=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"];}
let spriteSheetNode=meshNode[0].getElementsByTagName('spriteSheet');if(spriteSheetNode.length)
{let defaultIndex=0;let glyphCount=0;let columns=0;let attr=spriteSheetNode[0].getAttribute('defIndex');if(attr)
defaultIndex=Number(attr);attr=spriteSheetNode[0].getAttribute('glyphCount');if(attr)
{glyphCount=Number(attr);attr=spriteSheetNode[0].getAttribute('columns');if(attr)
columns=Number(attr);}
attr=spriteSheetNode[0].getAttribute('file');if(attr)
this.spriteSheetFilePath=attr;let glyphNode=spriteSheetNode[0].getElementsByTagName('glyph');if(glyphNode.length)
{this.glyphIDs=[];for(let i=0;i<glyphNode.length;++i)
this.glyphIDs.push(glyphNode[i].getAttribute('id'));}
if((this.spriteSheet===null)&&(this.glyphIDs|| defaultIndex|| glyphCount|| columns))
this.spriteSheet=new __WEBPACK_IMPORTED_MODULE_5__common_spritesheet__["a"](defaultIndex,glyphCount,columns);}
let scaledFrameNode=meshNode[0].getElementsByTagName('scaledFrame');if(scaledFrameNode.length)
{if(this.scaledFrame===null)
this.scaledFrame=new __WEBPACK_IMPORTED_MODULE_4__common_scaledframe__["a"];this.scaledFrame.frame.w=Number(scaledFrameNode[0].getAttribute('thicknessWidth'));this.scaledFrame.frame.h=Number(scaledFrameNode[0].getAttribute('thicknessHeight'));let centerQuadAttr=scaledFrameNode[0].getAttribute('centerQuad');if(centerQuadAttr)
this.scaledFrame.centerQuad=(centerQuadAttr==='true');let frameBottomAttr=scaledFrameNode[0].getAttribute('frameBottom');if(frameBottomAttr)
this.scaledFrame.bottomFrame=(frameBottomAttr==='true');}
let fileNode=meshNode[0].getElementsByTagName('file');if(fileNode.length)
this.meshFilePath=fileNode[0].getAttribute('name');}
let shaderNode=visualNode[0].getElementsByTagName('shader');if(shaderNode.length)
{this.shaderID=shaderNode[0].getAttribute('id');}
this.color=__WEBPACK_IMPORTED_MODULE_11__utilities_xmlparsehelper__["b"](visualNode[0],this.color);if((this.genType!=__WEBPACK_IMPORTED_MODULE_10__common_defs__["_20"])&&(this.shaderID===null))
throw new Error('Shader effect or techique not set!');}
}
createFromData(group,size)
{if(this.textureFilePath.length)
{this.texture=__WEBPACK_IMPORTED_MODULE_6__managers_texturemanager__["a"].getTexture(group,this.textureFilePath);if(size.isEmpty())
size.copy(this.texture.size);}
if(this.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_21"])
{this.generateQuad(group);this.vertexScale.w=size.w*this.defaultUniformScale;this.vertexScale.h=size.h*this.defaultUniformScale;size.w=Math.trunc(this.vertexScale.w);size.h=Math.trunc(this.vertexScale.h);}
else if(this.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"])
{if(this.spriteSheetFilePath===null)
this.spriteSheet.build(size);else
{let spriteSheet=__WEBPACK_IMPORTED_MODULE_8__managers_spritesheetmanager__["a"].getSpriteSheet(this.spriteSheetFilePath);spriteSheet.copyTo(this.spriteSheet,this.glyphIDs);}
this.generateQuad(group);let glyphSize=this.spriteSheet.getGlyph().size;this.vertexScale.w=glyphSize.w*this.defaultUniformScale;this.vertexScale.h=glyphSize.h*this.defaultUniformScale;size.w=Math.trunc(this.vertexScale.w);size.h=Math.trunc(this.vertexScale.h);}
else if(this.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_22"])
{if(this.glyphIDs!==null)
{let spriteSheet=__WEBPACK_IMPORTED_MODULE_8__managers_spritesheetmanager__["a"].getSpriteSheet(this.spriteSheetFilePath);let glyph=spriteSheet.findGlyph(this.glyphIDs[0]);if(this.meshFilePath)
this.generateScaledFrameMeshFile(group,this.texture.size,glyph.size,size,glyph.uv);else
this.generateScaledFrame(group,this.texture.size,glyph.size,size,glyph.uv);}
else if(this.meshFilePath)
this.generateScaledFrameMeshFile(group,this.texture.size,this.texture.size,size,new __WEBPACK_IMPORTED_MODULE_0__common_rect__["a"]);else
this.generateScaledFrame(group,this.texture.size,this.texture.size,size,new __WEBPACK_IMPORTED_MODULE_0__common_rect__["a"]);}
}
generateQuad(group)
{let vertAry=
[
0.5,0.5,0.0,1.0,0.0,-0.5,0.5,0.0,0.0,0.0,-0.5,-0.5,0.0,0.0,1.0,0.5,-0.5,0.0,1.0,1.0
];this.vbo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createVBO(group,'guad_0011',vertAry);this.ibo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createIBO(group,'quad_0123',[0,1,2,3],true);this.iboCount=4;}
generateScaledFrame(group,textureSize,glyphSize,frameSize,spriteSheetOffset)
{let frame=this.scaledFrame.frame;let tSize=textureSize;let gSize=glyphSize;let vboName='scaled_frame_'+frameSize.w+'_'+frameSize.h+'_'+frame.w+'_'+frame.h+'_'+tSize.w+'_'+tSize.h+'_'+gSize.w+'_'+gSize.h;this.vbo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createScaledFrame(
group,vboName,this.scaledFrame,textureSize,glyphSize,frameSize,spriteSheetOffset);let iboAry=[
0,1,2,0,3,1,2,4,5,2,1,4,1,6,4,1,7,6,7,8,6,7,9,8,10,9,7,10,11,9,12,11,10,12,13,11,14,10,3,14,12,10,15,3,0,15,14,3,3,7,1,3,10,7];this.ibo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createIBO(group,'scaled_frame',iboAry,true);this.iboCount=6*8;if(this.scaledFrame.centerQuad)
this.iboCount+=6;else if(!this.scaledFrame.bottomFrame)
this.iboCount-=6*3;}
generateScaledFrameMeshFile(group,textureSize,glyphSize,frameSize,spriteSheetOffset)
{let name='scaled_frame_mesh_'+this.meshFilePath;let iboAry=[
0,1,2,0,3,1,2,4,5,2,1,4,1,6,4,1,7,6,7,8,6,7,9,8,10,9,7,10,11,9,12,11,10,12,13,11,14,10,3,14,12,10,15,3,0,15,14,3];if(this.scaledFrame.centerQuad)
Array.prototype.push.apply(iboAry,[3,7,1,3,10,7]);this.vbo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].isVBO(group,name);if(this.vbo===null)
{let meshFileVertAry=[];this.loadMeshFromXML(group,textureSize,frameSize,spriteSheetOffset,16,meshFileVertAry,iboAry);this.vbo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createScaledFrame(
group,name,this.scaledFrame,textureSize,glyphSize,frameSize,new __WEBPACK_IMPORTED_MODULE_0__common_rect__["a"],meshFileVertAry);}
this.ibo=__WEBPACK_IMPORTED_MODULE_7__managers_vertexbuffermanager__["a"].createIBO(group,name,iboAry,true);this.iboCount=iboAry.length;}
loadMeshFromXML(group,textureSize,frameSize,spriteSheetOffset,iboOffset,vertAry,iboAry)
{let additionalOffsetX=0;if(Math.trunc(frameSize.w)% 2!=0)
additionalOffsetX=0.5;let additionalOffsetY=0;if(Math.trunc(frameSize.h)% 2!=0)
additionalOffsetY=0.5;let centerAlignSize=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](-(frameSize.w/2),(frameSize.h/2));let node=__WEBPACK_IMPORTED_MODULE_9__utilities_assetholder__["a"].get(group,this.meshFilePath);let vboNode=node.getElementsByTagName('vbo');if(vboNode.length)
{let vertNode=vboNode[0].getElementsByTagName('vert');for(let i=0;i<vertNode.length;++i)
{let vert=__WEBPACK_IMPORTED_MODULE_11__utilities_xmlparsehelper__["l"](vertNode[i]);vertAry.push(centerAlignSize.w+vert.x+additionalOffsetX);vertAry.push(centerAlignSize.h-vert.y+additionalOffsetY);vertAry.push(vert.z);vertAry.push(spriteSheetOffset.x1+(vert.u/textureSize.w));vertAry.push(spriteSheetOffset.y1+(vert.v/textureSize.h));}
}
let iboNode=node.getElementsByTagName('ibo');if(iboNode.length)
{let iNode=iboNode[0].getElementsByTagName('i');for(let i=0;i<iNode.length;++i)
iboAry.push(iboOffset+Number(iNode[i].childNodes[0].nodeValue));}
}
isActive()
{return(this.genType!==__WEBPACK_IMPORTED_MODULE_10__common_defs__["_20"]);}
getFrameCount()
{if(this.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"])
return this.spriteSheet.getCount();else if(this.texture!==null)
return 1;return 0;}
}
__webpack_exports__["a"]=ObjectVisualData2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_size__=__webpack_require__(1);class ScaledFrame
{constructor()
{this.frame=new __WEBPACK_IMPORTED_MODULE_0__common_size__["a"];this.centerQuad=true;this.bottomFrame=true;}
copy(obj)
{this.frame.copy(obj.frame);this.centerQuad=obj.centerQuad;this.bottomFrame=obj.bottomFrame;}
}
__webpack_exports__["a"]=ScaledFrame;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__objectvisualdata3d__=__webpack_require__(77);var __WEBPACK_IMPORTED_MODULE_1__utilities_xmlparsehelper__=__webpack_require__(9);class ObjectData3D
{constructor()
{this.visualData=new __WEBPACK_IMPORTED_MODULE_0__objectvisualdata3d__["a"];this.name=null;this.group=null;}
copy(obj)
{this.visualData.copy(obj.visualData);}
loadObjData(node,group,name)
{this.name=name;this.group=group;this.visualData.loadObjData(node);}
createFromData(group)
{this.visualData.addTexturesToMesh(group);}
}
__webpack_exports__["a"]=ObjectData3D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__utilities_xmlparsehelper__=__webpack_require__(9);class ObjectVisualData3D
{constructor()
{this.meshGrp=null;this.shaderID=null;this.color=new __WEBPACK_IMPORTED_MODULE_0__common_color__["a"];this.meshFilePath=null;}
copy(obj)
{this.shaderID=obj.shaderID;this.meshFilePath=obj.meshFilePath;this.color.copy(obj.color);this.meshGrp=obj.meshGrp;}
loadObjData(node)
{let visualNode=node.getElementsByTagName('visual');if(visualNode.length)
{let attr=visualNode[0].getAttribute('file');if(attr)
this.meshFilePath=attr;let shaderNode=visualNode[0].getElementsByTagName('shader');if(shaderNode.length)
{this.shaderID=shaderNode[0].getAttribute('id');}
this.color=__WEBPACK_IMPORTED_MODULE_2__utilities_xmlparsehelper__["b"](visualNode[0],this.color);}
}
addTexturesToMesh(group)
{for(let i=0;i<this.meshGrp.meshAry.length;++i)
{for(let j=0;j<this.meshGrp.meshAry[i].textureIndexAry.length;++j)
{let textIndex=this.meshGrp.meshAry[i].textureIndexAry[j]
let textPath=this.meshGrp.uniqueTexturePathAry[textIndex].path;this.meshGrp.meshAry[i].textureAry.push(__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].getTexture(group,textPath));}
}
}
isActive()
{return(this.meshGrp!==null);}
}
__webpack_exports__["a"]=ObjectVisualData3D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__symbolviewdata__=__webpack_require__(79);class SymbolSetViewData
{constructor()
{this.symbolSetDataMap=new Map;this.group;}
loadFromNode(node,group,name)
{this.group=group;let symbolNode=node.children;for(let i=0;i<symbolNode.length;++i)
{let id=symbolNode[i].getAttribute('id');if(this.symbolSetDataMap.has(id))
throw new Error(`Duplicate symbol id(${id},${group},${name})!`);let symbViewDataAry=[];this.symbolSetDataMap.set(id,symbViewDataAry);let spriteNode=symbolNode[i].children;for(let j=0;j<spriteNode.length;++j)
symbViewDataAry.push(new __WEBPACK_IMPORTED_MODULE_0__symbolviewdata__["a"](spriteNode[j]));}
}
}
__webpack_exports__["a"]=SymbolSetViewData;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_object__=__webpack_require__(35);var __WEBPACK_IMPORTED_MODULE_1__common_fontdata__=__webpack_require__(48);class SymbolViewData extends __WEBPACK_IMPORTED_MODULE_0__common_object__["a"]
{constructor(node)
{super();this.objName=node.getAttribute('objectName');let attr=node.getAttribute('visible');if(attr)
this.setVisible(attr==='true');let fontNode=node.getElementsByTagName('font');if(fontNode.length)
{this.fontData=new __WEBPACK_IMPORTED_MODULE_1__common_fontdata__["a"];this.fontData.loadFromNode(node);}
this.loadTransFromNode(node);}
}
__webpack_exports__["a"]=SymbolViewData;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_1__defs__=__webpack_require__(0);class FontProperties
{constructor(fontName=null,hAlign=__WEBPACK_IMPORTED_MODULE_1__defs__["_24"],vAlign=__WEBPACK_IMPORTED_MODULE_1__defs__["_53"],kerning=0,spaceCharKerning=0,lineWrapWidth=-1,lineWrapHeight=0)
{this.fontName=fontName;this.hAlign=hAlign;this.vAlign=vAlign;this.kerning=kerning;this.spaceCharKerning=spaceCharKerning;this.lineWrapWidth=lineWrapWidth;this.lineWrapHeight=0;}
copy(obj)
{this.fontName=obj.fontName;this.hAlign=obj.hAlign;this.vAlign=obj.vAlign;this.kerning=obj.kerning;this.spaceCharKerning=obj.spaceCharKerning;this.lineWrapWidth=obj.lineWrapWidth;this.lineWrapHeight=obj.lineWrapHeight;}
loadFromNode(node)
{let attr=node.getAttribute('fontName');if(attr)
this.fontName=attr;let attrNode=node.getElementsByTagName('attributes');if(attrNode.length)
{attr=attrNode[0].getAttribute('kerning');if(attr)
this.kerning=Number(attr);attr=attrNode[0].getAttribute('spaceCharKerning');if(attr)
this.spaceCharKerning=Number(attr);attr=attrNode[0].getAttribute('lineWrapWidth');if(attr)
this.lineWrapWidth=Number(attr);attr=attrNode[0].getAttribute('lineWrapHeight');if(attr)
this.lineWrapHeight=Number(attr);}
let alignmentNode=node.getElementsByTagName('alignment');if(alignmentNode.length)
{this.hAlign=__WEBPACK_IMPORTED_MODULE_0__utilities_xmlparsehelper__["d"](alignmentNode[0],__WEBPACK_IMPORTED_MODULE_1__defs__["_24"]);this.vAlign=__WEBPACK_IMPORTED_MODULE_0__utilities_xmlparsehelper__["k"](alignmentNode[0],__WEBPACK_IMPORTED_MODULE_1__defs__["_53"]);}
}
}
__webpack_exports__["a"]=FontProperties;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class KeyCodeAction
{constructor(id)
{this.idAry=[id];}
setId(id)
{if(id>-1)
this.idAry.push(id);}
removeId(id)
{var index=this.idAry.indexOf(id);if(index>-1)
this.idAry.splice(index,1);}
wasAction(id)
{if(this.idAry.indexOf(id)>-1)
return true;return false;}
}
__webpack_exports__["a"]=KeyCodeAction;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__common_dynamicoffset__=__webpack_require__(32);var __WEBPACK_IMPORTED_MODULE_2__scrollparam__=__webpack_require__(49);var __WEBPACK_IMPORTED_MODULE_3__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_4__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_6__gui_uicontrolnavnode__=__webpack_require__(51);var __WEBPACK_IMPORTED_MODULE_7__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_8__script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_9__script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_10__uicontrolfactory__=__webpack_require__(37);var __WEBPACK_IMPORTED_MODULE_11__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_12__common_defs__=__webpack_require__(0);class Menu extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor(name,group,filePath)
{super();this.name=name;this.group=group;this.filePath=filePath;this.spriteAry=[];this.staticControlAry=[];this.mouseOnlyControlAry=[];this.controlAry=[];this.controlNodeAry=[];this.controlMap=new Map;this.activeNode=null;this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["E"];this.dynamicOffset=new __WEBPACK_IMPORTED_MODULE_1__common_dynamicoffset__["a"];this.scrollParam=new __WEBPACK_IMPORTED_MODULE_2__scrollparam__["a"];this.smartGui=null;this.alpha=0;this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_8__script_scriptcomponent__["a"];this.scriptFactoryMap=new Map;this.setVisible(false);}
loadFromNode(node)
{this.initScriptFactoryFunctions(node);this.scrollParam.loadFromNode(node.getElementsByTagName('scroll'));let nodeLst=node.getElementsByTagName('spriteList');if(nodeLst.length)
{let spriteNode=nodeLst[0].children;for(let i=0;i<spriteNode.length;++i)
this.loadStaticSpriteFromNode(spriteNode[i]);}
nodeLst=node.getElementsByTagName('staticMenuControls');if(nodeLst.length)
{let controlNode=nodeLst[0].children;for(let i=0;i<controlNode.length;++i)
this.loadStaticControlFromNode(controlNode[i]);}
nodeLst=node.getElementsByTagName('mouseOnlyControls');if(nodeLst.length)
{let controlNode=nodeLst[0].children;for(let i=0;i<controlNode.length;++i)
this.loadMouseOnlyControlFromNode(controlNode[i]);}
nodeLst=node.getElementsByTagName('menuControls');if(nodeLst.length)
{let controlNode=nodeLst[0].children;let navNodeMap=new Map;for(let i=0;i<controlNode.length;++i)
this.loadControlFromNode(controlNode[i],navNodeMap);for(let i=0;i<controlNode.length;++i)
this.findNodes(controlNode[i],i,navNodeMap);}
}
initScriptFactoryFunctions(node)
{let scriptLst=node.getElementsByTagName('scriptLst');if(scriptLst.length)
{let scriptNode=scriptLst[0].children;for(let i=0;i<scriptNode.length;++i)
{let attr=scriptNode[i].attributes[0];if(attr)
{this.scriptFactoryMap.set(attr.name,__WEBPACK_IMPORTED_MODULE_9__script_scriptmanager__["a"].get(attr.value));}
}
}
}
loadStaticSpriteFromNode(node)
{let objectName=node.getAttribute('objectName');let sprite=new __WEBPACK_IMPORTED_MODULE_4__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_7__objectdatamanager_objectdatamanager__["a"].getData(this.group,objectName));this.spriteAry.push(sprite);sprite.loadTransFromNode(node);sprite.initScriptFactoryFunctions(node);}
loadStaticControlFromNode(node)
{let control=__WEBPACK_IMPORTED_MODULE_10__uicontrolfactory__["a"](node,this.group);this.staticControlAry.push(control);if(control.name)
this.controlMap.set(control.name,control);}
loadMouseOnlyControlFromNode(node)
{let control=__WEBPACK_IMPORTED_MODULE_10__uicontrolfactory__["a"](node,this.group);this.mouseOnlyControlAry.push(control);if(control.name)
this.controlMap.set(control.name,control);}
loadControlFromNode(node,navNodeMap)
{let control=__WEBPACK_IMPORTED_MODULE_10__uicontrolfactory__["a"](node,this.group);this.controlAry.push(control);if(control.name)
{if(this.controlMap.has(control.name))
throw new Error(`Duplicate control name!(${control.name})`);this.controlMap.set(control.name,control);let navNode=new __WEBPACK_IMPORTED_MODULE_6__gui_uicontrolnavnode__["a"](control);this.controlNodeAry.push(navNode);navNodeMap.set(control.name,navNode);}
}
loadDynamicOffsetFromNode(node)
{this.dynamicOffset=__WEBPACK_IMPORTED_MODULE_11__utilities_xmlparsehelper__["c"](node);this.setDynamicPos();}
setDynamicPos()
{if(this.dynamicOffset)
this.setPos(this.dynamicOffset.getPos(__WEBPACK_IMPORTED_MODULE_3__utilities_settings__["a"].defaultSize_half));} 
resetDynamicPos()
{this.setDynamicPos();for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].setDynamicPos();for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].setDynamicPos();for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].setDynamicPos();}
findNodes(node,nodeIndex,navNodeMap)
{let navNode=node.getElementsByTagName('navigate');if(navNode.length)
{this.setNodes(navNode,nodeIndex,'up',__WEBPACK_IMPORTED_MODULE_12__common_defs__["_41"],navNodeMap);this.setNodes(navNode,nodeIndex,'down',__WEBPACK_IMPORTED_MODULE_12__common_defs__["_38"],navNodeMap);this.setNodes(navNode,nodeIndex,'left',__WEBPACK_IMPORTED_MODULE_12__common_defs__["_39"],navNodeMap);this.setNodes(navNode,nodeIndex,'right',__WEBPACK_IMPORTED_MODULE_12__common_defs__["_40"],navNodeMap);}
}
setNodes(node,nodeIndex,attrStr,navId,navNodeMap)
{let attr=node[0].getAttribute(attrStr);if(attr)
{let ctrlNode=navNodeMap.get(attr);if(ctrlNode!==undefined)
this.controlNodeAry[nodeIndex].setNode(navId,ctrlNode);else
throw new Error(`Control node doesn't exist!(${attr},${attrStr})`);}
}
init()
{for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].init();for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].init();for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].init();}cleanUp()
{for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].cleanUp();for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].cleanUp();for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].cleanUp();}activateMenu()
{this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"];this.setVisible(true);this.setAlpha(1);this.activateFirstInactiveControl();}
update()
{this.scriptComponent.update();if(this.isVisible())
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].update();for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].update();for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].update();for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].update();}
}
doTransform()
{if(this.isVisible())
{this.transform();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].doTransform(this);for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].doTransform(this);for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].doTransform(this);}
}
render(matrix)
{if(this.isVisible())
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].render(matrix);for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].render(matrix);for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].render(matrix);}
}
handleEvent(event)
{if(event instanceof CustomEvent)
{for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].handleEvent(event);for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].handleEvent(event);if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_15"])
{this.onTransIn(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_16"])
{this.onTransOut(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_1"])
{this.onReactivate(event);}
else if(this.state===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"])
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_7"])
{this.onSelectAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_9"])
{this.onSetActiveControl(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_6"])
{this.onUpAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_3"])
{this.onDownAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_4"])
{this.onLeftAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_5"])
{this.onRightAction(event);}
else if((event.detail.type>=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_17"])&&
(event.detail.type<=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_2"]))
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["k"])
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_17"])
{this.onUpAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["X"])
{this.onDownAction(event);}
if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_0"])
{this.onLeftAction(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_2"])
{this.onRightAction(event);}
}
}
}
}
else if(this.state===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"])
{if(event.type==='mousemove')
{this.onMouseMove(event);}
}
this.smartHandleEvent(event);}
onUpAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_12__common_defs__["_41"]);}
onDownAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_12__common_defs__["_38"]);}
onLeftAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_12__common_defs__["_39"]);}
onRightAction(event)
{this.navigateMenu(__WEBPACK_IMPORTED_MODULE_12__common_defs__["_40"]);}
navigateMenu(navNodeAction)
{if(this.activeNode!==null)
{let navNode=this.activeNode;do
{navNode=navNode.getNode(navNodeAction);if(navNode===null)
{break;}
else if(!navNode.uiControl.isDisabled())
{this.activeNode=navNode;__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_12__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_12__common_defs__["A"],navNode.uiControl);break;}
}
while(true);}
}
onMouseMove(event)
{for(let i=0;i<this.controlNodeAry.length;++i)
{if(this.controlNodeAry[i].uiControl.onMouseMove(event))
this.activeNode=this.controlNodeAry[i];else
this.controlNodeAry[i].uiControl.deactivateControl();}
for(let i=0;i<this.mouseOnlyControlAry.length;++i)
if(!this.mouseOnlyControlAry[i].onMouseMove(event))
this.mouseOnlyControlAry[i].deactivateControl();}
onSelectAction(event)
{let selectionFound=false;if((this.activeNode!==null)&&
(this.activeNode.uiControl.handleSelectAction(event)))
{selectionFound=true;if(this.activeNode.uiControl.actionType>__WEBPACK_IMPORTED_MODULE_12__common_defs__["w"])
this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_33"];}
else if(event.detail.arg[__WEBPACK_IMPORTED_MODULE_12__common_defs__["_46"]]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_57"])
{for(let i=0;i<this.mouseOnlyControlAry.length;++i)
{if(this.mouseOnlyControlAry[i].handleSelectAction(event))
{selectionFound=true;if(this.mouseOnlyControlAry[i].actionType>__WEBPACK_IMPORTED_MODULE_12__common_defs__["w"])
this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_33"];break;}
}
}
if(!selectionFound && event.detail.arg[__WEBPACK_IMPORTED_MODULE_12__common_defs__["_46"]]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_57"])
{if((this.activeNode!==null)&&
(event.detail.arg[__WEBPACK_IMPORTED_MODULE_12__common_defs__["_49"]]===this.activeNode.uiControl.mouseSelectType))
{this.activeNode.uiControl.deactivateControl();for(let i=0;i<this.controlAry.length;++i)
{if(this.controlAry[i].handleSelectAction(event))
{if(this.activeNode.uiControl.actionType>__WEBPACK_IMPORTED_MODULE_12__common_defs__["w"])
this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_33"];break;}
}
}
}
}
onSetActiveControl(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["i"])
this.activateFirstInactiveControl();}
onReactivate(event)
{this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"];}
onTransIn(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_50"])
{this.prepare('transIn');this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_33"];}
else if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_51"])
{this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"];}
}
onTransOut(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_50"])
{this.prepare('transOut');this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_33"];}
else if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_51"])
{this.state=__WEBPACK_IMPORTED_MODULE_12__common_defs__["_35"];}
}
prepare(scriptFactoryId)
{let scriptFactory=this.scriptFactoryMap.get(scriptFactoryId);if(scriptFactory)
this.scriptComponent.set(scriptFactory(this));}
activateFirstInactiveControl()
{let found=false;for(let i=0;i<this.controlNodeAry.length;++i)
{if(!found && this.controlNodeAry[i].uiControl.activateFirstInactiveControl())
{this.activeNode=this.controlNodeAry[i];found=true;}
else
{this.controlNodeAry[i].uiControl.deactivateControl();}
}
}
reset()
{for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].reset(true);for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].reset(true);}
getControl(name)
{let control=this.controlMap.get(name);if(control===undefined)
throw new Error(`Control being asked for is missing!(${name}).`);return control;}
getActiveControl()
{let result=null;for(let i=0;i<this.controlAry.length;++i)
{if(this.controlAry[i].state>__WEBPACK_IMPORTED_MODULE_12__common_defs__["C"])
{result=this.controlAry[i].getActiveControl();break;}
}
return result;}
isDynamicOffset()
{return!this.dynamicOffset.isEmpty();}
getScrollParam(msg)
{if((this.activeNode!=null)&&
this.activeNode.uiControl.canScroll(msg))
{return this.activeNode.uiControl.scrollParam;}
return this.scrollParam;}
smartCreate()
{if(this.smartGui)
this.smartGui.create();}
smartHandleEvent(event)
{if(this.smartGui)
this.smartGui.handleEvent(event);}
setAlpha(alpha)
{if(this.isVisible())
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].setAlpha(alpha);for(let i=0;i<this.staticControlAry.length;++i)
this.staticControlAry[i].setAlpha(alpha);for(let i=0;i<this.mouseOnlyControlAry.length;++i)
this.mouseOnlyControlAry[i].setAlpha(alpha);for(let i=0;i<this.controlAry.length;++i)
this.controlAry[i].setAlpha(alpha);}
this.alpha=alpha;}
getAlpha()
{return this.alpha;}
isIdle()
{return(this.state===__WEBPACK_IMPORTED_MODULE_12__common_defs__["_34"]);}
}
__webpack_exports__["a"]=Menu;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_3__managers_fontmanager__=__webpack_require__(44);var __WEBPACK_IMPORTED_MODULE_4__common_fontdata__=__webpack_require__(48);var __WEBPACK_IMPORTED_MODULE_5__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_6__common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_7__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_8__common_vertex2d__=__webpack_require__(27);var __WEBPACK_IMPORTED_MODULE_9__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_10__common_defs__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_11__utilities_genfunc__=__webpack_require__(3);var gFinalMatrix=new __WEBPACK_IMPORTED_MODULE_5__utilities_matrix__["a"];class VisualComponent2D
{constructor(visualData)
{this.visualData=visualData;this.shaderData=null;this.vertexLocation=null;this.text0Location=null;this.uvLocation=null;this.matrixLocation=null;this.colorLocation=null;this.glyphLocation=null;this.fontData=null;this.VERTEX_BUF_SIZE=20;this.drawMode=((visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_21"])||(visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"]))? __WEBPACK_IMPORTED_MODULE_9__system_device__["b"].TRIANGLE_FAN:__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].TRIANGLES;this.indiceType=(visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"])? __WEBPACK_IMPORTED_MODULE_9__system_device__["b"].UNSIGNED_SHORT:__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].UNSIGNED_BYTE;this.frameIndex=0;this.glyphUV=null;this.vbo=visualData.vbo;this.ibo=visualData.ibo;this.iboCount=visualData.iboCount;this.texture=visualData.texture;this.color=new __WEBPACK_IMPORTED_MODULE_6__common_color__["a"];if(visualData.isActive())
{this.shaderData=__WEBPACK_IMPORTED_MODULE_0__managers_shadermanager__["a"].getShaderData(visualData.shaderID);this.vertexLocation=this.shaderData.getLocation('in_position');this.matrixLocation=this.shaderData.getLocation('cameraViewProjMatrix');this.colorLocation=this.shaderData.getLocation('color');if((this.texture!==null)||(visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"]))
{this.uvLocation=this.shaderData.getLocation('in_uv');this.text0Location=this.shaderData.getLocation('text0');}
if(visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"])
{this.glyphLocation=this.shaderData.getLocation('glyphRect');this.glyphUV=visualData.spriteSheet.getGlyph().uv;this.frameIndex=visualData.spriteSheet.defaultIndex;this.vertexScale=new __WEBPACK_IMPORTED_MODULE_7__common_size__["a"];this.vertexScale.copy(this.visualData.vertexScale);}
if(visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"])
this.fontData=new __WEBPACK_IMPORTED_MODULE_4__common_fontdata__["a"];this.color.copy(this.visualData.color);}
}
deleteFontVBO()
{if((this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"])&&(this.vbo!==null))
{__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].deleteBuffer(this.vbo);this.vbo=null;}
}
render(objMatrix,projMatrix)
{if(this.allowRender())
{__WEBPACK_IMPORTED_MODULE_2__managers_vertexbuffermanager__["a"].bind(this.vbo,this.ibo);__WEBPACK_IMPORTED_MODULE_0__managers_shadermanager__["a"].bind(this.shaderData);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].vertexAttribPointer(this.vertexLocation,3,__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].FLOAT,false,this.VERTEX_BUF_SIZE,0);if(this.texture)
{__WEBPACK_IMPORTED_MODULE_1__managers_texturemanager__["a"].bind(this.texture.id);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniform1i(this.text0Location,0);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].vertexAttribPointer(this.uvLocation,2,__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].FLOAT,false,this.VERTEX_BUF_SIZE,12);}
__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniform4fv(this.colorLocation,this.color.data);if(this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_21"])
{gFinalMatrix.initilizeMatrix();gFinalMatrix.setScaleFromSize(this.visualData.vertexScale);gFinalMatrix.mergeMatrix(objMatrix.matrix);gFinalMatrix.mergeMatrix(projMatrix.matrix);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniformMatrix4fv(this.matrixLocation,false,gFinalMatrix.matrix);}
else if(this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"])
{gFinalMatrix.initilizeMatrix();gFinalMatrix.setScaleFromSize(this.vertexScale);gFinalMatrix.mergeMatrix(objMatrix.matrix);gFinalMatrix.mergeMatrix(projMatrix.matrix);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniformMatrix4fv(this.matrixLocation,false,gFinalMatrix.matrix);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniform4fv(this.glyphLocation,this.glyphUV.data);}
else
{gFinalMatrix.initilizeMatrix();gFinalMatrix.mergeMatrix(objMatrix.matrix);gFinalMatrix.mergeMatrix(projMatrix.matrix);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].uniformMatrix4fv(this.matrixLocation,false,gFinalMatrix.matrix);}
__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].drawElements(this.drawMode,this.iboCount,this.indiceType,0);}
}
loadFontPropFromNode(node)
{if(this.fontData)
this.fontData.loadFromNode(node);}
setFontProperties(fontName,hAlign=null,vAlign=null,kerning=null,sKern=null,lineWrapWidth=null,lineWrapHeight=null)
{if(this.fontData)
{this.fontData.fontProp.fontName=fontName;if(hAlign)
this.fontData.fontProp.hAlign=hAlign;if(vAlign)
this.fontData.fontProp.hAlign=vAlign;if(kerning)
this.fontData.fontProp.kerning=kerning;if(sKern)
this.fontData.fontProp.spaceCharKerning=sKern;if(lineWrapWidth)
this.fontData.fontProp.lineWrapWidth=lineWrapWidth;if(lineWrapHeight)
this.fontData.fontProp.lineWrapHeight=lineWrapHeight;}
}
createFontStringFromData()
{if((this.fontData!==null)&& this.fontData.fontString)
this.createFontString(this.fontData.fontString);}
createFontString(fontString)
{if((this.fontData!==null)&&
(fontString!=='')&&
(this.fontData.fontProp.fontName!==null)&&
((fontString!==this.fontData.fontString)||(this.vbo===null)))
{this.fontData.fontStrSize.reset();let lastCharDif=0;let font=__WEBPACK_IMPORTED_MODULE_3__managers_fontmanager__["a"].getFont(this.fontData.fontProp.fontName);this.texture=font.texture;this.fontData.fontString=fontString;let spaceCharCount=__WEBPACK_IMPORTED_MODULE_11__utilities_genfunc__["a"](this.fontData.fontString,' ');let barCharCount=__WEBPACK_IMPORTED_MODULE_11__utilities_genfunc__["a"](this.fontData.fontString,'|');const charCount=this.fontData.fontString.length-spaceCharCount-barCharCount;this.iboCount=charCount*6;const BUILD_FONT_IBO=(this.iboCount>__WEBPACK_IMPORTED_MODULE_2__managers_vertexbuffermanager__["a"].currentMaxFontIndices);let vertAry=new Array(charCount*4*5);let indexAry=null;if(BUILD_FONT_IBO)
indexAry=new Array(this.iboCount);let xOffset=0;let width=0;let lineHeightOffset=0;let lineHeightWrap=font.lineHeight+font.vertPadding+this.fontData.fontProp.lineWrapHeight;let initialHeightOffset=font.baselineOffset+font.vertPadding;let lineSpace=font.lineHeight-font.baselineOffset;let counter=0;let vertAryIndex=0;let lineCount=0;let textureSize=font.texture.size;let lineWidthOffsetAry=this.calcLineWidthOffset(font,this.fontData.fontString);xOffset=lineWidthOffsetAry[lineCount++];if(this.fontData.fontProp.vAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_54"])
lineHeightOffset=-initialHeightOffset;if(this.fontData.fontProp.vAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_53"])
{lineHeightOffset=-(initialHeightOffset-((font.baselineOffset-lineSpace)/2)-font.vertPadding);if(lineWidthOffsetAry.length>1)
lineHeightOffset=((lineHeightWrap*lineWidthOffsetAry.length)/2)-font.baselineOffset;}
else if(this.fontData.fontProp.vAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_52"])
{lineHeightOffset=-(initialHeightOffset-font.baselineOffset-font.vertPadding);if(lineWidthOffsetAry.length>1)
lineHeightOffset+=(lineHeightWrap*(lineWidthOffsetAry.length-1));}
lineHeightOffset=Math.trunc(lineHeightOffset);for(let i=0;i<this.fontData.fontString.length;++i)
{let id=this.fontData.fontString.charCodeAt(i);if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["d"])
{xOffset=lineWidthOffsetAry[lineCount];width=0;lineHeightOffset+=-lineHeightWrap;++lineCount;}
else
{let charData=font.getCharData(id);if(id!=__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
{let rect=charData.rect;let yOffset=(font.lineHeight-rect.y2-charData.offset.h)+lineHeightOffset;let additionalOffsetX=0;if(Math.trunc(rect.x2)% 2!=0)
additionalOffsetX=0.5;let additionalOffsetY=0;if(Math.trunc(rect.y2)% 2!=0)
additionalOffsetY=0.5;vertAry[vertAryIndex]=xOffset+charData.offset.w+additionalOffsetX;vertAry[vertAryIndex+1]=yOffset+additionalOffsetY;vertAry[vertAryIndex+2]=0;vertAry[vertAryIndex+3]=rect.x1/textureSize.w;vertAry[vertAryIndex+4]=(rect.y1+rect.y2)/textureSize.h;vertAry[vertAryIndex+5]=xOffset+rect.x2+charData.offset.w+additionalOffsetX;vertAry[vertAryIndex+6]=yOffset+rect.y2+additionalOffsetY;vertAry[vertAryIndex+7]=0;vertAry[vertAryIndex+8]=(rect.x1+rect.x2)/textureSize.w;vertAry[vertAryIndex+9]=rect.y1/textureSize.h;vertAry[vertAryIndex+10]=vertAry[vertAryIndex];vertAry[vertAryIndex+11]=vertAry[vertAryIndex+6];vertAry[vertAryIndex+12]=0;vertAry[vertAryIndex+13]=vertAry[vertAryIndex+3];vertAry[vertAryIndex+14]=vertAry[vertAryIndex+9];vertAry[vertAryIndex+15]=vertAry[vertAryIndex+5];vertAry[vertAryIndex+16]=vertAry[vertAryIndex+1];vertAry[vertAryIndex+17]=0;vertAry[vertAryIndex+18]=vertAry[vertAryIndex+8];vertAry[vertAryIndex+19]=vertAry[vertAryIndex+4];vertAryIndex+=20;if(BUILD_FONT_IBO)
{let arrayIndex=counter*6;let vertIndex=counter*4;indexAry[arrayIndex]=vertIndex;indexAry[arrayIndex+1]=vertIndex+1;indexAry[arrayIndex+2]=vertIndex+2;indexAry[arrayIndex+3]=vertIndex;indexAry[arrayIndex+4]=vertIndex+3;indexAry[arrayIndex+5]=vertIndex+1;}
++counter;}
let inc=charData.xAdvance+this.fontData.fontProp.kerning+font.horzPadding;if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
inc+=this.fontData.fontProp.spaceCharKerning;width+=inc;xOffset+=inc;if(this.fontData.fontStrSize.w<width)
{this.fontData.fontStrSize.w=width;lastCharDif=inc-charData.rect.x2;}
if((id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])&&(this.fontData.fontProp.lineWrapWidth>0))
{let nextWord=0;for(let j=i+1;j<this.fontData.fontString.length;++j)
{id=this.fontData.fontString[j];if(id!=__WEBPACK_IMPORTED_MODULE_10__common_defs__["d"])
{let anotherCharData=font.getCharData(id);if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
break;nextWord+=anotherCharData.xAdvance+this.fontData.fontProp.kerning+font.horzPadding;}
}
if(width+nextWord>=this.fontData.fontProp.lineWrapWidth)
{xOffset=lineWidthOffsetAry[lineCount++];width=0;lineHeightOffset+=-lineHeightWrap;}
}
}
}
this.fontData.fontStrSize.w-=lastCharDif;this.fontData.fontStrSize.h=font.lineHeight;if(this.vbo===null)
this.vbo=__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].createBuffer();__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].ARRAY_BUFFER,this.vbo);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].bufferData(__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].ARRAY_BUFFER,new Float32Array(vertAry),__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].STATIC_DRAW);__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].bindBuffer(__WEBPACK_IMPORTED_MODULE_9__system_device__["b"].ARRAY_BUFFER,null);this.ibo=__WEBPACK_IMPORTED_MODULE_2__managers_vertexbuffermanager__["a"].createDynamicFontIBO(__WEBPACK_IMPORTED_MODULE_3__managers_fontmanager__["a"].groupName,'dynamic_font_ibo',indexAry,this.iboCount);}
else if((this.fontData!==null)&&
(fontString!=='')&&
(fontString!==this.fontData.fontString)&&
(this.vbo!==null))
{this.fontData.fontString='';}
}
calcLineWidthOffset(font,str)
{let firstCharOffset=0;let lastCharOffset=0;let spaceWidth=0;let width=0;let counter=0;let lineWidthOffsetAry=[];for(let i=0;i<str.length;++i)
{let id=str.charCodeAt(i);if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["d"])
{this.addLineWithToAry(font,lineWidthOffsetAry,this.fontData.fontProp.hAlign,width,firstCharOffset,lastCharOffset);counter=0;width=0;}
else
{let charData=font.getCharData(id);if(counter===0)
firstCharOffset=charData.offset.w;spaceWidth=charData.xAdvance+this.fontData.fontProp.kerning+font.horzPadding;if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
spaceWidth+=this.fontData.fontProp.spaceCharKerning;width+=spaceWidth;if(id!=__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
lastCharOffset=charData.offset.w;++counter;}
if((id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])&&(this.fontData.fontProp.lineWrapWidth>0))
{let nextWord=0;for(let j=i+1;j<str.length;++j)
{id=str[j];if(id!=__WEBPACK_IMPORTED_MODULE_10__common_defs__["d"])
{let charData=font.getCharData(id);if(id===__WEBPACK_IMPORTED_MODULE_10__common_defs__["e"])
break;nextWord+=charData.xAdvance+this.fontData.fontProp.kerning+font.horzPadding;}
}
if(width+nextWord>=this.fontData.fontProp.lineWrapWidth)
{this.addLineWithToAry(font,lineWidthOffsetAry,this.fontData.fontProp.hAlign,width-spaceWidth,firstCharOffset,lastCharOffset);counter=0;width=0;}
}
}
this.addLineWithToAry(font,lineWidthOffsetAry,this.fontData.fontProp.hAlign,width,firstCharOffset,lastCharOffset);return lineWidthOffsetAry;}
addLineWithToAry(font,lineWidthOffsetAry,hAlign,width,firstCharOffset,lastCharOffset)
{if(hAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_25"])
lineWidthOffsetAry.push(-(firstCharOffset+font.horzPadding));else if(hAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_24"])
lineWidthOffsetAry.push(-((width-font.horzPadding)/2));else if(hAlign===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_26"])
lineWidthOffsetAry.push(-(width-lastCharOffset-font.horzPadding));lineWidthOffsetAry[lineWidthOffsetAry.length-1]=Math.trunc(lineWidthOffsetAry[lineWidthOffsetAry.length-1]);}
getFontString()
{if(this.fontData===null)
throw new Error(`Can't ask for the font string from a sprite that is not a sprite font!`);return this.fontData.fontString;}
setFontString(fontString)
{if(this.fontData===null)
throw new Error(`Can't set a font string for a sprite that is not a sprite font!`);this.fontData.fontString=fontString;}
allowRender()
{return((this.visualData.genType>__WEBPACK_IMPORTED_MODULE_10__common_defs__["_20"])&&(this.visualData.genType<__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"]))||
((this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"])&& this.fontData.fontString);}
isFontSprite()
{return(this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_18"]);}
setFrame(index)
{if(this.visualData.genType===__WEBPACK_IMPORTED_MODULE_10__common_defs__["_23"])
{let glyph=this.visualData.spriteSheet.getGlyph(index);this.vertexScale.w=glyph.size.w*this.visualData.defaultUniformScale;this.vertexScale.h=glyph.size.h*this.visualData.defaultUniformScale;this.glyphUV=glyph.uv;this.frameIndex=index;}
}
getFontSize()
{if(!this.fontData)
{throw new Error(`Can't ask for the font size from a sprite that is not a sprite font!`);return null;}
return this.fontData.fontStrSize;}
}
__webpack_exports__["a"]=VisualComponent2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__physicsworldmanager__=__webpack_require__(50);var __WEBPACK_IMPORTED_MODULE_1__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__=__webpack_require__(34);var __WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__);class PhysicsComponent2D
{constructor(physicsData)
{this.bodyType=null;this.body=null;this.pixelsToMeters=0;this.metersToPixels=0;this.world=null;if(physicsData.isActive())
{this.world=__WEBPACK_IMPORTED_MODULE_0__physicsworldmanager__["a"].getWorld(physicsData.world);this.metersToPixels=this.world.pixelsPerMeter;this.pixelsToMeters=1.0/this.metersToPixels;}
}
init(sprite)
{if(this.world!==null)
{this.createBody(sprite);this.createFixture(sprite);}
}
createBody(sprite)
{let physicsData=sprite.objData.physicsData;let worldDef={type:physicsData.bodyType,position:__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](sprite.pos.x*this.pixelsToMeters,-(sprite.pos.y*this.pixelsToMeters)),angle:-sprite.rot.z,linearVelocity:__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"].zero(),angularVelocity:0.0,linearDamping:physicsData.linearDamping,angularDamping:physicsData.angularDamping,fixedRotation:physicsData.fixedRotation,bullet:false,gravityScale:1.0,allowSleep:true,awake:true,active:true,userData:sprite };this.body=this.world.createBody(worldDef);}
createFixture(sprite)
{let fixtureAry=sprite.objData.physicsData.fixtureAry;for(let i=0;i<fixtureAry.length;++i)
{if(fixtureAry[i].shape===__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Circle"].TYPE)
this.createCircularShapeFixture(sprite,fixtureAry[i]);else if(fixtureAry[i].shape===__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Edge"].TYPE)
this.createEdgeShapeFixture(sprite,fixtureAry[i]);else if(fixtureAry[i].shape===__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Polygon"].TYPE)
this.createPolygonShapeFixture(sprite,fixtureAry[i]);else if(fixtureAry[i].shape===__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Chain"].TYPE)
this.createChainShapeFixture(sprite,fixtureAry[i]);}
}
getFixtureDef(sprite,fixture)
{let fixtureDef={userData:sprite,friction:fixture.friction,restitution:fixture.restitution,density:fixture.density,isSensor:fixture.sensor,filterGroupIndex:0,filterCategoryBits:0x0001,filterMaskBits:0xFFFF };return fixtureDef;}
createCircularShapeFixture(sprite,fixture)
{this.body.createFixture(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Circle"]((fixture.radius*sprite.scale.x)*this.pixelsToMeters),this.getFixtureDef(sprite,fixture));}
createEdgeShapeFixture(sprite,fixture)
{if(fixture.vertAry.length!==2)
throw new Error(`Physics object has incorrect number of points defined(${fixture.vertAry.length})!`);let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](
sprite.objData.size.w*sprite.scale.x*0.5,sprite.objData.size.h*sprite.scale.y*0.5);let Vec2Ary=[];this.convertPoints(Vec2Ary,fixture,size,sprite.scale);this.body.createFixture(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Edge"](Vec2Ary[0],Vec2Ary[1]),this.getFixtureDef(sprite,fixture));}
createPolygonShapeFixture(sprite,fixture)
{let Vec2Ary=[];let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](
sprite.objData.size.w*sprite.scale.x*0.5,sprite.objData.size.h*sprite.scale.y*0.5);if(fixture.vertAry.length)
{this.convertPoints(Vec2Ary,fixture,size,sprite.scale);}
else
{let topMod=fixture.topMod*sprite.scale.y;let bottomMod=-fixture.bottomMod*sprite.scale.y;let leftMod=-fixture.leftMod*sprite.scale.x;let rightMod=fixture.rightMod*sprite.scale.x;Vec2Ary.push(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](
(-size.w+leftMod)*this.pixelsToMeters,(size.h+topMod)*this.pixelsToMeters));Vec2Ary.push(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](
(-size.w+leftMod)*this.pixelsToMeters,(-size.h+bottomMod)*this.pixelsToMeters));Vec2Ary.push(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](
(size.w+rightMod)*this.pixelsToMeters,(-size.h+bottomMod)*this.pixelsToMeters));Vec2Ary.push(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](
(size.w+rightMod)*this.pixelsToMeters,(size.h+topMod)*this.pixelsToMeters));}
this.body.createFixture(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Polygon"](Vec2Ary),this.getFixtureDef(sprite,fixture));}
createChainShapeFixture(sprite,fixture)
{if(fixture.vertAry.length>1)
throw new Error(`Physics object has incorrect number of points defined(${fixture.vertAry.length})!`);let size=new __WEBPACK_IMPORTED_MODULE_1__common_size__["a"](
sprite.objData.size.w*sprite.scale.x*0.5,sprite.objData.size.h*sprite.scale.y*0.5);let Vec2Ary=[];this.convertPoints(Vec2Ary,fixture,size,sprite.scale);this.body.createFixture(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Chain"](Vec2Ary,fixture.chainLoop),this.getFixtureDef(sprite,fixture));}
convertPoints(polyPointAry,fixture,size,scale)
{for(let i=0;i<fixture.vertAry.length;++i)
{polyPointAry.push(
__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](((fixture.vertAry[i].x*scale.x)-size.w)*this.pixelsToMeters,((fixture.vertAry[i].y*scale.y)-size.h)*this.pixelsToMeters));}
}
update(sprite)
{if(this.isActive())
{if(this.body.isAwake())
{let pos=this.body.getPosition();let angle=this.body.getAngle();sprite.setPosXYZ(pos.x*this.metersToPixels,-(pos.y*this.metersToPixels));sprite.setRotXYZ(0,0,-angle,false);}
}
}
isActive()
{return(this.body!==null);}
destroyBody()
{if(this.body!==null)
{this.world.destroyBody(this.body);this.body=null;}
}
setTransform(x,y,angle,resetVelocity)
{if(this.body!==null)
{this.body.setTransform(__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](x*this.pixelsToMeters,-(y*this.pixelsToMeters)),angle);if(resetVelocity)
{this.body.setLinearVelocity(__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"].zero());this.body.setAngularVelocity(0);}
}
}
setLinearVelocity(x,y)
{if(this.body!==null)
this.body.setLinearVelocity(__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](x*this.pixelsToMeters,-(y*this.pixelsToMeters)));}
}
__webpack_exports__["a"]=PhysicsComponent2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__=__webpack_require__(3);var __WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__=__webpack_require__(34);var __WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__);class PhysicsWorld2D
{constructor()
{this.world=__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["World"]();this.bodyAry=[];this.active=false;this.beginStep=0;this.timer=0;this.stepTime=0;this.stepTimeSec=0;this.velStepCount=0;this.posStepCount=0;this.pixelsPerMeter=0;}
loadFromNode(node)
{let settingsNode=node.getElementsByTagName("settings");if(settingsNode.length)
{let attr=settingsNode[0].getAttribute('active');if(attr)
this.active=(attr==='true');}
let gravityNode=node.getElementsByTagName("gravity");if(gravityNode.length)
{let gravity=__WEBPACK_IMPORTED_MODULE_2__Box2D_planck_min__["Vec2"](
Number(gravityNode[0].getAttribute("x")),Number(gravityNode[0].getAttribute("y")));this.world.setGravity(gravity);}
let steppingNode=node.getElementsByTagName("stepping");if(steppingNode.length)
{this.velStepCount=Number(steppingNode[0].getAttribute("velocity"));this.posStepCount=Number(steppingNode[0].getAttribute("position"));let fps=Number(steppingNode[0].getAttribute("fps"));this.setFPS(fps);}
let conversionNode=node.getElementsByTagName("conversion");if(conversionNode.length)
this.pixelsPerMeter=Number(conversionNode[0].getAttribute("pixelsPerMeter"));}
createBody(def)
{let body=this.world.createBody(def);if(body===null)
throw new Error(`Error creating physics body!`);this.bodyAry.push(body);return body;}
destroyBody(body)
{let index=this.bodySet.indexOf(body);if(index!==-1)
{this.world.destroyBody(body);this.bodyAry.splice(index,1);}
}
fixedTimeStep()
{if(this.active)
{this.timer+=__WEBPACK_IMPORTED_MODULE_0__utilities_highresolutiontimer__["a"].elapsedTime;if(this.timer>this.stepTime)
{this.timer=__WEBPACK_IMPORTED_MODULE_1__utilities_genfunc__["c"](this.timer,this.stepTime);this.world.step(this.stepTimeSec,this.velStepCount,this.posStepCount);}
}
}
variableTimeStep()
{if(this.active)
{this.world.step(__WEBPACK_IMPORTED_MODULE_0__utilities_highresolutiontimer__["a"].elapsedTime/1000.0,this.velStepCount,this.posStepCount);}
}
setFPS(fps)
{if(fps>1.0)
{this.stepTimeSec=1.0/fps;this.stepTime=this.stepTimeSec*1000.0;this.timer=this.stepTime;}
}
}
__webpack_exports__["a"]=PhysicsWorld2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class PhysicsWorld3D
{constructor()
{}
}
__webpack_exports__["a"]=PhysicsWorld3D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_2__common_dynamicoffset__=__webpack_require__(32);var __WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_4__utilities_xmlparsehelper__=__webpack_require__(9);class ControlBase extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor(group)
{super();this.group=group;this.name=null;this.type=null;this.stringAry=[];this.faction=null;this.dynamicOffset=null;}
loadFromNode(node)
{let attr=node.getAttribute('name');if(attr)
this.name=attr;attr=node.getAttribute('faction');if(attr)
this.faction=attr;this.loadTransFromNode(node);this.loadDynamicOffsetFromNode(node);let stringLstNode=node.getElementsByTagName('fontStringLst');if(stringLstNode.length)
{let stringNode=stringLstNode[0].getElementsByTagName('string');for(let i=0;i<stringNode.length;++i)
this.stringAry.push(stringNode[i].getAttribute('text'));}
let filePathNode=node.getElementsByTagName('filePath');if(filePathNode.length)
{let controlFilePath=filePathNode[0].getAttribute('file');this.loadControlFromNode(__WEBPACK_IMPORTED_MODULE_3__utilities_assetholder__["a"].get(this.group,controlFilePath));}
}
loadControlFromNode(node)
{}
loadDynamicOffsetFromNode(node)
{this.dynamicOffset=__WEBPACK_IMPORTED_MODULE_4__utilities_xmlparsehelper__["c"](node);this.setDynamicPos();}
setDynamicPos()
{if(this.dynamicOffset)
this.setPos(this.dynamicOffset.getPos(__WEBPACK_IMPORTED_MODULE_1__utilities_settings__["a"].defaultSize_half));}
}
__webpack_exports__["a"]=ControlBase;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_point__=__webpack_require__(7);class Quad
{constructor()
{this.point=[new __WEBPACK_IMPORTED_MODULE_0__common_point__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_point__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_point__["a"],new __WEBPACK_IMPORTED_MODULE_0__common_point__["a"]];}
isPointInQuad(x,y)
{let result=false;for(let i=0,j=3;i<4;j=i++)
{if(((this.point[i].y>y)!=(this.point[j].y>y))&& 
(x<(this.point[j].x-this.point[i].x)*(y-this.point[i].y)/(this.point[j].y-this.point[i].y)+this.point[i].x))
{result=!result;}
}
return result;}
}
__webpack_exports__["a"]=Quad;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class UILabel extends __WEBPACK_IMPORTED_MODULE_0__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_1__common_defs__["J"];}
}
__webpack_exports__["a"]=UILabel;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class UIButton extends __WEBPACK_IMPORTED_MODULE_0__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_1__common_defs__["G"];}
}
__webpack_exports__["a"]=UIButton;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__=__webpack_require__(28);var __WEBPACK_IMPORTED_MODULE_1__utilities_bitmask__=__webpack_require__(33);var __WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_3__common_defs__=__webpack_require__(0);class UIButtonList extends __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_3__common_defs__["H"];this.activeIndex=0;this.imageLstIndex=-1;this.actionMask=new __WEBPACK_IMPORTED_MODULE_1__utilities_bitmask__["a"];}
loadFromNode(node)
{super.loadFromNode(node);let actionResponseNode=node.getElementsByTagName('actionResponse');let attr=actionResponseNode[0].getAttribute('up');if(attr &&(attr==='true'))
{this.actionMask.add(__WEBPACK_IMPORTED_MODULE_3__common_defs__["q"]);}
attr=actionResponseNode[0].getAttribute('down');if(attr &&(attr==='true'))
{this.actionMask.add(__WEBPACK_IMPORTED_MODULE_3__common_defs__["n"]);}
attr=actionResponseNode[0].getAttribute('left');if(attr &&(attr==='true'))
{this.actionMask.add(__WEBPACK_IMPORTED_MODULE_3__common_defs__["o"]);}
attr=actionResponseNode[0].getAttribute('right');if(attr &&(attr==='true'))
{this.actionMask.add(__WEBPACK_IMPORTED_MODULE_3__common_defs__["p"]);}
}
loadControlFromNode(node)
{super.loadControlFromNode(node);for(let i=0;i<this.spriteAry.length;++i)
{if(this.spriteAry[i].objData.visualData.getFrameCount()>1)
{this.imageLstIndex=i;break;}
}
}
inc()
{__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_3__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_3__common_defs__["F"],this.subControlAry[__WEBPACK_IMPORTED_MODULE_3__common_defs__["b"]]);}
dec()
{__WEBPACK_IMPORTED_MODULE_2__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_3__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_3__common_defs__["F"],this.subControlAry[__WEBPACK_IMPORTED_MODULE_3__common_defs__["a"]]);}
onDownAction(event)
{if((event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__common_defs__["k"])&& this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["n"]))
this.dec();}
onUpAction(event)
{if((event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__common_defs__["k"])&& this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["q"]))
this.inc();}
onLeftAction(event)
{if((event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__common_defs__["k"])&& this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["o"]))
this.dec();}
onRightAction(event)
{if((event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_3__common_defs__["k"])&& this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["p"]))
this.inc();}
onDownScroll(event)
{if(this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["n"]))
this.dec();}
onUpScroll(event)
{if(this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["q"]))
this.inc();}
onLeftScroll(event)
{if(this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["o"]))
this.dec();}
onRightScroll(event)
{if(this.actionMask.isSet(__WEBPACK_IMPORTED_MODULE_3__common_defs__["p"]))
this.inc();}
onStateChange(event)
{super.onStateChange(event);let state=event.detail.arg[0];if(state===__WEBPACK_IMPORTED_MODULE_3__common_defs__["F"])
{if(this.subControlAry[__WEBPACK_IMPORTED_MODULE_3__common_defs__["a"]]==event.detail.arg[1])
{this.decList();this.updateDisplay(this.activeIndex);this.smartExecuteAction();}
else if(this.subControlAry[__WEBPACK_IMPORTED_MODULE_3__common_defs__["b"]]==event.detail.arg[1])
{this.incList();this.updateDisplay(this.activeIndex);this.smartExecuteAction();}
}
}
incList()
{if(this.stringAry.length)
this.activeIndex=(this.activeIndex+1)% this.stringAry.length;}
decList()
{if(this.stringAry.length)
{if(this.activeIndex>0)
this.activeIndex=(this.activeIndex-1)% this.stringAry.length;else
this.activeIndex=this.stringAry.length-1;}
}
updateDisplay(index)
{this.activeIndex=index;this.createFontString(this.activeIndex);if(this.imageLstIndex>-1)
this.spriteAry[this.imageLstIndex].visualComponent.setFrame(this.activeIndex);}
}
__webpack_exports__["a"]=UIButtonList;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class UICheckBox extends __WEBPACK_IMPORTED_MODULE_0__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_1__common_defs__["I"];this.toggleState=false;}
onSelectExecute(event)
{if(this.state===__WEBPACK_IMPORTED_MODULE_1__common_defs__["F"])
this.toggleState=!this.toggleState;super.onSelectExecute(event);}
render(matrix)
{for(let i=0;i<this.spriteAry.length-1;++i)
this.spriteAry[i].render(matrix);if(this.toggleState===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_64"])
this.spriteAry[this.spriteAry.length-1].render(matrix);}
}
__webpack_exports__["a"]=UICheckBox;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__=__webpack_require__(28);var __WEBPACK_IMPORTED_MODULE_1__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_3__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_4__common_defs__=__webpack_require__(0);class UISlider extends __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_4__common_defs__["N"];this.travelDistPixels=0;this.orientation=__WEBPACK_IMPORTED_MODULE_4__common_defs__["_42"];this.minValue=0;this.maxValue=0;this.curValue=0;this.incValue=0;this.displayValueAsInt=false;this.defaultPos=new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"];this.sliderBtnHold=false;this.pressType=__WEBPACK_IMPORTED_MODULE_4__common_defs__["l"];}
loadFromNode(node)
{super.loadFromNode(node);let settingsNode=node.getElementsByTagName('settings');if(settingsNode.length)
{let attr=settingsNode[0].getAttribute('orientation');if(attr &&(attr==='VERT'))
this.orientation=__WEBPACK_IMPORTED_MODULE_4__common_defs__["_43"];attr=settingsNode[0].getAttribute('minValue');if(attr)
this.minValue=Number(attr);attr=settingsNode[0].getAttribute('maxValue');if(attr)
this.maxValue=Number(attr);attr=settingsNode[0].getAttribute('incValue');if(attr)
this.incValue=Number(attr);attr=settingsNode[0].getAttribute('defValue');if(attr)
this.curValue=Number(attr);attr=settingsNode[0].getAttribute('displayValueAsInt');if(attr &&(attr==='true'))
this.displayValueAsInt=true;}
}
loadControlFromNode(node)
{super.loadControlFromNode(node);this.defaultPos.copy(this.subControlAry[0].pos);let settingsNode=node.getElementsByTagName('settings');if(settingsNode.length)
{let attr=settingsNode[0].getAttribute('maxTravelDistPixels');if(attr)
this.travelDistPixels=Number(attr);}
}
init()
{super.init();this.updateSlider();}
onLeftAction(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_4__common_defs__["k"])
this.handleSliderChange(-this.incValue,true);}
onRightAction(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_4__common_defs__["k"])
this.handleSliderChange(this.incValue,true);}
onLeftScroll(event)
{this.handleSliderChange(-this.incValue);}
onRightScroll(event)
{this.handleSliderChange(this.incValue);}
onMouseMove(event)
{let result=super.onMouseMove(event);if(this.isActive()&&(this.pressType===__WEBPACK_IMPORTED_MODULE_4__common_defs__["k"]))
{let oneOverAspectRatio=1.0/__WEBPACK_IMPORTED_MODULE_2__utilities_settings__["a"].orthoAspectRatio.h;if(this.orientation===__WEBPACK_IMPORTED_MODULE_4__common_defs__["_42"])
this.incSliderMovePos(event.movementX*oneOverAspectRatio);else
this.incSliderMovePos(event.movementY*oneOverAspectRatio);this.smartExecuteAction();}
return result;}
handleSelectAction(event)
{let result=this.isActive()&&
(event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_46"]]===__WEBPACK_IMPORTED_MODULE_4__common_defs__["_57"])&&
this.isPointInControl(event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_47"]],event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_48"]]);if(result &&(event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_49"]]===this.mouseSelectType))
{this.pressType=this.mouseSelectType;if(event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_49"]]===__WEBPACK_IMPORTED_MODULE_4__common_defs__["k"])
{this.prepareControlScriptFactory(__WEBPACK_IMPORTED_MODULE_4__common_defs__["F"]);let ratio=1.0/__WEBPACK_IMPORTED_MODULE_2__utilities_settings__["a"].orthoAspectRatio.h;if(this.orientation===__WEBPACK_IMPORTED_MODULE_4__common_defs__["_42"])
this.incSliderMovePos((event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_47"]]-this.subControlAry[0].collisionCenter.x)*ratio);else
this.incSliderMovePos((event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_48"]]-this.subControlAry[0].collisionCenter.y)*ratio);this.smartExecuteAction();}
}
else if(event.detail.arg[__WEBPACK_IMPORTED_MODULE_4__common_defs__["_49"]]!==this.mouseSelectType)
{this.pressType=__WEBPACK_IMPORTED_MODULE_4__common_defs__["l"];}
return result;}
deactivateControl()
{super.deactivateControl();this.pressType=__WEBPACK_IMPORTED_MODULE_4__common_defs__["l"];}
handleSliderChange(value,prepareOnSelect=false)
{if(this.isActive())
{if(prepareOnSelect)
this.prepareControlScriptFactory(__WEBPACK_IMPORTED_MODULE_4__common_defs__["F"]);__WEBPACK_IMPORTED_MODULE_3__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_4__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_4__common_defs__["F"],this.subControlAry[0]);this.incSlider(value);this.smartExecuteAction();}
}
setSlider(value=0)
{this.curValue=value;this.updateSlider();}
incSlider(value=0)
{this.curValue+=value;this.updateSlider();}
incSliderMovePos(value)
{this.curValue+=value*((this.maxValue-this.minValue)/this.travelDistPixels);this.updateSlider();}
updateSlider()
{this.capSliderValue();this.setSliderPos();if(this.stringAry.length)
{let valueStr;if(this.displayValueAsInt)
valueStr=this.stringAry[this.stringAry.length-1].replace(/%d/i,Math.trunc(this.curValue));else
valueStr=this.stringAry[this.stringAry.length-1].replace(/%d/i,this.curValue);this.createFontStr(valueStr);}
}
capSliderValue()
{if(this.curValue<this.minValue)
this.curValue=this.minValue;else if(this.curValue>this.maxValue)
this.curValue=this.maxValue;}
setSliderPos()
{if(Math.abs(this.maxValue)>0.001)
{let startPos=-(this.travelDistPixels/2);let pixelsPerValue=this.travelDistPixels/(this.maxValue-this.minValue);let pos=startPos+(pixelsPerValue*(this.curValue-this.minValue));if(this.orientation===__WEBPACK_IMPORTED_MODULE_4__common_defs__["_42"])
this.subControlAry[0].setPosXYZ(this.defaultPos.x+pos,this.defaultPos.y);else
this.subControlAry[0].setPosXYZ(this.defaultPos.x,this.defaultPos.y+-pos);}
}
isMouseDown()
{return(this.pressType===__WEBPACK_IMPORTED_MODULE_4__common_defs__["k"]);}
}
__webpack_exports__["a"]=UISlider;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__=__webpack_require__(28);var __WEBPACK_IMPORTED_MODULE_1__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_4__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_7__utilities_xmlparsehelper__=__webpack_require__(9);var __WEBPACK_IMPORTED_MODULE_8__uicontrolfactory__=__webpack_require__(37);var __WEBPACK_IMPORTED_MODULE_9__common_defs__=__webpack_require__(0);const IN_VIEWABLE_AREA=1;const NEW_ACTIVE_CTRL=2;class UIScrollBox extends __WEBPACK_IMPORTED_MODULE_0__uisubcontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_9__common_defs__["M"];this.scrollControlAry=[];this.initialOffset=new __WEBPACK_IMPORTED_MODULE_1__common_point__["a"];this.cullHeight=0;this.controlHeight=0;this.scrollCurPos=0;this.visibleCount=0;this.visStartPos=0;this.visEndPos=0;this.maxMoveAmount=0;this.stencilMaskSprite;this.activeScrollCtrl=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"];this.firstScrollCtrlIndex=0;this.defaultOffsetAry=[];this.scrollSpeed=0.05;this.pageSpeed=0.05;this.scrollVector=0;this.paging=0;this.scrollCounter=0;this.scrollDistance=0;this.endScroll=false;this.scrollMsg=false;this.endScrollSelection=false;}
loadFromNode(node)
{super.loadFromNode(node);this.subControlAry[0].maxValue=this.maxMoveAmount;this.subControlAry[0].setSlider();let scrollNode=node.getElementsByTagName('scroll');if(scrollNode.length)
{let attr=scrollNode[0].getAttribute('scrollSpeed');if(attr)
this.scrollSpeed=Number(attr);attr=scrollNode[0].getAttribute('pageSpeed');if(attr)
this.pageSpeed=Number(attr);}
this.setStartEndPos();}
loadControlFromNode(node)
{super.loadControlFromNode(node);let menuControlsNode=node.getElementsByTagName("scrollBoxControlList");if(menuControlsNode.length)
{this.initialOffset=__WEBPACK_IMPORTED_MODULE_7__utilities_xmlparsehelper__["e"](menuControlsNode[0]);let controlInfoNode=menuControlsNode[0].getElementsByTagName("controlInfo");this.controlHeight=Number(controlInfoNode[0].getAttribute("height"));this.visibleCount=Number(controlInfoNode[0].getAttribute("visibleInScrollBox"));let scrollControlNode=menuControlsNode[0].getElementsByTagName("control");for(let i=0;i<scrollControlNode.length;++i)
this.addScrollControlFromNode(scrollControlNode[i]);}
let stencilMaskNode=node.getElementsByTagName("stencilMask");if(stencilMaskNode.length)
{let objectName=stencilMaskNode[0].getAttribute("objectName");this.stencilMaskSprite=new __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__["a"].getData(this.group,objectName));this.cullHeight=(this.stencilMaskSprite.objData.size.w+this.controlHeight)/2;this.stencilMaskSprite.loadTransFromNode(stencilMaskNode[0]);}
}
addScrollControlFromNode(node)
{let ctrl=__WEBPACK_IMPORTED_MODULE_8__uicontrolfactory__["a"](node,this.group);this.scrollControlAry.push(ctrl);let posY=this.initialOffset.y-(this.controlHeight*(this.scrollControlAry.length-1));this.defaultOffsetAry.push(posY);ctrl.setPosXYZ(this.initialOffset.x,posY,this.initialOffset.z);ctrl.deactivateControl();if(this.scrollControlAry.length>this.visibleCount)
this.maxMoveAmount=(this.scrollControlAry.length-this.visibleCount)*this.controlHeight;return ctrl;}
init()
{super.init();for(let i=0;i<this.scrollControlAry.length;++i)
this.scrollControlAry[i].init();}
cleanUp()
{super.cleanUp();for(let i=0;i<this.scrollControlAry.length;++i)
this.scrollControlAry[i].cleanUp();}
handleEvent(event)
{super.handleEvent(event);for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].handleEvent(event);}
onUpAction(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["k"])
this.handleKeyboardGamepadScroll(-1);else if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["m"])
this.endScroll=true;}
onDownAction(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["k"])
this.handleKeyboardGamepadScroll(1);else if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["m"])
this.endScroll=true;}
onUpScroll(event)
{this.handleKeyboardGamepadScroll(-1);this.scrollMsg=true;}
onDownScroll(event)
{this.handleKeyboardGamepadScroll(1);this.scrollMsg=true;}onTabLeft(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["k"])
this.handlePageScroll(-1);}
onTabRight(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["k"])
this.handlePageScroll(1);}
onMouseMove(event)
{let result=super.onMouseMove(event);this.activeScrollCtrl=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"];if(this.subControlAry[0].isMouseDown())
{this.scrollCurPos=this.subControlAry[0].curValue;this.setStartEndPos();this.repositionScrollControls();}
return result;}
update()
{super.update();for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].update();this.handleScrollUpdate();}
doTransform(object)
{super.doTransform(object);for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].doTransform(this);this.stencilMaskSprite.transform(this.matrix,this.wasWorldPosTranformed());}
render(matrix)
{super.render(matrix);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].colorMask(false,false,false,false);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].depthMask(false);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].enable(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].STENCIL_TEST);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].ALWAYS,0x1,0x1);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].REPLACE);this.stencilMaskSprite.render(matrix);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].colorMask(true,true,true,true);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].EQUAL,0x1,0x1);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].KEEP);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].depthMask(true);for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].render(matrix);__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].disable(__WEBPACK_IMPORTED_MODULE_4__system_device__["b"].STENCIL_TEST);}
activateFirstInactiveControl()
{if(super.baseActivateFirstInactiveControl())
{for(let i=0;i<this.scrollControlAry.length;++i)
{if(this.scrollControlAry[i].activateFirstInactiveControl())
{this.activeScrollCtrl=i;break;}
}
}
return this.activeScrollCtrl!=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"];}
handleSelectAction(event)
{let result=super.handleSelectAction(event);for(let i=0;i<this.scrollControlAry.length;++i)
this.scrollControlAry[i].handleSelectAction(event);if((event.detail.arg[__WEBPACK_IMPORTED_MODULE_9__common_defs__["_46"]]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["_57"])&&
(event.detail.arg[__WEBPACK_IMPORTED_MODULE_9__common_defs__["_49"]]===__WEBPACK_IMPORTED_MODULE_9__common_defs__["k"]))
{this.scrollCurPos=this.subControlAry[0].curValue;this.setStartEndPos();this.repositionScrollControls();}
return result;}
handlePageScroll(scrollVector)
{if(this.scrollVector==0)
{if(!this.selectAndRepositionCtrl(scrollVector))
{const SCROLL_DOWN=(scrollVector>0);const SCROLL_UP=(scrollVector<0);if((SCROLL_UP &&(this.firstScrollCtrlIndex>0))||
(SCROLL_DOWN &&(this.firstScrollCtrlIndex+this.visibleCount<this.scrollControlAry.length)))
{let visibleCount=this.visibleCount;if(SCROLL_UP &&(visibleCount>this.firstScrollCtrlIndex))
{visibleCount=this.firstScrollCtrlIndex;}
else if(SCROLL_DOWN &&
((visibleCount+this.firstScrollCtrlIndex+this.visibleCount-1)>=this.scrollControlAry.length))
{visibleCount=this.scrollControlAry.length-this.firstScrollCtrlIndex-this.visibleCount;}
this.initScrolling(scrollVector,this.controlHeight*visibleCount,true,true);if(this.scrollVector)
{if(this.activeScrollCtrl!=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"])
this.scrollControlAry[this.activeScrollCtrl].deactivateControl();}
}
else
{this.activeScrollCtrl=this.firstScrollCtrlIndex;if(SCROLL_DOWN)
this.activeScrollCtrl+=this.visibleCount-1;if(!this.activateScrollCtrl(this.activeScrollCtrl))
this.selectNextControl(-scrollVector);}
}
}
}
handleKeyboardGamepadScroll(scrollVector)
{if(!this.selectAndRepositionCtrl(scrollVector))
{let scrollResult=this.selectNextControl(scrollVector);if(!(scrollResult & IN_VIEWABLE_AREA))
{this.initScrolling(scrollVector,this.controlHeight);}
}
}
selectNextControl(scrollVector)
{this.setActiveCtrlToViewableArea(scrollVector);let scrollResult=this.scrollToTheNextCtrlInViewableArea(scrollVector);if((scrollResult & IN_VIEWABLE_AREA)&&!(scrollResult & NEW_ACTIVE_CTRL))
{__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_9__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_9__common_defs__["A"],this.scrollControlAry[this.activeScrollCtrl]);}
return scrollResult;}
selectAndRepositionCtrl(scrollVector)
{if(this.setActiveCtrlToViewableArea(scrollVector))
{if(!this.activateScrollCtrl(this.activeScrollCtrl))
this.selectNextControl(1);let diff=this.getControlAlignment();if(diff>0.1)
{let pos=this.scrollCurPos/this.controlHeight;let nextCtrl=(this.activeScrollCtrl-this.firstScrollCtrlIndex)*this.controlHeight;if(nextCtrl||(this.firstScrollCtrlIndex>pos))
this.initScrolling(1,this.controlHeight-diff,false);else
this.initScrolling(-1,diff,false);}
return true;}
return false;}
selectPagedControl(scrollVector)
{this.activeScrollCtrl+=scrollVector*this.visibleCount;if(this.activeScrollCtrl<=0)
{this.activeScrollCtrl=0;scrollVector=1;}
else if(this.activeScrollCtrl>=this.scrollControlAry.length-1)
{this.activeScrollCtrl=this.scrollControlAry.size()-1;scrollVector=-1;}
if(!this.activateScrollCtrl(this.activeScrollCtrl))
this.selectNextControl(scrollVector);}
setActiveCtrlToViewableArea(scrollVector)
{if((this.activeScrollCtrl<this.firstScrollCtrlIndex)||(this.activeScrollCtrl>=(this.firstScrollCtrlIndex+this.visibleCount)))
{if(this.activeScrollCtrl!=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"])
this.scrollControlAry[this.activeScrollCtrl].deactivateControl();this.activeScrollCtrl=this.firstScrollCtrlIndex;return true;}
return false;}
scrollToTheNextCtrlInViewableArea(scrollVector)
{let newActiveCtrl=0;let inView=this.inView(this.activeScrollCtrl,scrollVector);if(inView)
{let tmpScrollCtrl=this.activeScrollCtrl;do
{tmpScrollCtrl+=scrollVector;if(this.activateScrollCtrl(tmpScrollCtrl))
{newActiveCtrl=NEW_ACTIVE_CTRL;this.activeScrollCtrl=tmpScrollCtrl;break;}
inView=this.inView(tmpScrollCtrl,scrollVector);}
while(inView);}
let result=inView| newActiveCtrl;return result;}
activateScrollCtrl(scrollControlIndex)
{if((scrollControlIndex!=__WEBPACK_IMPORTED_MODULE_9__common_defs__["_58"])&&
(scrollControlIndex<this.scrollControlAry.length)&&
!this.scrollControlAry[scrollControlIndex].isDisabled())
{__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].dispatchEvent(
__WEBPACK_IMPORTED_MODULE_9__common_defs__["W"],__WEBPACK_IMPORTED_MODULE_9__common_defs__["A"],this.scrollControlAry[scrollControlIndex]);return true;}
return false;}
initScrolling(scrollVector,distance,endScrollSelection=true,paging=false)
{if(this.scrollVector===0)
{const SCROLL_DOWN=(scrollVector>0);const SCROLL_UP=(scrollVector<0);if(((SCROLL_UP &&(this.scrollCurPos>0))||
(SCROLL_DOWN &&(this.scrollCurPos<this.maxMoveAmount))))
{this.scrollVector=scrollVector;this.scrollCounter=0;this.endScroll=false;this.scrollMsg=false;this.paging=paging;this.endScrollSelection=endScrollSelection;this.scrollDistance=distance;}
}
}
handleScrollUpdate()
{if(this.scrollVector)
{let dist=__WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__["a"].elapsedTime*this.scrollSpeed;if(this.paging)
dist=__WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__["a"].elapsedTime*this.pageSpeed;if(this.scrollVector>0)
this.scrollCurPos+=dist;else
this.scrollCurPos-=dist;this.subControlAry[0].setSlider(this.scrollCurPos);this.scrollCounter+=dist;this.setStartEndPos();if(this.scrollCounter>=this.scrollDistance)
{if(this.endScroll||!this.scrollMsg|| this.paging)
{this.alignScrollPostion();if(this.endScrollSelection)
{if(this.paging)
this.selectPagedControl(this.scrollVector);else
this.selectNextControl(this.scrollVector);}
this.scrollVector=0;}
else
{this.scrollDistance+=this.controlHeight;}
}
else if((this.scrollCurPos<0)||(this.scrollCurPos>this.maxMoveAmount))
{this.alignScrollPostion();this.scrollVector=0;}
this.repositionScrollControls();}
}
getControlAlignment()
{let pos=this.scrollCurPos/this.controlHeight;return this.controlHeight*Math.trunc(pos);}
inView(scrollIndex,scrollVector)
{return((scrollVector<0)&&(scrollIndex>this.firstScrollCtrlIndex))||
(((scrollVector>0))&&(scrollIndex<(this.firstScrollCtrlIndex+this.visibleCount-1)));}
findSubControlByName(name)
{let ctrl=super.findSubControlByName(name);for(let i=this.visStartPos;i<this.visEndPos &&(ctrl===null);++i)
ctrl=this.scrollControlAry[i].findControlByName(name);return ctrl;}
findSubControlByRef(control)
{let ctrl=super.findSubControlByRef(control);for(let i=this.visStartPos;i<this.visEndPos &&(ctrl===null);++i)
if(this.scrollControlAry[i]===control)
ctrl=this.scrollControlAry[i];return ctrl;}
onSubControlMouseMove(event)
{let result=super.onSubControlMouseMove(event);if(!result && this.isPointInControl(event.clientX+__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].mouseOffsetX,event.clientY+__WEBPACK_IMPORTED_MODULE_5__managers_eventmanager__["a"].mouseOffsetY))
{for(let i=this.visStartPos;i<this.visEndPos &&!result;++i)
{result=this.scrollControlAry[i].onMouseMove(event);if(result)
this.activeScrollCtrl=i;}
}
return result;}
deactivateSubControl()
{super.deactivateSubControl();for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].deactivateControl();}
setStartEndPos()
{let pos=this.scrollCurPos/this.controlHeight;this.firstScrollCtrlIndex=Math.trunc(pos+0.7);this.visStartPos=Math.trunc(pos);this.visEndPos=this.visStartPos+this.visibleCount+1;if(this.visStartPos<0)
this.visStartPos=0;if(this.visEndPos>this.scrollControlAry.length)
this.visEndPos=this.scrollControlAry.length;}
repositionScrollControls()
{for(let i=this.visStartPos;i<this.visEndPos;++i)
{let pos=this.scrollControlAry[i].pos;let y=this.defaultOffsetAry[i]+this.scrollCurPos;this.scrollControlAry[i].setPosXYZ(pos.x,y,pos.z);}
}
alignScrollPostion()
{if(this.firstScrollCtrlIndex<0)
this.firstScrollCtrlIndex=0;else if((this.firstScrollCtrlIndex+this.visibleCount)>this.scrollControlAry.length)
this.firstScrollCtrlIndex=this.scrollControlAry.length-this.visibleCount;this.scrollCurPos=this.firstScrollCtrlIndex*this.controlHeight;}
deactivateControl()
{this.deactivateSubControl();}
setAlpha(alpha)
{super.setAlpha(alpha);for(let i=this.visStartPos;i<this.visEndPos;++i)
this.scrollControlAry[i].setAlpha(alpha);}
getActiveControl()
{let result=super.getActiveControl();if(result===null)
{for(let i=0;i<this.scrollControlAry.length;++i)
{if(this.scrollControlAry[i].state>__WEBPACK_IMPORTED_MODULE_9__common_defs__["C"])
{result=scrollControlAry[i].getActiveControl();break;}
}
}
return result;}
}
__webpack_exports__["a"]=UIScrollBox;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_timer__=__webpack_require__(29);var __WEBPACK_IMPORTED_MODULE_1__utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_2__common_size__=__webpack_require__(1);var __WEBPACK_IMPORTED_MODULE_3__uicontrol__=__webpack_require__(22);var __WEBPACK_IMPORTED_MODULE_4__script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_5__common_defs__=__webpack_require__(0);var __WEBPACK_IMPORTED_MODULE_6__utilities_xmlparsehelper__=__webpack_require__(9);const EBT_RAMP_UP=0,EBT_LINEAR=1,EBT_HYBRID=2;const EST_AXIS=0,EST_ACCURATE=1;class BangRange
{constructor(target,bangType,velocity,estimatedTime,slowStartTime)
{this.target=target;this.bangType=bangType;this.velocity=velocity;this.estimatedTime=estimatedTime;this.slowStartTime=slowStartTime;}
}
class UIMeter extends __WEBPACK_IMPORTED_MODULE_3__uicontrol__["a"]
{constructor(group)
{super(group);this.type=__WEBPACK_IMPORTED_MODULE_5__common_defs__["K"];this.currentValue=0;this.targetValue=0;this.velocity=0;this.terminalVelocity=0;this.acceleration=0;this.impulse=0;this.lastValue=0;this.fastBangTime=0;this.bangUp=false;this.startUpTimer=new __WEBPACK_IMPORTED_MODULE_0__utilities_timer__["a"];this.bangRange=new BangRange;this.fontSprite=null;this.bangRangeAry=[];this.maxFontStrSize=null;this.bangScaleAdjustment=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"];this.scaleType=EST_AXIS;this.meterScriptFunction=new Map;}
loadFromNode(node)
{super.loadFromNode(node);let bangRangeNode=node.getElementsByTagName('bangRange');if(bangRangeNode.length)
{this.fastBangTime=Number(bangRangeNode[0].getAttribute('fastBangTime'));if(bangRangeNode[0].getAttribute('scaleType')==='accurate')
this.scaleType=EST_ACCURATE;let rangeNode=bangRangeNode[0].getElementsByTagName('range');for(let i=0;i<rangeNode.length;++i)
{let attr=rangeNode[i].getAttribute('bangUpType');let bangType=EBT_RAMP_UP;if(attr==='linear')
bangType=EBT_LINEAR;else if(attr==='hybrid')
bangType=EBT_HYBRID;this.bangRangeAry.push(new BangRange(
Number(rangeNode[i].getAttribute('target')),bangType,Number(rangeNode[i].getAttribute('velocity')),Number(rangeNode[i].getAttribute('estimatedTime')),Number(rangeNode[i].getAttribute('slowStartTime'))));}
}
let meterScriptNode=node.getElementsByTagName('meterScript');if(meterScriptNode.length)
{let attr=meterScriptNode[0].getAttribute("onInit")
if(attr)
this.meterScriptFunction.set(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_30"],__WEBPACK_IMPORTED_MODULE_4__script_scriptmanager__["a"].get(attr));attr=meterScriptNode[0].getAttribute("onStart")
if(attr)
this.meterScriptFunction.set(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_31"],__WEBPACK_IMPORTED_MODULE_4__script_scriptmanager__["a"].get(attr));attr=meterScriptNode[0].getAttribute("onStop")
if(attr)
this.meterScriptFunction.set(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_32"],__WEBPACK_IMPORTED_MODULE_4__script_scriptmanager__["a"].get(attr));attr=meterScriptNode[0].getAttribute("onClear")
if(attr)
this.meterScriptFunction.set(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_29"],__WEBPACK_IMPORTED_MODULE_4__script_scriptmanager__["a"].get(attr));}
this.maxFontStrSize=__WEBPACK_IMPORTED_MODULE_6__utilities_xmlparsehelper__["j"](node);}
loadControlFromNode(controlNode)
{super.loadControlFromNode(controlNode);this.findFontSprite();}
initMeter(fastBangTime,scaleType,sizeW,sizeH)
{this.fastBangTime=fastBangTime;this.scaleType=scaleType;this.maxFontStrSize=new __WEBPACK_IMPORTED_MODULE_2__common_size__["a"](sizeW,sizeH);}
setBangeRange(target,bangUpType,velocity,estimatedTime,slowStartTime)
{this.bangRangeAry.push(
new BangRange(target,bangUpType,velocity,estimatedTime,slowStartTime));}
loadSpriteFromArray(objectNameAry,spriteApplyIndex,stencilMaskSprite=null)
{super.loadSpriteFromArray(objectNameAry);this.findFontSprite();}
findFontSprite()
{for(let i=0;i<this.spriteAry.length;++i)
{if(this.spriteAry[i].visualComponent.isFontSprite())
{this.fontSprite=this.spriteAry[i];break;}
}
if(this.fontSprite==null)
throw new Error(`UI Meter doesn't have a sprite for rendering a font string(${this.name}).`);}
set(amount)
{if((amount>0)&&(amount!==this.currentValue))
{this.lastValue=this.currentValue;this.currentValue=this.targetValue=amount;this.displayValue();}
}
startBangUp(amount)
{if(amount!==this.currentValue)
{this.targetValue=amount;this.bangUp=true;this.setBangRange();}
}
setBangRange()
{let found=false;for(let i=0;i<this.bangRangeAry;++i)
{if((this.targetValue-this.currentValue)<=this.bangRangeAry[i].target)
{found=true;this.initBangRange(this.bangRangeAry[i]);break;}
}
if(!found)
this.initBangRange(this.bangRangeAry[this.bangRangeAry.length-1]);}
initBangRange(bangRange)
{this.bangRange=bangRange;this.terminalVelocity=0.0;this.acceleration=0.0;this.impulse=0.0;this.bangScaleAdjustment.set(1,1);this.fontSprite.setScaleXYZ(1,1,1);this.velocity=bangRange.velocity/1000.0;let range=this.targetValue-this.currentValue;if(bangRange.bangType===EBT_RAMP_UP)
{this.impulse=range/(bangRange.estimatedTime*bangRange.estimatedTime*1000.0);this.acceleration=this.impulse;}
else if(bangRange.bangType===EBT_LINEAR)
{this.acceleration=range/(bangRange.estimatedTime*1000.0);}
else if(bangRange.bangType===EBT_HYBRID)
{this.terminalVelocity=range/(bangRange.estimatedTime*1000.0);this.impulse=range/(bangRange.estimatedTime*bangRange.estimatedTime*500.0);this.acceleration=impulse;}
this.startUpTimer.set(bangRange.slowStartTime);let scriptFunc=this.meterScriptFunction.get(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_31"]);if(scriptFunc)
this.fontSprite.prepareScriptFactory(scriptFunc);}
fastBang()
{if(this.bangUp)
{let acceleration=(this.targetValue-this.currentValue)/this.fastBangTime;if(this.acceleration<acceleration)
this.acceleration=acceleration;}
}
update()
{super.update();if(this.bangUp)
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_1__utilities_highresolutiontimer__["a"].elapsedTime;if(this.bangRange.bangType===EBT_RAMP_UP)
{this.currentValue+=this.velocity*elapsedTime;if(this.startUpTimer.expired())
{this.velocity+=this.acceleration*elapsedTime;this.acceleration+=this.impulse*elapsedTime;}
else
{this.velocity+=this.acceleration*elapsedTime;}
}
else if(this.bangRange.this.bangType===EBT_LINEAR)
{this.currentValue+=this.velocity;if(this.startUpTimer.expired())
this.velocity+=this.acceleration*elapsedTime;}
else if(this.bangRange.bangType===EBT_HYBRID)
{this.currentValue+=this.velocity;if(this.startUpTimer.expired())
{if(this.terminalVelocity>this.acceleration)
{this.velocity+=this.acceleration*elapsedTime;this.acceleration+=this.impulse*elapsedTime;}
else
{this.velocity+=this.acceleration*elapsedTime;}
}
else
{this.velocity+=this.acceleration*elapsedTime;}
}
if(this.lastValue!=this.currentValue)
{this.lastValue=this.currentValue;if(this.currentValue>this.targetValue)
{this.currentValue=this.targetValue;this.bangUp=false;let scriptFunc=this.meterScriptFunction.get(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_31"]);if(scriptFunc)
this.fontSprite.prepareScriptFactory(scriptFunc);}
this.displayValue();}
}
}
displayValue()
{this.fontSprite.visualComponent.createFontString(Math.trunc(this.currentValue).toString());let size=this.fontSprite.visualComponent.getFontSize();if((size.w>this.maxFontStrSize.w)||(size.h>this.maxFontStrSize.h))
{let difW=this.maxFontStrSize.w/size.w;let difH=this.maxFontStrSize.h/size.h;if((difW<this.bangScaleAdjustment.w)||(difH<this.bangScaleAdjustment.h))
{this.bangScaleAdjustment.set(difW,difH);let scaleX=this.fontSprite.scale.x;let scaleY=this.fontSprite.scale.y;if(difW<difH)
{scaleX=difW;if(this.scaleType!==EST_AXIS)
scaleY=difW;}
else
{scaleY=difH;if(this.scaleType!==EST_AXIS)
scaleX=difH;}
this.fontSprite.setScaleXYZ(scaleX,scaleY);}
}
}
clear()
{this.lastValue=this.currentValue=this.targetValue=0;this.bangUp=false;let scriptFunc=this.meterScriptFunction.get(__WEBPACK_IMPORTED_MODULE_5__common_defs__["_29"]);if(scriptFunc)
this.fontSprite.prepareScriptFactory(scriptFunc);else
this.fontSprite.visualComponent.createFontString(this.currentValue.toString());}
isBanging()
{return this.bangUp;}
}
__webpack_exports__["a"]=UIMeter;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_1__common_defs__=__webpack_require__(0);class MenuTree
{constructor(name,menuMap,rootMenu,defaultMenu,interfaceMenu=false)
{this.name=name;this.menuMap=menuMap;this.rootMenu=menuMap.get(rootMenu);this.defaultMenu=menuMap.get(defaultMenu);this.interfaceMenu=interfaceMenu;this.toMenu='';this.menuPathAry=[];this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_37"];}
init()
{this.menuPathAry=[];if(this.rootMenu!==undefined)
{this.menuPathAry.push(this.rootMenu);this.rootMenu.activateMenu();}
}
update()
{if(this.menuPathAry.length)
this.menuPathAry[this.menuPathAry.length-1].update();}
doTransform()
{if(this.menuPathAry.length)
this.menuPathAry[this.menuPathAry.length-1].doTransform();}
render(matrix)
{if(this.menuPathAry.length)
this.menuPathAry[this.menuPathAry.length-1].render(matrix);}
isActive()
{return(this.menuPathAry.length>0);}
hasRootMenu()
{return(this.rootMenu!=undefined);}
handleEvent(event)
{if(!this.interfaceMenu)
{if(this.menuPathAry.length)
this.menuPathAry[this.menuPathAry.length-1].handleEvent(event);if(event instanceof CustomEvent)
{if(this.state===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_37"])
{if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["Y"])
{this.onEscape(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_12"])
{this.onToggle(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["V"])
{this.onBack(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_14"])
{this.onToTree(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_13"])
{this.onToMenu(event);}
}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_15"])
{this.onTransIn(event);}
else if(event.detail.type===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_16"])
{this.onTransOut(event);}
}
}
else
{if((event instanceof CustomEvent)&& event.detail.type<=__WEBPACK_IMPORTED_MODULE_1__common_defs__["Z"])
return;if(this.menuPathAry.length)
this.menuPathAry[this.menuPathAry.length-1].handleEvent(event);}
}
transitionMenu()
{if(this.menuPathAry.length===0)
{if(this.defaultMenu===undefined)
throw new Error('Default menu does not exist!');this.menuPathAry.push(this.defaultMenu);this.toMenu=this.defaultMenu.name;this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_36"];__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_15"],__WEBPACK_IMPORTED_MODULE_1__common_defs__["_50"]);}
else
{if(this.menuPathAry[this.menuPathAry.length-1]!=this.rootMenu)
{this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_36"];__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_16"],__WEBPACK_IMPORTED_MODULE_1__common_defs__["_50"]);}
}
}
onEscape(event)
{let nameStr=event.detail.arg[0];if(this.menuPathAry.length||((nameStr!==null)&&(nameStr===this.name)))
{this.transitionMenu();}
}
onToggle(event)
{let nameStr=event.detail.arg[0];if(this.menuPathAry.length||((nameStr!==null)&&(nameStr===this.name)))
{if(this.rootMenu===undefined)
{this.transitionMenu();if(this.menuPathAry.length>1)
{let curMenu=this.menuPathAry[this.menuPathAry.length-1];this.menuPathAry=[];this.menuPathAry.push(curMenu);}
}
else
{if(this.menuPathAry.length>1)
this.transitionMenu();if(this.menuPathAry.length>2)
{let curMenu=this.menuPathAry[this.menuPathAry.length-1];this.menuPathAry=[];this.menuPathAry.push(this.rootMenu);this.menuPathAry.push(curMenu);}
}
}
}
onBack(event)
{if(this.menuPathAry.length &&(this.menuPathAry[this.menuPathAry.length-1]!=this.rootMenu))
{this.transitionMenu();}
}
onToTree(event)
{let nameStr=event.detail.arg[0];if((nameStr!==null)&&(nameStr===this.name))
{if(this.rootMenu===undefined)
this.transitionMenu();}
}
onToMenu(event)
{if(this.menuPathAry.length && 
(this.menuPathAry[this.menuPathAry.length-1].getActiveControl()==event.detail.arg[1]))
{this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_36"];this.toMenu=event.detail.arg[0];if(this.menuMap.get(this.toMenu)===undefined)
throw new Error(`Menu does not exist!(${this.toMenu}).`);__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_16"],__WEBPACK_IMPORTED_MODULE_1__common_defs__["_50"]);}
}
onTransOut(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_51"])
{if(this.toMenu.length)
{this.menuPathAry.push(this.menuMap.get(this.toMenu));__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_15"],__WEBPACK_IMPORTED_MODULE_1__common_defs__["_50"]);}
else if(this.menuPathAry.length &&(this.menuPathAry[this.menuPathAry.length-1]!==this.rootMenu))
{let menu=this.menuPathAry.pop();menu.reset();if(this.menuPathAry.length)
__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_15"],__WEBPACK_IMPORTED_MODULE_1__common_defs__["_50"]);}
if(this.menuPathAry.length===0)
this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_37"];}
}
onTransIn(event)
{if(event.detail.arg[0]===__WEBPACK_IMPORTED_MODULE_1__common_defs__["_51"])
{__WEBPACK_IMPORTED_MODULE_0__managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_1__common_defs__["_9"],(this.toMenu.length===0)? __WEBPACK_IMPORTED_MODULE_1__common_defs__["j"]:__WEBPACK_IMPORTED_MODULE_1__common_defs__["i"]);this.state=__WEBPACK_IMPORTED_MODULE_1__common_defs__["_37"];this.toMenu='';}
}
getActiveMenu()
{if(this.menuPathAry.length===0)
throw new Error('There is no active menu!');return this.menuPathAry[this.menuPathAry.length-1];}
getScrollParam(msg)
{if(this.menuPathAry.length===0)
throw new Error('There is no active menu!');return this.menuPathAry[this.menuPathAry.length-1].getScrollParam(msg);}
isMenuItemActive()
{if(this.isActive())
{if(this.getActiveMenu().getActiveControl()!==null)
return false;}
return false;}
}
__webpack_exports__["a"]=MenuTree;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Sound
{constructor(type=0)
{this.type=type;this.context=null;this.buffer=null;this.source=null;this.defaultVolume=1;this.gainNode=null;this.startTime=null;this.paused=false;this.playDuration=0;}
loadFromNode(node)
{let attr=node.getAttribute('volume');if(attr)
this.defaultVolume=Number(attr);}
init(context,buffer)
{this.context=context;this.buffer=buffer;this.gainNode=this.context.createGain();this.gainNode.gain.value=this.defaultVolume;}
play(loop=false,offset=0)
{this.stop();this.playDuration=offset;this.source=this.context.createBufferSource();this.source.buffer=this.buffer;this.source.loop=loop;this.source.connect(this.gainNode);this.gainNode.connect(this.context.destination);this.startTime=this.context.currentTime;this.source.start(0,offset);}
stop()
{if(this.startTime)
{this.startTime=null;this.paused=false;this.playDuration=0;this.source.stop();}
}
pause()
{if(!this.paused && this.startTime)
{this.paused=true;this.playDuration+=(this.context.currentTime-this.startTime);this.source.stop();}
}
resume()
{if(this.paused)
{this.paused=false;this.play(false,this.playDuration);}
}
setVolume(volume)
{if(this.gainNode)
this.gainNode.gain.value=volume;}
setVolume(volume)
{if(this.gainNode)
return this.gainNode.gain.value;return 0;}
isPlaying()
{return(this.startTime!==null);}
isPaused()
{return this.paused;}
}
__webpack_exports__["a"]=Sound;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_genfunc__=__webpack_require__(3);const EST_NULL=0,EST_RANDOM=1,EST_SEQUENTIAL=2;class PlayList
{constructor()
{this.counter=0;this.current=0;this.type=EST_NULL;this.soundAry=[];}
loadFromNode(node,soundGroupMap,group,filePath)
{let playtype=node.getAttribute('playtype');if(playtype)
{if(playtype==='random')
this.type=EST_RANDOM;else if(playtype==='sequential')
this.type=EST_SEQUENTIAL;}
let soundNode=node.children;if(soundNode.length)
{for(let i=0;i<soundNode.length;++i)
{let id=soundNode[i].getAttribute("id");let snd=soundGroupMap.get(id);if(snd)
this.soundAry.push(snd);else
throw new Error(`Playlist sound Id does not exist(${id},${group},${filePath})!`);}
}
}
getSound()
{if((this.type===EST_RANDOM)&&(this.counter===0))
__WEBPACK_IMPORTED_MODULE_0__utilities_genfunc__["e"](this.soundAry);this.current=this.counter;this.counter=(this.counter+1)% this.soundAry.length;return this.soundAry[this.current];}
play(channel,loopCount)
{if((this.type===EST_RANDOM)&&(this.counter===0))
__WEBPACK_IMPORTED_MODULE_0__utilities_genfunc__["e"](this.soundAry);this.current=this.counter;this.soundAry[tihs.current].play(channel,loopCount);this.counter=(this.counter+1)% this.soundAry.length;}
stop()
{this.soundAry[this.current].stop();}
pause()
{this.soundAry[this.current].pause();}
resume()
{this.soundAry[this.current].resume();}
setVolume(volume)
{this.soundAry[this.current].setVolume(volume);}
getVolume()
{return this.soundAry[this.current].getVolume();}
isPlaying()
{return this.soundAry[this.current].isPlaying();}
isPaused()
{return this.soundAry[this.current].isPaused();}
}
__webpack_exports__["a"]=PlayList;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__mathsymbol__=__webpack_require__(100);var __WEBPACK_IMPORTED_MODULE_1__stripset__=__webpack_require__(101);var __WEBPACK_IMPORTED_MODULE_2__paycombo__=__webpack_require__(102);var __WEBPACK_IMPORTED_MODULE_3__paytableset__=__webpack_require__(103);var __WEBPACK_IMPORTED_MODULE_4__weightedtable__=__webpack_require__(104);var __WEBPACK_IMPORTED_MODULE_5__valuetable__=__webpack_require__(54);var __WEBPACK_IMPORTED_MODULE_6__slotdefs__=__webpack_require__(13);class SlotMath
{constructor(group,id)
{this.group=group;this.id=id;this.paylineSetId;this.percenatge;this.symbolSetMapMap=new Map;this.stripMapAry=new Map;this.stripSetMapAry=new Map;this.payComboMapAry=new Map;this.paytableSetMapAry=new Map;this.weightedTableMap=new Map;this.valueTableMap=new Map;}
getSymbolSet(id)
{let symbSet=this.symbolSetMapMap.get(id);if(!symbSet)
throw new Error(`Math symbol set not found(${this.group},${id})!`);return symbSet;}
getSlotStrip(id)
{let strip=this.stripMapAry.get(id);if(!strip)
throw new Error(`Reel strip not found(${this.group},${id})!`);return strip;}
getSlotStripSet(id)
{let stripSet=this.stripSetMapAry.get(id);if(!stripSet)
throw new Error(`Reel strip set not found(${this.group},${id})!`);return stripSet;}
getPayComboSet(id)
{let payCombo=this.payComboMapAry.get(id);if(!payCombo)
throw new Error(`Pay combo set not found(${this.group},${id})!`);return payCombo;}
getPaytableSet(id)
{let paytableSet=this.paytableSetMapAry.get(id);if(!paytableSet)
throw new Error(`Paytable set not found(${this.group},${id})!`);return paytableSet;}
getWeightedTable(id)
{let weightedTable=this.weightedTableMap.get(id);if(!weightedTable)
throw new Error(`Weighted table not found(${this.group},${id})!`);return weightedTable;}
getValueTable(id)
{let valueTable=this.valueTableMap.get(id);if(!valueTable)
throw new Error(`Valuetable not found(${this.group},${id})!`);return valueTable;}
loadFromNode(node)
{this.paylineSetId=node.getAttribute('paylineSetId');this.percenatge=Number(node.getAttribute('percentage'));this.loadSymbolSetsFromNode(node);this.loadStripFromNode(node);this.loadStripSetListFromNode(node);this.loadPayComboFromNode(node);this.loadPaytableSetListFromNode(node);this.loadWeightedTableFromNode(node);this.loadValueTableFromNode(node);}
loadSymbolSetsFromNode(node)
{let symbSetNode=node.getElementsByTagName('symbolSetList')[0].children;for(let symbLst=0;symbLst<symbSetNode.length;++symbLst)
{let setId=symbSetNode[symbLst].getAttribute('id');if(this.symbolSetMapMap.has(setId))
throw new Error(`Duplicate symbol set name(${setId},${this.group})!`);let symbolSetMap=new Map;this.symbolSetMapMap.set(setId,symbolSetMap);let wildLstNode=symbSetNode[symbLst].getElementsByTagName('wildSymbolList');let wildMatchesMap=new Map;if(wildLstNode.length)
{let wildNode=wildLstNode[0].children;for(let wildLst=0;wildLst<wildNode.length;++wildLst)
{let wildId=wildNode[wildLst].getAttribute('id');if(wildMatchesMap.has(wildId))
throw new Error(`Duplicate wild symbol in math file(${wildId},${this.group})!`);let symbAry=[];wildMatchesMap.set(wildId,symbAry);let symbNode=wildNode[wildLst].children;for(let symb=0;symb<symbNode.length;++symb)
{let id=symbNode[symb].getAttribute('id');symbAry.push(id);}
}
}
let symbNode=symbSetNode[symbLst].getElementsByTagName('symbolList')[0].children;for(let symb=0;symb<symbNode.length;++symb)
{let symbId=symbNode[symb].getAttribute('id');if(symbolSetMap.has(symbId))
throw new Error(`Duplicate symbol name(${symbId},${this.group})!`);let wildMatchAry=wildMatchesMap.get(symbId);if(wildMatchAry===undefined)
wildMatchAry=[];symbolSetMap.set(symbId,new __WEBPACK_IMPORTED_MODULE_0__mathsymbol__["a"](symbId,wildMatchAry));if(wildMatchAry.length)
wildMatchesMap.delete(symbId);}
if(wildMatchesMap.length)
throw new Error(`Wild symbol defined but doesn not exist in symbol set(${this.group})!`);}
}
loadStripFromNode(node)
{let stripNode=node.getElementsByTagName('stripList')[0].children;for(let i=0;i<stripNode.length;++i)
{let stripId=stripNode[i].getAttribute('id');let symbSetId=stripNode[i].getAttribute('symbSetId');let symbolSetMap=this.symbolSetMapMap.get(symbSetId);if(symbolSetMap===undefined)
throw new Error(`Can't find reel strip symbol set name(${symbSetId},${this.group})!`);if(this.stripMapAry.has(stripId))
throw new Error(`Duplicate reel strip name(${stripId},${this.group})!`);let mathSymbolAry=[];this.stripMapAry.set(stripId,mathSymbolAry);let symbolNode=stripNode[i].children;for(let j=0;j<symbolNode.length;++j)
{let symbId=symbolNode[j].getAttribute('id');let mathSymbol=symbolSetMap.get(symbId);if(mathSymbol===undefined)
throw new Error(`Math symbol not found in symbol set(${stripId},${this.group})!`);let weight=symbolNode[j].getAttribute('weight');if(weight)
mathSymbol=new __WEBPACK_IMPORTED_MODULE_0__mathsymbol__["a"](mathSymbol.id,mathSymbol.wildMatches,Number(weight));mathSymbolAry.push(mathSymbol);}
}
}
loadStripSetListFromNode(node)
{let stripSetNode=node.getElementsByTagName('stripSetList')[0].children;for(let set=0;set<stripSetNode.length;++set)
{let stripSetId=stripSetNode[set].getAttribute('id');if(this.stripSetMapAry.has(stripSetId))
throw new Error(`Duplicate reel strip set name(${stripSetId},${this.group})!`);let stripSetAry=[];this.stripSetMapAry.set(stripSetId,stripSetAry);let stripNode=stripSetNode[set].children;for(let tbl=0;tbl<stripNode.length;++tbl)
{let stripId=stripNode[tbl].getAttribute('id');if(!this.stripMapAry.has(stripId))
throw new Error(`Reel strip not found in reel strip list(${stripId},${this.group})!`);let evalSymbIndexAry=[];let evalIndexNode=stripNode[tbl].children;for(let i=0;i<evalIndexNode.length;++i)
evalSymbIndexAry.push(Number(evalIndexNode[i].getAttribute('index')));stripSetAry.push(new __WEBPACK_IMPORTED_MODULE_1__stripset__["a"](stripId,evalSymbIndexAry));}
}
}
loadPayComboFromNode(node)
{let payComboSetLstNode=node.getElementsByTagName('comboSetList');if(payComboSetLstNode.length)
{let payComboSetNode=payComboSetLstNode[0].children;for(let set=0;set<payComboSetNode.length;++set)
{let payComboSetId=payComboSetNode[set].getAttribute('id');if(this.payComboMapAry.has(payComboSetId))
throw new Error(`Duplicate pay combo set name(${payComboSetId},${this.group})!`);let payComboAry=[];this.payComboMapAry.set(payComboSetId,payComboAry);let payComboNode=payComboSetNode[set].children;for(let pay=0;pay<payComboNode.length;++pay)
{let symb=payComboNode[pay].getAttribute('symb');let count=Number(payComboNode[pay].getAttribute('count'));let award=Number(payComboNode[pay].getAttribute('award'));let bonusCode=0;let attr=payComboNode[pay].getAttribute('bonusCode');if(attr)
bonusCode=Number(attr);payComboAry.push(new __WEBPACK_IMPORTED_MODULE_2__paycombo__["a"](symb,count,award,bonusCode));}
}
}
}
loadPaytableSetListFromNode(node)
{let paytableSetNode=node.getElementsByTagName('paytableSetList')[0].children;for(let set=0;set<paytableSetNode.length;++set)
{let paytableSetId=paytableSetNode[set].getAttribute('id');if(this.paytableSetMapAry.has(paytableSetId))
throw new Error(`Duplicate paytable set name(${paytableSetId},${this.group})!`);let paytableSetAry=[];this.paytableSetMapAry.set(paytableSetId,paytableSetAry);let paytableNode=paytableSetNode[set].children;for(let tbl=0;tbl<paytableNode.length;++tbl)
{let paytableType=__WEBPACK_IMPORTED_MODULE_6__slotdefs__["e"];if(paytableNode[tbl].getAttribute('type')==='scatter')
paytableType=__WEBPACK_IMPORTED_MODULE_6__slotdefs__["f"];let paytableStrId=paytableNode[tbl].getAttribute('id');if(!this.payComboMapAry.has(paytableStrId))
throw new Error(`Pay combo not found in paytable list(${paytableStrId},${this.group})!`);paytableSetAry.push(new __WEBPACK_IMPORTED_MODULE_3__paytableset__["a"](paytableType,paytableStrId));}
}
}
loadWeightedTableFromNode(node)
{let weightedTableLstNode=node.getElementsByTagName('weightedTableList');if(weightedTableLstNode.length)
{let weightedTableNode=weightedTableLstNode[0].children;for(let set=0;set<weightedTableNode.length;++set)
{let weightedTableId=weightedTableNode[set].getAttribute('id');if(this.weightedTableMap.has(weightedTableId))
throw new Error(`uplicate weighted table name(${weightedTableId},${this.group})!`);let totalWeight=0;let weightAry=[];let valueAry=[];let tableNode=weightedTableNode[set].children;for(let tbl=0;tbl<tableNode.length;++tbl)
{let weight=Number(tableNode[tbl].getAttribute('weight'));let value=Number(tableNode[tbl].getAttribute('value'));totalWeight+=weight;weightAry.push(weight);valueAry.push(value);}
this.weightedTableMap.set(weightedTableId,new __WEBPACK_IMPORTED_MODULE_4__weightedtable__["a"](totalWeight,weightAry,valueAry));}
}
}
loadValueTableFromNode(node)
{let valueTableLstNode=node.getElementsByTagName('valueTableList');if(valueTableLstNode.length)
{let valueTableNode=valueTableLstNode[0].children;for(let set=0;set<valueTableNode.length;++set)
{let valueTableId=valueTableNode[set].getAttribute('id');if(this.valueTableMap.has(valueTableId))
throw new Error(`uplicate value table name(${valueTableId},${this.group})!`);let valueAry=[];let tableNode=valueTableNode[set].children;for(let tbl=0;tbl<tableNode.length;++tbl)
{let value=Number(tableNode[tbl].getAttribute('value'));valueAry.push(value);}
this.valueTableMap.set(valueTableId,new __WEBPACK_IMPORTED_MODULE_5__valuetable__["a"](valueAry));}
}
}
}
__webpack_exports__["a"]=SlotMath;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class MathSymbol
{constructor(id,wildMatches,weight=1)
{this.id=id;this.weight=weight;this.wildMatches=wildMatches;}
isWild()
{return(this.wildMatches.length>0);}
isWildFor(symbolID)
{return(this.wildMatches.indexOf(symbolID)!==-1);}
isMatch(symbolID)
{return((this.id===symbolID)|| this.isWildFor(symbolID));}
isEquil(symbolID)
{if(this.id==symbolID)
return true;return false;}
}
__webpack_exports__["a"]=MathSymbol;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class StripSet
{constructor(id,evalSymbIndexAry)
{this.id=id;this.evalSymbIndexAry=evalSymbIndexAry;}
}
__webpack_exports__["a"]=StripSet;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class PayCombo
{constructor(symbol,count,award,bonusCode)
{this.symbol=symbol;this.count=count;this.award=award;this.bonusCode=bonusCode;}
}
__webpack_exports__["a"]=PayCombo;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class PaytableSet
{constructor(type,id)
{this.type=type;this.id=id;}
}
__webpack_exports__["a"]=PaytableSet;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__valuetable__=__webpack_require__(54);class WeightedTable extends __WEBPACK_IMPORTED_MODULE_0__valuetable__["a"]
{constructor(totalWeight,weightAry,valueAry)
{super(valueAry);this.totalWeight=totalWeight;this.weightAry=weightAry;}
getWeightedValue(rngValue)
{let index=0;let weightCount=0;for(let i=0;i<this.weightAry.length;++i)
{weightCount+=this.weightAry[i];if(rngValue<=weightCount)
break;++index;}
return getValue(index);}
}
__webpack_exports__["a"]=WeightedTable;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Payline
{constructor()
{this.line=[];this.scatter=[];}
}
__webpack_exports__["a"]=Payline;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class StateMessage
{constructor()
{this.loadState=0;this.unloadState=0;}
setMsg(loadState,unloadState)
{this.loadState=loadState;this.unloadState=unloadState;}
}
__webpack_exports__["a"]=StateMessage;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__visualcomponent3d__=__webpack_require__(108);var __WEBPACK_IMPORTED_MODULE_1__script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_2__script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_3__object3d__=__webpack_require__(56);var __WEBPACK_IMPORTED_MODULE_4__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_5__common_defs__=__webpack_require__(0);class Sprite3D extends __WEBPACK_IMPORTED_MODULE_3__object3d__["a"]
{constructor(objData)
{super();this.objData=objData;this.visualComponent=new __WEBPACK_IMPORTED_MODULE_0__visualcomponent3d__["a"](objData.visualData);this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_1__script_scriptcomponent__["a"];this.setVisible(objData.visualData.isActive());}
update()
{m_scriptComponent.Update();}
physicsUpdate()
{}
render(projMatrix,camera)
{if(this.isVisible())
{this.visualComponent.render(this.matrix,projMatrix,this.rotMatrix,camera);}
}
}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_1__managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_2__managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_3__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_4__common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_5__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_6__common_defs__=__webpack_require__(0);var gFinalMatrix=new __WEBPACK_IMPORTED_MODULE_3__utilities_matrix__["a"];class VisualComponent3D
{constructor(visualData)
{this.visualData=visualData;this.shaderData=null;this.vertexLocation=null;this.normalLocation=null;this.uvLocation=null;this.text0Location=null;this.colorLocation=null;this.matrixLocation=null;this.normalMatrixLocation=null;this.VERTEX_BUF_SIZE=24;this.color=new __WEBPACK_IMPORTED_MODULE_4__common_color__["a"];if(visualData.isActive())
{this.meshAry=visualData.meshGrp.meshAry;this.shaderData=__WEBPACK_IMPORTED_MODULE_1__managers_shadermanager__["a"].getShaderData(visualData.shaderID);this.vertexLocation=this.shaderData.getLocation('in_position');this.normalLocation=this.shaderData.getLocation('in_normal');this.matrixLocation=this.shaderData.getLocation('cameraViewProjMatrix');this.normalMatrixLocation=this.shaderData.getLocation('normalMatrix');this.colorLocation=this.shaderData.getLocation('color');if(this.meshAry[0].textureAry.length)
{this.VERTEX_BUF_SIZE=32;this.uvLocation=this.shaderData.getLocation('in_uv');this.text0Location=this.shaderData.getLocation('text0');}
this.color.copy(this.visualData.color);}
}
render(objMatrix,projMatrix,rotMatrix,camera)
{for(let i=0;i<this.meshAry.length;++i)
{__WEBPACK_IMPORTED_MODULE_0__managers_vertexbuffermanager__["a"].bind(this.meshAry[i].vbo,this.meshAry[i].ibo);__WEBPACK_IMPORTED_MODULE_1__managers_shadermanager__["a"].bind(this.shaderData);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].vertexAttribPointer(this.vertexLocation,3,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].FLOAT,false,this.VERTEX_BUF_SIZE,0);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].vertexAttribPointer(this.normalLocation,3,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].FLOAT,false,this.VERTEX_BUF_SIZE,12);if(this.uvLocation)
{for(let j=0;j<this.meshAry[i].textureAry.length;++j)
{__WEBPACK_IMPORTED_MODULE_2__managers_texturemanager__["a"].bind(this.meshAry[i].textureAry[j].id);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].uniform1i(this.text0Location,0);}
__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].vertexAttribPointer(this.uvLocation,2,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].FLOAT,false,this.VERTEX_BUF_SIZE,24);}
__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].uniform4fv(this.colorLocation,this.color.data);gFinalMatrix.initilizeMatrix();gFinalMatrix.mergeMatrix(objMatrix.matrix);gFinalMatrix.mergeMatrix(camera.matrix.matrix);gFinalMatrix.mergeMatrix(projMatrix.matrix);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].uniformMatrix4fv(this.matrixLocation,false,gFinalMatrix.matrix);gFinalMatrix.initilizeMatrix();gFinalMatrix.mergeMatrix(rotMatrix.matrix);gFinalMatrix.mergeMatrix(camera.rotMatrix.matrix);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].uniformMatrix4fv(this.normalMatrixLocation,false,gFinalMatrix.matrix);__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].drawElements(__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].TRIANGLES,this.meshAry[i].iboCount,__WEBPACK_IMPORTED_MODULE_5__system_device__["b"].UNSIGNED_SHORT,0);}
}
}
__webpack_exports__["a"]=VisualComponent3D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_1__3d_object3d__=__webpack_require__(56);class Camera extends __WEBPACK_IMPORTED_MODULE_1__3d_object3d__["a"]
{constructor()
{super();}
setPos(pos)
{super.setPosXYZ(-pos.x,-pos.y,-pos.z);}
setPosXYZ(x=0,y=0,z=0)
{super.setPosXYZ(-x,-y,-z);}
incPos(pos)
{super.incPosXYZ(-pos.x,-pos.y,-pos.z);}
incPosXYZ(x=0,y=0,z=0)
{super.incPosXYZ(-x,-y,-z);}
}
__webpack_exports__["a"]=Camera;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__slotresults__=__webpack_require__(111);var __WEBPACK_IMPORTED_MODULE_1__slotgroup__=__webpack_require__(114);var __WEBPACK_IMPORTED_MODULE_2__betmanager__=__webpack_require__(31);var __WEBPACK_IMPORTED_MODULE_3__utilities_timer__=__webpack_require__(29);var __WEBPACK_IMPORTED_MODULE_4__script_scriptcomponent__=__webpack_require__(21);var __WEBPACK_IMPORTED_MODULE_5__slotdefs__=__webpack_require__(13);class SlotGame
{constructor(group)
{this.cycleResultsCallback=[];this.slotResults=new __WEBPACK_IMPORTED_MODULE_0__slotresults__["a"];this.slotGroupAry=[];this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["p"];this.cycleResultsTimer=new __WEBPACK_IMPORTED_MODULE_3__utilities_timer__["a"];this.stopSpinMusicTimer=new __WEBPACK_IMPORTED_MODULE_3__utilities_timer__["a"];this.cycleResultsActive=false;this.scriptComponent=new __WEBPACK_IMPORTED_MODULE_4__script_scriptcomponent__["a"];this.group=group;this.frontPanel=null;this.waitForSpinMusicTimer=false;this.spinMusicStartFunc='';this.spinMusicStopFunc='';this.spinMusicTimeOut=0;this.allowSpinMusic=true;this.allowStopSounds=true;}
createSlotGroup(
slotDevice,reelStripSetId,paytableSetId,slotMath,viewReelCfgNode,viewSpinProfileCfgNode,symbolSetViewData)
{let slotGroup=new __WEBPACK_IMPORTED_MODULE_1__slotgroup__["a"](slotDevice,slotMath,this.slotResults.create());this.slotGroupAry.push(slotGroup);slotGroup.create(
reelStripSetId,paytableSetId,viewReelCfgNode,viewSpinProfileCfgNode,symbolSetViewData);this.cycleResultsCallback.push(slotGroup.handleCycleResults.bind(slotGroup));}
loadSlotConfig(node)
{let spinMusicScriptFunNode=node.getElementsByTagName('spinMusicScriptFun');if(spinMusicScriptFunNode.length)
{this.spinMusicStartFunc=spinMusicScriptFunNode[0].getAttribute("startMusic");this.spinMusicStopFunc=spinMusicScriptFunNode[0].getAttribute("stopMusic");this.spinMusicTimeOut=Number(spinMusicScriptFunNode[0].getAttribute("timeOut"));}
}
init()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].init();}
cleanUp()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].cleanUp();}
allowSpinMusic(allow)
{this.allowSpinMusic=allow;}
allowStopSounds(allow)
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupView.allowStopSounds(allow);}
processGameState()
{switch(this.slotState)
{case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["p"]:this.stateIdle();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["q"]:this.statePlaceWager();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["o"]:this.stateGenerateStops();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["n"]:this.stateEvaluate();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["w"]:this.statePreSpin();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["x"]:this.stateSpin();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["t"]:this.statePostSpin();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["u"]:this.statePreAwardWin();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["l"]:this.stateBonusDecision();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["v"]:this.statePreBonus();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["k"]:this.stateBonus();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["s"]:this.statePostBonus();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["r"]:this.statePostAwardWin();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["y"]:this.stateWaitForAward();break;case __WEBPACK_IMPORTED_MODULE_5__slotdefs__["m"]:this.stateEnd();break;};}
stateIdle()
{if(this.allowSpinMusic && this.waitForSpinMusicTimer && this.spinMusicStopFunc.length)
{if(this.stopSpinMusicTimer.expired())
{this.waitForSpinMusicTimer=false;}
}
}
statePlaceWager()
{if(this.cycleResultsActive)
{this.cycleResultsActive=false;for(let i=0;i<this.cycleResultsCallback.length;++i)
this.cycleResultsCallback[i](false);this.cycleResultsTimer.setExpired();}
__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].deductBet();if(this.frontPanel)
this.frontPanel.initGame(__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].getCredits());this.slotResults.clear();this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["o"];}
stateGenerateStops()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupModel.generateStops();this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["n"];}
stateEvaluate()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupModel.evaluate();this.slotResults.sortPays();this.slotResults.addUpWin();console.log(`Total Win:${this.slotResults.getTotalWin()}`);this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["w"];}
statePreSpin()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupView.startSpin();this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["x"];}
stateSpin()
{let stopped=true;for(let i=0;i<this.slotGroupAry.length;++i)
{if(!this.slotGroupAry[i].slotGroupView.isSpinState(__WEBPACK_IMPORTED_MODULE_5__slotdefs__["D"]))
{stopped=false;break;}
}
if(stopped)
this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["t"];}
statePostSpin()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["u"];}
statePreAwardWin()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["l"];}
stateBonusDecision()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["v"];}
statePreBonus()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["k"];}
stateBonus()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["s"];}
statePostBonus()
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["r"];}
statePostAwardWin()
{if(this.slotResults.isWin())
{__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].addAward(this.slotResults.getTotalWin());if(this.frontPanel)
this.frontPanel.startBangUp(
this.slotResults.getTotalWin(),__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].getCredits());for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].initCycleResults();this.cycleResultsActive=true;for(let i=0;i<this.cycleResultsCallback.length;++i)
this.cycleResultsCallback[i](true);this.cycleResultsTimer.set(1000);}
this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["y"];}
stateWaitForAward()
{if(this.frontPanel)
{if(!this.frontPanel.isBanging())
this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["m"];}
else
{this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["m"];}
}
stateEnd()
{if(this.frontPanel)
this.frontPanel.enableButtons(__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].allowPlay());this.stopSpinMusicTimer.set(this.spinMusicTimeOut);this.waitForSpinMusicTimer=true;this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["p"];}
handleEvent(event)
{}
update()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupView.update();if(this.cycleResultsActive && this.cycleResultsTimer.expired(true))
{for(let i=0;i<this.cycleResultsCallback.length;++i)
{this.cycleResultsCallback[i](false);this.cycleResultsCallback[i](true);}
}
this.scriptComponent.update();}
transform()
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].transform();}
render(matrix)
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].render(matrix);}
playGame(control)
{if(this.slotState===__WEBPACK_IMPORTED_MODULE_5__slotdefs__["p"])
{if(__WEBPACK_IMPORTED_MODULE_2__betmanager__["a"].allowPlay())
this.slotState=__WEBPACK_IMPORTED_MODULE_5__slotdefs__["q"];}
else if(this.slotState===__WEBPACK_IMPORTED_MODULE_5__slotdefs__["x"])
{for(let i=0;i<this.slotGroupAry.length;++i)
this.slotGroupAry[i].slotGroupView.stopSpin();}
else if(this.slotState===__WEBPACK_IMPORTED_MODULE_5__slotdefs__["y"])
{if(this.frontPanel)
this.frontPanel.fastBang();}
}
setFrontPanel(frontPanel)
{this.frontPanel=frontPanel;}
}
__webpack_exports__["a"]=SlotGame;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__playresult__=__webpack_require__(112);class SlotResults
{constructor()
{this.playResultAry=[];this.totalWinAmount=0;}
create()
{let playResult=new __WEBPACK_IMPORTED_MODULE_0__playresult__["a"];this.playResultAry.push(playResult);return playResult;}
clear()
{this.totalWinAmount=0;for(let i=0;i<this.playResultAry.length;++i)
this.playResultAry[i].clear();}
sortPays()
{for(let i=0;i<this.playResultAry.length;++i)
this.playResultAry[i].sortPays();}
addUpWin()
{this.totalWinAmount=0;for(let i=0;i<this.playResultAry.length;++i)
this.totalWinAmount+=this.playResultAry[i].addUpWin();}
getTotalWin()
{return this.totalWinAmount;}
isWin()
{return(this.totalWinAmount>0);}
}
__webpack_exports__["a"]=SlotResults;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__pay__=__webpack_require__(113);class PlayResult
{constructor()
{this.payAry=[];this.totalWinAmount=0;}
addPay(payType,payCombo,multiplier,winLine,symbPosAry)
{this.payAry.push(
new __WEBPACK_IMPORTED_MODULE_0__pay__["a"](payType,payCombo.award,payCombo.bonusCode,multiplier,winLine,symbPosAry));}
sortPays()
{this.payAry.sort((a,b)=>{return(b.award-a.award);});}
addUpWin()
{this.totalWinAmount=0;for(let i=0;i<this.payAry.length;++i)
this.totalWinAmount+=this.payAry[i].getFinalAward();return this.totalWinAmount;}
clear()
{this.totalWinAmount=0;this.payAry=[];}
getPay(index)
{return this.payAry[index];}
getPayCount()
{return this.payAry.length;}
}
__webpack_exports__["a"]=PlayResult;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class Pay
{constructor(payType,award,bonusCode,multiplier,payLine,symbPosAry)
{this.payType=payType;this.award=award;this.bonusCode=bonusCode;this.multiplier=multiplier;this.payLine=payLine;this.symbPosAry=symbPosAry;}
getFinalAward()
{return this.award*this.multiplier;}}
__webpack_exports__["a"]=Pay;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__slotgroupmodel__=__webpack_require__(115);var __WEBPACK_IMPORTED_MODULE_1__reelgroupview__=__webpack_require__(119);var __WEBPACK_IMPORTED_MODULE_2__wheelgroupview__=__webpack_require__(122);var __WEBPACK_IMPORTED_MODULE_3__slotdefs__=__webpack_require__(13);class SlotGroup
{constructor(slotDevice,slotMath,playResult)
{this.slotGroupModel=new __WEBPACK_IMPORTED_MODULE_0__slotgroupmodel__["a"](slotMath,playResult);if(slotDevice===__WEBPACK_IMPORTED_MODULE_3__slotdefs__["c"])
this.slotGroupView=new __WEBPACK_IMPORTED_MODULE_1__reelgroupview__["a"](this.slotGroupModel);else if(slotDevice===__WEBPACK_IMPORTED_MODULE_3__slotdefs__["d"])
this.slotGroupView=new __WEBPACK_IMPORTED_MODULE_2__wheelgroupview__["a"](this.slotGroupModel);this.playResult=playResult;this.cyclePayCounter=0;}
create(
reelStripSetId,paytableSetId,viewReelCfgNode,viewSpinProfileCfgNode,symbolSetViewData)
{this.slotGroupModel.create(reelStripSetId,paytableSetId);this.slotGroupView.create(viewReelCfgNode);this.slotGroupView.loadSpinProfileFromNode(viewSpinProfileCfgNode);this.slotGroupView.createSymbolStrip(symbolSetViewData);}
init()
{this.slotGroupView.init();}
cleanUp()
{this.slotGroupView.cleanUp();}
initCycleResults()
{this.cyclePayCounter=0;if(this.playResult.getPayCount()>0)
this.slotGroupView.generateCycleResultSymbs();}
handleCycleResults(start)
{if(this.playResult.getPayCount()>0)
{let cycleResultSymbAry=this.slotGroupView.cycleResultSymbAry;if(start)
{let pay=this.playResult.getPay(this.cyclePayCounter);let symbPosAry=this.playResult.getPay(this.cyclePayCounter).symbPosAry;this.cyclePayCounter=(this.cyclePayCounter+1)% this.playResult.getPayCount();for(let i=0;i<cycleResultSymbAry.length;++i)
for(let j=0;j<cycleResultSymbAry[i].length;++j)
for(let w=0;w<cycleResultSymbAry[i][j].spriteAry.length;++w)
cycleResultSymbAry[i][j].spriteAry[w].setAlpha(0.2);for(let i=0;i<symbPosAry.length;++i)
for(let w=0;w<cycleResultSymbAry[symbPosAry[i].reel][symbPosAry[i].pos].spriteAry.length;++w)
cycleResultSymbAry[symbPosAry[i].reel][symbPosAry[i].pos].spriteAry[w].setDefaultColor();this.slotGroupView.setCycleResultText(true,pay);}
else
{for(let i=0;i<cycleResultSymbAry.length;++i)
for(let j=0;j<cycleResultSymbAry[i].length;++j)
for(let w=0;w<cycleResultSymbAry[i][j].spriteAry.length;++w)
cycleResultSymbAry[i][j].spriteAry[w].setDefaultColor();this.slotGroupView.setCycleResultText(false);}
}
}
transform()
{this.slotGroupView.transform();}
render(matrix)
{this.slotGroupView.render(matrix);}
}
__webpack_exports__["a"]=SlotGroup;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__utilities_mersenne_twister__=__webpack_require__(116);var __WEBPACK_IMPORTED_MODULE_1__slotstripmodel__=__webpack_require__(117);var __WEBPACK_IMPORTED_MODULE_2__symbolposition__=__webpack_require__(118);var __WEBPACK_IMPORTED_MODULE_3__betmanager__=__webpack_require__(31);var __WEBPACK_IMPORTED_MODULE_4__slotmathmanager__=__webpack_require__(39);var __WEBPACK_IMPORTED_MODULE_5__slotdefs__=__webpack_require__(13);class SlotGroupModel
{constructor(slotMath,playResult)
{this.slotMath=slotMath;this.playResult=playResult;this.paylineSet=__WEBPACK_IMPORTED_MODULE_4__slotmathmanager__["a"].getPaylineSet(slotMath.paylineSetId);this.slotStripModelAry=[];this.evalMathSymbs=[];this.rng=new __WEBPACK_IMPORTED_MODULE_0__utilities_mersenne_twister__["a"];this.paytableSetId;}
create(reelStripSetId,paytableSetId)
{this.paytableSetId=paytableSetId;let slotStripMathAry=this.slotMath.getSlotStripSet(reelStripSetId);for(let i=0;i<slotStripMathAry.length;++i)
this.slotStripModelAry.push(
new __WEBPACK_IMPORTED_MODULE_1__slotstripmodel__["a"](this.slotMath.getSlotStrip(slotStripMathAry[i].id),this.rng,slotStripMathAry[i].evalSymbIndexAry));for(let i=0;i<slotStripMathAry.length;++i)
{let evalSymbAry=[];this.evalMathSymbs.push(evalSymbAry);for(let j=0;j<slotStripMathAry[i].evalSymbIndexAry.length;++j)
evalSymbAry.push(0);}
}
generateStops()
{for(let i=0;i<this.slotStripModelAry.length;++i)
this.slotStripModelAry[i].generateStop();}
evaluate()
{this.generateEvalSymbs();let paytableSetAry=this.slotMath.getPaytableSet(this.paytableSetId);for(let i=0;i<paytableSetAry.length;++i)
{if(paytableSetAry[i].type===__WEBPACK_IMPORTED_MODULE_5__slotdefs__["e"])
this.evaluateLinePays(paytableSetAry[i].id);else if(paytableSetAry[i].type===__WEBPACK_IMPORTED_MODULE_5__slotdefs__["f"])
this.evaluateScatters(paytableSetAry[i].id);}
}
generateEvalSymbs()
{for(let reel=0;reel<this.slotStripModelAry.length;++reel)
{let stop=this.slotStripModelAry[reel].stop;let evalSymbIndexAry=this.slotStripModelAry[reel].evalSymbIndexAry;for(let symb=0;symb<evalSymbIndexAry.length;++symb)
this.evalMathSymbs[reel][symb]=this.slotStripModelAry[reel].getSymbol(stop+evalSymbIndexAry[symb]);}
}
evaluateLinePays(paytable)
{let payComboAry=this.slotMath.getPayComboSet(paytable);let awarded=Array(this.paylineSet.line.length);for(let cbo=0;cbo<payComboAry.length;++cbo)
{for(let payline=0;payline<this.paylineSet.line.length;++payline)
{if(awarded[payline])
continue;for(let reel=0;reel<this.paylineSet.line[payline].length;++reel)
{let pos=this.paylineSet.line[payline][reel];let mathSymb=this.evalMathSymbs[reel][pos];if(!mathSymb.isMatch(payComboAry[cbo].symbol))
break;if(reel===payComboAry[cbo].count-1)
{awarded[payline]=true;this.addLinePay(payComboAry[cbo],payline,this.paylineSet);break;}
}
}
}
}
addLinePay(payCombo,payline,paylineSet)
{let symbPos=[];for(let i=0;i<payCombo.count;++i)
symbPos.push(new __WEBPACK_IMPORTED_MODULE_2__symbolposition__["a"](i,paylineSet.line[payline][i]));this.playResult.addPay(__WEBPACK_IMPORTED_MODULE_5__slotdefs__["e"],payCombo,__WEBPACK_IMPORTED_MODULE_3__betmanager__["a"].lineBet,payline,symbPos);}
evaluateScatters(paytable)
{let payComboAry=this.slotMath.getPayComboSet(paytable);let symbAry=[];let posAryAry=[];for(let i=0;i<payComboAry.length;++i)
{if(symbAry.indexOf(payComboAry[i].symbol)===-1)
{symbAry.push(payComboAry[i].symbol);posAryAry.push([]);}
}
for(let reel=0;reel<this.evalMathSymbs.length;++reel)
{for(let pos=0;pos<this.evalMathSymbs[reel].length;++pos)
{if(this.paylineSet.scatter[reel].indexOf(pos)!==-1)
{let mathSymb=this.evalMathSymbs[reel][pos];for(let symb=0;symb<symbAry.length;++symb)
{if(mathSymb.isMatch(symbAry[symb]))
{posAryAry[symb].push(new __WEBPACK_IMPORTED_MODULE_2__symbolposition__["a"](reel,pos));}
}
}
}
}
for(let i=0;i<payComboAry.length;++i)
{for(let symb=0;symb<symbAry.length;++symb)
{if((payComboAry[i].symbol===symbAry[symb])&&
(posAryAry[symb].length===payComboAry[i].count))
{this.playResult.addPay(__WEBPACK_IMPORTED_MODULE_5__slotdefs__["f"],payComboAry[i],__WEBPACK_IMPORTED_MODULE_3__betmanager__["a"].getTotalBet(),-1,posAryAry[symb]);}
}
}
}
}
__webpack_exports__["a"]=SlotGroupModel;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MersenneTwister;});var MersenneTwister=function(seed){if(seed==undefined){seed=new Date().getTime();} 
this.N=624;this.M=397;this.MATRIX_A=0x9908b0df;
this.UPPER_MASK=0x80000000;
this.LOWER_MASK=0x7fffffff;
this.mt=new Array(this.N);
this.mti=this.N+1;
this.init_genrand(seed);} 
MersenneTwister.prototype.init_genrand=function(s){this.mt[0]=s>>>0;for(this.mti=1;this.mti<this.N;this.mti++){var s=this.mt[this.mti-1] ^(this.mt[this.mti-1]>>>30);this.mt[this.mti]=(((((s & 0xffff0000)>>>16)*1812433253)<<16)+(s & 0x0000ffff)*1812433253)
+this.mti;this.mt[this.mti]>>>=0;}
}
MersenneTwister.prototype.init_by_array=function(init_key,key_length){var i,j,k;this.init_genrand(19650218);i=1;j=0;k=(this.N>key_length ? this.N:key_length);for(;k;k--){var s=this.mt[i-1] ^(this.mt[i-1]>>>30)
this.mt[i]=(this.mt[i] ^(((((s & 0xffff0000)>>>16)*1664525)<<16)+((s & 0x0000ffff)*1664525)))
+init_key[j]+j;
this.mt[i]>>>=0;
i++;j++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}
if(j>=key_length)j=0;}
for(k=this.N-1;k;k--){var s=this.mt[i-1] ^(this.mt[i-1]>>>30);this.mt[i]=(this.mt[i] ^(((((s & 0xffff0000)>>>16)*1566083941)<<16)+(s & 0x0000ffff)*1566083941))
-i;
this.mt[i]>>>=0;
i++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}
}
this.mt[0]=0x80000000;
}
MersenneTwister.prototype.genrand_int32=function(){var y;var mag01=new Array(0x0,this.MATRIX_A);if(this.mti>=this.N){
var kk;if(this.mti==this.N+1)
this.init_genrand(5489);
for(kk=0;kk<this.N-this.M;kk++){y=(this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);this.mt[kk]=this.mt[kk+this.M] ^(y>>>1)^ mag01[y & 0x1];}
for(;kk<this.N-1;kk++){y=(this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);this.mt[kk]=this.mt[kk+(this.M-this.N)] ^(y>>>1)^ mag01[y & 0x1];}
y=(this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);this.mt[this.N-1]=this.mt[this.M-1] ^(y>>>1)^ mag01[y & 0x1];this.mti=0;}
y=this.mt[this.mti++];y ^=(y>>>11);y ^=(y<<7)& 0x9d2c5680;y ^=(y<<15)& 0xefc60000;y ^=(y>>>18);return y>>>0;}
MersenneTwister.prototype.genrand_int31=function(){return(this.genrand_int32()>>>1);}
MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1.0/4294967295.0);}
MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1.0/4294967296.0);}
MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+0.5)*(1.0/4294967296.0);}
MersenneTwister.prototype.genrand_res53=function(){var a=this.genrand_int32()>>>5,b=this.genrand_int32()>>>6;return(a*67108864.0+b)*(1.0/9007199254740992.0);} 
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class SlotStripModel
{constructor(slotStripMathAry,rng,evalSymbIndexAry)
{this.slotStripMathAry=slotStripMathAry;this.rng=rng;this.evalSymbIndexAry=evalSymbIndexAry;this.lastStop=0;this.stop=0;this.totalWeight=0;for(let i=0;i<this.slotStripMathAry.length;++i)
this.totalWeight+=this.slotStripMathAry[i].weight;}
generateStop()
{this.lastStop=this.stop;this.stop=0;let weightCount=0;let awardedWeight=this.rng.genrand_int32()%(this.totalWeight+1);for(let i=0;i<this.slotStripMathAry.length;++i)
{weightCount+=this.slotStripMathAry[i].weight;if(awardedWeight<=weightCount)
break;++this.stop;}
}
getSymbol(stop)
{let index=Math.abs(stop)% this.slotStripMathAry.length;if((stop<0)&&(index!=0))
index=this.slotStripMathAry.length-index;return this.slotStripMathAry[index];}
}
__webpack_exports__["a"]=SlotStripModel;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class SymbolPosition
{constructor(reel,pos)
{this.reel=reel;this.pos=pos;}
}
__webpack_exports__["a"]=SymbolPosition;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__slotgroupview__=__webpack_require__(57);var __WEBPACK_IMPORTED_MODULE_1__reelstripview__=__webpack_require__(120);class ReelGroupView extends __WEBPACK_IMPORTED_MODULE_0__slotgroupview__["a"]
{constructor(slotGroupModel)
{super(slotGroupModel);}
create(node)
{super.create(node);let group=node.getAttribute('group');let reelNode=node.getElementsByTagName('reelstrip');if(reelNode.length===0)
throw new Error('Reel strip list node is empty!');let slotStripModelAry=this.slotGroupModel.slotStripModelAry;if(slotStripModelAry.length!==reelNode.length)
throw new Error('Reelstrip model count does not match view count!');for(let i=0;i<reelNode.length;++i)
{let reelStripView=new __WEBPACK_IMPORTED_MODULE_1__reelstripview__["a"](slotStripModelAry[i],i);this.slotStripViewAry.push(reelStripView);reelStripView.create(group,reelNode[i]);}
for(let i=0;i<slotStripModelAry.length;++i)
{let cycleResultAry=[];this.cycleResultSymbAry.push(cycleResultAry);for(let j=0;j<slotStripModelAry[i].evalSymbIndexAry.length;++j)
cycleResultAry.push(null);}
}
generateCycleResultSymbs()
{for(let reel=0;reel<this.slotStripViewAry.length;++reel)
{let evalSymbIndexAry=this.slotGroupModel.slotStripModelAry[reel].evalSymbIndexAry;for(let symb=0;symb<evalSymbIndexAry.length;++symb)
this.cycleResultSymbAry[reel][symb]=this.slotStripViewAry[reel].getDisplaySymbol(evalSymbIndexAry[symb]);}
}
}
__webpack_exports__["a"]=ReelGroupView;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__utilities_timer__=__webpack_require__(29);var __WEBPACK_IMPORTED_MODULE_2__spinprofile__=__webpack_require__(41);var __WEBPACK_IMPORTED_MODULE_3__symbol2d__=__webpack_require__(58);var __WEBPACK_IMPORTED_MODULE_4__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_5__common_point__=__webpack_require__(7);var __WEBPACK_IMPORTED_MODULE_6__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_8__system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_9__slotdefs__=__webpack_require__(13);class ReelStripView extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor(slotStripModel,reelId)
{super();this.spinStateCallback=null;this.slotStripModel=slotStripModel;this.reelId=reelId;this.visibleSymbCount=0;this.bufferSymbols=0;this.spinDir=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"];this.symbolSetMap=new Map;this.symbolAry=[];this.symPosAry=[];this.stencilMaskSprite;this.spriteAry=[];this.spinReel=false;this.spinDistance=0;this.velocity=0;this.acceleration=0;this.spinDirVector=-1;this.spinSymbDist=0;this.spinStop=0;this.symbAlign=false;this.symbAlignCounter=0;this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"];this.spinProfile=new __WEBPACK_IMPORTED_MODULE_2__spinprofile__["a"];this.disableSpinTimer=false;this.allowStopSounds=true;this.spinTimer=new __WEBPACK_IMPORTED_MODULE_1__utilities_timer__["a"];this.spinTimer.setDisableValue(true);}
create(group,node)
{this.visibleSymbCount=Number(node.getAttribute('visibleSymbCount'));this.bufferSymbols=Number(node.getAttribute('bufferSymbols'));let symbolSizeW=Number(node.getAttribute('symbolWidth'));let symbolSizeH=Number(node.getAttribute('symbolHeight'));this.spinDir=Number(node.getAttribute('spinDirection'));this.spinSymbDist=symbolSizeH;if((this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["j"])||(this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["i"]))
this.spinDirVector=1;if(this.spinDir>=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["h"])
this.spinSymbDist=symbolSizeW;this.loadTransFromNode(node);let stencilMaskNode=node.getElementsByTagName('stencilMask');if(stencilMaskNode.length)
{let objectName=stencilMaskNode[0].getAttribute('objectName');this.stencilMaskSprite=new __WEBPACK_IMPORTED_MODULE_4__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_6__objectdatamanager_objectdatamanager__["a"].getData(group,objectName));this.stencilMaskSprite.loadTransFromNode(stencilMaskNode[0]);}
let spriteLstNode=node.getElementsByTagName('spriteList');if(spriteLstNode.length)
{let spriteNode=spriteLstNode[0].children;for(let i=0;i<spriteNode.length;++i)
{let objectName=spriteNode[i].getAttribute('objectName');let sprite=new __WEBPACK_IMPORTED_MODULE_4__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_6__objectdatamanager_objectdatamanager__["a"].getData(group,objectName));this.spriteAry.push(sprite);sprite.loadTransFromNode(spriteNode[i]);}
}
let stopSoundNode=node.getElementsByTagName('stopSound');if(stopSoundNode.length)
{let group=stopSoundNode[0].getAttribute('group');let soundId=stopSoundNode[0].getAttribute('soundId');}
}
createSymbolStrip(symbolSetViewData)
{this.createSymbolSet(symbolSetViewData);this.initReelStrip();}
createSymbolSet(symbolSetViewData)
{this.symbolSetMap.clear();let symbSetDataMap=symbolSetViewData.symbolSetDataMap;for(let [key,symbViewDataAry] of symbSetDataMap.entries())
{if(this.symbolSetMap.has(key))
throw new Error(`Duplicate symbol name(${key})!`);let symbol=new __WEBPACK_IMPORTED_MODULE_3__symbol2d__["a"](key);symbol.create(symbolSetViewData.group,symbViewDataAry);this.symbolSetMap.set(key,symbol);}
let slotStripMathAry=this.slotStripModel.slotStripMathAry;for(let i=0;i<slotStripMathAry.length;++i)
{if(!this.symbolSetMap.has(slotStripMathAry[i].id))
throw new Error(`View symbol not found in symbol set(${slotStripMathAry[i].id})!`);}
}
initReelStrip()
{let totalSymbols=this.visibleSymbCount+(this.bufferSymbols*2);let offset=(((totalSymbols-1)*this.spinSymbDist)/2);for(let i=0;i<totalSymbols;++i)
{this.symbolAry.push(this.getSymbol(this.slotStripModel.lastStop-this.bufferSymbols+i));if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
this.symPosAry.push(new __WEBPACK_IMPORTED_MODULE_5__common_point__["a"](0,-(i*this.spinSymbDist)+offset));else
this.symPosAry.push(new __WEBPACK_IMPORTED_MODULE_5__common_point__["a"](-offset+(i*this.spinSymbDist),0));}
}
init()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].init();for(let [key,symbol2D] of this.symbolSetMap.entries())
symbol2D.init();}
cleanUp()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].cleanUp();for(let [key,symbol2D] of this.symbolSetMap.entries())
symbol2D.cleanUp();}
getSymbol(stop)
{let mathSymb=this.slotStripModel.getSymbol(stop);let symbol=this.symbolSetMap.get(mathSymb.id);if(!symbol)
throw new Error(`Math symbol not found in symbol set(${mathSymb.id})!`);return symbol;}
getDisplaySymbol(index)
{return this.getSymbol(this.slotStripModel.stop+index);}
setSpinProfile(spinProfile)
{this.spinProfile.copy(spinProfile);}
update()
{if(this.spinReel)
{switch(this.spinState)
{case __WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"]:
{this.spinStop=this.slotStripModel.lastStop;if((this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])||(this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["i"]))
this.spinStop-=this.bufferSymbols;else
this.spinStop+=this.visibleSymbCount+this.bufferSymbols;this.velocity=0.0;this.acceleration=this.spinProfile.accelation;this.spinTimer.set(this.spinProfile.startDelay);this.disableSpinTimer=false;this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["B"];}
case __WEBPACK_IMPORTED_MODULE_9__slotdefs__["B"]:
{if(this.spinTimer.expired())
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__["a"].elapsedTime;this.velocity+=this.acceleration*elapsedTime;this.acceleration+=this.spinProfile.impulse*elapsedTime;if(this.velocity>=this.spinProfile.maxVelocity)
{this.velocity=this.spinProfile.maxVelocity;this.spinTimer.set(this.spinProfile.maxVelocityTime);this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["A"];}
this.incSpin(this.velocity);}
break;}
case __WEBPACK_IMPORTED_MODULE_9__slotdefs__["A"]:
{this.incSpin(this.velocity);this.spinTimer.disable(this.disableSpinTimer);if(this.spinTimer.expired()&& this.symbAlign)
{this.spinStop=this.slotStripModel.stop;if((this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])||(this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["i"]))
this.spinStop+=this.visibleSymbCount+this.bufferSymbols;else
this.spinStop-=this.bufferSymbols+1;this.symbAlignCounter=0;this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["z"];}
break;}
case __WEBPACK_IMPORTED_MODULE_9__slotdefs__["z"]:
{this.incSpin(this.velocity);if(this.symbAlign)
{if(++this.symbAlignCounter>=(this.visibleSymbCount+(this.bufferSymbols*2)-1))
{this.acceleration=-(this.spinProfile.maxVelocity/(this.spinSymbDist+this.spinProfile.bounceCorrection));this.spinTimer.set(this.spinProfile.timeOutDelay);this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["C"];}
}
break;}
case __WEBPACK_IMPORTED_MODULE_9__slotdefs__["C"]:
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__["a"].elapsedTime;this.velocity+=this.acceleration*elapsedTime;let drag=this.spinProfile.bounceDrag*elapsedTime;if((this.acceleration+drag)<-0.0)
this.acceleration+=drag;if((this.spinDistance<0.0)|| this.spinTimer.expired())
{this.velocity=0.0;this.spinReel=false;this.finalizeSymbPos();this.spinState=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"];if(this.spinStateCallback)
for(let i=0;i<this.spinStateSignal.length;++i)
this.spinStateSignal[i](this.reelId,__WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"]);break;}
this.incSpin(this.velocity);break;}
}
}
}
incSpin(velocity)
{let dist=velocity*__WEBPACK_IMPORTED_MODULE_7__utilities_highresolutiontimer__["a"].elapsedTime;if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
{for(let i=0;i<this.symPosAry.length;++i)
this.symPosAry[i].incXYZ(0,dist*this.spinDirVector);}
else
{for(let i=0;i<this.symPosAry.length;++i)
this.symPosAry[i].incXYZ(dist*this.spinDirVector);}
this.spinDistance+=dist;this.symbAlign=false;if(this.spinDistance>=this.spinSymbDist)
{if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
{this.spinStop+=this.spinDirVector;}
else
{this.spinStop-=this.spinDirVector;}
dist=this.spinSymbDist;let symbol=this.getSymbol(this.spinStop);if((this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])||(this.spinDir===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["i"]))
{this.symbolAry.pop();this.symbolAry.unshift(symbol);let symPos=this.symPosAry.pop();if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
symPos.y=this.symPosAry[0].y+(dist*-this.spinDirVector);else
symPos.x=this.symPosAry[0].x+(dist*-this.spinDirVector);this.symPosAry.unshift(symPos);}
else
{this.symbolAry.shift();this.symbolAry.push(symbol);let symPos=this.symPosAry.shift();if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
symPos.y=this.symPosAry[this.symPosAry.length-1].y+(dist*-this.spinDirVector);else
symPos.x=this.symPosAry[this.symPosAry.length-1].x+(dist*-this.spinDirVector);this.symPosAry.push(symPos);}
this.spinDistance-=this.spinSymbDist;this.symbAlign=true;}
}
finalizeSymbPos()
{let offset=(((this.symPosAry.length-1)*this.spinSymbDist)/2);for(let i=0;i<this.symPosAry.length;++i)
{this.symbolAry[i]=this.getSymbol(this.slotStripModel.stop-this.bufferSymbols+i);if(this.spinDir<=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["g"])
this.symPosAry[i].setXYZ(0,-(i*this.spinSymbDist)+offset);else
this.symPosAry[i].setXYZ(-offset+(i*this.spinSymbDist));}
}
transform(matrix,tranformWorldPos)
{super.transform(matrix,tranformWorldPos);this.stencilMaskSprite.transform(this.matrix,this.wasWorldPosTranformed());for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());}
render(matrix)
{if(this.isVisible())
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);if(this.spinState===__WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"])
{for(let i=this.bufferSymbols;i<this.symbolAry.length-this.bufferSymbols;++i)
{this.symbolAry[i].setPos(this.symPosAry[i]);this.symbolAry[i].transform(this.matrix,this.wasWorldPosTranformed());this.symbolAry[i].render(matrix);}
}
else
{__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].colorMask(false,false,false,false);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].depthMask(false);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].enable(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].STENCIL_TEST);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].ALWAYS,0x1,0x1);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].REPLACE,__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].REPLACE);this.stencilMaskSprite.render(matrix);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].colorMask(true,true,true,true);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].stencilFunc(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].EQUAL,0x1,0x1);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].stencilOp(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].KEEP,__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].KEEP);__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].depthMask(true);for(let i=0;i<this.symbolAry.length;++i)
{this.symbolAry[i].setPos(this.symPosAry[i]);this.symbolAry[i].transform(this.matrix,this.wasWorldPosTranformed());this.symbolAry[i].render(matrix);}
__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].disable(__WEBPACK_IMPORTED_MODULE_8__system_device__["b"].STENCIL_TEST);}
}
}
startSpin()
{this.spinReel=true;}
stopSpin()
{if(this.spinState!=__WEBPACK_IMPORTED_MODULE_9__slotdefs__["D"])
this.disableSpinTimer=true;}
connect_SpinState(callback)
{if(this.spinStateCallback===null)
this.spinStateCallback=[];this.spinStateCallback.push(callback);}
allowStopSounds(allow)
{this.allowStopSounds=allow;}
}
__webpack_exports__["a"]=ReelStripView;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__=__webpack_require__(10);var __WEBPACK_IMPORTED_MODULE_2__common_defs__=__webpack_require__(0);class SpriteChild2D extends __WEBPACK_IMPORTED_MODULE_0__2d_sprite2d__["a"]
{constructor(objData,id=__WEBPACK_IMPORTED_MODULE_2__common_defs__["_63"])
{super(objData,id);this.finalMatrix=new __WEBPACK_IMPORTED_MODULE_1__utilities_matrix__["a"];}
transform(matrix=null,tranformWorldPos=null)
{this.parameters.remove(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]);if(matrix)
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_65"]))
this.transformLocal(this.matrix);if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"])|| tranformWorldPos)
{this.parameters.add(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]);this.finalMatrix.copy(this.matrix);this.finalMatrix.mergeMatrix(matrix.matrix);}
}
else
{if(this.parameters.isSet(__WEBPACK_IMPORTED_MODULE_2__common_defs__["_68"]))
this.transformLocal(this.finalMatrix);}
}
render(matrix)
{if(this.isVisible())
{this.visualComponent.render(this.finalMatrix,matrix);}
}
}
__webpack_exports__["a"]=SpriteChild2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__slotgroupview__=__webpack_require__(57);var __WEBPACK_IMPORTED_MODULE_1__wheelview__=__webpack_require__(123);var __WEBPACK_IMPORTED_MODULE_2__slotdefs__=__webpack_require__(13);class WheelGroupView extends __WEBPACK_IMPORTED_MODULE_0__slotgroupview__["a"]
{constructor(slotGroupModel)
{super(slotGroupModel);}
create(node)
{super.create(node);let slotStripModelAry=this.slotGroupModel.slotStripModelAry;let group=node.getAttribute('group');let wheelNode=node.getElementsByTagName('wheel');if(wheelNode.length===0)
throw new Error('Wheel list node is empty!');for(let i=0;i<wheelNode.length;++i)
{let wheelView=new __WEBPACK_IMPORTED_MODULE_1__wheelview__["a"](slotStripModelAry[i],i);this.slotStripViewAry.push(wheelView);wheelView.create(group,wheelNode[i]);}
for(let i=0;i<this.slotStripViewAry.length;++i)
{let cycleResultAry=[];this.cycleResultSymbAry.push(cycleResultAry);for(let symb=0;symb<this.slotStripViewAry[i].symbolAry.length;++symb)
cycleResultAry.push(null);}
}
generateCycleResultSymbs()
{for(let i=0;i<this.slotStripViewAry.length;++i)
{let evalSymbIndexAry=this.slotGroupModel.slotStripModelAry[i].evalSymbIndexAry;let evalStartPoint=evalSymbIndexAry[0];for(let symb=1;symb<evalSymbIndexAry.length;++symb)
{if(evalSymbIndexAry[symb]<evalStartPoint)
evalStartPoint=evalSymbIndexAry[symb];}
for(let symb=0;symb<this.slotStripViewAry[i].symbolAry.length;++symb)
this.cycleResultSymbAry[i][symb]=this.slotStripViewAry[i].getDisplaySymbol(evalStartPoint+symb);}
}
}
__webpack_exports__["a"]=WheelGroupView;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__2d_object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_2__slot_symbol2d__=__webpack_require__(58);var __WEBPACK_IMPORTED_MODULE_3__spinprofile__=__webpack_require__(41);var __WEBPACK_IMPORTED_MODULE_4__utilities_timer__=__webpack_require__(29);var __WEBPACK_IMPORTED_MODULE_5__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_7__slotdefs__=__webpack_require__(13);var __WEBPACK_IMPORTED_MODULE_8__common_defs__=__webpack_require__(0);class WheelView extends __WEBPACK_IMPORTED_MODULE_0__2d_object2d__["a"]
{constructor(slotStripModel,wheelId)
{super();this.spinStateCallback=null;this.slotStripModel=slotStripModel;this.degreePerWedge=(Math.PI*2)/slotStripModel.slotStripMathAry.length;this.saftyCheckDegree=0;this.wheelId=wheelId;this.spriteAry=[];this.wheelSpriteAry=[];this.symbolAry=[];this.spinDir=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["a"];this.spinProfile=new __WEBPACK_IMPORTED_MODULE_3__spinprofile__["a"];this.spinWheel=false;this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["D"];this.velocity=0;this.acceleration=0;this.spinDirVector=-1;this.disableSpinTimer=false;this.spinTimer=new __WEBPACK_IMPORTED_MODULE_4__utilities_timer__["a"];this.spinTimer.setDisableValue(true);this.winPointDegree;this.rotation=0;this.currentRotation=0;this.PI_2=Math.PI*2;}
create(group,node)
{let attr=node.getElementsByTagName('translation');if(attr)
this.loadTransFromNode(attr[0]);attr=node.getAttribute('spinDirection');if(attr &&(Number(attr)===__WEBPACK_IMPORTED_MODULE_7__slotdefs__["b"]))
{this.spinDir=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["b"];this.spinDirVector=1;}
this.loadWheelSprites(group,node);this.loadWedges(group,node);this.loadSprites(group,node);}
loadSprites(group,node)
{let spriteLstNode=node.getElementsByTagName('nonRotateSpriteList');if(spriteLstNode.length)
{let spriteNode=spriteLstNode[0].getElementsByTagName('sprite');for(let i=0;i<spriteNode.length;++i)
{let objName;let attr=spriteNode[i].getAttribute('objectName');if(attr)
objName=attr;let sprite=new __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__objectdatamanager_objectdatamanager__["a"].getData(group,objName));this.spriteAry.push(sprite);sprite.loadTransFromNode(spriteNode[i]);}
}
}
loadWheelSprites(group,node)
{let wheelSpriteLstNode=node.getElementsByTagName('wheelSpriteList');if(wheelSpriteLstNode.length)
{let spriteNode=wheelSpriteLstNode[0].getElementsByTagName('sprite');for(let i=0;i<spriteNode.length;++i)
{let objName;let attr=spriteNode[i].getAttribute('objectName');if(attr)
objName=attr;let sprite=new __WEBPACK_IMPORTED_MODULE_1__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_5__objectdatamanager_objectdatamanager__["a"].getData(group,objName));this.wheelSpriteAry.push(sprite);sprite.loadTransFromNode(spriteNode[i]);}
}
}
loadWedges(group,node)
{let wedgeNode=node.getElementsByTagName('wedge');for(let i=0;i<wedgeNode.length;++i)
{let symbol=new __WEBPACK_IMPORTED_MODULE_2__slot_symbol2d__["a"](wedgeNode[i].getAttribute('symb'));symbol.loadTransFromNode(wedgeNode[i]);this.symbolAry.push(symbol);}
}
createSymbolStrip(symbolSetViewData)
{let symbSetDataMap=symbolSetViewData.symbolSetDataMap;for(let i=0;i<this.symbolAry.length;++i)
{let symbolView=symbSetDataMap.get(this.symbolAry[i].id);if(!symbolView)
throw new Error(`Symbol view not defines(${this.symbolAry[i].id})!`);this.symbolAry[i].create(symbolSetViewData.group,symbolView);}
}
init()
{for(let i=0;i<this.wheelSpriteAry.length;++i)
this.wheelSpriteAry[i].init();for(let i=0;i<this.symbolAry.length;++i)
this.symbolAry[i].init();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].init();this.transform();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());}
cleanUp()
{for(let i=0;i<this.wheelSpriteAry.length;++i)
this.wheelSpriteAry[i].cleanUp();for(let i=0;i<this.symbolAry.length;++i)
this.symbolAry[i].cleanUp();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].cleanUp();}
getSymbol(stop)
{if(this.symbolAry.length===this.slotStripModel.slotStripMathAry.length)
{let index=Math.abs(stop)% this.symbolAry.length;if((stop<0)&&(index!=0))
index=this.symbolAry.length-index;return this.symbolAry[index];}
else
{return this.symbolAry[0];}
}
getDisplaySymbol(index)
{return this.getSymbol(this.slotStripModel.stop+index);}
setSpinProfile(spinProfile)
{this.spinProfile.copy(spinProfile);}
update()
{if(this.spinWheel)
{switch(this.spinState)
{case __WEBPACK_IMPORTED_MODULE_7__slotdefs__["D"]:
{if(this.spinDir===__WEBPACK_IMPORTED_MODULE_7__slotdefs__["a"])
this.winPointDegree=this.PI_2-(this.degreePerWedge*(this.slotStripModel.stop));else
{if(this.slotStripModel.stop===0)
this.winPointDegree=this.PI_2;else
this.winPointDegree=this.degreePerWedge*this.slotStripModel.stop;}
this.velocity=0.0;this.acceleration=this.spinProfile.accelation;this.saftyCheckDegree=this.degreePerWedge/this.spinProfile.safetyCheckDivisor;this.spinTimer.set(this.spinProfile.startDelay);this.disableSpinTimer=false;this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["B"];}
case __WEBPACK_IMPORTED_MODULE_7__slotdefs__["B"]:
{if(this.spinTimer.expired())
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__["a"].elapsedTime;this.velocity+=this.acceleration*elapsedTime;this.acceleration+=this.spinProfile.impulse*elapsedTime;if(this.velocity>=this.spinProfile.maxVelocity)
{this.velocity=this.spinProfile.maxVelocity;this.spinTimer.set(this.spinProfile.maxVelocityTime);this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["A"];}
this.incSpin(this.velocity);}
break;}
case __WEBPACK_IMPORTED_MODULE_7__slotdefs__["A"]:
{this.incSpin(this.velocity);this.spinTimer.disable(this.disableSpinTimer);if(this.spinTimer.expired()&&(this.rotation<this.winPointDegree))
this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["z"];break;}
case __WEBPACK_IMPORTED_MODULE_7__slotdefs__["z"]:
{this.incSpin(this.velocity);if((this.currentRotation>this.winPointDegree))
{let vel=this.spinProfile.maxVelocity*1000.0;this.acceleration=
(this.velocity/((Math.PI*(4/vel))*this.spinProfile.decelerationRotationCount))/1000.0;this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["C"];}
break;}
case __WEBPACK_IMPORTED_MODULE_7__slotdefs__["C"]:
{let elapsedTime=__WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__["a"].elapsedTime;this.velocity-=this.acceleration*elapsedTime;if(this.velocity<0.0)
{this.velocity=0.0;this.spinWheel=false;let maxRot=this.winPointDegree+this.saftyCheckDegree;let minRot=this.winPointDegree-this.saftyCheckDegree;if((this.slotStripModel.stop===0)&&(this.rotation<6.0))
{if(this.rotation>this.saftyCheckDegree)
{this.rotation=maxRot;this.incSpin(this.velocity);}
}
else
{if(this.rotation>maxRot)
{this.rotation=maxRot;this.incSpin(this.velocity);}
else if(this.rotation<minRot)
{this.rotation=minRot;this.incSpin(this.velocity);}
}
this.spinState=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["D"];if(this.spinStateCallback)
for(let i=0;i<this.spinStateSignal.length;++i)
this.spinStateSignal[i](this.reelId,__WEBPACK_IMPORTED_MODULE_7__slotdefs__["D"]);break;}
this.incSpin(this.velocity);break;}
}
}
}
incSpin(velocity)
{this.rotation+=velocity*__WEBPACK_IMPORTED_MODULE_6__utilities_highresolutiontimer__["a"].elapsedTime;this.currentRotation=this.rotation;if(this.rotation>=this.PI_2)
this.rotation-=this.PI_2;this.setRotXYZ(0,0,this.rotation*this.spinDirVector,false);}
transform(matrix,tranformWorldPos)
{super.transform(matrix,tranformWorldPos);for(let i=0;i<this.wheelSpriteAry.length;++i)
this.wheelSpriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());for(let i=0;i<this.symbolAry.length;++i)
this.symbolAry[i].transform(this.matrix,this.wasWorldPosTranformed());}
render(matrix)
{for(let i=0;i<this.wheelSpriteAry.length;++i)
this.wheelSpriteAry[i].render(matrix);for(let i=0;i<this.symbolAry.length;++i)
this.symbolAry[i].render(matrix);for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);}
startSpin()
{this.spinWheel=true;}
stopSpin()
{if(this.spinState!=__WEBPACK_IMPORTED_MODULE_7__slotdefs__["D"])
this.disableSpinTimer=true;}
connect_SpinState(callback)
{if(this.spinStateCallback===null)
this.spinStateCallback=[];this.spinStateCallback.push(callback);}
allowStopSounds(allow)
{this.allowStopSounds=allow;}
}
__webpack_exports__["a"]=WheelView;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]=loadScripts;var __WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__=__webpack_require__(16);var __WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__=__webpack_require__(12);var __WEBPACK_IMPORTED_MODULE_3__library_managers_soundmanager__=__webpack_require__(38);var __WEBPACK_IMPORTED_MODULE_4__library_common_color__=__webpack_require__(20);var __WEBPACK_IMPORTED_MODULE_5__utilityscripts__=__webpack_require__(59);var __WEBPACK_IMPORTED_MODULE_6__library_common_defs__=__webpack_require__(0);class Control_OnActive
{constructor(control)
{this.control=control;}
execute()
{__WEBPACK_IMPORTED_MODULE_3__library_managers_soundmanager__["a"].play('(menu)','active');}
get isFinished(){return true;}
}
class Control_OnSelect
{constructor(control)
{this.control=control;}
execute()
{__WEBPACK_IMPORTED_MODULE_3__library_managers_soundmanager__["a"].play('(menu)','select');}
get isFinished(){return true;}
}
class Menu_TransIn extends __WEBPACK_IMPORTED_MODULE_5__utilityscripts__["b"]
{constructor(menu)
{super(0,1,250);this.menu=menu;this.menu.setAlpha(this.current);this.menu.setVisible(true);}
execute()
{super.execute();if(this.finished)
{this.menu.setAlpha(this.final);__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_15"],__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_51"]);}
else
{this.menu.setAlpha(this.current);}
}
get isFinished(){return this.finished;}
}
class Menu_TransOut extends __WEBPACK_IMPORTED_MODULE_5__utilityscripts__["b"]
{constructor(menu)
{super(1,0,250);this.menu=menu;}
execute()
{super.execute();if(this.finished)
{this.menu.setAlpha(this.final);this.menu.setVisible(false);__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_16"],__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_51"]);}
else
{this.menu.setAlpha(this.current);}
}
get isFinished(){return this.finished;}
}
class Control_Disabled
{constructor(sprite)
{this.sprite=sprite;}
execute()
{let color=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];color.copy(this.sprite.getDefaultColor());color.transformHSV(0,0,1);this.sprite.setColor(color);this.finished=true;}
get isFinished(){return this.finished;}
}
class Control_Inactive
{constructor(sprite)
{this.sprite=sprite;}
execute()
{this.sprite.setColor(this.sprite.getDefaultColor());this.finished=true;}
get isFinished(){return this.finished;}
}
class Control_Hidden
{constructor(sprite)
{this.sprite=sprite;}
execute()
{this.sprite.setVisible(false);this.finished=true;}
get isFinished(){return this.finished;}
}
class Base_Control_Active
{constructor(sprite,hiHSV,lowHSV)
{this.sprite=sprite;sprite.setVisible(true);this.hiColor=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.hiColor.copy(sprite.getDefaultColor());this.hiColor.transformHSV(0,1,hiHSV);this.lowColor=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.lowColor.copy(sprite.getDefaultColor());this.lowColor.transformHSV(0,1,lowHSV);this.colorTo=new __WEBPACK_IMPORTED_MODULE_5__utilityscripts__["a"];this.colorTo.init(sprite.getColor(),this.hiColor,500);this.toggle=false;}
execute()
{this.colorTo.execute();this.sprite.setColor(this.colorTo.color);if(this.colorTo.isFinished)
{if(this.toggle)
this.colorTo.init(this.sprite.getColor(),this.hiColor,500);else
this.colorTo.init(this.sprite.getColor(),this.lowColor,500);this.toggle=!this.toggle;}
}
}
class Control_Active extends Base_Control_Active
{constructor(sprite)
{super(sprite,1.3,.5);}
execute()
{super.execute();}
get isFinished(){return false;}
}
class Control_Solid_Active extends Base_Control_Active
{constructor(sprite)
{super(sprite,1.1,.5);}
execute()
{super.execute();}
get isFinished(){return false;}
}
class Base_Control_Selected
{constructor(sprite,hiHSV,lowHSV)
{this.sprite=sprite;sprite.setVisible(true);this.hiColor=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.hiColor.copy(sprite.getDefaultColor());this.hiColor.transformHSV(0,1,hiHSV);this.lowColor=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.lowColor.copy(sprite.getDefaultColor());this.lowColor.transformHSV(0,1,lowHSV);this.colorTo=new __WEBPACK_IMPORTED_MODULE_5__utilityscripts__["a"];this.colorTo.init(this.hiColor,this.lowColor,120);this.toggle=false;this.finished=false;}
execute()
{this.colorTo.execute();this.sprite.setColor(this.colorTo.color);if(this.colorTo.isFinished)
{if(this.toggle)
{this.sprite.setColor(this.sprite.getDefaultColor());this.finished=true;}
else
{this.colorTo.init(this.sprite.getColor(),this.hiColor,100);this.toggle=true;}
}
}
}
class Control_Selected_Dispatch_Exe extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.7,0.6);}
execute()
{super.execute();if(this.finished)
{__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_8"]);}
}
get isFinished(){return this.finished;}
}
class Control_Selected_Dispatch_Exe_Act extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.7,0.6);}
execute()
{super.execute();if(this.finished)
{__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_8"]);__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_1"]);}
}
get isFinished(){return this.finished;}
}
class Control_Selected_Visible extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.7,0.6);}
execute()
{super.execute();}
get isFinished(){return this.finished;}
}
class Control_Solid_Selected_visible extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.5,0.6);}
execute()
{super.execute();}
get isFinished(){return this.finished;}
}
class Control_Selected extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.7,0.6);}
execute()
{super.execute();if(this.finished)
this.sprite.setVisible(false);}
get isFinished(){return this.finished;}
}
class Control_Solid_Selected extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.5,0.6);}
execute()
{super.execute();if(this.finished)
this.sprite.setVisible(false);}
get isFinished(){return this.finished;}
}
class Control_Selected_frame_highlight extends Base_Control_Selected
{constructor(sprite)
{super(sprite,1.7,0.6);}
execute()
{super.execute();if(this.finished)
this.sprite.setRGBA(1,1,1,1);}
get isFinished(){return this.finished;}
}
class Base_Control_Fast_Selected
{constructor(sprite,hiHSV)
{this.sprite=sprite;sprite.setVisible(true);this.hiColor=new __WEBPACK_IMPORTED_MODULE_4__library_common_color__["a"];this.hiColor.copy(sprite.getDefaultColor());this.hiColor.transformHSV(0,1,hiHSV);this.finished=false;this.sprite.setColor(this.hiColor);}
}
class Control_Fast_Face_Selected extends Base_Control_Fast_Selected
{constructor(sprite)
{super(sprite,1.7);this.time=80;}
execute()
{this.time-=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.sprite.setDefaultColor();this.finished=true;}
}
get isFinished(){return this.finished;}
}
class Control_Fast_Face_Selected_Act extends Base_Control_Fast_Selected
{constructor(sprite)
{super(sprite,1.7);this.time=80;}
execute()
{this.time-=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.sprite.setDefaultColor();__WEBPACK_IMPORTED_MODULE_2__library_managers_eventmanager__["a"].dispatchEvent(__WEBPACK_IMPORTED_MODULE_6__library_common_defs__["_1"]);this.finished=true;}
}
get isFinished(){return this.finished;}
}
class Control_Fast_Selected extends Base_Control_Fast_Selected
{constructor(sprite)
{super(sprite,1.7);this.time=80;}
execute()
{this.time-=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.sprite.setVisible(false);this.finished=true;}
}
get isFinished(){return this.finished;}
}
class Control_Fast_Solid_Selected extends Base_Control_Fast_Selected
{constructor(sprite)
{super(sprite,1.7);this.time=80;}
execute()
{this.time-=__WEBPACK_IMPORTED_MODULE_0__library_utilities_highresolutiontimer__["a"].elapsedTime;if(this.time<0)
{this.sprite.setVisible(false);this.finished=true;}
}
get isFinished(){return this.finished;}
}
class Control_slider_btn_Selected extends Base_Control_Fast_Selected
{constructor(sprite)
{super(sprite,1.7);}
execute()
{}
get isFinished(){return true;}
}
function loadScripts()
{__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_OnActive',(control)=>{return new Control_OnActive(control);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_OnSelect',(control)=>{return new Control_OnSelect(control);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Menu_TransIn',(menu)=>{return new Menu_TransIn(menu);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Menu_TransOut',(menu)=>{return new Menu_TransOut(menu);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Disabled',(sprite)=>{return new Control_Disabled(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Inactive',(sprite)=>{return new Control_Inactive(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Hidden',(sprite)=>{return new Control_Hidden(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Active',(sprite)=>{return new Control_Active(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Solid_Active',(sprite)=>{return new Control_Solid_Active(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Selected_Dispatch_Exe',(sprite)=>{return new Control_Selected_Dispatch_Exe(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Selected_Dispatch_Exe_Act',(sprite)=>{return new Control_Selected_Dispatch_Exe_Act(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Selected_Visible',(sprite)=>{return new Control_Selected_Visible(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Solid_Selected_visible',(sprite)=>{return new Control_Solid_Selected_visible(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Selected',(sprite)=>{return new Control_Selected(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Solid_Selected',(sprite)=>{return new Control_Solid_Selected(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Selected_frame_highlight',(sprite)=>{return new Control_Selected_frame_highlight(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Fast_Face_Selected',(sprite)=>{return new Control_Fast_Face_Selected(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Fast_Face_Selected_Act',(sprite)=>{return new Control_Fast_Face_Selected_Act(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Fast_Selected',(sprite)=>{return new Control_Fast_Selected(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_Fast_Solid_Selected',(sprite)=>{return new Control_Fast_Solid_Selected(sprite);});__WEBPACK_IMPORTED_MODULE_1__library_script_scriptmanager__["a"].set('Control_slider_btn_Selected',(sprite)=>{return new Control_slider_btn_Selected(sprite);});}
}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__=__webpack_require__(17);var __WEBPACK_IMPORTED_MODULE_1__library_managers_texturemanager__=__webpack_require__(11);var __WEBPACK_IMPORTED_MODULE_2__library_managers_vertexbuffermanager__=__webpack_require__(18);var __WEBPACK_IMPORTED_MODULE_3__library_managers_loadmanager__=__webpack_require__(30);var __WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_5__library_utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_6__library_2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_7__library_utilities_highresolutiontimer__=__webpack_require__(8);var __WEBPACK_IMPORTED_MODULE_8__library_system_device__=__webpack_require__(2);var __WEBPACK_IMPORTED_MODULE_9__state_titlescreenstate__=__webpack_require__(40);var __WEBPACK_IMPORTED_MODULE_10__state_runstate__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_11__gamestate__=__webpack_require__(25);const MIN_LOAD_TIME=1000;class LoadState extends __WEBPACK_IMPORTED_MODULE_11__gamestate__["e"]
{constructor(stateMessage,stateChangeCallback)
{super(__WEBPACK_IMPORTED_MODULE_11__gamestate__["a"],stateMessage.loadState,stateChangeCallback);this.stateMessage.loadState=stateMessage.loadState;this.stateMessage.unloadState=stateMessage.unloadState;this.loadAnim=new __WEBPACK_IMPORTED_MODULE_6__library_2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_4__library_objectdatamanager_objectdatamanager__["a"].getData('(loadingScreen)','loadAnim'));this.loadAnim.setPosXYZ(__WEBPACK_IMPORTED_MODULE_5__library_utilities_settings__["a"].defaultSize_half.w-150,-(__WEBPACK_IMPORTED_MODULE_5__library_utilities_settings__["a"].defaultSize_half.h-150),0);this.loadAnim.transform();this.frameCount=this.loadAnim.getFrameCount();this.loadFrameCounter=0;this.stateChange=true;this.loadAnimInterval=0;}
init()
{__WEBPACK_IMPORTED_MODULE_7__library_utilities_highresolutiontimer__["a"].timerStart();let loadAnim=this.loadAnimUpdate.bind(this);this.loadAnimInterval=setInterval(()=>loadAnim(),83);__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].setShaderValue4fv('shader_2d_spriteSheet','additive',[1,1,1,1]);__WEBPACK_IMPORTED_MODULE_3__library_managers_loadmanager__["a"].loadCompleteCallback=this.loadFinished.bind(this);if(this.stateMessage.loadState===__WEBPACK_IMPORTED_MODULE_11__gamestate__["d"])
__WEBPACK_IMPORTED_MODULE_9__state_titlescreenstate__["b"]();else if(this.stateMessage.loadState===__WEBPACK_IMPORTED_MODULE_11__gamestate__["b"])
__WEBPACK_IMPORTED_MODULE_10__state_runstate__["b"]();__WEBPACK_IMPORTED_MODULE_3__library_managers_loadmanager__["a"].load();}
loadFinished()
{let loadTime=__WEBPACK_IMPORTED_MODULE_7__library_utilities_highresolutiontimer__["a"].timerStop();if(loadTime>MIN_LOAD_TIME)
{this.displayComplete();}
else
{let displayCompleteCallback=this.displayComplete.bind(this);setTimeout(()=>displayCompleteCallback(),MIN_LOAD_TIME-loadTime);}
}
displayComplete()
{if(this.loadAnimInterval!==0)
clearInterval(this.loadAnimInterval);this.callback();}
cleanUp()
{__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].setShaderValue4fv('shader_2d_spriteSheet','additive',[0,0,0,1]);}
loadAnimUpdate()
{__WEBPACK_IMPORTED_MODULE_8__library_system_device__["b"].clear(__WEBPACK_IMPORTED_MODULE_8__library_system_device__["b"].COLOR_BUFFER_BIT);this.loadAnim.render(__WEBPACK_IMPORTED_MODULE_8__library_system_device__["a"].orthographicMatrix);++this.loadFrameCounter;this.loadAnim.setFrame(this.loadFrameCounter % this.frameCount);__WEBPACK_IMPORTED_MODULE_0__library_managers_shadermanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_1__library_managers_texturemanager__["a"].unbind();__WEBPACK_IMPORTED_MODULE_2__library_managers_vertexbuffermanager__["a"].unbind();}
}
__webpack_exports__["a"]=LoadState;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__common_ispritestrategy__=__webpack_require__(127);var __WEBPACK_IMPORTED_MODULE_1__2d_sector2d__=__webpack_require__(128);var __WEBPACK_IMPORTED_MODULE_2__utilities_assetholder__=__webpack_require__(5);var __WEBPACK_IMPORTED_MODULE_3__common_object__=__webpack_require__(35);class BasicStageStrategy2D extends __WEBPACK_IMPORTED_MODULE_0__common_ispritestrategy__["a"]
{constructor()
{super();this.sectorAry=[];this.defaultCameraPos=new __WEBPACK_IMPORTED_MODULE_3__common_object__["a"];}
loadFromNode(strategyId,node,filePath,downloadFileCallback,finishCallback)
{let cameraNode=node.getElementsByTagName('cameraPosition');if(cameraNode.length)
this.defaultCameraPos.loadTransFromNode(cameraNode[0]);let sectorNode=node.getElementsByTagName('sector');for(let i=0;i<sectorNode.length;++i)
{let sector=new __WEBPACK_IMPORTED_MODULE_1__2d_sector2d__["a"];this.sectorAry.push(sector);sector.loadTransFromNode(sectorNode[i]);let sectorFile=sectorNode[i].getAttribute('file');if(!__WEBPACK_IMPORTED_MODULE_2__utilities_assetholder__["a"].has(strategyId,sectorFile))
{downloadFileCallback(
'xml',strategyId,sectorFile,finishCallback,(group,xmlNode,filePath,finishCallback)=>
{__WEBPACK_IMPORTED_MODULE_2__utilities_assetholder__["a"].set(group,filePath,xmlNode);sector.loadFromNode(group,xmlNode,filePath,finishCallback);});}
else
{sector.loadFromNode(strategyId,__WEBPACK_IMPORTED_MODULE_2__utilities_assetholder__["a"].get(strategyId,sectorFile),sectorFile,null);}
}
}
init()
{for(let i=0;i<this.sectorAry.length;++i)
this.sectorAry[i].init();}
cleanUp()
{for(let i=0;i<this.sectorAry.length;++i)
this.sectorAry[i].cleanUp();}
update()
{for(let i=0;i<this.sectorAry.length;++i)
this.sectorAry[i].update();}
transform(object)
{for(let i=0;i<this.sectorAry.length;++i)
this.sectorAry[i].doTransform(object);}
render(matrix)
{for(let i=0;i<this.sectorAry.length;++i)
this.sectorAry[i].render(matrix);}
}
__webpack_exports__["a"]=BasicStageStrategy2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class iSpriteStrategy
{constructor()
{}
loadFromNode(node,filePath,downloadFileCallback,finishCallback)
{}
handleEvent(event)
{}
handleMessage(msg)
{}
create(name,id,pos,rot,scale)
{}
init()
{}
cleanUp()
{}
miscProcess()
{}
update()
{}
transform()
{}
transform(object)
{}
render(matrix)
{}
handleDelete()
{}
}
__webpack_exports__["a"]=iSpriteStrategy;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__object2d__=__webpack_require__(15);var __WEBPACK_IMPORTED_MODULE_1__utilities_settings__=__webpack_require__(14);var __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__=__webpack_require__(6);var __WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__=__webpack_require__(4);var __WEBPACK_IMPORTED_MODULE_4__managers_signalmanager__=__webpack_require__(23);class Sector2D extends __WEBPACK_IMPORTED_MODULE_0__object2d__["a"]
{constructor()
{super();this.spriteAry=[];this.projectionType=__WEBPACK_IMPORTED_MODULE_1__utilities_settings__["a"].projectionType;this.sectorSizeHalf=__WEBPACK_IMPORTED_MODULE_1__utilities_settings__["a"].sectorSizeHalf;}
loadFromNode(strategyId,xmlNode,filePath,finishCallback)
{let defaultObjName='';let defaultGroup='';let defaultId=-1;let defaultAIName='';let attr=xmlNode.getAttribute('defaultObjectName');if(attr)
defaultObjName=attr;attr=xmlNode.getAttribute('defaultGroup');if(attr)
defaultGroup=attr;attr=xmlNode.getAttribute('defaultId');if(attr)
defaultId=Number(attr);attr=xmlNode.getAttribute('defaultAIName');if(attr)
defaultAIName=attr;let spriteNode=xmlNode.getElementsByTagName('sprite');for(let i=0;i<spriteNode.length;++i)
{let objName=defaultObjName;let group=defaultGroup;let id=defaultId;let aiName=defaultAIName;attr=spriteNode[i].getAttribute('group');if(attr)
group=attr;attr=spriteNode[i].getAttribute('objectName');if(attr)
objName=attr;attr=spriteNode[i].getAttribute('id');if(attr)
id=Number(attr);attr=spriteNode[i].getAttribute('aiName');if(attr)
aiName=attr;let sprite=new __WEBPACK_IMPORTED_MODULE_2__2d_sprite2d__["a"](__WEBPACK_IMPORTED_MODULE_3__objectdatamanager_objectdatamanager__["a"].getData(group,objName),id);this.spriteAry.push(sprite);sprite.loadTransFromNode(spriteNode[i]);sprite.initPhysics();if(aiName!=='')
__WEBPACK_IMPORTED_MODULE_4__managers_signalmanager__["a"].broadcast_aiCreate(aiName,sprite);}
}
init()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].init();}
cleanUp()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].cleanUp();}
destroy()
{this.spriteAry=[];}
update()
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].update();}
doTransform(object)
{if(object)
this.transform(object.matrix,object.wasWorldPosTranformed());else
this.transform();for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].transform(this.matrix,this.wasWorldPosTranformed());}
render(matrix)
{for(let i=0;i<this.spriteAry.length;++i)
this.spriteAry[i].render(matrix);}
}
__webpack_exports__["a"]=Sector2D;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__library_gui_ismartguibase__=__webpack_require__(130);var __WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__=__webpack_require__(26);var __WEBPACK_IMPORTED_MODULE_2__library_common_defs__=__webpack_require__(0);class SmartConfirmBtn extends __WEBPACK_IMPORTED_MODULE_0__library_gui_ismartguibase__["a"]
{constructor(uiControl)
{super(uiControl);}
execute()
{let menu=__WEBPACK_IMPORTED_MODULE_1__library_gui_menumanager__["a"].getMenu("confirmation_menu");let yesBtn=menu.getControl("yes_btn");let megLbl=menu.getControl("message_lbl");let smartGuiCtrl=null;let conformationMsg='';let executionAction='';let actionType=__WEBPACK_IMPORTED_MODULE_2__library_common_defs__["s"];if(this.uiControl.name==='main_menu_btn')
{conformationMsg='Are you sure you|want to go back to|the main menu?';actionType=__WEBPACK_IMPORTED_MODULE_2__library_common_defs__["v"];executionAction='title_screen_state';}
yesBtn.smartGui=smartGuiCtrl;yesBtn.actionType=actionType;yesBtn.executionAction=executionAction;megLbl.createFontStr(conformationMsg);}
}
__webpack_exports__["a"]=SmartConfirmBtn;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";class iSmartGui
{constructor()
{}
create()
{}
handleEvent(event)
{}
}
class SmartGuiMenu extends iSmartGui
{constructor(uiMenu)
{super();this.uiMenu=uiMenu;}
}
class SmartGuiControl extends iSmartGui
{constructor(uiControl)
{super();this.uiControl=uiControl;}
execute()
{}
}
__webpack_exports__["a"]=SmartGuiControl;})
]);