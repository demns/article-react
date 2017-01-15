import config from '../configs/config.json';

module.exports = {
	addArticle(article) {
		var formData  = new FormData();

		for(const key in article) {
		    formData.append(key, article[key]);
		}

		const sendData = {
			method: 'POST', 
	        body: formData
		};

		return new Promise((resolve, reject) => {
			fetch(`${config.apiUrl}articles`, sendData)
			.then((response) => {
				resolve();
			})
			.catch((error) => {
				reject(error);
			});
		});
	}
};