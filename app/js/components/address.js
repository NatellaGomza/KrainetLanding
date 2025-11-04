// components/address.js
export function renderMap() {
    console.log('ggg')
    ymaps.ready(() => {
        const mapContainer = document.getElementById("map");
        console.log(mapContainer);
        if (!mapContainer) return;
        console.log('here');

        const map = new ymaps.Map("map", {
            center: [59.939095, 30.315868],
            zoom: 15
        });

        const placemark = new ymaps.Placemark(
            [59.938631, 30.323037],
            { hintContent: "Моя точка" },
            {
                iconLayout: "default#image",
                iconImageHref: "../../assets/map-logo.png",
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48]
            }
        );

        map.geoObjects.add(placemark);
    });
}
