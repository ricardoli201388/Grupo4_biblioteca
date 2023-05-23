import { Container } from './Styles'
import {Header, Footer } from '../../components'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    return(
        <Container>
            <Header/>
            <Outlet />
            <Footer/>

        </Container>


    );

} 