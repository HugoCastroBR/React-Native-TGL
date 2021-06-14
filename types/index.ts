// export type fonts = {
// 	UltraLight: string
// 	Thin: string
// 	Light: string
// 	Medium: string
// 	Bold: string
// 	Heavy: string
// }


export type AuthInputType = {
    value?: string;
    hidden?:boolean
    label?:string

    type?: "name" | "username" | "password" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "postal-code" | "street-address" | "tel" | "off"
}



export type GameData = {
    id: number
    created_at?: string
    updated_at?:string

    type: string
    description: string
    range: number
    price: number
    "max-number": number
    color: string
    "min-cart-value": number
}

export type GameSelectButtonType = {
    color?: string;
    active?: boolean;
    index?: number
}

export type SavedGame ={
    type: string
    price: number
    color: string
    data: string
    numbers: number[] 
    active: boolean
}


export type GameDataProps = GameData & {
	active: boolean
}

export type NumberBtnProps = {
    number: number,
    selected: boolean
}

export type UpdateInfos = {
    phone_number?:string,
    password?:string,
    password_confirmation?:string,
    username?:string,
    email?:string,
    about?:string
}

export type UserRes = {
    id: number
    username: string
    email: string
    phone_number: string
    about: string
}

export type inputProps = {
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    value: string 
    placeholder: string
    hidden: boolean;
}