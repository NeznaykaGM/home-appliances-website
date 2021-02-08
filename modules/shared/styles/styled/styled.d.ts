import 'styled-components';
import { colors, templates, dimensions } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    templates: typeof templates;
    dimensions: typeof dimensions;
  }
}
