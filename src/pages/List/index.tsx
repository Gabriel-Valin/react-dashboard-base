import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from './styles';

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

type DataTypeProps = {
    description: string
    amount: string
    frequency: string
    date: string
    type: string
}

function List() {
    const [data, setData] = useState<DataTypeProps[]>([]);
    
    const { type } = useParams();



    const title = useMemo(() => {
        return type === 'balanco-entradas' ? "Entradas" : "Saidas"
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'balanco-entradas' ? "#f7931b" : "#e44c4e"
    }, [type])

    const listData = useMemo(() => {
        return type === 'balanco-entradas' ? gains : expenses;
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

    useEffect(() => {
        setData(listData)
        console.log(listData)
    }, []);

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
                {
                    data.map(data => (
                        <FinanceCard key={Math.random() * 1010101} tagColor={data.frequency === 'recorrente' ? '#e44c4e' : '#f7831b'} title={data.description} subtitle={data.date} amount={data.amount}/>
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;