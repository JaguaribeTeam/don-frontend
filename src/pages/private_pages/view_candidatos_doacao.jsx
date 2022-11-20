import React from 'react';
import PainelComponent from '../../components/components-pvp/PainelComponentDoadores';
import MenuPrivate from '../../components/components-pvp/menu';


const ViewPainelDoadores = () => {
    return ( 
      <div className="main">
        <div className="content">

            <MenuPrivate/>
            <PainelComponent/>
        </div>

      </div>
     );
}
 
export default ViewPainelDoadores;