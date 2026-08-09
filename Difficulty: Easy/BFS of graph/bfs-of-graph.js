class Solution {
    bfs(adj) {
        let result = [];
        let visited = new Array(adj.length).fill(false);
        let queue = [];

        // Start BFS from vertex 0
        queue.push(0);
        visited[0] = true;

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node);

            // Visit neighbours in the given order
            for (let neighbour of adj[node]) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }

        return result;
    }
}