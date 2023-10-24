import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const { login, isAuthenticated } = useAuth(); // Utiliza isAuthenticated directamente desde el contexto

  const handleChange = (value) => {
    setValues(value);
  };

  const defaultValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(defaultValues);

  const inicioSesion = () => {
    login();
    console.log("Sesión Iniciada");
    console.log(isAuthenticated)
    navigate("/");
  };

  return (
    <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
      <Grid item container md={12} xs={12} sx={{ margin: '40px' }} alignItems="center" justifyContent="center">
        <Box sx={{ maxWidth: '1200px' }}>
          <form onSubmit={inicioSesion} onKeyPress={e => { e.which === 13 && e.preventDefault() }} noValidate>
            <Grid container spacing={3} sx={{ paddingRight: '10px', paddingBottom: '10px', border: 2, borderRadius: 5, borderColor: "forFFFFF" }}>
              <Grid item md={10} sx={{ mt: 2.5 }}>
                <TextField placeholder={t("form.email")} fullWidth label={t("form.email")} name='email' required onChange={(event) => handleChange({ ...values, email: event.target.value })} />
              </Grid>
              <Grid item md={10} sx={{ mt: 2.5 }}>
                <TextField placeholder={t("form.password")} fullWidth label={t("form.password")} name='password' required onChange={(event) => handleChange({ ...values, password: event.target.value })} />
              </Grid>

              <Grid item md={6} sx={{ mb: 2.5 }} alignItems="right">
                <Button type="submit" variant="outlined" sx={{
                  backgroundColor: "black",
                  fontFamily: '"Segoe UI Symbol"',
                  fontSize: "20px",
                  height: "60px",
                  width: "150px",
                  mt: 3
                }}>  {t("userMenu.m1")}</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
