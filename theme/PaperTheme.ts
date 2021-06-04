import { DefaultTheme, configureFonts } from "react-native-paper";

const fontsConfig = {
	web: {
		regular: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        medium: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        light: {
            fontFamily: "HelveticaLight",
            fontWeight: "normal",
        },
        thin: {
            fontFamily: "HelveticaThin",
            fontWeight: "normal",
        },
	},
	ios: {
		regular: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        medium: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        light: {
            fontFamily: "HelveticaLight",
            fontWeight: "normal",
        },
        thin: {
            fontFamily: "HelveticaThin",
            fontWeight: "normal",
        },
	},
	android: {
		regular: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        medium: {
            fontFamily: "HelveticaMedium",
            fontWeight: "normal",
        },
        light: {
            fontFamily: "HelveticaLight",
            fontWeight: "normal",
        },
        thin: {
            fontFamily: "HelveticaThin",
            fontWeight: "normal",
        },
	},
};

const theme = {
	...DefaultTheme,
	fonts: configureFonts(fontsConfig),
	colors: {
		...DefaultTheme.colors,
		primary: '#B5C401',
		text:'#9D9D9D',
		placeholder: '#9D9D9D',
	},
};

export default theme;
