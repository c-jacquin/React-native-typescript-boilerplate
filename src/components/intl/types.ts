export interface IFormattedDateProps {
    style: string,
    value: any,
}

export interface IFormattedMessageProps {
    style: string,
    value: any,
    id: string,
}

export interface IFormattedNumberProps {
    style: any,
    localeMatcher: any,
    formatStyle: string,
    value: any,
    currency: string,
    currencyDisplay: any,
    useGrouping: boolean,
    minimumIntegerDigits: number,
    minimumFractionDigits: number,
    maximumFractionDigits: number,
    minimumSignificantDigits: number,
    maximumSignificantDigits: number,
}

export interface IFormattedPlural {
    style: "cardinal" | "ordinal" | undefined,
    value: any,
}

export interface IFormattedTime {
    style: string,
    value: any,
}
