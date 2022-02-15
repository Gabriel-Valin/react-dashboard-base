import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from './styles';

function List() {
    const options = [
        { value: 'Gabriel', label: 'Gabriel' },
        { value: 'Valin', label: 'Valin' }
    ]

    return (
        <Container>
            <ContentHeader title="List" lineColor="#e44">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default List;