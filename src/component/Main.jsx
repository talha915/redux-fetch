import React, { Component } from 'react';

class Main extends Component {
    url = 'http://jsonplaceholder.typicode.com/users';
    componentDidMount () {
        fetch(this.url)
        .then((Response)=>Response.json())
        .then((res)=>{
            console.log("Res", res);
        })
    }
    render() {
        return(
            <div>
                Main
            </div>
        );
    }
}

export default Main;