interface Layout{
  className?: string
}
const Layout:React.FC<Layout> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main {...props} className={className}>
      {children}
    </main>
  )
}

export default Layout; 