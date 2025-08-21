import { delay, http, HttpResponse } from 'msw'

import todaysPlan from './data/todays-plan-with-recipes.json'

const getMealForTodayWithRecipes = http.get(
    '/api/meal-plan/today',
    async () => {
        await delay()
        const today = new Date()
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0') // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0')
        return HttpResponse.json({
            ...todaysPlan,
            date: `${year}-${month}-${day}`,
        })
    }
)

export default [getMealForTodayWithRecipes]
