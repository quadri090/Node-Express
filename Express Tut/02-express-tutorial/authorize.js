const Users = [
    {
        id: 101,
        name: 'jamal'
    },
    {
        id: 102,
        name: 'alaba'
    },
    {
        id: 101,
        name: 'olaide'
    },
    {
        id: 101,
        name: 'opeyemi'
    },
    {
        id: 101,
        name: 'opeoluwa'
    },
]

const serverUsers = Users.map((user) => {
    return user.name, user.id
})


const authorize = (req, res, next) => {
    const {user} = req.query  //user object is passed the value if the req query parameter contains defined user parameter which in this case mustbe john
    if (user === 'john' ) {
        req.user = { name: 'john', id: 101 }// req.user object passed a value
        next()
    } else {
        res.status(401).send('Unauthorized access')//error message if user does not provide the user name john
    }
    next()
}

module.exports = authorize;

// users need to add /?user=john after the port or domain name before they can be authorized to access the server