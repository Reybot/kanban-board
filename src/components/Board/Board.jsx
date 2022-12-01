import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Board = () => {
  const { currentProject, changeCurrentBoard } = useContext(BoardContext);

  function dragEnd(result) {
    // Saftey for dragging out of column
    if (!result.destination) return;

    // Context
    const { destination, source } = result;
    console.log(source);

    if (source.droppableId !== destination.droppableId) {
      console.log(result);
      // Columns
      const sourceColumn = currentProject.board[source.droppableId];
      const destinationColumn = currentProject.board[destination.droppableId];
      // Items in each column
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      // Removing item, and adding item to destionation
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);

      console.log(sourceItems);

      // Change data to new context information
      changeCurrentBoard({
        ...currentProject.board,
        [destination.droppableId]: {
          ...destinationColumn,
          items: [...destinationItems],
        },
        [source.droppableId]: {
          ...sourceColumn,
          items: [...sourceItems],
        },
      });
    } else {
      const sourceColumn = currentProject.board[source.droppableId];
      console.log(sourceColumn);
      const copiedItems = [...sourceColumn.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      changeCurrentBoard({
        ...currentProject.board,
        [source.droppableId]: {
          ...sourceColumn,
          items: [...copiedItems],
        },
      });
    }
  }

  return (
    <div className="board">
      <DragDropContext onDragEnd={(res) => dragEnd(res)}>
        {Object.entries(currentProject.board).map(([id, column], idx) => {
          console.log(id);
          return (
            <div key={id} id={idx}>
              <Droppable key={id} droppableId={id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    active={snapshot.isDraggingOver.toString()}
                    ref={provided.innerRef}
                    className="board-column"
                  >
                    <div className="board-title">
                      <div className={`board-title-icon ${column.name}`}></div>
                      <h4 className="heading-s">{column.name}</h4>
                    </div>
                    {/* Tickets */}
                    {column.items.map((item, index) => (
                      <Draggable
                        index={index}
                        key={item.id}
                        draggableId={item.id}
                      >
                        {(provided, snapshot) => (
                          <Ticket
                            provided={provided}
                            snapshot={snapshot}
                            data={item}
                          />
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Board;

{
  /* <div className='board'>
{currentProject.board.map((column) => {
    return (
        <div className='board-column'>
            <div className='board-title'>
                <div
                    className={`board-title-icon ${column.name}`}
                ></div>
                <h4 className='heading-s'>{column.name}</h4>
            </div>
            {column.tickets.map((ticket) => {
                return <Ticket data={ticket} />
            })}
        </div>
    )
})}
</div> */
}
