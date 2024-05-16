export interface Section {
    directory: string;
    sections?: (string)[];
}

export interface Directory {
    directory: string;
    sections: Section[];
}

export type Directories = Directory[];
