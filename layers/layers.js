var wms_layers = [];

        var lyr_WikimediaMap_0 = new ol.layer.Tile({
            'title': 'WikimediaMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                title: '<img src="styles/legend/ne_10m_airports_1.png" /> ne_10m_airports'
            });

lyr_WikimediaMap_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_WikimediaMap_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': '', 'featurecla': '', 'type': '', 'name': '', 'abbrev': '', 'location': '', 'gps_code': '', 'iata_code': '', 'wikipedia': '', 'natlscale': '', 'comments': '', 'wikidataid': '', 'name_ar': '', 'name_bn': '', 'name_de': '', 'name_en': '', 'name_es': '', 'name_fr': '', 'name_el': '', 'name_hi': '', 'name_hu': '', 'name_id': '', 'name_it': '', 'name_ja': '', 'name_ko': '', 'name_nl': '', 'name_pl': '', 'name_pt': '', 'name_ru': '', 'name_sv': '', 'name_tr': '', 'name_vi': '', 'name_zh': '', 'wdid_score': '', 'ne_id': '', });
lyr_ne_10m_airports_1.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'type': 'no label', 'name': 'no label', 'abbrev': 'no label', 'location': 'no label', 'gps_code': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'natlscale': 'no label', 'comments': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'wdid_score': 'no label', 'ne_id': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});