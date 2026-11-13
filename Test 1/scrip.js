
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


