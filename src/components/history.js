import axios from 'axios';
import store from '../redux/store';
import '../styles/history.css';

const History = () => {
    var cData = Object.entries(store.getState().currentData)
    
    const histCardClick = (e, id) => {
        axios
        .get(`https://api.spacexdata.com/v3/history/${id}`)
        .then(res=>{
            store.dispatch({
                type: "HISTORY_DETAILS",
                info: {...res.data},
                showHist: true,
                showPld: false
            })
        })
        .catch(err=>console.log(err))
    }

    const loadMore = () => {
        store.dispatch({
            type: "PAGE_HISTORY",
            dataset: Object.values(store.getState().histData),
            start: store.getState().hStart+3,
            end: store.getState().hEnd+3
        })
    }

    const histCard = cData.map(each=> {
        return(
            <div className="card" onClick={e=>{histCardClick(e, each[1].id)}}>
                <div className="card-title">
                    {each[1].title}
                </div>
                <div className="card-details">
                    {each[1].details}
                </div>
            </div>
        )
    })
    return (
        <div>
            {histCard}
            <div className="load-button" onClick={e=>{loadMore(e)}}>
                Load more
            </div>
        </div>
        
                
    )
}

export default History;