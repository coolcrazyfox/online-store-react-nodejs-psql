import React, {useState} from 'react';
import './App.css';
import TabPage from "./pages/TabPage";
import OEM_DATA from "./OEM_DATA.json";

const data = OEM_DATA;

function App() {
    const [itemCarList, setItemCarList]=useState(data)
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <div className="main_container">
                {/*<div className={'search_container'}>*/}

                {/*    <button onClick={() => setModalActive(true)}>Open modal</button>*/}
                {/*</div>*/}
                <TabPage oemList={itemCarList}/>
            </div>

            {/*<Modal active={modalActive} setActive={setModalActive} oemList={itemCarList}>*/}
            {/*    /!*{children}*!/*/}
            {/*</Modal>*/}


        </>


    );
}

export default App;
