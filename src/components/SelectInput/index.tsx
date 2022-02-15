import { Container } from "./styles";

type SelectPropsType = {
    options: {
        value: string | number
        label: string | number
    }[]
}

function SelectInput({ options }: SelectPropsType ) {
    return (
        <Container>
            <select name="" id="">
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;