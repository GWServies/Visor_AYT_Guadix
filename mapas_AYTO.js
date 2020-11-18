///////////Creación variable mapa/////////// 
//-3.5372582121301726,36.9702183759049632 : -2.6091001533080380,37.7446153105246225
var southWest = L.latLng(37.60, -2.7),
    northEast = L.latLng(36.99, -3.45),
    bounds = L.latLngBounds(southWest, northEast);


var map = L.map('map', {
		zoomControl: false,
		center: [37.3, -3.135],
		zoom: 16,
		minZoom: 12,
		maxZoom: 25,
		maxBounds: bounds,
	});

///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'yes';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'non';

//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var prueba = L.geoJson(prueba, {
	style: style1,
	onEachFeature: popup1,
	
});



///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h3>Contaminación atmosferica<br>Proyecto IMPACTSIG</h3>';
	 return div;
	};
	title2.addTo(map);
//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info4');
	 div.innerHTML +=
	 '<a href="https://www.guadix.es"><img src="images/guadix_logo.png" width="55px" height="65px" ></img></a>';
	 return div;
	};
	title1.addTo(map);
/*//Logo impactsig	
var title3 = L.control({position: 'bottomright'});
	title3.onAdd = function (map) {
var div = L.DomUtil.create('div','info3');
	 div.innerHTML +=
	 '<a><img src="images/impactsig.png" width="100px" height="63px" ></img></a>';
	 return div;
	};
	title3.addTo(map);  */


///////////Cartografía de referencia///////////

var Mapa_fondo = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/ {z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2018 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB'
    });
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
    }).addTo(map);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy',
	transparent:true,
	opacity:1,
	}).addTo(map);
var osm1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/ {z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2018 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});

/*Capas Google
var roadMutant = L.gridLayer.googleMutant({
	maxZoom: 24,
	type:'roadmap'
	});
var satMutant = L.gridLayer.googleMutant({
	maxZoom: 24,
	type:'satellite'
	});
var terrainMutant = L.gridLayer.googleMutant({
	maxZoom: 24,
	type:'terrain'
	});		*/
///////////Otras funcionalidades
//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[40, -5], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen	
				
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);


// creando tramas de relleno









