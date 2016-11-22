var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.321178, 44.012770],
        zoom: 17,
        scrollWheelZoom: false
    });
    DG.marker([56.321389, 44.013011]).addTo(map).bindPopup('<h6>Тамбурин</h6>студия танца<br/>2 этаж');
    var options = {vectors: [
    "LINESTRING(44.012813 56.321074,44.012826 56.321136)",
    ]};
    DG.entrance(options).addTo(map).show(true);
});
