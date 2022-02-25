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
    id:          number;
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

export interface ResultLocation {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}

export interface resultEpisode {
    id:         number;
    name:       string;
    air_date?:   string;
    episode:    string;
    characters?: string[];
    url:        string;
    created:    Date;
}

export interface AllInfo {
    character : Result;
    location: ResultLocation;
    episode:  resultEpisode;
    
}

export interface dataListInterface {
    dataList: any[];
    loading: boolean;
    error: string;
}

