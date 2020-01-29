import React from 'react'
import s from './FormControl.module.css'

const FormControl = ({ meta,  ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            { hasError && <span className={s.formTextError}>{meta.error}</span>}
            <div>
                {props.children}
            </div>
        </div>
    )
}
export const Input = (props) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><input { ...input } {...restProps} /></FormControl>
}