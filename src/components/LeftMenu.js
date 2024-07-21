import { isClickableInput } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
function LeftMenu({ checked, setChecked }) {
    return (
        <>
            <div className="row py-3">
                <div className="col">
                    <form action="" className="form-control">
                        {checked && checked.map((category, i) => (
                            <div className="form-check" key={i}>
                                <input className="form-check-input" type="checkbox" value={category.category} id={"checkbox" + i} defaultChecked={category.isClick} onChange={() => {
                                    setChecked(checked => checked.map(c => {
                                        return c.category == category.category ? { category: c.category, isClick: !c.isClick } : c
                                    }))



                                }} />
                                <label className="form-check-label" htmlFor={"checkbox" + i}>
                                    {category.category}
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>
    )
}

export default LeftMenu