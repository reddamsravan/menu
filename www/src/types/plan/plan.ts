export interface MealPlan {
    date: string
    meals: {
        meal: string
        recipes: {
            id: string
            name: string
        }[]
    }[]
}
