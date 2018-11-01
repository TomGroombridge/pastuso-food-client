import * as React from 'react'

const SideNav = () => {
  return(
    <nav className="panel">
      <p className="panel-heading">
        Filter Recipes
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input is-small" type="text" placeholder="search"/>
          <span className="icon is-small is-left">
            <i className="fas fa-search" aria-hidden="true"/>
          </span>
        </p>
      </div>
      <label className="panel-block">
        <input type="checkbox"/>
        Freezable
      </label>
      <label className="panel-block">
        <input type="checkbox"/>
        Cheap Eats
      </label>
      <label className="panel-block">
        <input type="checkbox"/>
        Winter Warmers
      </label>
      <label className="panel-block">
        <input type="checkbox"/>
        Healthy
      </label>
      <label className="panel-block">
        <input type="checkbox"/>
        Dinner Party
      </label>
      <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth">
          reset all filters
        </button>
      </div>
    </nav>
  )
}

export default SideNav;