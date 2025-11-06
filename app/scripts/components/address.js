// components/address.scripts
export function renderMap() {
  ymaps.ready(() => {
    const mapContainer = document.getElementById('map');

    if (!mapContainer) return;

      const coords = [59.938631, 30.323037];

      const map = new ymaps.Map('map', {
          center: coords,
          zoom: 15,
      });

      const placemark = new ymaps.Placemark(
          coords,
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
          map.setCenter(coords);
      });

  });
}
