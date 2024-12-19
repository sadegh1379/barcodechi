import type { FC } from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { useTheme } from 'styled-components';
import { HeaderContainer } from '../css/header';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const { colors } = useTheme()
    
    return (
        <HeaderContainer>
            <img className='cover_img' src="/images/food-banner.jpeg" alt="banner" />
            <div className="company_detail">
                <img src="/images/product-logo.jpeg" alt="" className="company_logo" />
                <p className='company_title'>Bowlic</p>
                <p className='company_des'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
            </div>
            <div className="top_header">
                <div className="top_header_right">
                      <MdOutlineMenu className='pointer' color={colors.gray} size={28}/>                        
                      <FaUser className='pointer'  color={colors.gray} size={20}/>
                </div>
                <IoMdTime className='pointer' color={colors.gray} size={25}/>
            </div>
        </HeaderContainer>
    );
}

export default Header;
