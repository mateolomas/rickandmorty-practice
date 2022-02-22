export interface Characters {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface SingleCharacter {
    name:       string;
    status:     string;
    species:    string;
    image:     string;
    origin:     OriginLocation;
    location:   OriginLocation;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   string;
    origin:   OriginLocation;
    location: OriginLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}


export interface OriginLocation {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
