const users = [
    {
        id: crypto.randomUUID(),
        name: 'Bob',
        isStudent: true,
    },
    {
        id: crypto.randomUUID(),
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    },
]

function deleteUser(usersID) {
 const nextVersion = users.filter(u=>u.id!== userID) 
 return nextVersion
}

function craetUser(userName) {
    const newUser = {
        id: crypto.randomUUID(),
            name: userName,
            isStudent:true
        
    }
    const nextVersion = [...users, newUser]
    return nextVersion
}

function updateUserStatus(usersID) {
const nextVersion  = users.map(u => u.id=== userID? {...u.id, isStudent:false }:u)
return nextVersion
// return users.map(u => u.id=== userID? {...u.id, isStudent:false }:u)
}