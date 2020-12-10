import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    currentTitle: "Welcome",
    sideIcon: "https://www.flaticon.com/svg/static/icons/svg/547/547406.svg",
    hId: "tab-inactive",
    pId: "tab-inactive",
    histData: {},
    pldData: {},
    currentData: {},
    pStart: 0,
    pEnd: 4,
    hStart: 0,
    hEnd: 4,
    showHist: false,
    showPld: false,
    histSideData: 0,
    pldSideData: 0
}

const store = createStore(reducer, initialState);
export default store;