(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  // Announcement
  $("annText").textContent = S.announcement.text;
  var al = $("annLink"); al.textContent = S.announcement.linkText; al.href = S.announcement.link;

  // Brand and logo upload
  $("brandName").textContent = S.brand.name;
  $("brandSub").textContent = S.brand.sub;
  $("mark").textContent = S.brand.mark;
  if (S.brand.logo) {
    var probe = new Image();
    probe.onload = function () {
      var img = $("logoImg");
      img.src = S.brand.logo; img.alt = S.brand.name + " logo"; img.hidden = false;
      $("mark").hidden = true;
    };
    probe.src = S.brand.logo;
  }

  // Header links
  var sn = $("shopNow"); sn.textContent = S.shopNow.text; sn.href = S.shopNow.link;
  var links = $("menuLinks");
  S.menu.forEach(function (m) {
    var a = document.createElement("a"); a.href = m.link; a.textContent = m.text; links.appendChild(a);
  });

  // Menu
  var mb = $("menuBtn"), mp = $("menuPanel");
  mb.addEventListener("click", function () {
    var open = mp.hidden; mp.hidden = !open; mb.setAttribute("aria-expanded", String(open));
  });
  mp.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { mp.hidden = true; mb.setAttribute("aria-expanded", "false"); }
  });

  // Hero
  $("heroHeading").textContent = S.hero.heading;
  $("heroText").textContent = S.hero.text;
  var hb = $("heroButton"); hb.textContent = S.hero.button; hb.href = S.hero.link;
  if (S.hero.image) $("heroPhoto").style.backgroundImage = 'url("' + S.hero.image + '")';

  // Footer
  $("footText").textContent = S.footer;

  // Cart count (preview only: tapping a product adds one)
  var count = 0, badge = $("badge"), cart = $("cart");
  function setCount(n) {
    count = n; badge.textContent = n; badge.hidden = n === 0;
    cart.setAttribute("aria-label", "Cart, " + n + (n === 1 ? " item" : " items"));
  }

  // Products
  var grid = $("grid");
  S.products.forEach(function (p) {
    var a = document.createElement("a"); a.className = "item"; a.href = "#products";
    var pic = document.createElement("div"); pic.className = "pic";
    if (p.image) { pic.className += " own"; pic.style.backgroundImage = 'url("' + p.image + '")'; }
    else if (S.hero.image) {
      pic.style.backgroundImage = 'url("' + S.hero.image + '")';
      pic.style.backgroundSize = p.size + " auto"; pic.style.backgroundPosition = p.pos;
    }
    var b = document.createElement("b"); b.textContent = p.name;
    var s = document.createElement("span"); s.textContent = p.price;
    a.appendChild(pic); a.appendChild(b); a.appendChild(s);
    a.addEventListener("click", function (e) { e.preventDefault(); setCount(count + 1); });
    grid.appendChild(a);
  });
})();
