import axios from "axios";
import React from "react";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID CVh6AJFiZP7XaOTRszGHWSlFbSDq_fHfJe_ZAtpEmls",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitting={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
