import { Grid } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

export default function Layout () {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    )
}