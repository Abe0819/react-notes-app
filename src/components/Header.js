import React from 'react';

const Header = ({ handleToggleDarkTheme }) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button 
            onClick={() => 
                handleToggleDarkTheme(
                    (previousDarkTheme) => !previousDarkTheme
                )
            }
            className='save'>Toggle Theme
            </button>
        </div>
    )
}

export default Header;