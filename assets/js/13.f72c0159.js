(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(_,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("[TOC]")]),_._v(" "),a("h1",{attrs:{id:"autosar-dcm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autosar-dcm"}},[_._v("#")]),_._v(" Autosar-Dcm")]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"_1dcm-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1dcm-init"}},[_._v("#")]),_._v(" 1Dcm_Init")]),_._v(" "),a("h3",{attrs:{id:"_1-1dcm-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1dcm-init"}},[_._v("#")]),_._v(" 1.1Dcm_Init")]),_._v(" "),a("p",[_._v("初始化时候使用，那么一般会在配置哪些信息时候，使用到该模块？")]),_._v(" "),a("h2",{attrs:{id:"_2-dcm-getversioninfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-dcm-getversioninfo"}},[_._v("#")]),_._v(" 2 Dcm_GetVersionInfo")]),_._v(" "),a("h3",{attrs:{id:"_2-1dcm-vendor-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1dcm-vendor-id"}},[_._v("#")]),_._v(" 2.1DCM_VENDOR_ID")]),_._v(" "),a("p",[_._v("#define DCM_VENDOR_ID                   STD_HIRAIN_VENDOR_ID/* Supplier ID */")]),_._v(" "),a("p",[_._v("未找到具体的值，")]),_._v(" "),a("p",[_._v("#define DCM_MODULE_ID                   ((uint16)53)/* Dcm Moudle ID */\n#define DCM_INSTANCE_ID                 (0)\n#define DCM_SW_MAJOR_VERSION            (1)\n#define DCM_SW_MINOR_VERSION            (1)\n#define DCM_SW_PATCH_VERSION            (14)")]),_._v(" "),a("p",[_._v("#define DCM_AR_RELEASE_MAJOR_VERSION    (4)\n#define DCM_AR_RELEASE_MINOR_VERSION    (2)\n#define DCM_AR_RELEASE_REVISION_VERSION (2)")]),_._v(" "),a("p",[_._v("也包括括号内（1）（4）（14）这些数值，是想要表达什么意思？？？")]),_._v(" "),a("h2",{attrs:{id:"_3-新增服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-新增服务"}},[_._v("#")]),_._v(" 3.新增服务")]),_._v(" "),a("h3",{attrs:{id:"_3-1如果要去除某些服务-该如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1如果要去除某些服务-该如何配置"}},[_._v("#")]),_._v(" 3.1如果要去除某些服务，该如何配置")]),_._v(" "),a("h3",{attrs:{id:"_3-2如果主机厂要新增自定义服务-该如何配置及定义接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2如果主机厂要新增自定义服务-该如何配置及定义接口"}},[_._v("#")]),_._v(" 3.2如果主机厂要新增自定义服务，该如何配置及定义接口")]),_._v(" "),a("p",[_._v("需要考虑什么信息")]),_._v(" "),a("p",[_._v("需要考虑什么规范")]),_._v(" "),a("p",[_._v("需要考虑什么分层信息")]),_._v(" "),a("h2",{attrs:{id:"_4-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-模式"}},[_._v("#")]),_._v(" 4.模式")]),_._v(" "),a("p",[_._v("COMM_NO_COMMUNICATION")]),_._v(" "),a("p",[_._v("COMM_SILENT_COMMUNICATION")]),_._v(" "),a("p",[_._v("COMM_FULL_COMMUNICATION")]),_._v(" "),a("p",[_._v("这些模式对应于诊断哪些状态，28服务？")]),_._v(" "),a("h2",{attrs:{id:"_5-dcm-readmemory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-dcm-readmemory"}},[_._v("#")]),_._v(" 5.Dcm_ReadMemory")]),_._v(" "),a("p",[_._v("结构体整体框架逻辑是如何设计的？")]),_._v(" "),a("p",[_._v("index \tsector")]),_._v(" "),a("p",[_._v("(DCM_INVALID_MEMORY_ID != DCM_DDDID_ELE_MEM_ID(BufferIndex, DCM_DID_SIG_INDEX))")]),_._v(" "),a("h2",{attrs:{id:"_6-autosar-后续开发问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-autosar-后续开发问题"}},[_._v("#")]),_._v(" 6.Autosar 后续开发问题")]),_._v(" "),a("p",[_._v("我们只需要考虑配置？")]),_._v(" "),a("p",[_._v("假如当前配置项不足以支撑主机厂需求，增加功能时候需要考虑什么信息？")]),_._v(" "),a("h2",{attrs:{id:"_7-rte-call-dcm-xxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-rte-call-dcm-xxx"}},[_._v("#")]),_._v(" 7.Rte_Call_Dcm_xxx")]),_._v(" "),a("p",[_._v("Rte_Call_Dcm_ControlDTCSetting_0x01_Service")]),_._v(" "),a("p",[_._v("看到很多Rte相关开头的函数接口，在Dcm程序中并未找到，是在Rte层")]),_._v(" "),a("p",[_._v("另外，Dcm如何控制收到报文后，到指定的服务执行相关服务。、")]),_._v(" "),a("h2",{attrs:{id:"_8-schm-switch-dcm-xxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-schm-switch-dcm-xxx"}},[_._v("#")]),_._v(" 8.SchM_Switch_Dcm_xxx")]),_._v(" "),a("p",[_._v("SchM_Switch_Dcm_DcmControlDtcSetting")]),_._v(" "),a("p",[_._v("看到跟SchM相关的函数，该模块是谁在控制")])])}),[],!1,null,null,null);t.default=r.exports}}]);