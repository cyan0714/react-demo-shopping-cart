import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

import './andtInput.scss'
import classes from './FilterSearch.module.css'

const FilterSearch = ({onSearch}) => (
  <div className={classes.FilterSearch}>
    <Input
      className={classes.FSInput}
      onChange={onSearch}
      size='large'
      placeholder='请输入关键字'
      prefix={<SearchOutlined />}
    />
  </div>
)

export default FilterSearch
