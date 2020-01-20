import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Books(){

  return(
    <div>
    <Book image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" title="natures park" author="Abhinav Jha"/>
    <hr/>
    <Book image="https://media.gettyimages.com/photos/abstract-network-background-picture-id836272842?s=612x612" title="hyperloop" author="Kumar Gaurav"/>
   
    </div>
  )
}

function Book(props){

  return(
    <section>
    <CoverImage img={props.image}/>
    <Title title={props.title}/>
    <Author author={props.author}/>
    </section>
  )
}

function CoverImage(props){

  return(
    <img src={props.img} alt="" width="200"></img>
  )
}
function Title(props){
  return(
    <h4>{props.title}</h4>
  )
}
function Author(props){
  return(
    <h5>{props.author}</h5>
  )
}


ReactDOM.render(<Books/>,
document.getElementById('root'));
