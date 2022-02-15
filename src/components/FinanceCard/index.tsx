import { Container, Tag } from "./styles";

type FinanceCardTypeProps = {
    cardColor: string
    tagColor: string
    title: string
    subtitle: string
    amount: string
}

function FinanceCard({ cardColor, tagColor, title, subtitle, amount }: FinanceCardTypeProps) {
    return (
        <Container color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default FinanceCard;