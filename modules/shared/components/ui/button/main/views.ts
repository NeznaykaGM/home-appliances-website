import styled from 'styled-components';

interface Props {
  type: string | undefined;
}

export const WButton = styled.div`
  max-height: 100px;
  max-width: 100px;
  padding: 8px;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ type }: Props) => (type === 'delete' ? '#ff453a' : '#34c759')};
  transition: all ease 0.2s;
  &:hover {
    background: ${({ type }: Props) => (type === 'delete' ? '#ff453a' : '#34c759')};
    border: 1px solid ${({ type }: Props) => (type === 'delete' ? '#ff453a' : '#34c759')};
    //transition: all ease 0.2s;
    color: white !important;
  }
`;
export const BWrapper = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
