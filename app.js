let users = [
    {
    username: 'Jeric', 
    email: 'jericmariano08@gmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'jmar',
    lessonsCompleted: [0, 1]
    },
    {
    username: 'Derp', 
    email: 'Derp@gmail.com',
    password: 'derp123',
    subscriptionStatus: 'VIP',
    discordId: 'derp',
    lessonsCompleted: [0, 1, 2, 3]
    },
    {
    username: 'Zen', 
    email: 'zen@gmail.com',
    password: 'zen123',
    subscriptionStatus: 'VIP',
    discordId: 'zen',
    lessonsCompleted: [0, 1, 2, 3]
    }
]

function logIn (email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return
        }
    }
    console.log('could not find an email that matches')
}

console.log(users[0].lessonsCompleted.map(elem => elem * 3))

logIn('doesnotexist@gmail.com', 'merp')