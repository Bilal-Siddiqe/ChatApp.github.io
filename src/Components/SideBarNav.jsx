import React from 'react';
import proPic from '../images/D.P.jpg';

export const SideBarNav = () => {
    const mystyle = {
        height: '40px',
        borderRadius: '100%'
    };
    const fontSize = {
        fontSize: '20px'
    };
    return (
        <div className='w-100 ps-1 pt-2 pb-2 mt-1 bg-danger'>
            <img src={proPic} alt="" className='profilePic' style={mystyle} />
            <div className="float-end d-flex">
                <span style={mystyle} className='mt-2 ms-2 me-3'><i class="fa-regular fa-circle" style={fontSize}></i></span>
                <span style={mystyle} className='mt-2 ms-2 me-3'><i class="fa-solid fa-comments" style={fontSize}></i></span>
                <span style={mystyle} className='mt-2 ms-2 me-3'><i class="fa-solid fa-ellipsis-vertical" style={fontSize}></i></span>
            </div>
        </div>
    )
}
