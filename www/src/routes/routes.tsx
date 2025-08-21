import { Route, Router } from '@solidjs/router'

import { App } from '@/app/app'
import { AppLayout } from '@/layouts/app-layout'

import { Home } from './home/home'
import { PageNotFound } from './page-not-found/page-not-found'
import { Planner } from './planner/planner'
import { Recipe } from './recipes/recipe'
import { Recipes } from './recipes/recipes'
import { ShoppingList } from './shopping-list/shopping-list'

export const Routes = () => {
    return (
        <Router root={App}>
            <Route component={AppLayout} path="/">
                <Route component={Home} path="/" />
                <Route component={Planner} path="/planner" />
                <Route path="/recipes">
                    <Route component={Recipes} path="/" />
                    <Route component={Recipe} path="/:id" />
                </Route>
                <Route component={ShoppingList} path="/shopping-list" />
            </Route>
            <Route component={PageNotFound} path="*" />
        </Router>
    )
}
