import './social-home.css';
import Image from 'next/image';
import { Container } from "@mui/material";
import Link from 'next/link';


export default function SocialMediaTitle () { 
  return (
    <main className=''>
      <Container className='title'> 
        <h1 className='title-h1'>SUMATE A LA COMUNIDAD CROSSI!</h1>
        <div className="social-media-container">
          <Link href={"https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="}  rel="noopener noreferrer" target="_blank">
          <Image src="/ig.png" alt="Instagram" width={52} height={41} />
          </Link>
          <Link href={"https://www.facebook.com/croissantcafemdp"} rel="noopener noreferrer" target="_blank">
          <Image src="/fb.png" alt="Facebook" width={52} height={41} />
          </Link>
          <Link href={"https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc"} rel="noopener noreferrer" target="_blank">
          <Image src="/tiktok.png" alt="TikTok" width={46} height={44} />
          </Link>
          <Link href={"https://www.linkedin.com/company/croissant-cafe/?originalSubdomain=ar"} rel="noopener noreferrer" target="_blank"> 
          <Image src="/linkedin.png" alt="Linkedin" width={73} height={75} className='in-icon'/>
          </Link>
        </div>
      </Container>
      <Container className='social-description'>
        <p>A lo largo de estos años creamos una comunidad enorme y fiel a la que llamamos Crossifans. Para nosotros, <strong>LO MAS IMPORTANTE</strong>. Te invitamos a ser parte de ella. Compartinos tu experiencia en cualquiera de nuestras estaciones.</p>
      </Container>
    </main>


)
}  