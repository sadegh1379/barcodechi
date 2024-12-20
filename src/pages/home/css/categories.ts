import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;
    
    .categories{
        display: flex;
        align-items: center;
        gap: 10px;
        overflow-x: scroll;

        .category{
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            padding: 5px 10px;
            padding-top: 10px;
            &.active{
                background-color: ${({ theme }) => theme.colors.gray};
                color: white;
                
            }
        }
    }

`;