var pnoa = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
	   layers: "OI.OrthoimageCoverage",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   version: '1.3.0',//wms version (ver get capabilities)
	   attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);




    var MT10000 = L.tileLayer.wms("http://www.ideandalucia.es/wms/mta10v_2007?amp;service=WMS&", {
	   
	   layers: "mta10v_2007",
	   format: 'image/png',
	   transparent: true,
	   opacity:0.3,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/prodCartografia/curbana/vectorial10000.htm'>IECA 2020<a>",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

    var MT2000EDIF = L.tileLayer.wms("http://www.ideandalucia.es/wms/urbana2000?SERVICE=WMS&", {
	   
	   layers: "Edificacion",
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/prodCartografia/curbana/vectorial2000.htm'>IECA 2020<a>",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

	
    var MT2000VEGE = L.tileLayer.wms("http://www.ideandalucia.es/wms/urbana2000?SERVICE=WMS&", {
	   
	   layers:"Vegetacion",
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',//wms version (ver get capabilities: http://www.ideandalucia.es/wms/urbana2000?request=GetCapabilities&service=WMS)
	   attribution: "<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/prodCartografia/curbana/vectorial2000.htm'>IECA 2020<a>",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);
	
var MT10_curvas = L.tileLayer.wms("http://www.ideandalucia.es/wms/mta10v_2007?amp;service=WMS&", {
	   
	   layers: "curvas",
	   format: 'image/png',
	   transparent: true,
	   opacity:0.3,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "<a href='https://www.juntadeandalucia.es/institutodeestadisticaycartografia/prodCartografia/curbana/vectorial10000.htm'>IECA 2020<a>",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

	
/*var inund = L.tileLayer.wms("http://wms.mapama.es/sig/agua/ZI_LaminasQ10/wms.aspx", {
	   layers: "NZ.RiskZone",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   fillColor:'blue',
	   transparent: true,
	   opacity:1,
	   version: '1.3.0',//wms version (ver get capabilities)
	   attribution: "areas inundables cedidas por MAPAMA ",
	   maxZoom: 22,
       maxNativeZoom: 19,
       setOpacity:0.5
	}).addTo(map);
//http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Montes_Publicos_Andalucia?
	
	var monte = L.tileLayer.wms("http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Montes_Publicos_Andalucia?", {
	   layers: "montes",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   opacity:1,
	   version: '1.3.0',//wms version (ver get capabilities)
	   attribution: "Junta de Andalucía",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

*/



var CATASTRO = L.tileLayer.wms("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
	   layers: "PARCELA",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "DIRECCION GENERAL DEL CATASTRO"
	}).addTo(map);

var source = L.WMS.source("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
		  opacity: 0.01,
	});
	source.getLayer("PARCELA").addTo(map);


	 // Catastro
/*var catast = L.tileLayer.wms("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx", {
	   layers: "PARCELA",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   opacity:1,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "DGC",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

*/
// PORN

var PORN = L.tileLayer.wms("http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_zonificacion_PORN_vigentes?", {
	   layers: "PARCELA",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   opacity:1,
	   version: '1.1.1',//wms version (ver get capabilities)
	   attribution: "OGC",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);


/*var minutas = L.tileLayer.wms("https://www.ign.es/wms/minutas-cartograficas?SERVICE=WMS&", {
	   layers: "Minutas",//nombre de la capa (ver get capabilities)
	   format: 'image/png',
	   transparent: true,
	   opacity:1,
	   version: '1.3',//wms version (ver get capabilities)
	   attribution: "OGC",
	   maxZoom: 22,
       maxNativeZoom: 19
	}).addTo(map);

	*/

///////////Estilo de las capas especificas del visor///////////

// rectangulo

function getColormask(a) {
	return a == null ? '#f5f5f5' :
	
	'yellow';
};
function stylemask(feature) {
	return {
		fillColor: getColormask(feature.properties.id),
		weight: 1,
		opacity: 0.60,
		color: 'black',
		dashArray: '5',
		fillOpacity: 0.4
	};
};
function popupmask(feature, layer) {
	if (feature.properties && feature.properties.id) {
		layer.bindTooltip(feature.properties.id,{direction:"top",sticky:true, permanente:true,offset:[0,-5], pane: 'popups'});			
	};
};
var mask = L.geoJson(mask_limites, {
	style: stylemask,
	onEachFeature: popupmask
});

//clases municipio
/*
function getColor100(a) {
	return a == 'Muy bajas' ? '#2892C6' :
	a == 'Bajas' ? '#81B3AB' :
	a == 'Bajas (salvo NH3)' ? '#BFD48A' :
	a == 'Medias' ? '#FAFAA3' :
	a == 'Altas' ? '#FFD900' :
	a == 'Altas(muy altas SO2)'? '#E67700' :
	a == 'Muy altas' ? '#BF1D00' :
	'#C2523C';
};
function style100(feature) {
	return {
		fillColor: getColor100(feature.properties.multivar),
		weight: 1,
		opacity: 0.60,
		color: '#0B161D',
		dashArray: '1',
		fillOpacity: 0.0
	};
};
function popup100(feature, layer) {
	if (feature.properties && feature.properties.CO) {
		layer.bindTooltip("<strong>Clases multivariantes de municipios según emisiones contaminantes difusas: </strong>"+feature.properties.multivar.toLocaleString()+"<BR><strong>Municipio: </strong> "+feature.properties.NAMEUNIT.toLocaleString(),{direction:"top",sticky:true, permanente:true,offset:[0,-5], pane: 'popups'});			
	};
};
var geojson100 = L.geoJson(tabla_cont, {
	style: style100,
	onEachFeature: popup100
});

//so2
*/


//tramas pattern


var myPattern = new L.StripePattern({
 angle: 131,
 weight: 2,
 color: '#33ff35',
 opacity: 1,
 dashArray:2
});
myPattern.addTo(map);


// ZIAE

function getColor1(a) {
	return a == 15 ? '#016E01' :
	a == "HOYA DE GUADIX" ? '#554800' :
	'#C2523C';
};
function style1(feature) {
	return {
		fillColor: getColor1(feature.properties.OBJECTID),
		weight: 1,
		opacity: 1,
		color: '#0B161D',
		dashArray: '1',
		fillOpacity: 0.5
	};

};
function popup1(feature, layer) {
	if (feature.properties && feature.properties.NOMBRE) {
		layer.bindPopup(" t/km<sup>2</sup><BR><strong>Area: </strong>"+feature.properties.OBJECTID.toLocaleString()+ "<br><a href=docs/fichas.pdf>Ver fichas</a>",{direction:"top",sticky:true, permanent:true,offset:[0,-5], pane: 'popups'});			
	    
	};

};

var ZIAE = L.geoJson(ZIAE, {
	style: {    color:'black',
                fillPattern: myPattern,
                fillOpacity:0.5

            },
	onEachFeature: popup1
}).addTo(map);




var foto_src= <img src="https://raw.githubusercontent.com/GWServies/images/master/guadix.jpg">;
// PEPMF

function getColor2(a) {
	return a == "SIERRA DE BAZA" ? 'red' :
	a == "VEGAS DE LA HOYA DE GUADIX" ? 'green' :
	'#C2511C';
};
function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.zona),
		weight: 1,
		opacity: 1,
		color: '#0B161D',
		dashArray: '1',
		fillOpacity: 0.5
	};

};
function popup2(feature, layer) {
	if (feature.properties && feature.properties.zona) {
		layer.bindPopup(" t/km<sup>2</sup><BR><strong>Area: </strong>"+feature.properties.zona.toLocaleString()+foto_src,{direction:"top",sticky:true, permanent:true,offset:[0,-5], pane: 'popups'});			
	    
	};

};


var PEPMF = L.geoJson(PEPMF, {
	style:style2,
	onEachFeature: popup2
}).addTo(map);




//prueba json ICO

  geoLayer = L.geoJson(puntos_ICO, {
    onEachFeature: function(feature, layer) {
      var popupText = "<b>Tipo:</b> " + feature.properties.tipo_elem+ 
      "<img src='" + feature.properties.ruta + "'>";
      layer.bindPopup(popupText, {
        closeButton: true,
        pane:'popups1',
        offset: L.point(0, -20)
      });
      layer.on('click', function() {
        layer.openPopup();
      });
    },


 
   
   
   
   

    pointToLayer: function (feature, latlng) {
    var elem = feature.properties.tipo_elem;
    var marker;
    if (elem == "Teatro") {
        marker = new L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'taxi', prefix: 'fa',markerColor: 'green'}) }); 
      } else if (elem == "Arbol") {
        marker = new L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'tree', prefix: 'fa',markerColor: 'green'}) });
      } else if (elem == "Banco") {
        marker = new L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'money', markerColor: 'blue', prefix: 'fa', spin:false, fillOpacity:0.5}) });
      } 
    return marker;
    }
  }).addTo(map);

