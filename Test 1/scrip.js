
function calculateAverage(mark1, mark2,mark3){
    return(mark1+mark2+mark3)/3;
}

function calcualateGrade(average){
    if(average>=80&&average<=100){
        return"A";
    }else if (average>=70){
        return"B";
    }else if (average>=60){
        return"C";
    }else if (average>=50){
        return"D";
    }else{
        return"E";
    }
}

let fullName = prompt("Enter student FullName");
if ( fullName === null){
    alert("error!");
}else{
}
console.log (fullName)

let course = prompt( "enter course name");
if (course === null){
    alert("error!");
}else {
}
console.log( course);

let mark1 = prompt("enter mark for sublect 1");
let mark2 = prompt("enter mark for sublect 2");
let mark3 = prompt("enter mark for sublect 3");

if (mark1===null,mark2===null,mark3===null){
    alert("error:please enter marks!")
} else
mark1=Number(mark1)
mark2=Number(mark2)
mark3=Number(mark3)
if (mark1(isNaN)||mark2(isNaN)||mark3(isNaN)){
    alert("ERROR no zero marks allowed!")
}else if (mark1<0||mark1>100||mark2<0||mark2>100|mark3<0||mark3>100){
    alert( "Error invalid marks!")
}


let average = calcualateAverage(mark1,mark2,mark3);
let grade = calcualateGrade(average);
let result ='student Name:${fullName}\ncourse:${course}\nmark:${mark1},{mark2},{mark3}\nAverage:${average}\nGrade:${grade}';

console.log(result);
