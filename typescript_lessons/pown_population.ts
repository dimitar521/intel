function resgisterTowns(inputArray: string[]): void {
    let towns: { [key: string]: number } = {};

    for (const entry of inputArray) {
        let [town, population] = entry.split(' <-> ');
        let townPopulation = Number(population);

        if (towns[town]) {
            towns[town] += townPopulation;
        }else {
            towns[town] = townPopulation;
        }
    }

for (const town in towns) {
    console.log(`${town} : ${towns[town]}`);
}
}
const townsData = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];

    resgisterTowns(townsData);