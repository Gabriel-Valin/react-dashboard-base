import { useMemo, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listMonth from '../../utils/months';
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import happyimg from '../../assets/happy.svg';
import sadimg from '../../assets/sad.svg';
import grinningimg from '../../assets/grinning.svg';


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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(expense => {
            const date = new Date(expense.date);
            const year = String(date.getFullYear());
            const month = String(date.getMonth() + 1);

            if (month === mounthSelected && year === yearSelected) {
                try {
                    total += Number(expense.amount)
                } catch (error) {
                    throw new Error('invalid amount, must be number.')
                }
            }
        });

        return total
    }, [mounthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(gain => {
            const date = new Date(gain.date);
            const year = String(date.getFullYear());
            const month = String(date.getMonth() + 1);

            if (month === mounthSelected && year === yearSelected) {
                try {
                    total += Number(gain.amount)
                } catch (error) {
                    throw new Error('invalid amount, must be number.')
                }
            }
        });

        return total
    }, [mounthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return (+totalGains - totalExpenses)
    }, [totalExpenses, totalExpenses])

    const messageAboutBalance = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Poxa, vei!',
                description: 'Tu gasto muito nesse mes, ate mais do que deveria, se liga em!',
                footerText: 'Verifica seus gastos e tenta fazer um controle',
                icon: sadimg
            }
        }

        if (totalBalance === 0) {
            return {
                title: 'UFAAAA!!',
                description: 'Tu gastou exatamente o que ganhou, calma la em',
                footerText: 'Cuidado!',
                icon: grinningimg
            }
        }

        return {
            title: 'Irrrra!!',
            description: 'Esse mes tu ficou positivo em !!',
            footerText: 'Continua assim!!',
            icon: happyimg
        }
        
    }, [totalBalance])

    return (
       <Container>
            <ContentHeader title="Dashboard" lineColor="#f73">
                <SelectInput options={months} onChange={(e) => setMounthSelected(e.target.value)} defaultValue={mounthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Content>
                <WalletBox title="saldo" amount={totalBalance} footerLabel="Entradas e Saidas" icon="dolar" color="#4e4"/>
                <WalletBox title="entradas" amount={totalGains} footerLabel="Entradas e Saidas" icon="arrowup" color="#f7931b"/>
                <WalletBox title="saidas" amount={totalExpenses} footerLabel="Entradas e Saidas" icon="arrowdown" color="#e44e"/>

                <MessageBox title={messageAboutBalance.title} description={messageAboutBalance.description} footerText={messageAboutBalance.footerText} icon={messageAboutBalance.icon} />
            </Content>
       </Container>
    )
}