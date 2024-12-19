import type { FC } from 'react';
import { MobileLayoutContainer } from './css/mobile-layout';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({children}) => {
    return (
        <MobileLayoutContainer>
            <p>mobile layout</p>
            {children}
        </MobileLayoutContainer>
    );
}

export default MobileLayout;
