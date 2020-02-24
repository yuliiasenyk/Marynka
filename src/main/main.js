import React from "react";
import Categories from './categories/categories'
import List from './lists/app-list'

export default function MainPart() {
    return (
        <div style={{backgroundColor: "pink"}}>
            <h2>Main part</h2>
            <div style={{display: "flex",  justifyContent: 'space-between'}}>
            <Categories/>
            <List/>
            </div>
        </div>
    );
}
