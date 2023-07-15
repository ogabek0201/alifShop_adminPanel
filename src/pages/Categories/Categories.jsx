import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  message,
  Modal,
  Popconfirm,
  Row,
  Table,
  Tabs,
  Upload,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  deleteCategories,
  editCategories,
  getCategories,
} from "../../reducers/Categories";
import Loader from "../../components/Loader/Loader";
import { UploadOutlined } from "@mui/icons-material";
const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const [EModal, setEModal] = useState(false);
  const [idx, setIdx] = useState({});
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (e, row) => {
        return <h1 className="text-xl font-medium">{row.id}</h1>;
      },
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      render: (e, row) => {
        // return <h1 className="text-xl font-medium">{row.image}</h1>;
        // return <img src={`http://188.212.125.226:7001/Uploads/${row.image}`} alt={row.img} />
        return (
          <Image
            src={`http://188.212.125.226:7001/Uploads/${row.image}`}
            className="rounded-full w-6"
            width={60}
          />
        );
      },
    },
    {
      title: "CategoryName",
      dataIndex: "categoryName.ru",
      key: "categoryName.ru",
      render: (e, row) => {
        return <h1 className="text-2xl font-medium">{row.categoryName.ru}</h1>;
      },
    },
    {
      title: "ShortDesc",
      dataIndex: "shortDesc",
      key: "shortDesc",
      render: (e, row) => {
        return <h1 className="text-xl font-medium">{row.shortDesc.ru}</h1>;
      },
    },
    {
      title: "FullDesc",
      dataIndex: "fullDesc",
      key: "fullDesc",
      render: (e, row) => {
        return <p className="text-xl w-[300px]">{row.fullDesc.ru}</p>;
      },
    },
    {
      title: "ProductsCount",
      dataIndex: "productsCount",
      key: "productsCount",
      render: (e, row) => {
        return <p className="text-xl">{row.productsCount}</p>;
      },
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: (e, row) => {
        return (
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setEModal(!EModal);
                // row.image=''
                console.log(row);
                setIdx(row);
              }}
            >
              edit
            </Button>

            <Popconfirm
              title="Delete the user"
              description="Are you sure to delete this category?"
              onConfirm={() => {
                dispatch(deleteCategories(row.id));
              }}
              onCancel={() => console.log(55)}
              okText="Delete"
              okType="default"
              cancelText="No"
            >
              <Button>Delete</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const items = [
    {
      icon: "https://demiart.ru/forum/uploads13/post-2604411-1375804306.jpg",
      name: "En",
      key: 1,
      children: () => {
        return (
          <Form.Item
            name="categoryNameEn"
            rules={[
              {
                required: true,
                message: "Please input CategoryNameEn!",
              },
            ]}
          >
            <Input placeholder="En" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614846271_41-p-fon-flag-rossii-46.jpg",
      name: "Ru",
      key: 2,
      children: () => {
        return (
          <Form.Item
            name="categoryNameRu"
            rules={[
              {
                required: true,
                message: "Please input CategoryNameRu!",
              },
            ]}
          >
            <Input placeholder="Ru" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://melodia.space/wp-content/uploads/2020/12/tadzhikistana.jpg",
      name: "Tj",
      key: 3,
      children: () => {
        return (
          <Form.Item
            name="categoryNameTj"
            rules={[
              {
                required: true,
                message: "Please input CategoryNameTj!",
              },
            ]}
          >
            <Input placeholder="Tj" />
          </Form.Item>
        );
      },
    },
  ];
  const items2 = [
    {
      icon: "https://demiart.ru/forum/uploads13/post-2604411-1375804306.jpg",
      name: "En",
      key: 1,
      children: () => {
        return (
          <Form.Item
            name="shortDescEn"
            rules={[
              {
                required: true,
                message: "Please input shortDescEn!",
              },
            ]}
          >
            <Input placeholder="En" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614846271_41-p-fon-flag-rossii-46.jpg",
      name: "Ru",
      key: 2,
      children: () => {
        return (
          <Form.Item
            name="shortDescRu"
            rules={[
              {
                required: true,
                message: "Please input shortDescRu!",
              },
            ]}
          >
            <Input placeholder="Ru" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://melodia.space/wp-content/uploads/2020/12/tadzhikistana.jpg",
      name: "Tj",
      key: 3,
      children: () => {
        return (
          <Form.Item
            name="shortDescTj"
            rules={[
              {
                required: true,
                message: "Please input shortDescTj!",
              },
            ]}
          >
            <Input placeholder="Tj" />
          </Form.Item>
        );
      },
    },
  ];
  const items3 = [
    {
      icon: "https://demiart.ru/forum/uploads13/post-2604411-1375804306.jpg",
      name: "En",
      key: 1,
      children: () => {
        return (
          <Form.Item
            name="fullDescEn"
            rules={[
              {
                required: true,
                message: "Please input fullDescEn!",
              },
            ]}
          >
            <Input placeholder="En" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614846271_41-p-fon-flag-rossii-46.jpg",
      name: "Ru",
      key: 2,
      children: () => {
        return (
          <Form.Item
            name="fullDescRu"
            rules={[
              {
                required: true,
                message: "Please input fullDescRu!",
              },
            ]}
          >
            <Input placeholder="Ru" />
          </Form.Item>
        );
      },
    },
    {
      icon: "https://melodia.space/wp-content/uploads/2020/12/tadzhikistana.jpg",
      name: "Tj",
      key: 3,
      children: () => {
        return (
          <Form.Item
            name="fullDescTj"
            rules={[
              {
                required: true,
                message: "Please input fullDescTj!",
              },
            ]}
          >
            <Input placeholder="Tj" />
          </Form.Item>
        );
      },
    },
  ];

  const onFinish = (e) => {
    const formData = new FormData();
    formData.append("image", e.image.file.originFileObj);
    formData.append("categoryName.en", e.categoryNameEn);
    formData.append("categoryName.ru", e.categoryNameRu);
    formData.append("categoryName.tj", e.categoryNameTj);
    formData.append("shortDesc.en", e.shortDescEn);
    formData.append("shortDesc.ru", e.shortDescRu);
    formData.append("shortDesc.tj", e.shortDescTj);
    formData.append("fullDesc.en", e.fullDescEn);
    formData.append("fullDesc.ru", e.fullDescRu);
    formData.append("fullDesc.tj", e.fullDescTj);
    dispatch(addCategories(formData));
    setImage("");
    setShowModal(false);
    form.resetFields();
  };
  const onFinishE = (e) => {
    e.id = idx.id;
    const formData = new FormData();
    formData.append("id", idx.id);
    formData.append("image", e.image.file.originFileObj);
    formData.append("categoryName.en", e.categoryNameEn);
    formData.append("categoryName.ru", e.categoryNameRu);
    formData.append("categoryName.tj", e.categoryNameTj);
    formData.append("shortDesc.en", e.shortDescEn);
    formData.append("shortDesc.ru", e.shortDescRu);
    formData.append("shortDesc.tj", e.shortDescTj);
    formData.append("fullDesc.en", e.fullDescEn);
    formData.append("fullDesc.ru", e.fullDescRu);
    formData.append("fullDesc.tj", e.fullDescTj);
    dispatch(editCategories(formData));
    setImage("");
    setEModal(false);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Error");
    form.resetFields();
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center">Categories</h1>
          <Divider />
          <Button
            className="my-2 bg-[#FFC83B] active:bg-[#ffc01f!important] hover:bg-[#ffc01f6e!important]"
            type="primary"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            add
          </Button>
          <Table
            className="w-full"
            pagination={{
              pageSize: 5,
            }}
            dataSource={categories}
            columns={columns}
          />
        </div>
      </div>
      <Modal
        title="Add categories"
        footer={false}
        open={showModal}
        onCancel={() => {
          form.resetFields();
          setShowModal(!showModal);
        }}
      >
        <Form
          className=""
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
              <Divider dashed>Image</Divider>
              <Form.Item
                name="image"
                className="text-center"
                rules={[
                  {
                    required: true,
                    message: "Please upload Image!",
                  },
                ]}
              >
                <Upload customRequest={(a,b)=>console.log(a)}  >
                  <Button icon={<UploadOutlined />} >Click to Upload Image</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={20}>
              <Divider dashed>CategoryName</Divider>
              <Tabs
                centered={true}
                className="justify-center"
                defaultActiveKey="1"
                items={items.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={20}>
              <Divider dashed>ShortDesc</Divider>
              <Tabs
                centered={true}
                defaultActiveKey="1"
                items={items2.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={20}>
              <Divider dashed>FullDesc</Divider>
              <Tabs
                centered={true}
                defaultActiveKey="1"
                items={items3.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  offset: 10,
                  span: 16,
                }}
              >
                <Button htmlType="submit">Add</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Modal
        title="Add categories"
        footer={false}
        open={EModal}
        onCancel={() => {
          form.resetFields();
          setEModal(!EModal);
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
            categoryNameEn: idx?.categoryName?.en,
            categoryNameRu: idx?.categoryName?.ru,
            categoryNameTj: idx?.categoryName?.tj,
            shortDescEn: idx?.shortDesc?.en,
            shortDescRu: idx?.shortDesc?.ru,
            shortDescTj: idx?.shortDesc?.tj,
            fullDescEn: idx?.fullDesc?.en,
            fullDescRu: idx?.fullDesc?.ru,
            fullDescTj: idx?.fullDesc?.tj,
          }}
          onFinish={onFinishE}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[10, 0]}>
            <Col span={20}>
              <Divider dashed>Image</Divider>
              <Form.Item
                name="image"
                className="text-center"
                rules={[
                  {
                    required: true,
                    message: "Please upload Image!",
                  },
                ]}
              >
                <Upload customRequest={(a,b)=>console.log(a)}  >
                  <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={20}>
              <Divider dashed>CategoryName</Divider>
              <Tabs
                centered={true}
                className="justify-center"
                defaultActiveKey="1"
                items={items.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={20}>
              <Divider dashed>ShortDesc</Divider>
              <Tabs
                centered={true}
                className="justify-center"
                defaultActiveKey="1"
                items={items2.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={20}>
              <Divider dashed>FullDesc</Divider>
              <Tabs
                centered={true}
                defaultActiveKey="1"
                items={items3.map((flag) => {
                  return {
                    label: (
                      <span className="flex gap-3 text-lg">
                        <img src={flag.icon} alt={flag.name} width={40} />
                        {flag.name}
                      </span>
                    ),
                    key: flag.key,
                    children: flag.children(),
                  };
                })}
              />
            </Col>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  offset: 10,
                  span: 16,
                }}
              >
                <Button htmlType="submit">Edit</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Categories;
