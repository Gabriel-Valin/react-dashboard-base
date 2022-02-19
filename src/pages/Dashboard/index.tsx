import { useMemo, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonth from '../../utils/months';
import WalletBox from "../../components/WalletBox";

export default function Dashboard () {
    const [mounthSelected, setMounthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const months = useMemo(() => {
        return listMonth.map((month, index) => {
            return {
                value: ++index,
                label: month
            }
        })
    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year, label: year
            }
        })
    }, [])

    return (
       <Container>
            <ContentHeader title="Dashboard" lineColor="#f73">
                <SelectInput options={months} onChange={(e) => setMounthSelected(e.target.value)} defaultValue={mounthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Content>
                <WalletBox title="saldo" amount={150.00} footerLabel="Entradas e Saidas" icon="dolar" color="#4e4"/>
                <WalletBox title="entradas" amount={5000.00} footerLabel="Entradas e Saidas" icon="arrowup" color="#f7931b"/>
                <WalletBox title="saidas" amount={4850.00} footerLabel="Entradas e Saidas" icon="arrowdown" color="#e44e"/>
            </Content>
       </Container>
    )
}