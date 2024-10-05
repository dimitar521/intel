type TownInfo = {
    Town: string;
    Latitude: number;
    Longtitude: number;
};

function parseTableToObjects(inputArray: string[]): TownInfo[] {
    let towns: TownInfo[] = [];

    for (const entry of inputArray) {
        let [town, latitude, longtitude] = entry.split(' | ');

        let townInfo: TownInfo = {
            Town: town,
            Latitude: parseFloat(Number(latitude).toFixed(2)),
            Longtitude: parseFloat(Number(longtitude).toFixed(2))
        };
        towns.push(townInfo)
    }
    for (const town of towns) {
        console.log(town);
    }
    return towns;
}
const tableData = ['Plovdiv | 136.45 | 812.575'];

parseTableToObjects(tableData)