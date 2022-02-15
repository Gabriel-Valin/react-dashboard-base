import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import List from "../List";
import { Container } from "./styles";

export default function Dashboard () {
    const options = [
        { value: 'Gabriel', label: 'Gabriel' },
        { value: 'Valin', label: 'Valin' }
    ]

    return (
       <Container>
            <ContentHeader title="Dashboard" lineColor="#f73">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
       </Container>
    )
}