import React from 'react';

export const LandingPage = (props) => {
  let authToken = new URLSearchParams(props.location.search).get('jwt');
  return (
    <div>
      Landing Page
    </div>
  )
}