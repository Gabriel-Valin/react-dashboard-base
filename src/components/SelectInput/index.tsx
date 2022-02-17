import React from "react";
import { Container } from "./styles";

type SelectPropsType = {
    options: {
        value: string | number
        label: string | number
    }[],
    defaultValue?: string | number
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

function SelectInput({ options, onChange, defaultValue }: SelectPropsType ) {
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue} name="" id="">
                {
                    options.map(option => (
                        <option key={Math.floor(Math.random() * 1000)} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;