export interface Slide {
    id: number;
    label: string;
    img: string;
    top: string;
    left: string;
    width: string;
    rotate: number;
    z: number;
}

export interface InfoCard {
    id: number;
    title: string;
    body: string;
    cta: string;
}

export interface Thumbnail {
    id: number;
    img: string;
}

export interface Project {
    id: string;
    name: string;
    floor: string;
    status: string;
    type: string;
    img: string;
}

export interface Artist {
    name: string;
    role: string;
    bio: string;
    collections: string;
    since: string;
    img: string;
}
