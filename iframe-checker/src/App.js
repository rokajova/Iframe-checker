import React, { useState } from "react";
import "./App.css";

function App() {
  const [iframeLink, setIframeLink] = useState();
  const [checkIframe, setCheckIframe] = useState();

  // Check is string is an URL
  function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  // let link;
  // if (!checkIframe.slice(0, 4).includes("http")) {
  //   link = "https://" + checkIframe;
  // } else {
  //   link = checkIframe;
  // }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a link to check..."
        autoFocus
        required
        value={iframeLink}
        onChange={(e) => setIframeLink(e.target.value)}
      />
      <button onClick={() => setCheckIframe(iframeLink)}>CHECK</button>

      <iframe src={checkIframe} />
    </div>
  );
}

export default App;
