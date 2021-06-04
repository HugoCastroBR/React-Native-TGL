import { DefaultTheme } from "styled-components/native";

declare module "styled-components/native" {
	export interface DefaultTheme {
        BgLight: string
        BgLight2: string
        DefaultHighLight: string
	}
}

export const defaultTheme: DefaultTheme = {
    BgLight: "#FEFEFE",
    BgLight2: "#F7F7F7",
    DefaultHighLight: "#B5C401"
};
