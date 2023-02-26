type SectionProps = {
    children?: JSX.Element | JSX.Element[],
    className?: string
}
const Section = ({children, className = ''}: SectionProps) => {
    return (
        <section className={`py-4 sm:py-8 md:py-16  w-full max-w-[1440px] mx-auto ${className}`}>
            {children}
        </section>
    )
}

export default Section
