import React from "react";
import StudiosRemovePopup from "../Containers/Studios/StudiosRemovePopup";

const StudioCards = ({ studios }) => {
  return studios.map(studio => {
    return <StudioCard key={studio.id.toString()} studio={studio} />;
  });
};

export default StudioCards;

class StudioCard extends React.Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { studio } = this.props;
    return (
      <li>
        <div className="studioCard">
          <div>
            {" "}
            <h1>{studio.name}</h1>
            <h3>Type: {studio.class_type}</h3>
            <p>{studio.description}</p>
            <p>
              <strong>Address: </strong>
              {studio.address}
            </p>
            <button onClick={this.countUp}>Like</button>
            <h3>{this.state.count}</h3>
          </div>
          <div>
            <StudiosRemovePopup id={studio.id} />
          </div>
        </div>
      </li>
    );
  }
}
