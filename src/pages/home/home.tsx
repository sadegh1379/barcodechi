import type { FC } from 'react';
import { Header } from './components';
import { HomeContainer } from './css/home';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <HomeContainer>
            <Header/>
        </HomeContainer>
    );
}

export default Home;
