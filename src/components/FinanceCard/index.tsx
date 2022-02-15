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
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default FinanceCard;