import React, { Component } from "react";


class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
            isloaded:true ,
            items: json,        
              })
        })
    }


    render() {

        var {  isloaded, items} = this.state;
        if (!isloaded) {
            return <div>loading...</div>;
        }
        else {
        return (<table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
                 {items.map(item => (
            <tr>
                <td key = {item.id}>{item.name}</td>
                <td key = {item.id}>{item.email}</td> 
                <td key = {item.id}>{item.address.street}</td>
           </tr> ))
            }</table>
           
        );
    };
}
}

export default Api