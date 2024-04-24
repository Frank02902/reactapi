import React from 'react'
import { useState } from 'react'
import classes from './style.module.css'

const Items = () => {
    const [items, setItems] = useState([
        {
        id: 1,
        checked: false,
        item: "item1"},

        {
        id: 2,
        checked: false,
        item: "item2"},

        {
        id: 3,
        checked: false,
        item: "item3"}
    ]);

    const clicked = () => {
        setItems(items[1].checked = true)
    }
  return (
    <div>
    
        {items.map(item =>(
            <li className={classes.item} key = {item.id}>
                <input
                type = "checkbox"
                checked = {item.checked}
                onClick={clicked}>
                    {/* <label>{item.item}</label>
                    <button>delete</button> */}
                </input>
                <label>{item.item}</label>
                    <button>delete</button>
            </li>
        ))}
    
    </div>
  )
}

export default Items