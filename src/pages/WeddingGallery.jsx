import { Link } from 'react-router-dom'
import { useLayoutEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import './Gallery.css'
const categories = [
  "All",
  "Wedding",
  "Engagement",
  "Mehendi",
  "Haldi",
  "Carnival",
  "Sangeet - Garba",
  "Kanku Pagla",
  "Baby Shower",
  "Balloon Gate Decoration",
  "Birthday Decoration",
  "Anniversary & Romantic Decorations",
  "Panchmasi Decoration",
  "Chatthi Decoration",
  "First Night Room Decoration",
  "Photography Frame",
  "Vanarasam",
  "DJ",
  "Ganpati-Decoration",
  "Baby-Welcome-Decoration"
];

const galleryImages = [


  // ================= Engagement =================
  { id: 1, category: "Engagement", src: "/public/images/Engagement/better together 3.jpg", alt: "Engagement 1" },
  { id: 2, category: "Engagement", src: "/public/images/Engagement/Engagement.jpg", alt: "Engagement 6" },
  { id: 3, category: "Engagement", src: "/public/images/Engagement/better together 6.jpg", alt: "Engagement 2" },
  { id: 4, category: "Engagement", src: "/public/images/Engagement/better.jpeg", alt: "Engagement 7" },
  { id: 5, category: "Engagement", src: "/public/images/Engagement/Engagement 5.jpg", alt: "Engagement 5" },
  { id: 6, category: "Engagement", src: "/public/images/Engagement/better together 7.jpg", alt: "Engagement 3" },
  { id: 7, category: "Engagement", src: "/public/images/Engagement/better together.jpg", alt: "Engagement 4" },
  { id: 8, category: "Engagement", src: "/public/images/Engagement/Engagement decoration.jpg", alt: "Engagement 5" },
  { id: 9, category: "Engagement", src: "/public/images/Engagement/Engagement.jpg", alt: "Engagement 5" },
  // ================= Kanku Pagla =================
  { id: 10, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/11kanku pagla.png", alt: "Kanku Pagla 1" },
  { id: 11, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/flower decoration.jpg", alt: "Kanku Pagla 2" },
  { id: 12, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla  12.png", alt: "Kanku Pagla 4" },
  { id: 13, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla  7.jpg", alt: "Kanku Pagla 5" },
  { id: 14, category: "KankuPagla", src: "/public/images/Kanku Pagla/kankupagla 2.jpg", alt: "KankuPagla 5" },
  { id: 15, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla  decoration 4.jpg", alt: "Kanku Pagla 5" },
  { id: 16, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/home decoration.jpg", alt: "Kanku Pagla 3" },
  { id: 17, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/name kanku pagla.jpg", alt: "Kanku Pagla 5" },
  { id: 18, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla  decoration.jpg", alt: "Kanku Pagla 5" },
  { id: 19, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla 10.png", alt: "Kanku Pagla 5" },
  { id: 20, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla 1.png", alt: "Kanku Pagla 5" },
  { id: 21, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/kanku pagla 3.png", alt: "KankuPagla 5" },
  { id: 22, category: "Kanku Pagla", src: "/public/images/Kanku Pagla/home decoration.jpg", alt: "KankuPagla 5" },
  // ================= Baby Shower =================
  { id: 23, category: "Baby Shower", src: "/public/images/Baby Shower/11Baby Shower.jpg", alt: "Baby Shower 1" },
  { id: 24, category: "Baby Shower", src: "/public/images/Baby Shower/baby panch.jpg", alt: "Baby Shower 2" },
  { id: 25, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 12.jpg", alt: "Baby Shower 3" },
  { id: 26, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 13.jpg", alt: "Baby Shower 4" },
  { id: 27, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 16.jpg", alt: "Baby Shower 7" },
  { id: 28, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 17.jpg", alt: "Baby Shower 8" },
  { id: 29, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 18.jpg", alt: "Baby Shower 9" },
  { id: 30, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 19.jpg", alt: "Baby Shower 10" },
  { id: 31, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 2.jpg", alt: "Baby Shower 11" },
  { id: 32, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 20.jpg", alt: "Baby shower 12" },
  { id: 33, category: "Baby Shower", src: "/public/images/Baby Shower/shrimat.jpg", alt: "Baby Shower 12" },
  { id: 34, category: "Baby Shower", src: "/public/images/Baby Shower/shrimant 10.jpg", alt: "Baby Shower 21" },
  { id: 35, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 22.jpg", alt: "Baby Shower 13" },
  { id: 36, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 27.jpg", alt: "Baby Shower 15" },
  { id: 37, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 28.jpg", alt: "Baby Shower 16" },
  { id: 38, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower.jpg", alt: "Baby Shower 20" },
  { id: 39, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 15.jpg", alt: "Baby Shower 6" },
  { id: 40, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower.jpg", alt: "Baby shower 14" },
  { id: 41, category: "Baby Shower", src: "/public/images/Baby shower/Baby shower.png", alt: "Baby shower 17" },
  { id: 42, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 9.jpg", alt: "Baby Shower 19" },
  { id: 43, category: "Baby Shower", src: "/public/images/Baby Shower/shrimant.jpg", alt: "Baby Shower 22" },
  { id: 44, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 14.jpg", alt: "Baby Shower 5" },
  { id: 45, category: "Baby Shower", src: "/public/images/Baby Shower/Baby Shower 8.jpg", alt: "Baby Shower 18" },
  // ================= Wedding =================
  { id: 46, category: "Wedding", src: "/public/images/Wedding/12.png", alt: "Wedding 1" },
  { id: 47, category: "Wedding", src: "/public/images/Wedding/14.png", alt: "Wedding 2" },
  { id: 48, category: "Wedding", src: "/public/images/Wedding/couple entry.png", alt: "Wedding 3" },
  { id: 49, category: "Wedding", src: "/public/images/Wedding/garba entry.jpeg", alt: "Wedding 4" },
  { id: 50, category: "Wedding", src: "/public/images/Wedding/garba.jpeg", alt: "Wedding 5" },
  { id: 51, category: "Wedding", src: "/public/images/Wedding/kankotri lekhan 1.jpeg", alt: "Wedding 6" },
  { id: 52, category: "Wedding", src: "/public/images/Wedding/kankotri lekhan.jpeg", alt: "Wedding 7" },
  { id: 53, category: "Wedding", src: "/public/images/Wedding/sangeet entry.jpeg", alt: "Wedding 8" },
  { id: 54, category: "Wedding", src: "/public/images/Wedding/varmala.jpeg", alt: "Wedding 10" },
  { id: 55, category: "Wedding", src: "/public/images/Wedding/wedding.png", alt: "Wedding 5" },
  { id: 56, category: "Wedding", src: "/public/images/Wedding/varmala.png", alt: "Wedding 5" },
  { id: 57, category: "Wedding", src: "/public/images/Wedding/wedding dance.png", alt: "Wedding 5" },
  { id: 58, category: "Wedding", src: "/public/images/Wedding/wedding entry.png", alt: "Wedding 5" },
  { id: 59, category: "Wedding", src: "/public/images/Wedding/varghodo.png", alt: "Wedding 5" },
  // ================= Haldi =================
  { id: 60, category: "Haldi", src: "/public/images/Haldi/haldi 1.png", alt: "Haldi 1" },
  { id: 61, category: "Haldi", src: "/public/images/Haldi/haldi 2.png", alt: "Haldi 2" },
  { id: 62, category: "Haldi", src: "/public/images/Haldi/haldi.jpg", alt: "Haldi 3" },
  // ================= Mehendi =================
  { id: 63, category: "Mehendi", src: "/public/images/Mehendi/mehendi 3.jpg", alt: "Mehendi 1" },
  { id: 64, category: "Mehendi", src: "/public/images/Mehendi/mehendi 4.jpg", alt: "Mehendi 2" },
  { id: 65, category: "Mehendi", src: "/public/images/Mehendi/mehendi decoration.jpg", alt: "Mehendi 3" },
  { id: 66, category: "Mehendi", src: "/public/images/Mehendi/Mehendi.jpg", alt: "Mehendi 4" },

  // ================= Carnival =================
  { id: 67, category: "Carnival", src: "/public/images/Carnival/baloon carnival.png", alt: "Carnival 1" },
  { id: 68, category: "Carnival", src: "/public/images/Carnival/carnival  2.jpg", alt: "Carnival 2" },
  { id: 69, category: "Carnival", src: "/public/images/Carnival/carnival green.png", alt: "Carnival 3" },
  { id: 70, category: "Carnival", src: "/public/images/Carnival/carnival.png", alt: "Carnival 3" },
  { id: 71, category: "Carnival", src: "/public/images/Carnival/standy.png", alt: "Carnival 3" },

  // ================= Sangeet - Garba =================
  { id: 72, category: "Sangeet - Garba", src: "/public/images/Sangeet - Garba/garba.png", alt: "Sangeet 1" },
  { id: 73, category: "Sangeet - Garba", src: "/public/images/Sangeet - Garba/sangeet - garba 1.png", alt: "Sangeet 2" },
  { id: 74, category: "Sangeet - Garba", src: "/public/images/Sangeet - Garba/sangeet - garba.png", alt: "Sangeet 3" },
  { id: 75, category: "Sangeet - Garba", src: "/public/images/Sangeet - Garba/sangeet.png", alt: "Sangeet 4" },
  // આગળની categories Part 2 માં...

  // ================= Balloon Gate Decoration =================
  { id: 76, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/balloon gate 2.jpg", alt: "Balloon Gate 1" },
  { id: 77, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/Balloon Gate 4.jpg", alt: "Balloon Gate 2" },
  { id: 78, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/Balloon Gate Decoration 2.jpg", alt: "Balloon Gate 3" },
  { id: 79, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/Balloon Gate Decoration 5.jpg", alt: "Balloon Gate 4" },
  { id: 80, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/Balloon Gate Decoration.jpg", alt: "Balloon Gate 5" },
  { id: 81, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/Balloon Gate.jpg", alt: "Balloon Gate 5" },
  { id: 82, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/baloo gate round.jpg", alt: "Balloon Gate 5" },
  { id: 83, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/baloon gate round.jpg", alt: "Balloon Gate 5" },
  { id: 84, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/black white gate.jpg", alt: "Balloon Gate 5" },
  { id: 85, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/black white.jpg", alt: "Balloon Gate 5" },
  { id: 86, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/fugga gate.jpg", alt: "Balloon Gate 5" },
  { id: 87, category: "Balloon/Gate/white red fugga gate.jpg" },
  { id: 88, category: "Balloon Gate Decoration", src: "/public/images/Balloon Gate Decoration/white black baloon gate.jpg", alt: "Balloon Gate 5" },
  { id: 89, category: "Balloon Gate Decoration", src: "/public/images/Balloon/Gate/white red fugga gate.jpg", alt: "Balloon/Gate/white red fugga gate.jpg" },

  // ================= Birthday Decoration =================
  { id: 90, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday 11.jpg", alt: "Birthday 1" },
  { id: 91, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday 12.jpg", alt: "Birthday 2" },
  { id: 92, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday celebration 15.jpg", alt: "Birthday 3" },
  { id: 93, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday celebration 17.jpg", alt: "Birthday 4" },
  { id: 94, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday celebration 19.png", alt: "Birthday 5" },
  { id: 95, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday celebration.jpg", alt: "Birthday 5" },
  { id: 96, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 1.jpg", alt: "Birthday 5" },
  { id: 97, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 10.jpg", alt: "Birthday 5" },
  { id: 98, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 6.jpg", alt: "Birthday 5" },
  { id: 99, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 7.jpg", alt: "Birthday 5" },
  { id: 100, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 8.jpg", alt: "Birthday 5" },
  { id: 101, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration 9.jpg", alt: "Birthday 5" },
  { id: 102, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday Decoration balloon.jpg", alt: "Birthday 5" },
  { id: 103, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/Birthday.jpg", alt: "Birthday 5" },
  { id: 104, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/celebration.jpg", alt: "Birthday 5" },
  { id: 105, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/first Birthday.jpg", alt: "Birthday 5" },
  { id: 106, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/janma din.jpg", alt: "Birthday 5" },
  { id: 107, category: "Birthday Decoration", src: "/public/images/Birthday Decoration/mubarak birthday.jpg", alt: "Birthday 5" },

  // ================= Anniversary =================
  { id: 108, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 1.jpg", alt: "Anniversary 1" },
  { id: 109, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 2.jpg", alt: "Anniversary 1" },
  { id: 110, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 3.jpg", alt: "Anniversary 1" },
  { id: 111, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 4.png", alt: "Anniversary 1" },
  { id: 112, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 5.png", alt: "Anniversary 1" },
  { id: 113, category: "Anniversary & Romantic Decorations", src: "/public/images/Anniversary & Romantic Decorations/Anniversary & Romantic Decorations 6.png", alt: "Anniversary 1" },

  // ================= Panchmasi Decoration =================
  { id: 114, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/5.jpg", alt: "Panchmasi 1" },
  { id: 115, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/6.jpg", alt: "Panchmasi 2" },
  { id: 116, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/panchmasi decoration 3.jpg", alt: "Panchmasi 3" },
  { id: 117, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/panchmasi decoration 4.jpg", alt: "Panchmasi 4" },
  { id: 118, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/panchmasi decoration.jpg", alt: "Panchmasi 5" },
  { id: 119, category: "Panchmasi Decoration", src: "/public/images/Panchmasi Decoration/panchmasi.jpg", alt: "Panchmasi 5" },

  // ================= Chatthi Decoration =================
  { id: 120, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi  7.png", alt: "Chatthi 1" },
  { id: 121, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi 2.png", alt: "Chatthi 2" },
  { id: 122, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi 3.png", alt: "Chatthi 3" },
  { id: 123, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi Decoration 1.png", alt: "Chatthi 4" },
  { id: 124, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi Decoration 4.png", alt: "Chatthi 5" },
  { id: 125, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi Decoration 5.png", alt: "Chatthi 5" },
  { id: 126, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi Decoration 8.png", alt: "Chatthi 5" },
  { id: 127, category: "Chatthi Decoration", src: "/public/images/Chatthi Decoration/Chatthi Decoration.png", alt: "Chatthi 5" },
  // ================= First Night Room Decoration =================
  { id: 128, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night 1.jpg", alt: "First Night 1" },
  { id: 129, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night 7.jpg", alt: "First Night 2" },
  { id: 130, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night room decoration 2.jpg", alt: "First Night 3" },
  { id: 131, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night room decoration 5.jpg", alt: "First Night 4" },
  { id: 132, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night room decoration.jpg", alt: "First Night 5" },
  { id: 133, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night room.jpg", alt: "First Night 5" },
  { id: 134, category: "First Night Room Decoration", src: "/public/images/First Night Room Decoration/first night.jpg", alt: "First Night 5" },

  // ================= Photography Frame =================
  { id: 135, category: "Photography Frame", src: "/public/images/Photography Frame/images (1).png", alt: "Photography Frame 1" },
  { id: 136, category: "Photography Frame", src: "/public/images/Photography Frame/images (2).png", alt: "Photography Frame 2" },
  { id: 137, category: "Photography Frame", src: "/public/images/Photography Frame/images (3).png", alt: "Photography Frame 3" },
  { id: 138, category: "Photography Frame", src: "/public/images/Photography Frame/images.png", alt: "Photography Frame 4" },

  // ================= Vanarasam =================
  { id: 139, category: "Vanarasam", src: "/public/images/Vanarasam/vanarasam decoration (2).png", alt: "Vanarasam 1" },
  { id: 140, category: "Vanarasam", src: "/public/images/Vanarasam/vanarasam decoration 2.png", alt: "Vanarasam 4" },
  { id: 141, category: "Vanarasam", src: "/public/images/Vanarasam/Vanarasam (2).png", alt: "Vanarasam 3" },
  { id: 142, category: "Vanarasam", src: "/public/images/Vanarasam/vanarasam decoration 1.png", alt: "Vanarasam 2" },
  { id: 143, category: "Vanarasam", src: "/public/images/Vanarasam/vanarasam.png", alt: "Vanarasam 5" },
  { id: 144, category: "Vanarasam", src: "/public/images/Vanarasam/vanarasam decoration.png", alt: "Vanarasam 5" },

  // ================= DJ =================
  { id: 145, category: "DJ", src: "/public/images/DJ/dj garba.png", alt: "DJ 1" },
  { id: 146, category: "DJ", src: "/public/images/DJ/dj sound.jpeg", alt: "DJ 2" },
  { id: 147, category: "DJ", src: "/public/images/DJ/dj.png", alt: "DJ 3" },
  { id: 148, category: "DJ", src: "/public/images/DJ/mp.jpg", alt: "DJ 4" },
  { id: 149, category: "DJ", src: "/public/images/DJ/sound.png", alt: "DJ 5" },
  { id: 150, category: "DJ", src: "/public/images/DJ/dj night.png", alt: "DJ 5" },

  // -------------------Baby-Welcome-Decoration-----------------------

  { id: 151, category: "Baby-Welcome-Decoration", src: "/public/images/baby welcome/baby welcome.webp", alt: "Baby-Welcome-Decoration 1" },
  { id: 152, category: "Baby-Welcome-Decoration", src: "/public/images/baby welcome/boy welcome.webp", alt: "Baby-Welcome-Decoration 2" },
  { id: 153, category: "Baby-Welcome-Decoration", src: "/public/images/baby welcome/welcome baby.webp", alt: "Baby-Welcome-Decoration 3" },

  // -------------------Ganpati-Decoration-----------------------
  { id: 154, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/big decoration ganapti.webp", alt: "Ganpati-Decoration 1" },
  { id: 155, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/blue white flower.webp", alt: "Ganpati-Decoration 1" },
  { id: 156, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/flower color.webp", alt: "Ganpati-Decoration 1" },
  { id: 157, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/flower pink.webp", alt: "Ganpati-Decoration 1" },
  { id: 158, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/ganapti pink flower.webp", alt: "Ganpati-Decoration 1" },
  { id: 159, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/ganpati decoration.webp", alt: "Ganpati-Decoration 1" },
  { id: 160, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/ganpati.webp", alt: "Ganpati-Decoration 1" },
  { id: 161, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/light decoration.webp", alt: "Ganpati-Decoration 1" },
  { id: 162, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/light pink white.webp", alt: "Ganpati-Decoration 1" },
  { id: 163, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/orange white.webp", alt: "Ganpati-Decoration 1" },
  { id: 164, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/pink flower white.webp", alt: "Ganpati-Decoration 1" },
  { id: 165, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/pink flower.webp", alt: "Ganpati-Decoration 1" },
  { id: 166, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/pink whiite flower.webp", alt: "Ganpati-Decoration 1" },
  { id: 167, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/round decoration.webp", alt: "Ganpati-Decoration 1" },
  { id: 168, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/round flower decoration.webp", alt: "Ganpati-Decoration 1" },
  { id: 169, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/simple decoration.webp", alt: "Ganpati-Decoration 1" },
  { id: 170, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/white pink.webp", alt: "Ganpati-Decoration 1" },
  { id: 171, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/yellow decoration flower.webp", alt: "Ganpati-Decoration 1" },
  { id: 172, category: "Ganpati-Decoration", src: "/public/images/Ganpati Decoration/yellow flower.webp", alt: "Ganpati-Decoration 1" },
];
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  768: 2,
  500: 1,
};

function WeddingGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const gallerySectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
        (item) => item.category === activeCategory
      );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      /* ================================
         1. TITLE PREMIUM ENTRANCE
      ================================= */

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.75,
          rotateX: 70,
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.4,
          ease: "back.out(1.5)",
        }
      );

      /* ================================
         2. CATEGORY BUTTONS
      ================================= */

      const tabs =
        tabsRef.current?.querySelectorAll(".gallery-tab");

      if (tabs) {
        tl.fromTo(
          tabs,
          {
            opacity: 0,
            y: 50,
            scale: 0.65,
            rotateY: 35,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: "back.out(1.8)",
          },
          "-=0.8"
        );
      }

      /* ================================
         3. GALLERY IMAGES
      ================================= */

      const items =
        galleryRef.current?.querySelectorAll(".gallery-item");

      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              rotateY: 180,
              scale: 0.75,
              transformPerspective: 1200,
              transformOrigin: "center center",
            },
            {
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1.1,
              ease: "back.out(1.5)",

              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
      /* ================================
         4. CTA ENTRANCE
      ================================= */

      tl.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 90,
          scale: 0.8,
          rotateX: 50,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      /* ================================
         5. SCROLL IMAGE ANIMATION
      ================================= */



      ScrollTrigger.refresh();
    }, gallerySectionRef);

    return () => ctx.revert();
  }, [activeCategory]);
  return (
    <main>

      <section ref={gallerySectionRef} className="gallery-section section-pad">
        <div className="container">
          <div ref={titleRef} className="section-title">
            <p className="section-tag">Our Work</p>
            <h2>Events Gallery</h2>
          </div>
          <div ref={tabsRef} className="gallery-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`gallery-tab ${activeCategory === category ? "active" : ""
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div ref={galleryRef}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="gallery-grid"
              columnClassName="gallery-column"
            >
              {filteredImages.map((img) => (
                <div className="gallery-item" key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <div className="gallery-buttons">

                      <Link
                        to="/contact-us"
                        className="gallery-btn"
                      >
                        Book Order Now
                      </Link>

                      <a
                        href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
                        target="_blank"
                        rel="noreferrer"
                        className="gallery-btn instagram-btn"
                      >
                        Instagram
                      </a>

                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
          <div ref={ctaRef} className="gallery-cta">
            <p>Planning your dream wedding? Let's make it unforgettable!</p>
            <a href="https://wa.me/917572883241" target="_blank" rel="noreferrer" className="btn-primary">
              <i className="fab fa-whatsapp"></i> Lets Discuss
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
// -----===================/=============
export default WeddingGallery
