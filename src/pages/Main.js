
import Button from '@mui/material/Button';
import React from 'react';
import { Box, Container } from '@mui/system';
import {  Typography } from '@mui/material';
import { Styler } from '../components/Styler'
import foto from "../images/portada.jpg";
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next"



const Main = ({usuario}) => {
    const navigate = useNavigate();
    const [t,i18n] = useTranslation("global") // t es el texto traducido y i18n nos permite generar botones para cambiar el lenguaje. hay que paarle el nombr del fichero dond estan las truaduciones
    


    return(
        <Box
        sx={{
            backgroundPosition: 'center',
        }} >
        
            <Container sx={{
            mb: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 0,
            }}>
 
                
                  <Typography 
                    color="black" 
                    align="left"
                    variant="h4"
                    marked="center" 
                    style={ Styler.textosombra }
                    sx={{ mb: 4 ,mt:4}}
                    >
                    { t("mainPage.welcome")}
                  </Typography>

                    <Box
                    component="img"
                    sx={{
                        height: 350,
                        width:800,
                        mb: 2,
                      
                    }}
                    src={foto}
                    
                    >
                    </Box>

                    <Box
                    backgroundColor="#E9E2E2"
                    sx={{
                        height: 100,
                        width:800, 
                        mb: 2
                    }}
                  
                    >
                         <Typography 
                    color="black" 
                    align="center"
                    variant="h6"
                    marked="center" 
                    fontFamily={ '"Segoe UI Symbol"' }
                    sx={{ mb: 2 , mt: 2, ml: 2 , mr: 2 }}
                    >
                { t("mainPage.description")}
                  </Typography>
                       
                    </Box>

                  
          
                
                <Button

                    variant="outlined"    sx={{backgroundColor:  "black",
                    fontFamily:   '"Segoe UI Symbol"',
                    fontSize: "20px",
                    height: "60px",
                    width: "200px" }}
                    onClick={() => navigate("/products")}
                >
                    { t("button.mainPage")}
                </Button>

            </Container>
        </Box>
    
        
       
    );

}

export default Main ; 