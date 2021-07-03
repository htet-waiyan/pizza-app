import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledResultRow = styled.div`
    & {
        border-bottom: 1px solid #ddd;
    }
    &:hover {
        cursor: pointer;
    }
    &:last-of-type {
        border-bottom: none;
    }
`;

const StyledResultContainer = styled.div`
    max-height: 350px;
    overflow-y: scroll;
`;

/**
 * 
 */
const TypeaheadSearch = ({
    onSelect,
    onRemove,
    options = [], // expect in { _id, title, description }
}) => {
    const [ selectOptions, setSelectOptions ] = useState([]);
    const [ selectedOptions, setSelectedOptions ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState("");

    useEffect(() => {
        if (searchTerm && searchTerm.length >= 3) {
            const memberList = options.filter((o) => o.title.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0); // TODO;
            setSelectOptions(memberList);
        } else {
            setSelectOptions([])
        }
    }, [searchTerm]);

    const handleOnSelect = (selectedMember) => {
        setSearchTerm("");
        setSelectedOptions([...selectedOptions, selectedMember]);
        typeof onRemove && onSelect(selectedMember)
    }

    const handleRemove = (id) => {
        setSelectedOptions(selectedOptions.filter(o => o._id !== id));
        typeof onRemove === 'function' && onRemove();
    }

    const optionDropDown = selectOptions.map((option) => {
        return (
            <StyledResultRow className="p-2 ps-3" key={option._id} onClick={() => handleOnSelect(option)}>
                <h6>{option.title}</h6>
                <span>{option.description}</span>
            </StyledResultRow>
        )
    });

    const memberBadges = selectedOptions.map((option) => {
        return <span className="badge bg-secondary me-2" key={option._id}>
            {option.title}
            <button type="button" className="ms-2 btn-close btn-close-white" aria-label="Close"
              onClick={() => handleRemove(option._id)}></button>
        </span>
    });

    return (
        <div className="typeahead-search-container">
            <input type="search" className="control form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="batch-container mt-2">
                {memberBadges}
            </div>
            <StyledResultContainer className="search-result-container">
                {optionDropDown}
            </StyledResultContainer>
        </div>
    )
}

export default TypeaheadSearch;