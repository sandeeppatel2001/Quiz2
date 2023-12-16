import React from 'react'

const Filter = () => {
    return (
        <div className="passege_option">
            <div className="question__item mt-3 mb-3 ms-2">
                <div className='question ps-3 w-100' >Filter</div>
                <div className='ps-3 pe-3 mt-3 mb-3 w-100'>
                    <select className="select w-100" >
                        <option >All</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter