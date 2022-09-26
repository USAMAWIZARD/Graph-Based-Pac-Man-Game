
        //          A----1----B---1--E
        //           \      /         \        
        //            100    14           7       
        //             \  /             \         
        //              C ----13----------D      

require('../Path Finding Algorithms/pacmangraph.js')
//graph={'A':{'B':6,'C':100},'B':{'C':14,'E':3,'A':2},'C':{'B':14,'D':13,'A':100},'D':{'C':13,'E':7},'E':{'B':3,'D':7}}
//graph={'0':{'1':4,'7':8},'1':{0:'4','7':11,'2':8},'2':{'1':8,'3':7,'5':4,'8':2},'3':{'2':7,'4':9,'5':14},'4':{'3':9,'5':10},'5':{'2':4,'3':14,'4':10,'6':2},'6':{'5':2,'8':6,'7':1},'7':{'0':8,'1':11,'6':1,'8':7},'8':{'2':2,'6':6,'7':7}}
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
  console.log("neighbours",neighbours)
  neighbours.forEach(neighbour=>{
    if (!visited.includes(neighbour)){
   // console.log("c",graph[vertex][neighbour],neighbour,visited)
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
  console.log("visited",current_vertex)
  visited.push(current_vertex)
 shortest_algo(current_vertex,  shortest_path[current_vertex] )
 neighbours= Object.keys(graph[vertex]).filter(function(x) { return visited.indexOf(x) < 0 })
 console.log("backtrack",neighbours.length,vertex)
 if(neighbours.length!=0){
  neighbours.forEach(neighbour=>{
  shortest_algo(neighbour,  shortest_path[neighbour] )
  })
 }
  else{
  console.log("all visited");
    return
  }

}
init('66')
console.log(visited)
shortest_algo(Start_vertex,shortest_path[Start_vertex])
console.log("shortest :",shortest_path_way)

//round trip visited node problem