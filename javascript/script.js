// Toogle
const navbarNav = document.querySelector(".nav-menu");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const lessMoreBtn = document.getElementById("lessMoreBtn");
  const portoWebgis = document.getElementById("porto-webs");
  const portoGis = document.getElementById("porto-gis");

  // Simpan jumlah item awal yang ditampilkan
  const itemsToShow = 3;
  let currentItems = itemsToShow;

  function toggleItems(portoContainer, showMore) {
    const items = portoContainer.querySelectorAll(".tab-contents-portofolio");
    items.forEach((item, index) => {
      if (showMore) {
        // Tampilkan semua
        item.style.display = "flex";
      } else {
        // Batasi jumlah yang ditampilkan
        item.style.display = index < itemsToShow ? "flex" : "none";
      }
    });
  }

  // Event handler untuk tombol Load More
  loadMoreBtn.addEventListener("click", function () {
    toggleItems(portoWebgis, true);
    toggleItems(portoGis, true);
    loadMoreBtn.style.display = "none"; // Sembunyikan tombol Load More
    lessMoreBtn.style.display = "block"; // Tampilkan tombol Less More
  });

  // Event handler untuk tombol Less More
  lessMoreBtn.addEventListener("click", function () {
    toggleItems(portoWebgis, false);
    toggleItems(portoGis, false);
    loadMoreBtn.style.display = "block"; // Tampilkan tombol Load More
    lessMoreBtn.style.display = "none"; // Sembunyikan tombol Less More
  });

  // Atur tampilan awal (hanya tampilkan sejumlah item tertentu)
  toggleItems(portoWebgis, false);
  toggleItems(portoGis, false);
});
