import { useState, useEffect } from "react";
import { Button } from "./Button";
import { MemoSearch } from "./MemoSearch";

export function SendForm() {
  const [info, setInfo] = useState([]);

  const inputError  = () => {
    document.querySelector(input => {
        input.classList.replace('input', 'input--error')
    })
  }

  function getLocalStorage() {
    const localStorageInfo = JSON.parse(localStorage.getItem("Info"));
    if (localStorageInfo != null) {
      setInfo(localStorageInfo);
    }
  }

  function saveData(data) {

    if(!data.result) {
        return
    }

    const urlInfo = {
      shortLink: data.result?.full_short_link,
      originalLink: data.result?.original_link,
    };

    // Recuperar localStorageInfo
    let localStorageInfo = JSON.parse(localStorage.getItem("Info")) || [];

    // Hacer un push con mi nuevo objeto
    localStorageInfo.push(urlInfo);
    // Seteo estado, seteo LocalStorages
    localStorage.setItem("Info", JSON.stringify(localStorageInfo));
    setInfo(localStorageInfo);
  }

  function callApi(event) {
    event.preventDefault();
    const url = event.target.url.value;
    console.log(url);
    if (validateURL(url) === true && url) {
      console.log("url:", url);
      //call api
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((res) => res.json())
        //get data
        .then((data) => {
          console.log("Data URL: ", data);
          //save data into an objet
          saveData(data);
        });
    } else {
      inputError()
    }
    event.target.reset();
  }

  function validateURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
        
      return false;
    }
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <section className="sendform" id="sendform">
        <form onSubmit={callApi}>
          <input
            className="input"
            type="url"
            id="url"
            placeholder="Shorten a link here..."
          ></input>
          <Button
            text="Shorten It!"
            value="shorten"
            type="onSubmit"
            className="button--action"
          />
        </form>
      </section>
      <section className="memosearch__wrapper">
        {info &&
          info.map((element, index) => {
            return (
              <MemoSearch
                key={index}
                originalLink={element.originalLink}
                shortLink={element.shortLink}
              />
            );
          })}
      </section>
    </>
  );
}
