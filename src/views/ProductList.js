import React, { useState } from "react";
import { Card, CardHeader, Container, Button, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Modal from "components/shared/Modal";
import InputField from "components/shared/InputField";
import isEmpty from "components/Utils/validationUtils";
import Tables from "components/shared/Tables";
import textField from "components/Utils/textField";
let initialProductDetails = {
  productName: "",
  price: "",
  description: "",
};
const ProductList = () => {
  const [productInfo, setProductInfo] = useState(initialProductDetails);
  const [productsList, setProductsList] = useState([]);
  const [productShowModal, setProductShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState("");
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  //Delete product modal show

  const addModal = () => {
    return (
      <>
        <InputField
          type="text"
          value={productInfo.productName}
          placeholder="Product Name"
          label="Name*"
          name="name"
          onChange={(e) =>
            setProductInfo({ ...productInfo, productName: e.target.value })
          }
        />
        <InputField
          type="text"
          value={productInfo.price}
          placeholder="Price"
          label="Price*"
          name="price"
          onChange={(e) =>{
            if(textField(e.target.value)){
              setProductInfo({ ...productInfo, price: e.target.value})
            }
          }
           
          }
        />
        <InputField
          type="text"
          value={productInfo.description}
          placeholder="Description"
          label="Description*"
          name="description"
          onChange={(e) =>
            setProductInfo({ ...productInfo, description: e.target.value })
          }
        />
        <Button
          color="primary"
          type="button"
          onClick={() => {
            !editProduct ? addProductToList() : editProductList();
          }}
        >
          {!editProduct ? "Add" : "Save"}
        </Button>
        <Button
          onClick={() => {
            setEditProduct(false);
            setProductShowModal(false);
            setProductInfo(initialProductDetails);
          }}
          color="secondary"
          type="button"
        >
          Cancel
        </Button>
      </>
    );
  };

//Delete product modal show
  const deleteModal = () => {
    return (
      <>
        <div className="text-center text-muted mb-4">
          <h3>Are you sure you want to delete the Product ?</h3>
          <p>By clicking Delete the product will be deleted from the inventory</p>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              deleteSelectedRow()
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
             setDeleteShowModal(false)
            }}
            color="secondary"
            type="button"
          >
            Cancel
          </Button>
        </div>
      </>
    );
  };
  //Delete product modal show

  //Add Product to inventory
  const addProductToList = () => {
    if (isEmpty(productInfo.productName)) {
      alert("Please enter the product name");
      return false;
    }
    if (isEmpty(productInfo.price)) {
      alert("Please enter the product price");
      return false;
    }
    if (isEmpty(productInfo.description)) {
      alert("Please enter the product description");
      return false;
    } else {
      let productId = new Date().getTime();
      let productDetails = {
        id: productId,
        ...productInfo,
      };
      setProductsList([...productsList, productDetails]);
      setProductShowModal(false);
      setProductInfo(initialProductDetails);
    }
  };
  //Add Product to inventory

  //Edit Product to inventory
  const editProductList = () => {
    if (isEmpty(productInfo.productName)) {
      alert("Please enter the product name");
      return false;
    }
    if (isEmpty(productInfo.price)) {
      alert("Please enter the product price");
      return false;
    }
    if (isEmpty(productInfo.description)) {
      alert("Please enter the product description");
      return false;
    } else {
      let editProduct = productsList.map((items) => {
        if (selectedRowId === items.id) {
          return { ...items, ...productInfo};
        }
        return items;
      });
      setProductsList(editProduct);
      setEditProduct(false);
      setProductInfo(initialProductDetails);
      setProductShowModal(false);
    }
  };
  //Edit Product to inventory

  //Delete Product from inventory
  const deleteSelectedRow = () => {
    let deleteProduct = productsList.filter((items) => {
      return items.id !== selectedRowId;
    });
    setProductsList(deleteProduct);
    setDeleteShowModal(false)
    setSelectedRowId('')
  };
  //Delete Product from inventory

  //Show the product listing
  const renderProductList = () => {
    if (productsList.length > 0) {
      return (
        <Tables
          handleClose={() => {
            setProductShowModal(false);
            setProductInfo(initialProductDetails);
          }}
          tableData={productsList}
          editData={(editSelectedRow, selectRowId) => {
            setEditProduct(true);
            setProductShowModal(true);
            setProductInfo(editSelectedRow);
            setSelectedRowId(selectRowId);
          }}
          deleteData={(rowId) => {setSelectedRowId(rowId);setDeleteShowModal(true)}}
        />
      );
    } else {
      return (
        <div className="text-center pb-3">
          <h2>No Products found</h2>
          <Button
            color="primary"
            type="button"
            onClick={() => setProductShowModal(true)}
          >
            Add Product
          </Button>
        </div>
      );
    }
  };
  //Show the product listing
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Add product modal */}
        <Modal
          show={productShowModal}
          modalUI={addModal()}
          title="Add Product"
          handleClose={() => setProductShowModal(false)}
        />
        {/* Add product modal */}

        {/* Delete product modal */}
        <Modal
          show={deleteShowModal}
          modalUI={deleteModal()}
          title="Delete Product"
          handleClose={() => setDeleteShowModal(false)}
        />
        {/* Delete product modal */}

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Product List</h3>
                <Button
                  color="primary"
                  type="button"
                  onClick={() => setProductShowModal(true)}
                >
                  Add Product
                </Button>
              </CardHeader>
              {renderProductList()}
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default ProductList;
