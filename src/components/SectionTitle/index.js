import React from 'react';

import SectionTitleWrapper from './sectionTitle.style';

const SectionTitle = ({title}) => {
    return(
        <SectionTitleWrapper>
            <div className="section__title">
              <span></span>
              <h2>{title}</h2>
            </div>
        </SectionTitleWrapper>
    )
}

export default SectionTitle;