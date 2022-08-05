
                          //          A----1----B---3--E----3----L
                          //           \      /   \    \        
                          //            9    2      1   7       
                          //             \  /         \ \         
                          //              C ----1------ D  

//require('../Path Finding Algorithms/pacmangraph.js')
//graph={'A':{'B':1,'C':9},'B':{'C':2,'E':3,'A':1,'D':1},'C':{'B':2,'D':1,'A':9},'D':{'B':1,'C':1,'E':7},'E':{'B':3,'D':7,'L':3},'L':{'E':3}}
function init(pac_position){
//console.log(graph)
Start_vertex=pac_position
visited=[Start_vertex]
shortest_path={}
shortest_path_way={}
Object.keys(graph).forEach(vertex => {
  shortest_path[vertex]=Infinity
});
shortest_path[Start_vertex]=0
}

function shortest_algo(vertex,cost){
  diff = Object.keys(graph).filter(function(x) { return visited.indexOf(x) < 0 })
  if(diff.length==0){return}
  neighbours= Object.keys(graph[vertex]).filter(function(x) { return visited.indexOf(x) < 0 })
  if(neighbours.length==0){return}
  current_cost=Infinity
 // console.log("neighbours",neighbours)
  neighbours.forEach(neighbour=>{
    if (!visited.includes(neighbour)){
    //console.log("c",graph[vertex][neighbour],neighbour,visited)
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
  //console.log(shortest_path,current_vertex)
  //console.log("visited",current_vertex)
  visited.push(current_vertex)
 shortest_algo(current_vertex,  shortest_path[current_vertex] )
 neighbours= Object.keys(graph[vertex]).filter(function(x) { return visited.indexOf(x) < 0 })
 //console.log("backtrack",neighbours.length,vertex)
 if(neighbours.length!=0){
  neighbours.forEach(neighbour=>{
  shortest_algo(neighbour,  shortest_path[neighbour] )
  })
 }
  else
  return
}
init('0')
shortest_algo(Start_vertex,shortest_path[Start_vertex])
//console.log("shortest :",shortest_path_way)
