import styled from 'styled-components'

export const Button = styled.a`
 background: ${(primary) => (primary ? '#219DFF' : '#010606')};
 padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
 color: ${({dark}) => (dark ? '#010606': '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
 border-radius: 50px;
 background: #219DFF;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
     transition: all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#fff' : '#219DFF')};
     color: #010606;
 }
`;