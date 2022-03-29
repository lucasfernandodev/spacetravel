import style from './style.module.css';
import {Element, Mask} from '../../../types/Typography';


interface ClassList {
  class: string,
  defaultElement: string 
}

interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement>{
  className?: string | undefined,
  mask?: Mask,
  el?: Element
}


const element: Record<Element, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
}

const TypographyMask: Record<Mask, ClassList> = {
  'default': {
    class: style.default,
    defaultElement: element.span,
  },
  'heading1': {
    class: style.heading1,
    defaultElement: element.h1
  },
  'heading2': {
    class: style.heading2,
    defaultElement: element.h2
  },
  'heading3': {
    class: style.heading3,
    defaultElement: element.h3
  },
  'heading4': {
    class: style.heading4,
    defaultElement: element.h4
  },
  'heading5': {
    class: style.heading5,
    defaultElement: element.h5
  },
  'subHeading1': {
    class: style.subHeading1,
    defaultElement: element.p
  },
  'subHeading2': {
    class: style.subHeading2,
    defaultElement: element.p
  },
  'navText': {
    class: style.navText,
    defaultElement: element.span
  },
  'Text': {
    class: style.Text,
    defaultElement: element.p
  },
}

const Typography:React.FC<TypographyProps> = ({
  mask = 'default',
  children,
  el,
  className: cn,
}) => {  

  const selectElement = typeof el === 'undefined' ? TypographyMask[mask].defaultElement : element[el];
  const CustomElement = selectElement as React.ElementType;

  const ClassNames = `${TypographyMask[mask].class} ${typeof cn !== 'undefined' ? cn : ''}`;

  return (

    <CustomElement className={ClassNames} >
      {children}
    </CustomElement>
  )

};

export default Typography;