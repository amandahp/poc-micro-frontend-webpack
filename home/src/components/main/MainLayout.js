import React, {useState} from 'react'
import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import {
  Box,
  Typography,
  Button, 
  TextField
} from '@material-ui/core';

const Main = () => {

  const forms = ['E-commerce', 'Marktplace', 'Recorrência']

  const [check, setChek] = useState({
    "checkbox0": false,
    "checkbox1": false,
    "checkbox2": false,
  }) 


  const handleChange = (event, index) => {
    setChek({ ...check, [`checkbox${index}`]: !check[`checkbox${index}`]});
  };

  return(
    <Box
      sx={{
        backgroundColor: '#F7F8F9',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        height: '100vh',
        widht:'100vw',
        justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#F7F8F9',
            display: 'inline-grid',
            flexDirection: 'column',
            widht:'100vw',
            justifyContent: 'center',
            marginTop: '100px',
            height: '100vh',
          }}
        >
          <Typography variant="h2"
            sx={{
              textAlign:'center',
              color: '#717171',
              fontWeight: 'bold',
              marginTop: '90px'
            }}
          >
            Quero usar o Pagar.me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#7B7B7B',
              textAlign:'center',
              marginTop: '-120px'
            }}
          >
            Entraremos em contato o mais rápido possível
          </Typography>
          <FormGroup
            sx={{
              display:'flex',
              flexDirection:'row',
              justifyContent: 'center',
              marginTop: '-500px'
            }}
          >
            {forms.map((formText, index)=> {
              return(
                <FormControlLabel
                  label={<span style={{fontSize:"12px", color:'#8E8E8E',}}>{formText}</span>}
                  key={index+10}
                  control={<Checkbox size="small" color="default" checked={check[`checkbox${index}`]} onChange={(event) => handleChange(event, index)}  />}
                />
              )
            })}
            </FormGroup> 
            <Box sx={{marginTop:'-300px'}}>
              <TextField
                sx={{
                  height: '40px',
                  marginTop:'10px',
                  '&:hover': {
                    borderColor: 'rgb(101, 163, 0)',
                  },
                }}
                label="E-mail"
                variant="outlined"
                placeholder="Seu e-mail"
                multiline
              />
              <Button sx={{
                backgroundColor:'rgb(101, 163, 0)',
                borderRadius: '0px',
                height: '55px',
                color: 'text.tertiary',
                marginTop: '10px',
                '&:hover': {
                  backgroundColor: 'rgb(139, 214, 0)',
                }
              }}>
                Prosseguir
              </Button>
            </Box>
        </Box>
    </Box>

  )
};

export default Main;