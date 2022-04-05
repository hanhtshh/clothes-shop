import React from 'react'
import styles from './AddItemComponent.module.css';
function AddItemComponent(props) {
    return (
        <div className='blur' style={{alignItems:"center"}}>
            <div className={styles.addItem}>
                <i className={"fa-solid fa-xmark "+styles.icon} onClick={
                    function(){
                        props.setAddItem(false)
                    }
                }></i>
            </div>
        </div>
    )
}

export default AddItemComponent
