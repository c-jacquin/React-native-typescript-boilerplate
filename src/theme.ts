interface Colors {
    primary: string
    secondary: string
}

export interface Theme {
    colors: Colors
}

export const theme: any = {
    colors: {
        primary: 'blue',
        secondary: 'green',
    },
}
