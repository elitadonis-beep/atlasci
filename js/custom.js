// Yılı otomatik yaz (footer'da displayYear varsa)
function getYear() {
  const el = document.getElementById("displayYear");
  if (el) el.innerHTML = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  getYear();

  // ISOTOPE INIT (grid varsa)
  if (window.jQuery && $(".grid").length) {
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      layoutMode: "fitRows",
    });

    // FILTER CLICK (menu varsa)
    $(".filters_menu li").on("click", function () {
      $(".filters_menu li").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  }
});

// Google Maps callback: callback=myMap bunu çağırır
function myMap() {
  const mapDiv = document.getElementById("googleMap");
  if (!mapDiv) return;

  // Hasanpaşa / Kadıköy (yakın konum)
  const center = { lat: 40.990, lng: 29.037 };

  const map = new google.maps.Map(mapDiv, {
    zoom: 15,
    center: center,
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Atlas Uydu Sistemleri",
  });

  const info = new google.maps.InfoWindow({
    content:
      "<b>Atlas Uydu Sistemleri</b><br>Hasanpaşa, Mandıra Cd. No:4, Kadıköy/İstanbul",
  });

  marker.addListener("click", function () {
    info.open(map, marker);
  });
}