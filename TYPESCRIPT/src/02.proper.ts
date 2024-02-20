console.log('testing JSON')
let age: number = 20;
    if (age < 50)
        age += 10;

////----------Type----------////
let number = 123; //even without explicit type assignment it can still set type for it normally
let happy:Boolean = true;
let quote:string = "what do you mean no?";
let what //this have a type of any
what  =1 
what = 'a'

function render(document:any){ //this will get error if not assign a type to it unless set tsconfig "noImplicitAny" as false,which is a bit risky
    console.log(document)
}


////----------Array----------////
//let arr:number[] = [1,2,'3'];   //with 3 as string it will return error
let arr2 = [1,2,3];   //with uniform type ts will set type accordingly
let arr3 = [] //any type array,should be avoided
let arr4:number[] = [] //any type array,should be avoided

arr4.forEach(n => n.toFixed) //inside,the method will be shown cuz typescript know what type the array is thus able to show method usable by this type


////----------Tuple----------////
let user : [number,string] = [1,'ace'] //set the type of first and second index of the tuple,if more are added to tuple it will error,same with less
user[0].toPrecision //same as with array,once type is set it will auto show method after dot
user[1].toLowerCase
user.push(1) //it can add array method with no error,even though it cant really use it,will be a problem later 

enum size {small ='s',medium ='m',large ='l'}
enum index {one =1,two,three} //if set with number type like this ts will assume the other two automatically as 2 and 3
let myindex :index = index.three //
console.log(myindex) //this will output 3