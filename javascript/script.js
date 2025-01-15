// Script Get Name
function replacename() {
  let name = prompt("Halo, Selamat Datang. Siapakah nama Anda?", "");
  document.getElementById("name").innerHTML = name;
}
replacename();

// Toogle Navbar
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

// Function
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("table-contents");

function opentab(event, tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-content");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-content");
}

//Funtion Project
var tablinksporto = document.getElementsByClassName("tab-links-portofolio");
var tabcontentsporto = document.getElementsByClassName("daftar-portofolio");
function openporto(event, tabporto) {
  for (const tablinkporto of tablinksporto) {
    tablinkporto.classList.remove("active-link-porto");
  }

  for (const tabcontentporto of tabcontentsporto) {
    tabcontentporto.classList.remove("active-porto");
  }

  event.currentTarget.classList.add("active-link-porto");
  document.getElementById(tabporto).classList.add("active-porto");
}
// Button Load More and Less More
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
    loadMoreBtn.style.display = "none";
    lessMoreBtn.style.display = "block";
  });

  // Event handler untuk tombol Less More
  lessMoreBtn.addEventListener("click", function () {
    toggleItems(portoWebgis, false);
    toggleItems(portoGis, false);
    loadMoreBtn.style.display = "block";
    lessMoreBtn.style.display = "none";
  });

  // Atur tampilan awal (hanya tampilkan sejumlah item tertentu)
  toggleItems(portoWebgis, false);
  toggleItems(portoGis, false);
});

// Script Validasi form messages

function Validation() {
  const nama = document.forms["messages"]["nama-form"].value;
  const email = document.forms["messages"]["email-form"].value;
  const pesan = document.forms["messages"]["pesan-form"].value;

  if (nama == "" || email == "" || pesan == "") {
    alert("Tidak boleh ada field yang kosong!");
    return false;
  }
  return false;
}
