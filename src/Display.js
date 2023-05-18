import React from 'react';
import './App.css'
import { useEffect } from 'react';





function Display(props) {
    let name = 'No order selected'
    let lead = 'No order selected'
    let date = 'No order selected'
    let items = 'empty'
    let orderId = 'No order selected'

    if (props.order){
    let name = props.order.order.name;
    let lead = props.order.order.lead;
    let date = props.order.order.date;
    let items = props.order.order.items;
    let orderId = props.order.order._id;
    }

    function changeColor(e) {
        e.preventDefault();
        e.target.className = 'btn btn-success'
        e.target.innerText = 'Filled';
        console.log(e.target.innerText);
    }
    let orderBoard = 'Empty';
    if(Array.isArray(items)){
    let orderBoard = items.map((i, idx) => {
        return (
            <tr key={idx} className='list'>
                <td>
                    {i.itemCode}
                </td>
                <td>
                    {i.description}
                </td>
                <td className='th'>
                    {i.requested}
                </td>
                <td>
                <button onClick={changeColor} type="button" className="btn btn-warning">Pending</button>
                </td>

            </tr>
        )
    })
    }


    

    return (
        <div className='App'>
            <h2>Order number : <small className='ornum'>{orderId}</small></h2>
            <p>Name: <strong>{name}</strong></p>
            <p>Lead: <strong>{lead}</strong></p>
            <p>Date: <strong>{date}</strong></p>
            <table>
                <thead>
                    <tr>
                        <th width='30%'>Item Code</th>
                        <th width='30%'>Description</th>
                        <th className='th' width='30%'>Requested</th>
                        <th width='30%'>Pulled</th>
                    </tr>
                </thead>
                <tbody>
                    {orderBoard}
                </tbody>
            </table>
            <span></span>
            <form>
                <label for='pulledBy'>Pulled By:</label>
                <input name='pulledBy' type='text' />
                <button type="button submit" className="btn btn-primary">Save and Complete</button>
            </form>
        </div>
    )
}



export default Display;