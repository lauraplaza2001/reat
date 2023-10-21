import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useTranslation} from "react-i18next"


const Products = ({ user}) => {
    const [products,setProducts] = useState([])
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(true);
    const [t,i18n] = useTranslation("global") // t es el texto traducido y i18n nos permite generar botones para cambiar el lenguaje. hay que paarle el nombr del fichero dond estan las truaduciones



      const getProducts = async () => {
        const ej = await axios.get("https://fakestoreapi.com/products")
        setProducts(ej.data);
        console.log(products);
        setCargando(false);
   
    }
    

  useEffect(() => {
    getProducts()
     }, [cargando]);




return(
    <Box
    sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#FFFFFF'}}>
      <Container sx={{ mt: 3, mb: 3, display: 'flex' }}>
        <Grid container spacing={1}>

          
          <Grid item xs={12} md={12}>
          <TableContainer component={Paper} sx={{ marginTop: 6 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><b> { t("tableProducts.c1")}</b></TableCell>
                    <TableCell align="right"><b>{ t("tableProducts.c2")}</b></TableCell>
                    <TableCell align="right"><b>{ t("tableProducts.c3")}</b></TableCell>
                    <TableCell align="right"><b>{ t("tableProducts.c4")}</b></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((product) => (
                    <TableRow
                    key={product.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {product.title}
                        </TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.category}</TableCell>
                        <TableCell align="right">{product.description}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>






          </Grid>








   



        </Grid>
      </Container>
    </Box>

    
)

}
export default Products;