import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}


// const switchLinkActive = (isActive: boolean) => {
//     return (
//         isActive ? 'active-link' : ''
//     )
// }

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? 'hidden' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>


                {/*<NavLink end className={({isActive}) => switchLinkActive(isActive)} to="/">Home</NavLink>*/}
                {/*<NavLink className={({isActive}) => switchLinkActive(isActive)} to="/posts">Blog</NavLink>*/}
                {/*<NavLink className={({isActive}) => switchLinkActive(isActive)} to="/about">About</NavLink>*/}

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        end
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''} // делает студент
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''}
                        // className={...} // делает студент
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.active : ''}
                        // className={...} // делает студент
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
