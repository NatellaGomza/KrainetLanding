// components/address.scripts
export function renderMap() {
    ymaps.ready(() => {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        const placemarkCoords = [59.938631, 30.323037];
        const desktopCenter = [59.939095, 30.315868];
        const isMobile = window.innerWidth <= 768;

        const map = new ymaps.Map('map', {
            center: isMobile ? placemarkCoords : desktopCenter,
            zoom: 15,
        });

        const placemark = new ymaps.Placemark(
            placemarkCoords,
            { hintContent: 'Моя точка' },
            {
                iconLayout: 'default#image',
                iconImageHref: './app/assets/map-logo.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48],
            }
        );

        map.geoObjects.add(placemark);

        window.addEventListener('resize', () => {
            const isMobile = window.innerWidth <= 1440;
            map.setCenter(isMobile ? placemarkCoords : desktopCenter);
        });

    });
}
