import React from 'react';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './SendMail.css';
import {useForm} from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import {db} from './firebase';
function SendMail(props) {

    const {register,handleSubmit,watch,errors} = useForm();
    const onSubmit = (formData)=>{
        console.log(formData);
        db.collection('emails').add(
            {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        dispatch(closeSendMessage());
    }
    const dispatch = useDispatch();
    return (
        <div className="sendmail">
          <div className="sendmail__header">
              <h3>New Message</h3>
              <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendmail__close"/>
          </div>  
          <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="To" type="text" type="email" {...register('to',{required:true})}/>
             
              <input  placeholder="Subject" type="text" {...register('subject',{required:true})}/>
  
              <input  placeholder="Message..." 
              className="sendmail__message"
              type="text" {...register('message',{required:true})}/>
 
              <div className="sendmail__options">
                <Button 
                className="sendmail__send"
                variant="contained"
                color="primary"
                type="submit">Send</Button>
              </div>
          </form>
        </div>
    );
}

export default SendMail;