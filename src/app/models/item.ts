import { ItemType } from "./itemType";

export class Item{
    itemId!:number;
    itemName!:string;
    itemDescription!:string;
    itemTypeId!:number;
    itemPrice!:number;
    itemRarity!:number;
    basePhysical!:number;
    baseMagical!:number;
    itemType!:ItemType;
    
}