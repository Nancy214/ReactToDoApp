import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import todo from './images/todo.svg';
import './ToDo.css'

const getLocalItems = () =>{
    let localItems = localStorage.getItem('items');
    if(localItems){
        return JSON.parse(localStorage.getItem('items'));
    }else{
        return [];
    }
}

const ToDo = () =>{
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());
    const addItem = () =>{
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setInputData(''); 
        }
    }

    const deleteItem = (id) =>{
        const updatedItems = items.filter((item, index) =>{
            return index !== id;
        })
        setItems(updatedItems);
    }

    const removeAll = () =>{
        setItems([]);
    }

    useEffect(() =>{
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todoicon"/>
                        <figcaption>To Do List</figcaption>
                    </figure>

                    <div className="AddItems">
                        <input placeholder="Write Item ✍ " value={inputData} 
                        onChange={(e) =>{setInputData(e.target.value)}}/>  
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((item, index)=>{
                                return(
                                    <div className="eachItem" key={index}>
                                        <h3>{item}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Item"
                                        onClick={()=>deleteItem(index)}></i>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                         onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo;