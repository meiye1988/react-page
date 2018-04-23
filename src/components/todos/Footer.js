import React from 'react'
import FilterLink from './containers/FilterLink'
import { VisibilityFilters } from './actions'

const Footer = () => (
  <div>
    <span>操作: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      全部
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      显示无中线
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      显示有中线
    </FilterLink>
  </div>
)

export default Footer