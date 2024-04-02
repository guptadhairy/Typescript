interface User {
    firstName : string,
    lastName: string,
    age: number,
    email?: string
}

function isLegal (user: User) {
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

isLegal({
    firstName: "Dhiru",
    lastName: "gupta",
    age: 21
})