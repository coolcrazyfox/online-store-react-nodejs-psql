import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, authRoutes} from "../routes";
export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/register',
    NEW_PASSWORD: '/set-new-password',
    FORGOT: '/forgot',
    SHOP: '/shop',
    EDIT_PROFILE: '/edit-profile',
    PACKS: '/packs',
    CARDS: '/cards',
    LEARN: '/learn'
}

const AppRouter = () => {
    const isAuth = false
    return (

        <Routes>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={PATH.LOGIN} element={<Auth/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.FORGOT} element={<Forgot/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.EDIT_PROFILE} element={<EditProfile/>}/>
                <Route path={PATH.PACKS} element={<PackList/>}/>
                <Route path={PATH.CARDS + '/:packId'} element={<CardsList/>}/>
                <Route path={PATH.LEARN + '/:packId/:packName/:cardsTotalCount'} element={<Learn/>} />
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
            {/*{isAuth && authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component}/>*/}
            {/*)*/}
            {/*}*/}

            {/*{publicRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component}/>*/}
            {/*)*/}
            {/*}*/}

        </Routes>
    );
};

export default AppRouter;
