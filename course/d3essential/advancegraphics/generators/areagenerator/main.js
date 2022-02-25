let dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
let dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2001','2000','2001'];
let body=d3.select("body");
let height=200;
let width=500;
let area = d3.area()
             .x((d,i)=>i*20)
             .y0(height)
             .y1((d,i)=> height-d);
let svg = body.append("svg")
              .attr("height","100%")    
              .attr("width","100%")
              .style("border",'1px solid red');
              svg.append("path")
              .attr("d",area(data))          

