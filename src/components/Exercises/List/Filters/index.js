import React, { useState } from 'react';
import { debounce } from 'lodash';

import './filters.css';

const Filters = ({ setSearchText, updateFilters }) => {
    const [isOpen, setOpen] = useState(false);
    const [filters, setFilters] = useState({ 
        muscle_groups: { 
            name: 'Muscle Groups', 
            value: '' 
        },
        movement_patterns: { 
            name: 'Movement Patterns', 
            value: '' 
        },
        equipment_required: {
            name: 'Equipment Required',
            value: ''
        }
    });

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    };

    const debouncedSearch = debounce(handleSearch, 1000);

    const handleFiltersClick = () => {
        setOpen(!isOpen);
    };

    const handleUpdatedFilters = (updatedValue, filter) => {
        const updatedFilters = { ...filters };
        updatedFilters[filter].value = updatedValue;
        setFilters(updatedFilters);
    };

    const handleApplyFilters = () => {
        updateFilters(filters);
        setOpen(false);
    };

    const handleClearFilters = () => {
        const resetFilters = { ...filters };
        for (const filter in resetFilters) {
            resetFilters[filter].value = '';
        }
        setFilters(resetFilters);
        updateFilters(resetFilters);
    }

    return (
        <div className='filters'>
            <input className='search-bar' onChange={debouncedSearch} placeholder='Search for an exercise' />
            <button onClick={handleFiltersClick}>Filters</button>
            {isOpen && (
                <div className='filters-popup'>
                    {Object.keys(filters).map(filter => {
                        const { name, value } = filters[filter];
                        return (
                            <div className='filter'>
                                <div>{`${name}: `}</div>
                                <input value={value} onChange={(event) => handleUpdatedFilters(event.target.value, filter)} />
                            </div>
                        )
                    })}
                    <button className='apply-filters' onClick={handleApplyFilters}>Apply Filters</button>
                    <button onClick={handleClearFilters}>Clear</button>
                </div>
            )}
        </div>
    );
};

export default Filters;