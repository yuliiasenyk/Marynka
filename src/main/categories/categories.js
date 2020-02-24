import React from "react";
import CategoryItem from './category';

export default function Categories() {
    const categories = ['Important', 'bla-bla', 'Games']

    return (
        <div style={{backgroundColor: 'lightgreen', width: '20%'}}>
            <h3>Categories</h3>
            {categories.map(i => <CategoryItem key={i} category={i}>
            </CategoryItem>)}
        </div>
    );
}
