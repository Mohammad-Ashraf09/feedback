import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

function FrontPage() {
  return (
    <>
      <Header text={"myFEEDBACK"} bgColor={"rgba(0,0,0,0.4)"} textColor={"#ff6a95"} />
      <div className='container'>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
      </div>
      <AboutIconLink/>
    </>
  );
}

export default FrontPage