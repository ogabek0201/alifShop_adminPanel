import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Row,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  addUsers,
  getUsers,
} from "../../reducers/Users";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  const loader = useSelector((state) => state.users.loading);
  const columns = [
    {
      title: "FullName",
      dataIndex: "fullName",
      key: "fullName",
      render: (e, row) => {
        return (
          <h1
            className="text-xl font-medium"
          >
            {row.fullName}
          </h1>
        );
      },
    },
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
      render: (e, row) => {
        return (
          <h1
            className="text-2xl font-medium"
          >
            {row.userName}
          </h1>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (e, row) => {
        return (
          <h1
            className="text-xl font-medium"
          >
            {row.phone}
          </h1>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (e, row) => {
        return <p className="text-xl">{row.email}</p>;
      },
    },
    {
      title: "Role",
      dataIndex: "userRoles",
      key: "userRoles",
      render: (e, row) => {
        return <p className="text-xl">{row.userRoles}</p>;
      },
    },
  ];

  const onFinish = (e) => {
    dispatch(addUsers(e));
    setShowModal(false);
    form.resetFields()
    message.success("user added successfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Error");
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if(loader){
    return <Loader/>
  }
  return (
    <div className="">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center">Users</h1>
          <Divider />
          <Button
            className="my-2 bg-[#FFC83B] active:bg-[#ffc01f!important] hover:bg-[#ffc01f6e!important]"
            type="primary"
            onClick={() => {
              setShowModal(!showModal)}}
          >
            add
          </Button>
          <Table className="w-full" dataSource={users} columns={columns} />
        </div>
      </div>
      <Modal
        title="Add users"
        footer={false}
        open={showModal}
        onCancel={() => setShowModal(!showModal)}
      >
        <Form
          className="text-left "
          name="basic"
          labelCol={{
            span: 8,
          }}
          form={form}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[10, 0]}>
            <Col span={20}>
              <Form.Item
                label="fullName"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input fullName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="userName"
                name="userName"
                rules={[
                  {
                    required: true,
                    message: "Please input userName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  {
                    type: "tel",
                    required: true,
                    message: "Please input Last Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button style={{ background: "" }} htmlType="submit">
                  Add
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
