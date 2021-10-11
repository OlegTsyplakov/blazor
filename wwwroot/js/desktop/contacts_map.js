export function contacts_map() {
        ymaps.ready(init);
        var data = $("#data-dr").attr("data-dr");
        var data2 = $("#data-dr2").attr("data-dr2");
        var data3 = $("#data-dr3").attr("data-dr3");
        function init() {
            var myMap = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 10,
                controls: ['zoomControl']
            }),

                objectManager = new ymaps.ObjectManager({
                    clusterize: false,
                    gridSize: 32,
                    clusterDisableClickZoom: true
                });
            myMap.controls.get('zoomControl').options.set({ size: 'small' });

            function getJson(geoJson, geoJson2, geoJson3) {

                geoJson.features.forEach(function (obj) {

                    obj.properties.balloonContent = obj.properties.description;

                    if (obj.properties.iconCaption) {
                        obj.options = {
                            preset: "islands#darkGreenDotIcon"
                        }

                    }


                });
                geoJson2.features.forEach(function (obj) {

                    obj.properties.balloonContent = obj.properties.description;


                    if (obj.properties.iconCaption) {
                        obj.options = {
                            preset: "islands#violetDotIcon"
                        }

                    }

                });
                geoJson3.features.forEach(function (obj) {

                    obj.properties.balloonContent = obj.properties.description;


                    if (obj.properties.iconCaption) {
                        obj.options = {
                            preset: "islands#darkBlueDotIcon"
                        }

                    }

                });

                var finalObj = geoJson.features.concat(geoJson2.features).concat(geoJson3.features);
                objectManager.add(finalObj);

            }


            function final() {
                myMap.geoObjects.add(objectManager);
                myMap.setBounds(myMap.geoObjects.getBounds());
            }
            $(document).ready(function () {
                getJson(JSON.parse(data), JSON.parse(data2), JSON.parse(data3));

                final();

            });
        }


}