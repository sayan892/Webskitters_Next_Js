'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
// import authenticate from '../Middleware/auth';
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (
    rowIndex: number,
    colIndex: number,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    setSelectedRow(rowIndex);
    setSelectedCol(colIndex);
    setSelectedImage(products[rowIndex].image);
    setOpenModal(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowUp" && selectedRow !== null && selectedRow > 0) {
      setSelectedRow(selectedRow - 1);
      setSelectedImage(products[selectedRow - 1].image);
    } else if (
      event.key === "ArrowDown" &&
      selectedRow !== null &&
      selectedRow < products.length - 1
    ) {
      setSelectedRow(selectedRow + 1);
      setSelectedImage(products[selectedRow + 1].image);
    } else if (
      event.key === "ArrowLeft" &&
      selectedCol !== null &&
      selectedCol > 0
    ) {
      setSelectedCol(selectedCol - 1);
    } else if (
      event.key === "ArrowRight" &&
      selectedCol !== null &&
      selectedCol < 4
    ) {
      setSelectedCol(selectedCol + 1);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        Product Table
      </Typography>

      <TableContainer component={Paper}>
        <Table
          aria-label="product table"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, rowIndex) => (
              <TableRow key={product.id} selected={selectedRow === rowIndex}>
                <TableCell>{product.id}</TableCell>

                <TableCell onClick={(e) => handleClick(rowIndex, 1, e)}>
                  {product.title}
                </TableCell>
                <TableCell onClick={(e) => handleClick(rowIndex, 2, e)}>
                  {product.price}
                </TableCell>
                <TableCell onClick={(e) => handleClick(rowIndex, 3, e)}>
                  {product.description}
                </TableCell>
                <TableCell onClick={(e) => handleClick(rowIndex, 4, e)}>
                  {product.category}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Selected Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Product"
                style={{ width: "500px", height:'500px'  }}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
