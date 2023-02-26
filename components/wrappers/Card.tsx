
type PageLayoutProps = {
    children?: JSX.Element | JSX.Element[],
    className?: string
}
const Card = ({children, className =''}) => {
    return (
        <div className={`bg-white shadow-[0px_8px_24px_rgba(0,32,56,0.08)] p-4 sm:p-8 rounded-3xl  ${className}`}>
            {children}
        </div>
    )
}

export default Card
