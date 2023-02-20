import { useState, useEffect, useDeferredValue } from "react";
import { Button } from "./Button";
import { MemoSearch } from "./MemoSearch";

export function SendForm() {
  const [info, setInfo] = useState([]);

  const inputError = () => {
    const inputURL = document.getElementById("url");
    inputURL.classList.replace("input", "input--error");
    document.getElementById('massageError').classList.replace('inputError--none','inputError');
  };

  function getLocalStorage() {
    const localStorageInfo = JSON.parse(localStorage.getItem("Info"));
    if (localStorageInfo != null) {
      setInfo(localStorageInfo);
    }
  }

  function saveData(data) {
    if (!data.result) {
      return;
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
      document.getElementById('massageError').classList.replace('inputError','inputError--none');
      document.getElementById('url').classList.replace('input--error','input');
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
      inputError();
    }
    event.target.reset();
  }

  function validateURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      inputError();
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
        <div className="inputError--none" id="massageError">Please add a link</div>
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
