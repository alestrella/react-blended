import { Component } from 'react';
import { fetchMovies } from 'services/movie-api';
import Button from './Button/Button';
import { mapper } from 'helpers/mapper';
import MovieGallery from './MovieGallery/MovieGalerry';
import { Modal } from './Modal/Modal';
import Box from './Box';

export class App extends Component {
  state = {
    items: [],
    page: 1,
    isLoading: false,
    overview: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getMovies(this.state.page);
    }
  }

  getMovies = page => {
    this.setState({ isLoading: true });

    fetchMovies(page)
      .then(data =>
        this.setState({ items: [...this.state.items, ...mapper(data)] })
      )
      .finally(this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleWatched = id => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) {
        item.watched = !item.watched;
      }
      return item;
    });

    this.setState({ items: updatedItems });
  };

  handleOpenModal = overview => {
    this.setState({ overview });
  };

  handleCloseModal = () => {
    this.setState({ overview: '' });
  };

  render() {
    const { items, overview } = this.state;

    return (
      <Box p={32} textAlign="center" as="main">
        {items.length === 0 && (
          <Button caption="Load movies" handleClick={() => this.getMovies(1)} />
        )}
        {items.length > 0 && (
          <>
            <MovieGallery
              movieList={items}
              handleWatched={this.toggleWatched}
              handleModal={this.handleOpenModal}
            />
            <Button caption="Load more" handleClick={this.handleLoadMore} />
            {overview !== '' && (
              <Modal overview={overview} closeModal={this.handleCloseModal} />
            )}
          </>
        )}
      </Box>
    );
  }
}
