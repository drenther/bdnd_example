import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { heroes, comicType } from './custom/data';
import { shuffle } from './custom/helpers';

const initialState = {
  // we initialize the state by populating the bench with a shuffled collection of heroes
  bench: shuffle(heroes),
  dc: [],
  marvel: [],
};

const listStyle = {
  minHeight: 100,
  width: 100,
  background: 'lightblue',
  padding: 2,
};

const move = (state, source, destination) => {
  const srcListClone = [...state[source.droppableId]];
  const destListClone =
    source.droppableId === destination.droppableId
      ? srcListClone
      : [...state[destination.droppableId]];

  const [movedElement] = srcListClone.splice(source.index, 1);
  destListClone.splice(destination.index, 0, movedElement);

  return {
    [source.droppableId]: srcListClone,
    ...(source.droppableId === destination.droppableId
      ? {}
      : {
          [destination.droppableId]: destListClone,
        }),
  };
};

class App extends React.Component {
  state = initialState;

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Droppable droppableId="bench">
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  className="bench"
                  style={listStyle}
                  ref={provided.innerRef}
                >
                  {this.state.bench.map((item, index) => {
                    return (
                      <Draggable key={item.name} draggableId={item.name} index={index}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {item.name}
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                </div>
              );
            }}
          </Droppable>
          <Droppable droppableId="marvel">
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  className="marvel"
                  style={listStyle}
                  ref={provided.innerRef}
                >
                  {this.state.marvel.map((item, index) => {
                    return (
                      <Draggable key={item.name} draggableId={item.name} index={index}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {item.name}
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                </div>
              );
            }}
          </Droppable>
          <Droppable droppableId="dc">
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  className="dc"
                  style={listStyle}
                  ref={provided.innerRef}
                >
                  {this.state.dc.map((item, index) => {
                    return (
                      <Draggable key={item.name} draggableId={item.name} index={index}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {item.name}
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                </div>
              );
            }}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
