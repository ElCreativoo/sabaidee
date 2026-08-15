import heroImg from "@/assets/image.png.asset.json";
import entranceImg from "@/assets/image-2.png.asset.json";
import loungeImg from "@/assets/image-3.png.asset.json";
import roomImg from "@/assets/image-4.png.asset.json";
import receptionImg from "@/assets/image-5.png.asset.json";
import buddhaImg from "@/assets/buddha.jpg.asset.json";

export const site = {
  name: "Sabai Dee Thaimassage",
  street: "Bernstrasse 15",
  city: "3110 Münsingen",
  phone: "+41 77 482 89 92",
  phoneHref: "tel:+41774828992",
  whatsapp: "https://wa.me/41774828992",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bernstrasse+15+3110+M%C3%BCnsingen",
};

export const prices = [
  { duration: "60 Minuten", price: "CHF 100.00" },
  { duration: "90 Minuten", price: "CHF 130.00" },
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
  { day: "Samstag", time: "10:00 – 20:00" },
  { day: "Sonntag", time: "10:00 – 20:00" },
];

export const images = {
  hero: heroImg.url,
  entrance: entranceImg.url,
  lounge: loungeImg.url,
  room: roomImg.url,
  reception: receptionImg.url,
  buddha: buddhaImg.url,
};

export const gallery = [
  { src: images.buddha, alt: "Goldene Buddha-Statue mit Kerzenlicht im Studio" },
  { src: images.entrance, alt: "Eingangsbereich mit goldener Buddha-Statue" },
  { src: images.reception, alt: "Empfangs- und Wartebereich mit Sofa" },
  { src: images.room, alt: "Behandlungsraum mit traditioneller Thai-Matte" },
  { src: images.lounge, alt: "Ruhebereich mit Vorhang und Sitzecke" },
  { src: images.hero, alt: "Inhaberin im Behandlungsraum von Sabai Dee" },
];