//Control de Features point json

var searchControl = new L.Control.Search({
		layer: geoLayer,
		propertyName: 'tipo_elem',
		marker: false,
		moveToLocation: function(latlng) {
			console.log(latlng +" Coordinates");
  			map.setView(latlng, 18); // set the zoom
		}
	});
	
	map.addControl( searchControl );





var searchControl = new L.Control.Search({
    layer:PEPMF,
    propertyName:'zona',
    marker: false,
    moveToLocation: function (latlng,title,map) {
         
			map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer);
  			map.setView(latlng, zoom); // access the zoom
  
}}).addTo(map);

map.addControl( searchControl );


/*
//NO2
function getColor2(a) {
	return a > 40 ? '#BE1D00' :
	a > 20 ? '#E67701' :
	a > 10 ? '#FFD900' :
	a > 5? '#BAD578' :
	a > 1 ? '#619900' :
	a > 0 ? '#016E01' :
	a == 0 ? '#004800' :

	'#C2523C';
};
function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.NOx),
		weight: 0,
		opacity: 0.60,
		color: '#0B161D',
		dashArray: '1',
		fillOpacity: 0.8
	};
};
function popup2(feature, layer) {
	if (feature.properties && feature.properties.CO) {
		layer.bindTooltip("<strong>Emisiones de NO<SUB>2</SUB>: </strong>"+feature.properties.NOx.toFixed(3).replace(".",",")+" t/km<sup>2</sup><BR><strong>Municipio: </strong>"+feature.properties.NAMEUNIT.toLocaleString(),{direction:"top",sticky:true, permanente:true,offset:[0,-5], pane: 'popups'});			
	};
};
var geojson2 = L.geoJson(tabla_cont, {
	style: style2,
	onEachFeature: popup2
});


*/
var mapa1 = L.layerGroup([mask]).addTo(map);
/*var mapa2 = L.layerGroup([geojson2]);
var mapa3 = L.layerGroup([geojson3]);
var mapa4 = L.layerGroup([geojson4]);
var mapa5 = L.layerGroup([geojson5]);
var mapa6 = L.layerGroup([geojson6]);*/

