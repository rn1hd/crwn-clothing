import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './menu-item.styles.scss';

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useNavigate();
  const location = useLocation();
  
  return (
    <div className={`${size} menu-item`} onClick={() => history(`${location.pathname}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);