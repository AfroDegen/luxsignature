(function () {
  var S = window.SITE;
  var $ = function (id) {
    return document.getElementById(id);
  };

  // Announcement bar
  $("annText").textContent = S.announcement.text;

  var al = $("annLink");
  al.textContent = S.announcement.linkText;
  al.href = S.announcement.link;

  // Brand and logo
  $("brandName").textContent = S.brand.name;
  $("brandSub").textContent = S.brand.sub;
  $("mark").textContent = S.brand.mark;

  if (S.brand.logo) {
    var probe = new Image();

    probe.onload = function () {
      var img = $("logoImg");
      img.src = S.brand.logo;
      img.alt = S.brand.name + " logo";
      img.hidden = false;
      $("mark").hidden = true;
    };

    probe.src = S.brand.logo;
  }

  // Header links
  var sn = $("shopNow");
  sn.textContent = S.shopNow.text;
  sn.href = S.shopNow.link;

  var links = $("menuLinks");

  S.menu.forEach(function (m) {
    var a = document.createElement("a");
    a.href = m.link;
    a.textContent = m.text;
    links.appendChild(a);
  });

  // Mobile menu
  var mb = $("menuBtn");
  var mp = $("menuPanel");

  mb.addEventListener("click", function () {
    var open = mp.hidden;
    mp.hidden = !open;
    mb.setAttribute("aria-expanded", String(open));
  });

  mp.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      mp.hidden = true;
      mb.setAttribute("aria-expanded", "false");
    }
  });

  // Hero section
  $("heroHeading").textContent = S.hero.heading;
  $("heroText").textContent = S.hero.text;

  var hb = $("heroButton");
  hb.textContent = S.hero.button;
  hb.href = S.hero.link;

  if (S.hero.image) {
    $("heroPhoto").style.backgroundImage =
      'url("' + S.hero.image + '")';
  }

  // Footer
  $("footText").textContent = S.footer;

  // Cart count (preview only)
  var count = 0;
  var badge = $("badge");
  var cart = $("cart");

  function setCount(n) {
    count = n;
    badge.textContent = n;
    badge.hidden = n === 0;

    cart.setAttribute(
      "aria-label",
      "Cart, " + n + (n === 1 ? " item" : " items")
    );
  }

  // Products
  var grid = $("grid");

  S.products.forEach(function (p) {
    var a = document.createElement("a");
    a.className = "item";
    a.href = "#products";

    var pic = document.createElement("div");
    pic.className = "pic";

    if (p.image) {
      pic.className += " own";
      pic.style.backgroundImage = 'url("' + p.image + '")';
    } else if (S.hero.image) {
      pic.style.backgroundImage = 'url("' + S.hero.image + '")';
      pic.style.backgroundSize = p.size + " auto";
      pic.style.backgroundPosition = p.pos;
    }

    var b = document.createElement("b");
    b.textContent = p.name;

    var s = document.createElement("span");
    s.textContent = p.price;

    a.appendChild(pic);
    a.appendChild(b);
    a.appendChild(s);

    a.addEventListener("click", function (e) {
      e.preventDefault();
      setCount(count + 1);
    });

    grid.appendChild(a);
  });

  // Customer reviews
  var reviewGrid = $("reviewsGrid");
  var reviewData = S.reviews;

  if (reviewData && reviewGrid) {
    // Set the two Google review actions
    $("readReviewsLink").href = reviewData.readLink;
    $("writeReviewLink").href = reviewData.writeLink;

    reviewData.items.forEach(function (review) {
      var card = document.createElement("article");
      card.className = "review-card";

      var top = document.createElement("div");
      top.className = "review-card-top";

      var stars = document.createElement("div");
      stars.className = "review-card-stars";
      stars.textContent = "★★★★★";
      stars.setAttribute("aria-label", review.rating + " out of 5 stars");

      var google = document.createElement("span");
      google.className = "google-label";
      google.textContent = "Google";

      top.appendChild(stars);
      top.appendChild(google);

      var reviewText = document.createElement("p");
      reviewText.className = "review-text";
      reviewText.textContent = review.text;

      var reviewer = document.createElement("p");
      reviewer.className = "reviewer-name";
      reviewer.textContent = review.name;

      var response = document.createElement("div");
      response.className = "owner-response";

      var responseLabel = document.createElement("span");
      responseLabel.className = "response-label";
      responseLabel.textContent = "Response from Luxsignature";

      var responseText = document.createElement("p");
      responseText.textContent = review.response;

      response.appendChild(responseLabel);
      response.appendChild(responseText);

      card.appendChild(top);
      card.appendChild(reviewText);
      card.appendChild(reviewer);
      card.appendChild(response);

      reviewGrid.appendChild(card);
    });
  }
})();