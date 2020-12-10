const reducer = (state, action) => {

    switch(action.type) {
        case "GOTO_HOME":
            return ({
                ...state,
                currentTitle: "Welcome",
                sideIcon: "https://www.flaticon.com/svg/static/icons/svg/547/547406.svg"
            });

        case "GOTO_HISTORY":
            return ({
                ...state,
                currentTitle: "History",
                sideIcon: "https://www.flaticon.com/svg/static/icons/svg/547/547419.svg",
                hId: "tab-active",
                pId: "tab-inactive",
                showPld: false
            });

        case "GOTO_PAYLOAD":
            return ({
                ...state,
                currentTitle: "Payload",
                sideIcon: "https://www.flaticon.com/svg/static/icons/svg/547/547423.svg",
                hId: "tab-inactive",
                pId: "tab-active",
                showHist: false
            });
        
        case "HISTORY_DATA": 
            return({
                ...state,
                histData: {...action.values}
            })

        case "PAYLOAD_DATA":
            return({
                ...state,
                pldData: {...action.values}
            })
        
        case "PAGE_HISTORY":
            return({
                ...state,
                currentData: action.dataset.slice(action.start, action.end+1),
                hStart: action.start,
                hEnd: action.end
            })

        case "PAGE_PAYLOAD":
            return({
                ...state,
                currentData: action.dataset.slice(action.start, action.end+1),
                pStart: action.start,
                pEnd: action.end
            })

        case "HISTORY_DETAILS":
            return({
                ...state,
                histSideData: {...action.info},
                showHist:action.showHist
            })
        case "PAYLOAD_DETAILS":
            return({
                ...state,
                pldSideData: {...action.info},
                showPld: action.showPld
            })
        default: return state;
    }
}

export default reducer;