
let words=["hello","Dear","Friends"];
let body=d3.select("body");
let svg= body.append("svg").attr('width',"500")
                   .attr('height',"500")
                   .attr("stroke",'blue')
                   .style('border','5px solid red')
                   .attr("fill","orange")
                   .append("text")
                   .selectAll("tspan")
                   .data(words)
                   .enter()
                   .append("tspan")
                   .attr('x','50')
                   .attr('dominant-baseline',"middle")
                   .attr('text-anchor',"start")
                   .attr('y',function(d,i){
                       return (10+i)*20;
                   })
                   .text(function(d){
                       return d;
                   })
                       
