import store from '../redux/store';
import '../styles/info.css';

const HistoryInfo = () => {
    return (
        <div id="info">
            {
                (store.getState().showHist)
                ?
                (
                    <div>
                        <div className="sidebar-title">
                            {store.getState().histSideData.title}
                        </div>
                        <div className="sidebar-details">
                            <div>
                                Date:&nbsp;{store.getState().histSideData.event_date_utc}
                            </div>
                            <a href={store.getState().histSideData.links.article}>Article Link^</a> <br />
                            <a href={store.getState().histSideData.links.wikipedia}>Wiki Link^</a>
                        </div>
                    </div>
                )
                :
                (
                    <div>
                    SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. Click through the timeline to see some of the milestone accomplishments.
                    </div>
                )
            }
            
        </div>
    )
}

export default HistoryInfo;