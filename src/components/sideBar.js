import store from '../redux/store';

import HistoryInfo from './historyInfo';
import PayloadInfo from './payloadInfo';

import '../styles/sidebar.css';

const SideBar = () => {
    return(
        <div>
            <img src={store.getState().sideIcon} alt={store.getState().currentTitle} id="side-icon" />
            {
                (store.getState().currentTitle === "History")
                ?
                (
                    <HistoryInfo />
                )
                :
                (
                    (store.getState().currentTitle === "Payload")
                    ?
                    (
                        <PayloadInfo />
                    )
                    :
                    (
                        <div>Go to the History or Payload tab to learn more. Details will be shown in this space for the selected mission.</div>
                    )
                )
            }
        </div>
    )
}

export default SideBar;