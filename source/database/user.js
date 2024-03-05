class User {
    constructor(username,password,roleLevel) {
        this.username = username;
        this.password = password;
        this.roleLevel = roleLevel;
    }
}

const userList = [
    new User('halil', 'HilHal14','admin'),
    new User('aynur','aynur123','manager'),
]

module.exports = userList;