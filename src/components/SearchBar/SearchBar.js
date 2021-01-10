import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const searchBar = props => {
    return(
    <InputGroup className="mt-4 mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text><FontAwesomeIcon icon={"search"} /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        placeholder="Search for a movie to nominate"
        aria-label="Search movie"
        aria-describedby="basic-addon2"
        onChange={e => props.handleSearch(e.target.value)}
        />
  </InputGroup>
    )}

export default searchBar;