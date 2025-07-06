var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
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
var format_1943_3 = new ol.format.GeoJSON();
var features_1943_3 = format_1943_3.readFeatures(json_1943_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1943_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1943_3.addFeatures(features_1943_3);
var lyr_1943_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1943_3, 
                style: style_1943_3,
                popuplayertitle: '1943',
                interactive: false,
    title: '1943<br />\
    <img src="styles/legend/1943_3_0.png" /> <br />' });
var format_1931_4 = new ol.format.GeoJSON();
var features_1931_4 = format_1931_4.readFeatures(json_1931_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1931_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1931_4.addFeatures(features_1931_4);
var lyr_1931_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1931_4, 
                style: style_1931_4,
                popuplayertitle: '1931',
                interactive: false,
    title: '1931<br />\
    <img src="styles/legend/1931_4_0.png" /> <br />' });
var format_1924_5 = new ol.format.GeoJSON();
var features_1924_5 = format_1924_5.readFeatures(json_1924_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1924_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1924_5.addFeatures(features_1924_5);
var lyr_1924_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1924_5, 
                style: style_1924_5,
                popuplayertitle: '1924',
                interactive: false,
    title: '1924<br />\
    <img src="styles/legend/1924_5_0.png" /> <br />' });
var format_1910_6 = new ol.format.GeoJSON();
var features_1910_6 = format_1910_6.readFeatures(json_1910_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1910_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1910_6.addFeatures(features_1910_6);
var lyr_1910_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1910_6, 
                style: style_1910_6,
                popuplayertitle: '1910',
                interactive: false,
    title: '1910<br />\
    <img src="styles/legend/1910_6_0.png" /> <br />' });
var format_1904_7 = new ol.format.GeoJSON();
var features_1904_7 = format_1904_7.readFeatures(json_1904_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1904_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1904_7.addFeatures(features_1904_7);
var lyr_1904_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1904_7, 
                style: style_1904_7,
                popuplayertitle: '1904',
                interactive: false,
    title: '1904<br />\
    <img src="styles/legend/1904_7_0.png" /> <br />' });
var format_1882_8 = new ol.format.GeoJSON();
var features_1882_8 = format_1882_8.readFeatures(json_1882_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1882_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1882_8.addFeatures(features_1882_8);
var lyr_1882_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1882_8, 
                style: style_1882_8,
                popuplayertitle: '1882',
                interactive: false,
    title: '1882<br />\
    <img src="styles/legend/1882_8_0.png" /> <br />' });
var format_Buildings_9 = new ol.format.GeoJSON();
var features_Buildings_9 = format_Buildings_9.readFeatures(json_Buildings_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_9.addFeatures(features_Buildings_9);
var lyr_Buildings_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_9, 
                style: style_Buildings_9,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_9_0.png" /> Before 1900<br />\
    <img src="styles/legend/Buildings_9_1.png" /> 1900 - 1916<br />\
    <img src="styles/legend/Buildings_9_2.png" /> 1916 - 1930<br />\
    <img src="styles/legend/Buildings_9_3.png" /> 1930 - 1942<br />' });
var group_UrbanFabricDevelopment = new ol.layer.Group({
                                layers: [lyr_1943_3,lyr_1931_4,lyr_1924_5,lyr_1910_6,lyr_1904_7,lyr_1882_8,],
                                fold: 'close',
                                title: 'Urban Fabric Development'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRIImagery_0,lyr_GoogleEarth_1,lyr_OpenStreetMap_2,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_ESRIImagery_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_1943_3.setVisible(true);lyr_1931_4.setVisible(true);lyr_1924_5.setVisible(true);lyr_1910_6.setVisible(true);lyr_1904_7.setVisible(true);lyr_1882_8.setVisible(true);lyr_Buildings_9.setVisible(true);
var layersList = [group_Basemaps,group_UrbanFabricDevelopment,lyr_Buildings_9];
lyr_1943_3.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1931_4.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1924_5.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1910_6.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1904_7.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_1882_8.set('fieldAliases', {'Year': 'Year', 'Typology': 'Typology', });
lyr_Buildings_9.set('fieldAliases', {'Year': 'Year', 'Name_Dutch': 'Dutch Name', 'Name_Indo': 'Indonesian Name', 'Architect': 'Architect', 'Archive': 'Archive Location', 'Identifier': 'Archive Identifier', 'Link': 'Link to Archive', 'Year (Int)': 'Year (Int)', });
lyr_1943_3.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1931_4.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1924_5.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1910_6.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1904_7.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_1882_8.set('fieldImages', {'Year': 'TextEdit', 'Typology': 'TextEdit', });
lyr_Buildings_9.set('fieldImages', {'Year': 'TextEdit', 'Name_Dutch': 'TextEdit', 'Name_Indo': 'TextEdit', 'Architect': 'TextEdit', 'Archive': 'TextEdit', 'Identifier': 'TextEdit', 'Link': 'TextEdit', 'Year (Int)': 'Range', });
lyr_1943_3.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1931_4.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1924_5.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1910_6.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1904_7.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_1882_8.set('fieldLabels', {'Year': 'no label', 'Typology': 'no label', });
lyr_Buildings_9.set('fieldLabels', {'Year': 'inline label - always visible', 'Name_Dutch': 'inline label - visible with data', 'Name_Indo': 'inline label - visible with data', 'Architect': 'inline label - visible with data', 'Archive': 'inline label - visible with data', 'Identifier': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'Year (Int)': 'hidden field', });
lyr_Buildings_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});