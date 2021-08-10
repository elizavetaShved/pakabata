export default function componentMap() {
  const hostElem = document.querySelector('#map-host');
  const mapElem = hostElem.querySelector('.js-contacts-map');

  ymaps.ready(initialzeMap);

  function initialzeMap() {
    const lat = Number(mapElem.getAttribute('data-lat'));
    const lng = Number(mapElem.getAttribute('data-lng'));
    const pinURL = mapElem.getAttribute('data-pin');
    // const balloonContent = mapElem.getAttribute('data-balloon');

    let pinOptions = {
      iconLayout: 'default#image',
      iconImageHref: pinURL,
      iconImageSize: [66, 85],
      iconImageOffset: [-33, -85]
    };

    if (window.matchMedia('(max-width: 1024px)').matches) {
      pinOptions.iconImageSize = [66, 85];
      pinOptions.iconImageOffset = [-33, -85]
    }

    const center = [lat, lng];

    let geoPing;
    if (window.innerWidth >=768) {
      geoPing = [55.75823642395186,52.4381519897397]
    } else {
      geoPing = center;
    }

    const mapInstance = new ymaps.Map(mapElem, {
      center: geoPing,
      zoom: 15,
      controls: []
    });

    mapInstance.behaviors.disable('scrollZoom');

    mapInstance.controls.add('zoomControl', {
      position: {
        right: 10,
        top: 150
      },
      size: 'small',
    })

    const objectManager = new ymaps.ObjectManager({
      clusterize: false,
      clusterHasBalloon: false,
      geoObjectOpenBalloonOnClick: true,
      clusterIconColor: '#e62f48'
    });
    mapInstance.geoObjects.add(objectManager);

    objectManager.add({
      id: 1,
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: center
      },
      options: {
        hideIconOnBalloonOpen: false,
        balloonCloseButton: false,
        ...pinOptions
      }
    });
  }
}
