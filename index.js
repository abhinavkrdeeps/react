import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Books(){

  return(
    <div>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </div>
  )
}

function Book(){

  return(
    <section>
    <CoverImage/>
    <Title/>
    <Author/>
    </section>
  )
}

function CoverImage(){

  return(
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfwgJxkpxNBZrgdgdy1zNGmJb31IeoOTnzPkvb3bWMpcofQz16A&s" alt="" width="200"></img>
  )
}
function Title(){
  return(
    <h4>Amazon.in</h4>
  )
}
function Author(){
  return(
    <h5>Abhinav Jha</h5>
  )
}


ReactDOM.render(<Books/>,
document.getElementById('root'));
