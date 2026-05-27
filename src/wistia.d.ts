import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id'?: string;
        aspect?: string;
        [key: string]: unknown;
      };
    }
  }
}