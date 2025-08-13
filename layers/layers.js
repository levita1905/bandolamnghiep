ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5899").setExtent([435192.994551, 1243220.109045, 454135.331694, 1251785.812170]);
var wms_layers = [];


        var lyr_VietbandoMaps_0 = new ol.layer.Tile({
            'title': 'Vietbando Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://images.vietbando.com/ImageLoader/GetImage.ashx?Ver=2016&LayerIds=VBD&Y={y}&X={x}&Level={z}'
            })
        });
var format_2025710TrngrngKhochnm2025_1 = new ol.format.GeoJSON();
var features_2025710TrngrngKhochnm2025_1 = format_2025710TrngrngKhochnm2025_1.readFeatures(json_2025710TrngrngKhochnm2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_2025710TrngrngKhochnm2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025710TrngrngKhochnm2025_1.addFeatures(features_2025710TrngrngKhochnm2025_1);
var lyr_2025710TrngrngKhochnm2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025710TrngrngKhochnm2025_1, 
                style: style_2025710TrngrngKhochnm2025_1,
                popuplayertitle: '2025.7.10 Trồng rừng - Kế hoạch năm 2025',
                interactive: true,
                title: '2025.7.10 Trồng rừng - Kế hoạch năm 2025'
            });
var format_nggiaothng_2 = new ol.format.GeoJSON();
var features_nggiaothng_2 = format_nggiaothng_2.readFeatures(json_nggiaothng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_nggiaothng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nggiaothng_2.addFeatures(features_nggiaothng_2);
var lyr_nggiaothng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nggiaothng_2, 
                style: style_nggiaothng_2,
                popuplayertitle: 'Đường giao thông',
                interactive: true,
                title: '<img src="styles/legend/nggiaothng_2.png" /> Đường giao thông'
            });
var group_0Ranhgioishiukhonhgiaothng = new ol.layer.Group({
                                layers: [lyr_nggiaothng_2,],
                                fold: 'close',
                                title: '0. Ranh gioi, số hiệu khoảnh, giao thông'});
var group_RngtrngvnCTCPthiim3112ccnm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rừng trồng vốn CTCP thời điểm 31/12 các năm'});
var group_Rnggihnhnc = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rừng giữ hộ nhà nước'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2024'});
var group_2025 = new ol.layer.Group({
                                layers: [lyr_VietbandoMaps_0,lyr_2025710TrngrngKhochnm2025_1,],
                                fold: 'close',
                                title: '2025'});
var group_2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2026'});
var group_Khaithcrngtrng = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Khai thác rừng trồng'});
var group_tthuhi = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Đất thu hồi'});
var group_Xltntht = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Xử lý tổn thất'});
var group_Dinbinrngcatnh = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Diễn biến rừng của tỉnh'});
var group_Lrngcngon = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lô rừng công đoàn'});
var group_ViphmQLBVR = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vi phạm QLBVR'});

