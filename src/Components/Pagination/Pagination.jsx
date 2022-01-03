import React from 'react'
import './Pagination.css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {

    return (
        <div className="pagination">
            <button className='btn-pagination' onClick={onLeftClick} >
                <div>
                    <AiFillCaretLeft className='arrow-pagination' />
                </div>
            </button>
            <div>
                {page} de {totalPages}
            </div>
            <button className='btn-pagination' onClick={onRightClick} >
                <div>
                    <AiFillCaretRight className='arrow-pagination' />
                </div>
            </button>
        </div>
    )
}

export default Pagination
