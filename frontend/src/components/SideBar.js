import React, { Fragment } from 'react'
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
  MenuItem,
  Menu,
} from 'react-pro-sidebar'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart, FaGem } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { GiTicket } from 'react-icons/gi'
import { tickets } from '../files/tickets'
import { MdSettings } from 'react-icons/md'

const SideBar = ({ history }) => {
  const areas = [...new Set(tickets.map((ticket) => ticket.area))].sort()

  const areaArray = []
  tickets.forEach((ticket) => areaArray.push(ticket.area))

  function getOccurrence(array, value) {
    var count = 0
    array.forEach((v) => v === value && count++)
    return count
  }
  const ticketCountByArea = []

  areas.forEach((area) => {
    ticketCountByArea.push({
      area,
      count: getOccurrence(areaArray, area),
    })
  })
  return (
    <ProSidebar className='md'>
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
        <Menu iconShape='circle'>
          <MenuItem
            icon={<GoHome />}
            suffix={
              <Badge pill variant='info'>
                NEW
              </Badge>
            }
          >
            Dashboard
          </MenuItem>

          <MenuItem
            icon={<FaGem />}
            suffix={
              <Badge pill variant='info'>
                NEW
              </Badge>
            }
          >
            Control Modules
          </MenuItem>
          <MenuItem
            icon={<MdSettings />}
            suffix={
              <Badge pill variant='info'>
                NEW
              </Badge>
            }
          >
            Settings
          </MenuItem>
        </Menu>
        <hr />
        <Menu iconShape='circle' popperArrow={true}>
          <SubMenu title='Components' icon={<FaHeart />}>
            <MenuItem icon={null}>Component 1</MenuItem>
            <SubMenu title='Sub Component 1' icon={<FaGem />}>
              <SubMenu title='Sub subComponent 1' icon={<FaHeart />}>
                <SubMenu title='Sub subComponent 1' icon={<FaHeart />}>
                  <SubMenu
                    title='Sub subComponent 1'
                    icon={<FaHeart />}
                  ></SubMenu>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
        <Menu iconShape='round'>
          <SubMenu
            title='Tickets'
            icon={<GiTicket />}
            suffix={
              <Badge pill variant='danger'>
                {tickets.length}
              </Badge>
            }
          >
            <Link to='/tickets' />
            {ticketCountByArea.map((area) => (
              <MenuItem
                suffix={
                  <Fragment>
                    <Badge pill variant='danger'>
                      {area.count}
                    </Badge>
                  </Fragment>
                }
              >
                <Link to={`/tickets/${area.area}`} />
                {area.area}
              </MenuItem>
            ))}
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
        <div className='text-center py-3'>Copyright &copy; TetraPak</div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideBar
