
export function newUser(firstName,lastName,username,password,rg,email) {
    let user = {
        firstName,
        lastName,
        username,
        password,
        rg,
        email    
    }
    return user
}