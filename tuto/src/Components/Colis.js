import React, { Component } from 'react'
const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
    {
        id: 'c',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
      {
        id: 'd',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
      {
        id: 'e',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
      {
        id: 'e',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
      {
        id: 'e',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
  ];
  
  
export default class Colis extends Component {
    render() {
        return (
          
            <div>     

    <div className="mf-colis">
    {list.map(item => (
    <div className="mf-colis-item">
        <div inline>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        </div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
  </div>
   
   ))}
  
    </div>
    <div className="sidebars">
        <h1>Envoyer mon colis</h1>
        <h4>Nom</h4>
        <h4>Prénom</h4>
        <h4>Ville Départ</h4>
        <h4>Destination</h4>
    </div>
    
    </div>     
 
   
 

      
        );
    }
}
