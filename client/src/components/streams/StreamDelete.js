import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <>
        {/*React.Frament */}
        <Link
          href="#!"
          to="/"
          className="modal-close waves-effect waves-green btn-flat"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="modal-close btn red waves-effect waves-light"
        >
          <i className="material-icons left">delete</i> DELETE
        </button>
      </>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete ${this.props.stream.title} stream?`;
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateProps,
  {
    fetchStream,
    deleteStream
  }
)(StreamDelete);
