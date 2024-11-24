"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36584],{47655:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>i,data:()=>o});var a=n(6254);const t={},i=(0,n(39583).A)(t,[["render",function(e,s){const n=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[s[8]||(s[8]=(0,a.Fv)('<h1 id="devices-and-groups" tabindex="-1"><a class="header-anchor" href="#devices-and-groups"><span>Devices and Groups</span></a></h1><p>Zigbee2MQTT also stores the definitions of Devices and Groups in the <code>configuration.yml</code>.</p><p>Most options are optional, only the IEEE address (or MAC) as the <code>key</code> and a <code>friendly_name</code> are required.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># First device</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x00158d0001d82999&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_occupancy_sensor&#39;</span></span>\n<span class="line">        <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">        <span class="token key atrule">disabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">        <span class="token key atrule">qos</span><span class="token punctuation">:</span> <span class="token number">1</span></span>\n<span class="line">        <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span></span>\n<span class="line">        <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token punctuation">-</span> action</span>\n<span class="line">            <span class="token punctuation">-</span> brightness</span>\n<span class="line">        <span class="token comment"># Set `homeassistant: null` to skip discovery for this device</span></span>\n<span class="line">        <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token comment"># Applied to all discovered entities.</span></span>\n<span class="line">            <span class="token key atrule">expire_after</span><span class="token punctuation">:</span> <span class="token number">30</span></span>\n<span class="line">            <span class="token comment"># Only applied to discovered temperature sensor.</span></span>\n<span class="line">            <span class="token key atrule">temperature</span><span class="token punctuation">:</span></span>\n<span class="line">                <span class="token key atrule">icon</span><span class="token punctuation">:</span> mdi<span class="token punctuation">:</span>oil<span class="token punctuation">-</span>temperature</span>\n<span class="line">                <span class="token comment"># Omit values by setting them to null, e.g. don&#39;t send device_class</span></span>\n<span class="line">                <span class="token key atrule">device_class</span><span class="token punctuation">:</span> <span class="token null important">null</span></span>\n<span class="line">        <span class="token comment"># Device type specific examples</span></span>\n<span class="line">        <span class="token key atrule">occupancy_timeout</span><span class="token punctuation">:</span> <span class="token number">120</span></span>\n<span class="line">        <span class="token key atrule">no_occupancy_since</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span></span>\n<span class="line">    <span class="token comment"># Another device</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x000d6ffffee405eb&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;Kitchen bulb&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="common-device-options" tabindex="-1"><a class="header-anchor" href="#common-device-options"><span>Common device options</span></a></h2><p>Every Zigbee Device supports the following list of options.</p><p><strong><code>friendly_name</code></strong><br> Used in the MQTT topic of a device. By default, this is the device ID (e.g. <code>0x00128d0001d9e1d2</code>).</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You can use the <code>/</code> separator in <code>friendly_name</code> to structure devices. For example, using a <code>friendly_name</code> like <code>kitchen/floor_light</code> would result in a corresponding MQTT structure with <code>kitchen</code> as folder containing <code>floor_light</code> in MQTT Explorer.</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Note that a <code>friendly_name</code> is <strong>NOT</strong> allowed to end with <code>/</code>, <code>/</code> + one of the possible <a href="https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/utils.ts#L30" target="_blank" rel="noopener noreferrer">endpoint names</a> (e.g. <code>/left</code>) or <code>/</code> + a number (e.g. <code>/4</code>).</p></div><p><strong><code>description</code></strong><br> Description of this device, e.g. <code>This device is in the kitchen</code>, will be shown in the frontend.</p><p><strong><code>retain</code></strong><br> Retain MQTT messages of this device (default <code>false</code>).</p><p><strong><code>disabled</code></strong><br> Disables the device. This <strong>does not</strong> prevent the device from communicating in the Zigbee network. E.g. when messages are received from this device, Zigbee2MQTT will still publish them. This feature is useful for devices which will be disconnected from the Zigbee network for a longer time (like Christmas lights). Disabling a device does the following:</p><ul><li>The availability feature will not try to ping it</li><li>The device is always marked as <code>unavailable</code> in Home Assistant</li><li>It will not be configured on Zigbee2MQTT startup (required for some devices in order to start working)</li><li>It will be excluded from network scans (network map)</li><li>It will be excluded from optimistic group state updates</li></ul><p><strong><code>retention</code></strong><br> Sets the MQTT Message Expiry in seconds e.g. <code>retention: 900</code> = 15 minutes (default: not enabled). Make sure to set <code>mqtt.version</code> to <code>5</code> (see <code>mqtt</code> configuration above)</p><p><strong><code>qos</code></strong><br> QoS level for MQTT messages of this device. <a href="https://www.npmjs.com/package/mqtt#about-qos" target="_blank" rel="noopener noreferrer">What is QoS?</a></p><p><strong><code>homeassistant</code></strong><br> Allows overriding the values of the Home Assistant discovery payload. See example below.</p><p><strong><code>debounce</code></strong><br> Debounces messages of this device. When setting e.g. <code>debounce: 1</code> and a message from a device is received, Zigbee2MQTT will not immediately publish this message. But it will combine it with other messages that are received max 1 seconds apart from each other. So there needs to be &quot;N second of silence&quot; from the device before the combined message is sent out.</p><p>For example <code>debounce: 5</code> means that there needs to be &quot;5 seconds of silence&quot; from the device, before combined messages is sent out.</p><p>This is handy for e.g. the <code>WSDCGQ11LM</code> which publishes humidity, temperature and pressure at the same time but as 3 different messages.</p><p>Don&#39;t configure debounce to be higher that sensors update interval as that would cause all the messages to be debouncer and messages won&#39;t be sent out at all.</p><p><strong><code>debounce_ignore</code></strong><br> Protects unique payload values of specified payload properties from overriding within debounce time. When setting e.g. <code>debounce: 1</code> and <code>debounce_ignore: - action</code> every payload with unique <code>action</code> value will be published. This is handy for e.g. the <code>E1744</code> which publishes multiple messages in short time period after one turn and <code>debounce</code> option without <code>debounce_ignore</code> publishes only last payload with action <code>rotate_stop</code>. On the other hand <code>debounce: 1</code> with <code>debounce_ignore: - action</code> will publish all unique action messages, at least two ( e.g. <code>action: rotate_left</code> and <code>action: rotate_stop</code>)</p><p><strong><code>throttle</code></strong><br> Throttle processing of messages from this device. When setting e.g. <code>throttle: 10</code> the first message from the device is processed but all other messages within the next 10 seconds are ignored. Be careful when using this option, unlike <code>debounce</code> that can ignore some attributes, this will drop the entire message.</p><p><code>debounce</code> option has priority over <code>throttle</code>; if both are present for one device, only <code>debounce</code> will have any effect.</p><p>Setting this option reduces the number of MQTT messages sent for a particular device. This is directly linked to how high the option is set. When used on misbehaving devices with proper values, it can drastically reduce the size of external databases that store history (like Home Assistant), and yet have little to no impact on the quality of said history.</p><p>Some ambient sensors like <code>TS0601_air_quality_sensor</code> and some water level sensors, among others, are known to benefit from this option</p><p><strong><code>retrieve_state</code></strong><br> (DEPRECATED) Retrieves the state after setting it. Should only be enabled when the reporting feature does not work for this device.</p><p><strong><code>filtered_attributes</code></strong><br> Allows preventing certain attributes from being published. When a device would e.g. publish <code>{&quot;temperature&quot;: 10, &quot;battery&quot;: 20}</code> and you set <code>filtered_attributes: [&quot;battery&quot;]</code> it will publish <code>{&quot;temperature&quot;: 10}</code>.</p><p><strong><code>filtered_cache</code></strong> Allows preventing certain attributes from ending up in the cache. This prevents attributes from being published when the value did not change.</p><p><strong><code>optimistic</code></strong><br> The optimistic mode is a feature that influences how the state of a device is handled in the absence of updates. When optimistic mode is enabled for a device and the last sent command was successful, it updates the device state accordingly, even before receiving confirmation from the device itself (default <code>true</code>).</p><p>Enabled: If you send a command to turn on a light and the command was succesful, for example, Zigbee2MQTT will immediately update its internal state to reflect that the light is on. If the command fails, the state is not updated.</p><p>Disabled: Zigbee2MQTT will only update its internal state after the device reports the new state, regardless wether the command was succesful or not.</p><p><strong><code>filtered_optimistic</code></strong><br> Same as the <code>filtered_attributes</code> option but only applies to the optimistic published attributes. Has no effect when <code>optimistic: false</code> is set. Example: <code>filtered_optimistic: [&quot;color_mode&quot;, &quot;color&quot;]</code>.</p><h2 id="specific-device-options" tabindex="-1"><a class="header-anchor" href="#specific-device-options"><span>Specific device options</span></a></h2>',33)),(0,a.Lk)("p",null,[s[2]||(s[2]=(0,a.eW)("Some Zigbee devices like the ")),(0,a.bF)(n,{to:"/devices/RTCGQ11LM.html"},{default:(0,a.k6)((()=>s[0]||(s[0]=[(0,a.eW)("RTCGQ11LM")]))),_:1}),s[3]||(s[3]=(0,a.eW)(" supports some special attributes. To see if your device has device type specific configuration, visit the device page by going to ")),(0,a.bF)(n,{to:"/supported-devices/"},{default:(0,a.k6)((()=>s[1]||(s[1]=[(0,a.eW)("Supported devices")]))),_:1}),s[4]||(s[4]=(0,a.eW)(" and clicking on the model number."))]),s[9]||(s[9]=(0,a.Fv)('<p>In the above example <code>occupancy_timeout</code> and <code>no_occupancy_since</code> are device specific options.</p><h2 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values"><span>Default values</span></a></h2><p>You can set default values which are applied to all devices if the devices does not explicitly set the value in the device block. You can also set defaults for device-specific options.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">device_options</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token key atrule">occupancy_timeout</span><span class="token punctuation">:</span> <span class="token number">120</span></span>\n<span class="line">    <span class="token key atrule">no_occupancy_since</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>Groups</span></a></h2>',5)),(0,a.Lk)("p",null,[s[6]||(s[6]=(0,a.eW)("You can define groups of devices which are applied to the Zigbee network. Also see the ")),(0,a.bF)(n,{to:"/guide/usage/groups.html"},{default:(0,a.k6)((()=>s[5]||(s[5]=[(0,a.eW)("Groups guide")]))),_:1}),s[7]||(s[7]=(0,a.eW)("."))]),s[10]||(s[10]=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">groups</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> Kitchen lights</span>\n<span class="line">        <span class="token comment"># Optional: Retain messages (true/false) (default: false)</span></span>\n<span class="line">        <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">        <span class="token comment"># Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)</span></span>\n<span class="line">        <span class="token key atrule">transition</span><span class="token punctuation">:</span> <span class="token number">2</span></span>\n<span class="line">        <span class="token comment"># Optional: Change group state when one of the devices in it changes state, see &#39;State changes&#39; below (default: true)</span></span>\n<span class="line">        <span class="token key atrule">optimistic</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">        <span class="token comment"># Optional: Devices of this group,</span></span>\n<span class="line">        <span class="token comment"># Note: This can be the ieeeAddr of the device or the friendly_name (default: empty)</span></span>\n<span class="line">        <span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token punctuation">-</span> <span class="token number">0x84fd27fffe4082ca</span></span>\n<span class="line">            <span class="token punctuation">-</span> <span class="token number">0x000b3cfffef8ed66</span></span>\n<span class="line">            <span class="token comment"># Only add specific endpoint to the group</span></span>\n<span class="line">            <span class="token punctuation">-</span> 0x000d6ffffee405eb/1</span>\n<span class="line">            <span class="token punctuation">-</span> <span class="token number">0x001788010818fc75</span></span>\n<span class="line">            <span class="token punctuation">-</span> some_device_friendly_name</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The Group-key has to be unique and a quoted integer.</p></div><h2 id="extract-config-to-separate-files" tabindex="-1"><a class="header-anchor" href="#extract-config-to-separate-files"><span>Extract config to separate files</span></a></h2><p>Usually <code>devices</code> and <code>groups</code> are specified as objects within the <code>configuration.yaml</code> but it is also possible to extract the configuration into separate files.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Define the files which contains the configs</span></span>\n<span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span> devices.yaml</span>\n<span class="line"><span class="token key atrule">groups</span><span class="token punctuation">:</span> groups.yaml</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># devices.yaml</span></span>\n<span class="line"><span class="token key atrule">&#39;0x00158d0001d82999&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_occupancy_sensor&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># groups.yaml</span></span>\n<span class="line"><span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> group_1</span>\n<span class="line">    <span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token punctuation">-</span> <span class="token number">0x00158d0001d82999</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7))])}]]),o=JSON.parse('{"path":"/guide/configuration/devices-groups.html","title":"Devices and Groups","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Common device options","slug":"common-device-options","link":"#common-device-options","children":[]},{"level":2,"title":"Specific device options","slug":"specific-device-options","link":"#specific-device-options","children":[]},{"level":2,"title":"Default values","slug":"default-values","link":"#default-values","children":[]},{"level":2,"title":"Groups","slug":"groups","link":"#groups","children":[]},{"level":2,"title":"Extract config to separate files","slug":"extract-config-to-separate-files","link":"#extract-config-to-separate-files","children":[]}],"git":{"updatedTime":1732481858000},"filePathRelative":"guide/configuration/devices-groups.md"}')}}]);