import styled from 'styled-components';

interface Props {
  type: string | undefined;
}

export const WButton = styled.div`
  display:inline-block;
  padding:0.7em 1.4em;
  box-sizing: border-box;
  font-family:'Roboto',sans-serif;
  text-transform:uppercase;
  font-weight:400;
  color: #FFFFFF;
  background-color: ${({ type }: Props) => (type === 'delete' ? '#ff453a' : '#5856d6')};
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
  cursor: pointer;
  border-radius: 20px;
  
  &:active{
    top:0.1em;
  }
  transition: all ease 0.2s;
  
  &:hover {
    background: ${({ type }: Props) => (type === 'delete' ? '#ff453a' : '#34c759')};
  }
`;
export const BWrapper = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
