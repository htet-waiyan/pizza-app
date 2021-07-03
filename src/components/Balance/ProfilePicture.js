import React from 'react';

const ProfilePicture = ({ thumbnailUrl, name }) => {
    const ProfileThumbnail = thumbnailUrl 
        ? <img src={thumbnailUrl} class="rounded-circle" alt="logo192.png" />
        : <div className="profile-thumbnail self rounded-circle bg-secondary flex-shrink-0">WY</div>;
    return (
        <div className="d-flex justify-content-center">
            {ProfileThumbnail}
        </div>
    );
}

export default ProfilePicture;
