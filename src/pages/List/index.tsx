import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from './styles';

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonth from '../../utils/months';

type DataTypeProps = {
    description: string
    amount: string
    frequency: string
    date: string
    type: string
}

function List() {
    const [data, setData] = useState<DataTypeProps[]>([]);
    const [mounthSelected, setMounthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

    console.log(mounthSelected)
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

    const months = useMemo(() => {
        return listMonth.map((month, index) => {
            return {
                value: ++index,
                label: month
            }
        })
    }, [listMonth])

    const years = useMemo(() => {
        let uniqueYears: number[] = []
        listData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year, label: year
            }
        })
    }, [listData])

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency)

        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item === frequency)
            setSelectedFrequency(filtered)
        }

        setSelectedFrequency(prev => [...prev, frequency])
    }

    useEffect(() => {
        const filterListDate = listData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === mounthSelected && year === yearSelected && selectedFrequency.includes(item.frequency)
        });
        setData(filterListDate)
    }, [listData, mounthSelected, yearSelected, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMounthSelected(e.target.value)} defaultValue={mounthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button className="tag-filter tag-filter-recurrent" onClick={() => handleFrequencyClick('recorrente')} type="button">Recorrentes</button>
                <button className="tag-filter tag-filter-eventuals" onClick={() => handleFrequencyClick('eventual')} type="button">Eventuais</button>
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