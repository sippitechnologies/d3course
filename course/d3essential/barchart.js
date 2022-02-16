let numbers = [5,10,15];
let newX=300;
let svg = d3.select("body")
            .append("svg")
            .attr("width","100%")
            .attr("height","100%")
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

         svg.selectAll("circle")
         .data(numbers)
         .enter()
         .append("circle")
         .attr("cx",(d,i)=>newX+=(d*6)+(i*20))
         .attr("cy","100")
         .attr("r",(d)=>d);

         let newXForEllipse=600;
         svg.selectAll("ellipse")
         .data(numbers)
         .enter()
         .append("ellipse")
         .attr("cx",(d,i)=>newXForEllipse+=(d*6)+(i*20))
         .attr("cy","100")
         .attr("rx",(d)=>d)
         .attr('ry',(d)=>d*2);

         let newXForLine=900;
         svg.selectAll("line")
         .data(numbers)
         .enter()
         .append("line")
         .attr("x1",newXForLine)
         .attr("y1",(d)=>d*5)
         .attr("x2",newXForLine*2)
         .attr('y2',(d)=>d*2);

//Terms anti selection in d3