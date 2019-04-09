import axios from "axios";

const getSpecificProjectName = async () => {
	const apiUrl = "https://demo.kimai.org/api/";
	const path = apiUrl + "projects";

	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten",
	};
	try {
		const resp = await axios.get(path, {
			headers: headers,
			mode: "cors"
		});
		return resp;
	} catch (error) {
		return error;
	}
};

export { getSpecificProjectName };