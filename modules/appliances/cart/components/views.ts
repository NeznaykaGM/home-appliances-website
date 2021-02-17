import styled from 'styled-components';

interface Props {
  opacity: string;
  pointerEvents: string;
}

export const ChildrenWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 560px;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #cfcfcf;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #7b7b7b;
  }
`;
export const MCWrapper = styled.div`
  background: #fafafa;
  padding: 10px;
  width: 50vw;
  height: 600px;
  transition: all 0.4s;
  border-radius: 10px;
  position: fixed;
`;

export const MWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ opacity }: Props) => opacity || 0};
  pointer-events: ${({ pointerEvents }) => pointerEvents || 'none'};
  transition: 0.5ms;
`;
