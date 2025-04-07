"use strict";
var KTModalSelectLocation = function () {
    var t, o, e = "",
        n = !1;
    return {
        init: function () {
            (o = document.querySelector("#kt_modal_select_location")) && (t = document.querySelector("#kt_modal_select_location_target"), document.querySelector("#kt_modal_select_location_button").addEventListener("click", (function () {
                t && (t.value ? t.value = e : t.innerHTML = e)
            })), o.addEventListener("shown.bs.modal", (function () {
                n || (! function () {
                    if (L) {
                        var t, o = L.map("kt_modal_select_location_map", {
                            center: [40.725, -73.985],
                            zoom: 30
                        });
                        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(o), t = void 0 === L.esri.Geocoding ? L.esri.geocodeService() : L.esri.Geocoding.geocodeService();
                        var n = L.layerGroup().addTo(o),
                            c = L.divIcon({
                                html: '<i class="ki-solid ki-geolocation text-primary fs-3x"></span>',
                                bgPos: [10, 10],
                                iconAnchor: [20, 37],
                                popupAnchor: [0, -37],
                                className: "leaflet-marker"
                            });
                        o.on("click", (function (o) {
                            t.reverse().latlng(o.latlng).run((function (t, o) {
                                t || (n.clearLayers(), e = o.address.Match_addr, L.marker(o.latlng, {
                                    icon: c
                                }).addTo(n).bindPopup(o.address.Match_addr, {
                                    closeButton: !1
                                }).openPopup(), Swal.fire({
                                    html: '<div class="mb-2">Your selected - <b>"' + e + '"</b>.</div>Click on the "Apply" button to select this location.',
                                    icon: "success",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then((function (t) { })))
                            }))
                        }))
                    }
                }(), n = !0)
            })))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTModalSelectLocation.init()
}));