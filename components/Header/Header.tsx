import Container from "../wrappers/Container";

const Header = () => {
    return (
        <div className='h-auto'>
            <div className='info-gradient h-20 hidden sm:block'>
                <Container className=' sm:flex justify-end  '>
                    <span>Header</span>
                </Container>
            </div>
        </div>
    )
}

export default Header;
