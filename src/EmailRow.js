import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import React from 'react';
import './EmailRow.css';
import {selectMail} from './features/mailSlice'
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

function EmailRow({title,subject,description,time,id}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = ()=>{
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }))

        history.push("/mail");
    }
    return (
        <div onClick={openMail} className='emailrow'>
            <div className='emailrow__options'>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <div className='emailrow__title'>
                <h3>
                    {title}
                </h3>
            </div>  
            <div className='emailrow__message'>
                <h4>
                    {subject}
                    <span className="emailrow__description">
                        {description}
                    </span>
                </h4>
            </div>  
            <p className='emailrow__time'>
                {time}
            </p>  
        </div>
    );
}

export default EmailRow;