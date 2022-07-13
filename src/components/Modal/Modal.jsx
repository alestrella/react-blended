import { Component } from 'react';
import { Backdrop, Text, ModalStyled, CloseButton } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal, overview } = this.props;
    return (
      <Backdrop>
        <ModalStyled>
          <CloseButton type="button" onClick={closeModal}>
            Close
          </CloseButton>
          <Text>{overview}</Text>
        </ModalStyled>
      </Backdrop>
    );
  }
}
