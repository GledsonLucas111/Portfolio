import styled from "styled-components";

export const Component = styled.footer`
width: 100%;
height: 4vh;
background-color: #F61E3B;
position: absolute;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 490px) {
.textFooter {
    font-size: 13px;
}
}
.textFooter {
    color: #fff;
}
`;