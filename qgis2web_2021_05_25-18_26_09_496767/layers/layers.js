var wms_layers = [];

var format_ElBierzo_0 = new ol.format.GeoJSON();
var features_ElBierzo_0 = format_ElBierzo_0.readFeatures(json_ElBierzo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElBierzo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElBierzo_0.addFeatures(features_ElBierzo_0);
var lyr_ElBierzo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElBierzo_0, 
                style: style_ElBierzo_0,
                interactive: true,
                title: '<img src="styles/legend/ElBierzo_0.png" /> El Bierzo'
            });
var format_Carreteras_1 = new ol.format.GeoJSON();
var features_Carreteras_1 = format_Carreteras_1.readFeatures(json_Carreteras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreteras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreteras_1.addFeatures(features_Carreteras_1);
var lyr_Carreteras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carreteras_1, 
                style: style_Carreteras_1,
                interactive: true,
                title: '<img src="styles/legend/Carreteras_1.png" /> Carreteras '
            });
var format_Puntosvertederos_2 = new ol.format.GeoJSON();
var features_Puntosvertederos_2 = format_Puntosvertederos_2.readFeatures(json_Puntosvertederos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosvertederos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosvertederos_2.addFeatures(features_Puntosvertederos_2);
var lyr_Puntosvertederos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosvertederos_2, 
                style: style_Puntosvertederos_2,
                interactive: true,
                title: '<img src="styles/legend/Puntosvertederos_2.png" /> Puntos vertederos'
            });
var format_Nucleospoblacin_3 = new ol.format.GeoJSON();
var features_Nucleospoblacin_3 = format_Nucleospoblacin_3.readFeatures(json_Nucleospoblacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nucleospoblacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nucleospoblacin_3.addFeatures(features_Nucleospoblacin_3);
var lyr_Nucleospoblacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nucleospoblacin_3, 
                style: style_Nucleospoblacin_3,
                interactive: true,
                title: '<img src="styles/legend/Nucleospoblacin_3.png" /> Nucleos población'
            });

lyr_ElBierzo_0.setVisible(true);lyr_Carreteras_1.setVisible(true);lyr_Puntosvertederos_2.setVisible(true);lyr_Nucleospoblacin_3.setVisible(true);
var layersList = [lyr_ElBierzo_0,lyr_Carreteras_1,lyr_Puntosvertederos_2,lyr_Nucleospoblacin_3];
lyr_ElBierzo_0.set('fieldAliases', {'UNID_TERRI': 'UNID_TERRI', 'COUNT': 'COUNT', 'PRIMILLA_M': 'PRIMILLA_M', 'PRIMILLA_M_1': 'PRIMILLA_M_1', 'PROVINCIA': 'PROVINCIA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Carreteras_1.set('fieldAliases', {'CARRETERA': 'CARRETERA', 'SUBTRAMO': 'SUBTRAMO', 'PKI': 'PKI', 'PKF': 'PKF', 'ORIGEN': 'ORIGEN', 'FINAL': 'FINAL', 'LONGITUD': 'LONGITUD', 'LENGTH': 'LENGTH', 'PROV': 'PROV', 'TIPO_CAR': 'TIPO_CAR', 'CONTRASTE': 'CONTRASTE', 'SINUOSO': 'SINUOSO', 'RECNO': 'RECNO', 'TIPO_VIA': 'Tipo de vía', });
lyr_Puntosvertederos_2.set('fieldAliases', {'Pueblo': 'Núcleo población', 'X': 'X', 'Y': 'Y', 'localizaci': 'Localización', });
lyr_Nucleospoblacin_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NUCLEOS_': 'NUCLEOS_', 'NUCLEOS_ID': 'NUCLEOS_ID', 'CODIGOPROV': 'CODIGOPROV', 'TIPOREG': 'TIPOREG', 'TEMA': 'TEMA', 'GRUPO': 'GRUPO', 'SUBGRUPO': 'SUBGRUPO', 'NUMEROENT': 'NUMEROENT', 'HUSO': 'HUSO', 'NUMEROTRAM': 'NUMEROTRAM', 'TIPOCONT': 'TIPOCONT', 'LONGITUD': 'LONGITUD', 'NOMBREUI': 'NOMBREUI', 'NOMBRE': 'Nombre núcleo de población', });
lyr_ElBierzo_0.set('fieldImages', {'UNID_TERRI': 'Hidden', 'COUNT': 'Hidden', 'PRIMILLA_M': 'Hidden', 'PRIMILLA_M_1': 'Hidden', 'PROVINCIA': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', });
lyr_Carreteras_1.set('fieldImages', {'CARRETERA': 'Hidden', 'SUBTRAMO': 'Hidden', 'PKI': 'Hidden', 'PKF': 'Hidden', 'ORIGEN': 'Hidden', 'FINAL': 'Hidden', 'LONGITUD': 'Hidden', 'LENGTH': 'Hidden', 'PROV': 'Hidden', 'TIPO_CAR': 'Hidden', 'CONTRASTE': 'Hidden', 'SINUOSO': 'Hidden', 'RECNO': 'Hidden', 'TIPO_VIA': 'TextEdit', });
lyr_Puntosvertederos_2.set('fieldImages', {'Pueblo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'localizaci': 'TextEdit', });
lyr_Nucleospoblacin_3.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'NUCLEOS_': 'Hidden', 'NUCLEOS_ID': 'Hidden', 'CODIGOPROV': 'Hidden', 'TIPOREG': 'Hidden', 'TEMA': 'Hidden', 'GRUPO': 'Hidden', 'SUBGRUPO': 'Hidden', 'NUMEROENT': 'Hidden', 'HUSO': 'Hidden', 'NUMEROTRAM': 'Hidden', 'TIPOCONT': 'Hidden', 'LONGITUD': 'Hidden', 'NOMBREUI': 'Hidden', 'NOMBRE': 'TextEdit', });
lyr_ElBierzo_0.set('fieldLabels', {});
lyr_Carreteras_1.set('fieldLabels', {'TIPO_VIA': 'no label', });
lyr_Puntosvertederos_2.set('fieldLabels', {'Pueblo': 'inline label', 'X': 'no label', 'Y': 'no label', 'localizaci': 'no label', });
lyr_Nucleospoblacin_3.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Nucleospoblacin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});