import styled from 'styled-components';

export const ButtonUser = styled.button`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  & img {
    width: 34px;
    height: 34px;
    border-radius: 50px;
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      width: 44px;
      height: 44px;
    }
  }
  & p {
    font-weight: ${({ theme }) => theme.fontWeights.l};
    font-size: 12px;
    line-height: 1.7;
    @media (min-width: ${props => props.theme.breakpoints.tab}) {
      font-size: 14px;
    }
  }
`;
