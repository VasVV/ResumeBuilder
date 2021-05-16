import { combineReducers } from 'redux'
import chosetemplatereducer from './chosetemplate'
import submitinforeducer from './submitinforeducer';
import addremovejobreducer from './addremovejobreducer';
import addremoveeducationreducer from './addremoveeducationreducer';
import tipsreducer from './tipsreducer';

export default combineReducers({
    chosetemplatereducer,
    submitinforeducer ,
    addremovejobreducer,
    addremoveeducationreducer,
    tipsreducer
})