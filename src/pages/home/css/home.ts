import styled from "styled-components";

export const HomeContainer = styled.div`

.info_container{
    position: relative;
    background-color: ${({theme}) => theme.colors.secondary};
    margin-top:-10px;
    border-radius: 20px  20px 0 0;
    padding: 18px;
    z-index: 1000;
    height: 100%;

    .choose_delivery_address{
        background-color: ${({ theme }) => theme.colors.border};
        border-radius: 10px;
        padding: 10px 12px;
        text-align: center;
        display: flex;
        gap: 5px;
        justify-content: center;
        padding-top: 15px;
        margin-top:16px;
    }
}
`