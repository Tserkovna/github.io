module.exports = {
	showUsers: require('./userFunctions/showUsers').showUsers,
	addUser: require('./userFunctions/addUser').addUser,
	searchUserById: require('./userFunctions/searchUserById').searchUserById,
	changeUserById: require('./userFunctions/changeUserById').changeUserById,
	deleteUserById: require('./userFunctions/deleteUserById').deleteUserById
}