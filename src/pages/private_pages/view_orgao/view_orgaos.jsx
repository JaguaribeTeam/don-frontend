import React from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';
import PainelComponentOrgao from '../../../components/components-pvp/PainelComponentOrgaos';

const ViewListOrgaos = () => {
    return ( 
        <div className="main">
            <div className="content">
                {/* <div className="box"> */}
                    <MenuPrivate/>
                    <PainelComponentOrgao/>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default ViewListOrgaos;