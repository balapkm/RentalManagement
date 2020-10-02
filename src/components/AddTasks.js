/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { addTasks, getTask, loadUsers, updateTask } from '../actions/TaskAction';
import {
    shallowEqual,
    useDispatch,
    useSelector
} from 'react-redux';
import { useHistory, useParams } from "react-router-dom";

import moment from 'moment';

/**
 * Login user
 */
function AddTasks() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    task_msg: '',
    task_date: moment().format('YYYY-MM-DD'),
    assigned_user: '',
    is_completed: 0,
    task_time: 0,
    time_zone: 19800
  });
  const [isEdit, setIsEdit] = useState(false);
  
  const { users, task } = useSelector(state => state.TaskReducer, shallowEqual);

  useEffect(() => {
    dispatch(loadUsers());

    if (window.location.pathname.indexOf('edit/') !== -1) {
        setIsEdit(true);
        dispatch(getTask(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (isEdit) {
        setTimeout(() => {
            setFormData({
                ...formData,
                task_msg: task.task_msg,
                task_date: moment(task.task_date).format('YYYY-MM-DD'),
                assigned_user: task.user_id,
                is_completed: task.is_completed
            });
        }, 500);
    }
  }, [isEdit, task])

  const create = () => {
    if (!formData.task_msg || !formData.assigned_user) {
        alert('Invalid input');
        return false;
    }
    if (isEdit) {
        dispatch(updateTask({ ...formData, id}));
        setTimeout(() => alert('Task updated successfully'), 500);
    } else {
        dispatch(addTasks(formData));
        setTimeout(() => alert('Task added successfully'), 500);
    }
    setTimeout(() => history.push('/'), 500);
  }

  /**
   * render 
   */
  return (
    <div className="container mt-4">
       <div className="row">
           <h3>{isEdit ? 'Edit task' : 'Create new tasks'}</h3>
           <div className="col-lg-6 mt-4">
                <div className="form-group">
                    <label htmlFor="usr">Task Message:</label>
                    <input type="text" className="form-control" value={formData.task_msg}  onChange={(e) => setFormData({...formData, task_msg: e.target.value})} />
                </div>
           </div>
           <div className="col-lg-6 mt-4">
                <div className="form-group">
                    <label htmlFor="usr">Task Date:</label>
                    <input type="date" className="form-control" value={formData.task_date} onChange={(e) => setFormData({...formData, task_date: moment(e.target.value).format('YYYY-MM-DD')})} />
                </div>
           </div>
           <div className="col-lg-6 mt-4">
                <div className="form-group">
                    <label htmlFor="usr">Task Status:</label>
                    <select className="form-control" value={formData.task_status} onChange={(e) => setFormData({...formData, is_completed: e.target.value})}>
                        <option value="0">In progress</option>
                        <option value="1">Completed</option>
                    </select>
                </div>
           </div>
           <div className="col-lg-6 mt-4">
                <div className="form-group">
                    <label htmlFor="usr">Assigned by</label>
                    <select className="form-control" value={formData.assigned_user} onChange={(e) => setFormData({...formData, assigned_user: e.target.value})}>
                        <option value="">Select user</option>
                        {users.map((user, k) => (
                            <option key={k} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>
           </div>
            <div className="mt-4 text-center">
                <button type="button" onClick={() => create()} className="btn btn-primary">{isEdit ? 'Edit' : 'Create'}</button>
            </div>
       </div>
    </div>
  );
}

export default React.memo(AddTasks);
