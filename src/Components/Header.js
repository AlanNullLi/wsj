import React from 'react';
import './Header.css';

function Header(props) {


    if (window.innerWidth < 641) {
        return (

            <div>
                <h1
                    className="Small" style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 20,
                    }}
                >WSJ</h1>
            </div>

        );
    } else if (window.innerWidth < 981) {
        return (

            <div>
                <h1
                    className="Medium" style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 40,
                        fontFamily: 'Times New Roman'
                    }}
                >THE WALL STREET JOURNAL</h1>
            </div>

        );
    } else {
        return (

            <div>
                <h1
                    className="Normal" style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 50,
                    }}
                >THE WALL STREET JOURNAL</h1>
            </div>

        )
    }

}

export default Header;