"use strict";const{contextBridge:i,ipcRenderer:r}=require("electron");i.exposeInMainWorld("electronAPI",{insertFile:(e,a)=>r.invoke("storage:insertFile",e,a),readFileInfo:e=>r.invoke("storage:readFileInfo",e),removeFile:e=>r.invoke("storage:removeFile",e),sendFile:e=>{if(e&&e.raw&&e.raw.path)return r.invoke("storage:uploadFile",{path:e.raw.path,size:e.size,name:e.name})},pasteImage:()=>r.invoke("image:paste")});