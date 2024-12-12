import React, { Component } from 'react';
import { Card, Table, message } from 'antd';
import UserView from './UserView';
import fetchUsers from 'services/apiService';
import Loading from 'components/shared-components/Loading';

function compareStrings(str1, str2) {
  return str1.toLowerCase().localeCompare(str2.toLowerCase());
}

export class UserList extends Component {
  state = {
    loading: true,
    error: null,
    users: [],
    userProfileVisible: false,
    selectedUser: null,
  };

  async componentDidMount() {
    fetchUsers()
      .then((data) => this.setState({ users: [...data] }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser, loading, error } = this.state;

    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => <div className="text-primary">{record.name}</div>,
        sorter: (a, b) => compareStrings(a.name, b.name),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        render: (_, record) => <div>{record.email}</div>,
        sorter: (a, b) => compareStrings(a.email, b.email),
      },
      {
        title: 'City',
        dataIndex: 'address.city',
        render: (_, record) => <div>{record.address.city}</div>,
        sorter: (a, b) => compareStrings(a.address.city, b.address.city),
      },
      {
        title: 'Company Name',
        dataIndex: 'company.name',
        render: (_, record) => <div>{record.company.name}</div>,
        sorter: (a, b) => compareStrings(a.company.name, b.company.name),
      },
    ];

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div>Some error . . .</div>;
    }

    return (
      <Card bodyStyle={{ padding: '10px' }}>
        <Table
          onRow={(record) => ({
            onClick: () =>
              this.props.history.push('/home/main/clients/list/edit', {
                state: { user: record },
              }),
          })}
          pagination={true}
          columns={tableColumns}
          dataSource={users}
          rowKey="id"
        />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default UserList;
