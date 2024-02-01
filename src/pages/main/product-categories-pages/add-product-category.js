import React from 'react'

import {
  InputComp,
  SelectComp,
  ButtonComp,
  CardComp,
  PageHeaderTitle
} from '../../../components/_index'

import {
  IconTableList,
  IconShoppingBag
} from '../../../icons/_index'

const AddProductCategory = () => {

  return (
    <div>
      <CardComp 
      title={
        <PageHeaderTitle 
        icon={<IconTableList classname='text-black'/> }
        title='Create New Product Category'
        />
      } 
      width='mb-3 w-full shadow-xl'>
        <form>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <div class="mt-10 gap-5 grid grid-cols-2">
                <div>
                  <InputComp/>
                </div>

                <div>
                  <InputComp/>
                </div>

                <div >
                  <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                  <SelectComp/>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <ButtonComp/>
          </div>
        </form>
      </CardComp>
    </div>
  )
}

export default AddProductCategory
