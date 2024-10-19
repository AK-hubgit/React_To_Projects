import React from "react";
/* function TabButton(trebol) {
  return (
    <button>
      <span>{trebol.label}</span>
    </button>
  );
}
 */

/* function TabButton(props) {
  return <div>{props.children}</div>;
} */

function TabButton({ children, onSelect, isSelected }) {
  return (
    <button className={isSelected ? "active" : undefined} onClick={onSelect}>
      {children}
    </button>
  );
}

export default TabButton;
