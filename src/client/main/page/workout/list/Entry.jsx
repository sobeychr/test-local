import React from 'react';

const Entry = ({ date, distance, time }) => (
    <article>
        <header>Workout entry</header>
        <main>
            <p>
                <span className='title'>Date:</span>
                {date.toString()}
            </p>
            <p>
                <span className='title'>Distance:</span>
                {distance}
            </p>
            <p>
                <span className='title'>Time:</span>
                {time}
            </p>
        </main>
    </article>
);

export default Entry;
