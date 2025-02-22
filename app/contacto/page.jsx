"use client";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Image from "next/image";
import FormContact from "./formContact/formContact";
import Banner from "../../public/banner_contacto.png";
import Sobre from "../../public/sobre.png";
import MDQ from "../../public/mdq.png";
import Avion from "../../public/avion.png";
import './contact.css'
import { contactSchema } from "./rule/index.js";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container } from "@mui/material";


export default function ContactoPage() {
  
  useEffect(() => {
    
    ReactGA.initialize('G-1L01SLY277');

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const method = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  return (
    <main >
      
      <Image
        src={Banner}
        width={2560}
        height={507}
        alt="banner"
        style={{ maxWidth: '100%', height: 'auto' }}
        className="bannerContact"
      />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mx:'auto', my:'40px'}} className="contactBox">
          <div className="contactDiv">
        
            <h1>Contactanos</h1>
            <FormProvider {...method}>
              <FormContact/>
            </FormProvider>

          </div>
          <Image
            src={Sobre}
            width={243}
            height={245}
            alt="Sobre"
            className="sobreImg"
          />
          <Image
            src={MDQ}
            width={239}
            height={239}
            alt="logo MDQ"
            className="mdqImg"
          />
          <Image
            src={Avion}
            width={401}
            height={198}
            alt="Avioncito"
            className="avionImg"
          />
        </Box>
      </Container>
    </main>
  )
}
  