import React, { useState } from 'react';
import TypeaheadSearch from '../TypeaheadSearch';

const mockData = [
    { _id: 1, title: 'Htet Wai Yan', description: '91191073' },
    { _id: 2, title: 'John Major', description: '91191073' },
    { _id: 3, title: 'Thein Thein', description: '91191073' },
    { _id: 4, title: 'Ye Maw', description: '91191073' },
]
const GroupForm = () => {
    const onSelect = (member) => {
        
    }
    return (
        <div className="container group-creation-form">
            <div className="mb-3">
                <label htmlFor="group-name" className="form-label">Group Name</label>
                <input type="text" className="form-control" id="group-name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="members" className="form-label">Members</label>
                <TypeaheadSearch
                  onSelect={onSelect}
                  options={mockData}/>
            </div>
        </div>
    )
}

export default GroupForm;