ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([19.382123, -24.377062, 41.991968, -13.080421]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provincialboundary_1 = new ol.format.GeoJSON();
var features_Provincialboundary_1 = format_Provincialboundary_1.readFeatures(json_Provincialboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Provincialboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincialboundary_1.addFeatures(features_Provincialboundary_1);
var lyr_Provincialboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincialboundary_1, 
                style: style_Provincialboundary_1,
                popuplayertitle: 'Provincial boundary',
                interactive: true,
                title: '<img src="styles/legend/Provincialboundary_1.png" /> Provincial boundary'
            });
var format_GCFProjectDistricts_2 = new ol.format.GeoJSON();
var features_GCFProjectDistricts_2 = format_GCFProjectDistricts_2.readFeatures(json_GCFProjectDistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFProjectDistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFProjectDistricts_2.addFeatures(features_GCFProjectDistricts_2);
var lyr_GCFProjectDistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFProjectDistricts_2, 
                style: style_GCFProjectDistricts_2,
                popuplayertitle: 'GCF Project Districts',
                interactive: true,
    title: 'GCF Project Districts<br />\
    <img src="styles/legend/GCFProjectDistricts_2_0.png" /> Manicaland<br />\
    <img src="styles/legend/GCFProjectDistricts_2_1.png" /> Masvingo<br />\
    <img src="styles/legend/GCFProjectDistricts_2_2.png" /> Matabeleland South<br />' });
var format_IMCLeadershipTrainingAttendance_3 = new ol.format.GeoJSON();
var features_IMCLeadershipTrainingAttendance_3 = format_IMCLeadershipTrainingAttendance_3.readFeatures(json_IMCLeadershipTrainingAttendance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IMCLeadershipTrainingAttendance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMCLeadershipTrainingAttendance_3.addFeatures(features_IMCLeadershipTrainingAttendance_3);
var lyr_IMCLeadershipTrainingAttendance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMCLeadershipTrainingAttendance_3, 
                style: style_IMCLeadershipTrainingAttendance_3,
                popuplayertitle: 'IMC Leadership Training Attendance ',
                interactive: true,
    title: 'IMC Leadership Training Attendance <br />\
    <img src="styles/legend/IMCLeadershipTrainingAttendance_3_0.png" /> 31 - 50<br />\
    <img src="styles/legend/IMCLeadershipTrainingAttendance_3_1.png" /> 50 - 61<br />\
    <img src="styles/legend/IMCLeadershipTrainingAttendance_3_2.png" /> 61 - 66<br />\
    <img src="styles/legend/IMCLeadershipTrainingAttendance_3_3.png" /> 66 - 82<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Provincialboundary_1.setVisible(true);lyr_GCFProjectDistricts_2.setVisible(true);lyr_IMCLeadershipTrainingAttendance_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincialboundary_1,lyr_GCFProjectDistricts_2,lyr_IMCLeadershipTrainingAttendance_3];
lyr_Provincialboundary_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_GCFProjectDistricts_2.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'NAME1_', 'NAME2_': 'NAME2_', });
lyr_IMCLeadershipTrainingAttendance_3.set('fieldAliases', {'fid': 'fid', 'Scheme': 'Scheme', 'Province': 'Province', 'District': 'District', 'Male': 'Male', 'Female': 'Female', 'Total': 'Total', });
lyr_Provincialboundary_1.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'PROVINCE_N': 'Hidden', 'AREA': 'Hidden', 'POPULATION': 'Hidden', 'POPU_M': 'Hidden', 'POPU_F': 'Hidden', 'PERIMETER': 'Hidden', });
lyr_GCFProjectDistricts_2.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'Hidden', 'NAME2_': 'Hidden', });
lyr_IMCLeadershipTrainingAttendance_3.set('fieldImages', {'fid': 'Hidden', 'Scheme': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Total': 'TextEdit', });
lyr_Provincialboundary_1.set('fieldLabels', {});
lyr_GCFProjectDistricts_2.set('fieldLabels', {});
lyr_IMCLeadershipTrainingAttendance_3.set('fieldLabels', {'Scheme': 'header label - visible with data', 'Province': 'header label - visible with data', 'District': 'header label - visible with data', 'Male': 'header label - visible with data', 'Female': 'header label - visible with data', 'Total': 'header label - visible with data', });
lyr_IMCLeadershipTrainingAttendance_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});