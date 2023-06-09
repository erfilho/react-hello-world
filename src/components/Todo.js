import React from "react";

function Todo(props) {

    return(

        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completa} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.nome}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden"> {props.nome} </span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden"> {props.nome} </span>
                </button>
            </div>
        </li>

    )

}
export default Todo;