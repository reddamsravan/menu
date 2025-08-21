import { A } from '@solidjs/router'

export const Navigation = () => {
    return (
        <nav>
            <span>Main Menu</span>
            <ul>
                <li>
                    <A href="/">Home</A>
                </li>
                <li>
                    <A href="/planner">Planner</A>
                </li>
                <li>
                    <A href="/recipes">Recipes</A>
                </li>
                <li>
                    <A href="/shopping-list">Shopping List</A>
                </li>
            </ul>
        </nav>
    )
}
