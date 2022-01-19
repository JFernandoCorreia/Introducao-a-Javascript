const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'USER') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Fernando', 'SUDO');
userRoles.set('José', 'ADMIN');
userRoles.set('Luciana', 'ADMIN');
userRoles.set('Carol', 'USER');
userRoles.set('João', 'USER');

console.log(getAdmins(userRoles));