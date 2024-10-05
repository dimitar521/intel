type Hero = { 
    name: string;
    level: number;
    items: string[];
};
function registerHeroes(inputArray: string[]): Hero[] {
    let heroes: Hero[] = [];

    for(const entry of inputArray) {
        let [heroName, heroLevel, items] = entry.split(' / ');
        let hero: Hero = {
            name: heroName,
            level: Number(heroLevel),
            items: items ? items.split(', ') : []
        };
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (const hero of heroes ) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
    return heroes;
}
    const heroesData = [
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
        ];
    
    


registerHeroes(heroesData);