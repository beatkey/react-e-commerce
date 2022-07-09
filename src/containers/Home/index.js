import React, {useState} from 'react';
import Header from '../../components/Header';
import Products from '../Products';

function Home() {
    const [view, setView] = useState(1);
    const ChangeView = () => {
        switch (view){
            case 1:
                setView(2)
                break;
            case 2:
                setView(3)
                break;
            case 3:
                setView(4)
                break;
            case 4:
                setView(1)
                break;
        }
    };

    return (
        <div>
            <Header view={view} ChangeView={ChangeView}/>
            <Products view={view}/>
        </div>
    );
}

export default Home;
