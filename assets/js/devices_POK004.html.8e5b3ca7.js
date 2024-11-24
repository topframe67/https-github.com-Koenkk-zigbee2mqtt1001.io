"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94042],{82637:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>o});var l=i(6254);const a={},n=(0,i(39583).A)(a,[["render",function(e,t){const i=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[t[11]||(t[11]=(0,l.Lk)("h1",{id:"pushok-hardware-pok004",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#pushok-hardware-pok004"},[(0,l.Lk)("span",null,"PushOk Hardware POK004")])],-1)),(0,l.Lk)("table",null,[t[6]||(t[6]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1)),(0,l.Lk)("tbody",null,[t[2]||(t[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"POK004")],-1)),(0,l.Lk)("tr",null,[t[1]||(t[1]=(0,l.Lk)("td",null,"Vendor",-1)),(0,l.Lk)("td",null,[(0,l.bF)(i,{to:"/supported-devices/#v=PushOk%20Hardware"},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.eW)("PushOk Hardware")]))),_:1})])]),t[3]||(t[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"Solar powered zigbee router and illuminance sensor")],-1)),t[4]||(t[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"illuminance_lux, illuminance, battery, voltage, linkquality")],-1)),t[5]||(t[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/POK004.png",alt:"PushOk Hardware POK004"})])],-1))])]),t[12]||(t[12]=(0,l.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,l.Lk)("span",null,"OTA updates")])],-1)),(0,l.Lk)("p",null,[t[8]||(t[8]=(0,l.eW)("This device supports OTA updates, for more information see ")),(0,l.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,l.k6)((()=>t[7]||(t[7]=[(0,l.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,l.eW)("."))]),t[13]||(t[13]=(0,l.Lk)("h2",{id:"options",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#options"},[(0,l.Lk)("span",null,"Options")])],-1)),(0,l.Lk)("p",null,[(0,l.Lk)("em",null,[(0,l.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.k6)((()=>t[10]||(t[10]=[(0,l.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,l.Fv)('<ul><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance lux (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance_lux&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12))])}]]),o=JSON.parse('{"path":"/devices/POK004.html","title":"PushOk Hardware POK004 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"PushOk Hardware POK004 control via MQTT","description":"Integrate your PushOk Hardware POK004 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:41.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732481858000},"filePathRelative":"devices/POK004.md"}')}}]);