import { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from './styles';

function List() {
    const { type } = useParams();

    const {title, lineColor} = useMemo(() => {
        return type === 'balanco-entradas' ? {
            title: 'Entradas',
            lineColor: '#f7931b'
        } : {
            title: 'Saidas',
            lineColor: '#e44c4e'
        }
    }, [type]);

    const mounths = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' }
    ];

    const years = [
        { value: 2019, label: 2019 },
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 }
    ];

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={mounths} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button className="tag-filter tag-filter-recurrent" type="button">Recorrentes</button>
                <button className="tag-filter tag-filter-eventuals" type="button">Eventuais</button>
            </Filters>

            <Content>
                <FinanceCard tagColor="#e44c4e" title="Conta de luz" subtitle="27/07/2022" amount="R$ 130,00"/>
            </Content>
        </Container>
    );
}

export default List;