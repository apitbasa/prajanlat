'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@mui/material/Slider/Slider";
import Box, { BoxProps } from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { Button, Card, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import {szallitok} from "./data/data";
import {vevok} from "./data/data";
import {kategoriak} from "./data/data";
import {termekek} from "./data/data";

export default function Home() {
  const [szallito, setSzallito] = React.useState(szallitok[0]);
  const [vevo, setVevo] = React.useState(vevok[0]);
  const [kategoria, setKategoria] = React.useState(kategoriak[0]);
  const [termek, setTermek] = React.useState(termekek[0]);
  const [alkatresz, setAlkatresz] = React.useState('');

  const handleSzallitoChange = (event: SelectChangeEvent) => {
    szallitok.map((key ) => ( 
      key.value === event.target.value ? setSzallito(key) : ''      
    ))    
  };
  const handleVevoChange = (event: SelectChangeEvent) => {
    vevok.map((key ) => ( 
      key.value === event.target.value ? setVevo(key) : ''      
    ))    
  };
  const handleKategoriaChange = (event: SelectChangeEvent) => {
    kategoriak.map((key ) => ( 
      key.value === event.target.value ? setKategoria(key) : ''      
    ))    
  };

  const handleTermekChange = (event: SelectChangeEvent) => {
    termekek.map((key ) => ( 
      key.value === event.target.value ? setTermek(key) : ''      
    )) 
  };
  const handleAlkatreszChange = (event: SelectChangeEvent) => {
    setAlkatresz(event.target.value as string);
  };

  return (
    <main className={styles.main}>
         <div>
           <h1
            style={{color: '#222'}}
           >
            Ajánlat konfiguráció</h1>
           <div style={{ width: '100%' }}>
           <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#cccccc'
              }}
            >
              <FormControl >
              <InputLabel id="s1">Szállító</InputLabel>
              <Select
                labelId="s1"
                id="1"
                value={szallito.value}
                label="Szállító"                
                onChange={handleSzallitoChange}
                style={{width: "300px", margin: "10px"}}
              >
                {szallitok.map((szallito) => (                  
                  <MenuItem key={szallito.key} value={szallito.value}>{szallito.label}</MenuItem>                  
                ))}
              </Select>
              </FormControl>
              <FormControl>
              <InputLabel id="s2">Vevő</InputLabel>
              <Select
                labelId="s2"
                id="2"
                value={vevo.value}
                label="Vevő"                
                onChange={handleVevoChange}
                style={{width: "300px", margin: "10px"}}
              >
                {vevok.map((vevo) => (                  
                  <MenuItem key={vevo.key} value={vevo.value}>{vevo.label}</MenuItem>                  
                ))}
              </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#cccccc'
              }}
            >
              <FormControl style={{width: '100%'}}>
              <InputLabel id="s3">Kategória</InputLabel>
              <Select
                labelId="s3"
                id="3"
                value={kategoria.value}
                label="Kategória"                
                onChange={handleKategoriaChange}
                style={{width: "90%", margin: "10px"}}
              >
               {kategoriak.map((kategoria) => (                  
                  <MenuItem key={kategoria.key} value={kategoria.value}>{kategoria.label}</MenuItem>                  
                ))}
                
              </Select>
              </FormControl>
              </Box>
            <Box
              sx={{
                display: 'flex',                
                flexDirection: 'row',                
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#cccccc'
              }}
            >
              <FormControl style={{width: '100%'}}>
              <InputLabel id="s4">Termék</InputLabel>
              <Select
                labelId="s4"
                id="4"
                value={termek.value}
                label="Termék"                
                onChange={handleTermekChange}
                style={{width: "80%", margin: "10px"}}
              >
                {
                termekek.map((termek) => (                  
                  kategoria.value === termek.kategoria ? <MenuItem key={termek.key} value={termek.value}>{termek.label}</MenuItem>: <MenuItem style={{display: "none"}} key="0" value="0">nincs kategória</MenuItem> 
                ))}
                
              </Select>
              </FormControl>
              <Button>+</Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#cccccc'
              }}
            >
              <FormControl fullWidth>
              <InputLabel id="s5">Alkatrész</InputLabel>
              <Select
                labelId="s5"
                id="5"
                value={alkatresz}
                label="Alkatrész"                
                onChange={handleAlkatreszChange}
                style={{width: "300px", margin: "10px"}}
              >
                <MenuItem value={1}>Alkatrész 1</MenuItem>
                <MenuItem value={2}>Alkatrész 2</MenuItem>
                
              </Select>
              </FormControl>
              
            </Box>
          </div>           
         </div>
         <Card style={{width: "90%"}}>
           <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#222'
              }}>
              <div id="arajanlat_cim">Árajánlat</div>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                color: '#222'
              }}>

              <div id="szallito">
                Szállító: {szallito.label}
                <br />
                Cím: {szallito.cim}
                <br />
                Adószám: {szallito.adoszam}
              </div>
                <div id="vevo">
                Vevő : {vevo.label}
                <br />
                Cím: {vevo.cim}
                <br />
                Adószám: {vevo.adoszam}
                </div>
              </Box>
         </Card>
    </main>
  );
}
