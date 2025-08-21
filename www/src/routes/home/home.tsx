import { For } from 'solid-js'

export const Home = () => {
    const todaysMenu = [
        { meal: 'Breakfast', recipe: 'Pancakes' },
        { meal: 'Lunch', recipe: 'Caesar Salad' },
        { meal: 'Dinner', recipe: 'Spaghetti Bolognese' },
    ]
    return (
        <>
            <h1>Plan for Today</h1>
            <section>
                <h2>Menu</h2>
                <dl>
                    <For each={todaysMenu}>
                        {(meal) => (
                            <>
                                <dt>{meal.meal}</dt>
                                <dd>{meal.recipe}</dd>
                            </>
                        )}
                    </For>
                </dl>
            </section>
            <section>
                <h2>Recipes</h2>
            </section>
        </>
    )
}
