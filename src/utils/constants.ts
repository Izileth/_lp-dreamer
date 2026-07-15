import type { Slide, InfoCard, Thumbnail, Project, Artist } from "../types";

// NFT Assets Imports
import token1 from "../assets/nfts/Token.jpg";
import token2 from "../assets/nfts/Token2.jpg";
import token3 from "../assets/nfts/Token3.jpg";
import token4 from "../assets/nfts/Token4.jpg";
import token5 from "../assets/nfts/Token5.jpg";
import token6 from "../assets/nfts/Token6.jpg";
import token7 from "../assets/nfts/Token7.jpg";
import token10 from "../assets/nfts/Token10.jpg";

export const SLIDES: Slide[] = [
    { id: 1, label: "01", img: token1, top: '10%', left: '5%', width: '35%', rotate: -5, z: 10 },
    { id: 2, label: "02", img: token2, top: '45%', left: '12%', width: '30%', rotate: 8, z: 20 },
    { id: 3, label: "03", img: token3, top: '5%', left: '42%', width: '38%', rotate: -2, z: 5 },
    { id: 4, label: "04", img: token4, top: '55%', left: '45%', width: '32%', rotate: 12, z: 15 },
    { id: 5, label: "05", img: token5, top: '25%', left: '72%', width: '28%', rotate: -10, z: 12 },
    { id: 6, label: "06", img: token6, top: '68%', left: '8%', width: '24%', rotate: 5, z: 18 },
    { id: 7, label: "07", img: token7, top: '78%', left: '65%', width: '35%', rotate: -3, z: 8 },
    { id: 8, label: "08", img: token10, top: '18%', left: '30%', width: '32%', rotate: 15, z: 22 },
];

export const INFO_CARDS: InfoCard[] = [
    {
        id: 1,
        title: "NFT EXPLAINED",
        body: "NFTs are designed to give you something that can't be copied...",
        cta: "READ MORE",
    },
    {
        id: 2,
        title: "BLOCK CHAIN",
        body: "NFTs involving digital art generally do not store the file on the blockchain due to its size...",
        cta: "READ MORE",
    },
    {
        id: 3,
        title: "THE ART BEHIND IT",
        body: "Previously, any copy of a digital artwork would be just as valuable – or valueless – as the next. In theory, NFTs have changed this",
        cta: "READ MORE",
    },
];

export const THUMBNAILS: Thumbnail[] = [
    { id: 1, img: token6 },
    { id: 2, img: token7 },
];

export const PROJECTS: Project[] = [
    { id: "01", name: "GENESIS VOID", floor: "2.4 ETH", status: "MINTING", type: "3D GENERATIVE", img: token1 },
    { id: "02", name: "CHRONO SHIFT", floor: "1.8 ETH", status: "SOLD OUT", type: "MOTION ART", img: token2 },
    { id: "03", name: "NEO DREAMS", floor: "3.1 ETH", status: "UPCOMING", type: "AI COLLABORATION", img: token3 },
    { id: "04", name: "ETHER SOUL", floor: "0.9 ETH", status: "MINTING", type: "DIGITAL SCULPTURE", img: token4 },
];

export const ARTISTS: Artist[] = [
    { 
      name: "YUGAL ODHRANI", 
      role: "LEAD ARCHITECT", 
      bio: "Visionary creator specializing in generative systems and brutalist digital structures.",
      collections: "12",
      since: "2021",
      img: token5
    },
    { 
      name: "DREAMER LABS", 
      role: "COLLECTIVE", 
      bio: "A decentralized group of artists pushing the boundaries of Web3 immersive art.",
      collections: "05",
      since: "2022",
      img: token6
    },
    { 
      name: "X-CELL", 
      role: "MOTION DESIGNER", 
      bio: "Exploring the intersection of fluid dynamics and blockchain temporality.",
      collections: "08",
      since: "2020",
      img: token7
    }
];
