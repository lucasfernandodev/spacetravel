type maskHeading = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5';
type maskSubHeading = 'subHeading1' | 'subHeading2';
type maskNav = 'navText';
type maskText = 'Text' | 'default';

export type Mask = maskHeading | maskSubHeading | maskNav | maskText;
export type Element = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'