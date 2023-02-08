import react, { Component } from "react";
import '../styles/app.scss';

export function ButtonAction(props) {
    return <button className="button--action"> {props.text} </button>
}