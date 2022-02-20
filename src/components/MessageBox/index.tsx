import { Container } from './styles'

type MessageBoxTypeProps = {
    title: string
    description: string
    footerText: string
    icon: string
}

function MessageBox({ description, title, footerText, icon }: MessageBoxTypeProps) {
    return (
        <Container>
            <header>
                <h1>{title} <img src={icon} alt="" /> </h1>
            </header>
            <footer>
                <p>
                    {description}. <span>{footerText}</span>
                </p>
            </footer>
        </Container>
    );
}

export default MessageBox;