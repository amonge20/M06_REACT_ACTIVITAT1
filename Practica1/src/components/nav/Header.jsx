import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key="/" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="/register" icon={<UserOutlined />}><Link to="/register">Register</Link></Menu.Item>
        <Menu.Item key="/login" icon={<LoginOutlined />}><Link to="/login">Login</Link></Menu.Item>
    </Menu>
  )
};

export default Header;
