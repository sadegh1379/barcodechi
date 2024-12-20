import styled from "styled-components";

export const TabsContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;

    .tab {
        width: 100%;
        text-align: center;
        border-radius: 10px;
        padding: 10px 10px;
        padding-top: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for background and scaling */

       

        &.active {
            background-color: ${({ theme }) => theme.colors.gray};
            color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for emphasis */
        }
    }
`;
