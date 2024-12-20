import { useState, type FC } from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { Categories, Header, Tabs } from './components';
import { HomeContainer } from './css/home';
import { TTabs } from './types/types';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const [activeTab, setActiveTab] = useState<TTabs>("Delivery");
    const [activeCategory, setActiveCategory] = useState<string>("Pizza");
    
    const tabChangeHandler = (tab: TTabs) => {
        setActiveTab(tab)
    }

    const categoryChangeHandler = (category: string) => {
        setActiveCategory(category)
    }
    
    return (
        <HomeContainer>
            <Header />
            <div className="info_container">
                <Tabs activeTab={activeTab} tabChangeHandler={tabChangeHandler} />
                <div className="choose_delivery_address">
                    <FaLocationArrow className='mt-1'/>
                    Choose a delivery address
                </div>
                <Categories activeCategory={activeCategory} categoryChangeHandler={ categoryChangeHandler} />
            </div>
        </HomeContainer>
    );
}

export default Home;
