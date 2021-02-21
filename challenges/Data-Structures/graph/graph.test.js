let Graph = require('./graph.js');

describe("Graph Moule", () => {


    it("Node can be successfully added to the graph", () => {
        let graph = new Graph();
        graph.addVertex(4);
        expect(graph.included(4)).toBeTruthy();
    })

    it("An edge can be successfully added to the graph", () => {
        let graph = new Graph();
        graph.addVertex(4);
        graph.addVertex(3);
        graph.addDirectedEdge(4, 3);
        expect(graph.included(3)).toBeTruthy()
    })
    it("The proper size is returned, representing the number of nodes in the graph", () => {
        let graph = new Graph();
        graph.addVertex(4);
        graph.addVertex(3);
        graph.addDirectedEdge(4, 3);
        expect(graph.size()).toEqual(2)

    })
    it("An empty graph properly returns null", () => {
        let graph = new Graph();
        expect(graph.isEmpty()).toBeNull()
    })


})
