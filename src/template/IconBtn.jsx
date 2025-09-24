import React from 'react'
import IfComp from './IfComp'

export default function IconBtn(props) {
    return (
        // <button style={{ marginLeft: '10px' }} className={`btn btn-${props.style}`} onClick={props.onClick} disabled={props.hide}>
        //     <i className={`fa fa-${props.icon}`}></i>
        // </button>
        <IfComp test={!props.hide}>
            <button style={{marginLeft: '10px'}} className={`btn btn-${props.style}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </IfComp>
    )
    // if (props.hide) {
    //     return null
    // } else {
    //     return (
    //         <button className={`btn btn-${props.style}`} onClick={props.onClick}>
    //             <i className={`fa fa-${props.icon}`}></i>
    //         </button>
    //     )
    // }
}
