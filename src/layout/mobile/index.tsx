import type { FC } from 'react';
import { MobileLayoutContainer } from './css/mobile-layout';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({children}) => {
    return (
        <MobileLayoutContainer>
            {children}
        </MobileLayoutContainer>
    );
}

export default MobileLayout;
