import React, {Component} from 'react';
import Card from '../components/Card/Card';

class List extends Component{
    constructor(){
        super()
        this.state= {
            data: [],
            loading: true,
        };
    }

    //this is called when the component is mounted
    async componentDidMount(){
        const movies= await fetch('../../assets/data.json');
        const moviesJSON= await movies.json();
        console.log(`The movies object after fetch ${movies}`);

        if(moviesJSON){
            this.setState({
                data: moviesJSON,
                loading: false,
            });
        }
    }


    render(){
        //get the data from state ob
        const {data, loading} = this.state;
        if(loading){
            console.log(this.state.data);
            return <div> could not load data...</div>;
        }
        //returns an array where each array element is a Card component
        return (
           <div class='row'> 
            {data.map(movie=> 
                <div class='col-sm-2'>
                    <Card key={movie.id} movie={movie} />
                </div>
            )}
        </div>
        );
    }
}

export default List;
