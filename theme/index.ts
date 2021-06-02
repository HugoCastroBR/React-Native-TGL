import { DefaultTheme } from "styled-components/native";

declare module "styled-components/native" {
	export interface DefaultTheme {
        BgLight: string
        DefaultHighLight: string
	}
}

export const defaultTheme: DefaultTheme = {
    BgLight: "#FEFEFE",
    DefaultHighLight: "#B5C401"
};
