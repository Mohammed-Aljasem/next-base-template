type ContainerProps = {
    children?: JSX.Element | JSX.Element[],
    className?: string
}
const Container = ({children, className = ''}: ContainerProps) => {

    return (
        <div className={`px-2 sm:px-8 lg:px-12 xl:px-20 w-full max-w-maximum mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container
