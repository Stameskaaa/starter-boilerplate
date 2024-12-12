import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';

class EditProfile extends Component {
  formRef = React.createRef();
  avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
  state = {
    avatarUrl: '/img/avatars/thumb-6.jpg',
    name: 'Charlie Howard',
    email: 'charlie.howard@themenate.com',
    userName: 'Charlie',
    nameOfCompany: null,
    phoneNumber: '+44 (1532) 135 7921',
    website: '',
    address: '',
    city: '',
    postcode: '',
  };

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  componentDidMount() {
    if (this.props.location.state) {
      const historyState = this.props.location.state.state.user;
      const userData = {
        name: historyState.name,
        userName: historyState.username,
        email: historyState.email,
        nameOfCompany: historyState.company.name,
        phoneNumber: historyState.phone,
        website: historyState.website,
        address: `${historyState.address.street} ${historyState.address.suite}`,
        city: historyState.address.city,
      };

      this.formRef.current.setFieldsValue(userData);
      this.setState(userData);
    }
  }

  render() {
    const onFinish = (values) => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          userName: values.userName,
          nameOfCompany: values.nameOfCompany,
          phoneNumber: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        });
        message.success({ content: 'Done!', key, duration: 2 });
        this.props.history.push('/home/main/clients/list');
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const onUploadAavater = (info) => {
      const key = 'updatable';
      if (info.file.status === 'uploading') {
        message.loading({ content: 'Uploading...', key, duration: 1000 });
        return;
      }
      if (info.file.status === 'done') {
        this.getBase64(info.file.originFileObj, (imageUrl) =>
          this.setState({
            avatarUrl: imageUrl,
          }),
        );
        message.success({ content: 'Uploaded!', key, duration: 1.5 });
      }
    };

    const onRemoveAvater = () => {
      this.setState({
        avatarUrl: '',
      });
    };

    const {
      name,
      email,
      userName,
      nameOfCompany,
      phoneNumber,
      website,
      address,
      city,
      postcode,
      avatarUrl,
    } = this.state;

    return (
      <>
        <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
          <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
          <div className="ml-md-3 mt-md-0 mt-3">
            <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
              <Button type="primary">Change Avatar</Button>
            </Upload>
            <Button className="ml-2" onClick={onRemoveAvater}>
              Remove
            </Button>
          </div>
        </Flex>
        <div className="mt-4">
          <Form
            ref={this.formRef}
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: this.state.name,
              email: email,
              username: userName,
              nameOfCompany: nameOfCompany,
              phoneNumber: phoneNumber,
              website: website,
              address: address,
              city: city,
              postcode: postcode,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: 'email',
                          message: 'Please enter a valid email!',
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Name of Company" name="nameOfCompany">
                      <Input className="w-100" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phoneNumber">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Address" name="address">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Post code" name="postcode">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

export default EditProfile;
