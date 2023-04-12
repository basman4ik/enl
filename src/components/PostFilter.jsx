import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/Input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
           <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="Find..."
          />
          <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defValue="sort by"
            options={[
              {value:'title', name:'Name'},
              {value:'body', name:'Desc'},
            ]}   
          /> 
        </div>
    );
};

export default PostFilter;