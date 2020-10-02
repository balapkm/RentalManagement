import React, { useEffect } from 'react';
import { deleteTask, loadTasks } from '../actions/TaskAction';
import {
    shallowEqual,
    useDispatch,
    useSelector
} from 'react-redux';

import $ from'jquery';
import moment from 'moment';
import { useHistory } from "react-router-dom";

/**
 * Login user
 */
function List() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { tasks } = useSelector(state => state.TaskReducer, shallowEqual);

  useEffect(() => {
    dispatch(loadTasks());
    setTimeout(() => $('#example').DataTable(), 1000);
  }, [dispatch]);

  const deleteAction = (id) => {
    const confirm = window.confirm("Do you want to delete this task?");
    if (confirm) {
        dispatch(deleteTask(id));
        setTimeout(() =>{ 
            alert('Task deleted successfully');
            dispatch(loadTasks());
        }, 500);
       
    }
    return false;
  }

  /**
   * render 
   */
  return (
    <div className="container mt-4 table-responsive">
        <button type="button" onClick={() => history.push("/create")} style={{float: 'right'}}  className="btn btn-primary mb-4 float-right">Create</button>
        <table id="example" className="table table-hover table-bordered" style={{ width: '100%'}}>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Task Date</th>
                    <th>status</th>
                    <th>Created At</th>
                    <th>Assigned By</th>
                    <th>Modified By</th>
                    <th>Modified At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((v, k) => {
                    return (
                        <tr key={k}>
                            <td>{v.task_msg}</td>
                            <td>{moment(v.task_date).format("MMM Do YY")}</td>
                            <td>{(v.is_completed === 0) ? 'In Progress' : 'Completed'}</td>
                            <td>{moment(v.created).format("MMM Do YY")}</td>
                            <td>{v.assigned_username}</td>
                            <td>{v.modified_username}</td>
                            <td>{moment(v.modified).format("MMM Do YY")}</td>
                            <td>
                                <span style={{ cursor: 'pointer' }} onClick={() => history.push('/edit/'+ v.id)} className="badge bg-warning">Edit</span>
                                <span style={{ cursor: 'pointer' }} onClick={() => deleteAction(v.id)} className="badge bg-danger mx-2">Delete</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  );
}

export default React.memo(List);
