import type { Ingredient } from './ingredient'

export interface Recipe {
    description: string
    id: string
    ingredients: Ingredient[]
    instructions: string[]
    name: string
    tags: string[]
}
