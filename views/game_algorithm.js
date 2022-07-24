//
//          A----3----B---1--E
//           \      /   \    \        
//            1    7     5    7       
//             \  /        \  \         
//              C ----2------D  

graph={'A':{'B':3,'C':1},'B':{'C':7,'E':1,'A':3},'C':{'B':7,'D':2,'A':1},'D':{'B':5,'C':2,'E':7},'E':{'B':1,'D':7}}
var shortest_path = JSON.parse(JSON.stringify(graph)); //deep copy the orignal graph object
Object.keys(shortest_path).forEach(vertex => {
shortest_path
});
function shortest_algo(vertex){
    can_reach=Object.keys(graph[vertex])
    
    shortest_algo()
}

shortest_algo('A')