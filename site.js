// Everything you can change without touching the layout.
// To change an image: upload a new file into the assets folder with the same name.
window.SITE = {
  announcement: { text: "Up to 50% off selected gifts", linkText: "Shop the sale", link: "#products" },

  brand: {
    name: "LUXSIGNATURE",
    sub: "Keepsakes",
    mark: "LUX",                 // shown in the square if there is no logo file
    logo: "assets/logo.png"      // upload your logo with this name to replace the square
  },

  shopNow: { text: "Shop now", link: "#products" },

  menu: [
    { text: "Shop all", link: "#products" },
    { text: "The sale", link: "#products" },
    { text: "About Luxsignature", link: "#top" },
    { text: "Contact", link: "#top" }
  ],

  hero: {
    image: "IMG_8727.jpeg",           // upload a photo with this name to change the hero
    heading: "Thoughtful gifts. Delivered beautifully with intentionality.",
    text: "Discover something special for someone you love.",
    button: "Explore gifts",
    link: "#products"
  },

  footer: "Luxsignature Keepsakes Hub",

  // image: path to a product photo, for example "assets/products/love-box.jpg".
  // Leave image empty to use a crop of the hero photo until you upload one.
  products: [
    { name: "Love in Every Word box",    price: "\u20A635,000", image: "", size: "100%", pos: "50% 60%" },
    { name: "Wax-sealed letter and key", price: "\u20A618,000", image: "", size: "260%", pos: "70% 66%" },
    { name: "Keepsake card set",         price: "\u20A612,000", image: "", size: "280%", pos: "22% 68%" },
    { name: "Gift box with twine",       price: "\u20A628,000", image: "", size: "170%", pos: "85% 90%" }
  ]
};
