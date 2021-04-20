import React, {useEffect, Component} from 'react';
import HouseCard from './HouseCard';
import Pagination from './Pagination';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

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

    if (totalHouses === 0) return null;

    return (
      <div>
        <div>
          <div>
            <h2>
              <strong>{totalHouses}</strong> Houses for Sale
            </h2>
            { currentPage && (
              <span>
                Page <span>{ currentPage }</span> / <span>{ totalPages }</span>
              </span>
            ) }
          </div>
          <div>
            <Pagination totalRecords={totalHouses} pageLimit={12} pageNeighbours={2} onPageChanged={this.onPageChanged} />
          </div>
        </div>
        <ListContainer>
          { currentHouses.map(house => <HouseCard key={house.id} {...house} />) }
        </ListContainer>
      </div>
    );
  }
}

export default HouseList;