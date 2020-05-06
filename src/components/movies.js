import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Pagination from './common/pagination'
import Paginate from "../utils/paginate"

export default class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: getMovies(),
            pageSize: 4,
            currentPage: 1,
        }
    }

   handlePageChange = (page) => {
        this.setState({ currentPage: page })
   }
    
    handleDelete = (movie) => {
        const updated=this.state.movies.filter(mov => mov._id !== movie._id)
        this.setState({movies:updated})

        console.log({ movie } )
   } 
    render() {
        // const movies = { this.state };

        const { movies, pageSize, currentPage } = this.state;
        const itemCount = movies.length;

   
        const paginatedMovie = Paginate(movies, currentPage, pageSize)

        return (

            <div>
                <p>There are {movies.length} movies in the Database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedMovie.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}Title</td>
                                <td>{movie.title}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>love</td>

                                <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>Danger</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
                <Pagination pageSize={pageSize} itemCount={itemCount} onPageChange={this.handlePageChange} />

            </div>

        );
    }


}