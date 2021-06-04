import { useFonts } from "expo-font";
import { configureFonts } from "react-native-paper";
import { Fonts } from "react-native-paper/lib/typescript/types";
import { DefaultTheme } from "styled-components/native";

const fontConfig = {
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
};

declare module "styled-components/native" {
	export interface DefaultTheme {
		BgLight: string;
		BgLight2: string;
		DefaultHighLight: string;
        DarkerGray: string;
	}
}

export const defaultTheme: DefaultTheme = {
	BgLight: "#FEFEFE",
	BgLight2: "#F7F7F7",
	DefaultHighLight: "#B5C401",
    DarkerGray: "#9D9D9D",

};

