import React, { Component } from 'react';
import { Drawer, Divider } from 'antd';
import {
  MobileOutlined,
  MailOutlined,
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
  render() {
    const { data, visible, close } = this.props;

    return (
      <Drawer width={300} placement="right" onClose={close} closable={false} visible={visible}>
        <div className="text-center mt-3">
          <h3 className="mt-2 mb-0 pb-3">{data?.name}</h3>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
          <p>
            <CalendarOutlined />
            <span className="ml-3 text-dark">Username {data?.username}</span>
          </p>
        </div>
        <Divider dashed />
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Contact</h6>
          <p>
            <MobileOutlined />
            <span className="ml-3 text-dark">{data?.phone}</span>
          </p>
          <p>
            <MailOutlined />
            <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
          </p>
        </div>

        {data?.address && (
          <>
            <Divider dashed />
            <div className="mt-5">
              <h6 className="text-muted text-uppercase mb-3">Placement details</h6>
              <p>
                <HomeOutlined />
                <span className="ml-3 text-dark">
                  Street: {data.address?.street ? data.address.street : '-'}
                </span>
              </p>
              <p>
                <EnvironmentOutlined />
                <span className="ml-3 text-dark">
                  City: {data.address?.city ? data.address.city : '-'}
                </span>
              </p>
            </div>
          </>
        )}
      </Drawer>
    );
  }
}

export default UserView;
