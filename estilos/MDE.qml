<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.4.9-Madeira" maxScale="0" minScale="1e+08" styleCategories="AllStyleCategories" hasScaleBasedVisibilityFlag="0">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <customproperties>
    <property value="false" key="WMSBackgroundLayer"/>
    <property value="false" key="WMSPublishDataSourceUrl"/>
    <property value="0" key="embeddedWidgets/count"/>
    <property value="Value" key="identify/format"/>
  </customproperties>
  <pipe>
    <rasterrenderer alphaBand="-1" classificationMin="64" band="1" type="singlebandpseudocolor" classificationMax="82" opacity="1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader colorRampType="INTERPOLATED" classificationMode="2" clip="0">
          <colorramp name="[source]" type="gradient">
            <prop k="color1" v="169,36,36,255"/>
            <prop k="color2" v="211,74,33,255"/>
            <prop k="discrete" v="0"/>
            <prop k="rampType" v="gradient"/>
            <prop k="stops" v="0.2358;171,221,164,255:0.431153;255,255,191,255:0.51463;255,248,182,255:0.666954;253,174,97,255:0.788296;238,138,73,255:0.942341;226,109,55,255:0.942341;226,109,55,255:0.95525;223,101,50,255"/>
          </colorramp>
          <item alpha="255" value="64" label="64" color="#a92424"/>
          <item alpha="255" value="66" label="66" color="#ff5500"/>
          <item alpha="255" value="68" label="68" color="#ffaa00"/>
          <item alpha="255" value="70" label="70" color="#ffd300"/>
          <item alpha="255" value="72" label="72" color="#feff00"/>
          <item alpha="255" value="74" label="74" color="#ffffbe"/>
          <item alpha="255" value="76" label="76" color="#ade9ad"/>
          <item alpha="255" value="78" label="78" color="#89cd4b"/>
          <item alpha="255" value="80" label="80" color="#38a700"/>
          <item alpha="255" value="82" label="82" color="#267303"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast contrast="0" brightness="0"/>
    <huesaturation colorizeGreen="128" colorizeBlue="128" colorizeRed="255" grayscaleMode="0" colorizeOn="0" colorizeStrength="100" saturation="0"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
