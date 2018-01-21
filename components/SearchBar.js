// @flow
import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

type Props = {
  userList: Array<Object>,
  onUpdateInput: Function,
  onSelectUser: Function
}

const SearchBar = ({ userList, onUpdateInput, onSelectUser } : Props) => (
  <div className="search-bar">
    <AutoComplete
      hintText="Search GitHub user by name"
      dataSource={userList}
      onUpdateInput={onUpdateInput}
      floatingLabelText="Search user"
      fullWidth={true}
      maxSearchResults={20}
      onNewRequest={onSelectUser}
      id="searchGithubUser" // fix "Warning: Prop `htmlFor` did not match" - https://github.com/mui-org/material-ui/issues/9033
    />
  </div>
)

export default SearchBar

