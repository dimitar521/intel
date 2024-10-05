function registerHeroes(inputArray) {
    var heroes = [];
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var entry = inputArray_1[_i];
        var _a = entry.split(' / '), heroName = _a[0], heroLevel = _a[1], items = _a[2];
        var hero = {
            name: heroName,
            level: Number(heroLevel),
            items: items ? items.split(', ') : []
        };
        heroes.push(hero);
    }
    heroes.sort(function (a, b) { return a.level - b.level; });
    for (var _b = 0, heroes_1 = heroes; _b < heroes_1.length; _b++) {
        var hero = heroes_1[_b];
        console.log("Hero: ".concat(hero.name));
        console.log("level => ".concat(hero.level));
        console.log("items => ".concat(hero.items.join(', ')));
    }
    return heroes;
}
var heroesData = [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
];
registerHeroes(heroesData);
