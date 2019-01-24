import React from "react";
import { Form } from "semantic-ui-react";

const SearchForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Search products</label>
        <input onChange={props.searchInput} placeholder="Stuff" />
      </Form.Field>
    </Form>
  );
};

export default SearchForm;
