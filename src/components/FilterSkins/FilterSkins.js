import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

import './andtInput.scss'
import classes from './FilterSkins.module.css'

const FilterSkins = ({onSearch}) => (
  <div className={classes.FilterSkins}>
    <Input
      onChange={onSearch}
      size='large'
      placeholder='请输入关键字'
      prefix={<SearchOutlined />}
    />
  </div>
)

export default FilterSkins
