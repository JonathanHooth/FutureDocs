import React, { createContext, useContext } from 'react';
import {useDraggable} from '@dnd-kit/core';
const DraggableContext = createContext();

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : {};

  
  
  return ( 
    <DraggableContext.Provider value={{ attributes, listeners, setNodeRef, style }}>
    <div onClick={props.onClick}>
      {props.children}
    </div>
    </DraggableContext.Provider>
  );
}

// Custom hook to use draggable context
export function useDraggableContext() {
  const context = useContext(DraggableContext);
  if (!context) {
    throw new Error(
      'useDraggableContext must be used within a Draggable component'
    );
  }
  return context;
}