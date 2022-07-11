import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  color: #ffffff;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25;
  background-color: #175ee7;
  border: 1px solid #0043c6;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0d4fcd;
  }

  &:active {
    background-color: #003eb6;
  }
`;
