require("./pacmangraph.js");
Object.keys(graph).forEach((vertex) => {
    Object.keys(graph[vertex]).forEach((member) => {
        if (graph[vertex][member] != graph[member][vertex] ||  graph[vertex][member] == undefined || graph[member][vertex] == undefined) {
            console.log("failed", graph[vertex][member], vertex, member)
        }

    })
});

opposite = { "ArrowUp": "ArrowDown", "ArrowDown": "ArrowUp", "ArrowLeft": "ArrowRight", "ArrowRight": "ArrowLeft" }
function isoposite(a, b) {
    if (opposite[a] == b)
        return false;
    else
        return true;
}
Object.keys(graph_direction).forEach((vertex) => {
    Object.keys(graph_direction[vertex]).forEach((member) => {
        if (isoposite(graph_direction[vertex][member], graph_direction[member][vertex])) {
            console.log("failed", graph_direction[vertex][member], vertex, member)
        }

    })
});

