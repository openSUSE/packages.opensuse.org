import React from 'react';

export default function BinaryNamesList({ names, selected, select }) {
    return <div className="card projects-list">
        <div className="card-header">
            Built Packages
        </div>
        <div className="list-group list-group-flush">
            {names.map(n => (
                <button
                    type="button"
                    key={n}
                    className={`list-group-item list-group-item-action ${n === selected ? 'active' : ''}`}
                    onClick={() => select(n)}
                >
                    {n}
                </button>
            ))}
        </div>
    </div>
}