var baseTree = [
	{ label: "<strong>Limpiar mapa", layer: osm3 },
	{
	label: '<strong>Mapas de emisiones de contaminantes atmosféricos por municipios',
	children: [

	    { label: "Clasificacion de suelo", layer: mapa1 },
	  /*  { label: "Emisiones de NO<SUB>2</SUB>", layer: mapa2 },
	    { label: "Emisiones de partículas gruesas (PM<sub>10</sub>)", layer: mapa6 },
		{ label: "Emisiones de CO", layer: mapa4 },
		{ label: "Emisiones de NH<SUB>3</SUB>", layer: mapa3 },
		{ label: "Emisiones de SO<SUB>2</SUB>", layer: mapa1 },
		{ label: "Vulnerabilidad de municipios por concentración de contaminantes", layer: mapa5 },
	*/
	]
	},
	];
	



var overlayTree = {
	label: 'Mapas de referencia',
	children: [

		{ label: "OpenStreetMap 1", layer: positron},
		{ label: "OpenStreetMap 2", layer: positronLabels},
		{ label: "OpenStreetMap 3", layer: Mapa_fondo},
	]
};	

///////////Definicion del estilo de la leyenda de cada capa///////////
// leyenda mapa100	
/*
var htmlLegend100 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Clases multivarientes de municipios segun sus emisiones contaminantes de fuentes difusas'+"<\h3>",
			style: style100,
			layer: mapa100,
			elements: [{
				label:"<h4>"+  'Clases de emisiones'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Muy bajas'+"<\h4>",html: '',style: {'background-color': '#2892C6','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  'Bajas'+"</h4>",html: '',style: {'background-color': '#81B3AB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  'Bajas (salvo NH<sub>3</sub>)'+"<\h4>",html: '',style: {'background-color': '#BFD48A','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  'Medias'+"<\h4>",html: '',style: {'background-color': '#FAFAA3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {
				label:"<h4>"+  'Altas'+"<\h4>",html: '',style: {'background-color': '#FFD900','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  'Altas (Muy altas en SO<sub>2</sub>)'+"<\h4>",html: '',style: {'background-color': '#E67700','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  'Muy altas'+"<\h4>",html: '',style: {'background-color': '#BF1D00','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h5>"+  ''+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  ''+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+  'Fuente: Elaboración desde datos de 2008 y mapas del IGN (AEMA,2011;IGN,2017)'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	});
	map.addControl(htmlLegend100);

*/




//Visualizar capas
//L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});