lyr_VietbandoMaps_0.setVisible(true);lyr_2025710TrngrngKhochnm2025_1.setVisible(true);lyr_nggiaothng_2.setVisible(true);
var layersList = [group_2025,group_0Ranhgioishiukhonhgiaothng];
lyr_2025710TrngrngKhochnm2025_1.set('fieldAliases', {'fid': 'fid', 'ID_MOI': 'ID Lô', 'Doi': 'Đội', 'TK': 'Tiểu khu', 'KH': 'Khoảnh', 'Lo': 'Lô', 'DTSS': 'DTSS', 'DTHC': 'Diện tích thiết kế', 'GoiKT': 'GoiKT', 'NguonGocDat': 'Nguồn Gốc Đất', 'BPLD': 'Biện pháp làm đất', 'Dientichuplai': 'Diện tích update', 'Loaicay': 'Loài cây', 'matdo': 'Mật độ', 'socay': 'Số cây (gồm dặm)', '_dam': '_dam', 'HT_TR2025': 'HT_TR2025', 'Giaidoanthuchien': 'Giai đoạn thực hiện', 'Cong_thuc_trong_rung': 'Công thức', 'Dong_cay': 'Dòng cây hiện trường', 'Thang_trong': 'Tháng trồng rừng', 'Hientrangmumle_GR': 'Hiện trang xử lý lồ ô giáp ranh', 'Dang ky thoi gian TR': 'Đăng ký thời gian trồng rừng', 'Matdo_HT': 'Mật độ hiện trường', 'Culytrong': 'Cự ly trồng hiện trường', 'Socay_HT': 'Số cây hiện trường', 'NGUOI QUAN LY': 'NGUOI QUAN LY', 'SODIENTHOAI': 'SODIENTHOAI', 'So_HD': 'Số hợp đồng', 'Chu_HD': 'Chủ hợp đồng', 'DaBonPhan': 'Đã thực hiện bón phân', 'DonviCaygiong': 'Đơn vị cung cấp cây giống', 'DoiBonPhan': 'Số lượng bón phân (Đội nhập)', 'TiendoChamsoc': 'Tiến độ chăm sóc', 'DT_TR': 'Diện tích đã trồng', 'Trồng rừng': 'Trồng rừng', 'Đo đất trồng rừng năm 2025_Dientich': 'Đo đất trồng rừng năm 2025_Dientich', 'SocayHT': 'Số lượng cây', 'Phanbon': 'Phân bón', });
lyr_nggiaothng_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_2025710TrngrngKhochnm2025_1.set('fieldImages', {'fid': 'TextEdit', 'ID_MOI': 'TextEdit', 'Doi': 'TextEdit', 'TK': 'TextEdit', 'KH': 'TextEdit', 'Lo': 'TextEdit', 'DTSS': 'TextEdit', 'DTHC': 'TextEdit', 'GoiKT': 'TextEdit', 'NguonGocDat': 'TextEdit', 'BPLD': 'TextEdit', 'Dientichuplai': 'TextEdit', 'Loaicay': 'TextEdit', 'matdo': 'TextEdit', 'socay': 'TextEdit', '_dam': 'TextEdit', 'HT_TR2025': 'TextEdit', 'Giaidoanthuchien': 'ValueMap', 'Cong_thuc_trong_rung': 'TextEdit', 'Dong_cay': 'TextEdit', 'Thang_trong': 'TextEdit', 'Hientrangmumle_GR': 'TextEdit', 'Dang ky thoi gian TR': 'DateTime', 'Matdo_HT': 'Range', 'Culytrong': 'TextEdit', 'Socay_HT': 'Range', 'NGUOI QUAN LY': 'TextEdit', 'SODIENTHOAI': 'TextEdit', 'So_HD': 'Range', 'Chu_HD': 'TextEdit', 'DaBonPhan': 'CheckBox', 'DonviCaygiong': 'TextEdit', 'DoiBonPhan': 'Range', 'TiendoChamsoc': 'CheckBox', 'DT_TR': 'TextEdit', 'Trồng rừng': 'TextEdit', 'Đo đất trồng rừng năm 2025_Dientich': 'TextEdit', 'SocayHT': 'Range', 'Phanbon': 'Range', });
lyr_nggiaothng_2.set('fieldImages', {'fid': '', 'ID': '', });
lyr_2025710TrngrngKhochnm2025_1.set('fieldLabels', {'fid': 'no label', 'ID_MOI': 'no label', 'Doi': 'no label', 'TK': 'no label', 'KH': 'no label', 'Lo': 'no label', 'DTSS': 'no label', 'DTHC': 'no label', 'GoiKT': 'no label', 'NguonGocDat': 'no label', 'BPLD': 'no label', 'Dientichuplai': 'no label', 'Loaicay': 'no label', 'matdo': 'no label', 'socay': 'no label', '_dam': 'no label', 'HT_TR2025': 'no label', 'Giaidoanthuchien': 'no label', 'Cong_thuc_trong_rung': 'no label', 'Dong_cay': 'no label', 'Thang_trong': 'no label', 'Hientrangmumle_GR': 'no label', 'Dang ky thoi gian TR': 'no label', 'Matdo_HT': 'no label', 'Culytrong': 'no label', 'Socay_HT': 'no label', 'NGUOI QUAN LY': 'no label', 'SODIENTHOAI': 'no label', 'So_HD': 'no label', 'Chu_HD': 'no label', 'DaBonPhan': 'no label', 'DonviCaygiong': 'no label', 'DoiBonPhan': 'no label', 'TiendoChamsoc': 'no label', 'DT_TR': 'no label', 'Trồng rừng': 'no label', 'Đo đất trồng rừng năm 2025_Dientich': 'no label', 'SocayHT': 'no label', 'Phanbon': 'no label', });
lyr_nggiaothng_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_nggiaothng_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});