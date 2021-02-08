import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
`;

export const Circle = styled.div<{ index?: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${({ theme }) => theme.colors.green300};
    border-radius: 100%;
    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;

    ${({ index }) => {
      switch (index) {
        case 2:
          return '-webkit-animation-delay: -1.1s; animation-delay: -1.1s;';
        case 3:
          return '-webkit-animation-delay: -1s; animation-delay: -1s;';
        case 4:
          return '-webkit-animation-delay: -0.9s; animation-delay: -0.9s;';
        case 5:
          return '-webkit-animation-delay: -0.8s; animation-delay: -0.8s;';
        case 6:
          return '-webkit-animation-delay: -0.7s; animation-delay: -0.7s;';
        case 7:
          return '-webkit-animation-delay: -0.6s; animation-delay: -0.6s;';
        case 8:
          return '-webkit-animation-delay: -0.5s; animation-delay: -0.5s;';
        case 9:
          return '-webkit-animation-delay: -0.4s; animation-delay: -0.4s;';
        case 10:
          return '-webkit-animation-delay: -0.3s; animation-delay: -0.3s;';
        case 11:
          return '-webkit-animation-delay: -0.2s; animation-delay: -0.2s;';
        case 12:
          return '-webkit-animation-delay: -0.1s; animation-delay: -0.1s;';
      }
    }}
  }

  @-webkit-keyframes sk-circleBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-circleBounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  ${({ index }) => {
    switch (index) {
      case 2:
        return 'transform: rotate(30deg);';
      case 3:
        return 'transform: rotate(60deg);';
      case 4:
        return 'transform: rotate(90deg);';
      case 5:
        return 'transform: rotate(120deg);';
      case 6:
        return 'transform: rotate(150deg);';
      case 7:
        return 'transform: rotate(180deg);';
      case 8:
        return 'transform: rotate(210deg);';
      case 9:
        return 'transform: rotate(240deg);';
      case 10:
        return 'transform: rotate(270deg);';
      case 11:
        return 'transform: rotate(300deg);';
      case 12:
        return 'transform: rotate(330deg);';
    }
  }}
`;
