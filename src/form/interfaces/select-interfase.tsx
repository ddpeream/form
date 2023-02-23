interface OptionInterface {
    id?: number,
    description: string,
}

export interface OptionsInterface extends Array<OptionInterface> {}