import React from 'react'
export default function ImageAnim(props) {
    const styling = {
        position: props.position || `absolute`,
        top: props.top || `none`,
        bottom:props.bottom || 'none',
        left: props.left || '50%',
        zIndex: props.zIndex || 12,
        marginLeft: props.marginLeft,
        width: props.width,
        height: props.height,
        background: props.background,
    }
    return (
        <>
            <div className={props.name} style={styling}></div>
        </>
    )
}
