import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorage = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		// saving error
		console.log(e);
	}
};

export const getStorage = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value;
	} catch (e) {
		// error reading value
	}
};

export const removeStorage = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		// remove error
	}

	console.log("Done.");
};

export default setStorage;
