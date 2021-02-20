
function trippossibilaty(graph, arrOfCities) {
    let isPossible = false;
    let cost = 0;
    while (arrOfCities.length > 1) {
        const currentCity = arrOfCities.shift();
        const relatedCities = graph.getNeighbors(currentCity);
        for (let i = 0; i < relatedCities.length; i++) {
            if (arrOfCities[0].value === relatedCities[i].vertex.value) {
                cost = cost + relatedCities[i].weight;
                isPossible = true;
                break;
            }
        }
        if (!isPossible) {
            break;
        }
    }
    return { isPossible, cost }
}