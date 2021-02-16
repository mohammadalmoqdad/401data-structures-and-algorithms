'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        /*
            adjacencyList vertex and neighbours 
                0 => [2]
                1 => [4,5]
                3 => [2,1,0]
                5 => []
        */
        this._adjacencyList = new Map();
    }

    addVertex(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("NOT FOUND!");
            return;
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight)); // this values will be stored inside the Edge array
    }



    getNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            return;
        }
        return this._adjacencyList.get(vertex);
    }

    included(vertex) {
        return this._adjacencyList.get(vertex) ? true : false;
    }


    printAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            console.log(" V====> ", vertex);
            console.log(" E====> ", edge);
            console.log('-----------------------------------------------')
        }
    }

    getNodes() {
        return this._adjacencyList.entries();
    }

    size() {
        return this._adjacencyList.size
    }
    isEmpty() {
        return this._adjacencyList.size > 0 ? false : null
    }

}


const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);

graph.addDirectedEdge(two, six);
graph.addDirectedEdge(two, three);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(eight, two);
graph.addDirectedEdge(three, six);


console.log(graph.getNeighbours(two));

module.exports = Graph