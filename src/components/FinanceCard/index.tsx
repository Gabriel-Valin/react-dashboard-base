import { formatCurrenct } from "../../utils/formatCurrency";
import { Container, Tag } from "./styles";

type FinanceCardTypeProps = {
    tagColor: string
    title: string
    subtitle: string
    amount: string
}

function FinanceCard({ tagColor, title, subtitle, amount }: FinanceCardTypeProps) {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{ new Intl.DateTimeFormat('pt-BR').format(new Date(subtitle))}</small>
            </div>
            <h3>{formatCurrenct(+amount)}</h3>
        </Container>
    );
}

export default FinanceCard;