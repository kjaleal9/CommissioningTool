import React from 'react';
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
    MenuItem,
    Menu,
} from 'react-pro-sidebar';
import { FaHeart, FaGem } from 'react-icons/fa';

const SideBar = () => {
    return (
        <ProSidebar className='md' >
            <SidebarHeader
                style={{
                    padding: '24px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            >
                Commissioning Tool
                {/**
                 *  You can add a header for the sidebar ex: logo
                 */}
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='square'>
                    <SubMenu title='Components' icon={<FaGem />}>
                        <MenuItem>Component 1</MenuItem>
                        <SubMenu title='Sub Component 1' icon={<FaHeart />}>
                            {/* you can have more nested submenus ... */}
                        </SubMenu>
                    </SubMenu>
                </Menu>
                <Menu iconShape='square'>
                    <SubMenu title='Components' icon={<FaGem />}>
                        <MenuItem>Component 1</MenuItem>
                        <SubMenu title='Sub Component 1' icon={<FaHeart />}>
                            {/* you can have more nested submenus ... */}
                        </SubMenu>
                    </SubMenu>
                </Menu>
                {/**
                 *  You can add the content of the sidebar ex: menu, profile details, ...
                 */}
            </SidebarContent>
            <SidebarFooter>
                {/**
                 *  You can add a footer for the sidebar ex: copyright
                 */}
                <div className='text-center py-3'>
                    Copyright &copy; TetraPak
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;
