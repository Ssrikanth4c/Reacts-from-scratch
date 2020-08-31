import React, {Component} from 'react';
import Card from '../components/Card/Card';

class List extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            loading:true,
        };
    }
    async componentDidMount(){
        const movies= await fetch('../../assets/data.json');
        const moviesJson= await movies.json();
        // updating state
        if(moviesJson){
            this.setState({
                data: moviesJson,
                loading:false
            });
        }
    }
    render(){
        const {data, loading}= this.state;
        if(loading){
            return <div>Loading...</div>
        }
        return(
            <div className='row text-center'>
                {data.map(movie=> 
                    <div className='col-sm-12 col-md-6 col-xl-4 my-2 rounded-pill'>
                        <Card key={movie.id} movie={movie} />
                    </div>
                    )}
            </div>
            ) 
    }
};
export default List;