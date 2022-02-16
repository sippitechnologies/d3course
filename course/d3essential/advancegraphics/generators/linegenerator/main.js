let data=[{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
let body = d3.select("body");
let svg = body.append("svg")
            .attr("width","100%")
            .attr("height","100%")
            
            
let line =d3.line()
            .x((d,i)=> d.x*6)
            .y((d,i)=>d.y*4)
            .curve(d3.curveCardinal)
          //  .curve(d3.curveStep); //Different Type of curves are available (These ar also called interpolator)
            svg.append("path")
            .attr("d",line(data))
            .attr("fill","none")
            .attr("stroke","blue");