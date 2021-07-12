import {Typography, Button} from '@material-ui/core';
import './App.css';
import axios from 'axios';
import { CopyToClipboard } from "react-copy-to-clipboard";

import {useState, useEffect} from 'react';
function App() {
  const [joke, setJoke] = useState('');
  const getJoke = async(type) => {
    await axios("https://yomommaapi.herokuapp.com/" + type).then(response => {
      setJoke(response.data.jokes)
    })
  }
  useEffect(() => {getJoke("/")}, []
  )
  return (
    <div className="App">
      <center>
        <Typography style = {{"font-size": "150px", margin: "100px", "font-family": "monospace"}}>YO MOMMA JOKES</Typography>
      </center>  
      <Typography variant = "h1">Yo momma so...</Typography>
      <Button onClick = {() => {getJoke("/")}}>All</Button>
      <Button onClick = {() => {getJoke("fat")}}>Fat</Button>
      <Button onClick = {() => {getJoke("ugly")}}>Ugly</Button>
      <Button onClick = {() => {getJoke("nasty")}}>Nasty</Button>
      <Button onClick = {() => {getJoke("hairy")}}>Hairy</Button>
      <Button onClick = {() => {getJoke("old")}}>Old</Button>
      <Button onClick = {() => {getJoke("poor")}}>Poor</Button>
      <Button onClick = {() => {getJoke("short")}}>Short</Button>
      <Button onClick = {() => {getJoke("skinny")}}>Skinny</Button>
      <Button onClick = {() => {getJoke("tall")}}>Tall</Button>
      <Typography variant = "h5">{joke}</Typography>
      <CopyToClipboard text={joke}>
        <Button color="white" variant = "extended" aria-label="add">
          <Typography>Copy</Typography>
        </Button>
      </CopyToClipboard>
      
    </div>
  );
}

export default App;
