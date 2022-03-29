import style from './style.module.css';

interface Props {
  el?: Element;
  className?: string
}
type Element = 'div' | 'section' | 'main' | 'article';
const Container: React.FC<Props> = ({
  children,
  el = 'main',
  className: cn
}) => {

  const element = {
    div: 'div',
    section: 'section',
    main: 'main',
    article: 'article'
  }
  
  const selectedElement = typeof element[el] === 'undefined' ? 'main' : element[el]
  const CustomElement = selectedElement as React.ElementType

  const ClassName = `${style.container} ${typeof cn !== "undefined" ? cn : ''}` ;
  
  return (
    <CustomElement className={ClassName}>
      {children}
    </CustomElement>
  )
};

export default Container;