import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

import './andtInput.scss'
import classes from './FilterSkins.module.css'

const FilterSkins = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const inputChangeHandle = (e) => {
    setKeyword(e.target.value.trim());
  }
  useEffect(() => {
    onSearch(keyword)
  }, [keyword])
  return (
    <div className={classes.FilterSkins}>
      <Input
        value={keyword}
        onChange={inputChangeHandle}
        size='large'
        placeholder='请输入关键字'
        prefix={<SearchOutlined />}
      />
    </div>
  ) 
}

export default FilterSkins
