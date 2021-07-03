import React from 'react';
import BottomGapContainer from '../BottomGapContainer';
import GroupList from '../Group/List';
import ProfileForm from './Form';

const ProfileMain = () => {
    return (
        <div className="profile-container">
            <BottomGapContainer gapSize="mb-5">
                <ProfileForm />
            </BottomGapContainer>
            <BottomGapContainer>
                <GroupList />
            </BottomGapContainer>
        </div>
    )
}

export default ProfileMain;