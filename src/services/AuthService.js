import config from '../configs/config.json';

module.exports = {
	login(username, password) {
		const sendData = {
				method: 'POST',
		        headers: new Headers({
		          'Accept': 'application/json',
		          'Content-Type': 'application/json'
		        }),
				credentials: 'include',
		        body: JSON.stringify({ username: username, password: password})
			};

		return new Promise((resolve, reject) => {
			fetch(`${config.apiUrl}login`, sendData)
				.then((response) => {
					if(response.status === 200) {
						localStorage.token = Math.random().toString(36).substring(7);
						resolve();
					} else {
						throw new Error();
					}
				}).catch((error) => {
					reject(error);
				});
		});
	},

	logout() {
		delete localStorage.token;
	},

	register(username, password) {
		const sendData = {
				method: 'POST',
		        headers: new Headers({
		          'Accept': 'application/json',
		          'Content-Type': 'application/json'
		        }),
		        body: JSON.stringify({ username: username, password: password})
			};

		return new Promise((resolve, reject) => {
			fetch(`${config.apiUrl}users/create`, sendData)
				.then((response) => {
					if(response.status === 201) {
						resolve();
					} else {
						throw new Error();
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	loggedIn() {
		return !!localStorage.token;
	}
};