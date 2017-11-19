import PropTypes from 'prop-types';
import React from 'react';

export default class UserList extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
    arrUserList: PropTypes.array
  };

  /**
  * @param props - Comes from your rails view.
  */
  constructor(props) {
    super(props);

    this.state = { name: this.props.name,
                    arrUserList: {
                      "users": [
                        {"id": 1, "name":"Test User ", "city":"montreal"},
                        {"id": 2, "name":"Test User 2", "city":"montreal"},
                        {"id": 3, "name":"Test User 3", "city":"montreal"},
                        {"id": 4, "name":"Test User 3", "city":"montreal"}
                      ]
                    } };
  }

  updateCity = (name) => {
    let jsonUserList = {
      "users": [
        {"id": 7, "name":"Test User ", "city": name},
        {"id": 8, "name":"Test User 2", "city": name},
        {"id": 9, "name":"Test User 3", "city": name},
        {"id": 10, "name":"Test User 3", "city": name}
      ]
    };

    this.setState({ name });
    this.setState({ arrUserList: jsonUserList } );
  };

  render() {
    // TODO: Switch this to an AJAX-type call/or react state/prop to bring in real data.
    let jsonUserList = this.state.arrUserList;

    return (
      <div>
        {/* <h3>
          Users planning trips to {this.state.name}!
        </h3> */}
        <label htmlFor="cityname">
            City:
          </label>
          <input
            id="cityname"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateCity(e.target.value)}
            disabled
          />
          <p />
          {/* <div className="userlistdiv">
          <div>{jsonUserList.users[0].name} {jsonUserList.users[0].city}</div>
          <div>{jsonUserList.users[1].name} {jsonUserList.users[1].city}</div>
          <div>{jsonUserList.users[2].name} {jsonUserList.users[2].city}</div>
          </div> */}
          <div className="userlistdiv">
          {jsonUserList.users.map(function(user){
                    return (
                      <a href={"/trip/chat/" + user.id + '?name=' + user.name} key={user.id}>
                      <div className="circleBase type1"></div>
                      <span key={user.id} >{user.name} {user.city}</span>
                      </a>
                      );
                  })}
          </div>
      </div>
    );
  }
}
