//
//          A----3----B---1--E
//           \      /   \    \        
//            1    7      5   7       
//             \  /         \ \         
//              C ----2------ D  

//graph={'A':{'B':3,'C':1},'B':{'C':7,'E':1,'A':3},'C':{'B':7,'D':2,'A':1},'D':{'B':5,'C':2,'E':7},'E':{'B':1,'D':7}}
Start_vertex='A'
visited=[Start_vertex]
shortest_path={}
shortest_path_way={}
Object.keys(graph).forEach(vertex => {
  shortest_path[vertex]=Infinity
});

shortest_path[Start_vertex]=0

function shortest_algo(vertex,cost){
  diff = Object.keys(graph).filter(function(x) { return visited.indexOf(x) < 0 })
  if(diff.length==0){console.log("all visited");return}
  neighbours=Object.keys(graph[vertex])
  current_cost=Infinity
  neighbours.forEach(neighbour=>{
    if (!visited.includes(neighbour)){
    console.log("c",graph[vertex][neighbour],neighbour,visited)
    if(cost+graph[vertex][neighbour]<shortest_path[neighbour]){
      shortest_path[neighbour]=cost+graph[vertex][neighbour]
      shortest_path_way[neighbour]=vertex
    }
    if(current_cost>shortest_path[neighbour]){
      current_cost=shortest_path[neighbour]
      current_vertex=neighbour
      }
    }
  })
  console.log(shortest_path,current_vertex)

  visited.push(current_vertex)
 shortest_algo(current_vertex,  shortest_path[current_vertex]  )
}

shortest_algo(Start_vertex,shortest_path[Start_vertex])
//console.log(shortest_path_way)
