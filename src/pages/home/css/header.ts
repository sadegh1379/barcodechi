import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: relative;
    .cover_img{
        width: 100%;
        height: 280px;
    }
    .top_header{
        width: 100%;
        top: 0;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;

        .top_header_right{
            display: flex;
            gap: 8px;
            align-items: center;
        }
    }

    .company_detail{
        position: absolute;
        top: 30px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        gap: 7px;

        .company_title{
            font-size: 24px;
            font-weight: bold;
        }

        .company_des{
            font-size: 16px;
            font-weight: bold;
            color: ${({theme}) => theme.colors.gray}
        }
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`