import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link
            className="btn waves-effect waves-light"
            to={`/streams/edit/${stream.id}`}
          >
            Edit
            <i className="material-icons right">edit</i>
          </Link>
          <Link
            className="btn waves-effect waves-light red"
            to={`/streams/delete/${stream.id}`}
            style={{ marginLeft: '1rem' }}
          >
            Delete
            <i className="material-icons right">delete</i>
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <li className="collection-item stream-list__item" key={stream.id}>
          <div className="row">
            <div className="col s7 stream-list__item-left">
              <Link to={`/streams/${stream.id}`}>
                <h4>{stream.title}</h4>
                <p className="description">{stream.description}</p>
              </Link>
            </div>
            <div className="col s5 stream-list__item-right">
              {this.renderAdmin(stream)}
            </div>
          </div>
        </li>
      );
    });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link
          to="/streams/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderList()}</ul>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
