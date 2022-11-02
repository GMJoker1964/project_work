import React from 'react';
import '../Body/Body.css';

const Body = () => {
    return (
        <div className='cv-body'>
            <div className="container-fluid">
                <div className="display-flex">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,h=752,fit=crop/julian4puzz/img-d955QlvzR7hy5nrO.png" alt="" style={{ width: '50%', }} className="p-4" />
                    <div className=" display-flex text-display px-4">
                        <div id="text-1">
                            <h1>Julian Mack – Changing the world one headline at a time.</h1>
                        </div>
                        <div id="text-2">
                            <h5>I’m an investigative journalist with over two decades of experience. I’ve covered both Milan’s fashion week and the U.S. primaries in the same year. Above all, I believe that fair and free press is fundamental to a healthy society – the core ideal behind my work. I offer professional, unbiased, and timely articles, along with cited sources, and the highest regard for journalistic integrity you can find.</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body