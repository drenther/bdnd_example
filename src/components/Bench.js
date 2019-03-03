/**
 * The component where the shuffled heroes are stowed before they are grouped and sorted correctly
 *
 * This will be a droppable zone
 */
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

class Bench extends React.Component {
  render() {
    return (
      <Droppable droppableId="bench">
        {(provided, snapshot) => <div className="bench" ref={provided.innerRef} />}
      </Droppable>
    );
  }
}

export default Bench;
