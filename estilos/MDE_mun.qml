<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis styleCategories="AllStyleCategories" maxScale="0" minScale="1e+08" version="3.4.9-Madeira" hasScaleBasedVisibilityFlag="0">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <customproperties>
    <property key="WMSBackgroundLayer" value="false"/>
    <property key="WMSPublishDataSourceUrl" value="false"/>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="identify/format" value="Value"/>
  </customproperties>
  <pipe>
    <rasterrenderer opacity="1" alphaBand="-1" classificationMin="581.094" type="singlebandpseudocolor" band="1" classificationMax="1718.7">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>MinMax</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader clip="0" classificationMode="1" colorRampType="INTERPOLATED">
          <colorramp name="[source]" type="gradient">
            <prop k="color1" v="106,151,64,255"/>
            <prop k="color2" v="211,74,33,255"/>
            <prop k="discrete" v="0"/>
            <prop k="rampType" v="gradient"/>
            <prop k="stops" v="0.2358;171,221,164,255:0.431153;255,255,191,255:0.51463;255,248,182,255:0.666954;253,174,97,255"/>
          </colorramp>
          <item label="581.1" alpha="255" value="581.093994140625" color="#6a9740"/>
          <item label="849.3" alpha="255" value="849.341640137559" color="#abdda4"/>
          <item label="1072" alpha="255" value="1071.57600379195" color="#ffffbf"/>
          <item label="1167" alpha="255" value="1166.5395864989" color="#fff8b6"/>
          <item label="1340" alpha="255" value="1339.82364978889" color="#fdae61"/>
          <item label="1719" alpha="255" value="1718.69897460938" color="#d34a21"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation colorizeRed="255" colorizeBlue="128" colorizeGreen="128" grayscaleMode="0" saturation="0" colorizeStrength="100" colorizeOn="0"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
