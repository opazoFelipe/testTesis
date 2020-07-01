const domainUserModel = require('../../domain/models/user.domainModel');

const serializeSingleUser = ({ userData }) => {
    const { id, name } = userData;
    const domainUser = new domainUserModel(id, name);
    return domainUser;
}

const serializeArrayUsers = ({ userData }) => {
    return userData.map(data => {
        return serializeSingleUser(data);
    })
}

const serializeUser = ({ userData }) => {

    if( Array.isArray(userData) ) {
        return serializeArrayUsers(userData);
    } else {
        return serializeSingleUser(userData);
    }
    
}

module.exports = serializeUser;