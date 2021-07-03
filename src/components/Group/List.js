import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faGlobeAmericas, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from 'react-router-dom';

const mock_groups = [
    {
        id: 1,
        name: 'Geylang Lunch/Dinner',
        members: ['Thein Thein', 'AC', 'Mouse']
    },
    {
        id: 2,
        name: 'Pornhub dev groups',
        members: ['Thein Thein', 'Boss', 'Yemaw', 'Jon Major', 'Nyi Zin', 'Mouse'],
    }
]

const GroupList = () => {
    const [ groups, ] = useState(mock_groups);
    const match = useRouteMatch();
    const Groups = groups.map((g) => {
        return (
            <div className="row group-row mb-3" key={g.id}>
                <div className="col group-info">
                    <div className="group-summary d-flex flex-row justify-content-between">
                        <h6>
                            {g.name}&nbsp;
                            <button class="btn btn-default btn-sm">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                        </h6>
                        <span>Admin/Owner</span>
                    </div>
                    <div className="group-date-info d-flex flex-row justify-content-between">
                        <span className="text-muted" style={{ fontSize: '0.85em' }}>
                            <FontAwesomeIcon icon={faGlobeAmericas} size="sm"/>
                            You joined on 30 Jun 2020
                        </span>
                        <div className="group-action-button-groups">
                            <button class="btn btn-default btn-sm me-1">
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    </div>
                    <div className="group-members d-flex flex-row justify-content-between">
                        <div className="members-info">
                            Members:&nbsp;
                            {g.members.map((m) => {
                                return <span class="badge bg-secondary me-1">{m}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="container group-container">
            <div className="row mb-3">
                <h4 className="col">Your Groups</h4>
                <div className="col-4">
                    <Link to="/groups/new" className="btn btn btn-light float-end">Create new group</Link>
                </div>
            </div>
            {Groups}
        </div>
    )
}

export default GroupList;
