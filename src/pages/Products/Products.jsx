import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Row,
  Table,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { getProducts } from "../../reducers/Products";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state)=>state.products.products)
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div className="">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center">Products</h1>
          <Divider />
          <Button
            className="my-0 bg-[#FFC83B] active:bg-[#ffc01f!important] hover:bg-[#ffc01f6e!important]"
            type="primary"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            add
          </Button>
            <Divider />
            <div className="flex gap-3">
            {
              products.map(product =><Product img={product.image} price={product.price} name={product.productName} />)
            }
            </div>
        </div>
      </div>
      <Modal
        title="Add product"
        footer={false}
        open={showModal}
        onCancel={() => {
          form.resetFields()
          setShowModal(!showModal)
        }}
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
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[10, 0]}>
            <Col span={20}>
              <Form.Item
                label="productName"
                name="productName"
                rules={[
                  {
                    required: true,
                    message: "Please input CategoryName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="ShortDesc"
                name="shortDesc"
                rules={[
                  {
                    required: true,
                    message: "Please input shortDesc!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="FullDesc"
                name="fullDesc"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullDesc!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="FullDesc"
                name="fullDesc"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullDesc!",
                  },
                ]}
              >
                <Input />
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
      {/* <Modal
        title="Add categories"
        // footer={false}
        // open={EModal}
        onCancel={() =>{ 
          form.resetFields()
          // setEModal(!EModal)
        }}
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
          initialValues={{
            ...idx,
          }}
          onFinish={onFinishE}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[10, 0]}>
            <Col span={20}>
              <Form.Item
                label="CategoryName"
                name="categoryName"
                rules={[
                  {
                    required: true,
                    message: "Please input CategoryName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="ShortDesc"
                name="shortDesc"
                rules={[
                  {
                    required: true,
                    message: "Please input shortDesc!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="FullDesc"
                name="fullDesc"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullDesc!",
                  },
                ]}
              >
                <Input />
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
      </Modal> */}
    </div>
  )
}

export default Products