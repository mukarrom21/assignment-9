import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2 className='font-bold text-green-500'>This is header!</h2>
            <nav className='d-flex flex justify-center'>
                <CustomLink to={'/home'} className='ml-5'>Home</CustomLink>
                <CustomLink to={'/review'} className='ml-5'>Review</CustomLink>
                <CustomLink to={'/about'} className='ml-5'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;