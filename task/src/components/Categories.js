import React, { useState } from "react";

import "../styles/Categories.css";
import close from "./close.svg";
import drag from "./drag.svg";
import { useDispatch } from "react-redux";
import { savedataaction } from "../store";
const Categorize = (props) => {
  const dispatch = useDispatch();
  const [categoryCount, setCategoryCount] = useState(2);
  const [itemCount, setitemCount] = useState(2);
  const [cat, setCat] = useState([""]);
  const [items, setItem] = useState([""]);
  const [belongsto, setBelongsto] = useState([""]);

  const addnewform = () => {
    dispatch(savedataaction.addnewquestion());
  };
  const handleCategory = (e, i) => {
    let catarr = [...cat];
    catarr[i] = e.target.value;
    setCat(catarr);
    console.log(cat);
  };
  const handleCatSize = () => {
    setCategoryCount(categoryCount + 1);
    setCat([...cat, ""]);
  };
  const handleDeleteCat = (e, i) => {
    const updatedCat = [...cat.slice(0, i), ...cat.slice(i + 1)];
    setCat(updatedCat);
    setCategoryCount(categoryCount - 1);
  };
  const handleItem = (e, i) => {
    let itemarr = [...items];
    itemarr[i] = e.target.value;
    setItem(itemarr);
  };
  const handleItemSize = () => {
    setitemCount(itemCount + 1);
    setItem([...items, ""]);
    setBelongsto([...belongsto, ""]);
  };
  const handleItemDelete = (e, i) => {
    const updatedItem = [...items.slice(0, i), ...items.slice(i + 1)];
    setItem(updatedItem);
    const updatedBelong = [...belongsto.slice(0, i), ...belongsto.slice(i + 1)];
    setBelongsto(updatedBelong);
    console.log(belongsto);
    setitemCount(itemCount - 1);
  };
  const handleBelongsToChange = (e, i) => {
    let updatedBelong = [...belongsto];
    updatedBelong[i] = e.target.value;
    setBelongsto(updatedBelong);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", e.target.value);
    console.log("ritttem", items);
    console.log("cattttt", cat);
    console.log("belogstoooo", updatedBelong);
    dispatch(
      savedataaction.adddata({
        key: props.no,
        items,
        cat,
        updatedBelong,
      })
    );
  };
  // function dragover(ev) {
  //   console.log("dragover");
  //   ev.preventDefault();
  // }
  // console.log("ddddddd", props.data.items);

  const handleItemDragStart = (e, index) => {
    e.dataTransfer.setData("text", index.toString());
  };
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("text"), 10);

    if (!isNaN(draggedIndex) && draggedIndex !== targetIndex) {
      // Swap the content of cat or items arrays
      if (e.target.classList.contains("category__text")) {
        console.log("lllllllllllllll");
        const updatedCat = [...cat];
        [updatedCat[draggedIndex], updatedCat[targetIndex]] = [
          updatedCat[targetIndex],
          updatedCat[draggedIndex],
        ];
        setCat(updatedCat);
      } else if (e.target.classList.contains("item__text")) {
        const updatedItems = [...items];
        console.log("ppppppppppppppppppp");
        [updatedItems[draggedIndex], updatedItems[targetIndex]] = [
          updatedItems[targetIndex],
          updatedItems[draggedIndex],
        ];
        setItem(updatedItems);
      }
    }
  };
  return (
    <div className="position_plus">
      <div className="category__box mt-5">
        <div className="ms-1 mb-4">
          <div className="ms-4 mt-4 question">
            <img alt="" src={drag} className="img mb-1 me-1" />
            CategorizeQuestion {props.no + 1}
          </div>
          <div className="ms-4 mt-3">
            <input
              type="text"
              placeholder="Description"
              className="w-50 category__text"
            />
          </div>
          <div>
            <div className="categories ms-4 mt-4 mb-2 heading">Categories</div>
            <div className="ms-4  mt-3 mb-2">
              {cat.map((item, index) => (
                <div
                  draggable="true"
                  onDragStart={(e) => handleItemDragStart(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  key={index}
                  className="mt-2"
                >
                  <img alt="" src={drag} className="img mb-1 me-1" />
                  <input
                    type="text"
                    placeholder="Category"
                    className="category__text"
                    value={item}
                    onChange={(event) => handleCategory(event, index)}
                  />
                  <img
                    alt=""
                    src={close}
                    className="img ms-1"
                    onClick={(event) => handleDeleteCat(event, index)}
                  ></img>
                </div>
              ))}
              <div
                className="more__catogories mt-2"
                style={{ cursor: "pointer" }}
                onClick={handleCatSize}
              >
                Category{categoryCount} (Optional)
              </div>
            </div>
            <div className="row">
              <div className="Item ms-4 mt-4 heading col-sm-5">Item</div>
              <div className="Item ms-4 mt-4 heading col-sm-5">Belongs To</div>
            </div>
            <div className="row ms-4 mb-4">
              {items.map((item, index) => (
                <div className="row">
                  <div className="col-sm-5 p-0">
                    <div className="mt-3 mb-2">
                      <div
                        draggable="true"
                        onDragStart={(e) => handleItemDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        className="mt-2"
                      >
                        <img alt="" src={drag} className="img mb-1 me-1" />
                        <input
                          type="text"
                          placeholder="Description"
                          className="item__text"
                          value={item}
                          onChange={(event) => handleItem(event, index)}
                        />
                        <img
                          alt=""
                          src={close}
                          className="img ms-1"
                          onClick={(event) => handleItemDelete(event, index)}
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="ms-4  mt-3 mb-2">
                      <div className="mt-2">
                        <select
                          className="select"
                          value={belongsto[index]}
                          onChange={(event) =>
                            handleBelongsToChange(event, index)
                          }
                        >
                          <option value={item}>Choose Category</option>
                          {cat.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="more__catogories mt-2 mb-5"
                onClick={handleItemSize}
              >
                Item{itemCount} (Optional)
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={addnewform}>+</button> */}
      </div>
      <div className="d-flex align-items-center ms-1">
        <div onClick={addnewform} className="add_one_more">
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default Categorize;
