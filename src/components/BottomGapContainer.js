import React from 'react';

const BottomGapContainer = ({ gapSize = "mb-3", children }) => {
    const gapClassName = `pizza-gap-container ${gapSize}`;
    return (
        <div className={gapClassName}>{children}</div>
    )
}

export default BottomGapContainer;