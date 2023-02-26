import {MdEmail} from "react-icons/md";
import {BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import Link from "next/link";
import {FaTelegramPlane} from "react-icons/fa";
import Container from "../wrappers/Container";

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <Container>
                  <p>© 2023 --, Inc. All rights reserved</p>
            </Container>
        </div>
    )
}

export default Footer;
