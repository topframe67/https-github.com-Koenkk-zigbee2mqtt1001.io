"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28923],{50112:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>a});var d=t(6254);const c={},i=(0,t(39583).A)(c,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[8]||(o[8]=(0,d.Lk)("h1",{id:"owon-ac201",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#owon-ac201"},[(0,d.Lk)("span",null,"OWON AC201")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"AC201")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=OWON"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("OWON")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"HVAC controller/IR blaster")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"climate (system_mode, occupied_heating_setpoint, occupied_cooling_setpoint, ac_louver_position, local_temperature), fan (state, mode), linkquality")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AC201.png",alt:"OWON AC201"})])],-1))])]),o[9]||(o[9]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,d.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>occupied_heating_setpoint</code>, <code>occupied_cooling_setpoint</code>, <code>ac_louver_position</code>, <code>local_temperature</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>8</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>occupied_cooling_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>8</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>, <code>auto</code>, <code>dry</code>, <code>fan_only</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan"><span>Fan</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>, <code>auto</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),a=JSON.parse('{"path":"/devices/AC201.html","title":"OWON AC201 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON AC201 control via MQTT","description":"Integrate your OWON AC201 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Fan","slug":"fan","link":"#fan","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732481858000},"filePathRelative":"devices/AC201.md"}')}}]);