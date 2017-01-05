import React from 'react'
import startcase from 'lodash.startcase'

import abbr, { states } from '../util/usa'
import { slugify } from '../util/text'
import StateSvg from './StateSvg'


const usaStates = Object.values(states).map(s => startcase(s))

const LocationFilter = ({ onChange, selected }) => {
  const handleChange = e => onChange({ place: slugify(e.target.value) })
  return (
    <div id='location' className='mb3'>
      <div className='mb2 pb-tiny h5 caps bold border-bottom'>
        Location
      </div>
      <StateSvg size={80} state={abbr(selected)} />
      <select
        className='block col-12 field'
        onChange={handleChange}
        value={startcase(selected)}
      >
        {usaStates.map((s, i) => (
          <option key={i}>{s}</option>
        ))}
      </select>
    </div>
  )
}

LocationFilter.defaultProps = {
  selected: '',
}

export default LocationFilter
