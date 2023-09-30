import { Origin } from "./origin";

export interface CharacterElement{
    name : string;
    gender : string;
    created_at : string;
    image : string;
    status : string;
    species : string;
    id : number;
    origin : Origin;
    selected : boolean;
 }