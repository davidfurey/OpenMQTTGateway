(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{419:function(e,n,t){"use strict";t.r(n);var i={mounted:function(){var e=document.querySelector("esp-web-install-button"),n=document.getElementById("erase");e.addEventListener("state-changed",(function(e){console.log(e.detail)}));var t=document.querySelector("select");e.manifest=t.value,t.addEventListener("change",(function(){e.manifest=t.value})),n.addEventListener("change",(function(t){n.checked?e.setAttribute("erase-first",""):e.removeAttribute("erase-first")}))}},r=t(42),a=Object(r.a)(i,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{align:"center"}},[this._m(0),n("br"),n("br"),this._v(" "),n("input",{attrs:{type:"checkbox",id:"erase",checked:""}}),this._v(" "),n("label",{attrs:{for:"erase"}},[this._v(" Erase Flash (erases all saved data)")]),n("br"),n("br"),this._v(" "),n("esp-web-install-button",{attrs:{"erase-first":""}})],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("select",[t("optgroup",{attrs:{label:"ESP32"}},[t("option",{attrs:{value:"/firmware_build/esp32-lolin32lite-ble.manifest.json"}},[e._v("\n      esp32-lolin32lite-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-m5atom.manifest.json"}},[e._v("\n      esp32-m5atom\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-m5stack-ble.manifest.json"}},[e._v("\n      esp32-m5stack-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-m5stick-ble.manifest.json"}},[e._v("\n      esp32-m5stick-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-m5stick-c-ble.manifest.json"}},[e._v("\n      esp32-m5stick-c-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-m5stick-cp-ble.manifest.json"}},[e._v("\n      esp32-m5stick-cp-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-olimex-gtw-ble-eth.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-eth\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32-olimex-gtw-ble-wifi.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-wifi\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-ble-cont.manifest.json"}},[e._v("\n      esp32dev-ble-cont\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-ble.manifest.json"}},[e._v("\n      esp32dev-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-gf-sun-inverter.manifest.json"}},[e._v("\n      esp32dev-gf-sun-inverter\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-ir.manifest.json"}},[e._v("\n      esp32dev-ir\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-multi_receiver.manifest.json"}},[e._v("\n      esp32dev-multi_receiver\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-pilight-cc1101.manifest.json"}},[e._v("\n      esp32dev-pilight-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-pilight.manifest.json"}},[e._v("\n      esp32dev-pilight\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-pilight-somfy-cc1101.manifest.json"}},[e._v("\n      esp32dev-pilight-somfy-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-rf.manifest.json"}},[e._v("\n      esp32dev-rf\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-rtl_433.manifest.json"}},[e._v("\n      esp32dev-rtl_433\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-somfy-cc1101.manifest.json"}},[e._v("\n      esp32dev-somfy-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32dev-weatherstation.manifest.json"}},[e._v("\n      esp32dev-weatherstation\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/esp32feather-ble.manifest.json"}},[e._v("\n      esp32feather-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/heltec_wifi_lora_32.manifest.json"}},[e._v("\n      heltec_wifi_lora_32\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/ttgo-lora32-v1.manifest.json"}},[e._v("\n      ttgo-lora32-v1\n      ")]),e._v(" "),t("option",{attrs:{value:"/firmware_build/ttgo-t-beam.manifest.json"}},[e._v("\n      ttgo-t-beam\n      ")])]),e._v(" "),t("optgroup",{attrs:{label:"ESP8266"}},[e._v("/firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-2g.manifest.json"}},[e._v("\n      nodemcuv2-2g\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-ble.manifest.json"}},[e._v("\n      nodemcuv2-ble\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-ir.manifest.json"}},[e._v("\n      nodemcuv2-ir\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-pilight.manifest.json"}},[e._v("\n      nodemcuv2-pilight\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-rf-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-rf-cc1101\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-rf.manifest.json"}},[e._v("\n      nodemcuv2-rf\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-rf2-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-rf2-cc1101\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-rf2.manifest.json"}},[e._v("\n      nodemcuv2-rf2\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-rs232.manifest.json"}},[e._v("\n      nodemcuv2-rs232\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-somfy-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-somfy-cc1101\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/nodemcuv2-weatherstation.manifest.json"}},[e._v("\n      nodemcuv2-weatherstation\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/rf-wifi-gateway.manifest.json"}},[e._v("\n      rf-wifi-gateway\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/rfbridge.manifest.json"}},[e._v("\n      rfbridge\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/sonoff-basic.manifest.json"}},[e._v("\n      sonoff-basic\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/sonoff-basic-rfr3.manifest.json"}},[e._v("\n      sonoff-basic-rfr3\n      ")]),e._v("\n      /firmware_build/\n      "),t("option",{attrs:{value:"/firmware_build/sonoff-rfbridge-direct.manifest.json"}},[e._v("\n      sonoff-rfbridge-direct\n      ")])])])}],!1,null,null,null);n.default=a.exports}}]);