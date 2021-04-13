import React, {useEffect, Component} from 'react';
import HouseCard from './HouseCard';
import Pagination from './Pagination';
import axios from 'axios';

class HouseList extends Component {
  state = { 
    allHouses: [], 
    currentHouses: [], 
    currentPage: null, 
    totalPages: null 
  };

  componentDidMount() {
    axios.get('/api/listings')
    .then(response => {
      const allHouses = response.data;
      this.setState({ allHouses });
    });
  }

  onPageChanged = data => {
    const { allHouses } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentHouses = allHouses.slice(offset, offset + pageLimit);
    
    this.setState({ currentPage, currentHouses, totalPages });
  }

  render() {
    const { allHouses, currentHouses, currentPage, totalPages } = this.state;
    const totalHouses = allHouses.length;
    console.log(allHouses)
    return (
      <div>
        <div><Pagination totalRecords={totalHouses} pageLimit={10} pageNeighbours={2} onPageChanged={this.onPageChanged} /></div>
        <div>{ currentHouses.map(house => <HouseCard key={house.id} {...house} />) }</div>
      </div>
    );
  }
}

export default HouseList;