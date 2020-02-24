import React from "react";

export default function CategoryItem(props) {
    return (
        <div style={{backgroundColor: 'orange', margin: '5px'}}>
            {props.category}
        </div>
    );
}
