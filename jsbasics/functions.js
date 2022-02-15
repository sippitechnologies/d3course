function display()
{
    console.log("Hi Shady");
}

var name1="Deepak";
var name1;
//console.log(name1);

let b1=11;

let c1=20;
// console.log(c1+=b1);
// console.log(c1);

// let userInput= prompt("Enter your Name");
// console.log(userInput);

// if(b1==11) //if Else Ladder
// {
//     console.log("B1",b1);
// }
// else if(b1==10)
// {
//     console.log("b1 is not equal to 10")
// }

// else{
//     console.log("b1 is not equal to 10")
// }




let isAdult = false;
let isPostGruate=false;
let result = 100;

if(isAdult)
{
    console.log("parent if Block");
    if(isPostGruate)
    {
        console.log("Child if Block");
        switch(result)
        {

            case 90:
                {
                 if(true)
                 {
                    console.log("90")
                 }   
                 else
                 {
                     console.log("its not fair")
                 }
           
                }
                break;
            case 100:
                console.log("100")
                break;
            case 120:
                console.log("120")
                break;
             case 200:
                console.log("90")
                break;
            default:
                console.log("I am not Matched")
                break;    
        }
    }
}
else
{
    switch(result)
    {

        case 90:
            console.log("90")
            break;
        case 100:
            console.log("100")
            break;
        case 120:
            console.log("120")
            break;
         case 200:
            console.log("90")
            break;
        default:
            console.log("I am not Matched")
            break;    
    }

}

// switch(b1)
// {

//     default:
//         console.log("Nothing is Matched")
//         break;
//     case 10:
//     case 11:
//         console.log("Shady");
//         break;
    
//     case 12:
//         console.log("I am Twelve");
//         break;
    
            


// }



function display1(myName,age,addres)
{
    console.log("In ES5");
    console.log("Hi"+ myName
    +age+""+
    addres);//ES5
    console.log("In ES6");
    console.log(`Hi ${myName}
    ${age} 
    ${addres}`);//ES6
}
// display();
// display();
// display();
// display1("John",30,"New York");
// display1("Tony",40,"USA");
