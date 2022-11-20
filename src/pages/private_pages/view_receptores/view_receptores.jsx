import React from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';
import PainelComponentReceptores from '../../../components/components-pvp/PainelComponentReceptores';

const ViewReceptores = () => {
    return ( 
        <div className="main">
            <div className="content">
                {/* <div className="box"> */}
                    <MenuPrivate/>
                    <PainelComponentReceptores/>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default ViewReceptores;