import { combineReducers } from 'redux'
import chosetemplatereducer from './chosetemplate'
import submitinforeducer from './submitinforeducer';
import addremovejobreducer from './addremovejobreducer';
import addremoveeducationreducer from './addremoveeducationreducer';
import tipsreducer from './tipsreducer';
import addremoveskillreducer from './addremoveskillreducer';
import addsummaryreducer from './addsummaryreducer';
import currpagereducer from './currpagereducer';

export default combineReducers({
    chosetemplatereducer,
    submitinforeducer ,
    addremovejobreducer,
    addremoveeducationreducer,
    tipsreducer,
    addremoveskillreducer,
    addsummaryreducer,
    currpagereducer
})