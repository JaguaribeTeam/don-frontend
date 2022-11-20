import React from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';
import PainelComponentInstituicao from '../../../components/components-pvp/PainelComponentInstituicao';

const ViewInstituicoes = () => {
    return ( 
        <div className="main">
            <div className="content">
                {/* <div className="box"> */}
                    <MenuPrivate/>
                    <PainelComponentInstituicao/>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default ViewInstituicoes;