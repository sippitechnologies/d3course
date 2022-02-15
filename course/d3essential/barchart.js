let numbers = [5,10,25,30];
let svg = d3.select("body")
            .append("svg")
            .attr("width","400")
            .attr("height","400")
            .style("stroke","blue");
     svg.selectAll("rect")
         .data(numbers)
         .enter()
         .append("rect")
         .attr("x",function(d,i){
             return 60*i;
         })    
         .attr("y",function(d,i){
             let yCoordinate = 300-(d*15)
             console.log(i,yCoordinate);
             return yCoordinate;
         })
         .attr("height",function(d,i){
             return d*15;
         })
         .attr("width","50")
         .style("border",'1px solid blue') 

