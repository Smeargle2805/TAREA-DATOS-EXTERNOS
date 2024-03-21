import { IItemCategoria } from "./IItemCategoria";
import { IItemSprites } from "./IItemSprites";

export interface IItemDetalle{
    id: number
    name: string
    category: IItemCategoria
    sprites: IItemSprites
}