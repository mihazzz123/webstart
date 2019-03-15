ymaps.ready(init);

function init () {
    var myMap;

    $('#map').hover(function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                  center: [55.611409, 37.201122],
                  zoom: 16,
                  scroll: false
                }, {
                    searchControlProvider: 'yandex#search'
                });
                var glyphIcon = new ymaps.Placemark([55.611409, 37.201122], {}, {
                  preset: 'islands#yellowGlyphIcon', 
                  iconGlyph: 'home',
                });
                myMap.geoObjects
                  .add(glyphIcon);
                myMap.behaviors.disable('scrollZoom');
            }

        }
    );
}