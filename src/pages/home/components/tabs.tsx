import type { FC } from 'react';
import { TabsContainer } from '../css/tabs';
import { TTabs } from '../types/types';

interface TabsProps {
    activeTab: TTabs;
    tabChangeHandler: (tab: TTabs) => void;
}

const Tabs: FC<TabsProps> = ({ activeTab, tabChangeHandler }) => {
    
    const TABS: TTabs[] = ["Delivery", "Takeaway", "Dine-in"];

    return (
        <TabsContainer>
            {TABS.map((tab => (
                <div onClick={() => tabChangeHandler(tab)} className={`tab ${activeTab === tab && "active"}`}>
                    {tab}
                </div>
            )))}
        </TabsContainer>
    );
}

export default Tabs;
