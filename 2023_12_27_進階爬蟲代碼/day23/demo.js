var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IDBFactory = v_saf(function IDBFactory(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Option = v_saf(function Option(){;})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMStringList = v_saf(function DOMStringList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IDBObjectStore = v_saf(function IDBObjectStore(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
IDBRequest = v_saf(function IDBRequest(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBRequest, EventTarget)
BatteryManager = v_saf(function BatteryManager(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BatteryManager, EventTarget)
IDBDatabase = v_saf(function IDBDatabase(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBDatabase, EventTarget)
IDBTransaction = v_saf(function IDBTransaction(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBTransaction, EventTarget)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
DOMRect = v_saf(function DOMRect(){;}); _inherits(DOMRect, DOMRectReadOnly)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
IDBOpenDBRequest = v_saf(function IDBOpenDBRequest(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBOpenDBRequest, IDBRequest)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
KeyboardEvent = v_saf(function KeyboardEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(KeyboardEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLUListElement = v_saf(function HTMLUListElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUListElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLParagraphElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 9);return 9 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" }},
  webkitPersistentStorage: {get(){ v_console_log("  [*] Navigator -> webkitPersistentStorage[get]", {});return {} }},
  mimeTypes: {get(){ v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);return this._mimeTypes || [] }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" }},
  getBattery: {value: v_saf(function getBattery(){v_console_log("  [*] Navigator -> getBattery[func]", [].slice.call(arguments));})},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-TW");return "zh-TW" }},
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  length: {get(){ v_console_log("  [*] DOMTokenList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBFactory.prototype, {
  open: {value: v_saf(function open(){v_console_log("  [*] IDBFactory -> open[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IDBFactory",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  cssFloat: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssFloat[get]", "left");return "left" }},
  getPropertyValue: {value: v_saf(function getPropertyValue(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Option.prototype, {
  selected: {get(){ v_console_log("  [*] Option -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] Option -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  initEvent: {value: v_saf(function initEvent(){v_console_log("  [*] Event -> initEvent[func]", [].slice.call(arguments));})},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 1865390.4000000358);return 1865390.4000000358 }},
  type: {get(){ v_console_log("  [*] Event -> type[get]", "mousemove");return "mousemove" }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  returnValue: {get(){ v_console_log("  [*] Event -> returnValue[get]", true);return true }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
  currentTarget: {get(){ v_console_log("  [*] Event -> currentTarget[get]", {});return {} }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
  composed: {get(){ v_console_log("  [*] Event -> composed[get]", true);return true }},
  srcElement: {get(){ v_console_log("  [*] Event -> srcElement[get]", {});return {} }},
  cancelBubble: {get(){ v_console_log("  [*] Event -> cancelBubble[get]", false);return false }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMStringList.prototype, {
  contains: {value: v_saf(function contains(){v_console_log("  [*] DOMStringList -> contains[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMStringList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBObjectStore.prototype, {
  get: {value: v_saf(function get(){v_console_log("  [*] IDBObjectStore -> get[func]", [].slice.call(arguments));})},
  put: {value: v_saf(function put(){v_console_log("  [*] IDBObjectStore -> put[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IDBObjectStore",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 20);return 20 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 351.5);return 351.5 }},
  right: {get(){ v_console_log("  [*] DOMRectReadOnly -> right[get]", 1903);return 1903 }},
  bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 4761);return 4761 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: {get(){ v_console_log("  [*] MimeTypeArray -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  cloneNode: {value: v_saf(function cloneNode(){v_console_log("  [*] Node -> cloneNode[func]", [].slice.call(arguments));})},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "UL");return "UL" }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  textContent: {set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "UL" }},
  compareDocumentPosition: {value: v_saf(function compareDocumentPosition(){v_console_log("  [*] Node -> compareDocumentPosition[func]", [].slice.call(arguments));})},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBRequest.prototype, {
  onerror: {set(){ v_console_log("  [*] IDBRequest -> onerror[set]", [].slice.call(arguments)); }},
  onsuccess: {set(){ v_console_log("  [*] IDBRequest -> onsuccess[set]", [].slice.call(arguments)); }},
  result: {get(){ v_console_log("  [*] IDBRequest -> result[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"IDBRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BatteryManager.prototype, {
  level: {get(){ v_console_log("  [*] BatteryManager -> level[get]", 1);return 1 }},
  charging: {get(){ v_console_log("  [*] BatteryManager -> charging[get]", true);return true }},
  chargingTime: {get(){ v_console_log("  [*] BatteryManager -> chargingTime[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"BatteryManager",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBDatabase.prototype, {
  objectStoreNames: {get(){ v_console_log("  [*] IDBDatabase -> objectStoreNames[get]", {});return {} }},
  transaction: {value: v_saf(function transaction(){v_console_log("  [*] IDBDatabase -> transaction[func]", [].slice.call(arguments));})},
  close: {value: v_saf(function close(){v_console_log("  [*] IDBDatabase -> close[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IDBDatabase",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBTransaction.prototype, {
  objectStore: {value: v_saf(function objectStore(){v_console_log("  [*] IDBTransaction -> objectStore[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IDBTransaction",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  which: {get(){ v_console_log("  [*] UIEvent -> which[get]", 0);return 0 }},
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 0);return 0 }},
  sourceCapabilities: {get(){ v_console_log("  [*] UIEvent -> sourceCapabilities[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRect.prototype, {
  x: {get(){ v_console_log("  [*] DOMRect -> x[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"DOMRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  characterSet: {get(){ v_console_log("  [*] Document -> characterSet[get]", "UTF-8");return "UTF-8" }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
  createComment: {value: v_saf(function createComment(){v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));})},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  URL: {get(){ v_console_log("  [*] Document -> URL[get]", "https://sugh.szu.edu.cn/Html/News/Columns/6/Index.html");return "https://sugh.szu.edu.cn/Html/News/Columns/6/Index.html" }},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
  onreadystatechange: {get(){ v_console_log("  [*] Document -> onreadystatechange[get]", {});return {} }},
  onmouseenter: {get(){ v_console_log("  [*] Document -> onmouseenter[get]", {});return {} }},
  onmouseleave: {get(){ v_console_log("  [*] Document -> onmouseleave[get]", {});return {} }},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments)); }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "sy1_tit");return "sy1_tit" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "sy1_tit" }},
  outerHTML: {get(){ v_console_log("  [*] Element -> outerHTML[get]", "<nav></nav>");return "<nav></nav>" }},
  attributes: {get(){ v_console_log("  [*] Element -> attributes[get]", {});return {} }},
  getElementsByClassName: {value: v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})},
  id: {get(){ v_console_log("  [*] Element -> id[get]", "left_p_14");return "left_p_14" },set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return "left_p_14" }},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  webkitMatchesSelector: {value: v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1903);return 1903 }},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  clientTop: {get(){ v_console_log("  [*] Element -> clientTop[get]", 0);return 0 }},
  scrollLeft: {get(){ v_console_log("  [*] Element -> scrollLeft[get]", 0);return 0 }},
  clientLeft: {get(){ v_console_log("  [*] Element -> clientLeft[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBOpenDBRequest.prototype, {
  onupgradeneeded: {set(){ v_console_log("  [*] IDBOpenDBRequest -> onupgradeneeded[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"IDBOpenDBRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
  fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(KeyboardEvent.prototype, {
  keyCode: {get(){ v_console_log("  [*] KeyboardEvent -> keyCode[get]", 123);return 123 }},
  DOM_KEY_LOCATION_STANDARD: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_LEFT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_RIGHT: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_NUMPAD: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"KeyboardEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 0);return 0 }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 0);return 0 }},
  offsetTop: {get(){ v_console_log("  [*] HTMLElement -> offsetTop[get]", 0);return 0 }},
  onerror: {set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return 0 }},
  onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return 0 }},
  onmouseenter: {get(){ v_console_log("  [*] HTMLElement -> onmouseenter[get]", {});return {} }},
  onmouseleave: {get(){ v_console_log("  [*] HTMLElement -> onmouseleave[get]", {});return {} }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
  content: {get(){ v_console_log("  [*] HTMLMetaElement -> content[get]", "{qqqqqqqqql4096h7oylA84HXY2qr0qc64~RMo0ctcGImpfVSYIvUwAry1juqhgGykUIDiywBYIbxdEJBc6DtMVgCaBQmQAze2IjcHEbyfBsDjawe1sarjZl6YIzD5G._YdpEx7I2fUCKXAGuTI1x7L52avnURxQCa6EJxa5TYIZm89HeuBnKzWtCYO4KWqoO1oTJJqJ6sjhqIatCAvhUH2UTG1.JFZ3zf_1JtE_dPKzmtleB1K9xx0i.Y8bKNV_LujvU5RVgudNo_9Xb2neUMWrgniKAXmMBms.Y8eczSd2EjLbLYCkmxETfn_OAzTMGmsUYwzcGSdpxge3bs_2JxGvOm6lY4qPfn.cHy7Bfm1BkZaRzqD4r30G7a8HrxZXcKRflv0U82xBl0G.QpmXUsaxisS5xvLTH1p7iOq0W0qepGqqqqqqqqhutDkSfdlg8JJ1710053543052qr7kWz7lk2afqD87f809qqqq!J7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,map,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqqqk162hsTvXPBtnqOhr1qiURS..KbjFF2B.aqQm40GOcFxx3g2ePoTEB7Be1UnxHVPr0qqqqqqqqt1083179008Y3M5zzI3aDni2CKD5u6cwrVUWJzeD60MHrBZCOuMdyBr07cs7bQ6TpRpxoK6yWxGJbhUaBRuqbQP3WRnx7HnQGI1p2c64`rSfqdm3PPoQJNpuXk8z8FyofborVgz6BOBiR3TP6ub2M3NLMcfBQKyLhCNSFD9LFom.FcpjIDfbtDYS3DfAtcajY2Tewlx8x02vAlpqhKr1I1l6h2z8xPrIwUmaFkmjFCfutlySsKGiF2RL1cfhQVNLcCNwFlYRrP3mK6JYQ9wCUUwX3TSKMqz6MlwKpAJ2mky7F9TLY1fVQYwLlDNEFmELVUl7FDTjJCGBtcNStKGMtDV08KaKUATQHT7o1amihKlWwsykmvQYxb2IivlyFoNjEbG0tkwSJbf6FP2LW1GaQsJLsDLVFqyRsnRV12reokq5QsSPJbGJwqeMUVfYWSSTssg.FGpLoPGwQpfLKKLkFr7LmvlYFmRjkbGAtrJSlbGPttETaok3s590_uoSMdJWeUM_RZS8ZTB_x.RIg6oPFtJjyKOetHSSdCPgFXrL5POyQIpLzK.BFHwR7cF7IIrHjCj1R7eY0UkYMeTweYo1YZT2PO4nFzeLSnOcQQmLGb.FFJaL66o8FxejaKORtJfSCCO2tx7C2muZR5Ytu9vtAzNV9DjjwERNe0cmxBeIjoD.FipjBDPbttYSLDOfF.zLLnP5QMTLdbjbFhfR51M9WtlaLDtSwMzB49_7shre2m1gV4pkau_yFNRLPcPhQ3NLnCjwFEVLfoDoFWrjbDPctEmSvDP7tJqCv0cyYNx1uCtZwtxWPKCnHWzx9UnQx7pI9Ur7F1T.wC2BtKNaFK9jF6xNRc2vQDRNxCzyFKm3EPQeQ6y1EbeqYomCE0yC3nlnx02a3TR9ikeqFC2NQ12aQoJNkDzVFVgNsUrEFA2.VC2htVRapK26tA9CoUpO1KxUUvp83lx0pKwDMATKIbe6xaT8YvrYFpR.sb2AtYJaVb9sFuYNh197QceNFD7aF1N3Fnw4WpTnx0Td3sNhDlAKJuzAiYV51sY0QsZHFnrNiP9yQkpNwK7BFsQNWvqSFUx.tb9WtAeakb95tV3CUlGaFSm.tTLrMkeelTAuWTycHCG8x0N8o6q8FYe.qK9RtpfaDC2VFaSNmP9YQrrNVK7hFpJ3.c8n1epn4uk2RdejZ0I5WZmdyOUcIiS9.OdKFdzNgnv5QHTNBbBbFIGN56k_FMz.4KvTtIpaeCvrtMZCZDoBQXNZZCHbIxrt9OhnwQ96ZvoRxyJ8SokoF3r.CDvctQma6DbwFZwN6nvFQJ2NbbBcFwp3218iMIrk5m6TUIJ1fu1SVEzCODCFsBJ9yu5wF4xNNcbvQtRNyCXyFFlNLocOFIS.NDb5tMTaXDbEtIASLvKHVxNbz9_FALzK925VR_30T9FGxef8OUcEFQ2.9Cbht3RafKvDFyyNGcbkQExNaCXmFRT36PIoIZSJCC_51RfdLmCpV.TP79bzpgy96k59FoYjM1N7QCejtDfaFbLjFUJ9FPYLICNvtbxu3KNstP0uQ6x9YDzKIbNCW2e7xCr0AYT91TY4xcmwQvJSFOxLFbNWt9eusbLHFmmj11NEQ0zjrDfQF9RMrnARwUphU9mIIlNrRVWcA6wSQTrm1rfomsSOFlSjYPNYQTrjlKfhF2WjhvWzFbyLJbLLtPzutbLFtbLaDsE4Vca5kKVXWryZHTZNIkTRxlAnxDywi6W_FvzLhKLTtOpuJCNaFcfjWPLSQaSjsKGUFGeM1cpsYYgCYompAPSHllZ3WYYsmK9WsrevVOajFqwjonLFQS2jKbGcFfAjm6WKF2wLcKLptfrulC.wtjWaTTH_FX35_Ks0U7E5nbB7UZxvanOhxhwwgoHOF.SLyD.5tBTu5DjyFiJj5n.CQdYjzbOXFBrM711L3B2zn0kxWzJB_sIrwRmG0OomJZeoPuuSFJyjac.kQZxjGCOmFz0j6oHIFNfLaD.Ftz2uTD.9tNGSuvumVJJt09DxI4A07v_4Itymvoc9xHSwjUi9FXYLBCjvtjxuLK.PFhNjBcjdQ4yjdCPfF.2M5PsBWg2W4DjwV.Nu7k8pJx2cX2KB1wfrakngFxmjP1jEQgzjSDPQFL3jfUiqF7mLbCjktNyuvKjBtzl5Bmcy1Egn2D5GHNqazVvtV4NBvC_yxWYQMvxzFnyNwbzLtCznFb7.FUT.R1z9Qbw.ED2gFCxFEnVLwc29wOrRI0YCADyIwVrJKbxnUCeDisToFKf.QPzSQ9S.kK2UF0Z.1vxxFaNNVbzlt0wnpbzCtagdYlNeUCwjRVJCW6mBQow91omYV9eaxAxQY6xKFSwN1KzptTrnVCz7Fsp.hP7zQPf.FK9uFnzFRcVEUuLdElZeJarGhlEmQuYYq0GJJkeqwO0iF1J.in7CQOY.wb9XFuq.W6EnF6JNmK7JtaSnkC7yt0wDovwIQuSTqoVXMrzSomE9snaCKvlSxVzQooEIFTfNqD7FtS2nmDzYFAe.mn71Qfm.Vb9tF5SF.1UqHBrXn0HHV4wj0THpMISOCUUr3zeD.u6YFIN.dcBdQBy.BCvfFd9.5oh4F4pN4DBCtdYnZDBqt4SmZCUTHZ7699PYA8Y649vNUwp60VkXxRrQSUhqFgmNCCBkteyn6KX8FQR.CcBMQzN.bCvJFeYF2PUgAZ705UkXJgeqZVF1wdz3PO1hwMRCykCQFMT.N1X9Qjw.gDbgF_E.LUtZFdTNNCXdt4NnXKXhtdYl.mP8sgT8zOKI3xNk40C.1_ldflnkxw2QPvtxFZNN9bXltgwnfbBoFR2.G1XqQLJ.6DblFyyF6nKaVWSW.9jz17TqalX6pMp276izWEwD6sxMRvp9MPpzIKf9tKRuRD79RvT2RcRbIbpGxDJe3bp1xkxW3bzCUopvVbY_RmpdE6gzHleMETSQtPRsQ6TnRkJbYKpJxlSesCAER2r91PpxIVp9rKRIRlwYqcNL3fNt8DzEHKz8Y6mFVve43CJ8p0YNDOxPR9e9Ynp1IYm9lbRtRca9h60XRDebWKANxcfetCAYxDzJx9N_sPm1HD9bHqywWsaZpCYPRmg2tbesio04RopbhDACxkYeWDpSRPz9WnAiIAT9sb3KRqfY11LGWYwNUKyo3syjxTxVUqxGkkZrISNNVuENRGR9DcAMIpN9KC3JRrV9mo0URmrbcDA1xrme4DsQxtriSYhcF.rSuTvhA7N3gsd.3HJ54Yd7t.psgU6ZRhTbyCsdxHNe5K1_RXx9ecs6IIR9zCMNRHmY7P.RIQmf_To7iyYn_k.A3H9buCk9HIzyPkhaRz29a1sqIQJ9vDMlRJg96U63Rx2baCsMxJReTKsvxx2Huu4PUHwPC9FXRRwMzKcK3HRwBUnvtBTsNvC2RiRbBb1GxtJeLbsORjY9B11ZIMe95DFGRhNY5njAKMrwGnF8iXe4ObDSFyfx.TdH3gSxastdRNr9PP1xI3p9SKFIREQ9GvCrRWxbbb1Qxxeevb1XxJRqLUnpF7rBOb5rAMpOv2nYQ.zXBmP5tuN1M6SXR1evQKYNxKfZFCV9R6S2RPY2IDr2EKw4RKJVHczRU0zOUkTmIVmkVuqBH9ezUK7.IKziHOJDRCz2QnYiIlT2kbwKRVG216StRAzvUKYmxVpZpCYSxAerwmy6Kmg_YT2c8m2ppsfw1lRa3vNRtaJ1YoSURprv1DY1xYmZhDYzRuw2hnVjIc22FbQnR1pVR17cMPfprDpd8a2XmOl2spwHovLypqxEwuWJRnx2JcV6IkR2wCQNRsl2WoauRVSvmDVixATZcDVgxVprkTa48qGZhVa3VuydiOqo1PNo1VQCt0f1oUa3RY2vqCVMxpRZmKYKRay2lcVsIrx2VCITR8TV.PBhR.wPCOBqRJeGZ2OXU7g5BTHt15Ri.kHVR5Y2d1UZIHe2XDIGRIL25Uu0RMYv4CU6xIxZZKUkxMTrT94iIXwm9YM6AeYjnmdssZS86Uohtym1avurR3xvCbUQxweZ6bKIRZm2C1U3IJz22DIWRwRV2nBTYXwL4TdQpEzl.TFoHIzFdK17UxRLysisR4S2NPK2Itr2gK84RFW2BvneRIyvNbKgxMzZXbKtxINqzv4z35JeXDFQiMW47V1F83JBTDcPtey1P6ntRQzvvKKmx3pZfCUqRyf2GPKrIxS26K8oRReVCcXdHZwWvmvh8RzfXkdYWMES9m5UF_NJEOrFRowbMnRjIC2btbpnRbAbR6ebRPw98KRfxbrd3CRJxOJqA9zUR0x58DmWi0YiIVxLIcx8UvxetcwpQoeuRGS9YDRix9Td1D3xRmJb1nRDI0Ybrbp8R9rUq1f9FlW48Dmw322Yp0T5s9RosueZVmx4DurfRlybVcRsITxblCATRP0bhoZBRbf9WD3jxP2dxD3VxbfrIvExiDJdHOWNRkSNrTgURPphik09tDSpiUZ0RvY9hC36xOxdWKRnRcNbkc3HIaybsCApRG2U1PG7WSzul0ZFKpyzc6EdMqJdqDgb1rp4VkqLRqmbD133ISzbYDAWRf3bmUZAR2m9cC3sxXyd4KMIxjmrS2vvUFfY7T4.sZxNX2UiV7xo_VMHthYpdvdeR.y9ybMgxBzd5bF4RiTbe1M0Idwb7DsLRBxU7nO7H7rn_O4iQifGTs.zKRRJ49h9QXm4Psk6RJfbaPMrIeSbvKsoRzZbCvdRRNN9abMVxzwdTbMbxNyD6bsxAwzF4bdg1y34.OXGRjGd.V8CtHxpN65bRXw9XKFfxjrdLCMZRtpbBPFeI4fb5K1OR.zUecPUHjJZ.01AW_NFvD6LKFSwOO52FJp4SOc5RxJbPnFDIgYbSb18RLqbG65cR7J9fKFwxNSdvCFNxzwm2VXaFyr89otB8JY.uDcMY3TQf0NotszAMoyBRnf2QDwjxC25RDQ2RUevRnwPIbmvEbY_R6SKH12wRvx7MsTvFm2IIlyR1oJvVCATKDp_HummRKNvscwHI9yvkCYpR09v1oyhRap2UDwDx0Y5ADwaxaSMRVVcKTwlKYGo8GleI0wHQ6mq1VxgtArAYUyARSm21Cwsxny5hKwXRsRvtcQ.IPNvFCVeRnYKRP9MVnQn8D3OADmgi6Eq3kyDx90kKsStwklWR1TvJ1Q0IOwvQDVLRuEvWUgWR0T2mCQHxaN5cKQ4x0YMWbLJi1SyoKltIOY5h6GT8PpcAUlutV2ADvgRRTN2qbQVxSw5mbwURA2vl1QAIfJv.DU0R5yK.nvV8dxjSm6BiQJc4KvLRexG6Ts2HHzj.sohR8pvdPIeIBfvXKUORd7vev4TR4R24bIaxdJ5ZbIcxgxFyK4W87rfyV.lM70gakXM8Ql2flo7tRRAa64cRgJ2SKIwxeS56C83RQrvCPIRIzpv2KUHRewK9cv7peYM5YH0I.RZ9lj.iLY3jK8uMBJj_OD1RMevNn8PIjmvgbK_R4avB6_5Rde2LK8yx4f5XC8mxdzR4o5fVRgyv0DrsLwN7UCc1hwsPuCOtweAPo_hRZp2vD8DxgY5GDIrRRzvGn88INTv6bKDRyfKC1b2AgrqnutTFMeePOtIKMle.V12wKzJEuRR3vRGFcr.8KNGtCxe3DVGRo2v3crP8DrPEDmyIDrWEkrIU62R32N8AVxeForF8uTPYUyfR9mZhPpUQU2W3qTPYCrHElNy1Kqt32xGpcro8VRGrCxR3lmpqPyZU2SLrDz.3lw2RY7oKDyGAKrAADTJDkRG392GV1rA8YJGMDE03cgGhU9L3D2PWCq.EcRyxKqUED2Io6gdAsNKrl98RrTomlWCFPm3HTGUhbTUJv9T3oRPhbqaEkJyWbru3fYGk1qW8AeG1DEA3qNp1ng4KGrFVvG9VuJZhCEZKTzOoo928PfeVs3B3GrGDPqR8ppGYKEH3rQGlv9p3mxPcbk7Eiey4bk8EtR3SDv1JhRl5oMHIwJ25U42s77TBY.EhjNUd6v53hePgKkyEHfy5Cc03XSGePkT8IrG7Kh.3HJpOc4TVdT2aUOv37Ey9bOK1XmDdvUmsexeOOMC3zzGank88wTGvbhD3JGGC6vF3xzPuKkYEJpyTCkfExeR_UU5HtGZ.0bjA32NvbbBMy2lOU1yhBJUNobv3irPXDcPEtmyBDke3jwGBnc_8M2G5btP3hppe1_HMLEyv2MNwhl09OKawRRFCbvKsgShSuFe3NxGfcco83RGSCtR3ElGGobk3JSPfDc8ExTybDcLEJpR90oqHMmtz9cC1jecP6b9AFy3YsNqhufKMUfL312OQCm.EKRgRKlb36yf3cmO8DxfECJ23UTAHPeD8CmWKDxSpDwFIlZ7Mn2e8Yp6UkJtHkwl3TYfs1mW8lefcDJA3VLf1Ufl3AYOUCmoEVxgAKmuEATMVYTPKKm.F6NkA9J_RDrTK22lUCR4hamKVvfp3pxO1bl7E1eghbmB3umft1lL8czfRDWZ31RARnZF8nxZxbVPYDGylCLFFkNflDgAFaSWwsQk3nSfJPlT8krfQKW.3sWfkvGJ3VyOmblEEAzgcbl_EVNFKTL7smS_o0S3wYyWc2YoHkJrrV9nh0yKD6GF3YzOkKlYEppgmCmA3afflPlp8iSf.KH638eAjcd1H7reeu.o1HN06kdtIZpYzVIyVXRZ7OIt35wfdno_8H2fXbHP3IAfe6OC3MwO_KoSEIrgZCoeE3JFSYUoF7NxgKktEZN9bTU5KHxWuk4JhywKaoOk3RSOSDo8EwTgCDDR3ZJfCnoK8JYf2bHi3wrA91db1XyvzCbKpHw_fl_nY4rRfY4SixmZ_u8p34yfLcDO8txfgCi23M0fBoPd3IfOLDD_EM2gzDDlEIfY9DDK33Sv9oKY8zrb2lIMMeL_zTtPheSKPUPl3QYOvCDoE3xgGKoc3yNfvcDI8xyf6Cir3R2ACP5BFMY5Tu5JA4SjSlKUAZQgv23uKOYHEkp33omPF1xL8CzPxDrZ3b3PRUzG3PmG8CxOEvy4IKxHEOmUUO2yHCw6RbeKUoZgK1ri8lRms0SRhcYYsvzJ3GyGYbxEE9z41bEh3mTPp1xl80wPqDr339xsqnSNRax9IvR7ACx4qDrcp6eHY22dsmxxDspv3lfPVPxp8nSPMKq63PZPtv7N3bNGWbE9EPw4xbEKEbyUxvZmIUwymnqr3bNPiCEiMqxCECEKhDxYJ67C3vwGtKESEOr4WCxW3rpPkPEJ8afP1Kqs3GzspcauAarxo93LR1Sgr9LhHnYzlD9Ksn2HYOAX3qJPDnEK8SYPYbqi3fqPl67132JGeKhzEXS44ChREjwVZ6veHHeD7mb9seTtXCMDY7StXo6fhtzYdoBd3.fGgDh_EB24eDtT3iePenhn8dmP7bkj37SsO1ueFJA64YuPMiJy9bnDRNTR4Dog8z2dOusT3JNP6chI8eyPvCkr3z9PCoBM3NpGuDhKEzY40DhGENSB9KtBFBEd2U548hJ4LuXEIENJdVFghHrYNUXG3XmGXCtOE.y4BKh53tRPXct484NP5Ccz3.YsePnyphNZ2VnKRHme2TPxIzAyjv_sHQzdSk1Z3xTPf1tl8gwPaDc33LEPGUXQ3zTGfCtIENN4bKt.EzY7OsBqFNwk29C.3RN0ODn7wuYT30xmhs2VFvNN3nNfQbJ9ECw_RbWv3U2O31JG8bJOHDm936y1HnT6J6pQ1Krv1bxD3UN4wPTosTVNY0eXHsY43YpOsPJJ89fOcKms307OpvNm3aRfUbJqE0J_AbJnESx7FmekpqNLpVwl36rNsKYpwvxvklw_hARVV6N13SJfJKWzEnS_hCJL3srOtPWN8PpORKld3nw13c0XwaS_DDGwUGplJlL4EKmZhVg9UfRE8OVc31eOJnWn8OmOQblj3aaOk6Li30eflKWxEaf_cCWTE0z.UYVm1aLgoCEmUaACoULAYnzRAoamhVeVDoLM3TpfkDWKESY_lDJp3AzOlnHX8XTO.boC35f1j16Pp525a2IasJYgn2I3sXRl5udF8dw57uUx38RO5cH48BNOXCoz3dVOeo.634rf_DHnEdm_uDHZEgr._96YsXxWSDspUQE6ylMmKXTWg2B7hRpVaU.Q3yTfSCHIEeN_CKiF3QxOTcHU8zRO2Cox3em19P6MwFyTP65_3j0Zf9DwwIpLGYFvRjei_kKA3M2OL1iG8jJOdDD934gOBUjg3d2fLCi4E4R_zKioEd2jvVnS8jNFvo5xw_JYLlP2EM749bPfhwTVfvjm3ZRfvbiqEgJ_GbHk33YOv1iQ8NeOCDDq3yN1CnCwUMxPa6OhANfvnbPwJZNFRKwNAUJSE1NIIvrZFOSNRKpZxUydIDQZ3bYfIcx58vSZHoe2IvSiHkRTAYxxworHEoSD8mSuhnYdx9a5pmRXWfNhsCYiIqe5VUSxHlf216alI2SZpOSmRVrZqUyMIlJJokxUYDp_rv0kwoxKAKJ2Kv7531AE82TSoPNbI9zZVuaXR1TZMvgCIcGZtCVjIDz5HUa2Hcp2x6apHDeCmbQMAbJ9kbEVwfxlWDGwwDe_3mANWbJhJDV6Ior5toanHkm2koSJIfwZkuatRA2Z1vg1IqpJpsEWsaqNJ2W_AYzvo2WV3rAPicWAKSrfYnLzIGxZmkaURpRZY6gxIrlZlDVsItS5eouXHiT2_ou3HtpCeC1Sw8fV5TdbYhTIC2OcV.fQZ0dAWjfhdKUgIh25g6u4HHR2eUnCIXyZZkuuRIxZ764YIWTJOOhm35WPZobpUX2E5KPoKiEfgYFQYiSpOc.0I7YZ6suQRweZbo4qIJLZCKUVIxY5u6uUHJx20UuOHxTgZ6jPY_z2LU6TVyxKfn8x1ETLNTthWBmhLbKfIix5XvnZHhe2BvudIjmZXsngRMzZeo_7IhRJeut0U_e_zobJ3xrrTT1mttYxGmDUAFyfS1juINSZfOnmR3rZaU_MIEWZvbKwIJy5fvn3Hxz2bvnjHJNgLmhJYNrlf1KTR4wuzvwA1KrnYvScWuytFCpjI1zdIUT2HKp9R60GI6fe3OTfRoSeHUevIUeWikJeFkGdIlpHIb9NsDwr8URKYmSVR9rKqPz_ITwesuTtRl2ecve1IVAepCpDIAwdKUTrHVr9A6TzHpJg86SP3Aw0RYTD1UmeUmSiUGGNIKYeWawtVDpsIKSdJo0XH1T9toTNIuJetu0bRcYeRvZ5I1rW3sW9AAfUJKV9KrrGtC94wurFkD3pRkxA8n7rInyeWk0uRkxeQ6ZYIA0ekDAHIVfdlo0tHA29ro00HVf4i62VwT0OtnGeKaxcrm36KPxLmnWlW0StDKAVIYYdk60UHpx9lUT1IaNe4k6BRiye.6dSI82WjOHzp7yDuYu884TES6hGY.fcuU6MFirA7cBEI5me5s6gRHzezod7II3eeKsaIMmd_66uHQy9uU6dH3m_41UKYyeV4YFAFWfgaTBuUXgGSKkBWyYt6bswIRydSv63Hwz9CvCMIZTeTs6VRJwe9odEIwxW9ui.KhzyGKPQFHRKOUM0UdqdOu5b3_fA_1XUI4feLOCfRhSedU5vIMZeXb1yIINdLvC0HMw9zvCDHIy_20IXQhro.KchEexk20iAU30dTYnGWextfC1DIQwdbUCrH3r9G66QIgpevOCwRxfeCU5kIRzWTki1pFqf7lsxwgzOb250KDRY1ozj3CeuxPf8IoJ5FuybRCY5xvS5Ibq53CwPIPJZRUyeHvSvI6yxHOw5VofDYbNKhvfqAlmrYcE.wm0vF2mrWrzxsDwHIGfZVoytH92vpogmIme5puycR0m5qvSFI2SHosrQpl2FVCYsIvTMKUrKUA2eMo2YYYxOonf2IlN5hkgBRny5M6aSIP95tDQ.IbpZHogbHPYvEogAHbSe8CGpRc2EEmSexfS5Wb3wAnpqcDE8WDrxJKQaIvmZt6guHGyvkUyiIrR5ckghRaN516awIGYHpOqltPRbom088aNyi6QutPzwlcVwQkfsYcG7IqT5msgVRSw5VoaEIfE5lKI7IjTZe64BHXNv_U4MHjYe7YdlVWJe0ChsAMYQCU6CId0.LvBuWt2x5bIyI.NZgv40HBwvev_6Ii25Zs4aRdJ5OouVI7yHOukhAxYQ6ckzFN2Gvlo1QiRVaTkvFWNOO1O.IWp56O4wRef5bUukIz75TbIYINRZuv4AHzJv0v4PHXxejDP1YEmvfvbFUFLjGCs4sFYI.0FWWHRxLC8PIXJZNU_eH.SvB64gItr5XO_yR4p5eUnBI.wHZkcnFLwDBmDiFeJ9z217VeSQv0FpYjmunPPnIxe5fu_cRgm5avnFINa5vC88IzeZGU_RHNfvb6_2HzzPB9KPE_yF.TF1sFymWDRBHVwAJDzTWseEFDR.InpeIoebHCYb3oZfIUzd3ue5RvTdHvTbI6fiismvFUrDYKNSxm0bsoweRY2KR6phI6enqn2yIYRd1kehR9Ndc6TwI0VdpDRoIareKoecH0mbUoe7HSrfFbYmxU2Os6rARUwom0wjK23PwKr_WApEVK37ICTeJ6ZBHnNbtUejIsxdxkZvRPRdR60yInmi3OlZx1NKHT7eInNgH2QaESLeETqXU1Sn8c9qI12dWsZaROJdso0VIagdkK3EI02el6ZhHaRbrUZ6H02GqVWf8kwGcoGjA092rllcsrJZH6QSWVTEmb3YITRekvZAHSJblvesIIYd4sd7RXedjo6aI5Nijuo4RHWb5m.SVJfOnPHl17YxLVvu3zS171vHI8rd5OdyRBpdzU6BIdQdZbMSI4xe_vdWHZebuvd5HgRve6DpQI3bnu6eRip85noD3zwbSoMiW3NE6CM8IyeeaUdRHefbC65VIQSdTOdYRzrd9U6hIeJi4kDT8NJP7KvC8jrNb18OQtr9jDsyEMfn4PbKIMzdLu55R.TddvCbI4GdXCF_Idze.U5TH4pbz65rHdeb29hSKgmc.bX_YFeW0cFW1zle2c1BWwJEfDFoIZrebo5cHgmbvodwI3wdvu5FRN2dCvCcIypiTsDHUFTMBVDlw4wWbTluEmruYbq6UDJTxnyw8vxgRkfv3KRgx6Ny8Dlg3DmO8kS_Rof5ioTf8ofEikpf3oQGxYA9KnYVsb9fMVmNsly_1CYbJffHsKmE8q2_V6fhilRfpUGD82ygAkfk3Vxgq6Nm8mTxoORmAvffAvTaxCxo1UfSIayRUYzV36RYocy98OYghsG731egFoLa8cLgtKl98DY_H6GvicxfEUGsiDTOcmZgYGrs3YErVOyMDUQRIb7_mvqMJbmHWblS8ox_tvGWiqefkvfH8fmgcsGE3AzgpoLQ8qRxpu3MMcelqlqjx9W_xCqzQnRXpvNqMfYYY1gO8GSgmOGY3prgVULh8rWg4boz8ty_evOLiizf_vOFitN7dVIfEWWbelIy8XTCdcK5pZxiT661JjyH5Co_8hz_4UOTiHpfe6Pa8XfgZOOS3QSgOU.U8WexPkMQiNRATv.aY7edZ2vjh82qv94Vx82s9P4j87wg6uOF3w2gbv.c8JAgTCoK8xw_nUOpiJrf06PwiiJz96CCR.lz.nFRUNJeG1CypBx9Z9czJBwHLDDO8HS_NoP5ihTfXoOy8jJgXuPC3MYgevjX8hrxZsF9pjVP0PnSE_QOfntjEQzS0CccxMzYnn_S8NygGkPk33xga6jm8x0gvDDI8Jf_GoPFix2f2oP9FwR_OvPA1IQr1");return "{qqqqqqqqql4096h7oylA84HXY2qr0qc64~RMo0ctcGImpfVSYIvUwAry1juqhgGykUIDiywBYIbxdEJBc6DtMVgCaBQmQAze2IjcHEbyfBsDjawe1sarjZl6YIzD5G._YdpEx7I2fUCKXAGuTI1x7L52avnURxQCa6EJxa5TYIZm89HeuBnKzWtCYO4KWqoO1oTJJqJ6sjhqIatCAvhUH2UTG1.JFZ3zf_1JtE_dPKzmtleB1K9xx0i.Y8bKNV_LujvU5RVgudNo_9Xb2neUMWrgniKAXmMBms.Y8eczSd2EjLbLYCkmxETfn_OAzTMGmsUYwzcGSdpxge3bs_2JxGvOm6lY4qPfn.cHy7Bfm1BkZaRzqD4r30G7a8HrxZXcKRflv0U82xBl0G.QpmXUsaxisS5xvLTH1p7iOq0W0qepGqqqqqqqqhutDkSfdlg8JJ1710053543052qr7kWz7lk2afqD87f809qqqq!J7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,map,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqqqk162hsTvXPBtnqOhr1qiURS..KbjFF2B.aqQm40GOcFxx3g2ePoTEB7Be1UnxHVPr0qqqqqqqqt1083179008Y3M5zzI3aDni2CKD5u6cwrVUWJzeD60MHrBZCOuMdyBr07cs7bQ6TpRpxoK6yWxGJbhUaBRuqbQP3WRnx7HnQGI1p2c64`rSfqdm3PPoQJNpuXk8z8FyofborVgz6BOBiR3TP6ub2M3NLMcfBQKyLhCNSFD9LFom.FcpjIDfbtDYS3DfAtcajY2Tewlx8x02vAlpqhKr1I1l6h2z8xPrIwUmaFkmjFCfutlySsKGiF2RL1cfhQVNLcCNwFlYRrP3mK6JYQ9wCUUwX3TSKMqz6MlwKpAJ2mky7F9TLY1fVQYwLlDNEFmELVUl7FDTjJCGBtcNStKGMtDV08KaKUATQHT7o1amihKlWwsykmvQYxb2IivlyFoNjEbG0tkwSJbf6FP2LW1GaQsJLsDLVFqyRsnRV12reokq5QsSPJbGJwqeMUVfYWSSTssg.FGpLoPGwQpfLKKLkFr7LmvlYFmRjkbGAtrJSlbGPttETaok3s590_uoSMdJWeUM_RZS8ZTB_x.RIg6oPFtJjyKOetHSSdCPgFXrL5POyQIpLzK.BFHwR7cF7IIrHjCj1R7eY0UkYMeTweYo1YZT2PO4nFzeLSnOcQQmLGb.FFJaL66o8FxejaKORtJfSCCO2tx7C2muZR5Ytu9vtAzNV9DjjwERNe0cmxBeIjoD.FipjBDPbttYSLDOfF.zLLnP5QMTLdbjbFhfR51M9WtlaLDtSwMzB49_7shre2m1gV4pkau_yFNRLPcPhQ3NLnCjwFEVLfoDoFWrjbDPctEmSvDP7tJqCv0cyYNx1uCtZwtxWPKCnHWzx9UnQx7pI9Ur7F1T.wC2BtKNaFK9jF6xNRc2vQDRNxCzyFKm3EPQeQ6y1EbeqYomCE0yC3nlnx02a3TR9ikeqFC2NQ12aQoJNkDzVFVgNsUrEFA2.VC2htVRapK26tA9CoUpO1KxUUvp83lx0pKwDMATKIbe6xaT8YvrYFpR.sb2AtYJaVb9sFuYNh197QceNFD7aF1N3Fnw4WpTnx0Td3sNhDlAKJuzAiYV51sY0QsZHFnrNiP9yQkpNwK7BFsQNWvqSFUx.tb9WtAeakb95tV3CUlGaFSm.tTLrMkeelTAuWTycHCG8x0N8o6q8FYe.qK9RtpfaDC2VFaSNmP9YQrrNVK7hFpJ3.c8n1epn4uk2RdejZ0I5WZmdyOUcIiS9.OdKFdzNgnv5QHTNBbBbFIGN56k_FMz.4KvTtIpaeCvrtMZCZDoBQXNZZCHbIxrt9OhnwQ96ZvoRxyJ8SokoF3r.CDvctQma6DbwFZwN6nvFQJ2NbbBcFwp3218iMIrk5m6TUIJ1fu1SVEzCODCFsBJ9yu5wF4xNNcbvQtRNyCXyFFlNLocOFIS.NDb5tMTaXDbEtIASLvKHVxNbz9_FALzK925VR_30T9FGxef8OUcEFQ2.9Cbht3RafKvDFyyNGcbkQExNaCXmFRT36PIoIZSJCC_51RfdLmCpV.TP79bzpgy96k59FoYjM1N7QCejtDfaFbLjFUJ9FPYLICNvtbxu3KNstP0uQ6x9YDzKIbNCW2e7xCr0AYT91TY4xcmwQvJSFOxLFbNWt9eusbLHFmmj11NEQ0zjrDfQF9RMrnARwUphU9mIIlNrRVWcA6wSQTrm1rfomsSOFlSjYPNYQTrjlKfhF2WjhvWzFbyLJbLLtPzutbLFtbLaDsE4Vca5kKVXWryZHTZNIkTRxlAnxDywi6W_FvzLhKLTtOpuJCNaFcfjWPLSQaSjsKGUFGeM1cpsYYgCYompAPSHllZ3WYYsmK9WsrevVOajFqwjonLFQS2jKbGcFfAjm6WKF2wLcKLptfrulC.wtjWaTTH_FX35_Ks0U7E5nbB7UZxvanOhxhwwgoHOF.SLyD.5tBTu5DjyFiJj5n.CQdYjzbOXFBrM711L3B2zn0kxWzJB_sIrwRmG0OomJZeoPuuSFJyjac.kQZxjGCOmFz0j6oHIFNfLaD.Ftz2uTD.9tNGSuvumVJJt09DxI4A07v_4Itymvoc9xHSwjUi9FXYLBCjvtjxuLK.PFhNjBcjdQ4yjdCPfF.2M5PsBWg2W4DjwV.Nu7k8pJx2cX2KB1wfrakngFxmjP1jEQgzjSDPQFL3jfUiqF7mLbCjktNyuvKjBtzl5Bmcy1Egn2D5GHNqazVvtV4NBvC_yxWYQMvxzFnyNwbzLtCznFb7.FUT.R1z9Qbw.ED2gFCxFEnVLwc29wOrRI0YCADyIwVrJKbxnUCeDisToFKf.QPzSQ9S.kK2UF0Z.1vxxFaNNVbzlt0wnpbzCtagdYlNeUCwjRVJCW6mBQow91omYV9eaxAxQY6xKFSwN1KzptTrnVCz7Fsp.hP7zQPf.FK9uFnzFRcVEUuLdElZeJarGhlEmQuYYq0GJJkeqwO0iF1J.in7CQOY.wb9XFuq.W6EnF6JNmK7JtaSnkC7yt0wDovwIQuSTqoVXMrzSomE9snaCKvlSxVzQooEIFTfNqD7FtS2nmDzYFAe.mn71Qfm.Vb9tF5SF.1UqHBrXn0HHV4wj0THpMISOCUUr3zeD.u6YFIN.dcBdQBy.BCvfFd9.5oh4F4pN4DBCtdYnZDBqt4SmZCUTHZ7699PYA8Y649vNUwp60VkXxRrQSUhqFgmNCCBkteyn6KX8FQR.CcBMQzN.bCvJFeYF2PUgAZ705UkXJgeqZVF1wdz3PO1hwMRCykCQFMT.N1X9Qjw.gDbgF_E.LUtZFdTNNCXdt4NnXKXhtdYl.mP8sgT8zOKI3xNk40C.1_ldflnkxw2QPvtxFZNN9bXltgwnfbBoFR2.G1XqQLJ.6DblFyyF6nKaVWSW.9jz17TqalX6pMp276izWEwD6sxMRvp9MPpzIKf9tKRuRD79RvT2RcRbIbpGxDJe3bp1xkxW3bzCUopvVbY_RmpdE6gzHleMETSQtPRsQ6TnRkJbYKpJxlSesCAER2r91PpxIVp9rKRIRlwYqcNL3fNt8DzEHKz8Y6mFVve43CJ8p0YNDOxPR9e9Ynp1IYm9lbRtRca9h60XRDebWKANxcfetCAYxDzJx9N_sPm1HD9bHqywWsaZpCYPRmg2tbesio04RopbhDACxkYeWDpSRPz9WnAiIAT9sb3KRqfY11LGWYwNUKyo3syjxTxVUqxGkkZrISNNVuENRGR9DcAMIpN9KC3JRrV9mo0URmrbcDA1xrme4DsQxtriSYhcF.rSuTvhA7N3gsd.3HJ54Yd7t.psgU6ZRhTbyCsdxHNe5K1_RXx9ecs6IIR9zCMNRHmY7P.RIQmf_To7iyYn_k.A3H9buCk9HIzyPkhaRz29a1sqIQJ9vDMlRJg96U63Rx2baCsMxJReTKsvxx2Huu4PUHwPC9FXRRwMzKcK3HRwBUnvtBTsNvC2RiRbBb1GxtJeLbsORjY9B11ZIMe95DFGRhNY5njAKMrwGnF8iXe4ObDSFyfx.TdH3gSxastdRNr9PP1xI3p9SKFIREQ9GvCrRWxbbb1Qxxeevb1XxJRqLUnpF7rBOb5rAMpOv2nYQ.zXBmP5tuN1M6SXR1evQKYNxKfZFCV9R6S2RPY2IDr2EKw4RKJVHczRU0zOUkTmIVmkVuqBH9ezUK7.IKziHOJDRCz2QnYiIlT2kbwKRVG216StRAzvUKYmxVpZpCYSxAerwmy6Kmg_YT2c8m2ppsfw1lRa3vNRtaJ1YoSURprv1DY1xYmZhDYzRuw2hnVjIc22FbQnR1pVR17cMPfprDpd8a2XmOl2spwHovLypqxEwuWJRnx2JcV6IkR2wCQNRsl2WoauRVSvmDVixATZcDVgxVprkTa48qGZhVa3VuydiOqo1PNo1VQCt0f1oUa3RY2vqCVMxpRZmKYKRay2lcVsIrx2VCITR8TV.PBhR.wPCOBqRJeGZ2OXU7g5BTHt15Ri.kHVR5Y2d1UZIHe2XDIGRIL25Uu0RMYv4CU6xIxZZKUkxMTrT94iIXwm9YM6AeYjnmdssZS86Uohtym1avurR3xvCbUQxweZ6bKIRZm2C1U3IJz22DIWRwRV2nBTYXwL4TdQpEzl.TFoHIzFdK17UxRLysisR4S2NPK2Itr2gK84RFW2BvneRIyvNbKgxMzZXbKtxINqzv4z35JeXDFQiMW47V1F83JBTDcPtey1P6ntRQzvvKKmx3pZfCUqRyf2GPKrIxS26K8oRReVCcXdHZwWvmvh8RzfXkdYWMES9m5UF_NJEOrFRowbMnRjIC2btbpnRbAbR6ebRPw98KRfxbrd3CRJxOJqA9zUR0x58DmWi0YiIVxLIcx8UvxetcwpQoeuRGS9YDRix9Td1D3xRmJb1nRDI0Ybrbp8R9rUq1f9FlW48Dmw322Yp0T5s9RosueZVmx4DurfRlybVcRsITxblCATRP0bhoZBRbf9WD3jxP2dxD3VxbfrIvExiDJdHOWNRkSNrTgURPphik09tDSpiUZ0RvY9hC36xOxdWKRnRcNbkc3HIaybsCApRG2U1PG7WSzul0ZFKpyzc6EdMqJdqDgb1rp4VkqLRqmbD133ISzbYDAWRf3bmUZAR2m9cC3sxXyd4KMIxjmrS2vvUFfY7T4.sZxNX2UiV7xo_VMHthYpdvdeR.y9ybMgxBzd5bF4RiTbe1M0Idwb7DsLRBxU7nO7H7rn_O4iQifGTs.zKRRJ49h9QXm4Psk6RJfbaPMrIeSbvKsoRzZbCvdRRNN9abMVxzwdTbMbxNyD6bsxAwzF4bdg1y34.OXGRjGd.V8CtHxpN65bRXw9XKFfxjrdLCMZRtpbBPFeI4fb5K1OR.zUecPUHjJZ.01AW_NFvD6LKFSwOO52FJp4SOc5RxJbPnFDIgYbSb18RLqbG65cR7J9fKFwxNSdvCFNxzwm2VXaFyr89otB8JY.uDcMY3TQf0NotszAMoyBRnf2QDwjxC25RDQ2RUevRnwPIbmvEbY_R6SKH12wRvx7MsTvFm2IIlyR1oJvVCATKDp_HummRKNvscwHI9yvkCYpR09v1oyhRap2UDwDx0Y5ADwaxaSMRVVcKTwlKYGo8GleI0wHQ6mq1VxgtArAYUyARSm21Cwsxny5hKwXRsRvtcQ.IPNvFCVeRnYKRP9MVnQn8D3OADmgi6Eq3kyDx90kKsStwklWR1TvJ1Q0IOwvQDVLRuEvWUgWR0T2mCQHxaN5cKQ4x0YMWbLJi1SyoKltIOY5h6GT8PpcAUlutV2ADvgRRTN2qbQVxSw5mbwURA2vl1QAIfJv.DU0R5yK.nvV8dxjSm6BiQJc4KvLRexG6Ts2HHzj.sohR8pvdPIeIBfvXKUORd7vev4TR4R24bIaxdJ5ZbIcxgxFyK4W87rfyV.lM70gakXM8Ql2flo7tRRAa64cRgJ2SKIwxeS56C83RQrvCPIRIzpv2KUHRewK9cv7peYM5YH0I.RZ9lj.iLY3jK8uMBJj_OD1RMevNn8PIjmvgbK_R4avB6_5Rde2LK8yx4f5XC8mxdzR4o5fVRgyv0DrsLwN7UCc1hwsPuCOtweAPo_hRZp2vD8DxgY5GDIrRRzvGn88INTv6bKDRyfKC1b2AgrqnutTFMeePOtIKMle.V12wKzJEuRR3vRGFcr.8KNGtCxe3DVGRo2v3crP8DrPEDmyIDrWEkrIU62R32N8AVxeForF8uTPYUyfR9mZhPpUQU2W3qTPYCrHElNy1Kqt32xGpcro8VRGrCxR3lmpqPyZU2SLrDz.3lw2RY7oKDyGAKrAADTJDkRG392GV1rA8YJGMDE03cgGhU9L3D2PWCq.EcRyxKqUED2Io6gdAsNKrl98RrTomlWCFPm3HTGUhbTUJv9T3oRPhbqaEkJyWbru3fYGk1qW8AeG1DEA3qNp1ng4KGrFVvG9VuJZhCEZKTzOoo928PfeVs3B3GrGDPqR8ppGYKEH3rQGlv9p3mxPcbk7Eiey4bk8EtR3SDv1JhRl5oMHIwJ25U42s77TBY.EhjNUd6v53hePgKkyEHfy5Cc03XSGePkT8IrG7Kh.3HJpOc4TVdT2aUOv37Ey9bOK1XmDdvUmsexeOOMC3zzGank88wTGvbhD3JGGC6vF3xzPuKkYEJpyTCkfExeR_UU5HtGZ.0bjA32NvbbBMy2lOU1yhBJUNobv3irPXDcPEtmyBDke3jwGBnc_8M2G5btP3hppe1_HMLEyv2MNwhl09OKawRRFCbvKsgShSuFe3NxGfcco83RGSCtR3ElGGobk3JSPfDc8ExTybDcLEJpR90oqHMmtz9cC1jecP6b9AFy3YsNqhufKMUfL312OQCm.EKRgRKlb36yf3cmO8DxfECJ23UTAHPeD8CmWKDxSpDwFIlZ7Mn2e8Yp6UkJtHkwl3TYfs1mW8lefcDJA3VLf1Ufl3AYOUCmoEVxgAKmuEATMVYTPKKm.F6NkA9J_RDrTK22lUCR4hamKVvfp3pxO1bl7E1eghbmB3umft1lL8czfRDWZ31RARnZF8nxZxbVPYDGylCLFFkNflDgAFaSWwsQk3nSfJPlT8krfQKW.3sWfkvGJ3VyOmblEEAzgcbl_EVNFKTL7smS_o0S3wYyWc2YoHkJrrV9nh0yKD6GF3YzOkKlYEppgmCmA3afflPlp8iSf.KH638eAjcd1H7reeu.o1HN06kdtIZpYzVIyVXRZ7OIt35wfdno_8H2fXbHP3IAfe6OC3MwO_KoSEIrgZCoeE3JFSYUoF7NxgKktEZN9bTU5KHxWuk4JhywKaoOk3RSOSDo8EwTgCDDR3ZJfCnoK8JYf2bHi3wrA91db1XyvzCbKpHw_fl_nY4rRfY4SixmZ_u8p34yfLcDO8txfgCi23M0fBoPd3IfOLDD_EM2gzDDlEIfY9DDK33Sv9oKY8zrb2lIMMeL_zTtPheSKPUPl3QYOvCDoE3xgGKoc3yNfvcDI8xyf6Cir3R2ACP5BFMY5Tu5JA4SjSlKUAZQgv23uKOYHEkp33omPF1xL8CzPxDrZ3b3PRUzG3PmG8CxOEvy4IKxHEOmUUO2yHCw6RbeKUoZgK1ri8lRms0SRhcYYsvzJ3GyGYbxEE9z41bEh3mTPp1xl80wPqDr339xsqnSNRax9IvR7ACx4qDrcp6eHY22dsmxxDspv3lfPVPxp8nSPMKq63PZPtv7N3bNGWbE9EPw4xbEKEbyUxvZmIUwymnqr3bNPiCEiMqxCECEKhDxYJ67C3vwGtKESEOr4WCxW3rpPkPEJ8afP1Kqs3GzspcauAarxo93LR1Sgr9LhHnYzlD9Ksn2HYOAX3qJPDnEK8SYPYbqi3fqPl67132JGeKhzEXS44ChREjwVZ6veHHeD7mb9seTtXCMDY7StXo6fhtzYdoBd3.fGgDh_EB24eDtT3iePenhn8dmP7bkj37SsO1ueFJA64YuPMiJy9bnDRNTR4Dog8z2dOusT3JNP6chI8eyPvCkr3z9PCoBM3NpGuDhKEzY40DhGENSB9KtBFBEd2U548hJ4LuXEIENJdVFghHrYNUXG3XmGXCtOE.y4BKh53tRPXct484NP5Ccz3.YsePnyphNZ2VnKRHme2TPxIzAyjv_sHQzdSk1Z3xTPf1tl8gwPaDc33LEPGUXQ3zTGfCtIENN4bKt.EzY7OsBqFNwk29C.3RN0ODn7wuYT30xmhs2VFvNN3nNfQbJ9ECw_RbWv3U2O31JG8bJOHDm936y1HnT6J6pQ1Krv1bxD3UN4wPTosTVNY0eXHsY43YpOsPJJ89fOcKms307OpvNm3aRfUbJqE0J_AbJnESx7FmekpqNLpVwl36rNsKYpwvxvklw_hARVV6N13SJfJKWzEnS_hCJL3srOtPWN8PpORKld3nw13c0XwaS_DDGwUGplJlL4EKmZhVg9UfRE8OVc31eOJnWn8OmOQblj3aaOk6Li30eflKWxEaf_cCWTE0z.UYVm1aLgoCEmUaACoULAYnzRAoamhVeVDoLM3TpfkDWKESY_lDJp3AzOlnHX8XTO.boC35f1j16Pp525a2IasJYgn2I3sXRl5udF8dw57uUx38RO5cH48BNOXCoz3dVOeo.634rf_DHnEdm_uDHZEgr._96YsXxWSDspUQE6ylMmKXTWg2B7hRpVaU.Q3yTfSCHIEeN_CKiF3QxOTcHU8zRO2Cox3em19P6MwFyTP65_3j0Zf9DwwIpLGYFvRjei_kKA3M2OL1iG8jJOdDD934gOBUjg3d2fLCi4E4R_zKioEd2jvVnS8jNFvo5xw_JYLlP2EM749bPfhwTVfvjm3ZRfvbiqEgJ_GbHk33YOv1iQ8NeOCDDq3yN1CnCwUMxPa6OhANfvnbPwJZNFRKwNAUJSE1NIIvrZFOSNRKpZxUydIDQZ3bYfIcx58vSZHoe2IvSiHkRTAYxxworHEoSD8mSuhnYdx9a5pmRXWfNhsCYiIqe5VUSxHlf216alI2SZpOSmRVrZqUyMIlJJokxUYDp_rv0kwoxKAKJ2Kv7531AE82TSoPNbI9zZVuaXR1TZMvgCIcGZtCVjIDz5HUa2Hcp2x6apHDeCmbQMAbJ9kbEVwfxlWDGwwDe_3mANWbJhJDV6Ior5toanHkm2koSJIfwZkuatRA2Z1vg1IqpJpsEWsaqNJ2W_AYzvo2WV3rAPicWAKSrfYnLzIGxZmkaURpRZY6gxIrlZlDVsItS5eouXHiT2_ou3HtpCeC1Sw8fV5TdbYhTIC2OcV.fQZ0dAWjfhdKUgIh25g6u4HHR2eUnCIXyZZkuuRIxZ764YIWTJOOhm35WPZobpUX2E5KPoKiEfgYFQYiSpOc.0I7YZ6suQRweZbo4qIJLZCKUVIxY5u6uUHJx20UuOHxTgZ6jPY_z2LU6TVyxKfn8x1ETLNTthWBmhLbKfIix5XvnZHhe2BvudIjmZXsngRMzZeo_7IhRJeut0U_e_zobJ3xrrTT1mttYxGmDUAFyfS1juINSZfOnmR3rZaU_MIEWZvbKwIJy5fvn3Hxz2bvnjHJNgLmhJYNrlf1KTR4wuzvwA1KrnYvScWuytFCpjI1zdIUT2HKp9R60GI6fe3OTfRoSeHUevIUeWikJeFkGdIlpHIb9NsDwr8URKYmSVR9rKqPz_ITwesuTtRl2ecve1IVAepCpDIAwdKUTrHVr9A6TzHpJg86SP3Aw0RYTD1UmeUmSiUGGNIKYeWawtVDpsIKSdJo0XH1T9toTNIuJetu0bRcYeRvZ5I1rW3sW9AAfUJKV9KrrGtC94wurFkD3pRkxA8n7rInyeWk0uRkxeQ6ZYIA0ekDAHIVfdlo0tHA29ro00HVf4i62VwT0OtnGeKaxcrm36KPxLmnWlW0StDKAVIYYdk60UHpx9lUT1IaNe4k6BRiye.6dSI82WjOHzp7yDuYu884TES6hGY.fcuU6MFirA7cBEI5me5s6gRHzezod7II3eeKsaIMmd_66uHQy9uU6dH3m_41UKYyeV4YFAFWfgaTBuUXgGSKkBWyYt6bswIRydSv63Hwz9CvCMIZTeTs6VRJwe9odEIwxW9ui.KhzyGKPQFHRKOUM0UdqdOu5b3_fA_1XUI4feLOCfRhSedU5vIMZeXb1yIINdLvC0HMw9zvCDHIy_20IXQhro.KchEexk20iAU30dTYnGWextfC1DIQwdbUCrH3r9G66QIgpevOCwRxfeCU5kIRzWTki1pFqf7lsxwgzOb250KDRY1ozj3CeuxPf8IoJ5FuybRCY5xvS5Ibq53CwPIPJZRUyeHvSvI6yxHOw5VofDYbNKhvfqAlmrYcE.wm0vF2mrWrzxsDwHIGfZVoytH92vpogmIme5puycR0m5qvSFI2SHosrQpl2FVCYsIvTMKUrKUA2eMo2YYYxOonf2IlN5hkgBRny5M6aSIP95tDQ.IbpZHogbHPYvEogAHbSe8CGpRc2EEmSexfS5Wb3wAnpqcDE8WDrxJKQaIvmZt6guHGyvkUyiIrR5ckghRaN516awIGYHpOqltPRbom088aNyi6QutPzwlcVwQkfsYcG7IqT5msgVRSw5VoaEIfE5lKI7IjTZe64BHXNv_U4MHjYe7YdlVWJe0ChsAMYQCU6CId0.LvBuWt2x5bIyI.NZgv40HBwvev_6Ii25Zs4aRdJ5OouVI7yHOukhAxYQ6ckzFN2Gvlo1QiRVaTkvFWNOO1O.IWp56O4wRef5bUukIz75TbIYINRZuv4AHzJv0v4PHXxejDP1YEmvfvbFUFLjGCs4sFYI.0FWWHRxLC8PIXJZNU_eH.SvB64gItr5XO_yR4p5eUnBI.wHZkcnFLwDBmDiFeJ9z217VeSQv0FpYjmunPPnIxe5fu_cRgm5avnFINa5vC88IzeZGU_RHNfvb6_2HzzPB9KPE_yF.TF1sFymWDRBHVwAJDzTWseEFDR.InpeIoebHCYb3oZfIUzd3ue5RvTdHvTbI6fiismvFUrDYKNSxm0bsoweRY2KR6phI6enqn2yIYRd1kehR9Ndc6TwI0VdpDRoIareKoecH0mbUoe7HSrfFbYmxU2Os6rARUwom0wjK23PwKr_WApEVK37ICTeJ6ZBHnNbtUejIsxdxkZvRPRdR60yInmi3OlZx1NKHT7eInNgH2QaESLeETqXU1Sn8c9qI12dWsZaROJdso0VIagdkK3EI02el6ZhHaRbrUZ6H02GqVWf8kwGcoGjA092rllcsrJZH6QSWVTEmb3YITRekvZAHSJblvesIIYd4sd7RXedjo6aI5Nijuo4RHWb5m.SVJfOnPHl17YxLVvu3zS171vHI8rd5OdyRBpdzU6BIdQdZbMSI4xe_vdWHZebuvd5HgRve6DpQI3bnu6eRip85noD3zwbSoMiW3NE6CM8IyeeaUdRHefbC65VIQSdTOdYRzrd9U6hIeJi4kDT8NJP7KvC8jrNb18OQtr9jDsyEMfn4PbKIMzdLu55R.TddvCbI4GdXCF_Idze.U5TH4pbz65rHdeb29hSKgmc.bX_YFeW0cFW1zle2c1BWwJEfDFoIZrebo5cHgmbvodwI3wdvu5FRN2dCvCcIypiTsDHUFTMBVDlw4wWbTluEmruYbq6UDJTxnyw8vxgRkfv3KRgx6Ny8Dlg3DmO8kS_Rof5ioTf8ofEikpf3oQGxYA9KnYVsb9fMVmNsly_1CYbJffHsKmE8q2_V6fhilRfpUGD82ygAkfk3Vxgq6Nm8mTxoORmAvffAvTaxCxo1UfSIayRUYzV36RYocy98OYghsG731egFoLa8cLgtKl98DY_H6GvicxfEUGsiDTOcmZgYGrs3YErVOyMDUQRIb7_mvqMJbmHWblS8ox_tvGWiqefkvfH8fmgcsGE3AzgpoLQ8qRxpu3MMcelqlqjx9W_xCqzQnRXpvNqMfYYY1gO8GSgmOGY3prgVULh8rWg4boz8ty_evOLiizf_vOFitN7dVIfEWWbelIy8XTCdcK5pZxiT661JjyH5Co_8hz_4UOTiHpfe6Pa8XfgZOOS3QSgOU.U8WexPkMQiNRATv.aY7edZ2vjh82qv94Vx82s9P4j87wg6uOF3w2gbv.c8JAgTCoK8xw_nUOpiJrf06PwiiJz96CCR.lz.nFRUNJeG1CypBx9Z9czJBwHLDDO8HS_NoP5ihTfXoOy8jJgXuPC3MYgevjX8hrxZsF9pjVP0PnSE_QOfntjEQzS0CccxMzYnn_S8NygGkPk33xga6jm8x0gvDDI8Jf_GoPFix2f2oP9FwR_OvPA1IQr1" }},
  [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "on");return "on" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "on" }},
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true },set(){ v_console_log("  [*] HTMLInputElement -> checked[set]", [].slice.call(arguments));return true }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLOptionElement.prototype, {
  selected: {get(){ v_console_log("  [*] HTMLOptionElement -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] HTMLOptionElement -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLOptionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLFormElement.prototype, {
  enctype: {get(){ v_console_log("  [*] HTMLFormElement -> enctype[get]", "application/x-www-form-urlencoded");return "application/x-www-form-urlencoded" }},
  [Symbol.toStringTag]: {value:"HTMLFormElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSelectElement.prototype, {
  disabled: {set(){ v_console_log("  [*] HTMLSelectElement -> disabled[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLSelectElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments)); }},
  type: {set(){ v_console_log("  [*] HTMLScriptElement -> type[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  rel: {set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments)); }},
  href: {set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments)); }},
  sheet: {get(){ v_console_log("  [*] HTMLLinkElement -> sheet[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
  RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUListElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUListElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLParagraphElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLParagraphElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ if(b=='global'){return}return a[b] || __globalThis__[b] },
  set(a,b,c){
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
    return true
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.indexedDB = v_new(IDBFactory)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

var win = {
  window: window,
  frames: window,
  parent: window,
  self: window,
  top: window,
}
function v_repair_this(){
  win = {
    window: __globalThis__,
    frames: __globalThis__,
    parent: __globalThis__,
    self: __globalThis__,
    top: __globalThis__,
  }
}
Object.defineProperties(window, {
  window: {get:function(){return win.window},set:function(e){return win.window = e}},
  frames: {get:function(){return win.frames},set:function(e){return win.frames = e}},
  parent: {get:function(){return win.parent},set:function(e){return win.parent = e}},
  self:   {get:function(){return win.self},  set:function(e){return win.self = e}},
  top:    {get:function(){return win.top},   set:function(e){return win.top = e}},
})

function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLMetaElement":["meta"],"HTMLInputElement":["input"],"HTMLOptionElement":["option"],"HTMLFormElement":["form"],"HTMLSelectElement":["select"],"HTMLScriptElement":["script"],"HTMLLinkElement":["link"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLCanvasElement":["canvas"],"HTMLImageElement":["img"],"HTMLMediaElement":[],"HTMLUnknownElement":[],"HTMLAnchorElement":["a"]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.hostname)){
        r = ''
      }else{
        r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.hostname = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.host     = this.hostname + (this.port?":"+this.port:"") ;
      this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("ihkYnttrQXfVP=5R8T3jDUzKlAqqqDixu_WUa0YHga.8z1zvwKleCakjrYc4aqJ_fUm_sznnZe7l1vB0LqbGxR165hDkTHQzkMRbT0twjLa_ZeHj_la6pbsnmZt4ipGw_KdHBJifuuNVMUT7K0VcpDME03NwwbYdqD3Go.By1hgsdIcvwn_LaxWwh5K9ilC8k56B3C3z_r5JRqmTZjUywdWHEvTd0yq5XJVXvP_slh5VuBTQF4NC0gyCxYQ7TvsBUX_wd3XK6bGnAV8SJZ3aWmOqO3xht1XPEQ90UoFdWQYUvt7KMDzigS1PthwK6.6FK_tO3SF42HBYQ_cvv1crM0kUhHNT5fD2s5mnO")
v_hook_href(window.location, 'location', "https://sugh.szu.edu.cn/Html/News/Columns/6/Index.html")
Location.prototype.toString = v_saf(function toString(){ return "https://sugh.szu.edu.cn/Html/News/Columns/6/Index.html" })
window.alert = v_saf(function alert(){})
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1920
window.innerHeight = 177
window.outerHeight = 1032
window.outerWidth = 1920
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func){
  if(name == "search" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "zoom" && func == "getElementById"){ return v_new(HTMLUListElement) }
  if(name == "left_ul_4" && func == "getElementById"){ return v_new(HTMLUListElement) }
  if(name == "left_p_14" && func == "getElementById"){ return v_new(HTMLParagraphElement) }
  return null
}
function v_geteles(name, func){
  if(name == "meta" && func == "getElementsByTagName"){ return [v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "*" && func == "getElementsByTagName"){ return [v_new(HTMLDivElement)] }
  if(name == "a" && func == "getElementsByTagName"){ return [] }
  if(name == "input" && func == "getElementsByTagName"){ return [v_new(HTMLInputElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [] }
  if(name == "e" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "sizzle-1710053444374" && func == "getElementsByName"){ return [] }
  if(name == "[selected]" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":checked" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":enabled" && func == "querySelectorAll"){ return [v_new(HTMLInputElement)] }
  if(name == "search-btn-i" && func == "getElementsByClassName"){ return [v_new(HTMLElement)] }
  if(name == ".link_bottom i" && func == "querySelectorAll"){ return [v_new(HTMLElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "td" && func == "getElementsByTagName"){ return [] }
  if(name == "ae-pagination-current" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == ".ae-pagination a" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  if(name == "img" && func == "getElementsByTagName"){ return [v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement)] }
  if(name == "wx" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "phone" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == ".sy2_ul,.sy3_ul" && func == "querySelectorAll"){ return [v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement)] }
  if(name == ".sy1_li.Has_Children" && func == "querySelectorAll"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == ".sy2_li.Has_Children" && func == "querySelectorAll"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == "phone-menu" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "phone-search" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "a.next_open" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == ".hasChildren a" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "hasChildren" && func == "getElementsByClassName"){ return [v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement)] }
  if(name == "A" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "sy2_ul" && func == "getElementsByClassName"){ return [v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement)] }
  if(name == "sy1_tit" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "sy3_ul" && func == "getElementsByClassName"){ return [v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement),v_new(HTMLUListElement)] }
  if(name == "sy2_tit" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
// v_console_log = function(){} // 关闭日志输出;

function get_cookie() {
    return document.cookie
}