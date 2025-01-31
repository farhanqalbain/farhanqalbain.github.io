var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type':'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1931_3 = new ol.format.GeoJSON();
var features_1931_3 = format_1931_3.readFeatures(json_1931_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1931_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1931_3.addFeatures(features_1931_3);
var lyr_1931_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1931_3, 
                style: style_1931_3,
                popuplayertitle: '1931',
                interactive: false,
    title: '1931<br />\
    <img src="styles/legend/1931_3_0.png" /> <br />'
        });
var format_1924_4 = new ol.format.GeoJSON();
var features_1924_4 = format_1924_4.readFeatures(json_1924_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1924_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1924_4.addFeatures(features_1924_4);
var lyr_1924_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1924_4, 
                style: style_1924_4,
                popuplayertitle: '1924',
                interactive: false,
    title: '1924<br />\
    <img src="styles/legend/1924_4_0.png" /> <br />'
        });
var format_1910_5 = new ol.format.GeoJSON();
var features_1910_5 = format_1910_5.readFeatures(json_1910_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1910_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1910_5.addFeatures(features_1910_5);
var lyr_1910_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1910_5, 
                style: style_1910_5,
                popuplayertitle: '1910',
                interactive: false,
    title: '1910<br />\
    <img src="styles/legend/1910_5_0.png" /> <br />'
        });
var format_1904_6 = new ol.format.GeoJSON();
var features_1904_6 = format_1904_6.readFeatures(json_1904_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1904_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1904_6.addFeatures(features_1904_6);
var lyr_1904_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1904_6, 
                style: style_1904_6,
                popuplayertitle: '1904',
                interactive: false,
    title: '1904<br />\
    <img src="styles/legend/1904_6_0.png" /> <br />'
        });
var format_1882_7 = new ol.format.GeoJSON();
var features_1882_7 = format_1882_7.readFeatures(json_1882_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1882_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1882_7.addFeatures(features_1882_7);
var lyr_1882_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1882_7, 
                style: style_1882_7,
                popuplayertitle: '1882',
                interactive: false,
    title: '1882<br />\
    <img src="styles/legend/1882_7_0.png" /> <br />'
        });
var format_Buildings_8 = new ol.format.GeoJSON();
var features_Buildings_8 = format_Buildings_8.readFeatures(json_Buildings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_8.addFeatures(features_Buildings_8);
cluster_Buildings_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Buildings_8
});
var lyr_Buildings_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Buildings_8, 
                style: style_Buildings_8,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_8_0.png" /> 1904 - 1914<br />\
    <img src="styles/legend/Buildings_8_1.png" /> 1914 - 1924<br />\
    <img src="styles/legend/Buildings_8_2.png" /> 1924 - 1934<br />\
    <img src="styles/legend/Buildings_8_3.png" /> 1934 - 1944<br />'
        });
var group_HistoricalSolidVoid = new ol.layer.Group({
                                layers: [lyr_1931_3,lyr_1924_4,lyr_1910_5,lyr_1904_6,lyr_1882_7,],
                                fold: "open",
                                title: 'Historical Solid Void'});

lyr_ESRIImagery_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_1931_3.setVisible(true);lyr_1924_4.setVisible(true);lyr_1910_5.setVisible(true);lyr_1904_6.setVisible(true);lyr_1882_7.setVisible(true);lyr_Buildings_8.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_GoogleEarth_1,lyr_OpenStreetMap_2,group_HistoricalSolidVoid,lyr_Buildings_8];
lyr_1931_3.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1924_4.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1910_5.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1904_6.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1882_7.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_Buildings_8.set('fieldAliases', {'Year': 'Year Constructed', 'Name_Dutch': 'Dutch Name', 'Name_Indo': 'Indonesian Name', 'Architect': 'Architect', 'Inst': 'Instance', 'Demolished': 'Demolished', 'Typology': 'Typology', 'Style': 'Style', 'Archive': 'Archive Location', 'Identifier': 'Archive Identifier', 'Plan': 'Plan', 'Section': 'Section', 'Elevation': 'Elevation', 'Link': 'Link to Archive', });
lyr_1931_3.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1924_4.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1910_5.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1904_6.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1882_7.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_Buildings_8.set('fieldImages', {'Year': 'UniqueValues', 'Name_Dutch': 'TextEdit', 'Name_Indo': 'TextEdit', 'Architect': 'TextEdit', 'Inst': 'TextEdit', 'Demolished': 'TextEdit', 'Typology': 'TextEdit', 'Style': 'TextEdit', 'Archive': 'TextEdit', 'Identifier': 'TextEdit', 'Plan': 'Hidden', 'Section': 'Hidden', 'Elevation': 'Hidden', 'Link': 'TextEdit', });
lyr_1931_3.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1924_4.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1910_5.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1904_6.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1882_7.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_Buildings_8.set('fieldLabels', {'Year': 'inline label - always visible', 'Name_Dutch': 'inline label - visible with data', 'Name_Indo': 'inline label - visible with data', 'Architect': 'inline label - always visible', 'Inst': 'hidden field', 'Demolished': 'inline label - visible with data', 'Typology': 'inline label - visible with data', 'Style': 'hidden field', 'Archive': 'inline label - visible with data', 'Identifier': 'header label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Buildings_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});