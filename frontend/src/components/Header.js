import React from 'react';

const Header = ({pageTitle}) => {
    return(
        <div className='container header'>
            <div className='row justify-content-center'>
                <div className='col-9'>
                    <h1>
                        <span>Tanelts</span>
                        <small>{pageTitle}</small>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
