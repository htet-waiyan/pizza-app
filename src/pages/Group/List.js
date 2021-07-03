import React from 'react';
import GroupList from '../../components/Group/List';
import GroupForm from '../../components/Group/Form';
import { Route, Switch } from 'react-router-dom';

const GroupPage = () => {
    return (
        <div className="container">
            <Switch>
                <Route path="/groups">
                    <GroupList />
                </Route>
                <Route path="/groups/new">
                    <GroupForm />
                </Route>
            </Switch>
        </div>
    )
}

export default GroupPage;