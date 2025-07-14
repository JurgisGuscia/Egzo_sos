import React, { useState, useEffect } from "react";
import "./allAnimals.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import AnimalCard from "../../components/animalCard/AnimalCard.jsx";
import PageNumberDisplay from "../../components/pageNumberDisplay/PageNumberDisplay.jsx";
export default function AllAnimals() {
  const [animalArray, setAnimalArray] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArray, setPageArray] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [subDisplay, setSubDisplay] = useState([]);
  const [originalAnimalArray, setOriginalAnimalArray] = useState([]);
  const [filterName, setFilterName] = useState("Numatytasis rikiavimas");

  useEffect(() => {
    fetch(`https://www.egzoticsos.nyxie.lt/getData.php`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAnimalArray(data);
        setOriginalAnimalArray(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    let calcNumberOfPages = Math.ceil(animalArray.length / pageSize);

    if (numberOfPages !== calcNumberOfPages) {
      setNumberOfPages(calcNumberOfPages);
    }

    if (pageArray.length !== numberOfPages - 1) {
      const makePageArray = [];
      for (let i = 1; i <= numberOfPages; i++) {
        makePageArray.push({ page: i });
      }
      if (pageArray.length !== makePageArray.length) {
        setPageArray(makePageArray);
      }
    }

    const quickArr = [];
    const start = (pageNumber - 1) * pageSize;
    let end = start + pageSize - 1;

    if (end >= animalArray.length) {
      end = animalArray.length - 1;
    }

    for (let i = start; i <= end; i++) {
      quickArr.push(animalArray[i]);
    }

    if (quickArr.length > 0) {
      setSubDisplay(quickArr);
    }
  }, [animalArray, pageSize, pageNumber, pageArray, numberOfPages]);

  return (
    <div className="allAnimalsPage">
      <NavBar />
      <div className="allAnimalsHeader">
        <div className="innerWrapper">
          <div className="allAnimalsHeaderLeftSide">
            <h1>Gyvūnai</h1>
            <p>
              Pritaikyti filtrai: <span className="animalFilter">Visi</span>
              <span className="animalFilter">{filterName}</span>
            </p>
          </div>
          <div className="allAnimalsHeaderRightSide">
            <p>Rikiuoti pagal: </p>
            <select
              name="filterInput"
              id="filterInput"
              className="animalFilterInput"
              defaultValue="default"
              onChange={(e) => {
                const sortBy = e.target.value;
                const newArr = [...animalArray];
                switch (sortBy) {
                  case "newest":
                    newArr.sort((a, b) => {
                      return b.date.localeCompare(a.date);
                    });
                    setFilterName("Naujausi viršuje");
                    setAnimalArray(newArr);
                    break;
                  case "category":
                    newArr.sort((a, b) => {
                      return a.category.localeCompare(b.category);
                    });
                    setFilterName("Pagal kategoriją");
                    setAnimalArray(newArr);
                    break;
                  case "mark":
                    newArr.sort((a, b) => {
                      return a.mark.localeCompare(b.mark);
                    });
                    setFilterName("Pagal žymę");
                    setAnimalArray(newArr);
                    break;
                  default:
                    setFilterName("Numatytasis rikiavimas");
                    setAnimalArray(originalAnimalArray);
                }
              }}
            >
              <option value="default">Numatytasis</option>
              <option value="newest">Naujausi viršuje</option>
              <option value="category">Pagal kategoriją</option>
              <option value="mark">Pagal žymę</option>
            </select>
          </div>
        </div>
      </div>
      <div className="animalCardDisplayContainer">
        <div className="innerWrapper">
          {subDisplay.length >= 0 ? (
            subDisplay.map((item) => <AnimalCard key={item.id} animal={item} />)
          ) : (
            <img
              className="loadingScreen"
              src="./img/loading.gif"
              alt="loading"
            ></img>
          )}
        </div>
      </div>
      <div className="pageControlContainer">
        <div className="innerWrapper">
          <span className="totalEntries">
            Iš viso: {animalArray.length}
            {animalArray.length % 10 === 0
              ? " įrašų"
              : animalArray.length % 10 === 1
              ? " įrašas"
              : " įrašai"}
          </span>
          <span className="pagesContainer">
            <div
              className="leftPagesArrow"
              onClick={() => {
                if (pageNumber > 1) {
                  setPageNumber((prev) => prev - 1);
                }
              }}
            >
              <img src="./img/arrow.png" alt="arrow" />
            </div>
            {pageArray.length > 9 ? (
              <>
                <PageNumberDisplay
                  pageNumber={pageNumber}
                  item={1}
                  changePage={setPageNumber}
                />
                {pageNumber - 3 > 1 && (
                  <div className="dotSeparator">
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.88938 18.624C9.34538 18.624 8.88138 18.4373 8.49738 18.064C8.12404 17.68 7.93738 17.216 7.93738 16.672C7.93738 16.1173 8.12404 15.6533 8.49738 15.28C8.88138 14.896 9.34538 14.704 9.88938 14.704C10.444 14.704 10.9134 14.896 11.2974 15.28C11.6814 15.6533 11.8734 16.1173 11.8734 16.672C11.8734 17.216 11.6814 17.68 11.2974 18.064C10.9134 18.4373 10.444 18.624 9.88938 18.624ZM16.4831 18.624C15.9391 18.624 15.4751 18.4373 15.0911 18.064C14.7178 17.68 14.5311 17.216 14.5311 16.672C14.5311 16.1173 14.7178 15.6533 15.0911 15.28C15.4751 14.896 15.9391 14.704 16.4831 14.704C17.0378 14.704 17.5071 14.896 17.8911 15.28C18.2751 15.6533 18.4671 16.1173 18.4671 16.672C18.4671 17.216 18.2751 17.68 17.8911 18.064C17.5071 18.4373 17.0378 18.624 16.4831 18.624ZM23.0769 18.624C22.5329 18.624 22.0689 18.4373 21.6849 18.064C21.3115 17.68 21.1249 17.216 21.1249 16.672C21.1249 16.1173 21.3115 15.6533 21.6849 15.28C22.0689 14.896 22.5329 14.704 23.0769 14.704C23.6315 14.704 24.1009 14.896 24.4849 15.28C24.8689 15.6533 25.0609 16.1173 25.0609 16.672C25.0609 17.216 24.8689 17.68 24.4849 18.064C24.1009 18.4373 23.6315 18.624 23.0769 18.624Z"
                        fill="#9F9193"
                      />
                    </svg>
                  </div>
                )}
                {pageNumber - 2 > 1 && (
                  <PageNumberDisplay
                    pageNumber={pageNumber}
                    item={pageNumber - 2}
                    changePage={setPageNumber}
                  />
                )}
                {pageNumber - 1 > 1 && (
                  <PageNumberDisplay
                    pageNumber={pageNumber}
                    item={pageNumber - 1}
                    changePage={setPageNumber}
                  />
                )}
                {pageNumber !== 1 && pageNumber !== pageArray.length && (
                  <PageNumberDisplay
                    pageNumber={pageNumber}
                    item={pageNumber}
                    changePage={setPageNumber}
                  />
                )}
                {pageNumber + 1 < pageArray.length && (
                  <PageNumberDisplay
                    pageNumber={pageNumber}
                    item={pageNumber + 1}
                    changePage={setPageNumber}
                  />
                )}
                {pageNumber + 2 < pageArray.length && (
                  <PageNumberDisplay
                    pageNumber={pageNumber}
                    item={pageNumber + 2}
                    changePage={setPageNumber}
                  />
                )}
                {pageNumber + 3 < pageArray.length && (
                  <div className="dotSeparator">
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.88938 18.624C9.34538 18.624 8.88138 18.4373 8.49738 18.064C8.12404 17.68 7.93738 17.216 7.93738 16.672C7.93738 16.1173 8.12404 15.6533 8.49738 15.28C8.88138 14.896 9.34538 14.704 9.88938 14.704C10.444 14.704 10.9134 14.896 11.2974 15.28C11.6814 15.6533 11.8734 16.1173 11.8734 16.672C11.8734 17.216 11.6814 17.68 11.2974 18.064C10.9134 18.4373 10.444 18.624 9.88938 18.624ZM16.4831 18.624C15.9391 18.624 15.4751 18.4373 15.0911 18.064C14.7178 17.68 14.5311 17.216 14.5311 16.672C14.5311 16.1173 14.7178 15.6533 15.0911 15.28C15.4751 14.896 15.9391 14.704 16.4831 14.704C17.0378 14.704 17.5071 14.896 17.8911 15.28C18.2751 15.6533 18.4671 16.1173 18.4671 16.672C18.4671 17.216 18.2751 17.68 17.8911 18.064C17.5071 18.4373 17.0378 18.624 16.4831 18.624ZM23.0769 18.624C22.5329 18.624 22.0689 18.4373 21.6849 18.064C21.3115 17.68 21.1249 17.216 21.1249 16.672C21.1249 16.1173 21.3115 15.6533 21.6849 15.28C22.0689 14.896 22.5329 14.704 23.0769 14.704C23.6315 14.704 24.1009 14.896 24.4849 15.28C24.8689 15.6533 25.0609 16.1173 25.0609 16.672C25.0609 17.216 24.8689 17.68 24.4849 18.064C24.1009 18.4373 23.6315 18.624 23.0769 18.624Z"
                        fill="#9F9193"
                      />
                    </svg>
                  </div>
                )}
                <PageNumberDisplay
                  pageNumber={pageNumber}
                  item={pageArray.length}
                  changePage={setPageNumber}
                />
              </>
            ) : pageArray.length > 0 ? (
              pageArray.map((item) => (
                <PageNumberDisplay
                  pageNumber={pageNumber}
                  item={item.page}
                  changePage={setPageNumber}
                />
              ))
            ) : (
              <PageNumberDisplay
                pageNumber={1}
                item={1}
                changePage={setPageNumber}
              />
            )}
            <div
              className="rightPagesArrow"
              onClick={() => {
                if (pageNumber < numberOfPages) {
                  setPageNumber((prev) => prev + 1);
                }
              }}
            >
              <img src="./img/arrow.png" alt="arrow" />
            </div>
          </span>
          <span className="selectPageSizeInput">
            <select
              name="pageSizeInput"
              id="pageSizeInput"
              className="animalFilterInput"
              defaultValue="12"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageNumber(1);
              }}
            >
              <option value="12">12 įrašų puslapyje</option>
              <option value="24">24 įrašai psulapyje</option>
              <option value="48">48 įrašai puslapyje</option>
            </select>
          </span>
          <span className="jumpToPageContainer">
            Eiti į
            <input
              type="number"
              className="jumpToPageNumberInput"
              id="jumpToPageNumberInput"
              name="jumpToPageNumberInput"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  const targetPage = Number(e.target.value);
                  if (targetPage < 1) {
                    setPageNumber(1);
                    e.target.value = "";
                  } else if (targetPage > numberOfPages) {
                    setPageNumber(numberOfPages);
                    e.target.value = "";
                  } else {
                    setPageNumber(targetPage);
                    e.target.value = "";
                  }
                }
              }}
            ></input>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
