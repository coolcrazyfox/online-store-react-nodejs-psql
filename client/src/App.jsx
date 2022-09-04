import React, {useState} from 'react';
import './App.css';
import TabPage from "./pages/TabPage";
import OEM_DATA from "./OEM_DATA.json";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const data = OEM_DATA;

function App() {
    const [itemCarList, setItemCarList]=useState(data)
    const [modalActive, setModalActive] = useState(false)

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
        // <>
        //     {/*<div className="main_container">                */}
        //     {/*    <TabPage oemList={itemCarList}/>*/}
        //     {/*</div>*/}
        //
        //     {/*<Modal active={modalActive} setActive={setModalActive} oemList={itemCarList}>*/}
        //     {/*    /!*{children}*!/*/}
        //     {/*</Modal>*/}
        //
        //
        // </>


    );
}

export default App;
