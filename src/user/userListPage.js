import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const UserListPage = () => {
  const [data, setData] = useState({
    users: {
      A: {
        id: "A",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      B: {
        id: "B",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      C: {
        id: "C",
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      D: {
        id: "D",
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
      E: {
        id: "E",
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
      },
    },
    columns: {
      "online": {
        id: "online",
        title: "online",
        userIds: ["A", "B", "C"],
      },
      "offline": {
        id: "offline",
        title: "offline",
        userIds: ["D", "E"],
      },
    },
    columnOrder: ["online", "offline"],
  });

  const Column = ({ column, users }) => {
    return (
      <Droppable droppableId={column.id.toString()} direction="horizontal">
        {(provided) => (
          <span {...provided.droppableProps} ref={provided.innerRef}>
            {users.map((user, idx) => (
              <User key={user.id.toString()} user={user} index={idx} />
            ))}
            {provided.placeholder}
          </span>
        )}
      </Droppable>
    );
  };

  const User = ({ user, index }) => {
    return (
      // {/* draggableId와 index props 반드시 필요 */}
      <Draggable key={user.id.toString()} draggableId={user.id.toString()} index={index}> 
        {(provided) => (
          <span
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* <img src={user.avatar} alt="사진" /> */}
            {user.first_name}
          </span>
        )}
      </Draggable>
    );
  };

  const onDragEnd = (result) => {
    console.log(result);

    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;

    const column = data.columns[source.droppableId];
    const newUserIds = Array.from(column.userIds);
    newUserIds.splice(source.index, 1);
    newUserIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      userIds: newUserIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newData);
  };

  return (
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const users = column.userIds.map((userId) => data.users[userId]);
          return <Column column={column} users={users} key={column.id} />;
        })}
      </DragDropContext>
  );
};

export default UserListPage;
