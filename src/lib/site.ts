



export const site = {
  name: "Sabai Dee Thaimassage",
  street: "Bernstrasse 15",
  city: "3110 Münsingen",
  phone: "+41 77 482 89 92",
  phoneHref: "tel:+41774828992",
  whatsapp: "whatsapp://send?phone=41774828992",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bernstrasse+15+3110+M%C3%BCnsingen",
};

export function openWhatsApp(e: { preventDefault: () => void }) {
  e.preventDefault();
  window.location.href = site.whatsapp;
}



export const prices = [
  { duration: "30 Minuten", price: "CHF 60.00" },
  { duration: "60 Minuten", price: "CHF 100.00" },
  { duration: "90 Minuten", price: "CHF 140.00" },
  { duration: "120 Minuten", price: "CHF 170.00" },
];

export const treatments = [
  {
    name: "Traditionelle Thai-Massage",
    text: "Klassische Nuad-Thai-Technik mit Druckpunkten und sanften Dehnungen – löst Blockaden und bringt Beweglichkeit zurück.",
  },
  {
    name: "Thai-Ölmassage",
    text: "Fliessende Streichungen mit warmem Öl für tiefe Entspannung von Kopf bis Fuss.",
  },
  {
    name: "Rücken-, Nacken- & Schultermassage",
    text: "Gezielte Arbeit an den typischen Verspannungen von Büroalltag und Bildschirmarbeit.",
  },
  {
    name: "Fussreflexzonenmassage",
    text: "Druckpunkte an den Füssen, die den ganzen Körper ansprechen und beleben.",
  },
  {
    name: "Hot-Stone-Massage",
    text: "Warme Basaltsteine lösen Muskelspannung und wärmen den Körper von innen.",
  },
  {
    name: "Aroma-Ölmassage",
    text: "Sanfte Massage mit duftenden Ölen – ideal, wenn Sie zur Ruhe kommen möchten.",
  },
];

export const hours = [
  { day: "Montag", time: "10:00 – 20:00" },
  { day: "Dienstag", time: "10:00 – 20:00" },
  { day: "Mittwoch", time: "10:00 – 20:00" },
  { day: "Donnerstag", time: "10:00 – 20:00" },
  { day: "Freitag", time: "Geschlossen", closed: true },
  { day: "Samstag", time: "Geschlossen", closed: true },
  { day: "Sonntag", time: "10:00 – 20:00" },
];

export const images = {
  hero: "/media/image.png",
  entrance: "/media/image-2.png",
  lounge: "/media/image-3.png",
  room: "/media/image-4.png",
  reception: "/media/image-5.png",
  buddha: "/media/buddha.jpg",
  candles: "/media/massage-candles.jpg",
  footMassage: "/media/foot-massage.jpg",
  backMassage: "/media/back-massage.jpg",
};

export const logoSrc = "/media/logo.webp";

export const videos = {
  hero: "/media/user-hero-video.mp4",
  contact:
    "https://sabaidee.lovable.app/__l5e/assets-v1/ca0ca96d-80ef-42cf-8c48-b3aab69a796f/sabaidee-video.mp4",
};

export const gallery = [
  { src: images.entrance, alt: "Eingangsbereich mit goldener Buddha-Statue" },
  { src: images.buddha, alt: "Goldene Buddha-Statue mit Kerzenlicht im Studio" },
  { src: images.reception, alt: "Empfangs- und Wartebereich mit Sofa" },
  { src: images.room, alt: "Behandlungsraum mit traditioneller Thai-Matte" },
  { src: images.candles, alt: "Handtücher, Kerzen und Orchidee im Studio" },
  { src: images.lounge, alt: "Ruhebereich mit Vorhang und Sitzecke" },
  { src: images.hero, alt: "Inhaberin im Behandlungsraum von Sabai Dee" },
];
