import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  margin-top: 30px;
  background: ${({ primary }) => (primary ? "#1375ed" : "#f37238")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "18px 56px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "28px" : "20px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: stretch;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;  
    background: ${({ primary }) => (primary ? "#1375aa" : "#f19955")};
  }
`;
