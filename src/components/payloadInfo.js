import store from '../redux/store';
import '../styles/info.css';

const PayloadInfo = () => {
    return (
        <div id="info">
            {
                (store.getState().showPld)
                ?
                (
                    <div>
                        <div className="sidebar-title">
                            Payload ID:&nbsp;{store.getState().pldSideData.payload_id}
                        </div>
                        <div className="sidebar-details">
                            <div>
                                Manufacturer:&nbsp;{store.getState().pldSideData.manufacturer}
                            </div>
                            <div>
                                Reference System:&nbsp;{store.getState().pldSideData.orbit_params.reference_system}
                            </div>
                            <div>
                                Regime:&nbsp;{store.getState().pldSideData.orbit_params.regime}
                            </div>
                            <div>
                                Weight in kg:&nbsp;{store.getState().pldSideData.payload_mass_kg}
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.
                    </div>
                )
            }
        </div>
    )
}

export default PayloadInfo;