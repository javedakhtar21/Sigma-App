import React from 'react'
import HotProducts from '../Components/HotProducts';
import data from '../Data/hotProducts'
const AllProducts = () => {
  return (
    <div>
        <div>
            <HotProducts data={data} itemsPerPage={6}/>
        </div>
    </div>
  )
}

export default AllProducts;