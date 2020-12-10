import axios from 'axios';
import store from '../redux/store';

const Payload = () => {
    var pData = Object.entries(store.getState().currentData)

    const pldCardClick = (e, id) => {
        axios
        .get(`https://api.spacexdata.com/v3/payloads/${id}`)
        .then(res=> {
            store.dispatch({
                type: "PAYLOAD_DETAILS",
                info: {...res.data},
                showHist: false,
                showPld: true
            })
        })
        .catch(err=>console.log(err))
    }

    const loadMore = () => {
        store.dispatch({
            type: "PAGE_PAYLOAD",
            dataset: Object.values(store.getState().pldData),
            start: store.getState().pStart+3,
            end: store.getState().pEnd+3
        })
    }

    const pldCard = pData.map(each=> {
        return(
                <div className="card" onClick={e=>{pldCardClick(e, each[1].payload_id)}}>
                    <div className="card-title">
                        {each[1].payload_id}
                    </div>
                    <div className="card-details">
                        {each[1].payload_type}&nbsp;
                        {each[1].nationality}<br />
                    </div>
                </div>
        )
    })
    return (
        <div>
            {pldCard}
            <div className="load-button" onClick={e=>{loadMore(e)}}>
                Load more
            </div>
        </div>
        
                
    )
}

export default Payload;