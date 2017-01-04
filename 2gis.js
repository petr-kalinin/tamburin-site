var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.318905, 44.005973],
        zoom: 15,
        scrollWheelZoom: false
    });
    DG.marker([56.321389, 44.013011]).addTo(map).bindPopup('<h6>Нижполиграф</h6>2 этаж');
    DG.marker([56.317233, 43.999110]).addTo(map).bindPopup('<h6>Звездинка</h6>2 этаж');
    var options = {vectors: [
        "LINESTRING(44.012813 56.321074, 44.012826 56.321136)",
        "LINESTRING(43.999195 56.317078, 43.999174 56.317132)",
    ]};
    DG.entrance(options).addTo(map).show(false);
});
