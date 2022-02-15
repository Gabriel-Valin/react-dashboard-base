import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from './styles';

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

            <Content>
                <FinanceCard tagColor="#e44c4e" title="Conta de luz" subtitle="27/07/2022" amount="R$ 130,00"/>
            </Content>
        </Container>
    );
}

export default List;