import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);

  // NOTE: This should be checking input value not state as state won't be the updated value until the next render of the component

  const handleTextChange = (e) => {
    if(text === '')
    {
      setBtnDisabled(true);
      setMessage(null);
    }
    else if(text !== '' && text.trim().length < 10)
    {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    }
    else
    {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10)
    {
      const newFeedback=
      {
        text,
        rating,
      };
      if(feedbackEdit.edit === true)
        updateFeedback(feedbackEdit.item.id, newFeedback);
      else
        addFeedback(newFeedback);

      setText('');
    };
  };

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        
        <div className='input-group'>
          <input type='text' placeholder='Write a review' value={text} onChange={handleTextChange} />
          <Button type='submit' isDisabled={btnDisabled} version='secondary'> Send </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;